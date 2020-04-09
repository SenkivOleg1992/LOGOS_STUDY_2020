let getSel = x => document.querySelector(x);
let left = document.forms["leftForm"];

getSel("#add").addEventListener("click", function() {
  if (getSel(".area").value == "") {
    alert("пусте поле не можна добавити");
  } else {
    let label = document.createElement("label");
    let newEl = document.createElement("input");
    newEl.type = "checkbox";
    let span = document.createElement("span");
    span.innerText = getSel(".area").value;
    label.appendChild(newEl);
    label.appendChild(span);
    left.appendChild(label);
    for (let i = 0; i < left.children.length; i++) {
      left.children[i].addEventListener("click", function() {
        if (left.children.length <= 1) {
			alert("не можливо видалити останнє завдання");
        }
        if (this) {
          this.remove();
        }
      });
    }
  }
});
for (let i = 0; i < left.children.length; i++) {
  left.children[i].addEventListener("click", function() {
    if (left.children.length <= 1) {
      alert("не можливо видалити останнє завдання");
    }
    if (this) {
      this.remove();
    }
  });
}
