$(document).ready (function () {
    $('.about-text.hidden').css({opacity : 1});
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl+'.hidden-meater').click(function () {
            if ($(cl+'.hidden').css('opacity') == 0) {
                sl = eval(cl.slice(1) + '_slidr');
                sl.timing('linear', '0.0s');
                sl.slide("one");
                sl.timing('linear', '0.5s ease-in');
            }
            $('.hidden').css({opacity : 0});
            $('.hidden-meater img').css({opacity: 1});
            $(cl+'.hidden').css({opacity : 1});
            $(cl+'.hidden-meater img').css({opacity: 0});
        });
    });
});
