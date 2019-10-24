var c = document.getElementById('mycanvas');
var ctx = c.getContext("2d");

var canWid = document.getElementById("mycanvas").width;
var canHei = document.getElementById("mycanvas").height;
var xtp = canWid / 2;
var ytp = canHei / 2;

function calculate() {

    // refreshCan();
    var radius = document.getElementById('circRad').value;

    if (isNaN(radius) == true) {
        alert("your input is not valid");
        document.getElementById('circRad').value = "";

    } else {

        var volume = ((4 * Math.pow(radius, 3) * Math.PI) / 3);        
        document.getElementById('circvolumoutput').innerText = volume.toFixed(3);

        if (radius >= 145) {

            alert("your requested circle is too big for the canvas. the maximum radius is 145. Please stay within this range")
            document.getElementById('circRad').value = "";
            document.getElementById('circvolumoutput').innerText = "please keep the radius within range";

        } else {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "red";
            ctx.arc(xtp, ytp, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
}

function refreshCan() {
    ctx.clearRect(0, 0, canWid, canHei);
}


function init() {

    var r = 0;

    var id = setInterval(draw, 100);
    function draw() {
        if (r == 145) {
            clearInterval(id);
        } else {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.fillStyle = "blue";
            ctx.arc(xtp, ytp, r, 0, 2 * Math.PI);
            ctx.fill();
            r++;
        }
    }
}






