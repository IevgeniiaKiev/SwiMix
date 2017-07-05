$(document).ready(function() {
(function(){
    var showChar = 400;
    var ellipsestext = "...";

    $('.section_doctor__wrapper_text').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content;
            var html = '<div class="section_doctor__wrapper_text" style="display:block">' + c + '<span class="moreellipses">' + ellipsestext + '&nbsp;&nbsp;<a href="" class="moreless more">(далее)</a></span></span></div><div class="section_doctor__wrapper_text" style="display:none">' + h + '<a href="" class="moreless less">скрыть</a></span></div>';

            $(this).html(html);
        }

    });

    $(".moreless").click(function(){
        var thisEl = $(this);
        if(thisEl.hasClass("less")) {
            thisEl.closest('.section_doctor__wrapper_text').prev('.section_doctor__wrapper_text').toggle();
            thisEl.closest('.section_doctor__wrapper_text').slideToggle();
        } else {
            thisEl.closest('.section_doctor__wrapper_text').toggle();
            thisEl.closest('.section_doctor__wrapper_text').next('.section_doctor__wrapper_text').fadeToggle();
        }
        return false;
    });
    /* end iffe */
    }());

/* end ready */
});
