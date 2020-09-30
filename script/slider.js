(function(){ 
  const $container = $('.section-roadmap');
  const $roadmap = $('.roadmap');
  const $left = $container.find('.left-control');
  const $right = $container.find('.right-control');
  const $content = $container.find('.road-item');
  const size = 240;
  const totalItem = $content.find('dl').length;
  let left;

  $left.click(() => {
    left = parseInt($content.css('margin-left'));
    if (left < 0) {
      left += size;
      $content.animate({marginLeft: left}, 'normal')
    }
  })
  $right.click(() => {
    left = parseInt($content.css('margin-left'));
    const width = $roadmap.width();
    const showItem = Math.ceil(width/size);
    const hideItem = Math.ceil(-left/size);
    if (showItem + hideItem < totalItem){
      left -= size
      $content.animate({marginLeft: left}, 'normal')
    }
  })
}());