
var vari = new String (prompt("please enter some keys"));

console.log(vari.indexOf("e") + 1);
console.log(vari);
console.log(vari.charAt(0));

switch (/*typeof*/ isNaN(vari.charAt(0))){
    case true: 
        alert("the first key is not a number");
        console.log("the first key is not a number");
        document.write(vari);
        document.getElementById("picture").src="images/iMNAN.jpg";
        document.getElementById("para").innerHTML= vari;
        break;
    default:
        alert("you started with a number")
        console.log("you started with a number");
        document.write(vari);
        document.getElementById('picture').src='images/iMAN.jpg';
        document.getElementById("para").innerHTML= vari;
        break;
}