var howmany = parseInt( prompt("write how many numbers you want to insert") );
var first, last, output= "";

for (var index = 1 ; index <= howmany ; index++ ){
    var num = parseInt(prompt("enter your number"));
    if (index == 1){
        first = num;
    }else if (index == howmany){
        last = num;
    }

    output += " " + num;

}

alert(first + " , " + last);
alert (output);
console.log (output);