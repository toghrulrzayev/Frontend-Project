"use strict";


let button = document.querySelector(".submit");
const numberPattern = /^(([0-9])*$)/;
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateForm() {

    let firstName = document.forms["myForm"]["firstName"];
    let lastName = document.forms["myForm"]["lastName"];
    let userName = document.forms["myForm"]["userName"];
    let password = document.forms["myForm"]["password"];
    let replacePassword = document.forms["myForm"]["replacePassword"];
    let email = document.forms["myForm"]["email"];
    let mobilePhone = document.forms["myForm"]["mobilePhone"];


    if (firstName.value == "" || lastName.value == "" || userName.value == "" || password.value == "" || replacePassword.value == "" || email.value == "" || mobilePhone.value == "") {
        firstName.style.border = "1px solid red";
        lastName.style.border = "1px solid red";
        userName.style.border = "1px solid red";
        password.style.border = "1px solid red";
        replacePassword.style.border = "1px solid red";
        email.style.border = "1px solid red";
        mobilePhone.style.border = "1px solid red";
        return false;
    }
   
    if (!email.value.match(emailPattern)) {
        alert("You are writing wrong for Email")
        email.style.border = "1px solid red";
        return false;
    }
    if (!isNaN(firstName.value)) {
        alert("You are must write 'Word' for Firstname")
        firstName.style.border = "1px solid red";
        return false;
    }
    if (!isNaN(lastName.value)) {
        alert("You are must write 'Word' for Lastname")
        lastName.style.border = "1px solid red";
        return false;
    }
    if (!isNaN(userName.value)) {
        alert("You are must write 'Word' for Username")
        userName.style.border = "1px solid red";
        return false;
    }
    if (!mobilePhone.value.match(numberPattern)) {
        alert("You are writing only numbers for Mobil Phone")
        mobilePhone.style.border = "1px solid red";
        return false;
    }
    else{
        firstName.value="";
        lastName.value="";
        userName.value="";
        password.value="";
        replacePassword.value="";
        email.value="";
        mobilePhone.value="";


        // firstName.style.border = "none";
        // lastName.style.border = "none";
        // userName.style.border = "none";
        // password.style.border = "none";
        // replacePassword.style.border = "none";
        // email.style.border = "none";
        // mobilePhone.style.border = "none";
        
    }
    return false;
}


//navbar

function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  
    window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }