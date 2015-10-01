// Egyedi azonosító
var az = "user_33095795";

// Űrlap küldése
function processForm(btn){
    
    // Gomb
    var btn = $(btn);
    
    // Űrlap kiválasztása
    var form = btn.parents("form");
    
    // Mentjük a beviteli mezők értékeit
    var data = {};
    form.find('input').each(function(index, input){
        data[input.name] = input.value;
    });
    

    // Objektum amit elküldünk a szerverre
    var serverObj = {
        "user": az,
        "data": data
    };
    
    
    // Post indítása
    $.post('http://37.139.16.100:3000', JSON.stringify(serverObj), function(respons){
        console.log(respons);
    });
    
    
    console.log(serverObj); 
        
    return false;
}

// Adatok visszakérdezése a szerverről
function getData(btn){

    // Get kérés
    $.getJSON('http://37.139.16.100:3000/' + az, function(respons){
        console.log(respons);

        // Űrlap kiválasztása
        var form = $(".reg-form");


        form.find('input').each(function(index, input){
            var name = input.name;
            if(respons[name]){
                input.value = respons[name];
            }
        });
    });
        
};























