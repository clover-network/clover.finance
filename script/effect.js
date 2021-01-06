(function(){
  $('body').append(`<div class='side-screen'>
    <div class='top'>
      <a href='index.html' class='logo-text'></a>
      <a class='close'></a>
    </div>
    <ul class='side-nav'>
      <li><a href='index.html'>Home</a></li>
      <li><a href='features.html'>Features</a></li>
      <li><a href='team.html'>Team</a></li>
      <li><a href='https://medium.com/projectclover' target='_blank'>Medium</a></li>
    </ul>
    <ul class='social'></ul>
    <div class='copy'></div>
  </div>`);
  $('.nav').after(`<div class='side-bar'></div>`);

  $('.social').html(`
    <li><a href='https://twitter.com/clover_finance' target='_blank'><img src='image/logo/twitter.svg' alt='twitter' /></a></li>
    <li><a href='https://t.me/clover_en' target='_blank'><img src='image/logo/telegram.svg' alt='telegram' /></a></li>
    <li><a href='https://open.kakao.com/o/ggPlcrzc' target='_blank'><img src='image/logo/kakao.svg' alt='kakao' /></a></li>
    <li><a href='https://medium.com/cloverdefi' target='_blank'><img src='image/logo/medium.svg' alt='medium' /></a></li>
    <li><a href='https://github.com/clover-network' target='_blank'><img src='image/logo/github.svg' alt='github' /></a></li>
  `);
  $('.copy').html('&copy;2020 CloverFinance. All Rights Reserved');

  $sideScreen = $('.side-screen');
  $close = $('.side-screen .close');
  $sideBar = $('.side-bar');
  $sideBar.click(() => {
    $sideScreen.fadeIn();
  });
  $close.click(() => {
    $sideScreen.fadeOut();
  });

  const $cursor = $('.cursor');
  const $cursorNormal = $('.cursorNormal');
  const $cursorHover = $('.cursorHover');
  const path = parseInt($cursor.css('margin-left'));
  $('.section-what, .clover-os, .team-intro-description').mousemove(function(e){
    $cursor.css({
      'left': e.pageX + path / 4,
      'top': e.pageY + path ,
    })
  });
  $('body').mousemove(function(e){
    $cursorNormal.css({
      'left': e.pageX - 6,
      'top': e.pageY - 6,
    });
    $cursorHover.css({
      'left': e.pageX - 14,
      'top': e.pageY- 14,
    })
  });

  function effect($node, child, timeout) {
    $node.addClass('effect');
    const $child = $node.find(child);
    $child.addClass('hidden')
    setTimeout(function(){
      $child.removeClass('hidden').addClass('action');
    }, 0);
    setTimeout(function(){
      $node.removeClass('init').removeClass('effect');
      $child.removeClass('action');
    }, timeout);
  }

  const nodes = [
    $('.section-what'),
    $('.section-vision'),
  ];
  const children = [
    '.m-1, .m-2, .m-3',
    '.m-1, .m-2, .m-3, .m-4',
  ];
  const append = [100, 300];
  const timeout = [1000, 1600];
  const top = nodes.map(function($node, index){
    if ($node.length > 0) {
      $node.addClass('init');
      return $node.offset().top;
    } else {
      return '';
    }
  });

  effect(nodes[0], children[0], timeout[0]);

  let scrollTop = $(window).scrollTop();
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    top.forEach((item, index) => {
      if (index > 0 && scrollTop > item - append[index]) {
        const $node = nodes[index];
        if ($node.hasClass('init')) {
          effect($node, children[index], timeout[index]);
        }
      }
    })
  })
}());