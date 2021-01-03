$(window).on('load', function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1500)

});

$(function () {
    $(window).scroll(function () {
        console.log('fff');
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
            console.log('ddd');
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
        $('body').css('overflow', 'hidden');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #letter, #thanks').fadeOut('slow');
        $('body').css('overflow', 'visible');
    });
    
    let burger = false;
    $('.hamburger').on('click', function () {
        toggle();
        overflow();
    });
    
    $('.header__menu-link').on('click', function () {
        if(($('.hamburger').hasClass('hamburger_active'))){
            toggle();    
            overflow();
        }
    });
    
    function toggle() {
        $('.hamburger').toggleClass('hamburger_active');
        $('.header__menu').toggleClass('header__menu_active');
    }

    function overflow() {
        if($('.hamburger').hasClass('hamburger_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }

})
