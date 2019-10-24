


// var input = document.getElementById('input');
// input.addEventListener("keyup", function (event) {
//     //event.preventDefault();
//     if (event.keyCode === 13) {
//         //document.getElementById("myBtn").click();
//         sendNumber();
//     }
// });

function displayNextStep() {

    var shape = document.getElementById('sel1').value;
    console.log(shape);

    if (shape == "rectengle") {
        document.getElementById('recDisplay').style.display = "block";
        document.getElementById('circDisplay').style.display = "none";
        document.getElementById('myBtn').style.display = "block";

    } else if (shape == "circle") {
        document.getElementById('recDisplay').style.display = "none";
        document.getElementById('circDisplay').style.display = "block";
        document.getElementById('myBtn').style.display = "block";
    } else if (shape == "blank") {
        document.getElementById('recDisplay').style.display = "none";
        document.getElementById('circDisplay').style.display = "none";
        document.getElementById('myBtn').style.display = "none";
    }
}

function drawOnCan() {

    document.getElementById('refresh').style.display = "block";
    document.getElementById('mycanvas').style.display = "block";

    var c = document.getElementById('mycanvas');
    var ctx = c.getContext("2d");

    var shapeChoice = document.getElementById('sel1').value;

    if (shapeChoice == "rectengle") {

        var rechig = document.getElementById('rechig').value;
        var recwid = document.getElementById('recwid').value;
        console.log(rechig);
        console.log(recwid);
        console.log(typeof rechig);
        console.log(typeof recwid);
        console.log(parseInt(recwid));
        console.log(parseInt(rechig));

        var canWid = document.getElementById("mycanvas").width;
        var canHei = document.getElementById("mycanvas").height;
        var wtp = (canWid - recwid) / 2;
        var htp = (canHei - rechig) / 2;
        if ((parseInt(rechig) >= 0) && (parseInt(recwid) >= 0)) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(wtp, htp, recwid, rechig);
            ctx.stroke();
        }else {
            document.getElementById('wrongInput').style.display = "block";
        }


    } else if (shapeChoice == "circle") {

        var cirRad = document.getElementById('circRad').value;
        var canWid = document.getElementById("mycanvas").width;
        var canHei = document.getElementById("mycanvas").height;
        var xtp = canWid / 2;
        var ytp = canHei / 2;

        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "yellow";
        ctx.arc(xtp, ytp, cirRad, 0, 2 * Math.PI);
        ctx.stroke();

    }

}

function refreshCan() {
    var c = document.getElementById('mycanvas');
    var ctx = c.getContext("2d");
    var canWid = document.getElementById("mycanvas").width;
    var canHei = document.getElementById("mycanvas").height;

    ctx.clearRect(0, 0, canWid, canHei);
}








    // if (num >= 1 && num <= 300) {
    //     document.getElementById('output').innerText = num;
    // } else {
    //     if (num > 300) {
    //         document.getElementById('output').innerText = 300;
    //     } else if (num < 1) {
    //         document.getElementById('output').innerText = 1;
    //     }
    // }





