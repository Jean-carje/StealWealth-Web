let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// navbar toggle
const toggleBtn = document.getElementById('navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse')

toggleBtn.addEventListener('click', function(){
    navDiv.classList.toggle('showNav');
    if(toggleBtn.firstElementChild.className == "fas fa-bars fa-fw"){
        toggleBtn.firstElementChild.className = "fas fa-times fa-fw";
        document.body.style.overflow = "hidden";
    } else {
        toggleBtn.firstElementChild.className = "fas fa-bars fa-fw";
        document.body.style.overflow = "visible";
    }
});

// stopping animation & transition during window resizing
let resizeTimer;
window.addEventListener('resize', function(){
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});


// navigation in small screen
const links = document.querySelectorAll('.nav-link');
links.forEach(function(link){
    link.addEventListener('click', function(){
        document.body.style.overflow = "visible";
        navDiv.classList.remove('showNav');
        toggleBtn.firstElementChild.className = "fas fa-bars fa-fw";
    });
});