$(document).ready(function () {

    $('#add-btn').on('click', function () {
        var task = $('#task-input').val();

        if (task) {
            $('#task-list').append(
                '<li><input type="checkbox"> ' + task + 
                ' <span class="delete">X</span></li>'
            );

            $('#task-input').val("");
        }
    });

});

// Delete task
$(document).on('click', '.delete', function () {
    $(this).parent().remove();
});

// Toggle completed
$(document).on('change', 'input[type="checkbox"]', function () {
    $(this).parent().toggleClass('completed');
});

$('#task-input').keypress(function(e){
    if(e.which == 13){
        $('#add-btn').click();
    }
});