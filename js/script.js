// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('.headsection').css({
    
'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('.headsection').css({
    
    'height': winHeight,
});
});