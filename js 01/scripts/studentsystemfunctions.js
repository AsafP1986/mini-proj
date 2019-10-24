


function insertStudent() {

    key = students.length;
    students[key] = {};
    students[key].id = prompt("enter the student id");
    students[key].name = prompt("enter the student name");
    // students[students.length] = {};
    // students[(students.length -1)].id = prompt("enter the student id");
    // students[(students.length -1)].address = prompt ("enter the student adress");
    // students[(students.length -1)].name = prompt("enter the student name");
    // students[(students.length -1)].age = prompt("enter the student age");
    console.log(students[key]);
    console.log(students);

} 

function printonestudent() {
    index = prompt("which student position do you want to print?");
    console.log(students[(index -1)]);
    alert("the " + index + " student info: " + students[(index -1)]);
}

function printstudents() {
    for (var index = 0 ; index < students.length ; index++){

        output += " " + students[index].name + " " + students[index].id + "\n";
         
        console.log(output);
    }
    console.log(output);
    alert("your students info: " + output);
    //document.getElementById('para').innerHTML = output;

 }


