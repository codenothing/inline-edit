/*!
 * Inline Text Editing [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
;(function($){
	$.fn.inlineEdit = function(options){
		return this.each(function(){
			// Settings
			var $obj = $(this), 
				settings = $.extend({
					href: 'ajax.php',
					html: true,
					load: function(){},
					display: '.display',
					form: '.form',
					text: '.text',
					save: '.save',
					cancel: '.cancel',
					loadtxt: 'Loading...',
					hover: 'none-error-404',
					postVar: 'text',
					postData: {}
				}, options||{}, $.metadata ? $obj.metadata() : {});

			// Cache All Selectors
			var $display = $(settings.display, $obj),
				$form = $(settings.form, $obj),
				$text = $(settings.text, $obj),
				$save = $(settings.save, $obj),
				$cancel = $(settings.cancel, $obj);
	
			// Display Actions
			$display.click(function(){
				$display.hide();
				$form.show();
				if (settings.html) 
					$text.val( $display.html() ).focus();
				return false;
			}).hover(function(){ $display.addClass( settings.hover ); }, function(){ $display.removeClass( settings.hover ); });

			// Cancel Actions
			$cancel.click(function(){
				$form.hide();
				$display.show();
				// Remove hover action if stalled
				if ($display.hasClass( settings.hover ))
					$display.removeClass( settings.hover );
				return false;
			});

			// Save Actions
			$save.click(function(){
				settings.postData[settings.postVar] = $text.val();
				$form.hide();
				$display.html(settings.loadtxt).load(settings.href, settings.postData, settings.load).show();
				// Remove hover action if stalled
				if ($display.hasClass( settings.hover ))
					$display.removeClass( settings.hover );
				return false;
			});
		});
	};
})(jQuery);
