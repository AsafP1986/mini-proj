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


var task = {

    taskInput : "",
    date : "",
    time : "",

};

function createTask(){




}








   




