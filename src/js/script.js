window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000)

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut(); 
    }
   });

   $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
    });

    $('[data-modal=letter]').on('click', function(){
        $('.overlay, #letter').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #letter, #thanks').fadeOut('slow');
    });


    $('.hamburger').on('click', function(){
        $(this).toggleClass('hamburger_active');
        $('.header__menu').toggleClass('header__menu_active');
    });

    $('.header__menu').on('click', 'header__menu_link', function() {
       
                
                    console.log('ddd');
                $('.hamburger').toggleClass('hamburger_active');
                $('.header__menu').toggleClass('header__menu_active');
               
                
            
            
            
    });    

   

    // window.addEventListener('DOMContentLoaded', () => {
    //     const menu = document.querySelector('.header__menu'),
    //     menuItem = document.querySelectorAll('.header__menu_item'),
    //     hamburger = document.querySelector('.hamburger');
    
    //     hamburger.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('header__menu_active');

    //     });
    
    //     menuItem.forEach(item => {
    //         item.addEventListener('click', () => {
    //             hamburger.classList.toggle('hamburger_active');
    //             menu.classList.toggle('header__menu_active');
    //         })
    //     })
    // })

