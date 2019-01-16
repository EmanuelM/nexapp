class Nexapp {
	constructor(name, version) {
		this.name    = name;
		this.version = version;
		// set panel methods
		this.panel = {
			open: function() {
				$('.nextapp-sidepanel').removeClass('hidden');
				setTimeout(function(){
					$('body').addClass('sidepanel-visible');
				}, 50);
				// set listener in overlay
				$('.sidepanel-overlay').off('click');
				$('.sidepanel-overlay').on('click', function() {
					App.panel.close();
				});
			},
			close: function() {
				$('body').removeClass('sidepanel-visible');
				setTimeout(function() {
					$('.nextapp-sidepanel').addClass('hidden');
				}, 350);
			}
		}
		// set toast methods
		this.toast = {
			/**
			 * show a toast
			 * @param  {HTML}    icon - font-awesome with <i></i>
			 * @param  {String}  text - text to display right to icon
			 */
			show: function(icon, text, secs) {
				$('.nextapp-toast .toast-icon').html(icon);
				$('.nextapp-toast .toast-text').text(text);

				$('div.nextapp-toast').addClass('show');
				// hide timeout
				App.toast.hide();
			},
			// hide a toast
			hide: function(secs) {
				setTimeout(function() {
					$('div.nextapp-toast').removeClass('show');
				}, (5000));
			}
		}
		// pages
		this.pages = {
			// includes page files - synchronous
			load: function() {
			  	// get pages
			  	$('page').each(function(index, page) {
			  		let src = $(this).attr('src');
				    if (src) {
						$.ajax({
							url: src,
							type: 'GET',
							async: false,
						})
						.done(function(response) {
							$('page[src="'+ src +'"]').html(response);
						})
						.fail(function(error) {
							console.log(error);
						});
				    }
			  	});
			  	// show home
			  	$('[data-page]').hide();
			  	$('[data-page=home]').show();
			},
			show: function(page) {
			  	$('[data-page]').hide();
			  	$('[data-page="'+ page +'"]').show();

			  	App.panel.close();
			},
			hide: function(page) {
			  	$('[data-page="'+ page +'"]').hide();
			},
			hideAll: function() {
			  	$('[data-page]').hide();
			}
		}
		this.pages.load();
	}
}