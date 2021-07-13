// JavaScript source code
$(document).ready(function () {
    $('#login').click(function () {
        $('#loginModal').modal('toggle');
    });
    $('#reserveTable-button').click(function () {
        $('#reservetable').modal('toggle');
    });


    $('#mycarousel').carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').removeClass('btn-danger');
            $('#carouselButton').addClass('btn-success');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').removeClass('btn-success');
            $('#carouselButton').addClass('btn-danger');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
