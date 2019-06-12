$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type ='text']").on("keypress",function(event){
    if(event.which === 13){
        var toDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + toDo + "</li>");
    }
});

$("#toggleH1").on("click",function(){
    $("input[type = 'text']").fadeToggle(100);
    $("#toggleH1").toggleClass("clickedColor");
});
