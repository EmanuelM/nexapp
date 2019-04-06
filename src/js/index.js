// init app
var App = new Nexapp('Nexapp Demo', '1.0');

// set bars action
$('a.topnav-bars').off('click');
$('a.topnav-bars').on('click', function(event) {
	event.preventDefault();
	App.panel.open();
});

/**
 * Examples
 */
// toast
$('a#test-toast').off('click');
$('a#test-toast').on('click', function(event) {
	event.preventDefault();
	// set toast
	App.toast.show("T", "I'm a toast :)");
});

// loader
$('a#test-loader').off('click');
$('a#test-loader').on('click', function(event) {
	event.preventDefault();
	// set loader
	App.loader.show();
	// hide
	setTimeout(function() {
		App.loader.hide();
	}, 3000);
});

// modal
$('a#test-modal').off('click');
$('a#test-modal').on('click', function(event) {
	event.preventDefault();
	// set modal
	App.modal.show('Test', '<p>This is a modal for testing purpose</p>', '<small><i>Nexapp modal</i></small>');
});