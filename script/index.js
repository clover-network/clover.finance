(function(){
  $('body').append(`<div class='side-screen'>
    <a href='index.html' class='logo-text'></a>
    <a class='close'></a>
    <ul class='side-nav'></ul>
  </div>`)

  const navs = ['Home', 'Features', 'Service', 'CLV', 'More', 'Partners'];
  const path = ['#home', '#features', '#service', '#clv', '#more', '#partners'];
  const $nav = navs.map((item, index) => {
    return `<li><a href='${path[index]}'>${item}</a></li>`;
  });
  $('.nav').html($nav).after(`<div class='side-bar'></div>`);
  $('.side-nav').html($nav);

  $sideScreen = $('.side-screen');
  $close = $('.side-screen .close');
  $side = $('.side-bar');
  $side.click(() => {
    $sideScreen.fadeIn();
  });
  $close.click(() => {
    $sideScreen.fadeOut();
  });

  $('body').append(`<div class='up'></a>`);
  const $up = $('.up');
  $up.click(() => {
    $('html,body').animate({scrollTop: 0}, "slow");
    $up.hide();
  });

  let scrollTop = $(window).scrollTop();

  const $sideBar = $('.side-bar');
  const $productor = $('#productor');
  const proTop = $productor.offset().top;

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop > proTop - 400) {
      if (!$productor.hasClass('action')) {
        $productor.addClass('action');
        setTimeout(() => {
          $productor.removeClass('action');
        }, 8000);
      }
    }
    if (scrollTop > 80) {
      $up.show();
    } else {
      $up.hide();
    }
    // if(scrollTop > 80){
    //   $sideBar.attr('class', 'side-bar scroll');
    //   $(".head").animate({
    //     top:'-80px'
    //   }, 5)
    // }else{
    //   $sideBar.attr('class', 'side-bar');
    //   $(".head").animate({
    //     top: `-${scrollTop}px`
    //   }, 5)
    // }
})
}());