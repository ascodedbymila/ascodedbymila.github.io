// Typed effect //

$(function(){
    $(".element").typed({
        strings: ['is an aspiring data scientist', 'is probably watching the Office right now', 'loves the Discover Weekly algorithm way too much', 'just discovered It\'s Always Sunny', 'wakes up to Tame Impala every morning', 'will always be devoted to the 7 train'],
        typeSpeed: 20
    });
});

// Smooth scrolling //

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Hidden header for #start //

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('header').fadeIn();
    } else {
        $('header').hide();
    }
});

// Nav effect //

var sections = $('div')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');
    /*
     $('html, body').animate({
     scrollTop: $(id).offset().top - nav_height
     }, 500); */

    return false;
});

// Contact form //

jQuery(document).ready(function($){
    if( $('.floating-labels').length > 0 ) floatLabels();

    function floatLabels() {
        var inputFields = $('.floating-labels .cd-label').next();
        inputFields.each(function(){
            var singleInput = $(this);
            //check if user is filling one of the form fields
            checkVal(singleInput);
            singleInput.on('change keyup', function(){
                checkVal(singleInput);
            });
        });
    }

    function checkVal(inputField) {
        ( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
    }
});