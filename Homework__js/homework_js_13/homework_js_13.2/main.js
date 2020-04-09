let getSel = x => document.querySelector(x);
let area = getSel(".keyboard__area");

window.addEventListener("keydown", function(event) {
  console.log(event);
  if (event.keyCode == 9) {
    event.preventDefault();
    area.value += "\t";
  }
  if (event.keyCode != 16) {
    getSel(`.key${event.keyCode}`).style.backgroundColor = "#888";
    getSel(`.key${event.keyCode}`).style.color = "#fff";
  } else {
    getSel(`.s${event.location}`).style.backgroundColor = "#888";
    getSel(`.s${event.location}`).style.color = "#fff";
  }
});

window.addEventListener("keyup", function(event) {
  if (event.keyCode != 16) {
    getSel(`.key${event.keyCode}`).style.backgroundColor = "";
    getSel(`.key${event.keyCode}`).style.color = "";
  } else {
    getSel(`.s${event.location}`).style.backgroundColor = "";
    getSel(`.s${event.location}`).style.color = "";
  }
});