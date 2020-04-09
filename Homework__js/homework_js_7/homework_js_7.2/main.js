let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;

MyMath.sum = function(){
    return this.a + this.b; 
};
console.log(MyMath.sum());

MyMath.multiplication = function(){
    console.log(this.a * this.b)
};
MyMath.multiplication();

MyMath.division = function(){
    console.log(this.a / this.b)
};
MyMath.division();

MyMath.subtraction = function(){
    console.log(this.a - this.b)
};
MyMath.subtraction();