document.getElementById("zona").onclick = function () {

    let usuari = prompt("Usuari:");
    let pass = prompt("Contrasenya:");

    // Canvia aquestes dades
    if (usuari === "dih" && pass === "dac") {

        alert("Correcte!");
        window.location.href = "../incorrecte/nivell3.html";

    } else {

        alert("Usuari o contrasenya incorrectes");

    }

};