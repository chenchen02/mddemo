$(document).ready(function() {
    $('.icontop').hide();
    $('.notify2').hide();
    $(window).scroll(function() {
        if($(window).scrollTop()>100){
            $('.icontop').show();
        }else{
            $('.icontop').hide();
        }
    });
    $('.icontop').click(function() {
        $('body,html').animate({scrollTop: 0}, 700);
        return false;
    });

    $('.message').click(function() {
        $('.notify2').show();
    });

    $('.close').click(function() {
        $('.notify2').hide();
    });

});