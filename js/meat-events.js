$(document).ready (function () {
    $(['.good','.bad','.okay']).map(function (i,cl) {
        console.log(cl);
        $(cl).click(function (g) {
            $(this).map(function (i,e) { e.style.opacity = 1;})
        });
    });
});
