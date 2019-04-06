class Nexapp {
	constructor(name, version) {
		this.name    = name;
		this.version = version;
		var self = this;
		// set panel methods
		this.panel = {
			/* open panel */
			open: function() {
				$('.nexapp-sidepanel').removeClass('hidden');
				setTimeout(function(){
					$('body').addClass('sidepanel-visible');
				}, 50);
				// set listener in overlay
				$('.sidepanel-overlay').off('click');
				$('.sidepanel-overlay').on('click', function() {
					self.panel.close();
				});
			},
			/* close the panel */
			close: function() {
				$('body').removeClass('sidepanel-visible');
				setTimeout(function() {
					$('.nexapp-sidepanel').addClass('hidden');
				}, 350);
			}
		}
		// set toast methods
		this.toast = {
			/**
			 * Show a toast
			 * @param  {HTML}    icon - font-awesome with <i></i>
			 * @param  {String}  text - text to display right to icon
			 */
			show: function(icon, text) {
				$('.nexapp-toast .toast-icon').html(icon);
				$('.nexapp-toast .toast-text').text(text);

				$('div.nexapp-toast').addClass('show');
				// hide timeout
				self.toast.hide();
			},
			/* hide toast */
			hide: function() {
				setTimeout(function() {
					$('div.nexapp-toast .modal-content').removeClass('show');
				}, 5*1000);
			}
		}
		// set modal methods
		this.modal = {
			/**
			 * Show modal
			 * @param  {String} title
			 * @param  {HTML}   body
			 * @param  {HTML}   footer
			 */
			show: function(title, body, footer) {
				$('.nexapp-modal').css('display', 'block');
				// sets
				$('.nexapp-modal .modal-header h3').text(title);
				$('.nexapp-modal .modal-body').html(body);
				$('.nexapp-modal .modal-footer').html(footer);
				// close listener
				$('.nexapp-modal .modal-close').on('click', function() {
					self.modal.hide();
				})
			},
			/* Hide modal */
			hide: function() {
				$('.nexapp-modal').css('display', 'none');
				$('.nexapp-modal .modal-close').off('click');
			}
		}
		// pages
		this.pages = {
			/* Includes page files - synchronous */
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
			/**
			 * Show a page
			 * @param {String} page
			 */
			show: function(page) {
			  	$('[data-page]').hide();
			  	$('[data-page="'+ page +'"]').show();

			  	self.panel.close();
			},
			/**
			 * Hide a page
			 * @param {String} page
			 */
			hide: function(page) {
			  	$('[data-page="'+ page +'"]').hide();
			},
			/* Hide all pages */
			hideAll: function() {
			  	$('[data-page]').hide();
			}
		}
		/* Load all pages in init by default */
		this.pages.load();
		// loader
		this.loader = {
			/* show loader */
			show: function() {
				$('.nexapp-loader').addClass('show');
			},
			/* hide loader */
			hide: function() {
				$('.nexapp-loader').removeClass('show');
			},
		}
	}
}