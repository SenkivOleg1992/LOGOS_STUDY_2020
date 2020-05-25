let getSel = x => document.querySelector(x);
let badWords = getSel('.container-search__inner__bad-words__result');
let formCenz = document.forms['form-cenzor'];
formCenz.btnAdd.addEventListener('click', function () {
    if (formCenz.words.value === '') {
        formCenz.words.style.border = '2px solid red';
        formCenz.words.placeholder = 'write something...';
    }
    else {
        badWords.innerHTML += formCenz.words.value + ' ';
        formCenz.words.value = '';
        formCenz.words.style.border = '2px solid grey';
        formCenz.words.placeholder = 'word here...';
    }
});
formCenz.btnReset.addEventListener('click', function () {
    badWords.innerHTML = '';
    formCenz.words.style.border = '2px solid grey';
    formCenz.words.placeholder = 'word here...';
    formCenz.reset();
});
formCenz.btnCenzor.addEventListener('click', function () {
    if (formCenz.result.value === '') {
        formCenz.result.style.border = '2px solid red';
        formCenz.result.placeholder = 'write something...';
    }
    else {
        formCenz.result.style.border = '2px solid grey';
        formCenz.result.placeholder = 'Text here...';

        const badControl = badWords.innerHTML.split(' ');
        let enteredText = formCenz.result.value;
        for (let arrIndex = 0; arrIndex < badControl.length; arrIndex++) {
            let currentBadControl = badControl[arrIndex];
            console.log(badControl)
            let replacementString = '';
            for (let i = 0; i < currentBadControl.length; i++) {
                replacementString += '*';
            };
            let ff = '\\b' + currentBadControl + '\\b';
            let regex = RegExp(ff, 'g');
            enteredText = enteredText.replace(regex, replacementString);
        };
        console.log(enteredText);
        formCenz.result.value = enteredText;
    };
});