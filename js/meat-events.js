$(document).ready (function () {
    $(['.good','.bad','.okay']).map(function (i,cl) {
        $(cl).click(function (g) {
            $(this).map(function (i,e) {
                $(e.parentElement.children).map(function (i,c) { c.style.opacity = 1;});
            })
        });
    });
});
