


// var input = document.getElementById('input');
// input.addEventListener("keyup", function (event) {
//     //event.preventDefault();
//     if (event.keyCode === 13) {
//         //document.getElementById("myBtn").click();
//         sendNumber();
//     }
// });



function drawOnCan() {


    var c = document.getElementById('mycanvas');
    var ctx = c.getContext("2d");


    var cirRad = document.getElementById('circRad').value;
    var canWid = document.getElementById("mycanvas").width;
    var canHei = document.getElementById("mycanvas").height;
    var xtp = canWid / 2;
    var ytp = canHei / 2;

    if (cirRad >= 150) {

        document.getElementById('wrongInput').style.display = "block";
    } else {

        document.getElementById('wrongInput').style.display = "none";
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.fillStyle = "red";
        ctx.arc(xtp, ytp, cirRad, 0, 2 * Math.PI);
        ctx.fill();
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





