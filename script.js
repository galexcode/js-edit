$(document).ready(function() {
    
    // Temp text to load if nothing typed in. Remove after initial development.
    var editor_div_string = $('#editor_div').text().replace(/^\s+|\s+$/g,"");
    if ( editor_div_string.length == 0 ) {
	$('#editor_div').text('This is standard loaded text.');
    }
    $('#bold_button').click(function() {
	var range = window.getSelection().getRangeAt(0);
	// bold/unbold only the selected text range
	if ( range.toString().length ) {
	    alert('only handles when nothing is selected right now, sorry!');
	}
	// If no selection do all (just for dev purposes).
	else {
	    var font_weight = 'bold';
	    if ( $('#editor_div').css('font-weight') > 400 ) {
		font_weight = 'normal';
	    }
	    $('#editor_div').css('font-weight',font_weight);
	}
    })
});