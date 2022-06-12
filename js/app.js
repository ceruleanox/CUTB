/* map */

const mymap = L.map('map').setView([37, -95], 3);

/* find lat lon based on address name */

// geocode();

var locationForm = document.getElementById('location-form');

locationForm.addEventListener('submit', geocode);

async function geocode(e) {
    e.preventDefault();
    var location = document.getElementById('location-input').value;
    //var location = 'Long Beach CA'
    var cleanupDate = document.getElementById('cleanup-when').value;


    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: location,
            key: {API_KEY}
        }
    })
    .then(function(response){
        console.log(response);

        var formattedAddress = response.data.results[0].formatted_address;
        var formattedAddressOutput = `
            <ul class="engage-list-group">
                <li class="engage-list-group-item">${formattedAddress}</li>
            </ul>
        `;

        var lat = response.data.results[0].geometry.location.lat;
        var lon = response.data.results[0].geometry.location.lng;

        //alert(lat + ", " + lon);
        //document.getElementById('formatted-address').innerHTML = formattedAddressOutput;



        //const attribution = 
        //'&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        });
        tiles.addTo(mymap);

        L.marker([lat, lon])
        .addTo(mymap)
        .bindTooltip("Next beach clean-up is happening: " + cleanupDate).openTooltip(),
        options = { index: cleanupDate };
        ;
        marker.on("click", onMarkerClickFixedChart, options);
    })
    .catch(function(error){
        console.log(error);
    })
    ;
}

