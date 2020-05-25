let getSel = x => document.querySelector(x);
let userForm = document.forms["userForm"];
let tbody = document.createElement("tbody");
//  ................add user background.............//
userForm.addUser.addEventListener("mouseover", function () {
    this.style.background = "green";
    this.style.color = "white";
});
userForm.addUser.addEventListener("mouseout", function () {
    this.style.background = "";
    this.style.color = "";
});
//  ........................
let users = [];
let renderBodyTag = document.querySelector('.renderBody');
// функція нового юзера
userForm.addUser.addEventListener("click", function () {
    let login = userForm.login.value;
    let password = userForm.password.value;
    let email = userForm.email.value;
    if (login != "" && password != "" && email != "") {
        let newUser = new Profile(login, password, email);
        users.push(newUser);
        userForm.reset();
        renderBody();
    }
});
function Profile(login, password, email) {
    this.login = login;
    this.password = password;
    this.email = email;
}
function renderBody() {
    renderBodyTag.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = i + 1;
        tr.appendChild(td);
        for (let key in users[i]) {
            console.log(users[i][key]);
            let td = document.createElement("td");
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        }
        ;
        tr.innerHTML += `<button style=' background-color: yellow; width: 100px; height: 40px; margin: 5px 5px;' onclick="editValue(${i})">Edit</button>`;
        tr.innerHTML += `<button style=' background-color: red; width: 100px; height: 40px;  margin: 5px 5px;' onclick="deleteValue(${i})">Delete</button>`;
        renderBodyTag.appendChild(tr);
    }
}
;
//...................edit   value;
function editValue(ind) {
    userForm.login.value = users[ind].login;
    userForm.password.value = users[ind].password;
    userForm.email.value = users[ind].email;
    userForm.addUser.style.display = "none";
    userForm.changeUser.style.display = "block";
    userForm.changeUser.onclick = function () {
        changeValue(ind);
    };
}
;
function changeValue(ind) {
    users[ind].login = userForm.login.value;
    users[ind].password = userForm.password.value;
    users[ind].email = userForm.email.value;
    userForm.addUser.style.display = "block";
    userForm.changeUser.style.display = "none";
    userForm.reset();
    renderBody();
}
;
function deleteValue(ind) {
    users.splice(ind, 1);
    renderBody();
}
;
