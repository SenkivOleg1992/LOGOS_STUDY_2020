$(function () {
    let randLeft = $(window).width();
    let randTop= $(window).height();
    let randWidth = $(window).width();
    let randHeight = $(window).height();
    setInterval(() => {
        $('.ball').animate({
            left: Math.floor( Math.random() * randLeft/ 2), 
            top: Math.floor( Math.random() * randTop/ 2),
            width: Math.floor(Math.random() * randWidth / 2),
            height: Math.floor(Math.random() * randHeight / 2),
        }).css({
            backgroundColor: randColor(),
            borderColor: randColor(),
            // boxShadow: randShadow(),
            boxShadow: Math.floor(Math.random() * 50) + 'px' + ' ' + Math.floor(Math.random() * 50) + 'px' + ' ' + Math.floor(Math.random() * 50) + 'px' + ' ' + "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
        
        })
    },500);
    function randColor() {
        let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
        return `rgb(${rand()},${rand()},${rand()})`
    }
    function randShadow() {
        let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
        let shadow = () => Math.floor(Math.random() * 30);
        return `${shadow()}px ${shadow()}px ${shadow()}px rgb(${rand()},${rand()},${rand()})` 
    }
})

// $(function () {
//     let widthMax = $(window).width();
//     let heightMax = $(window).height();
//     let width = $(window).width();
//     let height = $(window).height();
//     setInterval(() => {
//         $('.ball').animate({
//         left: Math.floor( Math.random() * widthMax / 2), 
//         top: Math.floor( Math.random() * heightMax / 2),
//         width: Math.floor(Math.random() * width / 2),
//         height: Math.floor(Math.random() * height / 2),
//     }).css({
//             backgroundColor: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
//             border: "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")",
//     })  
//     }, 500);

// })