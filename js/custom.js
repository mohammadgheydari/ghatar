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
    if (event.target.id != container) {
        container.slideUp('fast');
    }
});
$('.share-btn').click(function (e) {
    e.preventDefault();
    if($('.top-boxes').css("display") == "block"){
        return true;
    }else{
        $('.top-boxes').slideDown()
    }


});
$('.search-btn').click(function (e) {
    var searchForm = $('#search-form-text');
    e.preventDefault();
    if(searchForm.hasClass('hidden')){
        searchForm.removeClass('hidden').animate({height: "41px"});
    }else{
        searchForm.addClass('hidden').animate({height: "0"});
    }
});

$('.collapse-menu').click(function (e) {
    e.preventDefault();
    $('.collapse').collapse('hide');
    $(this.getAttribute('href')).collapse('show');
});

$('a.like-btn').on('click', function(e){
    e.preventDefault();
    var currentValue = parseInt($(this).find('.like-number').text(),10);
    console.log(currentValue);

    $(this).toggleClass('liked');
   if($(this).hasClass('liked')){
       var newValue = +currentValue + 1;
       $(this).find('.like-number').text(newValue);
   }else{
       var oldValue = +currentValue - 1;
       $(this).find('.like-number').text(oldValue);
   }
});

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

var myColors = [ '#4cd964', '#34aadc', '#ff3b30','#5856d6'];
var i = 0;
$('div.ad-section a').each(function() {
    $(this).css('background-color', myColors[i]);
    i = (i + 1) % myColors.length;
});
//
// $(function () {
//     var sidebar = $('.fixed-ad');
//     var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));
//
//     $(window).scroll(function (event) {
//         var y = $(this).scrollTop();
//         if (y >= top) {
//             sidebar.addClass('fixed');
//         } else {
//             sidebar.removeClass('fixed');
//         }
//     });
// });