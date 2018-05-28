$(document).ready(function () {
    $(".esconder").hide();
    $("#ocultar").hide();

    $("#mostrar").click(function () {
        $(".esconder").show();
        $("#mostrar").hide();
        $("#ocultar").show();
    });
    $("#ocultar").click(function () {
        $(".esconder").hide();
        $("#ocultar").hide();
        $("#mostrar").show();
    });
});

