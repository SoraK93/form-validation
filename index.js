let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessages = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");

let field, firstName, lastName, email, password;
let fnTarget, lnTarget, emailTarget, pwdTarget;
let fnFlag, lnFlag, eFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.[a-z]\w{1,2})+$/i;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

formData.addEventListener("keyup", (event) => {
  event.preventDefault();
  field = event.target.dataset.key;
  switch (field) {
    case "firstName":
      firstName = event.target.value;
      fnTarget = event.target;
      emptyFieldMessages[0].classList.add("d-none");
      break;
    case "lastName":
      lastName = event.target.value;
      lnTarget = event.target;
      emptyFieldMessages[1].classList.add("d-none");
      break;
    case "email":
      email = event.target.value;
      emailTarget = event.target;
      emptyFieldMessages[2].classList.add("d-none");
      break;
    case "password":
      password = event.target.value;
      pwdTarget = event.target;
      emptyFieldMessages[3].classList.add("d-none");
      break;
    default:
      firstName = lastName = email = password = "";
      break;
  }
});

document
  .querySelector(".fn-container .input")
  .addEventListener("focusout", (event) => {
    event.preventDefault();
    if (event.target.value.trim() === "") {
      emptyFieldMessages[0].classList.remove("d-none");
    }
  });
document
  .querySelector(".ln-container .input")
  .addEventListener("focusout", (event) => {
    event.preventDefault();
    if (event.target.value.trim() === "") {
      emptyFieldMessages[1].classList.remove("d-none");
    }
  });
document
  .querySelector(".email-container .input")
  .addEventListener("focusout", (event) => {
    event.preventDefault();
    if (event.target.value.trim() === "") {
      emptyFieldMessages[2].classList.remove("d-none");
    }
  });
document
  .querySelector(".pwd-container .input")
  .addEventListener("focusout", (event) => {
    event.preventDefault();
    if (event.target.value.trim() === "") {
      emptyFieldMessages[3].classList.remove("d-none");
    }
  });

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(firstName, lastName, email, password);

  if (firstName) {
    if (!nameRegex.test(firstName)) {
      errorMessages[0].classList.remove("d-none");
      fnTarget.classList.add("error");
      fnFlag = false;
    } else {
      fnTarget.classList.remove("error");
      errorMessages[0].classList.add("d-none");
      fnFlag = true;
    }
  } else {
    emptyFieldMessages[0].classList.remove("d-none");
  }

  if (lastName) {
    if (!nameRegex.test(lastName)) {
      errorMessages[1].classList.remove("d-none");
      lnTarget.classList.add("error");
      lnFlag = false;
    } else {
      lnTarget.classList.remove("error");
      errorMessages[1].classList.add("d-none");
      lnFlag = true;
    }
  } else {
    emptyFieldMessages[1].classList.remove("d-none");
  }

  if (email) {
    if (!emailRegex.test(email)) {
      errorMessages[2].classList.remove("d-none");
      emailTarget.classList.add("error");
      eFlag = false;
    } else {
      emailTarget.classList.remove("error");
      errorMessages[2].classList.add("d-none");
      eFlag = true;
    }
  } else {
    emptyFieldMessages[2].classList.remove("d-none");
  }

  if (password) {
    if (!passwordRegex.test(password)) {
      errorMessages[3].classList.remove("d-none");
      pwdTarget.classList.add("error");
      pwdFlag = false;
    } else {
      pwdTarget.classList.remove("error");
      errorMessages[3].classList.add("d-none");
      pwdFlag = true;
    }
  } else {
    emptyFieldMessages[3].classList.remove("d-none");
  }

  if (fnFlag && lnFlag && eFlag && pwdFlag) {
    fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
    window.location.href = "./success.html";
  }
});

for (let index in errorMessages) {
  if (errorMessages[index] && errorMessages[index].classList) {
    errorMessages[index].classList.add("d-none");
  }
  if (emptyFieldMessages[index] && emptyFieldMessages[index].classList) {
    emptyFieldMessages[index].classList.add("d-none");
  }
}

showPasswordBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(pwdTarget);
  if (pwdTarget.getAttribute("type") === "text") {
    pwdTarget.setAttribute("type", "password");
    showPasswordBtn.innerHTML = `<span class="material-symbols-outlined">visibility</span>`;
    
  } else {
    pwdTarget.setAttribute("type", "text");
    showPasswordBtn.innerHTML = `<span class="material-symbols-outlined">visibility_off</span>`;
  }
});
