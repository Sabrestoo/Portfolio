
const hamMenu = document.getElementById('bars');
hamMenu.addEventListener('click', changeHamburger);

function changeHamburger() { 
  hamMenu.classList.toggle('change');
}

const links = document.getElementById("links");
const logo = document.querySelector('#logo');

const leftColItems = document.getElementById('left-col');

const navBar = document.getElementById('nav-bar');


// Mobile view left-col and nav-bar visibility
 hamMenu.addEventListener('click', navToggle);

 function navToggle() {  
  if (links.style.display === "block") 
  {
    links.style.display = "none";
    leftColItems.style.display = 'none';
  } 
  else
  {
    links.style.display = "block";
    leftColItems.style.display = 'none';
  }  
}

 window.addEventListener('resize', navStyleChangeOnResize);

 
function navStyleChangeOnResize(){
  if (window.innerWidth > 679 && links.style.display === "none"){
    links.style.display = "block";
    leftColItems.style.display = 'flex';
  }
  if (window.innerWidth < 679) 
    {
      links.style.display = "none";
      leftColItems.style.display = 'none';
    }
}


 links.addEventListener('click', closeNavChangeBurger);

 function closeNavChangeBurger() {
   if(window.innerWidth < 679){
  links.style.display = 'none';
  changeHamburger();
   }
}


logo.addEventListener('click', closeNav);

function closeNav() {
  if(window.innerWidth < 679){
  hamMenu.classList.remove('change');
  links.style.display = 'none';
  }
}

//Dark mode toggle
// let darkModeToggle = document.querySelector('.dark-toggle');

// darkModeToggle.addEventListener('click', function() {
//     if (document.body.hasAttribute('data-theme','dark')) 
//     { 
//       document.body.removeAttribute('data-theme') ;
//       document.body.setAttribute('data-theme', 'light');      
//     }
//     else if(document.body.hasAttribute('data-theme', 'light'))
//     {
//       document.body.removeAttribute('data-theme');
//       document.body.setAttribute('data-theme', 'dark');
//     }
//   });