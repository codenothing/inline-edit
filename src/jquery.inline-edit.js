/*!
 * Inline Text Editing [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
(function( $, undefined ){
	$.fn.inlineEdit = function( options ){
		return this.each(function(){
			// Settings
			var $obj = $(this), original,
				settings = $.extend({
					href: 'ajax.php',
					html: true,
					load: undefined,
					display: '.display',
					form: '.form',
					text: '.text',
					save: '.save',
					cancel: '.cancel',
					loadtxt: 'Loading...',
					hover: 'none-error-404',
					postVar: 'text',
					postData: {},
					postFormat: undefined
				}, options||{}, $.metadata ? $obj.metadata() : {}),

				// Cache All Selectors
				$display = $obj.find( settings.display ),
				$form = $obj.find( settings.form ),
				$text = $obj.find( settings.text ),
				$save = $obj.find( settings.save ),
				$cancel = $obj.find( settings.cancel );
	
			// Display Actions
			$display.click(function(){
				$display.hide();
				$form.show();

				if ( settings.html ) {
					if ( original === undefined ) {
						original = $display.html();
					}

					$text.val( original ).focus();
				}

				return false;
			})
			.hover(function(){
				$display.addClass( settings.hover );
			}, function(){
				$display.removeClass( settings.hover );
			});

			// Cancel Actions
			$cancel.click(function(){
				$form.hide();
				$display.show();
				// Remove hover action if stalled
				if ( $display.hasClass( settings.hover ) ) {
					$display.removeClass( settings.hover );
				}
				return false;
			});

			// Save Actions
			$save.click(function(){
				settings.postData[ settings.postVar ] = $text.val();
				$form.hide();
				$display.html( settings.loadtxt ).show();

				if ( $display.hasClass( settings.hover ) ) {
					$display.removeClass( settings.hover );
				}

				$.ajax({
					url: settings.href,
					data: settings.dataFormat ?
						settings.dataForm.call( $obj, {settings: settings, postData: settings.postData} ) : settings.postData,
					success: function( response ){
						original = undefined;

						if ( settings.load ) {
							settings.load.call( $display, response );
							return;
						}

						$display.html( response );
					}
				});

				return false;
			});
		});
	};
})(jQuery);
