$(document).on("scroll", window, function () {
    if ($(window).scrollTop()>1) 
    {
        $(".go_up").css("display", "block")
    }
    else
    {
        $(".go_up").css("display", "none")
    }
});

$('.go_up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
});

$('a[href^="#"').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - $('.header').width()/3
    });
    return false;
});