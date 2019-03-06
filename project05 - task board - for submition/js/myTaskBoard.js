// inserting value to inputs

function pad(str, max) {
    str = str.toString();
    return str.length < max ? "0" + str : str;
}

var local = new Date();
var y = pad(local.getFullYear(), 4);
var m = pad(local.getMonth() + 1, 2);
var d = pad(local.getDate() + 1, 2);
var h = pad(local.getHours() + 1, 2);
var mi = pad(local.getMinutes() + 1, 2);

document.getElementById("inputDate").value = `${y}-${m}-${d}`;
document.getElementById("inputTime").value = `${h}:${mi}`;


var tasksArr = [] ;
var task = "" ;
var date = "" ;
var time = "" ;
var index = 0 ;

function createTask() {

    
    task = document.getElementById("theTask").value;
    date = document.getElementById("inputDate").value;
    time = document.getElementById("inputTime").value;

    newTask = {
        'id': index,
        'task': task,
        'date': date,
        'time': time,
    };

    tasksArr.push(newTask);
    index++;

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    
    printToScreen();

    document.getElementById("theTask").value = "";

    return false;


}

function deleteTask(x) {
    id = x.getAttribute("id");
    console.log(x);
    
    var tasksFromStorage = localStorage.getItem("tasks") == null ? JSON.stringify([]) : localStorage.getItem("tasks");
    var tasksArr = JSON.parse(tasksFromStorage);
    tasksArr.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    printToScreen();
}

function printToScreen() {
    output = "";
    tasksFromStorage = localStorage.getItem("tasks") == null ? JSON.stringify([]) : localStorage.getItem("tasks");
    tasksArr = JSON.parse(tasksFromStorage);

    for (var index = 0 ; index < tasksArr.length ; index++) {
        
        if (index == tasksArr.length - 1) {
            output += `<div class="col-sm-2 card" id="card${index}" style="animation: fadeIn 2s">`;
        } else {
            output += `<div class="col-sm-2 card" id="card${index}">`;
        }
        output += `
        <div class="card-head">
            <span  id="${index}" class="glyphicon glyphicon-remove" onclick="deleteTask(this)"></span>
          <h4 class="card-title">to do:</h4>
        </div>
        <div class="card-body">
          <textarea row="3" class="card-text card-midlle">${tasksArr[index].task}</textarea>
          <p class="card-bottom">${tasksArr[index].date}<br>${tasksArr[index].time}</p>
        </div>
        </div>`;
        } 

    document.getElementById("taskBoardRow").innerHTML = output;
}



// ovedet

// function printToScreen() {
//     output = "";
//     tasksFromStorage = localStorage.getItem("tasks") == null ? JSON.stringify([]) : localStorage.getItem("tasks");
//     tasksArr = JSON.parse(tasksFromStorage);

//     for (var index = 0 ; index < tasksArr.length ; index++) {

//         output += `<div class="col-sm-2 card" id="card${index}">
//         <div class="card-head">
//             <span  id="${index}" class="glyphicon glyphicon-remove" onclick="deleteTask(this)"></span>
//           <h4 class="card-title">to do:</h4>
//         </div>
//         <div class="card-body">
//           <textarea row="3" class="card-text">${tasksArr[index].task}</textarea>
//           <p class="card-footer">${tasksArr[index].date}<br>${tasksArr[index].time}</p>
//         </div>
//         </div>`;
//         } 

//     document.getElementById("taskBoardRow").innerHTML = output;
// }







// function addFadeInToLast(last) {
//     if (last == tasksArr.length - 1) {
//         console.log("enterd");
//        var x = document.getElementById(`card${last}`);
//         console.log(x);
//         var att = document.createAttribute("style");  
//         att.value = "animation: fadeIn 5s";                           
//         x.setAttributeNode(att);
//     }
// }

// var att = document.createAttribute("style");       // Create a "class" attribute
// att.value = "animation: fadeIn 5s";                           // Set the value of the class attribute
// x.setAttributeNode(att);

//style="animation: fadeIn 5s;"







