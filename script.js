//This is where the JavaScript and functionality for my website will go.

const shareButton = document.getElementById("shareButton");

if (shareButton) {
    shareButton.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Page link copied to clipboard");
    });
}