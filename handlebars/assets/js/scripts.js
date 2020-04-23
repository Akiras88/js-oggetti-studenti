/**********************
 * handlebars template
 ***********************/

$(document).ready(function () {

    // reference 
    var input = $('.msg-input');
    var sent = $('.Footer i');
    var chat = $('.Main');

    // reference template
    var source = $("#message-template").html();
    var template = Handlebars.compile(source);

    sent.click(function() {
        var message = input.val().trim();

        var data = {
            text: message,
            userClass: 'sent'
        };

        var html = template(data);
        chat.append(html);

        // scroll message
        scrollMessage();

        // clear input 
        input.val('');

        /***************
            auto reply
         **************/

        setTimeout(function () {
            var data = {
                text: 'ok',
                userClass: 'received'
            };

            var html = template(data);
            chat.append(html);

            // scroll message
            scrollMessage();

        }, 1000);
    });


 }); // end document ready

// scroll message function

function scrollMessage() {
    var pixelScroll = $('.Main').height();

    $('.Main').animate({
        scrollTop: pixelScroll
    }, 500);

}