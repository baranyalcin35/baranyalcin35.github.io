(function () {
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  var tabs = document.querySelectorAll("[data-price-tab]");
  if (!tabs.length) return;

  function show(name) {
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-price-tab") === name;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(tab.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
  }

  tabs.forEach(function (tab) {
    var name = tab.getAttribute("data-price-tab");
    tab.addEventListener("pointerenter", function () { show(name); });
    tab.addEventListener("click", function () { show(name); });
  });
})();
