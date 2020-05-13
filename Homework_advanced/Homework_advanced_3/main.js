function CoffeeMake(){};
CoffeeMake.prototype.on = function(){
    console.log(this.coffee,' is on')
};
CoffeeMake.prototype.off = function(){
    console.log(this.coffee,' is off')
};
// DRIP
function CoffeeDrip(coffee){
    this.coffee = coffee;
};
CoffeeDrip.prototype = CoffeeMake.prototype;
CoffeeDrip.prototype.ready = function(){
    console.log(this.coffee, ' is ready')
}
const DRIP = new CoffeeDrip('Coffee drip mashine');
DRIP.on();
DRIP.off();
DRIP.ready();
//CORN
function CoffeeCorn(coffee){
    this.coffee = coffee;
};
CoffeeCorn.prototype = CoffeeDrip.prototype;
CoffeeCorn.prototype.nowork = function(){
    console.log(this.coffee, ' doesnt work');
};
const CORN = new CoffeeDrip('Coffee corn');
CORN.on();
CORN.off();
CORN.nowork();
// COFFEE MACHINE
function CoffeeMachine(coffee){
    this.coffee = coffee;
};
CoffeeMachine.prototype = CoffeeMake.prototype;
CoffeeMachine.prototype.best = function(){
    console.log(this.coffee,' make your day longer');
}
const MACHINE = new CoffeeDrip('Coffee machine');
MACHINE.on();
MACHINE.off();
MACHINE.best();