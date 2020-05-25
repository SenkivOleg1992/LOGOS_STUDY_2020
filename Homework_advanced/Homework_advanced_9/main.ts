let getSel:any = x =>document.querySelector(x);
let userForm:HTMLFormElement = document.forms["userForm"];
let tbody:HTMLElement = document.createElement("tbody");

//  ................add user background.............//
userForm.addUser.addEventListener("mouseover", function ():void {
    this.style.background = "green";
    this.style.color = "white";
});

userForm.addUser.addEventListener("mouseout", function():void{
    this.style.background = "";
    this.style.color = "";
});
//  ........................

let users:any[] = [];
let renderBodyTag:HTMLElement = document.querySelector('.renderBody');

// функція нового юзера

userForm.addUser.addEventListener("click", function():void {
    let login:any = userForm.login.value;
    let password:any = userForm.password.value;
    let email:any = userForm.email.value;
    if(login != "" && password != "" && email != ""){
        let newUser = new Profile(login, password, email);
        users.push(newUser);
        userForm.reset();
        renderBody();
    }
});
function Profile(login:any, password:any,email:any):void {
    this.login = login;
    this.password = password;
    this.email = email;
}
function renderBody():void{
    renderBodyTag.innerHTML = "";
    for(let i:any = 0; i < users.length; i++){
        let tr:HTMLElement = document.createElement("tr");
        let td:HTMLElement = document.createElement("td");
        td.innerHTML = i + 1;
        tr.appendChild(td);

        for(let key in users[i]) {
            console.log(users[i][key]);
            let td:HTMLElement = document.createElement("td");
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        };
        tr.innerHTML += `<button style=' background-color: yellow; width: 100px; height: 40px; margin: 5px 5px;' onclick="editValue(${i})">Edit</button>`;
        tr.innerHTML += `<button style=' background-color: red; width: 100px; height: 40px;  margin: 5px 5px;' onclick="deleteValue(${i})">Delete</button>`;
        renderBodyTag.appendChild(tr);
    }
};

//...................edit   value;

function editValue(ind:any):void{
    userForm.login.value = users[ind].login;
    userForm.password.value = users[ind].password;
    userForm.email.value = users[ind].email;
    
    userForm.addUser.style.display = "none";
    userForm.changeUser.style.display = "block";
    userForm.changeUser.onclick = function ():void{
        changeValue(ind)
    };
};

function changeValue(ind:any):void{
    users[ind].login = userForm.login.value;
    users[ind].password = userForm.password.value;
    users[ind].email = userForm.email.value;

    userForm.addUser.style.display = "block";
    userForm.changeUser.style.display = "none";
    userForm.reset();

    renderBody();
};


function deleteValue(ind:number):void{
    users.splice(ind, 1);
    renderBody();
};















































