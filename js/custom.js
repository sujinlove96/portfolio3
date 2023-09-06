$(function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    parallax: true,
    mousewheel: true,
    speed: 1500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // �ъ씠�� 硫붾돱
  $('.right_menu').click(function () {
    if ($('.right_menu').hasClass('on')) {
      $(this).removeClass('on');
      $('.side_menu').fadeOut(800);
      $('.menu_section').animate(
        {
          right: '-100%',
        },
        800
      );
    } else {
      $(this).addClass('on');
      $('.side_menu').fadeIn(500);
      $('.menu_section').animate(
        {
          right: '0',
        },
        800
      );
    }
  });
  //�щ씪�대뱶 �대룞
  $('.gnb li').click(function () {
    //�대떦�곸뿭�� 遺덈윭��
    swiper.slideTo($(this).index());
    $('.right_menu').removeClass('on');
    $('.side_menu').fadeOut(800);
    $('.menu_section').animate(
      {
        right: '-100%',
      },
      800
    );
  });
});
