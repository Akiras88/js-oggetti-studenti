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


    /********************************************
        visible messages when the page is loaded
     ********************************************/

    // previous messages sent
    
    var chats = [
        {
            text: "Ciao come stai?",
            time: '16.02'
        },
        {
            text: "è da tanto che non ci sentiamo",
            time: '16.03'
        },
        {
            text: "Che fai?",
            time: '16.04'
        },
    ];


    for (var i = 0; i < chats.length; i++) {

        var prevChat = chats[i];

        var data1 = {
            text: prevChat['text'],
            time: prevChat['time'],
            userClass: 'sent'
        }

        var output = template(data1);
        chat.append(output);
    }

    // previous answers

    var answers = [
        {
            text: "Bene, grazie",
            time: '16.10'
        },
        {
            text: "Studio un po'",
            time: '16.11'
        },
    ];

    for (var i = 0; i < answers.length; i++) {

        var prevAnswers = answers[i];
        var data2 = {
            text: prevAnswers['text'],
            time: prevAnswers['time'],
            userClass: 'received'
        }
        var output = template(data2);
        chat.append(output);
    }

    

    sent.click(function() {

        var message = input.val().trim();

        var data = {
            text: message,
            time: currentTime(),
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
                time: currentTime(),
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

// current time function

function currentTime() {
    var date = new Date();
    var hour = addZero( date.getHours() );
    var minutes = addZero( date.getMinutes() );
    return hour + ':' + minutes;
}

// Add leading zero to numbers less than 10 whith 

function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
}
