//........................first............
$(function(){
    $('.ball').click(function(){
        const randWidth = Math.floor((Math.random()*$(window).width())/3);
        const randHeight = Math.floor((Math.random()*$(window).height())/3);
        const randTop = Math.floor((Math.random()*$(window).height())/2);
        const randLeft = Math.floor((Math.random()*$(window).width())/2)
        $(this).fadeIn(1000,function(){
            $(this).css({
                backgroundColor: randColor(),
            })
        }).animate({
            width: randWidth,
            height: randHeight,
            top: randTop,
            left: randLeft,
        },2000);
    });
    function randColor(){
        let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
        return `rgb(${rand()},${rand()},${rand()})`;
    };
});







































