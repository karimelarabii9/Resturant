let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#search-icon').onclick=()=>{
document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick=()=>{
document.querySelector('#search-form').classList.remove('active');
    
    }
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        loop:true,
      });
      