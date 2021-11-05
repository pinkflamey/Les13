var myinterval;
var count = 0;


function changeColor() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    document.body.style.backgroundColor = hue;
}

function changePos() {
    document.getElementById("avoid").style="width: " + Math.floor(Math.random() * 256)  + "px;" + " height: " + Math.floor(Math.random() * 256) +"px;";
}

function flash() {
    var text = document.getElementById('flashtext');

    var hue = 'rgb(' + (Math.floor(Math.random() * 25)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    text.style.color = (text.style.color=='red') ? hue:hue;

    text.style.fontSize = Math.floor(Math.random() * 25) + "px";
}
var clr = setInterval(flash, 100);

function randomSize() {

    document.getElementById("randomsize").style.fontSize = Math.floor(Math.random() * 50) + "px";
}

function warning() {
    window.alert("Pas op, er is héél veel geflikker hier van kleuren.")
}

var x = true;
function dance() {
    var e = document.getElementById("dance");

    if (x == true) {
        e.style.height = "250px";
        x = false;
    }
    else {
        e.style.height = "150px";
        x = true;
    }
}