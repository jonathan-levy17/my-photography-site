//This is where the JavaScript and functionality for my website will go.

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

const shareButton = document.getElementById("shareButton");

if (shareButton) {
    shareButton.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Page link copied to clipboard");
    });
}