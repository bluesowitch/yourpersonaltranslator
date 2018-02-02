$('#submit').click(function(ev){
    if ($('form')[0].checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/julia.bliusovych@gmail.com", 
            method: "POST",
            data: {
                Name: $('#name').val(),
                Tel: $('#tel').val(),
                Email: $('#email').val(),
                Message: $('#message').val(),
            },
            dataType: "json"
        }).done(function() {
            $('form')[0].reset();
            $('#form-note').html('<p>Thank you for contacting me!</p>')
        }).fail(function(){
            $('#form-note').html('<p>Sorry! An error has occured! Please try again! </p>')
        });
    }
});