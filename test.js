var slideIndex = 0;
var timer;

function showSlides() {
  var i;
  { 
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; 
  slides[slideIndex-1].className += " fade";
  timer = setTimeout(showSlides, 10000);
}
} 

function stopSlide(){
 clearTimeout (timer);
}

function resumeSlide(){
	timer = setTimeout(showSlides, 10000);
}

function fade (){
  slides[slideIndex].className += " fadein";
  slides[slideIndex-1].className += " fadeout";
}