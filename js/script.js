$(function () {

  let $nav = $('#gnav');
  let navHeight = $nav.innerHeight();

  $('a[href^="#"]').on('click', function () {
    let speed = 300;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  
  $('.card-image').on('click', function () {
    let title = $(this).data('title');
    $('.section.' + title).slideToggle();
  });

  $('.opencv-btn').on('click', function () {
    let title = $(this).data('title');
    $('.' + title).slideToggle();
  });

  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

});
