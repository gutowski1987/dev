$('h1:first-of-type').click(function() {
    alert('eeooo');
});

$('h1:last-of-type').on('click', function() {
    $(this).css('color', 'blue');
});

$('#click').on('click', function() {
    $('div').fadeToggle(2000, function() {});
});
