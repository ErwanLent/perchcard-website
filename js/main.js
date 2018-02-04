$(document).ready(() => {

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
		console.log(email);

		$('#sign-up-modal .content').html(`<h3>Thank you for signing up. You've been added to the waitlist.</h3>`);
	});

});