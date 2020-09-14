function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 1600);

  function checkReady() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalID);
          callback.call(this);
      }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
  show('main-page', true);
  show('loading', false);
});

// Wrap every letter in a span
function wrapLetters(className){
  setTimeout(function wrap(){
    var textWrapper = document.querySelector(className);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    className+=' .letter';
    anime.timeline({repeat: 1})
    
    .add({
      targets: className,
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el, i) => 70*i
    });
  },1600);
}


var slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
showSlides(slideIndex += 1);
}, 5000);  

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
