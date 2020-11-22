(function(){
  function effect($node, child) {
    $node.addClass('effect');
    const $child = $node.find(child);
    $child.addClass('hidden')
    setTimeout(function(){
      $child.removeClass('hidden').addClass('action');
    }, 0);
    setTimeout(function(){
      $node.removeClass('init').removeClass('effect');
      $child.removeClass('action');
    }, 1200);
  }

  let scrollTop = $(window).scrollTop();
  const nodes = [
    $('.section-main'),
    $('.features-section'),
    $('.section-product'),
    $('.section-why'),
    $('.token-section'),
    $('.ecosystem-section'),
    $('.section-roadmap')
  ];
  const children = [
    '.m-1, .m-2, .m-3, .m-4',
    '.li-1, .li-2, .li-3',
    '.content, .m-1, .m-2, .m-3',
    '.m-1, .m-2, .m-3, .m-4',
    '.m-1, .m-2, .m-3, .m-4, .m-5, .m-6',
    '.section-ecosystem, h2, .ecosystem',
    'h2, dl, ul'
  ];
  const append = [100, 300, 300, 600, 500, 600, 1000];
  const top = nodes.map(function($node, index){
    $node.addClass('init');
    const child  = children[index];
    return $node.offset().top;
  });

  effect(nodes[0], children[0]);

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    top.forEach((item, index) => {
      if (index > 0 && scrollTop > item - append[index]) {
        const $node = nodes[index];
        if ($node.hasClass('init')) {
          effect($node, children[index]);
        }
      }
    })
  })

}());