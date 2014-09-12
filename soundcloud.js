// $(function(){
//
//   SC.initialize({
//     client_id: 'e1029c2d9a2079539d53193fe4cf5d69'
//   });
//
//   var player = document.getElementById('player');
//
//     $('form').on('submit', function(event){
//       event.preventDefault();
//       var query = $("#query").val();
//
//       var userUrl = 'http://api.soundcloud.com/users/'+query+'.json?client_id=e1029c2d9a2079539d53193fe4cf5d69';
//       $.ajax(userUrl, {
//         success: function(response)
//         {
//           var location = response.city + ", " + response.country
//           getLocation(location);
//         },
//       });
//     });
// });
//
// function getLocation(location) {
//   console.log("Get Location");
//   var locUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyBYy-_E0FhtiolGMX9OO3WFWxQlPBk6Dfo';
//   $.ajax(locUrl, {
//     success: function(returns)
//     {
//       var bounds = returns.results[0].geometry.bounds
//       var south = new google.maps.LatLng(bounds.southwest.lat, bounds.southwest.lng);
//       var north = new google.maps.LatLng(bounds.northeast.lat, bounds.northeast.lng);
//       var artistLocation = new google.maps.LatLngBounds(north, south);
//       // googleApi(artistLocation);
//     }
//   });
// }

var map;
function initialize() {
  console.log("Initialize");
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

// function googleApi(artistLocation) {
//   function initialize() {
//     console.log("initialize");
//     var mapOptions = {
//       zoom: 8,
//       center: artistLocation
//     };
//     map = new google.maps.Map(document.getElementById('map-canvas'),
//   mapOptions);
//
//     var marker = new google.maps.Marker({
//       map: map,
//       animation: google.maps.Animation.DROP,
//       position: artistLocation
//     });
//     google.maps.event.addListener(marker, 'click', toggleBounce)
//   }
//   function toggleBounce() {
//     if (marker.getAnimation() != null) {
//       marker.setAnimation(null);
//     } else {
//       marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
//   }
//   google.maps.event.addDomListener(window, 'load', initialize);
// }

// function query(query, callback)
// {
//   $.ajax({url:query, success: callback})
// }
//
// query("somestuff", setMarkerOnMap)
//
// function setMarkerOnMap(location)
// {
//   var marker = new google.maps.marker(map, location: location)
// }
