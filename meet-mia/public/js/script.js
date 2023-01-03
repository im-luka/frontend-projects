/* Header */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

/* Submenu */
$(document).ready(function () {
  $(".nav__submenu--button").click(function () {
    $(this).next(".nav__submenu").slideToggle();
  });

  $(".nav__proizvodi--button").click(function () {
    $(this).next(".nav__proizvodi--menu").slideToggle();
  });
});

/* Slider */
const slider = document.querySelector(".slider");
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;

function nextSlider() {
  slides.forEach((elem) => {
    elem.classList.remove("active");
  });
  slideIcons.forEach((elem) => {
    elem.classList.remove("active");
  });

  slideNumber++;
  if (slideNumber > numberOfSlides - 1) slideNumber = 0;

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

function prevSlider() {
  slides.forEach((elem) => {
    elem.classList.remove("active");
  });
  slideIcons.forEach((elem) => {
    elem.classList.remove("active");
  });

  slideNumber--;
  if (slideNumber < 0) slideNumber = numberOfSlides - 1;

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

nextButton.addEventListener("click", () => {
  nextSlider();
});

prevButton.addEventListener("click", () => {
  prevSlider();
});

let playSlider;
let repeat = () => {
  playSlider = setInterval(() => {
    nextSlider();
  }, 4000);
};
repeat();

slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

slider.addEventListener("mouseout", () => {
  repeat();
});

/* Zadovoljni Klijenti */
const zadovoljniKlijenti = document.querySelectorAll("input[name='klijenti']");
const zadovoljniKlijentiReview = document.getElementById(
  "zadovoljni-klijenti__container--review"
);
const zadovoljniKlijentiAuthor = document.getElementById(
  "zadovoljni-klijenti__container--author"
);

zadovoljniKlijenti.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.value == "klijent1") {
      zadovoljniKlijentiReview.innerText =
        "Kada je vrijeme za kolače, ovo je definitivno prvo mjesto u koje se spremam doći!";
      zadovoljniKlijentiAuthor.innerText = "Pero Perić";
    } else if (elem.value == "klijent2") {
      zadovoljniKlijentiReview.innerText =
        "Najbolji restoran ikad!!! Ali stvarno kad vam kazem onda fkt je ne zezam se";
      zadovoljniKlijentiAuthor.innerText = "Ana Anić";
    } else if (elem.value == "klijent3") {
      zadovoljniKlijentiReview.innerText =
        "Doci cu opet 100%!!! Bolje me odmah zapisite da dolazim jer ja dolazim";
      zadovoljniKlijentiAuthor.innerText = "Ivo Ivić";
    }
  });
});
