let month = prompt('Введіть число');

if(month >= 1 && month <= 2){
    alert('Зараз зима')
} else if(month == 12) {
    alert('Зараз зима')
} else if(month >= 3 && month <=5){
    alert('Зараз весна')
} else if(month >= 6 && month <= 8){
    alert('Зараз літо')
} else if(month >= 9 &&  month <= 11){
    alert('Зараз осінь')
} else {
    alert('Неможливо визначити')
}