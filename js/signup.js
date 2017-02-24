var nombre = document.getElementById("name");
var emailX = document.getElementById("email");
var checkInput = document.getElementById("check"); 
var mensajeCheck = document.getElementById("mensajeCheck");


function init(){
    var button = document.getElementById("next");
    button.addEventListener('click',onButtonClick);
    nombre.value = '';
    emailX.value = '';
    checkInput.checked = false;
}

function onButtonClick() {
    var inputName = document.getElementById("name");
    localStorage.setItem('Name', inputName.value);
    var inputEmail = document.getElementById("email");
    localStorage.setItem('Email', inputEmail.value);
    
    if(nombre.value == '' || emailX.value == '' || checkInput.checked == false) {
        mensajeCheck.innerHTML = "<br><h5 class='text-center' style='color:#FF1493';>Debe completar todo el formulario</h5>"
    } else {
        mensajeCheck.innerHTML = '';
        location.href = 'mapa.html';
    }
}

//VALIDAR NOMBRE
function validateName(_evt){
    
    var mensajeName = document.getElementById("mensajeName");
    var textoNombre = "<h5 style='color:#FF1493';>Debe ingresar su nombre</h5>";
    var textoNumero = "<h5 style='color:#FF1493';>Los números no son válidos</h5>";
 
    
    if(nombre.value!=""){
       
        nombre.value = convertirMayus(nombre.value);
        
        if(/([0-9])/g.test(nombre.value)){
            mensajeName.innerHTML=textoNumero;
        } else {
            mensajeName.innerHTML='';
        }
    } else {
        mensajeName.innerHTML=textoNombre;
    }    
}

//VALIDAR EMAIL
function validateEmail(_evt){
    
    var mensajeEmail = document.getElementById("mensajeEmail");
    var textoEmail = "<h5 style='color:#FF1493';>Correo Electrónico Inválido, debe contener ejemplo: hola@dominio.com</h5>";

    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(emailX.value)){
        mensajeEmail.innerHTML = ''; 
    } else {
        if(emailX.value.length >= 0){
            mensajeEmail.innerHTML = textoEmail;   
        }
    }
}

function convertirMayus(texto){
    
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}

function onCheck(evt){   
    
    if(checkInput.checked==true){
        return true;
    } else {
        return false;
    }
} 