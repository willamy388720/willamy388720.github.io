$(document).ready(function () {

    var item_width = $('#produtos li').outerWidth();
    var left_value = item_width * (-1);

    $('#produtos li:first').before($('#produtos li:last'));

    $('#produtos ul').css({ 'left': left_value });

    $("#esq").click(function () {
        var left_intend = parseInt($('#produtos ul').css('left')) + item_width;

        $('#produtos ul').animate({ 'left': left_intend }, 200, function () {
            $('#produtos li:first').before($('#produtos li:last'));

            $('#produtos ul').css({ 'left': left_value });
        });
    });

    $("#dir").click(function () {
        var left_intend = parseInt($('#produtos ul').css('left')) - item_width;

        $('#produtos ul').animate({ 'left': left_intend }, 200, function () {
            $('#produtos li:last').after($('#produtos li:first'));

            $('#produtos ul').css({ 'left': left_value });
        });

    });
});