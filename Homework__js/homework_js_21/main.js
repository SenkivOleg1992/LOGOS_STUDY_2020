$(function () {
  const mainText = $(".container__inner");
  let cssAct = ({
    backgroundColor: 'grey',
    height: '130%',
    width: '35%',
    borderRadius: '5px',
  })

  let cssDeact = ({
    backgroundColor: '',
    height: '',
    width: '',
    borderRadius: '',
  })

  // bold
  let checkBold = true;
  $(".bold").click(function () {
    if (checkBold) {
      mainText.css('fontWeight', 'bold');
      $('.bold').css(cssAct);
      checkBold = false;
    } else {
      mainText.css('fontWeight', 'normal');
      $('.bold').css(cssDeact);
      checkBold = true;
    }
  });

  //italic
  let checkIt = true;
  $('.italic').click(function () {
    if (checkIt) {
      mainText.css('fontStyle', 'italic');
      $('.italic').css(cssAct);
      checkIt = false;
    } else {
      mainText.css('fontStyle', '');
      $('.italic').css(cssDeact);
      checkIt = true;
    }
  });

  // underline
  let checkUnd = true;
  $('.underline').click(function () {
    if (checkUnd) {
      mainText.css('textDecoration', 'underline');
      $('.underline').css(cssAct);
      checkUnd = false;
    } else {
      mainText.css('textDecoration', '');
      $('.underline').css(cssDeact);
      checkUnd = true;
    }
  });

  //line-through
  let checkThr = true;
  $('.through').click(function () {
    if (checkThr) {
      mainText.css('textDecoration', 'line-through');
      $('.through').css(cssAct);
      checkThr = false;
    } else {
      mainText.css('textDecoration', '');
      $('.through').css(cssDeact);
      checkThr = true;
    }
  });

  //left
  let checkLeft = true;
  $('.left').click(function () {
    if (checkLeft) {
      mainText.css('textAlign', 'left');
      $('.left').css(cssAct);
      checkLeft = false;
    } else {
      mainText.css('textAlign', '');
      $('.left').css(cssDeact);
      checkLeft = true;
    }
  });

  // center
  let checkCent = true;
  $('.center').click(function () {
    if (checkCent) {
      mainText.css('textAlign', 'center');
      $('.center').css(cssAct);
      checkCent = false;
    } else {
      mainText.css('textAlign', '');
      $('.center').css(cssDeact);
      checkCent = true;
    }
  });

  //right
  let checkRight = true;
  $('.right').click(function () {
    if (checkRight) {
      mainText.css('textAlign', 'right');
      $('.right').css(cssAct);
      checkRight = false;
    } else {
      mainText.css('textAlign', '');
      $('.right').css(cssDeact);
      checkRight = true;
    }
  });

  //family
  let elCheck = true;
  let famCheck = true;
  let family = $(".family");
  $(".a").click(function () {
    $(this).css(cssAct);
    if (famCheck) {
      family.slideDown(600, function () {
        $(".family p").each(function (i, elem) {
          $(elem).click(function () {
            if (elCheck) {
              $('.a').css(cssDeact)
              mainText.css("fontFamily", $(elem).html());
              family.css("display", "none");
              elCheck = false;
              famCheck = true;
            } else {
              $('.a').css(cssDeact)
              family.css("display", "none");
              elCheck = true;
            }
          });
        });
      });
      famCheck = false;
    } else {
      $('.a').css(cssDeact)
      family.css("display", "none");
      famCheck = true;
    }
  });
  //font-size
  let fontCheck = true;
  let fontChoose = $(".font-choose");
  $(".font").click(function () {
    $(this).css(cssAct);
    if (fontCheck) {
      fontChoose.slideDown(500, function () {
        $(".font-choose p").each(function (ind, elem) {
          $(elem).click(function () {
            $('.font').css(cssDeact);
            mainText.css("fontSize", $(this).html());
            fontChoose.css("display", "none");
            fontCheck = true;
          });
        });
      });
      fontCheck = false;
    } else {
      $('.font').css(cssDeact);
      fontChoose.css("display", "none");
      fontCheck = true;
    }
  });
});

// color text
let getSel = x => document.querySelector(x);
let formUrl = document.forms["form-url"];
let colorBox = document.querySelector(".color-box");
let colorTextBack = document.querySelector(".color-text-back");
let mainText = document.querySelector(".container__inner");
let chooseBack = document.querySelector(".choose-background");

let color = document.querySelector(".color");
let back = document.querySelector(".back");
let checkColText = true;
color.addEventListener("click", function () {
  color.style.width = '35%';
  color.style.height = '130%';
  color.style.background = 'grey';
  color.style.borderRadius = '6px';
  colorBox.style.display = "block";
  colorTextBack.style.display = "flex";
  chooseBack.style.display = "none";
  getSel(".box-image").style.display = "none";
  getSel(".header-color-text").style.display = "flex";
  getSel(".header-color-back").style.display = "none";
  getSel('.url-image').style.display = 'none';

  for (let i = 0; i < colorTextBack.children.length; i++) {
    colorTextBack.children[i].onclick = function () {
      mainText.style.color = getComputedStyle(this).backgroundColor;
    };
  };

  getSel(".close-choose-color-text").addEventListener("click", function () {
    colorBox.style.display = "none";
    color.style.width = '';
    color.style.height = '';
    color.style.background = '';
    color.style.borderRadius = '';
  });
});
//onmouse close back
getSel('.close-choose-color-text').addEventListener('mouseover', function () {
  this.style.backgroundColor = 'grey';
  this.style.borderRadius = '5px';
})
getSel('.close-choose-color-text').addEventListener('mouseout', function () {
  this.style.backgroundColor = '';
  this.style.borderRadius = '';
})

// background
let checkBackCol = true;
back.addEventListener('click', function () {
  colorBox.style.display = "block";
  colorTextBack.style.display = "flex";
  getSel('.choose-background').style.display = 'flex';
  getSel('.header-color-back').style.display = 'flex';
  getSel('.header-color-text').style.display = 'none';
  getSel('.box-image').style.display = 'none';
  getSel('.url-image').style.display = 'none';
  //стилізація кнопки
  back.style.width = '35%';
  back.style.height = '130%';
  back.style.background = 'grey';
  back.style.borderRadius = '6px';
  getSel('.tab-color').style.backgroundColor = 'grey';
  getSel('.tab-color').style.borderRadius = '10px';
  getSel('.tab-file').style.backgroundColor = '';
  getSel('.tab-image').style.backgroundColor = '';
  for (let i = 0; i < colorTextBack.children.length; i++) {
    colorTextBack.children[i].onclick = function () {
      getSel('.container').style.backgroundColor = getComputedStyle(this).backgroundColor;
      getSel('.container').style.backgroundImage = '';
    }
  };
})
getSel('.close-choose-color-back').addEventListener('click', function () {
  colorBox.style.display = "none";
  back.style.width = '';
  back.style.height = '';
  back.style.background = '';
  back.style.borderRadius = '';
})
// /background-color
getSel('.tab-color').addEventListener('click', function () {
  colorTextBack.style.display = "flex";
  getSel('.tab-color').style.backgroundColor = 'grey';
  getSel('.tab-color').style.borderRadius = '10px';
  getSel('.tab-image').style.backgroundColor = '';
  getSel('.tab-image').style.borderRadius = '';
  getSel('.tab-file').style.backgroundColor = '';
  getSel('.tab-file').style.borderRadius = '';
  getSel('.box-image').style.display = '';
  getSel('.url-image').style.display = 'none';
  console.log('background')
  for (let i = 0; i < colorTextBack.children.length; i++) {
    colorTextBack.children[i].onclick = function () {
      console.log('background');
      getSel('.box-image').style.display = 'none';
      getSel('.container').style.backgroundColor = getComputedStyle(colorTextBack.children[i]).backgroundColor;
      getSel('.container').style.backgroundImage = '';
    }
  };
})
//onmouse close back
getSel('.close-choose-color-back').addEventListener('mouseover', function () {
  this.style.backgroundColor = 'grey';
  this.style.borderRadius = '5px';
})
getSel('.close-choose-color-back').addEventListener('mouseout', function () {
  this.style.backgroundColor = '';
  this.style.borderRadius = '';
})

// background-image
getSel('.tab-image').addEventListener('click', function () {
  getSel('.box-image').style.display = 'flex';
  getSel('.tab-image').style.backgroundColor = 'grey';
  getSel('.tab-image').style.borderRadius = '10px';
  getSel('.tab-color').style.backgroundColor = '';
  getSel('.tab-color').style.borderRadius = '';
  getSel('.tab-file').style.backgroundColor = '';
  getSel('.tab-file').style.borderRadius = '';
  colorTextBack.style.display = 'none';
  getSel('.url-image').style.display = 'none';
  for (let i = 0; i < getSel('.box-image').children.length; i++) {
    getSel('.box-image').children[i].onclick = function () {
      getSel('.container').style.background = getComputedStyle(this).backgroundImage;
      getSel('.container').style.backgroundSize = 'cover';
    }
  }
});

// background url

getSel('.tab-file').addEventListener('click', function () {
  getSel('.tab-file').style.backgroundColor = 'grey';
  getSel('.tab-file').style.borderRadius = '5px';
  getSel('.tab-image').style.backgroundColor = '';
  getSel('.tab-image').style.borderRadius = '';
  getSel('.tab-color').style.backgroundColor = '';
  getSel('.tab-color').style.borderRadius = '';
  getSel('.url-image').style.display = 'flex';
  getSel('.box-image').style.display = 'none';
  colorTextBack.style.display = 'none';
  formUrl.url.onchange = function () {
    let file = this.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      getSel('.container').style.backgroundImage = 'url("' + reader.result + '")';
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }
})

//form sign in`

let signIn = document.forms["check-in"];
let regLog = /^admin$/;
let regPass = /^admin$/;
let checkSign = true;
getSel(".access").addEventListener("click", function () {
  if (checkSign) {
    getSel(".check-in").style.display = "block";
    getSel(".access").style.width = '6%';
    getSel(".access").style.height = '65%';
    getSel(".access").style.background = 'grey';
    getSel(".access").style.borderRadius = '6px';
    checkSign = false
  } else {
    getSel(".check-in").style.display = 'none';
    getSel(".access").style.width = '';
    getSel(".access").style.height = '';
    getSel(".access").style.background = '';
    getSel(".access").style.borderRadius = '';
    checkSign = true;
  }
  // active
  // getSel(".check-in").style.display = "block";
  // getSel(".access").style.width = '6%';
  // getSel(".access").style.height = '65%';
  // getSel(".access").style.background = 'grey';
  // getSel(".access").style.borderRadius = '6px';
  //deactive

  getSel('.close-check-in').addEventListener('click', function () {
    getSel(".check-in").style.display = 'none';
    getSel(".access").style.width = '';
    getSel(".access").style.height = '';
    getSel(".access").style.background = '';
    getSel(".access").style.borderRadius = '';
    signIn.pass.style.background = '';
    signIn.login.style.background = '';
    signIn.pass.placeholder = 'password here...'
    signIn.login.placeholder = 'login here...'
    signIn.reset();
    checkSign = true;
  })

  signIn.btnSignin.addEventListener("click", function () {
    for (let i = 0; i < signIn.elements.length - 1; i++) {
      if (signIn.elements[i].value == '') {
        signIn.elements[i].style.backgroundColor = '#BF593F';
        signIn.elements[i].placeholder = 'correct...'
      } else {
        signIn.elements[i].style.backgroundColor = '#3FBF41';
      }
    }
    if (regLog.test(signIn.login.value) && regPass.test(signIn.pass.value)) {
      getSel(".check-in").style.display = "none";
      getSel('.access').innerHTML = 'OK';
      getSel('.edit').style.backgroundColor = 'white';
      signIn.pass.style.background = '';
      signIn.login.style.background = '';
      signIn.reset();
      getSel(".check-in").style.display = 'none';
      getSel(".access").style.width = '';
      getSel(".access").style.height = '';
      getSel(".access").style.background = '';
      getSel(".access").style.borderRadius = '';
      checkSign = true;
    }
  });
});
//
// container__edit
let contInner = getSel(".container__inner");
let contEdit = getSel(".container__edit");
let area = getSel(".area");
let menu = getSel(".header__menu");
let edit = getSel(".header__edit");
let save = getSel(".save");
let tablMenu = getSel(".table");
let tabForm = document.forms["tableForm"];

getSel(".edit").addEventListener("click", function () {
  if (getSel('.access').innerHTML == 'OK') {
    contInner.style.display = "none";
    contEdit.style.display = "block";
    area.value = contInner.innerHTML;
    menu.style.display = "none";
    edit.style.display = "flex";
  }
  // edit display on
  save.addEventListener("click", function () {
    contInner.style.display = "block";
    contEdit.style.display = "none";
    contInner.innerHTML = area.value;
    menu.style.display = "flex";
    edit.style.display = "none";
  });
  // tb

  getSel(".tb").addEventListener("click", function () {
    tablMenu.style.display = "block";
  });
});

// create tab
tabForm.createTb.addEventListener("click", function () {
  let table = document.createElement("table");
  let divTab = document.createElement("div");
  for (let i = 0; i < tabForm.elements.length - 2; i++) {
    if (tabForm.elements[i].value == '') {
      tabForm.elements[i].style.backgroundColor = '#BF553F';
    } else {
      tabForm.elements[i].style.backgroundColor = '#50BF3F';
    }
  }
  if (tabForm.tr.value == '' || tabForm.tr.value == '' || tabForm.widthTd.value == '' || tabForm.heightTd.value == '' || tabForm.widthBorder.value == '' || tabForm.bdStyle.value == '' || tabForm.bordCol.value == '') {
    area.value != divTab.innerHTML;
  } else {
    for (let i = 0; i < tabForm.tr.value; i++) {
      let tr = document.createElement("tr");
      for (let i = 0; i < tabForm.tr.value; i++) {
        let td = document.createElement("td");
        td.style.width = tabForm.widthTd.value + "px";
        td.style.height = tabForm.heightTd.value + "px";
        td.innerHTML = "TD";
        td.style.borderWidth = tabForm.widthBorder.value + "px";
        td.style.borderStyle = tabForm.bdStyle.value;
        td.style.borderColor = tabForm.bordCol.value;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    divTab.appendChild(table);
    area.value += divTab.innerHTML;
  }
});
//RESET but
tabForm.resetTb.addEventListener("click", function () {
  tabForm.reset();
});
getSel(".close-table").addEventListener("click", function () {
  tablMenu.style.display = "none";
});

//list ol
let contList = getSel(".container__list");
let olForm = document.forms["olForm"];
getSel(".listOl").addEventListener("click", function () {
  contList.style.display = "block";
  getSel('.header-ul-list').display = 'none';
  getSel('.header-ol-list').display = 'flex';
  getSel(".olForm").style.display = "flex";
  getSel(".ulForm").style.display = "none";

});
let ol = document.createElement("ol");
let divOl = document.createElement("div");
olForm.createOl.addEventListener("click", function () {
  for (let i = 0; i < olForm.elements.length - 2; i++) {
    if (olForm.elements[i].value == '') {
      olForm.elements[i].style.backgroundColor = '#BF593F';
    } else {
      olForm.elements[i].style.backgroundColor = '#3FBF41';
    }
  }
  if (olForm.countLiOl.value == '' || olForm.olMarks.value == '') {
    area.value != divOl.innerHTML;
  } else {
    for (let i = 0; i < olForm.countLiOl.value; i++) {
      let li = document.createElement("li");
      li.innerHTML += "Lorem";
      li.style.padding = '10px';
      ol.appendChild(li);
    }
    ol.style.listStyleType = olForm.olMarks.value;
    divOl.appendChild(ol);
    area.value += divOl.innerHTML;
  }
});

olForm.resetOl.addEventListener("click", function () {
  olForm.reset();
});

getSel(".close-container__list").addEventListener("click", function () {
  contList.style.display = "none";
  getSel(".olForm").style.display = "none";
});

// list ul
getSel(".listUl").addEventListener("click", function () {
  contList.style.display = "block";
  getSel('.header-ul-list').display = 'flex';
  getSel('.header-ol-list').display = 'none';
  getSel(".ulForm").style.display = "flex";
  getSel(".olForm").style.display = "none";

});
let ul = document.createElement("ul");
let divUl = document.createElement("div");

ulForm.createUl.addEventListener("click", function () {
  for (let i = 0; i < ulForm.elements.length - 2; i++) {
    if (ulForm.elements[i].value == '') {
      ulForm.elements[i].style.backgroundColor = '#C14242';
    } else {
      ulForm.elements[i].style.backgroundColor = '#3FBF41';
    }
  }
  if (ulForm.countLiUl.value == '' || ulForm.ulMarks.value == '') {
    area.value != divUl.innerHTML;
  } else {
    for (let i = 0; i < ulForm.countLiUl.value; i++) {
      let li = document.createElement("li");
      li.innerHTML += "Lorem";
      li.style.padding = '10px';
      ul.appendChild(li);
    }
    ul.style.padding = '10px';
    ul.style.listStyleType = ulForm.ulMarks.value;
    divUl.appendChild(ul);
    area.value += divUl.innerHTML;
  }
});

ulForm.resetUl.addEventListener("click", function () {
  ulForm.reset();
});

getSel(".close-container__list").addEventListener("click", function () {
  contList.style.display = "none";
  getSel(".ulForm").style.display = "none";
});