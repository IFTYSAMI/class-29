
$('.about_main').slick({
  
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    dots:true
   
  });

 
  $('.counter').counterUp({
    delay: 5,
    time: 1000
});
$('.work_work').slick({
  
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    nextArrow: ".next",
    prevArrow: ".prev"
   
  });