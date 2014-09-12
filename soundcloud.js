

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

          var locUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyBYy-_E0FhtiolGMX9OO3WFWxQlPBk6Dfo';
          $.ajax(locUrl, {
            success: function(returns)
            {c
              var latlng = returns.results.geometry.bounds
            },
          });

        },

      });

    });
});

function query(query, callback)
{
  $.ajax({url:query, success: callback})
}

query("somestuff", setMarkerOnMap)

function setMarkerOnMap(location)
{
  var marker = new google.maps.marker(map, location: location)
}
