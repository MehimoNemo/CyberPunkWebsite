// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.








window.addEventListener("load", startup, false);

function startup() {

    try {
        document.getElementsByClassName("prim")[0].addEventListener("input", colorChoice, false);
        document.getElementsByClassName("seco")[0].addEventListener("input", colorChoice, false);
        document.getElementsByClassName("tert")[0].addEventListener("input", colorChoice, false);
        colorChoice();


    } catch (error) {

    }
}




let interrupt = false;
async function showtime() {
    console.log("showtime");
    if (!interrupt) {

        let h;
        let p;
        let cube;
        let OStxt;
        let GCAT;
        try {
            h = document.getElementById("gcath");
            p = document.getElementById("gcatp");
            cube = document.getElementsByClassName("cube")[0];
            OStxt = document.getElementsByClassName("OStxt")[0];
            GCAT = document.getElementsByClassName("GCAT")[0];
            resetShowcase(h, p, cube, OStxt, GCAT);
        } catch (error) {
            console.log(error);
        }
        try {
            await sleep(1000);
            OStxt.classList.remove("opacity-0");
            OStxt.classList.add("custom-xl");
            OStxt.classList.remove("h5");
            await sleep(500000);
            OStxt.classList.remove("custom-xl");
            OStxt.classList.add("h5");
            OStxt.classList.add("opacity-0");
            cube.classList.remove("bigCube");
            cube.classList.add("smallCube");
            GCAT.classList.remove("w-0");
            await sleep(1000);
            await showcaseTyper();
            interrupt = true;
            console.log(interrupt);
        }
        catch (error) {
            console.log(error);
        }
    }
}

function resetShowcase(h, p, cube, OStxt, GCAT) {
    try {
        h.innerHTML = "";
        p.innerHTML = "";
    } catch (error) {
        console.log(error);
    }
    cube.classList.add("reset");
    GCAT.classList.add("reset");
    OStxt.classList.add("reset");
    cube.classList.add("bigCube");
    cube.classList.remove("smallCube");
    GCAT.classList.add("w-0");
    cube.classList.remove("reset");
    GCAT.classList.remove("reset");
    OStxt.classList.remove("reset");
}

async function showcaseTyper() {
    h = document.getElementById("gcath");
    p = document.getElementById("gcatp");
    let hText = "GURPS Cyberpunk Adventure Tools";
    let pText = "G-CAT"


    for (let i = 0; i < hText.length; i++) {
        if (interrupt) {
            console.log(interrupt);
            return;
        }
        h.innerHTML += hText[i];
        await sleep(80);
    }
    await sleep(200);
    for (let i = 0; i < pText.length; i++) {
        if (interrupt) {
            console.log(interrupt);
            return;
        }
        p.innerHTML += pText[i];
        await sleep(120);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function play() {
    try {
        let elements = document.getElementsByClassName("GCAT");
        if (elements.length > 0) {
            if (document.getElementById("CRTswitch").checked) {
                window.location.href = window.location.href;
            }
        }
    }
    catch (e) {
        console.error(e);
    }
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

function populateFakeData() {
    for (var i = 0; i < 20; i++) {
        insertItem("https://fakeimg.pl/512/", "Website Name", "Description");
    }
}

function insertItem(img, name, desc) {
    /*  var item = "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 mb-2\">" +
                    "<div class = \"comp-item border\">" + 
                        "<img class=\"w-100\" src = \""+img+"\" >"+
                        "<div class=\"item-text text-light p-1\">"+
                            "<h2>"+name+"</h2>"+
                            "<p>"+desc+"</p>"+
                        "</div>" +
                    "</div>" +
        "</div >";
    */

    var item = "<div class=\"card col-12 col-sm-6 col-md-4 col-lg-3 mb-2 bg-transparent\" >" +
        "<img class=\"card-img-top\" src=\"https://fakeimg.pl/512/\" alt=\"Card image cap\">" +
        "<div class=\"card-body comp-item border item-text text-light p-1\">" +
        "<h5 class=\"card-title\">Website Name</h5>" +
        "<p class=\"card-text\">Description</p>" +
        " </div>" +
        "</div>";

    var box = document.getElementsByClassName("comp-scroll-box").item(0);
    box.innerHTML = box.innerHTML + item;
}

function popupFunc(el) {
    el.parentElement.parentElement.classList.add("hidden");
    el.parentElement.classList.add("hidden");
    el.classList.add("hidden");
}

function fullScreen(el) {
    if (el.classList.contains("fullScreen"))
        el.classList.remove("fullScreen");
    else
        el.classList.add("fullScreen");
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
    para.classList.add("text-info");
    para.classList.add("m-0");
    term.appendChild(para);
    var delay = Math.min(2000 / text.length, 30);
    for (let i = 0; i < text.length; i++) {
        await sleep(delay);
        para.textContent += text[i].toString();
    }
    term.scrollTo(0, term.scrollHeight);
}



///NOTE TO SELF 259 PIXEL MAXIMUM CURRENTLY FOR ASCII