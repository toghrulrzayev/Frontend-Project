"use strict";

var allImageSlideList = document.querySelectorAll(".img-content");

var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");


const slideWidthDefault = document.querySelectorAll(".img-content")[0].clientWidth;
var slideWidth = 0;
const listLenght = (allImageSlideList.length)/2;
var commonWidth = 0;

nextButton.addEventListener('click',()=>{
    commonWidth = slideWidthDefault*listLenght;

    if(commonWidth!=slideWidth){
        slideWidth+=slideWidthDefault;

        for (let i = 0; i < allImageSlideList.length; i++) {
            allImageSlideList[i].style.transform="translateX(-"+slideWidth+"px)";
        }
    }
});

prevButton.addEventListener('click',()=>{
    if(slideWidth!=0){
        slideWidth-=slideWidthDefault;
        
        for (let i = 0; i < allImageSlideList.length; i++) {
            allImageSlideList[i].style.transform="translateX(-"+(slideWidth)+"px)";
        }
    }
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