let getSel = x => document.querySelector(x);
let fonCol = getSel('.fon-col')
getSel('.text-fon').addEventListener('click', function(){
    fonCol.style.display = 'flex';
    pictFon.style.display = 'none';
    for(let i = 0; i<fonCol.children.length; i++){
        fonCol.children[i].onclick = function(){
            document.body.style.background = getComputedStyle(this).backgroundColor;
        }
    }
});

let pictFon = getSel('.pict-fon');
getSel('.text-picture').addEventListener('click', function(){
    pictFon.style.display = 'flex';
    fonCol.style.display = 'none';
    for(let i = 0; i<pictFon.children.length; i++){
        pictFon.children[i].onclick = function(){
            document.body.style.background = getComputedStyle(this).background;
        }
    }
});