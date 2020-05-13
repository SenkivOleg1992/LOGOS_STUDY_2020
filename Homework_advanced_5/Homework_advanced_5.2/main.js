import * as shopModule from './shop-module.js'

let getSel = x => document.querySelector(x);

let baseForm = document.forms['choose-buy'];
startRender();
function startRender(){
    getSel('.balance').innerHTML = shopModule.balance + 'грн';
    getSel('.beer').innerHTML = shopModule.products.beer.count + 'шт';
    getSel('.vine').innerHTML = shopModule.products.vine.count + 'шт';
    getSel('.pepsi').innerHTML = shopModule.products.pepsi.count + 'шт';
}

let orderForm = document.forms['choose-buy'];
orderForm.chooseBut.addEventListener('click',function(){
    addToOrder();
    renderOrder();
});
getSel('.cont-buy__inner').innerHTML = '';
getSel('.order-list').innerHTML= '';

orderForm.buyBut.addEventListener('click',function(){
    makeOrder();
    startRender();
    getSel('.cont-buy__inner').innerHTML = getSel('.order-list').innerHTML;
    getSel('.order-list').innerHTML= '';
    baseForm.reset();
});

function addToOrder(){
    let count = orderForm.count.value;
    let name;
    for(let i = 0; i<orderForm.length - 2; i++){
        if(orderForm[i].checked){
            name = orderForm.elements[i].value;
            break
        }
    };
    shopModule.sendToOrders(name,count);
};

function renderOrder(){
    getSel('.order-list').innerHTML = '';
    for(let i = 0; i<shopModule.orders.length; i++){
        getSel('.order-list').innerHTML += `<p>${shopModule.orders[i].name}:  ${shopModule.orders[i].count}</p>`
    }
};

function makeOrder(){
    shopModule.makeOrder()
};