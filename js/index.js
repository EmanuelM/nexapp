// init app
var App = new Nexapp('Nexapp Demo', '1.0');

$('a.topnav-bars').on('click', function(event) {
	event.preventDefault();
	App.panel.open();
});