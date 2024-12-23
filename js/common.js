$(document).ready(function(){
  
  //서브메뉴
  $(".depth2, .depth2-bg").hide();
  $(".gnb > li").hover(function(){
    $(".depth2, .depth2-bg").stop().slideToggle();
  });

  
  //햄버거메뉴
  $(".ham").click(function(){
    $(".mgnb-wrap").animate({left : "0"}, 500, "swing")
  });

  $(".close-btn").click(function(){
    $(".mgnb-wrap").animate({left : "100%"}, 500, "swing")
  });


  //햄버거메뉴 서브
  $(".m-depth2").hide();
  $(".mgnb > li   ").click(function(){
    $(this).find(".m-depth2").stop().slideToggle();
  });


  //slide
  var mv = new Swiper(".mv", {
    loop: true,

    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     pagination: {
        el: ".swiper-pagination",
      },
  });



  var promv = new Swiper(".promv", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

});