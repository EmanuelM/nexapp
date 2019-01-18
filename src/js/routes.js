// routes
Router.add('/', function() {
	App.pages.show('home');
});

Router.add('/login', function() {
	App.pages.show('login');
});

Router.add('/test', function() {
	App.pages.show('test');
})

// listen hash
Router.listen();