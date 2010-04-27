/*
 * Inline Text Editing 1.3
 * April 26, 2010
 * Corey Hart @ http://www.codenothing.com
 */ 
(function(d,f){d.fn.inlineEdit=function(m){return this.each(function(){var i=this,g=d(i),e,a=d.extend({href:"ajax.php",requestType:"POST",html:true,load:f,display:".display",form:".form",text:".text",save:".save",cancel:".cancel",revert:".revert",loadtxt:"Loading...",hover:f,postVar:"text",postData:{},postFormat:f},m||{},d.metadata?g.metadata():{}),b=g.find(a.display),c=g.find(a.form),h=c.find(a.text),j=c.find(a.save),n=c.find(a.revert),o=c.find(a.cancel);if(d.data(i,"inline-edit")!==true){d.data(i,
"inline-edit",true);c.bind("submit.inline-edit",function(){j.trigger("click.inline-edit");return false});b.bind("click.inline-edit",function(){b.hide();c.show();if(a.html){if(e===f)e=b.html();h.val(e).focus()}else if(e===f)e=h.val();return false}).bind("mouseenter.inline-edit",function(){b.addClass(a.hover)}).bind("mouseleave.inline-edit",function(){b.removeClass(a.hover)});n.bind("click.inline-edit",function(){h.val(e||"").focus();return false});o.bind("click.inline-edit",function(){c.hide();b.show();
b.hasClass(a.hover)&&b.removeClass(a.hover);return false});j.bind("click.inline-edit",function(k){a.postData[a.postVar]=h.val();c.hide();b.html(a.loadtxt).show();b.hasClass(a.hover)&&b.removeClass(a.hover);d.ajax({url:a.href,type:a.requestType,data:a.postFormat?a.postFormat.call(g,k,{settings:a,postData:a.postData}):a.postData,success:function(l){e=f;a.load?a.load.call(b,k,{response:l,settings:a}):b.html(l)}});return false})}})}})(jQuery);
