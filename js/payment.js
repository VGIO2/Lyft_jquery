$(document).ready(solicitarDriver);

function solicitarDriver(){
    $.ajax({
        url:"https://clientes.geekadvice.pe/api/estimado",
        data:{tipo:1}
        
    }).success(function(_data){
        console.log(_data);
        update(_data);
        
    });
}

function update(_info){
    
    console.log($('#driver'));
        //$('#name_driver').text(_info.conductor.name);
        //$('#driver').attr({"src":_info.conductor.url});
        //$('#precio').text(_info.estimado.moneda + _info.final);
    
}
