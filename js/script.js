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
tl.fromTo('.engage-container', {opacity: 0}, {opacity: 1});

/****************************/
/* toggle menu */
/****************************/

function openMenu() {
  document.getElementById("menu").style.height = "100%";
  document.getElementById("contact-container").style.zIndex = "-10";
  document.getElementById("about-container").style.zIndex = "-10";
  document.getElementById("engage-container").style.zIndex = "-10";
  document.getElementById("play-container").style.zIndex = "-10";
  document.getElementById("map").style.zIndex = "-10";
}

function closeMenu() {
  document.getElementById("menu").style.height="0%";
  document.getElementById("contact-container").style.zIndex = "10";
  document.getElementById("about-container").style.zIndex = "10";
  document.getElementById("engage-container").style.zIndex = "10";
  document.getElementById("play-container").style.zIndex = "10";
  document.getElementById("map").style.zIndex = "10";
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
if (vid !== null) {
  setPlaySpeed();
}

function getPlaySpeed() { 
  alert(vid.playbackRate);
} 

function setPlaySpeed() { 
  vid.playbackRate = .5;
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

/**********************************************/
/* about page picture reveal */
/**********************************************/

var can = document.getElementById('canvas');

if (can !== null) {

  var ctx = can.getContext('2d');

  can.addEventListener('mousemove', function(e) {
      var mouse = getMouse(e, can);
      redraw(mouse);
  }, false);


  function redraw(mouse) {
      can.width = can.width;
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.rect(0,0,785,390);
      ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI*2, true);
      ctx.clip();
      ctx.drawImage(overlay_img, 0, 0);
  }

  var overlay_img = new Image();
  overlay_img.src = '../images/beachcleanup_before.jpg';

  var img = new Image();
  img.src = '../images/beachcleanup_after.jpg';

  img.onload = function() {
      redraw({x: -785, y: -387})
  }

  img.onmousedown = function(event) {
      ctx.drawImage(overlay_img, 0, 0);
  }

  function getMouse(e, canvas) {
      var element = canvas,
          offsetX = 0,
          offsetY = 0,
          x, y;

      // compute total offset
      if (element.offsetParent !== undefined) {
          do {
              offsetX += element.offsetLeft;
              offsetY += element.offsetTop;
          } while ((element = element.offsetParent));
      }

      x = e.pageX - offsetX;
      y = e.pageY - offsetY;

      return {
          x: x,
          y: y
      };
  }

}
