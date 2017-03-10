var cars =[{"nombre":"Line","image":"image/taxi1.png","description":"Shared, 2 riders max","time":"3"},
{"nombre":"Lyft","image":"image/taxi2.png","description":"4 seats","time":"3"},
{"nombre":"Plus","image":"image/taxi3.png","description":"6 seats","time":"3"},    {"nombre":"Premier","image":"image/taxi4.png","description":"High end, 4 seats","time":"3"}];  

function init(){
    solicitarEstimado();
    
    
    var carImg = $(".cuadro_car1").find("img").attr("src","image/lyftcar.png");
    var carName = $(".cuadro").find("h4");
    var carDes = $(".cuadro").find("small");
    
    
    var car_select = localStorage.getItem("car_select");

    
    var carImage = cars[car_select].image;
    var carNombre = cars[car_select].nombre;
    var carDescription = cars[car_select].description;
    
    carImg.attr("src",carImage);
    carName.text(carNombre);
    carDes.text(carDescription);
}
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457368, 
             lng: -71.531508},
    zoom: 16
});
    
    var latLongPazPeru = {lat:-16.457336,
                          lng: -71.530440};
    
    var latDos = {lat:-16.437368,
                  lng: -71.551208};
    var latTres = {lat:-16.457368,lng: -71.521508};
    var latCuatro = {lat:-16.497368,lng: -71.511908};
    
    currentMarker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: miMapa,
        title:"Aqui estoy!!!",
        icon: "img/persona.png"
    });
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



function solicitarEstimado(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":1}
    }).success(function(_data){
        //console.log(_data.estimado); 
        update1(_data);
    });
    
}
function update1(_info){
    $("#precio").text(_info.estimado.min);
    $("#destino").text(_info.destino);
    $("#partida").text(_info.origen);
    
    
    //alert(_info.destino);
    //alert(_info.estimado.min);
}



