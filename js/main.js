/*
 * HKNBP_webOS is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_webOS is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_webOS.  If not, see <https://www.gnu.org/licenses/>.
 */

var hknbpWebOsAppVersion = "0.9-webOS";

var onSuccess = function(args){
	var hknbpCoreIframe = document.getElementById("HKNBP_Core");
	hknbpCoreIframe.addEventListener("load", function () {
	    var hknbpCore = hknbpCoreIframe.contentWindow.HKNBP_Core.org.sourcekey.hknbp.hknbp_core;

	    //設置程式版編號
	    hknbpCore.appVersion = hknbpWebOsAppVersion;

	    //實體搖控
	    var ArrowLeft 			= 37;
		var ArrowUp 			= 38;
		var ArrowRight 			= 39;
		var ArrowDown 			= 40;
		var Enter 				= 13;
		var Back 				= 461;//未證實
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
		var MediaRewind 		= 412;
		var MediaFastForward 	= 417;
		var MediaPlay 			= 415;
		var MediaPause 			= 19;
		var MediaStop 			= 413;
		var MediaRecord 		= 416;
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
		
		var remote = hknbpCore.VirtualRemote;
		var keydown = function(e) {
	        switch (e.keyCode) {
			case ArrowLeft:
				remote.leftButton.click();
				break;
			case ArrowUp:
				remote.upButton.click();
				break;
			case ArrowRight:
				remote.rightButton.click();
				break;
			case ArrowDown:
				remote.downButton.click();
				break;
			case Enter:
				//remote.centerButton.click();
				break;
			/**case Back:
				remote.returnButton.click();
				break;*/
			case VolumeUp:
				remote.volumeUpButton.click();
				break;
			case VolumeDown:
				remote.volumeDownButton.click();
				break;
			case VolumeMute:
				remote.volumeMuteButton.click();
				break;
			case ChannelUp:
				remote.nextChannelButton.click();
				break;
			case ChannelDown:
				remote.previousChannelButton.click();
				break;
			case ChannelList:
				remote.epgButton.click();
				break;
			case ColorF0Red:
				remote.programmableRedButton.click();
				break;
			case ColorF1Green:
				remote.programmableGreenButton.click();
				break;
			case ColorF2Yellow:
				remote.programmableYellowButton.click();
				break;
			case ColorF3Blue:
				remote.programmableBlueButton.click();
				break;
			case Key_0:
				remote.number0Button.click();
				break;
			case Key_1:
				remote.number1Button.click();
				break;
			case Key_2:
				remote.number2Button.click();
				break;
			case Key_3:
				remote.number3Button.click();
				break;
			case Key_4:
				remote.number4Button.click();
				break;
			case Key_5:
				remote.number5Button.click();
				break;
			case Key_6:
				remote.number6Button.click();
				break;
			case Key_7:
				remote.number7Button.click();
				break;
			case Key_8:
				remote.number8Button.click();
				break;
			case Key_9:
				remote.number9Button.click();
				break;
			case Info:
				remote.channelDescriptionButton.click();
				break;
			case Caption:
				remote.nextSubtitleButton.click();
				break;
			case MTS:
				remote.nextAudioButton.click();
				break;
			case PictureSize:
				remote.nextVideoButton.click();
				break;
			case Guide:
				remote.epgButton.click();
				break;
			case Menu:
				remote.menuButton.click();
				break;
			case 1536:
				
				break;
			case 1537:
				
				break;
			default:
				hknbpCore.PromptBox.promptMessage("本程式並無此功能提供"+e.keyCode);
				break;
			}
	    }
		hknbpCoreIframe.contentWindow.addEventListener('keydown', keydown);

		//Back鍵嘅程序
	    window.addEventListener("popstate", function (event) {
	        //Back鍵嘅程序由度鼠開始
	        remote.returnButton.click();
	    }, false);
		
		//虛擬搖控制修定
		remote.volumeUpButton.onclick = function(){
			var request = webOS.service.request("luna://com.webos.audio", {
			    method: "volumeUp",
			    onComplete: function (inResponse) {
			        console.log("The volume is increased by 1.");
			        // To-Do something            
			    },
			    onFailure: function (inError) {
			        console.log("Failed to increase volume by 1.");
			        console.log("[" + inError.errorCode + "]: " + inError.errorText);
			        // To-Do something
			        return;
			    }
			});
		};
		remote.volumeDownButton.onclick = function(){
			var request = webOS.service.request("luna://com.webos.audio", {
			    method: "volumeDown",
			    onSuccess: function (inResponse) {
			        console.log("The volume is decreased by 1.");
			        // To-Do something
			    },
			    onFailure: function (inError) {
			        console.log("Failed to decrease volume by 1.");
			        console.log("[" + inError.errorCode + "]: " + inError.errorText);
			        // To-Do something
			        return;
			    }
			});
		};
		var isMuted = false;
		remote.volumeMuteButton.onclick = function(){
			var request = webOS.service.request("luna://com.webos.audio", {
			    method: "setMuted",
			    parameters: { "muted": !isMuted },
			    onSuccess: function (inResponse) {
			        console.log("TV is muted");
			        // To-Do something
			    },
			    onFailure: function (inError) {
			        console.log("Failed to set muted");
			        console.log("[" + inError.errorCode + "]: " + inError.errorText);
			        // To-Do something
			        return;
			    }
			});
			isMuted = !isMuted;
		};
	});
};

var onFailure = function(args){
	
};

//sample code for calling LS2 API
var lunaReq = webOS.service.request("luna://com.palm.systemservice",{
    method:"clock/getTime",
    parameters:{},
    onSuccess: onSuccess,
    onFailure: onFailure
});