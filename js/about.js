$(document).ready(function () {

    // selector de temas
    var theme = $('#theme');
    $("#to-green").click(function () {
        theme.attr('href', 'css/green.css')
    });
    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css')
    });
    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css')
    });

    //Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // login falsos
    $('#login form').submit(function () {
        var form_name = $('#name').val();
        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');
    if (form_name !== null && form_name !== undefined) {
        var about = $('#about p')
        about.html('<br><strong>Bienvenido, ' + form_name + "</strong>");
        about.append('<a href="#" id="logout">Cerra sesión</a>');
        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    $('#acordeon').accordion();

});