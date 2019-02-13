function updateTime(){
var clock = new Date();
    var h =  checkTime(clock.getHours());
    var m = checkTime(clock.getMinutes());
    var s = checkTime(clock.getSeconds());
    

  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

setInterval(updateTime, 1000);

}