document.addEventListener("DOMContentLoaded", function () {
    let map = L.map("map").setView([17.5, 78.3], 10); // Adjusted center

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    fetch("locations.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((location) => {
                let marker = L.marker(location.coordinates).addTo(map);

                marker.on("click", function () {
                    // Update image and description automatically
                    document.getElementById("memoryImage").src = location.image;
                    document.getElementById("memoryDescription").textContent = location.description;
                });
            });
        })
        .catch((error) => console.error("Error loading locations:", error));
});
