<<<<<<< HEAD
﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
=======
﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.addEventListener("load", startup, false);

function startup() { 
    document.getElementsByClassName("prim")[0].addEventListener("input", colorChoice, false);
    document.getElementsByClassName("seco")[0].addEventListener("input", colorChoice, false);
    document.getElementsByClassName("tert")[0].addEventListener("input", colorChoice, false);
    colorChoice();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function play() {
    var turnOn = document.getElementById("turnOnSound");
    var turnOff = document.getElementById("turnOffSound");
    var swit = document.getElementById("CRTswitch");
    if (document.getElementById("CRTswitch").checked) {
        turnOff.pause();
        turnOff.currentTime = 0;
        turnOn.play();
    }
    else {
        turnOn.pause();
        turnOn.currentTime = 0;
        turnOff.play();
    }
}
function popOverFunc() {
    var btn = document.getElementById("popOverBtn");
    var chart = document.getElementById("ppChar");
    if (btn.classList.contains("slide-right")) {
        btn.classList.remove("slide-right");
        chart.classList.remove("slide-right");
    }
    else {
        btn.classList.add("slide-right");
        chart.classList.add("slide-right");
    }
}

function colorChoice() {
    var colSqrPrim = document.getElementsByClassName("prim")[0].value;
    var colSqrSeco = document.getElementsByClassName("seco")[0].value;
    var colSqrTert = document.getElementsByClassName("tert")[0].value;

    document.getElementById("pcol").value = colSqrPrim;
    document.getElementById("scol").value = colSqrSeco;
    document.getElementById("tcol").value = colSqrTert;
}

function populateFakeData(){
    for (var i = 0; i < 20; i++) {
        insertItem("https://fakeimg.pl/512/", "Website Name", "Description");
    }
}

function insertItem(img, name, desc) {
    var item =  "<div class = \"comp-item\">"+ 
                    "<img src = \""+img+"\" >"+
                    "<div class=\"item-text\">"+
                        "<h2>"+name+"</h2>"+
                        "<p>"+desc+"</p>"+
                    "</div>" +
                "</div >";
    var box = document.getElementsByClassName("comp-scroll-box").item(0);
    box.innerHTML = box.innerHTML + item;
}

function popupFunc(el) {
    el.parentElement.parentElement.classList.add("hidden");
    el.parentElement.classList.add("hidden");
    el.classList.add("hidden");
}

async function charSelClick(value) {
    if (value === "") {
        addTerminalText("CHANGING CHARACTER");
    } else {
        addTerminalText("SELECT CHAR " + value);
        await sleep(400);
        addTerminalText("SELECTED CHAR: " + value);
    }
}

function addUserText() {
    var term = document.getElementById("ppTermTextInput");
    addTerminalText(term.value);
    term.value = "";
}

function boot() {

}

async function addTerminalText(string) {
    var text = "> " + string;
    var term = document.getElementById("ppTermText");
    const para = document.createElement("p");
    para.classList.add("terminalText");
    term.appendChild(para);
    var delay = Math.min(2000 / text.length, 30);
    for (let i = 0; i < text.length; i++) {
        await sleep(delay);
        para.textContent += text[i].toString();
    }
term.scrollTo(0, term.scrollHeight);
}



///NOTE TO SELF 259 PIXEL MAXIMUM CURRENTLY FOR ASCII
>>>>>>> 890b23400b65c4e48cb0d135facfa72b51657fc0
