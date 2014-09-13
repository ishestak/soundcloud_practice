$(function(){

  SC.initialize({
    client_id: 'e1029c2d9a2079539d53193fe4cf5d69'
  });

  var player = document.getElementById('player');

    $('form').on('submit', function(event){
      event.preventDefault();
      var query = $("#query").val();

      var userUrl = 'http://api.soundcloud.com/users/'+query+'.json?client_id=e1029c2d9a2079539d53193fe4cf5d69';
      $.ajax(userUrl, {
        success: function(response)
        {
          var location = response.city + ", " + response.country
          getLocation(location);
          console.log(location);
        },
      });
    });
});

function getLocation(location) {
  var locUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyBYy-_E0FhtiolGMX9OO3WFWxQlPBk6Dfo';
  $.ajax(locUrl, {
    success: function(returns)
    {
      var centre = returns.results[0].geometry.location
      var artistLocation = new google.maps.LatLng(centre.lat, centre.lng);
      showArtist(artistLocation);
    }
  });
}

var map;
var marker;

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

function showArtist(location)
{
  map.setCenter(location, 8);
  dropMarker(location);
}

function dropMarker(location) {
  marker = new google.maps.Marker(
  {
    map:map,
    animation:google.maps.Animation.DROP,
    position: location
  });
  google.maps.event.addListener(marker, 'click', toggleBounce())
}

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

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
