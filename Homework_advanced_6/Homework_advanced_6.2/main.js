let getSel = x => document.querySelector(x);
let formSignUp = document.forms['formSignUp'];
let formSignIn = document.forms['formSignIn'];
let signUpCont = getSel('.container__sign-up');
let signInCont = getSel('.container__sign-in');
let RegExpEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let RegExpPassword = /^[a-zA-Z0-9_-]{6,18}$/
let users = [];

getSel('.signInNow').addEventListener('click',function(){
    signUpCont.style.display = 'none';
    signInCont.style.display = 'block';
});

getSel('.signUpNow').addEventListener('click',function(){
    signUpCont.style.display = 'block';
    signInCont.style.display = 'none';
});

function addNewUser(){
    let firstName = formSignUp.firstName.value;
    let lastName = formSignUp.lastName.value;
    let email = formSignUp.email.value;
    let password = formSignUp.password.value;

    let obj = new User(firstName,lastName,email,password);

    if(firstName != '' && lastName != '' && email != '' && password != ''){
        if(localStorage.length > 0 && localStorage.getItem('users')){
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(obj);
        localStorage.setItem('users',JSON.stringify(users));
        console.log(users);
    };
};

formSignUp.btnSignUp.addEventListener('click',function(){
    addNewUser();
    formSignUp.reset()
});

function openProfile(){
    for(let i = 0; i < users.length; i++){
        console.log(users[i])
    }
};
formSignIn.btnSignIn.addEventListener('click',function(){
    getSel('.container-profile').style.display = 'block';
    signInCont.style.display = 'none';
    openProfile();
});

getSel('.btnProfile').addEventListener('click',function(){
    getSel('.container-profile').style.display = 'none';
    signInCont.style.display = 'block';
});
















class User {
    constructor(first,last,email,pass){
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.password = pass;
    }
};




