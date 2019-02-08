// init app
var App = new Nexapp('Nexapp Demo', '1.0');

// set bars action
$('a.topnav-bars').unbind('click');
$('a.topnav-bars').on('click', function(event) {
	event.preventDefault();
	App.panel.open();
});

/**
 * Examples
 */
// toast
$('a#test-toast').unbind('click');
$('a#test-toast').on('click', function(event) {
	event.preventDefault();
	// set toast
	App.toast.show("T", "I'm a toast :)");
});

// loader
$('a#test-loader').unbind('click');
$('a#test-loader').on('click', function(event) {
	event.preventDefault();
	// set loader
	App.loader.show();
	// hide
	setTimeout(function() {
		App.loader.hide();
	}, 3000);
});
// routes
Router.add('/', function() {
	App.pages.show('home');
});

Router.add('/login', function() {
	App.pages.show('login');
});

Router.add('/test', {
	setup: function(binds) {
		console.log('On setup');
	},
	load: function() {
		console.log('On load');
		App.pages.show('test');
	},
	unload: function() {
		console.log('On unload');
	},
	remove: function() {
		console.log('On remove');
	},
})

// listen hash
Router.listen();