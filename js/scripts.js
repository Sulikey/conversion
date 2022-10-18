 

const question1 = prompt("How many table sppons!");
const q1Parsed = parseInt(question1);

function tableToTea () {
    let teaSpoons = q1Parsed * 3;
    return teaSpoons;
}

window.alert("You have " + tableToTea() + " teaspoons");


// different version for milliliters

const tspIn = parseInt(prompt("How many teaspoons have you got?"));
function teaToMil () {
    let milsOut = tspIn * 4.929
    return milsOut.toFixed(2);
}

window.alert ("That is "  