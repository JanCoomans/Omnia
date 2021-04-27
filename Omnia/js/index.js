//alert("Hello World");
//console.log("Dit is een tweede Hello World");
window.addEventListener("load", handleLoad);


function handleLoad() {
    let logs = document.getElementById("logs");
    document.getElementById('button_clear').addEventListener("click", clearLogs);
    document.getElementById('button_one').addEventListener("click", taskOne);
    document.getElementById('button_two').addEventListener("click", taskTwo);
    document.getElementById('button_three').addEventListener("click", taskThree);
    document.getElementById('button_four').addEventListener("click", taskFour);
    document.getElementById('button_five').addEventListener("click", taskFive);
    document.getElementById('button_six').addEventListener("click", taskSix);
    document.getElementById('button_seven').addEventListener("click", taskSeven);
    document.getElementById('button_eight').addEventListener("click", taskEight);
}

function clearLogs(){
    logs.innerHTML = "";
}

function taskOne() {// Oef 1
    let sentenceOne = "Zin één.";
    let sentenceTwo = "Zin twee.";
    let sentenceThree = "Zin drie.";

    logs.innerHTML += `<br>Oef 1: <br>${sentenceOne}<br>${sentenceTwo}<br>${sentenceThree}<br>`;
    console.log(sentenceOne);
    console.log(sentenceTwo);
    console.log(sentenceThree);
}

function taskTwo() {// Oef 2
    let sentenceOne = "Zin één.";
    let sentenceTwo = "Zin twee.";
    let sentenceThree = "Zin drie.";
    let sentenceCombination = `${sentenceOne} ${sentenceTwo} ${sentenceThree}`;

    logs.innerHTML += `<br>Oef 2: <br>${sentenceCombination}<br>`;
    alert(sentenceCombination);
}

function taskThree() {// Oef 3
    let stringwaarde  = "Ik wil een koekje.";

    logs.innerHTML += "<br>Oef 3: Console<br>";
    console.log(stringwaarde);
    console.log("Position 0: " + stringwaarde.charAt(0));
    console.log("Position 3: " + stringwaarde.charAt(3));
    console.log("Laatste 'k' index: " + stringwaarde.lastIndexOf('k'));
    console.log("Laatste 'e' index: " + stringwaarde.lastIndexOf('e'));
    console.log("String lengte:" + stringwaarde.length);

}

function taskFour() {// Oef 4
    let stringwaarde  = "Ik wil een koekje.";
    stringwaarde  = stringwaarde.replace("koekje", "lasagne van PXL-catering").toUpperCase();

    logs.innerHTML += `<br>Oef 4: Console<br>"${stringwaarde}"<br>`;
    console.log(stringwaarde);
}

function taskFive() {//oef 5
    let input = String(prompt("Geef een stukje tekst op: "))
    while (!input) {
        input = String(prompt("Incorrecte ingave. Geef een stukje tekst op: "))
    }

    logs.innerHTML += `<br>Oef 5: <br>Tekst: \"${input}\"<br>Lengte: ${input.length}<br>`;
    confirm(`\"${input}"\heeft een lengte van: ${input.length}`);
}

function taskSix() {//oef 6
    let input = String(prompt("Geef een zin op: "));
    index = input.indexOf(" ") + 1;
    if(index >= 1){
        confirm(`Spatie locatie: ${index}.`);
    }
    else{
        confirm("Er is geen spatie aanwezig.");
    }

    logs.innerHTML += `<br>Oef 6: <br>Zin: \"${input}\"<br>Eerste spatie positie: ${index}<br>`;
}

function taskSeven() {//oef 7
    let numberOne = prompt("Geef een nummer(1): ");
    while (isNaN(numberOne)) {
        numberOne = prompt(`Foute ingave: \"${numberOne}\".\nGeef een nummer(1): `);
    }

    let numberTwo = prompt("Geef een nummer(2): ");
    while (isNaN(numberTwo)) {
        numberTwo = prompt(`Foute ingave: \"${numberTwo}\".\nGeef een nummer(2): `);
    }

    logs.innerHTML += `<br>Oef 7: <br>Nummer 1: \"${numberOne}\"<br>Nummer 2: \"${numberTwo}\"<br>Vermenigvuldiging: ${numberOne * numberTwo}.<br>`;
    confirm(`Vermenigvuldiging: ${numberOne * numberTwo}.`);
}

function taskEight() {//oef 8
    let numberOne = prompt("Geef een nummer(1): ");
    while (isNaN(numberOne)) {
        numberOne = prompt(`Foute ingave: \"${numberOne}\".\nGeef een nummer(1): `);
    }

    let numberTwo = prompt("Geef een nummer(2): ");
    while (isNaN(numberTwo)) {
        numberTwo = prompt(`Foute ingave: \"${numberTwo}\".\nGeef een nummer(2): `);
    }

    logs.innerHTML += `<br>Oef 7: <br>Nummer 1: \"${numberOne}\"<br>Nummer 2: \"${numberTwo}\"<br>
    Vermenigvuldigen: ${numberOne * numberTwo}.<br>
    Optellen: ${calc(numberOne + numberTwo)}.<br>
    Aftrekken: ${calc(numberOne - numberTwo)}.<br>
    Delen: ${calc(numberOne / numberTwo)}.<br>`;
}