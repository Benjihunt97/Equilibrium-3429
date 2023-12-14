$(document).ready(() => {
    $('.hero').hover(
        function () {
            // This function will be called on mouseenter
            $('.svg').animate({
                'opacity': '1'
            }, 400);
        },
        function () {
            // This function will be called on mouseleave
            $('.svg').animate({
                'opacity': '0'
            }, 400);
        }
    );

});
