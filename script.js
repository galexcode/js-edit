$(document).ready(function() {
    
    // Temp text to load if nothing typed in. Remove after initial development.
    var editor_div_string = $('#editor_div').text().replace(/^\s+|\s+$/g,"");
    if ( editor_div_string.length == 0 ) {
	$('#editor_div').text('This is standard loaded text.');
    }
});