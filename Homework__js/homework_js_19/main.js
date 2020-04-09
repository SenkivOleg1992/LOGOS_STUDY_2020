let getSel = x => document.querySelector(x);
let dict = document.forms["dictates"];
let fNameReg = /^[a-z]{2,20}\D$/i;
let sNameReg = /^[a-zA-Z]{2,20}\D$/;
//let emailReg = /^\w{1,}\.*@{1}[a-zA-Z]{1,}\.{1}(com)|(ua)|(net)|(org)$/;
let emailReg = /^([A-Za-z0-9_\.-]+)@([\da-z-]+)([\.]{1})([a-z]{2,6})$/;
let phoneReg = /^\+38\(0[5679][3567890]\)-\d{3}-\d{2}-\d{2}$/;
let passReg = /^\w{8,15}$/;
dict.signUp.addEventListener("click", function() {
  if (fNameReg.test(dict.fName.value)) {
    dict.fName.style.borderColor = "green";
    dict.fName.style.background = "#ccffcc";
    getSel(".wrongFn").style.display = "none";
  } else {
    dict.fName.style.borderColor = "red";
    dict.fName.style.background = "#ffa19b";
    getSel(".wrongFn").style.display = "block";
  }
  if (sNameReg.test(dict.sName.value)) {
    dict.sName.style.borderColor = "green";
    dict.sName.style.background = "#ccffcc";
    getSel(".wrongSn").style.display = "none";
  } else {
    dict.sName.style.borderColor = "red";
    dict.sName.style.background = "#ffa19b";
    getSel(".wrongSn").style.display = "block";
  }
  if (emailReg.test(dict.email.value)) {
    dict.email.style.borderColor = "green";
    dict.email.style.background = "#ccffcc";
    getSel(".wrongEm").style.display = "none";
  } else {
    dict.email.style.borderColor = "red";
    dict.email.style.background = "#ffa19b";
    getSel(".wrongEm").style.display = "block";
  }
  if (phoneReg.test(dict.phone.value)) {
    dict.phone.style.borderColor = "green";
    dict.phone.style.background = "#ccffcc";
    getSel(".wrongPh").style.display = "none";
  } else {
    dict.phone.style.borderColor = "red";
    dict.phone.style.background = "#ffa19b";
    getSel(".wrongPh").style.display = "block";
  }
  if (passReg.test(dict.pass.value)) {
    dict.pass.style.borderColor = "green";
    dict.pass.style.background = "#ccffcc";
    getSel(".wrongPass").style.display = "none";
  } else {
    dict.pass.style.borderColor = "red";
    dict.pass.style.background = "#ffa19b";
    getSel(".wrongPass").style.display = "block";
  }
});

let inp = document.querySelector(".phone");
inp.addEventListener("focus", function() {
  inp.value = "+38(0";
});

let old = 0;
inp.addEventListener("input", function() {
  let curLen = inp.value.length;
  if (curLen < old) {
    old--;
    return;
  }
  if (curLen == 7) inp.value = inp.value + ")-";
  if (curLen == 12) inp.value = inp.value + "-";
  if (curLen == 15) inp.value = inp.value + "-";
  if (curLen > 18) inp.value = inp.value.substring(0, inp.value.length - 1);
  old++;
});
