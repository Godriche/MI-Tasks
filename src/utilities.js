
const hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', 
  (e)=> {  
  if(e.target.className === ('hamburger-menu')) {
    e.target.classList.add('toggle');
    
  }
  else 
  {
    e.target.classList.remove('toggle');
  }
   
})


/*
$('.hamburger-menu').on("click", function () {
  $(this).toggleClass('toggle');
  $('.nav-overlay').toggleClass('hamburger-menu-open');
});

*/