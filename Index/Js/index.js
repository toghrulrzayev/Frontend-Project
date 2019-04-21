"use strict";
//Slider

const sContainer = document.querySelector(".slider-container");
const sItems = Array.from(sContainer.children);
const prevButton = document.querySelector(".slider-button-left");
const nextButton = document.querySelector(".slider-button-right");

var sliderItems = document.querySelectorAll(".slider-item");

let itemSize = sItems[0].getBoundingClientRect();
console.log(itemSize);
const setSliderPosition = (item, index) => {
    item.style.left = index * itemSize.width + "px";
};

sItems.forEach(setSliderPosition);

// Click prev button, slider move to the left
prevButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");
    if (activeItem.previousElementSibling) {
        let prevItem = activeItem.previousElementSibling;
        prevItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");

        prevItem.querySelector(".slider-content").classList.add("animated", "bounceInLeft");
        activeItem.querySelector(".slider-content").classList.remove("animated", "bounceInLeft", "bounceInRight");
        sContainer.style.transform = "translateX(-" + prevItem.style.left + ")";
    }
    else{
     sContainer.style.transform = "translateX(-2698px)";
     activeItem.classList.remove("active-slide");
     sliderItems[sliderItems.length-1].classList.add("active-slide");
}
    
});
// Click next button, slider move to the right
nextButton.addEventListener("click", function (e) {
    let activeItem = sContainer.querySelector(".active-slide");

console.log(activeItem);

    if (activeItem.nextElementSibling) {
        let nextItem = activeItem.nextElementSibling;
        nextItem.classList.add("active-slide");
        activeItem.classList.remove("active-slide");

        nextItem.querySelector(".slider-content").classList.add("animated", "bounceInRight");
        activeItem.querySelector(".slider-content").classList.remove("animated", "bounceInRight", "bounceInLeft");
        sContainer.style.transform = "translateX(-" + nextItem.style.left + ")";
    }
    else{
         sContainer.style.transform = "translateX(0px)";
         activeItem.classList.remove("active-slide");
         sliderItems[0].classList.add("active-slide");
    }
});




//Youtube videos

 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '600vh',
     width: '100%',
     videoId: 'mFYZnMjUinc',
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 function onPlayerReady(event) {
   event.target.playVideo();
 }

 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }

//slider little
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