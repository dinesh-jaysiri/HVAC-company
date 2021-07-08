const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//slider

const next = document.querySelector(".next");
const back = document.querySelector(".back");
const slider = document.querySelector(".slider");
const testimonials = document.querySelectorAll(".testimonial");

let sectionIndex = 2;
function nextslide() {
  back.classList.remove("disable");
  if (sectionIndex < 3) {
    testimonials[sectionIndex].classList.add("testimonial--small");
    testimonials[sectionIndex + 1].classList.remove("testimonial--small");
  }

  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  slider.style.transform = "translate(" + sectionIndex * -20 + "%)";
  console.log(sectionIndex);
  if (sectionIndex === 3) {
    next.classList.add("disable");
  }
}
function backslide() {
  
  next.classList.remove("disable");
  sectionIndex = sectionIndex < 2 ? 1 : sectionIndex - 1;
  slider.style.transform = "translate(" + sectionIndex * -20 + "%)";
  if (sectionIndex >= 1) {
    testimonials[sectionIndex + 1].classList.add("testimonial--small");
    testimonials[sectionIndex].classList.remove("testimonial--small");
  }
  if (sectionIndex === 1) {
    back.classList.add('disable');
  }
}

next.addEventListener("click", nextslide);

back.addEventListener("click", backslide);
