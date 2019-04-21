"use strict";
let myClick = document.getElementsByClassName("click");

for (let i = 0; i < myClick.length; i++) {
    myClick[i].addEventListener("click", function () {
        let clicked = this.nextElementSibling;
        clicked.classList.toggle("active");
       
        let plus = document.getElementsByClassName("plus");
        plus[i].classList.toggle("opacityPlus");

        for (let j = 0; j < myClick.length; j++) {
            if (i != j) {
                let active = myClick[j].nextElementSibling;
                active.style.maxHeight = null;
                console.log(active);
                active.classList.remove("active");
                plus[j].classList.remove("opacityPlus");
            }
        }
        if (clicked.style.maxHeight) {
            clicked.style.maxHeight = null;
        } else {
            clicked.style.maxHeight = clicked.scrollHeight + "px";
        }
    });
}






const leftIcon=document.getElementById("left");
const rightIcon=document.getElementById("right");
const firstItem=document.querySelector(".first-item:first-child")
const secondItem=document.querySelector(".first-item:nth-child(2)")
rightIcon.addEventListener("click", function(){
    firstItem.style.left="-400px"
    firstItem.style.transition="all 0.3s ease-in";

    secondItem.style.left="0px";
    secondItem.style.transition="all 0.3s ease-in";
   
    rightIcon.classList.add("active-indicator");
    leftIcon.classList.remove("active-indicator");
});

leftIcon.addEventListener("click", function(){
    firstItem.style.left="0px"
    firstItem.style.transition="all 0.3s ease-in"

    secondItem.style.left="400px"
    secondItem.style.transition="all 0.3s ease-in"

    rightIcon.classList.remove("active-indicator");
    leftIcon.classList.add("active-indicator");
});


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