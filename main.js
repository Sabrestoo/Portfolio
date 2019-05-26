let mainNavLinks = document.querySelectorAll("nav a");

let mainSections = document.querySelectorAll(".main");


let lastId;
let cur = [];



window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  
  
  mainNavLinks.forEach(link => {
    
    let section = document.querySelector(
      
    );
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

const menuBtn = document.querySelector(".menuButton");
const navbar = document.querySelector(".nav-bar");
const link = document.querySelectorAll(".link");


let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    navbar.classList.add("show");
  
    link.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    navbar.classList.remove("show");

    link.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}