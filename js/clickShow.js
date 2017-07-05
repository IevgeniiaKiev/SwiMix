$(document).ready(function(){
  $('.section_text_description').hide();

  $('.section_button_more').on('click', function(e) {
    e.preventDefault();

    $('.section_button_more').removeClass('section_button_more--active');
    $(this).addClass('section_button_more--active');

    $('.section_text_description:visible').slideUp(500);
    $(this).next(':hidden').slideDown(500);

  });
});
