$(function(){
    $('.box-origin img').each(function(i,el){
        $(el).draggable({
            grid: [200,200]
        });
    });
    $('.box-copy').droppable()
    $('.box-origin, .box-copy').sortable({
        connectWith: ('.box-origin, .box-copy'),
        grid:[200,200],
    })
})
