$("document").ready(function () {
    $("#addBtn").keypress(function () {
        var toDoText = $(this).val();
        if (event.which === 13 && toDoText !== '') {
            $(this).val("");
            $("#listAdd").append("<li class= 'newLi'>" + toDoText + "<i style='display:inline' class='fa fa-trash delete'> </i>" + "<i class='fas fa-hand-point-right move'></i>" + "</li>");
        }
    });

    $("#listAdd").on('click', '.delete', function () {
        $(this).parent().remove();
    });

    $('#listAdd').on('click', '.move', function(){
        $(this).parent('li').appendTo('#listAdd2');
    })

    
    $('#listAdd2').on('click', '.move', function(){
        $(this).parent('li').appendTo('#listAdd3');
    })
    $("#listAdd3").on('click', '.delete', function () {
        $(this).parent().remove();
    });
});

// Draggable

// explain the cursior

// 



