$(function() {


  var swapDevice = function() {
    if($(window).width() > 1040) {
      $('.device').attr('src', 'img/flatbook.svg');
    } else if($(window).width() > 700) {
      $('.device').attr('src', 'img/flatpad.svg');
    } else {
      $('.device').attr('src', 'img/flatphone.svg');
    }
  };
  swapDevice();

  var didResize = false;
  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      swapDevice();
      didResize = false;
    }
  }, 150);


  $('.next').click(function() {
    if(!$('.headers h1').last().hasClass('js-active')) {
      $('.js-active').removeClass('js-active').addClass('js-hidden').next().removeClass('js-hidden').addClass('js-active');
    }
  });
  $('.prev').click(function() {
    if(!$('.headers h1').first().hasClass('js-active')) {
      $('.js-active').removeClass('js-active').addClass('js-hidden').prev().removeClass('js-hidden').addClass('js-active');
    }
  });


});
