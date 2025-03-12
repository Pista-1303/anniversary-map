// Initialize the map
const map = L.map('map').setView([17.484, 78.389], 12);

// Load and display tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load locations.json dynamically
fetch("locations.json")
    .then(response => response.json())
    .then(markers => {
        markers.forEach(memory => {
            const marker = L.marker(memory.coordinates).addTo(map);
            marker.on("click", () => {
                document.getElementById("memoryTitle").innerText = memory.place; // ✅ Fix: Update place name
                document.getElementById("memoryImage").src = memory.image;
                document.getElementById("memoryDescription").innerText = memory.description;
            });
        });
    })
    .catch(error => console.error("Error loading locations:", error));
