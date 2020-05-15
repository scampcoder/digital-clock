setInterval(function () {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  let period = "AM";
  if(hours >= 12) {
    period = "PM";
  }
  if(hours > 12) { //keeps it on standard, not military
    hours -= 12;
  }
  if(minutes < 10) { //display as ex:"09"
    minutes = "0" + minutes;
  }
  if(seconds < 10) { //display as ex:"02"
    seconds = "0" + seconds;
  }
  const clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  //^set clock time as concatenation of all times
  const clock = document.getElementById('clock');
  clock.innerText = clockTime; //set innerText of clock to JS clock info
}, 1000);//set interval to run every 1000 miliseconds
