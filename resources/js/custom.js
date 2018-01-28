
$(document).ready(function() {
    scrollToTopHandler();

    initGoodreads();

    /* Goodreads - START */
    function initGoodreads() {
        noBookMessage('alessandro');
        noBookMessage('elisa');
    }

    function noBookMessage(name) {
        var message = '<span class="gr_no_books text-muted">sto scegliendo il prossimo libro :-)</span>';
        if ($('.gr_custom_each_container_' + name).length == 0) {
            $('#gr_custom_widget_' + name + ' br').before(message);
        }
    }

    function scrollToTopHandler() {
        $('.top-link').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 750);
        });
    }
});