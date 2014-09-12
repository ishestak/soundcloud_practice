$(document).ready(function(){

SC.initialize({
  client_id: 'e1029c2d9a2079539d53193fe4cf5d69'
});

  $('form').on('submit', function(event){
    event.preventDefault();
    var query = $("#query").val();

    var trackUrl = 'http://api.soundcloud.com/tracks/'+query+'.json?client_id=e1029c2d9a2079539d53193fe4cf5d69';
    $.ajax(trackUrl, {
      success: function(response) {
        var trackId = response.id
        SC.get('/tracks/'+trackId, function(track){
          SC.oEmbed(track.permalink_url,
            $('#player'));
        });
      },
    });

  });
});
