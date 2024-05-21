const nav = document.querySelector(".primary-navigation");
const toggleNav = document.querySelector(".mobile-nav-toggle");

document.addEventListener("click", e => {
    const isRightButton = e.target.matches(".mobile-nav-toggle");
    const closeButton = e.target.matches(".mobile-nav-toggle[aria-expanded = true]");

    if (!isRightButton && e.target.closest(".primary-navigation") != null) return

    if (isRightButton) {
        nav.setAttribute("data-visible", true);
        toggleNav.setAttribute("aria-expanded", true);
    }
    else {
        nav.setAttribute("data-visible", false);
        toggleNav.setAttribute("aria-expanded", false);
    }

    if (closeButton === true) {
        nav.setAttribute("data-visible", false);
        toggleNav.setAttribute("aria-expanded", false);
    }
});

