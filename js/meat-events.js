$(document).ready (function () {
    $('.about-text.hidden').css({opacity : 1});
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl).click(function () {
            $('.hidden').css({opacity : 0});
            $(cl+'.hidden').css({opacity : 1});
        });
    });
});
