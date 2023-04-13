let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let leftArrow = document.getElementsByClassName("prev")[0];
  let rightArrow = document.getElementsByClassName("next")[0];

  // Hide left arrow on first slide
  if (n === 1) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }
  
  // Hide right arrow on last slide
  if (n === slides.length) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "block";
  }

  //Handle Slide display
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