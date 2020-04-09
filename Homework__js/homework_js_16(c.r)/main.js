let getSel = x => document.querySelector(x);
// container__top
let contTop = document.querySelector(".container__top");
// forms main
let main = document.forms["main"];
// forms bottom
let bottom = document.forms["bottom"];
// form styleform
let stylForm = document.forms["stylForm"];
// area
let area = document.querySelector(".area");
// colorbox
let colorBox = document.querySelector(".container__bottom__style__colorbox__color");
//
bottom.save.addEventListener("click", function () {
  getSel(".container__bottom__edit").style.display = "none";
  contTop.innerHTML = area.value;
});

main.edit.addEventListener("click", function () {
  getSel(".container__bottom__style").style.display = "none";
  getSel(".container__bottom__edit").style.display = "block";
  area.value = contTop.innerHTML;
});

main.style.addEventListener("click", function () {
  getSel(".container__bottom__edit").style.display = "none";
  getSel(".container__bottom__style").style.display = "flex";
});
// font-size
for (let i = 0; i < 5; i++) {
  stylForm.elements[i].addEventListener("click", function () {
    contTop.style.fontSize = this.value;
  });
}
// font-family
stylForm.family.addEventListener("change", function () {
  contTop.style.fontFamily = this.value;
});
// color text and colorBackground
let check = true;
getSel(".colorBack").addEventListener("click", function () {
  for (let i = 0; i < colorBox.children.length; i++) {
    if (check) {
      colorBox.children[i].onclick = function () {
        contTop.style.background = getComputedStyle(this).backgroundColor;
        getSel(".container__bottom__style__colorbox__color").style.display = "none";
        check = false;
      };
    } else {
      getSel(".container__bottom__style__colorbox__color").style.display = "flex";
      check = true;
    }
  }
});
getSel(".colorText").addEventListener("click", function () {
  for (let i = 0; i < colorBox.children.length; i++) {
    if (check) {
      colorBox.children[i].onclick = function () {
        contTop.style.color = getComputedStyle(this).backgroundColor;
        getSel(".container__bottom__style__colorbox__color").style.display =
          "none";
        check = false;
      };
    } else {
      getSel(".container__bottom__style__colorbox__color").style.display =
        "flex";
      check = true;
    }
  }
});
// font-weight
for (let i = stylForm.elements.length - 2; i < stylForm.elements.length; i++) {
  stylForm.elements[i].addEventListener("click", function () {
    if (this.checked) contTop.style.fontWeight = this.value;
    else contTop.style.fontWeight = '';
  });
}
// add table or list
bottom.add.addEventListener("click", function () {
  getSel(".container-add").style.display = "flex";
  getSel(".container").style.display = "none";
});

let choose = document.forms["choose"];
for (let i = 0; i < 2; i++) {
  choose.elements[i].addEventListener("click", function () {
    if (choose.elements[i].value == "table") {
      getSel(".container-add__inner__table").style.display = "block";
      getSel(".container-add__inner__list").style.display = "none";
    } else {
      getSel(".container-add__inner__list").style.display = "block";
      getSel(".container-add__inner__table").style.display = "none";
    }
  });
}
// table
let tableForm = document.forms["table"];
tableForm.createTable.addEventListener("click", function () {
  let table = document.createElement("table");
  let divTable = document.createElement('div');
  for (let i = 0; i < tableForm.countTr.value; i++) {
    let tr = document.createElement("tr");
    for (let i = 0; i < tableForm.countTd.value; i++) {
      let td = document.createElement("td");
      td.style.width = tableForm.widthTd.value + "px";
      td.style.height = tableForm.heightTd.value + "px";
      td.innerHTML = 'TD';
      td.style.borderStyle = tableForm.borderType.value;
      td.style.borderColor = tableForm.borderColor.value;
      td.style.borderWidth = tableForm.widthBr.value + "px";
      tr.appendChild(td);
    }
    tr.style.borderWidth = tableForm.widthBr.value + "px";
    table.appendChild(tr);
  }
  divTable.appendChild(table)
  area.value += divTable.innerHTML;
  getSel(".container").style.display = "flex";
  getSel(".container-add").style.display = "none";
  tableForm.reset();
});

// create list
let listForm = document.forms["list"];
let divList = document.createElement('div')
let list = document.createElement("ul");

listForm.btnList.addEventListener("click", function () {
  getSel(".container").style.display = "flex";
  getSel(".container-add").style.display = "none";
  for (let i = 0; i < listForm.countLi.value; i++) {
    let li = document.createElement("li");
    li.innerHTML = " Lorem";
    list.appendChild(li);
    list.style.padding = "10px";
  }
  list.style.listStyleType = listForm.marks.value;
  divList.appendChild(list);

  area.value += divList.innerHTML;
  listForm.reset();
});