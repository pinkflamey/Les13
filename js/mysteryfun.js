var myinterval;
var count = 0;

function colorCycle() {

    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    document.body.style.backgroundColor = hue;

    count++;
    if (count == 10) {
        clearInterval(myinterval);
    }
}

function startColorCycle() {
    myinterval = setInterval(colorCycle, 100)
}