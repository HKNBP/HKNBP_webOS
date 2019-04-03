//sample code for calling LS2 API
var lunaReq= webOS.service.request("luna://com.palm.systemservice",{
    method:"clock/getTime",
    parameters:{},
    onSuccess: function (args) {
		console.log("UTC:", args.utc);
    },
    onFailure: function (args) {
    	
    }
});
   
//實體搖控
window.onload = function () {
	var ArrowLeft 			= 37;
	var ArrowUp 			= 38;
	var ArrowRight 			= 39;
	var ArrowDown 			= 40;
	var Enter 				= 13;
	var Back 				= 10009;//未證實
	var VolumeUp 			= 447;//未證實
	var VolumeDown 			= 448;//未證實
	var VolumeMute 			= 449;//未證實
	var ChannelUp			= 33;
	var ChannelDown 		= 34;
	var ChannelList 		= 10073;//未證實
	var ColorF0Red 			= 403;
	var ColorF1Green 		= 404;
	var ColorF2Yellow 		= 405;
	var ColorF3Blue 		= 406;
	var Key_0				= 48;
	var Key_1 				= 49;
	var Key_2 				= 50;
	var Key_3 				= 51;
	var Key_4 				= 52;
	var Key_5 				= 53;
	var Key_6 				= 54;
	var Key_7 				= 55;
	var Key_8 				= 56;
	var Key_9 				= 57;
	var Info 				= 457;
	var Caption 			= 460;
	var MTS 				= 10195;//未證實
	var PictureSize 		= 10140;//未證實
	var Guide 				= 458;//未證實
	var MediaPlayPause 		= 10252;//未證實
	var MediaRewind 		= 412;//未證實
	var MediaFastForward 	= 417;//未證實
	var MediaPlay 			= 415;//未證實
	var MediaPause 			= 19;//未證實
	var MediaStop 			= 413;//未證實
	var MediaRecord 		= 416;//未證實
	var MediaTrackPrevious 	= 10232;//未證實
	var MediaTrackNext 		= 10233;//未證實
	var Minus 				= 189;//未證實
	var PreviousChannel 	= 10190;//未證實
	var Menu 				= 18;//未證實
	var Tools 				= 10135;//未證實
	var Source 				= 10072;//未證實
	var Exit 				= 10182;//未證實
	var E_Manual 			= 10146;//未證實
	var Key_3D 				= 10199;//未證實
	var Extra 				= 10253;//未證實
	var Soccer 				= 10228;//未證實
	var Teletext 			= 10200;//未證實
	var Search 				= 10225;//未證實
	console.log(document.getElementById("HKNBP_Core").contentWindow);
   	var hknbp_Core = document.getElementById("HKNBP_Core").contentWindow.HKNBP_Core.org.sourcekey.hknbp.hknbp_core;
	document.addEventListener("keydown", function(inEvent){
		switch (inEvent.keyCode) {
		case ArrowLeft:
			
			break;
		case ArrowUp:
			
			break;
		case ArrowRight:
			
			break;
		case ArrowDown:
			
			break;
		case Enter:
			
			break;
		case Back:
			
			break;
		case VolumeUp:
			
			break;
		case VolumeDown:
			
			break;
		case VolumeMute:
			
			break;
		case ChannelUp:
			hknbp_Core.nextChannel();
			break;
		case ChannelDown:
			hknbp_Core.previousChannel();
			break;
		case ChannelList:
			
			break;
		case ColorF0Red:
			hknbp_Core.programmable(0);
			break;
		case ColorF1Green:
			hknbp_Core.programmable(1);
			break;
		case ColorF2Yellow:
			hknbp_Core.programmable(2);
			break;
		case ColorF3Blue:
			hknbp_Core.programmable(3);
			break;
		case Key_0:
			hknbp_Core.onNumberKey("0");
			break;
		case Key_1:
			hknbp_Core.onNumberKey("1");
			break;
		case Key_2:
			hknbp_Core.onNumberKey("2");
			break;
		case Key_3:
			hknbp_Core.onNumberKey("3");
			break;
		case Key_4:
			hknbp_Core.onNumberKey("4");
			break;
		case Key_5:
			hknbp_Core.onNumberKey("5");
			break;
		case Key_6:
			hknbp_Core.onNumberKey("6");
			break;
		case Key_7:
			hknbp_Core.onNumberKey("7");
			break;
		case Key_8:
			hknbp_Core.onNumberKey("8");
			break;
		case Key_9:
			hknbp_Core.onNumberKey("9");
			break;
		case Info:
			
			break;
		case Caption:
			hknbp_Core.nextSubtitleTrack();
			break;
		case MTS:
			hknbp_Core.nextAudioTrack();
			break;
		case PictureSize:
			hknbp_Core.nextVideoTrack();
			break;
		case Guide:
			
			break;
		default:
			//hknbp_Core.promptMessage("本程式並無此功能提供");
			break;
		}
	});
}