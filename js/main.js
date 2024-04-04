
///testemonial section swiper////
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  spacebetween:30,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
loop: true,
  autoplay: {
    delay:3000,
    // disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

///////
function changeBg(){
  var header = document.querySelector('header')
  var scrollValue= window.scrollY;
  console.log(scrollValue);
  if(scrollValue < 70){
    header.classList.remove('scrolled');
  }else{
    header.classList.add('scrolled');
  }
}

window.addEventListener('scroll' ,changeBg);
