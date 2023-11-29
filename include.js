document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(html => document.querySelector("header").innerHTML = html);

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(html => document.querySelector("footer").innerHTML = html);
});
