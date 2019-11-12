var slideIndex = 0;
var timer;

function showSlides() {
  var i;
  { 
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transition  = "3.0s";
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
   slides[slideIndex-1].style.transition  = "3.0s";
   slides[slideIndex-1].style.opacity = "1";
 
  dots[slideIndex-1].classList.add("active"); 
  
  timer = setTimeout(showSlides, 3000);
}
} 

function stopSlide(){
 clearTimeout (timer);
}

function resumeSlide(){
	timer = setTimeout(showSlides, 10000);
}

document.addEventListener('visibilitychange', function(showSlides) {
  if (document.hidden) {
    stopSlide();
    document.title = "Scramble is now paused.";
  } else {
    resumeSlide();
    document.title = "Scramble";
  }
});
