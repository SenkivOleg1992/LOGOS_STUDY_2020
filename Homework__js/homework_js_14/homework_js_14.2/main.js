// task 2
let getSel = x => document.querySelector(x);
let create = document.forms["create"];

create.agree.addEventListener("click", function () {
  if (create.agree.checked) {
    create.signUp.disabled = false;
    create.signUp.style.backgroundColor = "green";
    create.signUp.addEventListener("click", function () {
      // if(Create.em.value == '' && create.sN.value == '' && create.fN.value == ''){
      for (let i = 0; i < create.elements.length - 5; i++) {
        if (create.elements[i].value == '') {
          getSel(".profile").style.display = "none";
          getSel(".account").style.display = "flex";
          console.log(create.elements[i])
          create.elements[i].style.backgroundColor = '#C14242';
        } else {
          create.elements[i].style.backgroundColor = '#3FBF3F';
          let firstName = create.fN.value;
          let secondName = create.sN.value;
          let email = create.em.value;
          let posit = create.choose.value;
          let sex = create.sex.value;
          if (create.em.value.includes("@") && !create.em.value.startsWith("@") && !create.em.value.endsWith("@")) {
            create.em.placeholder = "Email маэ складатись із @"
          }
          if (create.sex.value == "man") {
            getSel(".profile").style.display = "flex";
            getSel('.account').style.display = 'none';
            getSel(".icon").innerHTML = '<i class="uil uil-mars"></i>';
            getSel(".name").innerHTML = firstName + ' ' + secondName;
            getSel(".eemail").innerHTML = email;
            getSel('.pos').innerHTML = posit;
          } else if (create.sex.value == "woman") {
            getSel(".profile").style.display = "flex";
            getSel('.account').style.display = 'none';
            getSel(".icon").innerHTML = '<i class="uil uil-venus"></i>';
            getSel(".name").innerHTML = firstName + ' ' + secondName;
            getSel(".eemail").innerHTML = email;
            getSel('.pos').innerHTML = posit;
          }
        }
      }
      getSel('.signOut').addEventListener('click', function () {
        getSel(".profile").style.display = "none";
        getSel('.account').style.display = 'flex';
        create.signUp.style.backgroundColor = "";
        create.signUp.disabled = true;
        create.reset();
      });
      // mouseover and mouseout
      getSel('.signOut').addEventListener('mouseover', function () {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
      })
      getSel('.signOut').addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
        this.style.color = '';
      })

      // create.reset();
    });
  } else {
    create.signUp.style.backgroundColor = "";
    create.signUp.disabled = true;
  }
});