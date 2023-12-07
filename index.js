//// for Menupopup  ////////

function Menu(e){
  let list = document.querySelector('ul');

  e.name === 'menu' ? (e.name = "close",list.classList.
  add('top-[45px]') , list.classList.add('opacity-100')
  ) :( e.name = "menu" ,list.classList.remove('top-[45px]')
  ,list.classList.remove('opacity-100'))
}

//// for Menupopup end  ////////



function toggleContent() {
    var hiddenContent = document.getElementById("hiddenContent1");
    var button = document.querySelector("button");

    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        button.textContent = "See less";
    } else {
        hiddenContent.style.display = "none";
        button.textContent = "See more";
    }
}


let page = document.getElementById("page");
function closepage(){
  page.classList.add("open-page");
}
function openpage(){
  page.classList.remove("open-page");
}

let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}


//// for firstto  ////////


//// for email  ////////

var emailfield1 = document.getElementById("email-field1");
var emailerror1 = document.getElementById("email-error1");

function validateEmail2() {
    if(!emailfield1.value.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[+*\.][a-z]{3,4}$/)) {
      emailerror1.innerHTML ="Valid email required";
      emailfield1.style.borderColor ="red";
      emailfield1.style.backgroundColor =" rgb(248, 200, 200)";
      return false;
    }
  
    else {
      emailerror1.innerHTML ="";
      emailfield1.style.borderColor ="green";
      emailfield1.style.backgroundColor ="";
      return true;
    }
  }

  //// for email  ////////





