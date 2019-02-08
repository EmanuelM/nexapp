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