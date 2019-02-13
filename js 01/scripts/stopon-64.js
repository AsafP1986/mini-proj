var x = 0; var numbers = [];


do {

    var num = parseInt( prompt("please enter a number"));
    numbers[x] = num;
    x++;

} while (num != (-64))



for (var i = 0 ; i < (numbers.length -1); i++) {

    console.log(numbers[i]);
     
} 
console.log(numbers.reverse()); 
