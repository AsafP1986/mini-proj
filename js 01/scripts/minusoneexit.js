
var sum = 0;

    do {
        var num = parseint(promt("plese enter a number. use -1 to exit"));
        num = parseInt(num)
        if (num % 2 == 0){
            sum += num;
        }
    }while (num != -1 )

    alert(sum);

