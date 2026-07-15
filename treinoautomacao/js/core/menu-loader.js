(function () {
  "use strict";

  var MENU_PATH = "partials/main-menu.html";
  var ACTIVE_PAGE_ATTR = "data-active-page";

  function getCurrentRouteName() {
    var path = window.location.pathname || "";
    var fileName = path.split("/").pop() || "index.html";

    if (!fileName || fileName === "/") {
      return "index";
    }

    return fileName.replace(/\.html?$/i, "") || "index";
  }

  function applyActiveRoute(slot, routeName) {
    var links = slot.querySelectorAll("a[data-route]");
    var normalizedRoute = routeName || getCurrentRouteName();
    var hasActive = false;

    for (var i = 0; i < links.length; i += 1) {
      var link = links[i];
      var li = link.closest("li");
      var isActive = link.getAttribute("data-route") === normalizedRoute;

      if (li) {
        li.classList.toggle("active", isActive);
      }

      if (isActive) {
        link.setAttribute("aria-current", "page");
        hasActive = true;
      } else {
        link.removeAttribute("aria-current");
      }
    }

    if (!hasActive) {
      console.warn("[menu-loader] data-active-page nao corresponde a nenhum link:", normalizedRoute);
    }
  }

  function renderFallback(slot) {
    slot.innerHTML =
      '<header class="masthead" role="banner">' +
      '<h3 class="text-muted">Treinamento em Automacao de Testes</h3>' +
      '<p class="text-danger" style="margin-top:12px;">Nao foi possivel carregar o menu compartilhado. Use um servidor estatico local.</p>' +
      "</header>";
  }

  function loadMenuIntoSlot(slot) {
    var declaredRoute = (slot.getAttribute(ACTIVE_PAGE_ATTR) || "").trim();
    var routeName = declaredRoute || getCurrentRouteName();

    return fetch(MENU_PATH, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Falha ao carregar menu: " + response.status);
        }

        return response.text();
      })
      .then(function (markup) {
        slot.innerHTML = markup;
        applyActiveRoute(slot, routeName);
      })
      .catch(function (error) {
        console.warn("[menu-loader]", error.message);
        renderFallback(slot);
      });
  }

  function init() {
    var slots = document.querySelectorAll("[data-menu-slot]");

    for (var i = 0; i < slots.length; i += 1) {
      loadMenuIntoSlot(slots[i]);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
