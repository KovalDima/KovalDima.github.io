jQuery(function ($) {
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
        var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');

        if (theHref && location.href.replace(/#.*/, '') != theHref) return;

        var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
        if (!$target.length) return;

        e.preventDefault();

        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
            window.location.hash = hash;
        });
    });
});

function toggleFunction() {
    let div = document.getElementById('js-toggle_block');
    if (div.style.display === 'block') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
};

const checkOpened = () => $('.js-closed_container').hasClass('js-open_container');
const toggleOpen = () => {
    $('.js-closed_container').toggleClass('js-open_container');
    $('.js-portfolio').toggleClass('js-portfolio_origin');
}

$('.js-card').on('click', toggleOpen);

$('.js-cardLink').on('click', (e) => {
    const isOpened = checkOpened();

    if (!isOpened) {
        e.preventDefault();
    }
});