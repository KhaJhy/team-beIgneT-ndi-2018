$('a').click(function() {
    var $url = $(this).data('url');

    $.ajax({
        url : '../' + $url + '.html',
        type : 'GET',
        success: function(response) {
            if (response) {
                $('body').fadeOut(function() {
                    $(this).attr('class', $url).fadeIn();
                });
                $('#container').html(response);
            }
        }
    });
});