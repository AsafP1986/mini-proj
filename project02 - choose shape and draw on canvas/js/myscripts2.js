


// var input = document.getElementById('input');
// input.addEventListener("keyup", function (event) {
//     //event.preventDefault();
//     if (event.keyCode === 13) {
//         //document.getElementById("myBtn").click();
//         sendNumber();
//     }
// });


function calculate() {

  var ra = document.getElementById('radInput').value;
  
  var eqef =  2 * ra * Math.PI ;
  var shetah = (ra^2)*Math.PI ;

document.getElementById('outputEqef').innerText = "The Circumference of the circle: "+ "\n" + eqef;
document.getElementById('outputShetah').innerText = "The area of the circle: " + "\n" + shetah;

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





