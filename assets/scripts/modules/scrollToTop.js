export function scrollToTop() {
    const btnScroll = document.querySelector("#btn-scroll");

    const moveToTop = (event) => {
        if (event?.type === "touchstart") event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const viewButton = () => {

        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 20) {
            if (!btnScroll.hasListener) {
                btnScroll.classList.add("visible");
                btnScroll.addEventListener("click", moveToTop);
                btnScroll.addEventListener("touchstart", moveToTop, { passive: true });
            }
        } else {
            btnScroll.classList.remove("visible");
            btnScroll.hasListener = false;
        }
    }

    window.addEventListener("scroll", viewButton);
}