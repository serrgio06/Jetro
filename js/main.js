$(function(){
  $('.slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.thumbs',
  });
  $('.thumbs').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        
      }
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  })
});