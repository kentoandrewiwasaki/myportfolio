$(function () {

  let $nav = $('#gnav');
  let navHeight = $nav.innerHeight();
  let speed = 300;
  let winScrollTop

  $('a[href^="#"]').on('click', function () {
    let href = $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let position = target.offset().top - navHeight;
    $('html, body').animate({
      scrollTop: position
    }, speed);
    return false;
  });

  $('.js-modal-open').each(function(){
    $(this).on('click',function(){
      winScrollTop = $(window).scrollTop();
      let title = $(this).data('title');
      let modal = document.getElementsByClassName(title);
      $(modal).fadeIn();
      return false;
    });
  });
  
  $('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    $('html, body').stop().animate({
      scrollTop: winScrollTop
    }, speed);
    return false;
  }); 

  $('.opencv-btn').on('click', function () {
    let title = $(this).data('title');
    $('.' + title).slideToggle();
  });

  $('#js-pageTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, speed);
    return false;
  });

});
