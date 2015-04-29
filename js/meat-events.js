$(document).ready (function () {
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl).click(function () {
            $(cl+'.hidden').css({opacity : 1});
        });
    });
});
