$(document).ready(function () {

    //slider

        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });


    //posts

        var posts = [
            {
                title: 'Prueba titulo 1', date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis tincidunt condimentum. Mauris dolor erat,  consectetur id pretium in, fringilla sit amet tellus. Proin maximus feugiat purus, eget hendrerit urna facilisis eget. Donec eget sodales nulla.'
            },
            {
                // title: 'Prueba titulo 2', date: new Date(),
                title: 'Prueba titulo 2', date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis tincidunt condimentum. Mauris dolor erat,  consectetur id pretium in, fringilla sit amet tellus. Proin maximus feugiat purus, eget hendrerit urna facilisis eget. Donec eget sodales nulla.'
            },
            {
                title: 'Prueba titulo 3', date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis tincidunt condimentum. Mauris dolor erat,  consectetur id pretium in, fringilla sit amet tellus. Proin maximus feugiat purus, eget hendrerit urna facilisis eget. Donec eget sodales nulla.'
            },
            {
                title: 'Prueba titulo 4', date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis tincidunt condimentum. Mauris dolor erat,  consectetur id pretium in, fringilla sit amet tellus. Proin maximus feugiat purus, eget hendrerit urna facilisis eget. Donec eget sodales nulla.'
            },
            {
                title: 'Prueba titulo 5', date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis tincidunt condimentum. Mauris dolor erat,  consectetur id pretium in, fringilla sit amet tellus. Proin maximus feugiat purus, eget hendrerit urna facilisis eget. Donec eget sodales nulla.'
            },
        ];

        var postsContainer = document.getElementById('posts'); /* Solo se usa en la versión de JS vanilla*/

        posts.forEach((item) => {
            //Con JQuery

            //     let post = `
            //     <article class="post">
            //                 <h2>${item.title}</h2>
            //                 <span class="date">${item.date}</span>
            //                 <p>${item.content}</p>
            //                 <a href="#" class="button-more">Leer más</a>
            //     </article>
            //             `;
            //     $('#posts').append(post);

            // Javascript Vanilla 

            let post = document.createElement('article');
            post.className = 'post';

            post.innerHTML = `
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer más</a>
        `;

            postsContainer.appendChild(post);

        });


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

});