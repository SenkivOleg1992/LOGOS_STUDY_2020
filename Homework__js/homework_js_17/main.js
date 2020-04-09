let getSel = x => document.querySelector(x);
//
let boxClock = document.querySelector(".main__alldate__clock");
let boxDate = document.querySelector(".main__alldate__date");
let clockInt = setInterval(clock, 1000);

function clock() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;
  boxDate.innerHTML = date + ":" + month + ":" + year;

  let hours = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  boxClock.innerHTML = hours + ":" + min + ":" + sec;
}

// secundomir
let milli = 0;
let sec = 0;
let min = 0;
let hour = 0;
let stopWatch;
let saved = document.querySelector(".main__stopwatch__saved");
let watch = document.querySelector(".main__stopwatch__inner__watch");
// start spotWatch
getSel(".start").addEventListener("click", function() {
  stopWatch = setInterval(stWatch, 10);
});
// loop stopWatch
getSel(".loop").addEventListener("click", function() {
  let divSaved = document.createElement("div");
  divSaved.innerHTML += watch.innerHTML;
  saved.appendChild(divSaved);
});
// stop stopWatch
getSel(".stop").addEventListener("click", function() {
  clearInterval(stopWatch);
});
// reset stopWatch
getSel(".reset").addEventListener("click", function() {
  clearInterval(stopWatch);
  saved.innerHTML = " ";
  watch.innerHTML = "00" + ":" + "00" + ":" + "00" + ":" + "00";
  milli = 0;
  sec = 0;
  min = 0;
  hour = 0;
});

function stWatch() {
  milli++;
  if (milli == 100) {
    milli = 0;
    sec++;
  }
  if (sec >= 59) {
    min++;
    sec = 0;
  }
  if (min >= 59) {
    hour++;
    min = 0;
  }
  // коротший спосіб добавити 0,   if<10
  if (hour < 10) hour = "0" + parseFloat(hour);
  if (min < 10) min = "0" + parseFloat(min);
  if (sec < 10) sec = "0" + parseFloat(sec);
  if (milli < 10) milli = "0" + parseFloat(milli);
  watch.innerHTML = hour + ":" + min + ":" + sec + ":" + milli;

  // довший спосіб добавити 0,    if<10
  // if (milli < 10) {
  //   if (sec < 10) {
  //     if (min < 10) {
  //       if (hour < 10) {
  //         watch.innerHTML = "0" + hour + ":0" + min + ":0" + sec + ":0" + milli;
  //       } else {
  //         watch.innerHTML = hour + ":0" + min + ":0" + sec + ":0" + milli;
  //       }
  //     } else {
  //       if (hour < 10) {
  //         watch.innerHTML = "0" + hour + ":" + min + ":0" + sec + ":0" + milli;
  //       } else {
  //         watch.innerHTML = hour + ":" + min + ":0" + sec + ":0" + milli;
  //       }
  //     }
  //   }else {
  //     if (min < 10) {
  //       if (hour < 10) {
  //         watch.innerHTML = "0" + hour + ":0" + min + ":" + sec + ":0" + milli;
  //       } else {
  //         watch.innerHTML = hour + ":0" + min + ":" + sec + ":0" + milli;
  //       }
  //     } else {
  //       if (hour < 10) {
  //         watch.innerHTML = "0" + hour + ":" + min + ":" + sec + ":0" + milli;
  //       } else {
  //         watch.innerHTML = hour + ":" + min + ":" + sec + ":0" + milli;
  //       }
  //     }
  //   }
  // } else {
  //   if (sec < 10) {
  //     if (min < 10) {
  //       if (hour < 10) {
  //         watch.innerHTML = "0" + hour + ":0" + min + ":0" + sec + ":" + milli;
  //       } else {
  //         watch.innerHTML = hour + ":0" + min + ":0" + sec + ":" + milli;
  //       }
  //     } else {
  //       if (hour < 10) {
  //         watch.innerHTML = "0" + hour + ":" + min + ":0" + sec + ":" + milli;
  //       } else {
  //         watch.innerHTML = hour + ":" + min + ":0" + sec + ":" + milli;
  //       }
  //     }
  //   } else {
  //     if (hour < 10) {
  //       watch.innerHTML = "0" + hour + ":" + min + ":" + sec + ":" + milli;
  //     } else {
  //       watch.innerHTML = hour + ":" + min + ":" + sec + ":" + milli;
  //     }
  //   }
  // }
}

// timer
let formTimer = document.forms["readout"];
let chooseShow = document.querySelector(".main__timer__choose__show");
let secTimer = 60;
let minTimer = chooseShow.innerHTML - 1;
let timer;
getSel(".plusTimer").addEventListener("click", function() {
  chooseShow.innerHTML++;
  minTimer = chooseShow.innerHTML - 1;
});
getSel(".minusTimer").addEventListener("click", function() {
  chooseShow.innerHTML--;
  minTimer = chooseShow.innerHTML - 1;
  if (chooseShow.innerHTML < 0) {
    alert("Відлік неможливий");
  }
});

formTimer.startReadout.addEventListener("click", function() {
  timer = setInterval(timerRedout, 1000);
});
formTimer.stopReadout.addEventListener("click", function() {
  clearInterval(timer);
});
formTimer.resetReadout.addEventListener("click", function() {
  clearInterval(timer);
  formTimer.reset();
  minTimer = chooseShow.innerHTML - 1;
  secTimer = 60;
});
function timerRedout() {
  secTimer--;
  if (secTimer == 0) {
    minTimer--;
    secTimer += 59;
  }
  if (minTimer < 0) {
    formTimer.readoutWind.value = "time out";
    clearInterval(timer);
  }
  //короткий спосіб добавити 0    (if<10)

  // if(secTimer <10) secTimer = '0' + secTimer;
  // if(minTimer<10) minTimer = '0' + parseFloat(minTimer);
  // formTimer.readoutWind.value = minTimer + ':' + secTimer;

  // довщий спосіб добавити 0   (if<10)
  if (secTimer < 10) {
    if (minTimer < 10) {
      formTimer.readoutWind.value = "0" + minTimer + ":0" + secTimer;
    } else {
      formTimer.readoutWind.value = minTimer + ":0" + secTimer;
    }
  } else {
    if (minTimer < 10) {
      formTimer.readoutWind.value = "0" + minTimer + ":" + secTimer;
    } else {
      formTimer.readoutWind.value = minTimer + ":" + secTimer;
    }
  }
}
