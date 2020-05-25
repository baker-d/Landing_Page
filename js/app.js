/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
// set navi as #navbar__list
const navi = document.getElementById("navbar__list");

// set sections as section
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the navigation
const navbarBuilder = () => {
  // set navBar as empty list
  let navBar = "";
  // loop through section's
  sections.forEach((section) => {
    // set section.id to const
    const sectionID = section.id;
    // set section data nav to const
    const sectionDataNav = section.dataset.nav;

    // add each section to empty navBar using sectionID and sectionDataNav
    navBar += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });

  navi.innerHTML = navBar;
};
// run function navbarBuilder
navbarBuilder();

// Add class 'active' to section when near top of viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove active class
const removeActive = (section) => {
  section.classList.remove("your-active-class");
};
// add  active class
const addActive = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};

const section = () => {
  sections.forEach((section) => {
    const newel = offset(section);

    inview = () => newel < 150 && newel >= -150;

    removeActive(section);
    addActive(inview(), section);
  });
};

window.addEventListener("scroll", section);

// Scroll to anchor ID using scrollTO event
const scroll = () => {
  const Links = document.querySelectorAll(".navbar__menu a");
  Links.forEach((link) => {
    link.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));
      }
    });
  });
};
scroll();

// get "back-to-top" element
var link = document.getElementById("back-to-top");

// set amountScrolled
var amountScrolled = 250;

// EventListener (to add class "show")
window.addEventListener("scroll", function () {
  if (window.pageYOffset > amountScrolled) {
    link.classList.add("show");
  } else {
    link.className = "back-to-top";
  }
});

// Scroll to top
link.addEventListener("click", function (e) {
  e.preventDefault();
  
  // set distance = 0
  let distance = 0 - window.pageYOffset;
  // set increments
  let increments = distance / (500 / 16);
  function animateScroll() {
    window.scrollBy(0, increments);
    if (window.pageYOffset <= document.body.offsetTop) {
      clearInterval(runAnimation);
    }
  };
  // loop
  const runAnimation = setInterval(animateScroll, 6);
});


// set navbar as "page__header"
const navbar = document.getElementsByClassName("page__header");

const scrolled = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= scrolled) {
    navbar[0].classList.add("scrolled");
  } else {
    navbar[0].classList.remove("scrolled");
  }
}
checkSection();
