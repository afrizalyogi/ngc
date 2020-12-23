$(document) .ready (function() { 
    $('.carousel') .carousel ( { 
        interval: 3000, cycle: true 
    });
});

$(window) .scroll (function() {
    $('.hiddenleft') .each (function() {
    var bottomObject = $(this).position().top + $(this).outerHeight();
    var bottomWindow = $(window).scrollTop() + $(window).height();
        if (bottomWindow > bottomObject) {
            $(this).removeClass('hideleft');
            $(this).removeClass('hiddenleft');
            $(this).addClass('fadein');
        }
        else {
            $(this).addClass('hideleft');
        }
    }); 
});

$(window) .scroll (function() {
    $('.hiddencenter') .each (function() {
    var bottomObject = $(this).position().top + $(this).outerHeight();
    var bottomWindow = $(window).scrollTop() + $(window).height();
        if (bottomWindow > bottomObject) {
            $(this).removeClass('hidecenter');
            $(this).removeClass('hiddencenter');
            $(this).addClass('fadein');
        }
        else {
            $(this).addClass('hidecenter');
        }
    }); 
});

$(window) .scroll (function() {
    $('.hiddenup') .each (function() {
    var bottomObject = $(this).position().top + $(this).outerHeight();
    var bottomWindow = $(window).scrollTop() + $(window).height();
        if (bottomWindow > bottomObject) {
            $(this).removeClass('hideup');
            $(this).removeClass('hiddenup');
            $(this).addClass('fadein');
        }
        else if ($(window).width() > 990) {
            $(this).addClass('hideup');
        }
    }); 
});