let getSel = x => document.querySelector(x);

for(let i = 0; i<=5; i++){
    getSel('#ol').children[i].onclick = function(){
        this.style.color = ol.children[i].innerHTML
    }
}