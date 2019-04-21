"use strict";


let button = document.querySelector(".submit");
const numberPattern = /^(([0-9])*$)/;
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateForm() {

    let name = document.forms["myForm"]["name"];
    let adress = document.forms["myForm"]["adress"];
    let telephone = document.forms["myForm"]["telephone"];
    let subjec = document.forms["myForm"]["subjec"];
    let textarea = document.forms["myForm"]["textarea"];

    if (name.value == "" || adress.value == "" || telephone.value == "" || subjec.value == "" || textarea.value == "") {
        name.style.border = "1px solid red";
        adress.style.border = "1px solid red";
        telephone.style.border = "1px solid red";
        subjec.style.border = "1px solid red";
        textarea.style.border = "1px solid red";

        return false;
    }
    if (!adress.value.match(emailPattern)) {
        alert("You are writing wrong for Email")
        adress.style.border = "1px solid red";
        return false;
    }
    if (!isNaN(name.value)) {
        alert("You are must write 'Word'  for Name")
        name.style.border = "1px solid red";
        return false;
    }
    if (!isNaN(subjec.value)) {
        subjec.style.border = "1px solid red";
        return false;
    }
    if (!telephone.value.match(numberPattern)) {
        alert("You are writing only numbers for Telephone")
        telephone.style.border = "1px solid red";
        return false;
    }
    else{
        name.value="";
        adress.value="";
        telephone.value="";
        subjec.value="";
        textarea.value="";
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