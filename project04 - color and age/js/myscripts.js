
var ageToPrint="";

// var input = document.getElementById('input');
// input.addEventListener("keyup", function (event) {
//     //event.preventDefault();
//     if (event.keyCode === 13) {
//         //document.getElementById("myBtn").click();
//         sendNumber();
//     }
// });

function colorCheckBoxValue() {

    var colorcheckbox = document.getElementById('colorCheckbox').checked;
    console.log(colorcheckbox);
    
    if (colorcheckbox == true) {
        document.getElementById('checkAgeGroup').style.display = "block";
        document.getElementById('colorSelector').style.display = "block";
    } else if (colorcheckbox == false) {
        document.getElementById('colorSelector').style.display = "none";
        document.getElementById('submitButton').style.display = "none";
    }

}
function ageCheckBoxValue() {

    var agecheckbox = document.getElementById('ageCheckbox').checked;
    console.log(agecheckbox);
    
    if (agecheckbox == true) {
        document.getElementById('colorSelector').style.display = "block";
        document.getElementById('ageSelector').style.display = "block";
    } else if (agecheckbox == false) {
        document.getElementById('ageSelector').style.display = "none";
        document.getElementById('submitButton').style.display = "none";
    }

}

function confirmColor() {

    document.getElementById('ageSelector').style.display = "block";
    var chosenColor = document.getElementById('colorinput').value;
    console.log(chosenColor);
}

function confirmAge () {

    var chosenAge = document.getElementById('ageInput').value;

    if ( (chosenAge >= 12) && (chosenAge<=120) ) {
        document.getElementById('submitButton').style.display = "block";
        document.getElementById('alertAge').style.display = "none";
        ageToPrint=chosenAge
    } else {
        document.getElementById('alertAge').style.display = "block";
    }
}



function drawOnCan() {

    document.getElementById('refresh').style.display = "block";
    document.getElementById('mycanvas').style.display = "block";

    var c = document.getElementById('mycanvas');
    var ctx = c.getContext("2d");

    var backgroundColor = document.getElementById('colorinput').value;
    console.log(ageToPrint);
    console.log(backgroundColor);
     
        var canWid = document.getElementById("mycanvas").width;
        var canHei = document.getElementById("mycanvas").height;
        var wtp = canWid / 2;
        var htp = canHei / 2;
        
        ctx.beginPath();
        ctx.fillStyle = backgroundColor;
        console.log(ctx.fillStyle);
        
        ctx.rect(0, 0, canWid, canHei);
        ctx.fill();
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(ageToPrint, canWid/2, canHei/2);

}

function refreshCan() {
    var c = document.getElementById('mycanvas');
    var ctx = c.getContext("2d");
    var canWid = document.getElementById("mycanvas").width;
    var canHei = document.getElementById("mycanvas").height;

    ctx.clearRect(0, 0, canWid, canHei);
}








   




