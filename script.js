//This is where the JavaScript and functionality for my website will go.

const header = document.querySelector("header");

const gallery = document.getElementById("gallery");

const about = document.getElementById("about");

const logo = document.getElementById("logo");

const galleryImages = document.querySelectorAll(".gallery-grid img");

const shareButton = document.getElementById("shareButton");

let galleryInview = false;

let aboutInview = false;

let logoInview = false;

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

if (shareButton) {
    shareButton.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Page link copied to clipboard");
    });
}

window.addEventListener("load", function() {
    const images = document.querySelectorAll(".gallery-grid img");

    images.forEach(function(img) {
        img.style.opacity = "1";
    });
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.target.id === "gallery") {
            galleryInview = entry.isIntersecting;
        }
        if (entry.target.id === "about") {
            aboutInview = entry.isIntersecting;
        }
        if (entry.target.id === "logo") {
            logoInview = entry.isIntersecting;
        }
    });
    updateVisibility();
}, {
    threshold: 0.2,
});

function updateVisibility() {
    if (galleryInview) {
        gallery.classList.add("visible");
    } else {
        gallery.classList.remove("visible");
    }
    if (aboutInview) {
        about.classList.add("visible");
    } else {
        about.classList.remove("visible");
    }
    if (logoInview) {
        logo.classList.add("visible");
    } else {
        logo.classList.remove("visible");
    }
}

observer.observe(gallery);
observer.observe(about);
observer.observe(logo);

updateVisibility();
