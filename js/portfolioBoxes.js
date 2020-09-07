$(document).ready(function() {
    $('.box').hover(function() {
        $(this).css({animation: 'boxHover 0.5s'}).addClass('onHover')
    }, function() {
        $(this).removeClass('onHover').css({animation: 'boxHoverBack 0.5s'})
    })

    $('.image-p').hover(function() {
        $(this).css({animation: 'imageFilter 0.5s'}).addClass('imageFilterOn')
    }, function() {
        $(this).removeClass('imageFilterOn').css({animation: 'imageFilterBack 0.5s'})
    })
});