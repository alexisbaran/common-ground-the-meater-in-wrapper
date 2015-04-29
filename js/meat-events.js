$(document).ready (function () {
    $('.about-text.hidden').css({opacity : 1});
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl+'.hidden-meater').click(function () {
            if ($(cl+'.hidden').css('opacity') == 0) {
                eval(cl.slice(1) + '_slidr.slide("one")');
            }
            $('.hidden').css({opacity : 0});
            $('.hidden-meater img').css({opacity: 1});
            $(cl+'.hidden').css({opacity : 1});
            $(cl+'.hidden-meater img').css({opacity: 0});
        });
    });
});
