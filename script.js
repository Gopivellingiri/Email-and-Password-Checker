const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = form.querySelector(".password"),
  confirmPassField = form.querySelector(".confirm-password"),
  confirmPassInput = confirmPassField.querySelector(".confirm_passinput");

function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid");
  } else emailField.classList.remove("invalid");
}

const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bxs-hide", "bxs-show");
      return (pInput.type = "text");
    } else {
      eyeIcon.classList.replace("bxs-show", "bxs-hide");
      return (pInput.type = "password");
    }
  });
});

function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passInput.value.match(passPattern)) {
       return passField.classList.add('invalid')
    } else {
        passField.classList.remove('invalid')
    }
    }

function confirmPass() {
 if(passInput.value !== confirmPassInput.value || confirmPassInput.value === "") {
   return confirmPassField.classList.add('invalid')
} else {
      confirmPassField.classList.remove('invalid')
 }
}
    

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass()

  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  confirmPassInput.addEventListener('keyup', confirmPass)
});


