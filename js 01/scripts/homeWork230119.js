var num = new Array;
var outputx = "" , outputy = "";
var arroutputx = new Array , arroutputy = new Array ;

var howmany = parseInt( prompt("write how many numbers you want to insert") );
while (isNaN(howmany)) {
    howmany = parseInt( prompt("you didn't use a number.\n write how many numbers you want to insert. USE ONLY NUMBERS PLEASE!") );   
}
for (var index = 0 ; index < howmany ; index++ ){   

        num[index] = parseInt(prompt("please enter your " + (index+1) + " number"));
        while (isNaN(num[index])) {
            num[index] = parseInt( prompt("you didn't use a number.\n please enter your " + (index+1) + " number. USE ONLY NUMBERS PLEASE!") );   
        }
    }
    console.log(num);

    for (var x = 0 ; x < howmany /*array.length*/ ; x++) {
        outputx  += " " + num[x]; 
        arroutputx[x] = num[x];
    }

    console.log(outputx);
    console.log(arroutputx);

    for (var y = (howmany-1) ;  y >= 0 ; y-- ) {
    outputy += " " + num[y]; 
    arroutputy[y] = num[y]; //איך אני מאכלס אותו הפוך?
    } 
    console.log(outputy);
    console.log(arroutputy);
    document.getElementById("demo").innerHTML = "the size of the array is: " + howmany +
     ". \n the array that was entered is: "  + arroutputx + 
     "\nthe revers order of the array that was entered is: " + arroutputy.reverse();


    

