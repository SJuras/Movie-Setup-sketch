// toggle menu
function toggle(){
  const sidemenu = document.querySelector("header ul");
  const toggle = document.querySelector(".toggle");
  sidemenu.classList.toggle("active");
  toggle.classList.toggle("active");
}
// toggle menu END

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
// smooth scroll END

// scroll up button
const btnScrollTop = document.querySelector('#btnScrollTop');
window.addEventListener("scroll", function(){
  btnScrollTop.classList.toggle("visible", window.scrollY > 100);
});

btnScrollTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
// scroll up button END
