document.addEventListener('DOMContentLoaded', function() {
    const THUMBNAILS = document.querySelectorAll(".thumbnail img");
    const POPUP = document.querySelector(".popup");
    const POPUP_CLOSE = document.querySelector(".popup__close");
    const POPUP_IMG = document.querySelector(".popup__img");

    const preloadImages = (src) => {
        const img = new Image();
        img.src = src;
    };

    THUMBNAILS.forEach((thumbnail) => {
        thumbnail.addEventListener("click", (e) => {
            const src = e.target.src;
            preloadImages(src); // Wywołanie funkcji preładowania
            POPUP.classList.remove("hidden");
            POPUP_IMG.src = src;
        });
    });

    POPUP_CLOSE.addEventListener("click", () => {
        POPUP.classList.add("hidden");
    });
});
