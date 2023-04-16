// to call modal window SignIn
let signIn = document.querySelector(".list-in .sign-in");
signIn.onclick =()=> {

    document.querySelector(".section-login").style.display="none"
    document.querySelector(".slider-signin").style.display="block"
}

// to call modal window LogIn
let logIn = document.querySelector(".list-in .log-in");
logIn.onclick =()=> {
    document.querySelector(".slider-signin").style.display="none"
    document.querySelector(".section-login").style.display="block"
}

// to close modal window LogIn and SignIn on ESC
function closeSignIn (event) {
    console.log(event.code)
    
    if(event.keyCode === 27) {
    document.querySelector(".slider-signin").style.display="none";
    document.querySelector(".section-login").style.display="none"
    }
  return false;
}

document.onkeydown = closeSignIn;