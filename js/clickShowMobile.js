$(document).ready(function(){
  $('.section_text_description_mobile').hide();

  $('.section_button_more_mobile').on('click', function(e) {
    e.preventDefault();

    $('.section_button_more_mobile').removeClass('section_button_more_mobile--active');
    $(this).addClass('section_button_more_mobile--active');

    $('.section_text_description_mobile:visible').slideUp(500);
    $(this).next(':hidden').slideDown(500);
  });
});
