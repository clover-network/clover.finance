(function(){
  $('body').append(`<div class='side-screen'>
    <a href='index.html' class='logo-text'></a>
    <a class='close'></a>
    <ul class='side-nav'></ul>
  </div>`)

  const navs = ['Home', 'CLV Token', 'Product', 'Join Us', 'Partner', 'Blog'];
  const path = ['index.html', 'token.html', 'service.html', 'about.html', 'partner.html', `https://medium.com/cloverdefi`];
  const $nav = navs.map((item, index) => {
    const append = index === navs.length - 1 ? `target='_blank'` : '';
    return `<li class='mobile-nav-link'><a href='${path[index]}' ${append}>${item}</a></li>`;
  });
  const $footNav = navs.map((item, index) => {
    const append = index === navs.length - 1 ? `target='_blank'` : '';
    return `<a href='${path[index]}' ${append}>${item}</a>`;
  });
  $('.nav').html($nav).after(`<div class='side-bar'></div>`);
  $('.footer-nav').html($footNav);
  $('.social').html(`
    <a href='https://twitter.com/CloverDeFi' target='_blank'><img src='image/twitter.svg' /></a>
    <a href='https://medium.com/cloverdefi' target='_blank'><img src='image/media.svg' /></a>
    <a href='https://open.kakao.com/o/ggPlcrzc' target='_blank'><img src='image/talk.svg' /></a>
  `)
  $('.side-nav').html($nav);

  $('.mobile-nav-link').click(() => {
    $sideScreen.fadeOut();
  })

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
  let proTop = 0;
  if ($productor.length > 0) {
    proTop = $productor.offset().top;
  }

  $(window).scroll(function(){
    if ($productor) {
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
    }
    if(scrollTop > 80){
      $(".head").addClass('fixed-back');
    }else{
      $sideBar.attr('class', 'side-bar');
      $(".head").removeClass('fixed-back')
    }
})
}());