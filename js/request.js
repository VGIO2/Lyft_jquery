function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457368, lng: -71.531508},
    zoom: 14
});
    
    var latLongPazPeru = {lat:-16.457336,lng: -71.530440};
    var latDos = {lat:-16.437368,lng: -71.551208};
    var latTres = {lat:-16.457368,lng: -71.521508};
    var latCuatro = {lat:-16.497368,lng: -71.511908};
    
    var pazPeru = new google.maps.Marker({
        map: map,
        position: latLongPazPeru,
        title: 'Hello World!',
        //label:'X',
        icon: 'image/carriño.png'
    });
    
    new google.maps.Marker({position:latDos, map:map, icon:'image/carriño.png'});
    new google.maps.Marker({position:latTres, map:map, icon:'image/carriño.png'});
    new google.maps.Marker({position:latCuatro, map:map, icon:'image/carriño.png'});
    
    var infowindow = new google.maps.InfoWindow({
        content:contentString
    });
    
    pazPeru.addEventListener('click', function(){
        infowindow.open(map,pazPeru)
    })
}



//buscador-------------
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}




function solicitarEstimado(){
    $.ajax({
        url:"https://clientes.geekadvice.pe/api/estimado",
        data:{tipo:1}
    }).success(function(_data){
        console.log(_data);
        update(_data);
        
    });
}

function update(_info){
    alert(_info.origen);
    alert(_info.estimado.max);
}


