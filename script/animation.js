(function(){
  function effect($node, child, index) {
    $node.addClass('effect');
    const $child = $node.find(child);
    $child.addClass('hidden');
    const timeout =  index == 5 ? 2000 : 1400;
    setTimeout(function(){
      $child.removeClass('hidden').addClass('action');
    }, 0);
    setTimeout(function(){
      $node.removeClass('init').removeClass('effect');
      $child.removeClass('action');
    }, timeout);
  }

  let scrollTop = $(window).scrollTop();
  const nodes = [
    $('.features-section'),
    $('.section-product'),
    $('.token-section'),
    $('.section-why'),
    $('.ecosystem-section'),
    $('.section-roadmap')
  ];
  const children = [
    'h2, p, .feature-area, .text-button',
    '.content, h2, dl',
    '.token-top, .section-token, h2, ul, a',
    '.content, h2, dl',
    '.section-ecosystem, h2, .ecosystem',
    'h2, dl, ul'
  ];
  const append = [600, 300, 600, 500, 600, 700];
  const top = nodes.map(function($node, index){
    $node.addClass('init');
    const child  = children[index];
    return $node.offset().top;
  });

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    top.forEach((item, index) => {
      if (scrollTop > item - append[index]) {
        const $node = nodes[index];
        if ($node.hasClass('init')) {
          effect($node, children[index], index);
        }
      }
    })
  })

}());