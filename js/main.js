const carousel_images = [
	'rule-allowance',
	'rule-treat',
	'rule-rent'
];

$(document).ready(() => {

	$('.slide-item').click(function() {
		const slideNumber = $(this).attr('number');
		$('.slide-item').removeClass('active');
		$(this).addClass('active');

		$('#rule-image').removeClass();
		$('#rule-image').addClass(carousel_images[slideNumber]);
	});

    $('#sign-up-button').click(() => $('#sign-up-modal').modal({
        onApprove: function() {
            return false;
        }
    }).modal('show'));

    $('#sign-up-anchor').click(() => $('#sign-up-modal').modal({
        onApprove: function() {
            return false;
        }
    }).modal('show'));

	$('#modal-sign-up-button').click(() => {
		const email = $('#modal-email-input').val();

		if (!validateEmail(email)) {
			return;
		}

		postToSlack(email);

		$('#sign-up-modal .content').html(`<h3>Thank you for signing up. You've been added to the waitlist.</h3>`);
		$('#modal-sign-up-button').hide();
	});

	$('#second-email-button').click(() => {
		const email = $('#second-email-input').val();

		if (!validateEmail(email)) {
			return;
		}

		postToSlack(email);

		$('#second-email-button').hide();
		$('#second-email-input').hide();
		$('#second-email-message').fadeIn('slow');
	});

});

function postToSlack(email) {
    $.ajax({
        url: 'https://hooks.slack.com/services/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',
        type: 'POST',
        processData: true,
        data: JSON.stringify({
	      "channel":"emails",
	      "username":'incoming-webhook',
	      "text": email,
	      "icon_emoji":':raised_hands:'
	    }),
        success: function(data) {
           console.log(data);
        },
        error: function(data) {
           console.log(data);
        }
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}