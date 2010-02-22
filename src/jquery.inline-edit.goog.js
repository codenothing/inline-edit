/*!
 * Inline Text Editing [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
(function(c){c.fn.inlineEdit=function(g){return this.each(function(){var d=c(this),a=c.extend({href:"ajax.php",html:true,load:function(){},display:".display",form:".form",text:".text",save:".save",cancel:".cancel",loadtxt:"Loading...",hover:"none-error-404",postVar:"text",postData:{}},g||{},c.metadata?d.metadata():{}),b=c(a.display,d),e=c(a.form,d),f=c(a.text,d),h=c(a.save,d);d=c(a.cancel,d);b.click(function(){b.hide();e.show();a.html&&f.val(b.html()).focus();return false}).hover(function(){b.addClass(a.hover)},
function(){b.removeClass(a.hover)});d.click(function(){e.hide();b.show();b.hasClass(a.hover)&&b.removeClass(a.hover);return false});h.click(function(){a.postData[a.postVar]=f.val();e.hide();b.html(a.loadtxt).load(a.href,a.postData,a.load).show();b.hasClass(a.hover)&&b.removeClass(a.hover);return false})})}})(jQuery);
