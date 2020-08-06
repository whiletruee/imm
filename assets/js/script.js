$(document).ready(function(){
	$(".courses-carousel").owlCarousel({
  	items:1,
  	loop: true,
  	autoplay: true,
    margin:0,
    stagePadding:0,
    nav : true
  });

  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop: true,
    margin:0,
    stagePadding:0,
    nav : true
  });

  let navbarHeight = $('nav.navbar').css('height');
  $('.main-carousel,.banner-carousel').css('margin-top', navbarHeight);

});

$(document).on('click', 'button.filter', function(){
  $('button.filter').removeClass('primary-bg tertiary-color');
  $(this).addClass('primary-bg tertiary-color');
});

window.onload = window.onresize = function() {



  let testimonials = document.querySelectorAll('.testimonial-card-body.card-body');
  

  let testimonialHeight = 0;
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.height = "auto";
    if(testimonialHeight < testimonials[i].offsetHeight){
      testimonialHeight = testimonials[i].offsetHeight;
    }
  }
  testimonials.forEach(function(item, index){

    item.style.height = `${testimonialHeight+20}px`;
  });

  let cards = document.querySelectorAll('.faculty-card-body.card-body');
  

  let cardHeight = 0;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.height = "auto";
    if(cardHeight < cards[i].offsetHeight){
      cardHeight = cards[i].offsetHeight;
    }
  }
  cards.forEach(function(item, index){

    item.style.height = `${cardHeight+20}px`;
  });

  let faculties = document.querySelectorAll('.faculty-img');
  

  let facultyHeight = 0;
  let facultyWidth = 0;
  for (let i = 0; i < faculties.length; i++) {
    faculties[i].style.height = "auto";
    faculties[i].style.width = "auto";
    if(facultyHeight < faculties[i].offsetHeight){
      facultyHeight = faculties[i].offsetHeight;
    }

    if(facultyWidth < faculties[i].offsetWidth){
      facultyWidth = faculties[i].offsetWidth;
    }
  }
  faculties.forEach(function(item, index){

    item.style.height = `${facultyHeight+20}px`;
    item.style.width = `${facultyWidth+20}px`;
  });
}

/*******Hina's Code ******************/

$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery figure").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});





function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*************** end of Hina's code *******************/