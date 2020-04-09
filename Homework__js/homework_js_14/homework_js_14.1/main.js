let taskMove = document.forms['task-move'];

taskMove.move.addEventListener('click', function(){
    if(taskMove.left.value == ''){
        !taskMove.right.placeholder ;
    }
    else{
        taskMove.right.placeholder = taskMove.left.value;
        taskMove.left.value = '';
    }
});
taskMove.bottom.addEventListener('blur', function(){
    this.placeholder = this.value;
    this.value = '';
})
