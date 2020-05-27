/*
 * HKNBP_Tizen is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Tizen is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Tizen.  If not, see <https://www.gnu.org/licenses/>.
 */

function getFile(filePath){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send();
	return xmlhttp;
}

var hknbpWebOsAppVersion = "v"+JSON.parse(getFile("appinfo.json").responseText).version+"-webOS";

var onSuccess = function(args){
	var hknbpCoreIframe = document.getElementById("HKNBP_Core");
	hknbpCoreIframe.addEventListener("load", function () {
		var hknbpCoreIndex = hknbpCoreIframe.contentWindow;

	    //設置程式版編號
		hknbpCoreIndex.hknbpAppVersion(hknbpWebOsAppVersion);
		
		//設定實體搖控
		var remote = hknbpCoreIndex.hknbpRemote;
		var keydown = function(e) {
	        switch (e.keyCode) {
			case ArrowLeft:
				remote.leftButton.click();
				e.preventDefault();
				break;
			case ArrowUp:
				remote.upButton.click();
				e.preventDefault();
				break;
			case ArrowRight:
				remote.rightButton.click();
				e.preventDefault();
				break;
			case ArrowDown:
				remote.downButton.click();
				e.preventDefault();
				break;
			case Enter:
				remote.centerButton.click();
				e.preventDefault();
				break;
			case Back:
				//remote.returnButton.click();
				break;
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
				hknbpCoreIndex.hknbpPrompt("本程式並無此功能提供"+e.keyCode);
				break;
			}
	    }
		hknbpCoreIndex.addEventListener('keydown', keydown);
		
		//Back鍵嘅程序
	    window.addEventListener("popstate", function (event) {
	        //Back鍵嘅程序由度鼠開始
	        remote.returnButton.click();
	    }, false);
		
		//虛擬搖控制修定
	    hknbpCoreIndex.hknbpVolumeUp(function(){
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
		});
		hknbpCoreIndex.hknbpVolumeDown(function(){
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
		});
		var isMuted = false;
		hknbpCoreIndex.hknbpVolumeMute(function(){
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
		});
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
})