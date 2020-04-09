let getSel = x => document.querySelector(x);

getSel('.main__first').onclick = function () {
    this.style.backgroundImage = 'url("' + prompt() + '")';
    this.style.backgroundSize = 'cover';
}
getSel('.main__second').onclick = function () {
    this.style.backgroundImage = 'url("' + prompt() + '")';
    this.style.backgroundSize = 'cover';
}
getSel('.main__third').onclick = function () {
    this.style.backgroundImage = 'url("' + prompt() + '")';
    this.style.backgroundSize = 'cover';
}