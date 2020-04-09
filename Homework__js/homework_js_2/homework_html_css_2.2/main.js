let name = 'Імя';
let password = 'LOGOS';

let signLogin = prompt('Логін');

if(signLogin == name){
    let signPassword = prompt('Введіть пароль');
    if(signPassword == password){
        document.write(`<div style=' width: 500px; height: 400px; margin: 0 auto; color: black; background-color: yellow; border: 2px solid black; text-align: center; font-size: 40px;'>Ласкаво просимо</div>`);
    }else if(signPassword == null){
        document.write(`<div style=' width: 500px; height: 300px; margin: 0 auto; color: blue; background-color: white; text-align: center; font-size: 30px;'> Вхід скасований</div>`)
    }else if(signPassword == ''){
        document.write(`<div style=' width: 300px; height: 300px; margin: 0 auto; color: green; text-align: center; font-size: 30px;'> Ви нічого не ввели </div>`)
    }else {
        document.write(`<div style=' width: 500px; height: 300px; font-size: 40px; text-align: center; margin: 0 auto; color: red;'> Пароль не вірний </div>`)
    }
}else if(signLogin == null){
    document.write(`<div style=' width: 500px; height: 300px; margin: 0 auto; color: blue; background-color: white; text-align: center; font-size: 30px;'> Вхід скасований</div>`)
}else if(signLogin == ''){
    document.write(`<div style=' width: 300px; height: 300px; margin: 0 auto; color: green; text-align: center; font-size: 30px;'> Ви нічого не ввели </div>`)
}else {
    document.write(`<div style=' width: 500px; height: 300px; margin: 0 auto; color: red; background-color: white; text-align: center; font-size: 30px;'> Я вас не знаю</div>`)
}