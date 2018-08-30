//wyłącz pozycję z listy
$('ul').on('click', 'li', function() {
    $(this).toggleClass('wykonane');
});

$('.fa-plus').click(function() {
    $('input[type="text"]').fadeToggle();
});

//usuń pozycję z listy
$('ul').on('click', 'span', function(event) {
    $(this)
        .parent()
        .fadeOut(500, function() {
            $(this).remove();
        });
    event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
    if (event.which === 13) {
        var textPozycji = $(this).val();
        $(this).val('');
        //dodanie pozycji do listy
        $('ul').append(
            '<li><span><i class="far fa-trash-alt"></i></span>' +
                textPozycji +
                '</li>'
        );
    }
});
