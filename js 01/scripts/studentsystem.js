var students = [];
var flag = "";
var output = "" ;

do {
    
    flag = parseInt (prompt("what action do you want to take?" + "\n" + "1.insert new student" +
    "\n" + "2.print one student info" + "\n" +
    "3.print all the students info" + "\n" +
    "0.exit the system"));
    console.log(flag);
    
    switch (flag) {
        case 1: do {
            insertStudent();
            flag = confirm("do you want to add one more student?")
            } while (flag == true)
            flag = "";
            break;
        case 2: do {
            printonestudent();
            flag = confirm("do you want to print one more student's info?");
            } while (flag == true)
            flag = "";
            break;
        case 3:
            printstudents();
            flag = "";
            break;
        case 0:
            flag = 0;
            break;    
        default:
            alert("that is not a valid option");
            flag = "";
            break;
    }

}while (flag !== 0)

alert("you choose to exit the Students System");






