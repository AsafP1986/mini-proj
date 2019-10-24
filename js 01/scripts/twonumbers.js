var num1 = prompt("please insert a num");
while (isNaN(num1)){
    var num1 = prompt("you didn't enter a number /n please insert a num. numbers only!");
    console.log("in loop 1");
}
console.log(num1);

var num2 = prompt("please insert a second num");
while (isNaN(num2)){
    var num2 = prompt("you didn't enter a number /n please insert second num. numbers only!");
    console.log("in loop 2");
}
console.log(num2);

document.write(parseInt(num1) + parseInt(num2));
