'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeCtr").click(handleLike);
	$(".likeBtn").click(handleLike);
}

function handleLike(e){
	ga("send", "event", 'like', 'click');
	console.log("button clicked");
}
