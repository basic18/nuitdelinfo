$(document).mousemove(function (e) {
    var x = e.pageX;
    var y = e.pageY;
    setTimeout(function () {
        $('#cur').offset({
            left: x - 77,
            top: y - 77
        });
    }, 80);
});