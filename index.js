    

// //id div ..map  center
// //change the center ..use this https://www.latlong.net/ depends the area you Need 


    // Creating map options
         var mapOptions = {
            center: [31.858897,35.944278],
            zoom: 13,
            zoomControl: false
         }
         // Creating a map object
         var map = new L.map('map', mapOptions);
         
         // Creating a Layer object
         var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

         // Adding layer to the map
         map.addLayer(layer);
         
         // Icon options
         var iconOptions = {
            // iconUrl: './image/jor.jpg',
                  iconUrl: 'image/marker1.png',
    iconSize: [40, 40]
         }
         // Creating a custom icon
         var customIcon = L.icon(iconOptions);
         
         // Creating Marker Options
         var markerOptions = {
            title: "MyLocation",
            clickable: true,
            draggable: true,
            icon: customIcon
         }
         // Creating a Marker
         var marker = L.marker([31.858897,35.944278], markerOptions);
         
         // Adding popup to the marker
         marker.bindPopup('Hi welcome to Jordan').openPopup();
         
         // Adding marker to the map
         marker.addTo(map);



//          var map = L.map('map', {
//     maxZoom: 20,+
//     minZoom: 6,
//     zoomControl: false
// });

L.control.zoom({
    position: 'bottomright'
}).addTo(map);

  var image = L.imageOverlay(
            './image/jor.jpg',
            [[31.858897,35.944278], [30.34567,30.55443]], {
            opacity: .6
        }).addTo(map);





//layer 
//we add some test layers here
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

        var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: osmAttrib
        });
        var cycle = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: osmAttrib
        });
        var mapQuest = L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg', {
            maxZoom: 19,
            attribution: osmAttrib,
            options: {
                subdomains: '1234'
            }
        }).addTo(map); // this will be our active base layer on startup

        // a layer group with one marker
        
// init a simple layer switcher with overlays an mutual exclusive base layers
        var baseLayers = {
            "OpenStreetMap": osm,
            "OpenCycleMap": cycle,
            "MapQuest": mapQuest
        };
        var overlays = {
            "marker": marker,
            "Bilder": image
        };
        L.control.layers(baseLayers, overlays).addTo(map);

        // init a map scale
        L.control.scale().addTo(map);

        // listen to click events to show a popup window
        // the content of the popup is plain html
        // this is a nice example how function chaining is possible with Leaflet
        map.on('click', function(e) {
        var popup = L.popup()
            .setLatLng(e.latlng)
           .setContent('<p>welcome to map zoom in</p>')
            .openOn(map);
        });


map.on('zoomend', function () {

    // control district layer
    if (map.getZoom() < 10  ) {
        map.addLayer(image);
        
    }
 
})











