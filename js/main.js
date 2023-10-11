let form = document.querySelector("form");
let emailInput = document.querySelector(".email");
let emailError = document.querySelector(".email-msg");
let passwordInput = document.querySelector(".password");
let passwordError = document.querySelector(".password-msg");
let confPasswordInput = document.querySelector(".conf-password");
let confPasswordError = document.querySelector(".conf-msg");

function CheckEmail(){
    let emailPattern = /\w+@\w+.(com|net)/;
    if(!emailPattern.test(emailInput.value)){
        emailError.style.display='block';
    }
    else{
        emailError.style.display="none";
    }
}

let eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(e=>{
    e.addEventListener("click",(e)=>{
        let pInput = e.currentTarget.parentElement.querySelector("input");
        if(pInput.type === "password"){
        e.currentTarget.classList.replace("fa-eye-slash","fa-eye");
        pInput.type = "text";
        }
        else{
            e.currentTarget.classList.replace("fa-eye","fa-eye-slash");
        pInput.type = "password";
        }
    })
})
function checkPassword(){
    let passPattern = /\w{8,}/;
    if(!passPattern.test(passwordInput.value)){
        passwordError.style.display="block";
    }
    else{
        passwordError.style.display="none";
    }
}

function checkConfirm(){
    if(confPasswordInput.value !== passwordInput.value){
        confPasswordError.style.display="block";
    }
    else{
        confPasswordError.style.display="none";

    }
}



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    CheckEmail();
    emailInput.addEventListener("keyup",CheckEmail);
    checkPassword();
    passwordInput.addEventListener("keyup",checkPassword);
    checkConfirm();
    confPasswordInput.addEventListener("keyup",checkConfirm);

    if(emailError.style.display==="none" && confPasswordError.style.display==="none" && passwordError.style.display==="none"){
       location.href= form.getAttribute("action");
    }
})