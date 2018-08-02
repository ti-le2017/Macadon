jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAijw6fOsiNQLc0Voa4pAasuec9GHjfW-0&sensor=false&callback=initialize";
    //script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['CrawFish King, Seattle', 47.5962846,-122.32268120000003],
        ['StarBucks, White Center', 47.514188,-122.35474799999997],
        ['StarBucks, WestWood Village', 47.522716,-122.365602]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>CrawFish King</h3>' +
        '<a href="https://www.yelp.com/biz/crawfish-king-seattle-2"><u>CLICK HERE</u> for more information about CrawFish King</a>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>StarBucks White Center</h3>' +
        '<a href="https://www.yelp.com/biz/starbucks-seattle-351"><u>CLICK HERE</u> for more information about the White Center StarBucks</a>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>StarBucks WestWood Village</h3>' +
        '<a https://www.yelp.com/biz/starbucks-seattle-163"><u>CLICK HERE</u> for more information about the White Center StarBucks</a>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(10);
        google.maps.event.removeListener(boundsListener);
    });
    
}