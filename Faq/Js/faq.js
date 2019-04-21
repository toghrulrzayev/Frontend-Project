"use strict";
let myClick = document.getElementsByClassName("click");

for (let i = 0; i < myClick.length; i++) {
    myClick[i].addEventListener("click", function () {
        let clicked = this.nextElementSibling;
        clicked.classList.toggle("active");
        // let plus = this.querySelector(".plus");
        // plus.classList.toggle("opacityPlus");
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