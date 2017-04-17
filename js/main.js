var waypoints = $('.red1').waypoint({
  handler: function(direction) {
    $('.navbar-default').css('backgroundColor','#2c3e50')
  }

})

var waypoints = $('.navigacija').waypoint({
  handler: function(direction) {
    $('.navbar-default').css('backgroundColor','transparent')
  },

})

var waypoints = $('.prp').waypoint({
  handler: function(direction) {
    $('.slide').slideDown(1000)
  },

})



function initMap() {
        var uluru = {lat: 44.7866, lng:20.4489};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru,
          scrollwheel:  false

        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map

        });
      }

      initMap()

