class Country{
    constructor(name, lang, greeting, colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    
    setColors(){
      
    }
   
}
var usa = new Country("USA", "English", "Hello World!", ["red", "white","blue"]);
var mexico = new Country("Mexico", "Spanish", "Hola Mundo!", ["green","white","red"]);
var france = new Country("France ", "French", "Bonjour le monde", ["blue","white","red"]);
var canada = new Country("Canada", "French", "Bonjour le monde", ["red","white","red"]);
var brazil = new Country("Brazil", "Portuguese", "Ola Mundo!", ["green","yellow","blue"]);



function SwitchCountry(){
var input = $("#Countrylist option:selected").val(); 
var country;

if(input === "USA"){
    //set country to usa 
    country = usa;
}
else if(input === "Mexico"){
country = mexico;   
}
else if(input === "France"){
    country = france;
}
else if(input === "Canada"){
    country = canada;
}
else if(input === "Brazil"){
    country = brazil;
}
$("#Color1").css("background-color", country.colors[0]);
$("#Color2").css("background-color", country.colors[1]);
$("#Color3").css("background-color", country.colors[2]);
$("#Color4").css("background-color", country.colors[3]);
$("#Color5").css("background-color", country.colors[4]);


$("#CountryName").text(country.name)
$("#OfficialLanguage").text(country.lang)
$("#HelloWorld").text(country.greeting)

}