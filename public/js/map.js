const searchQuery = `${mapToken.listing.location}, ${mapToken.listing.country}`;

var map = L.map('map').setView([20, 78], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`)
    .then(response => response.json())
    .then(data => {
        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lng = parseFloat(data[0].lon);

            map.setView([lat, lng], 13);

            L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`<b>${mapToken.listing.title}</b><br>${mapToken.listing.location}, ${mapToken.listing.country}`)
                .openPopup();
        } else {
            L.marker([20.5937, 78.9629])
                .addTo(map)
                .bindPopup(`<b>${mapToken.listing.title}</b><br>Location not found on map`)
                .openPopup();
        }
    })
    .catch(err => {
        console.error("Geocoding error:", err);
    });