class Worker {
    constructor(name,sname,rate,days){
        this.firstName = name;
        this.surname = sname;
        this.rate = rate;
        this.days = days;
    };
    getSalary(){
        return this.days* this.rate;
    }
};
// WORKER1
const worker1 = new Worker('Oleg','Senkiv',10,31);
console.log(worker1.firstName);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());
//  WORKER2
const worker2 = new Worker('Nazar','Tyz',11,30);
console.log(worker2.firstName);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());
//suma 2 workeriv
const suma = worker1.getSalary() + worker2.getSalary();
console.log(suma)