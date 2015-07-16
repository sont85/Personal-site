$(document).ready(function() {
  'use strict';
  $('.parallax').parallax();
  $('.button-collapse').sideNav();
  $('.slider').slider({
    full_width: true
    // indicators: false
  });

  jQuery(function($) {
    $('#contact_form').submit(function() {
      var email = $('#email').val(); // get email field value
      var name = $('#name').val(); // get name field value
      var msg = $('#msg').val(); // get message field value
      $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': '7WmAYyvrBPxYbj6OUcGv_Q',
            'message': {
              'from_email': email,
              'from_name': name,
              'headers': {
                'Reply-To': email
              },
              'subject': 'Website Contact Form Submission',
              'text': msg,
              'to': [{
                'email': 'sont85@gmail.com',
                'name': 'Son Truong',
                'type': 'to'
              }]
            }
          }
        })
        .done(function(response) {
          Materialize.toast('Your message has been sent. Thank you!', 3000, 'rounded');
          $('#name').val(''); // reset field after successful submission
          $('#email').val(''); // reset field after successful submission
          $('#msg').val(''); // reset field after successful submission
        })
        .fail(function(response) {
          Materialize.toast('Error in Sending Message!', 3000, 'rounded');
        });
      return false; // prevent page refresh
    });
  });

});
