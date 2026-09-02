function hint(text){

    document.getElementById("hint").innerHTML = text;

}

function check(){

    let ans=document.getElementById("answer").value.toLowerCase();

    if(ans=="aleix"){
        alert("Correcte!");
        // Aquí després canviaràs l'enllaç
        location.href="aleix.html";
    }
    else{
        alert("Incorrecte.");
    }

}