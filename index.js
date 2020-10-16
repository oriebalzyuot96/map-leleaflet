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
//     maxZoom: 20,
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


















// var map = L.map('map').setView([30.977609,36.215300], 13);
// //id div ..map ad center
// //change the center ..use this https://www.latlong.net/ depends the area you Need 


// // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// // }).addTo(map);

// //custom TYLER LAYER USED THIS LINK https://leaflet-extras.github.io/leaflet-providers/preview/

// var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//  maxZoom: 19,
//  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map)



// //save marker in variable
// L.marker([30.977609,36.215300],{
//  title :"this is marker title",
//  draggable:true,
//  opacity:0.5,


// }).addTo(map)

//     // .bindPopup('<h1>marker    </h1> <p>kkkkkkkkkkkkkkkkkkkkkkkkk</p><img src="./image/jor.jpg " width="50px"/>')
   
//     .bindPopup('<h1>marker   </h1> <p>kkkkkkkkkkkkkkkkkkkkkkkkk</p><div class="img-zoom-container"><img id="myimage" src="./image/jor.jpg " width="" height="240" alt="jordan">  <div id="myresult" class="img-zoom-result"></div>')


//     .openPopup()
//      .on("dragstart",(event =>{
//  console.log("just started")
//  console.log(event)
// }))



// // var photo_marker = new L.PhotoMarker([43.077085534225475, -89.40519332885742], {
// //   src: 'http://farm8.staticflickr.com/7012/6477800239_ee93da89b9_t.jpg',
// //   size: [ 100, 67 ]
// // }).addTo(map);


// // var photo_marker = new L.PhotoMarker([43.077085534225475, -89.40519332885742], {
// //   src: 'http://farm8.staticflickr.com/7012/6477800239_ee93da89b9_t.jpg',
// //   size: [ 100, 67 ],
// //   resize: function(e) {
// //     var zoom = e.zoom,
// //         photo_marker = e.target;
// //     if ( zoom <= 13 ) {
// //       photo_marker.scale(0.25);
// //     }
// //     else if (zoom <= 15 ) {
// //       // Half of the size option
// //       photo_marker.scale(0.5);
// //     }
// //     else {
// //       // Scale 1 is 100% as defined in the size option
// //       photo_marker.scale(1);
// //     }
// //   }
// // }).addTo(map);



           // Creating map options
         // Creating map options
       


// init the map object
//         var map = L.map('map', {
//             center: [40.75, -74.15],
//             zoom: 13
//         });

//         // we add some test layers here
//         var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

//         var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 18,
//             attribution: osmAttrib
//         });
//         var cycle = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
//             maxZoom: 18,
//             attribution: osmAttrib
//         });
//         var mapQuest = L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg', {
//             maxZoom: 19,
//             attribution: osmAttrib,
//             options: {
//                 subdomains: '1234'
//             }
//         }).addTo(map); // this will be our active base layer on startup

//         // a layer group with one marker
//         var cities = new L.LayerGroup([
//             L.marker([40.72801, -74.07772]).bindPopup('Jersey City')
//         ]);
//         cities.addTo(map);

//         // an image overlay that will be added to the overlays of a layer switcher
//         var image = L.imageOverlay(
//             './image/jor.jpg',
//             [[40.712216, -74.22655], [40.773941, -74.12544]], {
//             opacity: .6
//         }).addTo(map);

//         // init a simple layer switcher with overlays an mutual exclusive base layers
//         var baseLayers = {
//             "OpenStreetMap": osm,
//             "OpenCycleMap": cycle,
//             "MapQuest": mapQuest
//         };
//         var overlays = {
//             "Städte": cities,
//             "Bilder": image
//         };
//         L.control.layers(baseLayers, overlays).addTo(map);

//         // init a map scale
//         L.control.scale().addTo(map);

//         // listen to click events to show a popup window
//         // the content of the popup is plain html
//         // this is a nice example how function chaining is possible with Leaflet
//         map.on('click', function(e) {
//         var popup = L.popup()
//             .setLatLng(e.latlng)
//             .setContent('<p>Hello, world!</p>')
//             .openOn(map);
//         });
