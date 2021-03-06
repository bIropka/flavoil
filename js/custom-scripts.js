$(document).ready(function () {

    $('.to-buy').click(function () {
        $('.window-order').fadeIn();
    });

    $('.window-order').click(function (event) {
        $target = $(event.target);
        if ($target.hasClass('close-marker')) $('.window-order').fadeOut();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > ($(window).height()) / 3) {
            $('.block-header').stop().animate({top: 0}, 300);
        } else {
            $('.block-header').stop().animate({top: -82}, 300);
            if ($(window).width() <= '1080'){
                $('.nav-marker').removeClass('nav-marker-active');
                $('nav').stop().animate({height: 'hide'}, 600);
            }
        }
    });

    $('.nav-marker').click(function () {
        if ($(this).hasClass('nav-marker-active')) {
            $('nav').stop().animate({height: 'hide'}, 600);
        } else {
            $('nav').stop().animate({height: 'show'}, 600);
        }
        $(this).toggleClass('nav-marker-active');
    });

    $('.accordion li').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).siblings('.accordion .active').find('.element-content').animate({
                height: 'hide'
            }, 600);
            $(this).find('.element-content').animate({
                height: 'show'
            }, 600);
            $(this).siblings('.accordion .active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.checkbox-image').click(function(){
        if($(this).hasClass('checkbox-checked')){
            $(this).removeClass('checkbox-checked');
            $('.form-feedback .checkbox').attr('checked', false);
        } else {
            $(this).addClass('checkbox-checked');
            $('.form-feedback .checkbox').attr('checked', true);
        }
    });

    $('.form-field').focus(function() {
        $(this).parent().find('span').css('display', 'none');
    });
    $('.form-field').blur(function(){
        if(!$(this).val()) {
            $(this).parent().find('span').css('display', 'block');
        }
    });

    $('.control').click(function() {
        var thisInput = $('.input-amount');
        var currentAmount = parseInt($(thisInput).val());
        var amountImage = $('.current-amount span');
        console.log(thisInput);
        console.log(currentAmount);
        console.log(amountImage);
        if($(this).hasClass('control-add')) {
            $(thisInput).val(++currentAmount);
            $(amountImage).html($(thisInput).val());
        } else if($(this).hasClass('control-remove')) {
            if(currentAmount > 0) {
                $(thisInput).val(--currentAmount);
                $(amountImage).html($(thisInput).val());
            }
        }
    });

    $('a[href^="#"]').click(function(){
        if(!$(this).hasClass('chosen')){
            $('nav ul .chosen').removeClass();
            $(this).parent().addClass('chosen');
            var target = $(this).attr('href');
            $('html, body').stop().animate({scrollTop: $(target).offset().top - 82}, 800);
        }
        return false;
    });

    $('nav ul li a').hover(
        function () {
            $(this).parent().toggleClass('active');
        });

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.read-more').click(function() {
        if($(this).hasClass('chosen')){
            $(this).siblings('.text').find('.hidden-text').stop().animate({height: 'hide'}, 600);
            $(this).removeClass('chosen');
        } else {
            $(this).siblings('.text').find('.hidden-text').stop().animate({height: 'show'}, 600);
            $(this).addClass('chosen');
        }
    });

    $('.product-image').click(function() {
        $(this).fadeOut();
    });

});