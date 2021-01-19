(function () {
  $("body").append(`<div class='side-screen'>
    <div class='top'>
      <a class="logo" href="/">
        <img src="image/clover/logo-text.svg" alt="clover" />
      </a>
      <a class='close'></a>
    </div>
    <ul class='side-nav'>
      <li><a href='https://github.com/clover-network' target='_blank'>Github</a></li>
      <li><a href='https://docs.clover.finance/' target='_blank'>Docs</a></li>
      <li><a href='https://medium.com/projectclover' target='_blank'>Blog</a></li>
      <li><a href=' https://discord.gg/z2egJBsBWx' target='_blank'>Discord</a></li>
    </ul>
    <ul class='social'></ul>
    <div class='copy'></div>
  </div>`);
  $(".nav").after(`<div class='side-bar'></div>`);

  $(".social").html(`
    <li><a href='https://twitter.com/clover_finance' target='_blank'><img src='image/logo/twitter.svg' alt='twitter' /></a></li>
    <li><a href='https://t.me/clover_en' target='_blank'><img src='image/logo/telegram.svg' alt='telegram' /></a></li>
    <li><a href='https://discord.gg/z2egJBsBWx' target='_blank'><img src='image/logo/discord.svg' alt='discord' /></a></li>
    <li><a href='https://medium.com/projectclover' target='_blank'><img src='image/logo/medium.svg' alt='medium' /></a></li>
  `);

  $(".copy").html("&copy;2020 CloverFinance. All Rights Reserved");

  $sideScreen = $(".side-screen");
  $close = $(".side-screen .close");
  $sideBar = $(".side-bar");
  $sideBar.click(() => {
    $sideScreen.fadeIn();
  });
  $close.click(() => {
    $sideScreen.fadeOut();
  });

  var scrollTop = $(window).scrollTop();
  var $body = $(document.documentElement);
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $body.addClass("scroll-page");
    } else if ($body.hasClass("scroll-page")) {
      $body.removeClass("scroll-page");
    }
  });
})();
