$(document).ready (function () {
    $('.about-text.hidden').css({opacity : 1});
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl+'.hidden-meater').click(function () {
            $('.hidden').css({opacity : 0});
            $(cl+'.hidden').css({opacity : 1});
            $(cl+'.hidden-meater img').css({opacity: 0});
        });
    });
    
    $('.themeater').click(function () {
        $(this).css({opacity : 1});
    });
});
