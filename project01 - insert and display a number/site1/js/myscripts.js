


var input = document.getElementById('input');
input.addEventListener("keyup", function (event) {
    //event.preventDefault();
    if (event.keyCode === 13) {
        //document.getElementById("myBtn").click();
        sendNumber();
    }
});

function sendNumber() {

    var num = document.getElementById('input').value;

    if (num >= 1 && num <= 300) {
        document.getElementById('output').innerText = num;
    } else {
        if (num > 300) {
            document.getElementById('output').innerText = 300;
        } else if (num < 1) {
            document.getElementById('output').innerText = 1;
        }
    }



}




