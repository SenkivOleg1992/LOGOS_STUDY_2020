let getSel = (x) => document.querySelector(x);
let badWords: HTMLElement = getSel(
  ".container-search__inner__bad-words__result"
);
let formCenz: HTMLFormElement = document.forms["form-cenzor"];

formCenz.btnAdd.addEventListener("click", function (): void {
  if (formCenz.words.value === "") {
    formCenz.words.style.border = "2px solid red";
    formCenz.words.placeholder = "write something...";
  } else {
    badWords.innerHTML += formCenz.words.value + " ";
    formCenz.words.value = "";
    formCenz.words.style.border = "2px solid grey";
    formCenz.words.placeholder = "word here...";
  }
});

formCenz.btnReset.addEventListener("click", function (): void {
  badWords.innerHTML = "";
  formCenz.words.style.border = "2px solid grey";
  formCenz.words.placeholder = "word here...";
  formCenz.reset();
});

formCenz.btnCenzor.addEventListener("click", function () {
  if (formCenz.result.value === "") {
    formCenz.result.style.border = "2px solid red";
    formCenz.result.placeholder = "write something...";
  } else {
    formCenz.result.style.border = "2px solid grey";
    formCenz.result.placeholder = "Text here...";

    const badControl: string[] = badWords.innerHTML.split(' ');
    let enteredText: string = formCenz.result.value;
    for( let arrIndex: number = 0; arrIndex < badControl.length; arrIndex++){
        let currentBadControl = badControl[arrIndex];
        let replacementString: string = '';
        for( let i: number = 0; i < currentBadControl.length; i++){
            replacementString += '*'
        }
        let ff = '\\b' + currentBadControl + '\\b';
        let regex = RegExp(ff, 'gi');
        enteredText = enteredText.replace(regex, replacementString);
    }
    formCenz.result.value = enteredText;
    console.log(enteredText)
  }
});
//