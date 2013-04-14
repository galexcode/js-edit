$(document).ready(function() {
    
    // Temp text to load if nothing typed in. Remove after initial development.
    var editor_div_string = $('#editor_div').text().replace(/^\s+|\s+$/g,"");
    if ( editor_div_string.length == 0 ) {
	$('#editor_div').text('This is standard loaded text.');
    }
    $('#bold_button').click(function() {
	var range = window.getSelection().getRangeAt(0);
	// bold/unbold only the selected text range
	var font_weight = 'bold';
	if ( range.toString().length ) {
	    var allWithinRangeParent = range.commonAncestorContainer.childNodes;
	    var startNode = range.startContainer;
	    var endNode = range.endContainer;
	    console.log('start: '+ startNode.textContent);
	    console.log('end:' + endNode.textContent);
	    // start & end are equal nodes. still have to include a span around the interior for the specified text.
	    if ( startNode.isEqualNode(endNode) ) {
		if ( startNode.parentElement.style.fontWeight == 'bold' ) {
		    font_weight = 'normal';
		}
		startNode.parentElement.style.fontWeight=font_weight;
	    }
	}
	// If no selection do all (just for dev purposes).
	else {
	    if ( $('#editor_div').css('font-weight') > 400 ) {
		font_weight = 'normal';
	    }
	    $('#editor_div').css('font-weight',font_weight);
	}
    })
});