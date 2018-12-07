$("html").click(function (e) {
    var x = e.pageX;
    var y = e.pageY;


    var demi = $(document).width() / 2 - 100;
    var rot = "rotateDroite"
    var dro = "droitDroite"

    console.log(y + "?" + $(window).width());

    if (x > $(document).width() / 2) {
        rot = "rotateGauche"
        dro = "droitGauche"
    }

    $('#fusee').offset({
        left: x - 100,
        top: y - 100
    });

    $("#fusee").removeClass("droitDroite");
    $("#fusee").removeClass("droitGauche");
    $("#fusee").addClass(rot);

    $("#fusee").show();
    $("#particles-js").fadeIn(800);

    $('#fusee').animate({
        top: y - 200 + 'px',
        left: demi + 'px'
    }, {
        duration: 1000,

        complete: function () {

            $("#particles-js").fadeOut(200);

            $("#fusee").removeClass("rotateDroite");
            $("#fusee").removeClass("rotateGauche");
            $("#fusee").addClass(dro);
            var b = $("#fusee").css("left");

            $("#fusee").animate({
                top: '-250px',
            }, 600);

		url = "";
      		$(location).attr("href", url);
        }
    });
});

$(function () {
    $("#fusee").hide();
    $("#particles-js").hide();
});
