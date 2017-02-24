function init(){
    createList();
    var listaPaises = document.getElementsByTagName("li");
    for(var i=0; i<listaPaises.length; i++){
        listaPaises[i].addEventListener("click",onCountryClick);
    }
    
}

function createList() {
    var elListCountries = document.getElementById("list-countries");
    for(var i in paises){
        var listHtml= 
            '<li id="' + i + '">'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '<hr></li>';
        elListCountries.innerHTML += listHtml;
    }
}

function onCountryClick(evt) {
    localStorage.setItem("country_select",evt.currentTarget.id);
    
    location.href="pais.html";
}



// ----------------------------------------------- BUSCADOR
var search = document.getElementById("search");
var ulListCountries = document.getElementById("list-countries");

var contacto = ulListCountries.getElementsByClassName("country-name");
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.style.display = "none";   
       else
          f.parentNode.style.display = "block";        
   });
}, 
false);