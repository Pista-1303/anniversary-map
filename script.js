// Initialize the map (centered on Hyderabad)
var map = L.map('map').setView([17.3850, 78.4867], 12);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fetch locations.json and place markers
fetch('locations.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(location => {
            var marker = L.marker(location.coordinates).addTo(map)
                .bindPopup(`<b>${location.place}</b><br><button onclick="showMemory('${location.image}', '${location.description}')">View Memory</button>`);
        });
    })
    .catch(error => console.error('Error loading locations:', error));

// Function to display the memory image and description
function showMemory(imageSrc, description) {
    document.getElementById("memory-image").src = imageSrc;
    document.getElementById("memory-description").innerText = description;
}
