(function(){
  $('body').append(`<div class='side-screen'>
    <a href='index.html' class='logo-text'></a>
    <a class='close'></a>
    <ul class='side-nav'></ul>
  </div>`)

  const navs = ['Home', 'Product', 'CLV Token', 'Ecosystem', 'Join Us', 'Blog'];
  const path = ['index.html', 'service.html', 'token.html', 'partner.html', 'about.html', `https://medium.com/cloverdefi`];
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
  $('.side-nav').html($nav);
  $('.side-nav').after(`<div class='side-social'></div>`);

  $('.social').html(`
    <a href='https://twitter.com/CloverDeFi' target='_blank'><img src='image/twitter.svg' /></a>
    <a href='https://medium.com/cloverdefi' target='_blank'><img src='image/media.svg' /></a>
    <a href='https://open.kakao.com/o/ggPlcrzc' target='_blank'><img src='image/talk.svg' /></a>
`)
  $('.side-social').html(`
    <a href='https://twitter.com/CloverDeFi' target='_blank'><img src='image/side-twitter.svg' /></a>
    <a href='https://medium.com/cloverdefi' target='_blank'><img src='image/side-media.svg' /></a>
    <a href='https://open.kakao.com/o/ggPlcrzc' target='_blank'><img src='image/side-talk.svg' /></a>
  `)

  $('.footer').find('.row a').last().before(`<a class='mail' href='mailto:info@projectclover.finance'>
    <img src='image/email.svg' />info@projectclover.finance</a>`);

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