$(document).ready (function () {
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl).click(function (ev) {
            $(cl+'.hidden').css({opacity : 1});
        });
    });
});
