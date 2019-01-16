// routes
Router.add('/', function() {
	App.pages.show('home');
});

Router.add('/hola', function() {
	App.pages.show('hola');
});

Router.add('/chau', function(binds) {
	App.pages.show('chau');
});

Router.listen();