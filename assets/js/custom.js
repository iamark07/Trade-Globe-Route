document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    toggleButton.addEventListener("click", () => {
        // Add/remove class to show/hide with transition
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("opacity-0");

            // Allow transition
            setTimeout(() => {
                mobileMenu.classList.add("opacity-100");
                mobileMenu.classList.remove("opacity-0");
            }, 10);
        } else {
            mobileMenu.classList.add("opacity-0");
            mobileMenu.classList.remove("opacity-100");

            // Wait for transition to end before hiding
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 300);
        }
    });
});