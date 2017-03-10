function init(){
    
    createList();
    
    var li = $("li"); 
    li.each(function(){
       $(this).click(onTypeClick); 
    });
    
    
    solicitarLugar();
    var button = $(".btn-next");
    button.click(validateButton);
}

var cars =[{"nombre":"Line","image":"image/taxi1.png","description":"Shared, 2 riders max","time":"3"},
{"nombre":"Lyft","image":"image/taxi2.png","description":"4 seats","time":"3"},
{"nombre":"Plus","image":"image/taxi3.png","description":"6 seats","time":"3"},    {"nombre":"Premier","image":"image/taxi4.png","description":"High end, 4 seats","time":"3"}]; 

function createList() {
    
    var listCars = $("#eleccion");
    
    for(var i in cars){
        var carsHtml = '<li id="'+i+'"><div class="row"><div class="col-xs-3"><img class="img-responsive car" src="'+cars[i].image+'" alt=""></div><div class="col-xs-7"><h4>'+cars[i].nombre+'</h4><small>'+cars[i].description+'</small></div><div class="col-xs-2"><h4>'+cars[i].time+'</h4><small>min</small></div></div></li>';
        
        listCars.append(carsHtml);
    }
}

function onTypeClick(evt) {
    
    console.log(evt.currentTarget);
    localStorage.setItem("car_select",evt.currentTarget.id);
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

function solicitarLugar(){
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":1}
    }).success(function(_data){
        //console.log(_data.estimado); 
        update1(_data);
    });
    
}
function update1(_info){
    $("#nowPlace").text(_info.origen);
}

function validateButton() {
    
    location.href="request.html";
}



