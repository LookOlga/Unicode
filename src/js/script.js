$(window).on('load', function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1500)

});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
    
    $('[data-modal=letter]').on('click', function () {
        $('.overlay, #letter').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #letter, #thanks').fadeOut('slow');
    });
    
    
    $('.hamburger').on('click', function () {
        toggle();
    });
    
    $('.header__menu-link').on('click', function () {
        toggle();
    });
    
    function toggle() {
        $('.hamburger').toggleClass('hamburger_active');
        $('.header__menu').toggleClass('header__menu_active');
    }
})
