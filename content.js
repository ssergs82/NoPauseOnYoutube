'use strict';

console.log("start interval");
window.setInterval( function() {   
	console.log("interval fired!");
	confirmDialogProcessing();
	unacceptableVideoContentProcessing();
}, 1100);

function confirmDialogProcessing(){
	console.log("confirmDialogProcessing!");
	var confirmDialog = $("paper-dialog");
	document.getElementById('movie_player').dispatchEvent(new Event('mousemove'));
	if(confirmDialog && confirmDialog.length && confirmDialog.css("display")!== "none"){
		console.log("confirm dialog displayed");
		var confirmDialogRenderer = confirmDialog.find("yt-confirm-dialog-renderer");
		var continuePlayButton = confirmDialogRenderer.find("yt-button-renderer#confirm-button");
		var cancelButton = confirmDialogRenderer.find("yt-button-renderer#cancel-button");
		if(cancelButton.attr("hidden")==="hidden" && !continuePlayButton.attr("hidden")){
			console.log("simulate click");
			continuePlayButton.click();
		}
	}
}

function unacceptableVideoContentProcessing(){
	console.log("unacceptableVideoContentProcessing!");
	var unacceptableButtonWrapper = $("yt-player-error-message-renderer");
	if(unacceptableButtonWrapper && unacceptableButtonWrapper.length && !unacceptableButtonWrapper.attr("hidden")){
		console.log("confirm unacceptable content displayed");
		var continuePlayButton = unacceptableButtonWrapper.find("yt-button-renderer");
		if(!continuePlayButton.attr("hidden")){
			console.log("simulate click");
			continuePlayButton.click();
		}
	}
}