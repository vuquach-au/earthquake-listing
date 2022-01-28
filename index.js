let map;

window.initMap = () =>  {
    let results = [];
    let marker;
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        mapTypeId: "terrain",
    });
    let infowindow = new google.maps.InfoWindow({
        maxWidth: 350,
        pixelOffset: new google.maps.Size(-10,-25)
    });
    /** URL to fetch data  */
    let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
    /**
     * Use fetch API to make an API call:
     */
    async function getUsers() {
        let response = await fetch(url);
        data = await response.json();
        return data;

    }
    /** Promise executed and return result*/
    getUsers().then(data => {
        results = data;
        console.log(results);
    });
    //Delay the time to execute until the API Call is finished
    setTimeout( function() {
        if(results != 'undefined'){
            for(let i = 0; i < results.features.length; i++){
                const coords = results.features[i].geometry.coordinates;
                const place = results.features[i].properties.place;
                const city = place.split(",")[1];
                const time = results.features[i].properties.time;
                let time_event = moment(time).format("MM ddd, YYYY hh:mm:ss a");
                const latLng = new google.maps.LatLng(coords[1], coords[0]);
                
                /**Use Info Window to show Callout on Map */  
                let infoFn = function () {
                    return function (e) {
                        var content = '<div  class="iw-container" id="callout">' +
                            '<div id="iw-title" class="title"><strong>City</strong>: <span>' + city + '</span></div>' +
                            '<div id="iw-location" class="content"><strong>Location</strong>: <span>' + place + '</span></div>' +
                            '<div id="iw-time" class="content"><strong>Time</strong>: <span>' + time_event + '</span></div>' +
                            '</div>';
                        infowindow.setContent(content);
                        infowindow.open(map);
                        infowindow.setPosition(latLng);
                    }
                };

                marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: place
                  });

                marker.setMap(map);

                
                let fn = infoFn();
                
                google.maps.event.addListener(marker, 'click', fn);
            }
        }
       
    }, 1000); // Can increase time delay 2000,3000, ...

    /**Make DOM loaded, ready for JQuery to access elements */
    $(document).on('click', '#callout', function(e){ 
        $('#title').text($( "#iw-title span" ).text());
        $('#location').text($( "#iw-location span" ).text());
        $('#time').text($( "#iw-time span" ).text());
        event.preventDefault();
     });
}

    
  

