var inputNumber = $("#number");

function init() {
    
    var imgFlag = $("#peruFlag");
    var codeCountry = $("#codeCountry");
    var select = localStorage.getItem('country_select');
    var country_code = paises[select].phone_code;
    var country_url = paises[select].imageURL;
    
    //.prop()
    imgFlag.attr("src", country_url);
    codeCountry.text(country_code);
    
    var button = $("#next");
    button.click(onButtonClick);
}

function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.val());
    
    var mensajeNumber = $("#mensajeNumber");
    
    if(inputNumber.val() == '') {
        mensajeNumber.html("<br><h5 class='text-center'  style='color:#fe3ecd; background-color:	#F5F5F5; padding:10px; font-weight:bold';>Debe escribir su número telefónico</h5>"); 
    } else {
        mensajeNumber.empty();
        onCode();
        location.href = 'signup.html';
    }    
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    alert("Tu código de usuario es : " + concat);
}

function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 


