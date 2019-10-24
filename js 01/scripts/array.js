var howmany = parseInt( prompt("write how many numbers you want to insert") );
var numbers = [];


for (var index = 0 ; index < howmany ; index++ ){
    var num = parseInt(prompt("enter your number"));
    numbers[index] = num;
    }
    if (index % 2 == 0){
        console.log (numbers[index]);
    }
for (index = 1 ; index < howmany; index +=2){
    console.log (numbers[index]);
}

document.write (numbers);
