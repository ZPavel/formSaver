$(document).ready(function() {
	$('<button/>', {
		text : 'saveForm',
		id : 'saveForm',
		click : function() {
			$('input[type="text"],input[type="email"],select').each(function() {
				var id = $(this).attr('id');
				var value = $(this).val();
				if(value){
					localStorage.setItem(id, value);
				}
			});
			$('input[type="radio"]:checked,input[type="checkbox"]:checked').each(function() {
				var id = $(this).attr('id');
				var value = $(this).val();
				if(value){
					localStorage.setItem(id, value);
				}
			});
		}
	}).css({'position':'fixed','bottom':25,'right':0}).appendTo('body');
	$('<button/>', {
		text : 'loadForm',
		id : 'loadForm',
		click : function() {
			$('input[type="text"],input[type="email"]').each(function() {
				var id = $(this).attr('id');
				var value = localStorage.getItem(id);
				if(value){
					$(this).val(value);
					$(this).trigger("blur");
				}
			});
			$('select').each(function() {
				var id = $(this).attr('id');
				var value = localStorage.getItem(id);
				if(value){
					$(this).val(value);
					$(this).trigger("change");
				}
			});
			$('input[type="radio"],input[type="checkbox"]').each(function() {
				var id = $(this).attr('id');
				var value = localStorage.getItem(id);
				if(value){
					$(this).attr('checked', 'checked');
					$(this).trigger("change");
				}
			});
		}
	}).css({'position':'fixed','bottom':0,'right':0}).appendTo('body');
});
