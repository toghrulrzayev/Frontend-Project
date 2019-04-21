"use strict";
let buttons = document.querySelectorAll(".tab-button");
let tabs = document.querySelectorAll(".alldata");
buttons[0].style.background = "#fd602c"

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let elementId = this.getAttribute("data-tab-target");
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.add("d-none");
           buttons[i].style.backgroundColor = "#fd602c"
           for(let j=0; j<buttons.length; j++){
               if(i!=j){
                buttons[j].style.background = "none"
               }
           }
        }
        document.querySelector("#" + elementId).classList.remove("d-none");
       
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