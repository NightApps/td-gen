$(document).ready(function(){
      changeColor();
      showHideBox();
	  $("#extendedColorScheme-select").hide();
      $("#CustomColor-select").hide();
      $("#CustomBG-select").hide();
	  $('select').material_select();
});

var nightColorScheme = [
['nightColorScheme', ''], 
['night-Red', '#aa1400'], 
['night-Orange', '#d15900'], 
['night-Yellow', '#d1bb00'], 
['night-Green', '#24aa00'], 
['night-Cyan', '#00a0aa'], 
['night-Blue', '#0054aa'], 
['night-Violet', '#7800aa'], 
['night-Pink', '#d100b1']
];

var extendedColorScheme = [
['extendedColorScheme', ''], 
['night-Crimson', '#f62222'], 
['night-Pink', '#ff69a3'], 
['night-Violet', '#b424df'], 
['night-Indigo', '#8737f8'], 
['night-Cobalt', '#0099d4'], 
['night-Forest', '#00a650'], 
['night-Green', '#91d013'], 
['night-Gold', '#ffd200'], 
['night-Orange', '#ff8900'], 
['night-Brown', '#784834'], 
['night-Steel', '#8d92a8'], 
['night-Salmon', '#fd6a6c'], 
['night-Blush', '#fea7b9'], 
['night-Muave', '#cd9aec'], 
['night-Lavender', '#b5b8f8'], 
['night-Baby', '#8bd1eb'], 
['night-Mint', '#97f2c3'], 
['night-Lime', '#bbe061'], 
['night-Lemon', '#f9e560'], 
['night-Tangerine', '#ffb43f'], 
['night-Coconut', '#cfa075'], 
['night-Bio', '#973333'], 
['night-Pi', '#9b26af'], 
['night-Matrix', '#00c700'], 
['night-Ghost', '#005cb0'], 
['night-Ve', '#d04686'], 
['night-Evil', '#e91e64'], 
['night-Aqua', '#00f5ff'], 
['night-Cosmo', '#663399'], 
['night-Navy', '#336600'], 
['night-Wine', '#801a00'], 
['night-Neonred', '#fa0009'], 
['night-Snap', '#fffc00'], 
['night-Chromatic', '#469496'], 
['night-Ember', '#919921'], 
['night-Darkwine', '#581845'], 
['night-Wolf', '#5e83ba'], 
['night-Eb', '#7df9ff'], 
['night-Samsung', '#033b5e'], 
['night-Viridian', '#00fa9a'], 
['night-Papi', '#f08080'], 
['night-Olive', '#c0ff3e'], 
['night-Deeppurple', '#58267b'], 
['night-Novamint', '#33ff77'], 
['night-Colts', '#000066'], 
['night-Maroon', '#8b1c62'], 
['night-Eclipse', '#3c7153'], 
['night-Mintplus', '#68d49b'], 
['night-Berry', '#3f51b5'], 
['night-Nazi', '#b71513'], 
['night-Lagoon', '#194747'], 
['night-Ice', '#00154f'], 
['night-Woods', '#0e6251'], 
['night-Cloudy', '#626262'], 
['night-Luna', '#912cee'], 
['night-Seafoam', '#a3e4d7'], 
['night-Perfection', '#bd33ff'], 
['night-Ruby', '#c70046'], 
['night-Odd', '#ffb6c1'], 
['night-Neonpink', '#ff00f3'], 
['night-Golden', '#ffd740']
];

function changeBG(bg, text){
	document.documentElement.style.setProperty(`--bg`, bg);
	document.documentElement.style.setProperty(`--text`, text);
}

function changeColor() {
	dupCheck = localStorage.getItem('dupCheck');
	var nightColors = ["red", "orange", "yellow", "green", "cyan", "blue", "violet", "pink"];
	var piColor = nightColors[Math.floor(Math.random() * nightColors.length)];
	if (dupCheck == piColor) changeColor();
	document.getElementsByTagName("nav")[0].style.background = 'var(--night-' + piColor + ')';
	document.getElementsByClassName("btn-large")[0].style.background = 'var(--night-' + piColor + ')';
	localStorage.setItem('dupCheck', piColor);
}

function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementsByTagName("nav")[0].style.backgroundColor = '#' + jscolor
	document.getElementById("makeTheme").style.backgroundColor='#' + jscolor;
	window.customColor = '#' + jscolor;
}
function updateBG(jscolor) {
    // 'jscolor' instance can be used as a string
    changeBG('#'+jscolor, invertColor('#'+jscolor));
	window.BGColor = '#'+jscolor;
}

function showHideBox(){
$("input[name$='accent-Select']").click(function() {
        var test = $(this).attr('id');
		var test = test.replace("theme-", "");
		var test = '#'+test+"-select";
        $("#accent-boxes select").hide();
        $("#accent-boxes input").hide();
        $(test).show();
    });
}
	
function colorizeSelectOptions(array){
	document.write('<select id="'+array[0][0]+'-select" onchange="colorSelectBox(this,'+array[0][0]+')" class="browser-default">\n<option style="background:#262626;" value="undefined" disabled selected>Choose your option</option>');
	for (i = 1; i < array.length; i++) {
    document.write('<option value="'+array[i][0]+'" style="background:'+array[i][1]+' !important;">'+array[i][0].replace("night-", "")+'</option>');
}
	document.write('</select>');
}

function getValueColor(option, array, num){
	if (num === 'undefined') num = 1;
	//console.log(option.value);
	var name = option.value
	for(var i = 1; i < array.length; i++) {
   if(array[i][0] === name) {
     return array[i][num];
   }
}
}

function colorSelectBox(option, array){
	var name = getValueColor(option, array, 1);
     option.style.backgroundColor = name;
	 document.getElementsByTagName("nav")[0].style.backgroundColor=name;
	 document.getElementById("makeTheme").style.backgroundColor=name;
	 window.ColorName = option.value.replace('night-', '');
}


function getStyle(el, styleProp) {
  var value, defaultView = el.ownerDocument.defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
      return (function(value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);
    color = parseInt(color, 16);
    color = 0xFFFFFF ^ color;
    color = color.toString(16);
    color = ("000000" + color).slice(-6);
    return "#" + color;
}


function convertToHex(num){
		num = parseInt(num,10);
		if( num<0 ) {
			if( num>=-32768 )
				num+=65536;
			else if( num>=-Math.pow(2,31))
				num+=Math.pow(2,32);
			else if( num>=-Math.pow(2,63) )
				num+=Math.pow(2,64);
		}
		num = num.toString(16);
		var result = num.toUpperCase();
		return result;
	}
	
function convertToDec(num){
		var isNegative=num.toString().toLowerCase().substring(0, 2)=='ff';
		num = parseInt(num,16);
		var result = num.toString(10);
		var result=parseInt(result);
		var pow = Math.pow(2,32);
		if (isNegative) var result = result-pow;
		return result;
	}

function makeTheme(){
	if (document.getElementById("theme-tdesktop").checked) return makeThemeDesktop();
	return makeThemeAndroid();
}


function makeThemeDesktop(){
	try{
	if (document.getElementById("theme-Light").checked) {
		var primaryBG = '#e2e2e2',
		    primaryBG2 ='#dedede',
		    primaryBG3 ='#d9d9d9',
		    primaryBG4 ='#d2d2d2',
		    primaryBG4Trans = '#d2d2d2d4',
		    primaryBG5 = '#cecece',
		    primaryBG6 = '#c9c9c9',
		    primaryText = '#222222',
		    primaryText2 = '#000000',
		    background = backgrounds.light;
		window.ThemeName = 'Dawn';
	} else if (document.getElementById("theme-Amoled").checked) {
		var primaryBG = '#000000',
		    primaryBG2 ='#000000',
		    primaryBG3 ='#000000',
		    primaryBG4 ='#000000',
		    primaryBG4Trans = '#000000cc',
		    primaryBG5 = '#000000',
		    primaryBG6 = '#000000',
		    primaryText = '#f5f5f5',
		    primaryText2 = '#ffffff',
			background = backgrounds.black;
		window.ThemeName = 'Midnight';
	} else if (document.getElementById("theme-Dark").checked) {
		var primaryBG = '#1d1d1d',
		    primaryBG2 ='#212121',
		    primaryBG3 ='#262626',
		    primaryBG4 ='#2d2d2d',
		    primaryBG4Trans = '#2d2d2dd4',
		    primaryBG5 = '#313131',
		    primaryBG6 = '#363636',
		    primaryText = '#f5f5f5',
		    primaryText2 = '#ffffff',
		    background = backgrounds.dark;
			window.ThemeName = 'Dark';
	} else {
		var primaryBG = window.BGColor;
		var primaryBGTrans = primaryBG + 'cc';
		var primaryBG2 = ColorLuminance(primaryBG, 0.15);
		var primaryBG3 = ColorLuminance(primaryBG2, 0.15);
		var primaryBG4 = ColorLuminance(primaryBG3, 0.15);
		primaryBG4Trans = primaryBG4Trans+'d4';
		var primaryBG5 = ColorLuminance(primaryBG4, 0.15);
		var primaryBG6 = ColorLuminance(primaryBG5, 0.15);
		var primaryText = invertColor(primaryBG);
		var primaryText2 = invertColor(primaryBG2);
		var primaryText3 = invertColor(primaryBG3);
		window.ThemeName = 'Custom('+primaryBG+')';
	}
	var Palette = "// Generated by Telegram Theme Generator v3.0, by Night Apps \n // Try it out at https://nightapps.github.io/td-gen \n  \n //Define Night Color Scheme v3.0 \n nightBlue: #0054aa; \n nightBlueDark: #002a55; \n nightRed: #aa1400; \n nightRedDark: #550a00; \n nightOrange: #d15900; \n nightOrangeDark: #682c00; \n nightYellow: #d1bb00; \n nightYellowDark: #685d00; \n nightGreen: #24aa00; \n nightGreenDark: #125500; \n nightAqua: #00a0aa; \n nightAquaDark: #005055; \n nightViolet: #7800aa; \n nightVioletDark: #3c0055; \n nightPink: #d100b1; \n nightPinkDark: #680058; \n";
	if (document.getElementById('theme-nightColorScheme').checked) {
		if (document.getElementById('nightColorScheme-select').options[document.getElementById('nightColorScheme-select').selectedIndex].value == 'undefined') return Materialize.toast('Color Not Set!', 3000);
		//var replaceVars = [
		//	['Orange', 'Ora'],
		//	['Yellow', 'Yel'], // deprecated
		//	['Green', 'Gre'],
		//	['Violet', 'Vio']
		//];
		var primaryColor = getValueColor(document.getElementById('nightColorScheme-select'), nightColorScheme, 1);
		//for (i = 0; i < replaceVars.length; i++) {
		//	primaryColor = primaryColor.replace(replaceVars[i][0], replaceVars[i][1]);
		//}  // deprecated
		primaryColorDark = ColorLuminance(primaryColor, -0.5);
		primaryColorTrans = primaryColor + '80';
	} else if (document.getElementById('theme-extendedColorScheme').checked) {
		var primaryColor = getValueColor(document.getElementById('extendedColorScheme-select'), extendedColorScheme, 1);
		primaryColorDark = ColorLuminance(primaryColor, -0.5);
		primaryColorTrans = primaryColor + '80';
	} else {
		var primaryColor = window.customColor;
		primaryColorDark = ColorLuminance(primaryColor, -0.5);
		primaryColorTrans = primaryColor + '80';
		window.ColorName = 'Custom('+primaryColor+')';
	}

	var Palette = Palette+'//Background \n primaryDark: '+primaryBG+'; \n secondaryDark: '+primaryBG2+'; \n tertiaryDark: '+primaryBG3+'; \n quaternaryDark: '+primaryBG4+'; \n quaternaryDarkTrans: '+primaryBG4Trans+'; // manually defined \n quinaryDark: '+primaryBG5+'; \n senaryDark: '+primaryBG6+'; \n //Colors \n primaryColor: '+primaryColor+'; \n primaryColorDark: '+primaryColorDark+'; \n primaryColorTrans: '+primaryColorTrans+'; // manually defined \n //Text \n primaryText: '+primaryText+'; \n secondaryText: '+primaryText2+'; \n\n';
	var Palette = Palette+'windowBg: primaryDark; // white: fallback for background \n windowFg: secondaryText; // black: fallback for text \n windowBgOver: tertiaryDark; // light gray: fallback for background with mouse over \n windowBgRipple: primaryColor; // darker gray: fallback for ripple effect \n windowFgOver: #e9ecf0; // black: fallback for text with mouse over \n windowSubTextFg: #82868a; // gray: fallback for additional text \n windowSubTextFgOver: primaryColor; // darker gray: fallback for additional text with mouse over \n windowBoldFg: #e9e8e8; // dark gray: fallback for bold text \n windowBoldFgOver: #e9e9e9; // dark gray: fallback for bold text with mouse over \n windowBgActive: primaryColor; // bright blue: fallback for blue filled active areas \n windowFgActive: primaryText; // white: fallback for text on active areas \n windowActiveTextFg: primaryColor; // online blue: fallback for active text like online status \n windowShadowFg: #000000; // black: fallback for shadow \n windowShadowFgFallback: windowBg; // gray: fallback for shadow without opacity \n shadowFg: #00000000; // most shadows (including opacity) \n slideFadeOutBg: #0000003c; // slide animation (chat to profile) fade out filling \n slideFadeOutShadowFg: windowShadowFg; // slide animation (chat to profile) fade out right section shadow \n imageBg: primaryDark; // image background fallback (when photo size is less than minimum allowed) \n imageBgTransparent: primaryText; // image background when displaying an image with opacity where no opacity is needed \n activeButtonBg: primaryColor; // default active button background \n activeButtonBgOver: primaryColor; // default active button background with mouse over \n activeButtonBgRipple: primaryColor; // default active button ripple effect \n activeButtonFg: primaryText; // default active button text \n activeButtonFgOver: primaryText; // default active button text with mouse over \n activeButtonSecondaryFg: primaryColorDark; // default active button additional text (selected messages counter in forward / delete buttons) \n activeButtonSecondaryFgOver: activeButtonSecondaryFg; // default active button additional text with mouse over \n activeLineFg: primaryColor; // default active line (like code input field bottom border when you log in and field is focused) \n activeLineFgError: #aa1400; // default active line for error state (like code input field bottom border when you log in and you\'ve entered incorrect code) \n lightButtonBg: #00000000; // default light button background (like buttons in boxes) \n lightButtonBgOver: #0000004f; // default light button background with mouse over \n lightButtonBgRipple: primaryColor; // default light button ripple effect \n lightButtonFg: primaryColor; // default light button text \n lightButtonFgOver: lightButtonFg; // default light button text with mouse over \n attentionButtonFg: #aa1400; // default attention button text (like confirm button on log out) \n attentionButtonFgOver: #aa1400; // default attention button text with mouse over \n attentionButtonBgOver: #aa140064; // default attention button background with mouse over \n attentionButtonBgRipple: attentionButtonFgOver; // default attention button ripple effect \n outlineButtonBg: windowBg; // default left outlined button background (like shared media links in profiles) \n outlineButtonBgOver: tertiaryDark; // default left outlined button background with mouse over \n outlineButtonOutlineFg: primaryColor; // default left outlined button left outline border \n outlineButtonBgRipple: primaryColor; // default left outlined button ripple effect \n menuBg: primaryDark; // default popup menu background \n menuBgOver: primaryText; // default popup menu item background with mouse over \n menuBgRipple: primaryColor; // default popup menu item ripple effect \n menuIconFg: primaryColor; // default popup menu item icon (like main menu) \n menuIconFgOver: #dcdcdc; // default popup menu item icon with mouse over \n menuSubmenuArrowFg: #757575; // default popup menu submenu arrow icon (like in message field context menu in case of RTL system language) \n menuFgDisabled: #737373; // default popup menu item disabled text (like unavailable items in message field context menu) \n menuSeparatorFg: #42484d; // default popup menu separator (like in message field context menu) \n scrollBarBg: primaryColorTrans; // default scroll bar current rectangle, the bar itself (like in chats list) \n scrollBarBgOver: #0055aab4; // default scroll bar current rectangle with mouse over it \n scrollBg: #ffffff1a; // default scroll bar background \n scrollBgOver: #ffffff24; // default scroll bar background with mouse over the scroll bar \n smallCloseIconFg: primaryColor; // small X icon (like in Show all sessions box to the right for sessions termination) \n smallCloseIconFgOver: primaryColor; // small X icon with mouse over \n radialFg: windowFgActive; // default radial loader line (like in Media Viewer when loading a photo) \n radialBg: #00000056; // default radial loader background (like in Media Viewer when loading a photo) \n placeholderFg: #818991; // default input field placeholder when field is not focused (like in phone input field when you log in) \n placeholderFgActive: #5d6165; // default input field placeholder when field is focused \n inputBorderFg: #6f6f6f; // default input field bottom border (like in code input field when you log in and field is not focused) \n filterInputBorderFg: #3d444b; // default rounded input field border (like in chats list search field when field is focused) \n filterInputInactiveBg: tertiaryDark; // default rounded input field background (like in chats list search field when field is inactive) \n checkboxFg: primaryColor; // default unchecked checkbox rounded rectangle (and also emoji category icons) \n sliderBgInactive: #545454; // default slider not active bar (like in Settings when you choose interface scale or custom notifications count) \n sliderBgActive: windowBgActive; // default slider active bar (like in Settings when you choose interface scale or custom notifications count) \n tooltipBg: #d4dadd; // tooltip background (like when you put mouse over the message timestamp and wait) \n tooltipFg: #9a9e9c; // tooltip text \n tooltipBorderFg: #c9d1db; // tooltip border \n titleShadow: #00000003; // one pixel line shadow at the bottom of custom window title \n titleBg: quaternaryDark; // custom window title background when window is inactive \n titleBgActive: titleBg; // custom window title background when window is active \n titleButtonBg: titleBg; // custom window title minimize/maximize/restore button background when window is inactive (Windows only) \n titleButtonFg: primaryColor; // custom window title minimize/maximize/restore button icon when window is inactive (Windows only) \n titleButtonBgOver: primaryColor; // custom window title minimize/maximize/restore button background with mouse over when window is inactive (Windows only) \n titleButtonFgOver: primaryText; // custom window title minimize/maximize/restore button icon with mouse over when window is inactive (Windows only) \n titleButtonBgActive: titleButtonBg; // custom window title minimize/maximize/restore button background when window is active (Windows only) \n titleButtonFgActive: titleButtonFg; // custom window title minimize/maximize/restore button icon when window is active (Windows only) \n titleButtonBgActiveOver: titleButtonBgOver; // custom window title minimize/maximize/restore button background with mouse over when window is active (Windows only) \n titleButtonFgActiveOver: titleButtonFgOver; // custom window title minimize/maximize/restore button icon with mouse over when window is active (Windows only) \n titleButtonCloseBg: titleButtonBg; // custom window title close button background when window is inactive (Windows only) \n titleButtonCloseFg: titleButtonFg; // custom window title close button icon when window is inactive (Windows only) \n titleButtonCloseBgOver: #aa1400; // custom window title close button background with mouse over when window is inactive (Windows only) \n titleButtonCloseFgOver: windowFgActive; // custom window title close button icon with mouse over when window is inactive (Windows only) \n titleButtonCloseBgActive: titleButtonCloseBg; // custom window title close button background when window is active (Windows only) \n titleButtonCloseFgActive: titleButtonCloseFg; // custom window title close button icon when window is active (Windows only) \n titleButtonCloseBgActiveOver: titleButtonCloseBgOver; // custom window title close button background with mouse over when window is active (Windows only) \n titleButtonCloseFgActiveOver: titleButtonCloseFgOver; // custom window title close button icon with mouse over when window is active (Windows only) \n titleFg: #666666; // custom window title text when window is inactive (macOS only) \n titleFgActive: #808080; // custom window title text when window is active (macOS only) \n trayCounterBg: primaryColor; // tray icon counter background \n trayCounterBgMute: quaternaryDark; // tray icon counter background if all unread messages are muted \n trayCounterFg: primaryText; // tray icon counter text \n trayCounterBgMacInvert: primaryText; // tray icon counter background when tray icon is pressed or when dark theme of macOS is used (macOS only) \n trayCounterFgMacInvert: #ffffff01; // tray icon counter text when tray icon is pressed or when dark theme of macOS is used (macOS only) \n layerBg: #0000007f; // box and main menu background layer fade \n cancelIconFg: primaryColor; // default for settings close icon and box search cancel icon \n cancelIconFgOver: #dcdcdc; // default for settings close icon and box search cancel icon with mouse over \n boxBg: windowBg; // box background \n boxTextFg: windowFg; // box text \n boxTextFgGood: #56dbce; // accepted box text (like when choosing username that is not occupied) \n boxTextFgError: #d84d4d; // rejecting box text (like when choosing username that is occupied) \n boxTitleFg: #ebebeb; // box title text \n boxSearchBg: primaryDark; // box search field background (like in contacts box) \n boxTitleAdditionalFg: #808080; // box title additional text (like in create group box when you see chosen members count) \n boxTitleCloseFg: cancelIconFg; // settings close icon and box search cancel icon (like in contacts box) \n boxTitleCloseFgOver: cancelIconFgOver; // settings close icon and box search cancel icon (like in contacts box) with mouse over \n membersAboutLimitFg: #5e6065; // text in channel members box about the limit (max 200 last members are shown) \n contactsBg: primaryDark; // contacts (and some other) box row background \n contactsBgOver: secondaryDark; // contacts (and some other) box row background with mouse over \n contactsNameFg: boxTextFg; // contacts (and some other) box row name text \n contactsStatusFg: primaryColor; // contacts (and some other) box row additional text (like last seen stamp) \n contactsStatusFgOver: primaryColor; // contacts (and some other) box row additional text (like last seen stamp) with mouse over \n contactsStatusFgOnline: primaryColor; // contacts (and some other) box row active additional text (like online status) \n photoCropFadeBg: layerBg; // avatar crop box fade background (when choosing a new photo in Settings or for a group) \n photoCropPointFg: #ffffff7f; // avatar crop box corner rectangles (when choosing a new photo in Settings or for a group) \n callArrowFg: primaryColor; // received phone call arrow (in calls list box) \n callArrowMissedFg: #aa1400; // missed phone call arrow (in calls list box) \n introBg: windowBg; // login background \n introTitleFg: #eeeeee; // login title text \n introDescriptionFg: #999999; // login description text \n introErrorFg: #999999; // login error text (like when providing a wrong log in code) \n introCoverTopBg: primaryColor; // intro gradient top (from) \n introCoverBottomBg: #188173; // intro gradient bottom (to) \n introCoverIconsFg: #34a495; // intro cloud graphics \n introCoverPlaneTrace: #329d8f; // intro plane traces \n introCoverPlaneInner: #ced9e2; // intro plane part \n introCoverPlaneOuter: #97a9b5; // intro plane part \n introCoverPlaneTop: primaryText; // intro plane part \n dialogsMenuIconFg: primaryColor; // main menu and lock telegram icon \n dialogsMenuIconFgOver: menuIconFgOver; // main menu and lock telegram icon with mouse over \n dialogsBg: windowBg; // chat list background \n dialogsNameFg: secondaryText; // chat list name text \n dialogsChatIconFg: dialogsNameFg; // chat list group or channel icon \n dialogsDateFg: #6d727c; // chat list date text \n dialogsTextFg: #8d939e; // chat list message text \n dialogsTextFgService: primaryColor; // chat list group sender name text (or media message type text) \n dialogsDraftFg: #ec6657; // chat list draft label \n dialogsVerifiedIconBg: primaryColor; // chat list verified icon background \n dialogsVerifiedIconFg: primaryDark; // chat list verified icon check \n dialogsSendingIconFg: primaryColor; // chat list sending message icon (clock) \n dialogsSentIconFg: primaryColor; // chat list sent message tick / double tick icon \n dialogsUnreadBg: primaryColor; // chat list unread badge background for not muted chat \n dialogsUnreadBgMuted: quaternaryDark; // chat list unread badge background for muted chat \n dialogsUnreadFg: primaryText; // chat list unread badge text \n dialogsBgOver: tertiaryDark; // chat list background with mouse over \n dialogsNameFgOver: windowBoldFgOver; // chat list name text with mouse over \n dialogsChatIconFgOver: dialogsNameFgOver; // chat list group or channel icon with mouse over \n dialogsDateFgOver: #6d727c; // chat list date text with mouse over \n dialogsTextFgOver: #a3a7ae; // chat list message text with mouse over \n dialogsTextFgServiceOver: primaryColor; // chat list group sender name text with mouse over \n dialogsDraftFgOver: dialogsDraftFg; // chat list draft label with mouse over \n dialogsVerifiedIconBgOver: primaryColor; // chat list verified icon background with mouse over \n dialogsVerifiedIconFgOver: dialogsVerifiedIconFg; // chat list verified icon check with mouse over \n dialogsSendingIconFgOver: dialogsSendingIconFg; // chat list sending message icon (clock) with mouse over \n dialogsSentIconFgOver: primaryColor; // chat list sent message tick / double tick icon with mouse over \n dialogsUnreadBgOver: primaryColor; // chat list unread badge background for not muted chat with mouse over \n dialogsUnreadBgMutedOver: #555e67; // chat list unread badge background for muted chat with mouse over \n dialogsUnreadFgOver: dialogsUnreadFg; // chat list unread badge text with mouse over \n dialogsBgActive: primaryColor; // chat list background for current (active) chat \n dialogsNameFgActive: windowFgActive; // chat list name text for current (active) chat \n dialogsChatIconFgActive: dialogsNameFgActive; // chat list group or channel icon for current (active) chat \n dialogsDateFgActive: windowFgActive; // chat list date text for current (active) chat \n dialogsTextFgActive: windowFgActive; // chat list message text for current (active) chat \n dialogsTextFgServiceActive: dialogsTextFgActive; // chat list group sender name text for current (active) chat \n dialogsDraftFgActive: #c6f7f3; // chat list draft label for current (active) chat \n dialogsVerifiedIconBgActive: dialogsTextFgActive; // chat list verified icon background for current (active) chat \n dialogsVerifiedIconFgActive: dialogsBgActive; // chat list verified icon check for current (active) chat \n dialogsSendingIconFgActive: #ffffff99; // chat list sending message icon (clock) for current (active) chat \n dialogsSentIconFgActive: dialogsTextFgActive; // chat list sent message tick / double tick icon for current (active) chat \n dialogsUnreadBgActive: dialogsTextFgActive; // chat list unread badge background for not muted chat for current (active) chat \n dialogsUnreadBgMutedActive: #cbf7e9; // chat list unread badge background for muted chat for current (active) chat \n dialogsUnreadFgActive: primaryColor; // chat list unread badge text for current (active) chat \n dialogsRippleBg: #0055aa; //  \n dialogsRippleBgActive: primaryColor; //  \n dialogsForwardBg: primaryDark; // forwarding panel background (when forwarding messages in the smallest window size) \n dialogsForwardFg: dialogsNameFgActive; // forwarding panel text (when forwarding messages in the smallest window size) \n searchedBarBg: secondaryDark; // search results bar background (in chats list, contacts box..) \n searchedBarFg: #a8a8a8; // search results bar text (in chats list, contacts box..) \n topBarBg: quaternaryDark; // top bar background (in chat view, media overview..) \n emojiPanBg: windowBg; // emoji panel background \n emojiPanCategories: primaryDark; // emoji panel categories background \n emojiPanHeaderFg: #90949a; // emoji panel section header text \n emojiPanHeaderBg: #fffffff2; // emoji panel section header background \n stickerPanDeleteBg: #000000cc; // delete X button background for custom sent stickers in stickers panel (legacy) \n stickerPanDeleteFg: windowFgActive; // delete X button icon for custom sent stickers in stickers panel (legacy) \n stickerPreviewBg: #000000b0; // sticker and GIF preview background (when you press and hold on a sticker) \n historyTextInFg: windowFg; // inbox message text \n historyTextInFgSelected: primaryText; // inbox message selected text or text in a selected message \n historyTextOutFg: #e4ecf2; // outbox message text \n historyTextOutFgSelected: primaryText; // outbox message selected text or text in a selected message \n historyLinkInFg: primaryColor; // inbox message link \n historyLinkInFgSelected: primaryColorDark; // inbox message link in a selected text or message \n historyLinkOutFg: primaryColorDark; // outbox message link \n historyLinkOutFgSelected: primaryColor; // outbox message link in a selected text or message \n historyFileNameInFg: historyTextInFg; // inbox media filename text \n historyFileNameInFgSelected: primaryText; // inbox media filename text in a selected message \n historyFileNameOutFg: historyTextOutFg; // outbox media filename text \n historyFileNameOutFgSelected: primaryText; // outbox media filename text in a selected message \n historyOutIconFg: primaryColorDark; // outbox message tick / double tick icon \n historyOutIconFgSelected: primaryColor; // outbox message tick / double tick icon in a selected message \n historyIconFgInverted: primaryColor; // media message tick / double tick icon (like in sent photo) \n historySendingOutIconFg: primaryColorDark; // outbox sending message icon (clock) \n historySendingInIconFg: primaryColor; // inbox sending message icon (clock) (like in sent messages to yourself or in sent messages to a channel) \n historySendingInvertedIconFg: #ffffffc8; // media sending message icon (clock) (like in sent photo) \n historyCallArrowInFg: primaryColor; // received phone call arrow \n historyCallArrowInFgSelected: primaryText; // received phone call arrow in a selected message \n historyCallArrowMissedInFg: callArrowMissedFg; // missed phone call arrow \n historyCallArrowMissedInFgSelected: primaryText; // missed phone call arrow in a selected message \n historyCallArrowOutFg: primaryText; // outgoing phone call arrow \n historyCallArrowOutFgSelected: primaryText; // outgoing phone call arrow \n historyUnreadBarBg: tertiaryDark; // new unread messages bar background \n historyUnreadBarBorder: shadowFg; // new unread messages bar shadow \n historyUnreadBarFg: primaryColor; // new unread messages bar text \n historyForwardChooseBg: #0000004c; // forwarding messages in a large window size "choose recipient" background \n historyForwardChooseFg: windowFgActive; // forwarding messages in a large window size "choose recipient" text \n historyPeer1NameFg: #aa1400; // red group member name \n historyPeer1NameFgSelected: primaryColorDark; // red group member name in a selected message \n historyPeer1UserpicBg: #aa1400; // red userpic background \n historyPeer2NameFg: #24aa00; // green group member name \n historyPeer2NameFgSelected: primaryColorDark; // green group member name in a selected message \n historyPeer2UserpicBg: #24aa00; // green userpic background \n historyPeer3NameFg: #d1bb00; // yellow group member name \n historyPeer3NameFgSelected: primaryColorDark; // yellow group member name in a selected message \n historyPeer3UserpicBg: #d1bb00; // yellow userpic background \n historyPeer4NameFg: primaryColor; // blue group member name \n historyPeer4NameFgSelected: primaryColorDark; // blue group member name in a selected message \n historyPeer4UserpicBg: primaryColor; // blue userpic background \n historyPeer5NameFg: #7800aa; // purple group member name \n historyPeer5NameFgSelected: primaryColorDark; // purple group member name in a selected message \n historyPeer5UserpicBg: #7800aa; // purple userpic background \n historyPeer6NameFg: #d100b1; // pink group member name \n historyPeer6NameFgSelected: primaryColorDark; // pink group member name in a selected message \n historyPeer6UserpicBg: #d100b1; // pink userpic background \n historyPeer7NameFg: #00a0aa; // sea group member name \n historyPeer7NameFgSelected: primaryColorDark; // sea group member name in a selected message \n historyPeer7UserpicBg: #00a0aa; // sea userpic background \n historyPeer8NameFg: #d15900; // orange group member name \n historyPeer8NameFgSelected: primaryColorDark; // orange group member name in a selected message \n historyPeer8UserpicBg: #d15900; // orange userpic background \n historyPeerUserpicFg: windowFgActive; // default userpic initials \n historyScrollBarBg: primaryColorTrans; // scroll bar current rectangle, the bar itself in the chat view (adjusted) \n historyScrollBarBgOver: primaryColorTrans; // scroll bar current rectangle with mouse over it in the chat view (adjusted) \n historyScrollBg: primaryDark4c; // scroll bar background (adjusted) \n historyScrollBgOver: #6262626b; // scroll bar background with mouse over the scroll bar (adjusted) \n msgInBg: quaternaryDark; // inbox message background \n msgInBgSelected: primaryColor; // inbox selected message background (and background of selected text in those messages) \n msgOutBg: primaryColor; // outbox message background \n msgOutBgSelected: quaternaryDark; // outbox selected message background (and background of selected text in those messages) \n msgSelectOverlay: primaryColorTrans; // overlay which is filling the media parts of selected messages (like in selected photo message) \n msgStickerOverlay: primaryColorTrans; // overlay which is filling the selected sticker message \n msgInServiceFg: windowActiveTextFg; // inbox message information text (like information about a forwarded message original sender) \n msgInServiceFgSelected: primaryText; // inbox selected message information text (like information about a forwarded message original sender) \n msgOutServiceFg: primaryColorDark; // outbox message information text (like information about a forwarded message original sender) \n msgOutServiceFgSelected: primaryText; // outbox message information text (like information about a forwarded message original sender) \n msgInShadow: #748ea200; // inbox message shadow (below the bubble) \n msgInShadowSelected: #538ebb00; // inbox selected message shadow (below the bubble) \n msgOutShadow: #00000000; // outbox message shadow (below the bubble) \n msgOutShadowSelected: #37a78d00; // outbox selected message shadow (below the bubble) \n msgInDateFg: primaryColor; // inbox message time text \n msgInDateFgSelected: primaryColorDark; // inbox selected message time text \n msgOutDateFg: primaryColorDark; // outbox message time text \n msgOutDateFgSelected: primaryColor; // outbox selected message time text \n msgServiceFg: windowFgActive; // service message text (like date dividers or service message about the group title being changed) \n msgServiceBg: #2d2d2dd4; // service message background (like in a service message about group title being changed) (adjusted) \n msgServiceBgSelected: primaryColor; // service message selected text background (like in a service message about group title being changed) (adjusted) \n msgInReplyBarColor: primaryColor; // inbox message reply outline \n msgInReplyBarSelColor: primaryText; // inbox selected message reply outline \n msgOutReplyBarColor: primaryColorDark; // outbox message reply outline \n msgOutReplyBarSelColor: primaryText; // outbox selected message reply outline \n msgImgReplyBarColor: msgServiceFg; // sticker message reply outline \n msgInMonoFg: #b5bd68; // inbox message monospace text (like a message sent with `test` text) \n msgOutMonoFg: quaternaryDark; // outbox message monospace text \n msgInMonoFgSelected: quaternaryDark; // inbox message monospace text in a selected text or message \n msgOutMonoFgSelected: #b6bd68; // outbox message monospace text in a selected text or message \n msgDateImgFg: msgServiceFg; // media message time text (like time text in a sent photo) \n msgDateImgBg: #00000054; // media message time bubble background (like time bubble in a sent photo) or file with thumbnail download icon circle background \n msgDateImgBgOver: #00000074; // media message download icon circle background with mouse over (like file with thumbnail download icon) \n msgDateImgBgSelected: #0055aa4c; // selected media message time bubble background \n msgFileThumbLinkInFg: lightButtonFg; // inbox media file message with thumbnail download / open with button text \n msgFileThumbLinkInFgSelected: lightButtonFgOver; // inbox selected media file message with thumbnail download / open with button text \n msgFileThumbLinkOutFg: primaryColorDark; // outbox media file message with thumbnail download / open with button text \n msgFileThumbLinkOutFgSelected: primaryText; // outbox selected media file message with thumbnail download / open with button text \n msgFileInBg: primaryColor; // inbox audio file download circle background \n msgFileInBgOver: #48cfbd; // inbox audio file download circle background with mouse over \n msgFileInBgSelected: primaryColorDark; // inbox selected audio file download circle background \n msgFileOutBg: primaryColorDark; // outbox audio file download circle background \n msgFileOutBgOver: primaryText; // outbox audio file download circle background with mouse over \n msgFileOutBgSelected: primaryColor; // outbox selected audio file download circle background \n msgFile1Bg: #3fbbab; // blue shared links / files without image square thumbnail \n msgFile1BgDark: #269f8f; // blue shared files without image download circle background \n msgFile1BgOver: #52c4b5; // blue shared files without image download circle background with mouse over \n msgFile1BgSelected: primaryText; // blue shared files without image download circle background if file is selected \n msgFile2Bg: #8ef5e8; // green shared links / shared files without image square thumbnail \n msgFile2BgDark: #7ef7e7; // green shared files without image download circle background \n msgFile2BgOver: #8df7e9; // green shared files without image download circle background with mouse over \n msgFile2BgSelected: primaryText; // green shared files without image download circle background if file is selected \n msgFile3Bg: #e47272; // red shared links / shared files without image square thumbnail \n msgFile3BgDark: #cd5b5e; // red shared files without image download circle background \n msgFile3BgOver: #c35154; // red shared files without image download circle background with mouse over \n msgFile3BgSelected: #9f6a82; // red shared files without image download circle background if file is selected \n msgFile4Bg: #efc274; // yellow shared links / shared files without image square thumbnail \n msgFile4BgDark: #e6a561; // yellow shared files without image download circle background \n msgFile4BgOver: #dc9c5a; // yellow shared files without image download circle background with mouse over \n msgFile4BgSelected: #b19d84; // yellow shared files without image download circle background if file is selected \n historyFileInIconFg: #33393f; // inbox file without thumbnail (like audio file) download arrow icon \n historyFileInIconFgSelected: primaryColor; // inbox selected file without thumbnail (like audio file) download arrow icon \n historyFileInRadialFg: #33393f; // inbox file without thumbnail (like audio file) radial download animation line \n historyFileInRadialFgSelected: historyFileInIconFgSelected; // inbox selected file without thumbnail (like audio file) radial download animation line \n historyFileOutIconFg: primaryColor; // outbox file without thumbnail (like audio file) download arrow icon \n historyFileOutIconFgSelected: quaternaryDark; // outbox selected file without thumbnail (like audio file) download arrow icon \n historyFileOutRadialFg: historyFileOutIconFg; // outbox file without thumbnail (like audio file) radial download animation line \n historyFileOutRadialFgSelected: primaryColor; // outbox selected file without thumbnail (like audio file) radial download animation line \n historyFileThumbIconFg: #efefef; // file with thumbnail (or photo / video) download arrow icon \n historyFileThumbIconFgSelected: primaryText; // selected file with thumbnail (or photo / video) download arrow icon \n historyFileThumbRadialFg: historyFileThumbIconFg; // file with thumbnail (or photo / video) radial download animation line \n historyFileThumbRadialFgSelected: primaryText; // selected file with thumbnail (or photo / video) radial download animation line \n historyVideoMessageProgressFg: historyFileThumbIconFg; // radial playback progress in round video messages \n msgWaveformInActive: primaryText; // inbox voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformInActiveSelected: primaryText; // inbox selected voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformInInactive: primaryColor; // inbox voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgWaveformInInactiveSelected: primaryColorDark; // inbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgWaveformOutActive: primaryText; // outbox voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformOutActiveSelected: primaryText; // outbox selected voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformOutInactive: primaryColorDark; // outbox voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgWaveformOutInactiveSelected: primaryColor; // outbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgBotKbOverBgAdd: #ffffff14; // this is painted over a bot inline keyboard button (which has msgServiceBg background) when mouse is over that button \n msgBotKbIconFg: msgServiceFg; // bot inline keyboard button icon in the top-right corner (like in @vote bot when a poll is ready to be shared) \n msgBotKbRippleBg: primaryColor; // bot inline keyboard button ripple effect \n mediaInFg: primaryColor; // inbox media message status text (like in file that is being downloaded) \n mediaInFgSelected: msgInDateFgSelected; // inbox selected media message status text (like in file that is being downloaded) \n mediaOutFg: msgOutDateFg; // outbox media message status text (like in file that is being downloaded) \n mediaOutFgSelected: msgOutDateFgSelected; // outbox selected media message status text (like in file that is being downloaded) \n youtubePlayIconBg: #e83131c8; // youtube play icon background (when a link to a youtube video with a webpage preview is sent) \n youtubePlayIconFg: windowFgActive; // youtube play icon arrow (when a link to a youtube video with a webpage preview is sent) \n videoPlayIconBg: #0000007f; // other video play icon background (like when a link to a vimeo video with a webpage preview is sent) \n videoPlayIconFg: primaryText; // other video play icon arrow (like when a link to a vimeo video with a webpage preview is sent) \n toastBg: #000000b2; // toast notification background (like when you click on your t.me link when editing your username) \n toastFg: windowFgActive; // toast notification text (like when you click on your t.me link when editing your username) \n reportSpamBg: quaternaryDark; // report spam panel background (like a non contact user writes your for the first time) \n reportSpamFg: primaryColor; // report spam panel text (when you send a report from that panel) \n historyToDownBg: tertiaryDark; // arrow button background (to scroll to the end of the viewed chat) \n historyToDownBgOver: quinaryDark; // arrow button background with mouse over \n historyToDownBgRipple: primaryColor; // arrow button ripple effect \n historyToDownFg: primaryText; // arrow button icon \n historyToDownFgOver: primaryText; // arrow button icon with mouse over \n historyToDownShadow: #00000040; // arrow button shadow \n historyComposeAreaBg: #00000000; // history compose area background (message write area / reply information / forwarding information) \n historyComposeAreaFg: historyTextInFg; // history compose area text \n historyComposeAreaFgService: msgInDateFg; // history compose area text when replying to a media message \n historyComposeIconFg: menuIconFg; // history compose area icon (like emoji, attach, bot command..) \n historyComposeIconFgOver: menuIconFgOver; // history compose area icon with mouse over \n historySendIconFg: windowBgActive; // send message icon \n historySendIconFgOver: windowBgActive; // send message icon with mouse over \n historyPinnedBg: quaternaryDark; // pinned message area background \n historyReplyBg: primaryDark80; // reply / forward / edit message area background \n historyReplyIconFg: windowBgActive; // reply / forward / edit message left icon \n historyReplyCancelFg: cancelIconFg; // reply / forward / edit message cancel button \n historyReplyCancelFgOver: cancelIconFgOver; // reply / forward / edit message cancel button with mouse over \n historyComposeButtonBg: quaternaryDark; // unblock / join channel / mute channel button background \n historyComposeButtonBgOver: quinaryDark; // unblock / join channel / mute channel button background with mouse over \n historyComposeButtonBgRipple: primaryColor; // unblock / join channel / mute channel button ripple effect \n overviewCheckBg: #00000040; // shared files / links checkbox background for not selected rows when some rows are selected \n overviewCheckFg: primaryText; // shared files / links checkbox icon for not selected rows when some rows are selected \n overviewCheckFgActive: primaryText; // shared files / links checkbox icon for selected rows \n overviewPhotoSelectOverlay: #40ace333; // shared photos / videos / links fill for selected rows \n profileStatusFgOver: #9c9c9c; // group members list in group profile user last seen text with mouse over \n profileVerifiedCheckBg: windowBgActive; // profile verified check icon background \n profileVerifiedCheckFg: windowFgActive; // profile verified check icon tick \n profileAdminStartFg: windowBgActive; // group members list admin star icon \n notificationsBoxMonitorFg: windowFg; // custom notifications settings box monitor color \n notificationsBoxScreenBg: dialogsBgActive; // #6389a8; // custom notifications settings box monitor screen background \n notificationSampleUserpicFg: windowBgActive; // custom notifications settings box small sample userpic placeholder \n notificationSampleCloseFg: #d7d7d7; // custom notifications settings box small sample close button placeholder \n notificationSampleTextFg: #d7d7d7; // custom notifications settings box small sample text placeholder \n notificationSampleNameFg: #939393; // custom notifications settings box small sample name placeholder \n changePhoneSimcardFrom: notificationSampleTextFg; // change phone number box left simcard icon \n changePhoneSimcardTo: notificationSampleNameFg; // change phone number box right simcard and plane icons \n mainMenuBg: windowBg; // main menu background \n mainMenuCoverBg: primaryColor; // main menu top cover background \n mainMenuCoverFg: windowFgActive; // main menu top cover text \n mainMenuCloudFg: activeButtonFg; //  \n mainMenuCloudBg: primaryColorDark; //  \n mediaPlayerBg: windowBg; // audio file player background \n mediaPlayerActiveFg: windowBgActive; // audio file player playback progress already played part \n mediaPlayerInactiveFg: sliderBgInactive; // audio file player playback progress upcoming (not played yet) part with mouse over \n mediaPlayerDisabledFg: #9dd1ef; // audio file player loading progress (when you\'re playing an audio file and switch to the previous one which is not loaded yet) \n mediaviewFileBg: windowBg; // file rectangle background (when you view a png file in Media Viewer and go to a previous, not loaded yet, file) \n mediaviewFileNameFg: windowFg; // file name in file rectangle \n mediaviewFileSizeFg: windowSubTextFg; // file size text in file rectangle \n mediaviewFileRedCornerFg: #d55959; // red file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .pdf) \n mediaviewFileYellowCornerFg: #e8a659; // yellow file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .zip) \n mediaviewFileGreenCornerFg: #49a957; // green file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .exe) \n mediaviewFileBlueCornerFg: #599dcf; // blue file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .dmg) \n mediaviewFileExtFg: activeButtonFg; // file extension text in file thumbnail placeholder in file rectangle \n mediaviewMenuBg: #383838; // context menu in Media Viewer background \n mediaviewMenuBgOver: #505050; // context menu item background with mouse over \n mediaviewMenuBgRipple: #676767; // context menu item ripple effect \n mediaviewMenuFg: windowFgActive; // context menu item text \n mediaviewBg: #222222eb; // Media Viewer background \n mediaviewVideoBg: imageBg; // Media Viewer background when viewing a video in full screen \n mediaviewControlBg: #0000003c; // controls background (like next photo / previous photo) \n mediaviewControlFg: windowFgActive; // controls icon (like next photo / previous photo) \n mediaviewCaptionBg: #11111180; // caption text background (when viewing photo with caption) \n mediaviewCaptionFg: mediaviewControlFg; // caption text \n mediaviewTextLinkFg: #66f7e4; // caption text link \n mediaviewSaveMsgBg: toastBg; // save to file toast message background in Media Viewer \n mediaviewSaveMsgFg: toastFg; // save to file toast message text \n mediaviewPlaybackActive: #c7c7c7; // video playback progress already played part \n mediaviewPlaybackInactive: #252525; // video playback progress upcoming (not played yet) part \n mediaviewPlaybackActiveOver: primaryText; // video playback progress already played part with mouse over \n mediaviewPlaybackInactiveOver: #474747; // video playback progress upcoming (not played yet) part with mouse over \n mediaviewPlaybackProgressFg: #ffffffc7; // video playback progress text \n mediaviewPlaybackIconFg: mediaviewPlaybackActive; // video playback controls icon \n mediaviewPlaybackIconFgOver: mediaviewPlaybackActiveOver; // video playback controls icon with mouse over \n mediaviewTransparentBg: primaryText; // transparent filling part (when viewing a transparent .png file in Media Viewer) \n mediaviewTransparentFg: #cccccc; // another transparent filling part \n notificationBg: windowBg; // custom notification window background \n callBg: #26282cf2; // phone call popup background \n callNameFg: primaryText; // phone call popup name text \n callFingerprintBg: #00000066; // phone call popup emoji fingerprint background \n callStatusFg: #aaabac; // phone call popup status text \n callIconFg: primaryText; // phone call popup answer, hangup and mute mic icon \n callAnswerBg: primaryColor; // phone call popup answer button background \n callAnswerRipple: primaryColorDark; // phone call popup answer button ripple effect \n callAnswerBgOuter: #3febc926; // phone call popup answer button outer ripple effect \n callHangupBg: #aa1400; // phone call popup hangup button background \n callHangupRipple: #550a00; // phone call popup hangup button ripple effect \n callCancelBg: primaryText; // phone call popup line busy cancel button background \n callCancelFg: #777777; // phone call popup line busy cancel button icon \n callCancelRipple: #f1f1f1; // phone call popup line busy cancel button ripple effect \n callMuteRipple: primaryColor; // phone call popup mute mic ripple effect \n callBarBg: dialogsBgActive; // active phone call bar background \n callBarMuteRipple: dialogsRippleBgActive; // active phone call bar mute and hangup button ripple effect \n callBarBgMuted: quaternaryDark; // phone call bar with muted mic background \n callBarUnmuteRipple: primaryColor; // phone call bar with muted mic mute and hangup button ripple effect \n callBarFg: dialogsNameFgActive; // phone call bar text and icons \n importantTooltipBg: toastBg; //  \n importantTooltipFg: toastFg; //  \n importantTooltipFgLink: #65fce8; //  \n filterInputActiveBg: senaryDark; \n botKbBg: secondaryDark; \n botKbDownBg: primaryColor; \n emojiIconFg: #ededed; \n emojiIconFgActive: primaryColor; \n overviewCheckBorder: #e4eaef; \n profileOtherAdminStarFg: primaryColor; \n profileOtherAdminStarFgOver: primaryColor; \n  \n';
	//document.write(Palette);
	//Let's now zip the file!
	var zip = new JSZip();
	zip.file("colors.tdesktop-theme", Palette);
	if (background) {zip.file("background.png", background, {
		base64: true
	});}
	zip.generateAsync({
		type: "blob"
	}).then(function(blob) {
		saveAs(blob, 'Night_'+window.ThemeName+'-'+window.ColorName + ".tdesktop-theme");
	});
	}catch(err){
		console.log(err);
	}
}

function makeThemeAndroid(){
	try{
		if (document.getElementById("theme-Light").checked) {
		var primaryBG = 'ffe2e2e2';
		var primaryBGTrans = '66e2e2e2';
		var primaryBG2 = 'ffdedede';
		var primaryBG3 = 'ffd9d9d9';
		var primaryBG4 = 'ffd2d2d2';
		var primaryText = 'ff1d1d1d';
		var primaryTextBubble = primaryBG;
		window.ThemeName = 'Dawn';
	} else if (document.getElementById("theme-Amoled").checked) {
		var primaryBG = 'ff000000';
		    primaryBGTrans = '66000000',
		    primaryBG2 = 'ff000000',
		    primaryBG3 = 'ff000000',
		    primaryBG4 = 'ff000000',
		    primaryText = 'fffbfbfb';
		    primaryTextBubble = primaryText;
		window.ThemeName = 'Midnight';
	} else if (document.getElementById("theme-Dark").checked) {
		var primaryBG = 'ff1d1d1d',
		    primaryBGTrans = '661d1d1d',
		    primaryBG2 = 'ff212121',
		    primaryBG3 = 'ff262626',
		    primaryBG4 = 'ff2d2d2d';
		var primaryText = 'fffbfbfb';
		var primaryTextBubble = primaryText;
		window.ThemeName = 'Dark';
	} else {
		var primaryBG = window.BGColor.substr(1);
		var primaryBGTrans = '66'+primaryBG;
		var primaryBG2 = ColorLuminance(primaryBG, 0.15).substr(1);
		var primaryBG3 = 'ff'+ColorLuminance(primaryBG2, 0.15).substr(1);
		var primaryBG4 = 'ff'+ColorLuminance(primaryBG3, 0.15).substr(1);
		var primaryText = 'ff'+invertColor(primaryBG).substr(1);
		var primaryBG = 'ff'+primaryBG;
		var primaryBG2 = 'ff'+primaryBG2;
		var primaryTextBubble = primaryBG;
		window.ThemeName = 'Custom('+primaryBG+')';
	}
	
	if (document.getElementById('theme-nightColorScheme').checked || document.getElementById('theme-extendedColorScheme').checked) {
		if (document.getElementById('theme-nightColorScheme').checked){var primaryColor = getValueColor(document.getElementById('nightColorScheme-select'), nightColorScheme, 1).substr(1);}
		if (document.getElementById('theme-extendedColorScheme').checked){var primaryColor = getValueColor(document.getElementById('extendedColorScheme-select'), extendedColorScheme, 1).substr(1);}
		primaryColorDark = 'ff'+ColorLuminance(primaryColor, -0.5).substr(1);
		primaryColor = 'ff'+primaryColor;
	} else {
		var primaryColor = window.customColor.substr(1);
		var primaryColorDark = 'ff'+ColorLuminance(primaryColor, -0.5).substr(1);
		window.ColorName = 'Custom(#'+primaryColor+')';
		var primaryColor = 'ff'+primaryColor;
		console.log(primaryColor);
		console.log(primaryColorDark);
	}
		if(document.getElementById("theme-tandroid").checked){var Palette='avatar_backgroundViolet=-8912726\nprofile_adminIcon=$primaryColor$\navatar_backgroundBlue=-16755542\nchat_replyPanelClose=$primaryColor$\ndialogTextGray=$primaryColor$\ndialogTextBlue2=$primaryColor$\nactionBarActionModeDefaultSelector=$primaryColorDark$\nchats_menuItemIcon=$primaryColor$\nchat_inTimeText=$primaryColor$\nchat_inLoader=$primaryColor$\nwindowBackgroundGray=$primaryBG$\nwindowBackgroundWhiteGreenText2=$primaryColor$\nchat_emojiPanelBackspace=$primaryColor$\nchat_outFileInfoSelectedText=$primaryColor$\nchat_inBubble=$primaryBG4$\nchat_outLoaderSelected=$primaryColor$\nchat_emojiPanelIcon=$primaryColor$\nchat_selectedBackground=$primaryBG3$\nchats_pinnedIcon=$primaryColor$\nchat_muteIcon=$primaryColorDark$\nchat_addContact=$primaryColor$\nchat_outMenu=$primaryColorDark$\navatar_backgroundRed=-5630976\nactionBarActionModeDefault=$primaryColor$\nchat_emojiPanelShadowLine=$primaryColor$\navatar_nameInMessageBlue=-16755542\navatar_backgroundGreen=-14374400\ndialogBackground=$primaryBG3$\ndialogCheckboxSquareBackground=$primaryColor$\nchat_outForwardedNameText=$primaryColorDark$\nswitchThumb=$primaryBG3$\nchats_tabletSelectedOverlay=0\ndivider=0\navatar_actionBarSelectorBlue=$primaryColor$\nchats_actionMessage=$primaryColor$\nchat_inLoaderSelected=$primaryColorDark$\nchat_stickerReplyLine=$primaryColor$\ninappPlayerBackground=$primaryColor$\navatar_nameInMessageRed=-5630976\nchat_topPanelLine=$primaryColorDark$\nchat_outFileInfoText=$primaryColorDark$\nchat_outBubbleShadow=0\nchat_inMenuSelected=$primaryColorDark$\nactionBarDefaultSearchPlaceholder=$primaryColorDark$\nprofile_actionBackground=$primaryBG3$\nchat_outSentClockSelected=$primaryColor$\navatar_nameInMessageGreen=-14374400\nchat_outAudioSeekbarFill=$primaryColorDark$\nchat_messagePanelVoiceShadow=16514043\nchat_inReplyNameText=$primaryColor$\navatar_backgroundCyan=-16736086\nchats_nameIcon=$primaryColor$\ngraySection=$primaryBG$\nchat_messagePanelIcons=$primaryColor$\nchat_emojiPanelIconSelector=$primaryColor$\nchat_inFileInfoSelectedText=$primaryColorDark$\nchat_inAudioPerfomerText=$primaryColor$\nchat_messageLinkIn=$primaryColor$\nchats_attachMessage=$primaryColor$\nchats_unreadCounter=$primaryColor$\nactionBarDefaultSubmenuBackground=$primaryBG3$\ncheckbox=$primaryColor$\nchat_outSentCheckSelected=$primaryColor$\nchat_outTimeSelectedText=$primaryColorDark$\nchats_secretIcon=$primaryColor$\nchat_messagePanelSend=$primaryColor$\nchat_messagePanelshadow=0\nchats_pinnedOverlay=0\ndialogIcon=$primaryColor$\nchat_outAudioPerfomerText=$primaryColorDark$\nwindowBackgroundGrayShadow=0\nwindowBackgroundWhiteBlueHeader=$primaryColor$\nactionBarDefaultSelector=$primaryColorDark$\nreturnToCallBackground=$primaryColorDark$\nchat_messagePanelBackground=$primaryBGTrans$\nchat_inReplyLine=$primaryColor$\nchat_searchPanelIcons=$primaryColor$\nswitchThumbChecked=$primaryColor$\navatar_backgroundOrange=-3057408\nchat_inReplyMessageText=$primaryColor$\nchat_inAudioDurationSelectedText=$primaryColorDark$\ndialogLinkSelection=$primaryColor$\nactionBarDefault=$primaryColor$\ndialogInputFieldActivated=$primaryColor$\nchat_outSentClock=$primaryColorDark$\nchat_goDownButton=$primaryBG3$\nchats_verifiedBackground=$primaryColor$\nprofile_actionPressedBackground=$primaryColor$\nchat_outContactPhoneText=$primaryColorDark$\nchat_outAudioDurationText=$primaryColorDark$\nwindowBackgroundWhiteLinkText=$primaryColor$\nwindowBackgroundWhiteLinkSelection=$primaryColor$\nchat_outSiteNameText=$primaryColorDark$\nchats_actionBackground=$primaryColor$\nchats_date=$primaryColor$\nchat_inBubbleSelected=$primaryColor$\nprogressCircle=$primaryColor$\nchat_outBubbleSelected=$primaryColorDark$\nstickers_menu=$primaryColor$\nchats_unreadCounterMuted=$primaryColorDark$\navatar_nameInMessagePink=-3080015\nchat_inSiteNameText=$primaryColor$\nchat_topPanelMessage=$primaryColorDark$\nchat_topPanelBackground=$primaryColor$\nchat_inReplyMediaMessageSelectedText=$primaryColorDark$\nchat_outAudioDurationSelectedText=$primaryColor$\nkey_chat_messagePanelVoiceLockShadow=16514043\nchats_actionPressedBackground=$primaryColorDark$\nswitchTrackChecked=$primaryColorDark$\nchat_serviceBackground=1814439462\nwindowBackgroundWhiteGrayText2=$primaryColor$\nsharedMedia_startStopLoadIcon=$primaryColor$\nprofile_actionIcon=$primaryColor$\ndialogTextBlue3=$primaryColor$\nchat_emojiPanelBackground=$primaryBG2$\nactionBarDefaultTitle=$primaryColorDark$\nchat_inVoiceSeekbarFill=$primaryColor$\nchat_inPreviewLine=$primaryColor$\ndialogTextBlue=$primaryColor$\navatar_backgroundActionBarBlue=$primaryColor$\nchat_inViaBotNameText=$primaryColor$\navatar_nameInMessageOrange=-3057408\nwindowBackgroundWhiteGrayText4=$primaryColor$\nchat_outFileBackground=$primaryColor$\ndialogTextLink=$primaryColor$\nchat_fieldOverlayText=$primaryColor$\navatar_nameInMessageViolet=-8912726\nchat_inForwardedNameText=$primaryColor$\nchats_nameMessage=$primaryColor$\nchat_outBubble=$primaryColor$\nwindowBackgroundWhite=$primaryBG$\nchats_menuBackground=$primaryBG2$\nchat_messagePanelHint=16514043\nchat_replyPanelLine=0\nchat_inReplyMediaMessageText=$primaryColor$\ncalls_callReceivedGreenIcon=$primaryColor$\nchat_outReplyMediaMessageText=$primaryColorDark$\nchat_outLoader=$primaryColorDark$\nchat_outReplyNameText=$primaryColorDark$\nchat_inFileInfoText=$primaryColor$\nwindowBackgroundWhiteGrayIcon=$primaryColor$\nchat_inContactPhoneText=$primaryColor$\nchat_sentError=-5630976\navatar_backgroundInProfileBlue=$primaryColor$\nchat_outVoiceSeekbarFill=$primaryColorDark$\nchat_goDownButtonShadow=0\nchat_outPreviewLine=$primaryColorDark$\nchats_sentCheck=$primaryColor$\nchat_replyPanelIcons=$primaryColor$\nchat_inMenu=$primaryColor$\navatar_actionBarIconBlue=$primaryColorDark$\nchats_sentClock=$primaryColor$\ndialogButton=$primaryColor$\ndialogTextBlue4=$primaryColor$\ninappPlayerClose=$primaryColorDark$\nchat_outReplyMessageText=$primaryColorDark$\nchat_inAudioDurationText=$primaryColor$\nlistSelectorSDK21=$primaryColor$\nchat_goDownButtonIcon=$primaryColor$\nchats_menuCloudBackgroundCats=$primaryBG$\nactionBarDefaultIcon=$primaryColorDark$\nchat_wallpaper=$primaryBG$\nchat_editDoneIcon=$primaryColor$\nchat_emojiPanelStickerPackSelector=$primaryColor$\nchat_replyPanelName=$primaryColor$\nfeaturedStickers_addedIcon=$primaryColor$\navatar_backgroundPink=-3080015\nchat_outViaBotNameText=$primaryColorDark$\nwindowBackgroundWhiteValueText=$primaryColor$\nactionBarActionModeDefaultIcon=$primaryColorDark$\nchats_message=$primaryColor$\navatar_subtitleInProfileBlue=$primaryColorDark$\nemptyListPlaceholder=$primaryColor$\nchat_inAudioSeekbarFill=$primaryColor$\nwindowBackgroundWhiteBlueText=$primaryColor$\nchat_goDownButtonCounterBackground=$primaryColor$\nchat_outReplyMediaMessageSelectedText=$primaryColor$\nchat_topPanelClose=$primaryColorDark$\nchat_outSentCheck=$primaryColorDark$\nchat_outMenuSelected=$primaryColor$\nchat_recordedVoiceDot=-5630976\nchat_outReplyLine=$primaryColorDark$\ninappPlayerPlayPause=$primaryColorDark$\ndialogBackgroundGray=$primaryBG3$\ncalls_callReceivedRedIcon=-5630976\ndialogButtonSelector=$primaryColorDark$\navatar_nameInMessageCyan=-16736086\nchat_outTimeText=$primaryColorDark$\nchat_inTimeSelectedText=$primaryColor$\nswitchTrack=$primaryBG2$\nchats_menuCloud=$primaryText$\nchat_emojiPanelIconSelected=$primaryText$\nchat_stickerReplyMessageText=$primaryText$\nchat_goDownButtonCounter=$primaryText$\nchats_menuItemText=$primaryText$\ndialogTextGray4=$primaryText$\ninappPlayerPerformer=$primaryText$\ndialogTextGray3=$primaryText$\nchat_replyPanelMessage=$primaryText$\nchat_emojiPanelTrendingTitle=$primaryText$\nchat_emojiPanelEmptyText=$primaryText$\nfiles_iconText=$primaryText$\nchats_secretName=$primaryText$\nactionBarDefaultSubtitle=$primaryText$\ndialogTextBlack=$primaryText$\ndialogTextGray2=$primaryText$\nchats_name=$primaryText$\nchat_linkSelectBackground=$primaryText$\nchats_menuPhone=$primaryText$\nactionBarDefaultSubmenuItem=$primaryText$\nchat_searchPanelText=$primaryText$\nchat_topPanelTitle=$primaryText$\ninappPlayerTitle=$primaryText$\nchats_muteIcon=$primaryText$\nwindowBackgroundWhiteBlackText=$primaryText$\nchat_messageTextIn=$primaryText$\nchat_messageTextOut=$primaryTextBubble$\nchat_messageLinkOut=$primaryTextBubble$\nchat_messagePanelText=$primaryText$\nchat_inFileNameText=$primaryText$\nchat_inVoiceSeekbar=$primaryText$\nchat_inAudioTitleText=$primaryText$\nchat_inVoiceSeekbarSelected=$primaryText$\nchat_inAudioSeekbar=$primaryText$\nchat_inContactNameText=$primaryText$\nchat_outVoiceSeekbarSelected=$primaryTextBubble$\nchat_outFileNameText=$primaryTextBubble$\nchat_outAudioTitleText=$primaryTextBubble$\nchat_outVoiceSeekbar=$primaryTextBubble$\nchat_outAudioSeekbar=$primaryTextBubble$\nchat_outContactNameText=$primaryTextBubble$\navatar_subtitleInProfilePink=-9961384\navatar_actionBarSelectorRed=-11204096\navatar_actionBarSelectorBlue=-16766123\navatar_actionBarIconViolet=-12844971\navatar_subtitleInProfileCyan=-16756651\navatar_backgroundActionBarViolet=-8912726\navatar_subtitleInProfileRed=-11204096\navatar_actionBarIconOrange=-11204096\navatar_actionBarIconPink=-9961384\navatar_actionBarSelectorGreen=-15575808\navatar_backgroundActionBarGreen=-14374400\navatar_backgroundActionBarBlue=-16755542\navatar_actionBarSelectorCyan=-16756651\navatar_backgroundActionBarPink=-3080015\navatar_subtitleInProfileViolet=-12844971\navatar_actionBarIconCyan=-16756651\navatar_actionBarSelectorViolet=-12844971\navatar_actionBarIconBlue=-16766123\navatar_actionBarSelectorPink=-9961384\navatar_actionBarIconRed=-11204096\navatar_subtitleInProfileGreen=-15575808\navatar_backgroundActionBarRed=-5630976\navatar_backgroundActionBarOrange=-3057408\navatar_actionBarSelectorOrange=-9950208\navatar_subtitleInProfileBlue=-16766123\navatar_actionBarIconGreen=-15575808\navatar_backgroundActionBarCyan=-16736086\navatar_subtitleInProfileOrange=-11204096\n';
	} else if (document.getElementById("theme-plus").checked) {var Palette = '<?xml version=\'1.0\' encoding=\'utf-8\' standalone=\'yes\' ?>\n<map>\n    <int name="chatsNameColor" value="$primaryText$" />\n    <int name="chatStatusColor" value="$primaryText$" />\n    <int name="chatsFavIndicatorColor" value="$primaryBG$" />\n    <int name="chatForwardColor" value="$primaryColor$" />\n    <int name="chatAttachTextColor" value="$primaryText$" />\n    <int name="contactsStatusColor" value="$primaryColor$" />\n    <int name="prefTitleColor" value="$primaryText$" />\n    <boolean name="usePlusTheme" value="true" />\n    <int name="chatLTimeColor" value="$primaryColor$" />\n    <int name="drawerOptionColor" value="$primaryText$" />\n    <string name="version">4.2.1.1</string>\n    <int name="contactsOnlineColor" value="$primaryColor$" />\n    <int name="chatEmojiViewTabIconColor" value="$primaryColor$" />\n    <int name="chatsMemberColor" value="$primaryColor$" />\n    <int name="chatsChecksColor" value="$primaryColor$" />\n    <int name="chatsTimeColor" value="$primaryColor$" />\n    <int name="chatsHeaderTitleColor" value="$primaryColorDark$" />\n    <int name="chatsRowColor" value="$primaryBG$" />\n    <int name="profileCreatorStarColor" value="$primaryText$" />\n    <int name="chatEditTextIconsColor" value="$primaryColor$" />\n    <int name="chatsMessageColor" value="$primaryColor$" />\n    <int name="chatRBubbleColor" value="$primaryColor$" />\n    <int name="chatsDividerColor" value="$primaryBG$" />\n    <int name="profileIconsColor" value="$primaryColor$" />\n    <int name="chatForwardRColor" value="$primaryColorDark$" />\n    <boolean name="drawerHeaderBGCheck" value="true" />\n    <int name="profileRowColor" value="$primaryBG$" />\n    <int name="prefHeaderStatusColor" value="$primaryColor$" />\n    <boolean name="chatsTabTitlesMode" value="false" />\n    <int name="profileAdminStarColor" value="$primaryColor$" />\n    <int name="chatMemberColor" value="$primaryColor$" />\n    <int name="chatSelectedMsgBGColor" value="-14606047" />\n    <int name="chatChecksColor" value="$primaryColorDark$" />\n    <int name="chatRTimeColor" value="$primaryColorDark$" />\n    <int name="chatsHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="chatAttachBGColor" value="$primaryBG$" />\n    <int name="contactsNameColor" value="$primaryText$" />\n    <int name="chatsHeaderTitle" value="4" />\n    <int name="prefShadowColor" value="$primaryBG$" />\n    <int name="prefDividerColor" value="$primaryBG$" />\n    <int name="chatsTabsTextSize" value="8" />\n    <int name="contactsRowColor" value="$primaryBG$" />\n    <int name="chatRTextColor" value="$primaryText$" />\n    <int name="chatHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="dialogColor" value="$primaryColor$" />\n    <int name="chatsGroupIconColor" value="$primaryColor$" />\n    <int name="chatsHeaderColor" value="$primaryColor$" />\n    <int name="chatsFloatingPencilColor" value="$primaryText$" />\n    <int name="drawerVersionColor" value="$primaryText$" />\n    <int name="profileHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="chatRLinkColor" value="$primaryColorDark$" />\n    <int name="drawerIconColor" value="$primaryColor$" />\n    <int name="chatsCountBGColor" value="$primaryColor$" />\n    <int name="chatNameColor" value="$primaryColorDark$" />\n    <int name="chatEmojiViewTabColor" value="$primaryText$" />\n    <int name="themeColor" value="$primaryColor$" />\n    <int name="prefHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="drawerListColor" value="$primaryBG$" />\n    <int name="prefBGColor" value="$primaryBG$" />\n    <int name="chatsTypingColor" value="$primaryColor$" />\n    <int name="contactsHeaderIconsColor" value="$primaryColorDark$" />\n    <boolean name="drawerHideBGShadowCheck" value="true" />\n    <int name="contactsIconsColor" value="$primaryColor$" />\n    <int name="drawerPhoneColor" value="$primaryText$" />\n    <int name="chatHeaderColor" value="$primaryColor$" />\n    <int name="chatLBubbleColor" value="$primaryBG4$" />\n    <int name="chatsCountSilentBGColor" value="$primaryColorDark$" />\n    <int name="chatsMuteColor" value="$primaryText$" />\n    <int name="chatEditTextBGColor" value="$primaryBGTrans$" />\n    <int name="chatsHighlightSearchColor" value="$primaryColor$" />\n    <int name="chatEmojiViewBGColor" value="$primaryBG$" />\n    <int name="profileTitleColor" value="$primaryText$" />\n    <int name="contactsHeaderColor" value="$primaryColor$" />\n    <string name="date">1506185073208</string>\n    <int name="chatSolidBGColor" value="$primaryBG$" />\n    <int name="chatsMediaColor" value="$primaryColor$" />\n    <int name="chatLTextColor" value="$primaryText$" />\n    <int name="profileOnlineColor" value="$primaryColor$" />\n    <int name="chatsFloatingBGColor" value="$primaryColor$" />\n    <boolean name="chatSolidBGColorCheck" value="true" />\n    <int name="profileStatusColor" value="$primaryColorDark$" />\n    <int name="chatDateBubbleColor" value="2015437089" />\n    <int name="chatSendIconColor" value="$primaryColor$" />\n    <int name="chatOnlineColor" value="$primaryText$" />\n    <boolean name="chatShowContactAvatar" value="false" />\n    <int name="prefHeaderTitleColor" value="$primaryColorDark$" />\n    <int name="drawerListDividerColor" value="$primaryBG$" />\n    <int name="chatsPinnedMsgBGColor" value="$primaryBG$" />\n    <int name="chatTypingColor" value="$primaryText$" />\n    <int name="prefSummaryColor" value="$primaryText$" />\n    <int name="prefHeaderColor" value="$primaryColor$" />\n    <int name="chatEditTextColor" value="$primaryText$" />\n    <string name="themeName">Night Theme Generator https://nightapps.github.io/td-gen</string>\n    <int name="contactsHeaderTitleColor" value="$primaryColorDark$" />\n    <int name="profileSummaryColor" value="$primaryColor$" />\n</map>\n';}
		var primaryColor = convertToDec(primaryColor);
		var primaryColorDark = convertToDec(primaryColorDark);
		var primaryBG = convertToDec(primaryBG);
		var primaryBGTrans = convertToDec(primaryBGTrans);
		var primaryBG2 = convertToDec(primaryBG2);
		var primaryBG3 = convertToDec(primaryBG3);
		var primaryBG4 = convertToDec(primaryBG4);
		var primaryText = convertToDec(primaryText);
		var primaryTextBubble = convertToDec(primaryTextBubble);
		var Palette = Palette.replace(/\$primaryColor\$/g, primaryColor);
		var Palette = Palette.replace(/\$primaryColorDark\$/g, primaryColorDark);
		var Palette = Palette.replace(/\$primaryBG\$/g, primaryBG);
		var Palette = Palette.replace(/\$primaryBG2\$/g, primaryBG2);
		var Palette = Palette.replace(/\$primaryBG3\$/g, primaryBG3);
		var Palette = Palette.replace(/\$primaryBG4\$/g, primaryBG4);
		var Palette = Palette.replace(/\$primaryBGTrans\$/g, primaryBGTrans);
		var Palette = Palette.replace(/\$primaryText\$/g, primaryText);
		var Palette = Palette.replace(/\$primaryTextBubble\$/g, primaryTextBubble);
		if (document.getElementById("theme-tandroid").checked){var filetype = ".attheme"}else if (document.getElementById("theme-plus").checked){var filetype = ".xml"}
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(Palette));
		element.setAttribute('download', 'Night_'+window.ThemeName+' - '+window.ColorName + filetype);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}catch(err){console.log(err);}
}