const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

const menuToggle = document.querySelector('.hamburger');
const showcase = document.querySelector('.showcase');

var vid = document.getElementById('index-video');



/****************************/
/* slider intro */
/****************************/

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", { y: "-100%", duration: 1.5, stagger: .5});
tl.to(".intro", { y: "-100%", duration: 1}, "-=1");
tl.fromTo('.home-content', {opacity: 0}, {opacity: 1});
tl.fromTo('.overlay', {opacity: 0}, {opacity: 1});
tl.fromTo('.contact-container', {opacity: 0}, {opacity: 1});


/****************************/
/* toggle menu */
/****************************/

function openMenu() {
  document.getElementById("menu").style.height = "100%";
  document.getElementById("contact-container").style.zIndex = "-10";
}

function closeMenu() {
  document.getElementById("menu").style.height="0%";
  document.getElementById("contact-container").style.zIndex = "10";
}

/*
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
*/

/**********************************************/
/* slow down video played on index.html */
/**********************************************/

// getPlaySpeed();
setPlaySpeed();

function getPlaySpeed() { 
  alert(vid.playbackRate);
} 

function setPlaySpeed() { 
  vid.playbackRate = .7;
} 


/**********************************************/
/* contact form */
/**********************************************/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});