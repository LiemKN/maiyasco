/* small screen and mobile navigation bar */
const nav = document.getElementById('navigation');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerIcon.addEventListener('click', () => {
  nav.classList.toggle('open');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  nav.classList.remove('open');
});

/* small screen and mobile slideshow */
var index = 0;

function slideshow() {
  const slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  index++;
  
  if (index > slides.length) { 
    index = 1;
  }

  slides[index - 1].style.display = "block";
  setTimeout(slideshow, 3000);
}

slideshow();