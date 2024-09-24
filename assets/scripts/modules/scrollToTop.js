export function scrollToTop() {
  const btnScroll = document.querySelector("#btn-scroll");

  const moveToTop = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleButtonVisibility = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 20) {
      btnScroll.classList.add("visible");

      if (!btnScroll.hasListener) {
        ["click", "touchstart"].forEach((eventType) => {
          btnScroll.addEventListener(eventType, moveToTop, {
            passive: true,
          });
        });
        btnScroll.hasListener = false;
      }
    } else {
      btnScroll.classList.remove("visible");
      if (btnScroll.hasListener) {
        ["click", "touchstart"].forEach((eventType) =>
          btnScroll.removeEventListener(eventType, moveToTop)
        );
        btnScroll.hasListener = false;
      }
    }
  };

  window.addEventListener("scroll", toggleButtonVisibility);
}
