document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.classList.contains("open")) {
      // закрыть
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
      panel.classList.remove("open");
    } else {
      // открыть
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";
      panel.classList.add("open");
    }
  });
});