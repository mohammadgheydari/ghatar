//Check to see if the window is top if not then display button
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }
    });
}
//Click event to scroll to top
$('.scrolltotop').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).mouseup(function (e)
{
    var container = $(".top-boxes");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.slideUp('fast');
    }
});
$('.share-btn').click(function (e) {
    e.preventDefault();
    $('.socials-top').slideToggle('fast');
});

new WOW().init();


$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});

$('.card').on('mouseenter', function(){
    $(this).find('.card-action a.will-hide').fadeIn('fast');
}).on('mouseleave', function(){
    $(this).find('.card-action a.will-hide').fadeOut();
});

// $('.card').on('mouseenter', function(){
//     $(this).find('.hovered a.will-hide').fadeIn('fast');
// }).on('mouseleave', function(){
//     $(this).find('.hovered a.will-hide').fadeOut();
// });

$('.btn-more').on('click', function(e){
    e.preventDefault();
    $(this).addClass('hidden');
    $('.loading').removeClass('hidden');

});

$.Negar("div.card", {
    Colorlist: ['#eb4924', '#ff9500', '#8e8e93', '#ffcc00', '#4cd964', '#34aadc', '#ff3b30','#5856d6', '#ff2d55'],
    Effect: true,
    ParagraphDirection:true
});

if($('.ad-section').offset().top + $('.ad-section').outerHeight(true) == $(window).scrollTop() + $(window).height()){
    console.log('okay');
}



var myColors = ['#eb4924', '#ff9500', '#8e8e93', '#FFC107', '#4cd964', '#34aadc', '#ff3b30','#5856d6', '#ff2d55'];
var i = 0;
$('div.ad-section a').each(function() {
    $(this).css('background-color', myColors[i]);
    i = (i + 1) % myColors.length;
});


// $(window).scroll(function () {
//    var page = $(window).scrollTop();
//    if (page + $(window).height() + 150 > $(document).height()) {
//        $("#adsl").removeClass("fixed");
//    } else {
//        if (page > 800) {
//            $("#adsl").addClass("fixed");
//            $("#adsl").css({ "height": xheight });
//        }
//        else {
//            $("#adsl").removeClass("fixed");
//        }
//    }
// });