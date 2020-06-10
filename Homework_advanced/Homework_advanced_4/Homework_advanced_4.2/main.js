class MyString{
    reverse(some){
        console.log(this.some = some.split('').reverse().join(''));
    }
    ucFirst(word){
        return this.word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    ucWord(word){
        return this.word = word.toLowerCase().split(' ').map(function(i){
            if(i.length >= 2) return i.charAt(0).toUpperCase() + i.slice(1);
            else return i;
        }).join(' ')
    }
};
const m1 = new MyString();
m1.reverse('OLEG');
console.log(m1.ucFirst('chelsea'));
console.log(m1.ucWord('arsenal arsenal arsenal liverpool chelsea milan'));