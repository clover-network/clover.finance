(function() {
  let height = $('body').height();
  $('.section, .screen').css('min-height', `${height}px`);

  $(window).resize(() => {
    height = $('body').height();
    $('.section, .screen').css('min-height', `${height}px`);
  })

  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > height) {
      $('.screen').attr('class', 'screen static');
    } else {
      $('.screen').attr('class', 'screen');
    }
  })

  
    const data = [{
      value: 25,
      name: 'Private sale'
    }, {
      value: 15,
      name: 'Ecosystem fund'
    }, {
      value: 15,
      name: 'Team and advisors'
    }, {
      value: 5,
      name: 'Public sale'
    }, {
      value: 40,
      name: 'Community incentive pool'
    }];
    const color = ['#F9D403', '#35E5C1', '#037F85', '#802E6D', '#F96158'];
    const option = {
      tooltip: {
        trigger: 'item'
      },
      series: [{
        type: 'pie',
        rradius: '100%',
        center: ['50%', '50%'],
        label: {
          normal: {
            position: 'inside',
            formatter: '{c}%'
          }
        },
        hoverAnimation: false,
        data: data,
      }],
      color: color,
    }
    const pie = echarts.init(document.getElementById('pie'));
    pie.setOption(option);
  
}());