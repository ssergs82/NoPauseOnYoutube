'use strict';

console.log("start interval");
window.setInterval( function() {   
	var confirmDialog = $("paper-dialog");
	console.log("interval fired! mousemove");
	document.getElementById('movie_player').dispatchEvent(new Event('mousemove'));
	if(confirmDialog && confirmDialog.length && confirmDialog.css("display") !== "none"){
		console.log("dialog displayed");
		var confirmDialogRenderer = confirmDialog.find("yt-confirm-dialog-renderer");
		var continuePlayButton = confirmDialogRenderer.find("yt-button-renderer#confirm-button");
		var cancelButton = confirmDialogRenderer.find("yt-button-renderer#cancel-button");
		if(cancelButton.attr("hidden")==="hidden" && !continuePlayButton.attr("hidden")){
			console.log("simulate click");
			continuePlayButton.click();
		}
	}
}, 1100);