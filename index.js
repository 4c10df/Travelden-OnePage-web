//// for Menupopup  ////////

function Menu(e){
  let list = document.querySelector('ul');

  e.name === 'menu' ? (e.name = "close",list.classList.
  add('top-[45px]') , list.classList.add('opacity-100')
  ) :( e.name = "menu" ,list.classList.remove('top-[45px]')
  ,list.classList.remove('opacity-100'))
}

//// bg color for nav  ////////
function changeBg(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg)
//// bg color for nav end ////////

//// for Menupopup end  ////////


//// for seemore  ////////
let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
//// ends for popup   ////////

//// for button apper/ off & on  ////////
let arrowdown = document.getElementById("arrowdown");
function appear(){
  arrowdown.classList.add("close-222");
}
function appear1(){
  arrowdown.classList.remove("close-222");
}
//// for button apper/ off & on downbutton ////////

let arrowdown1 = document.getElementById("arrowdown1");
function appear22(){
  arrowdown1.classList.add("close-223");
}
function appear12(){
  arrowdown1.classList.remove("close-223");
}

//// for seemore ends  ////////


//// for email  ////////

var emailfield1 = document.getElementById("email-field1");
var emailerror1 = document.getElementById("email-error1");

function validateEmail2() {
    if(!emailfield1.value.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[+*\.][a-z]{3,4}$/)) {
      emailfield1.style.borderColor ="red";
      emailfield1.style.backgroundColor =" rgb(248, 200, 200)";
      return false;
    }
    else {
      
      emailfield1.style.borderColor ="green";
      emailfield1.style.backgroundColor ="";
      return true;
    }
  }

  //// for email  ////////





