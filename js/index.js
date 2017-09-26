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
		var primaryBG = '#ededed';
		var primaryBGTrans = '#edededcc';
		var primaryBG2 = '#fafafa';
		var primaryBG3 = '#ffffff';
		var primaryText = '#1d1d1d';
		var primaryText2 = '#212121';
		var primaryText3 = '#000000';
		var background = backgrounds.light;
		window.ThemeName = 'Dawn';
	} else if (document.getElementById("theme-Amoled").checked) {
		var primaryBG = '#000000';
		var primaryBGTrans = '#000000cc';
		var primaryBG2 = '#000000';
		var primaryBG3 = '#000000';
		var primaryText = '#ededed';
		var primaryText2 = '#fafafa';
		var primaryText3 = '#ffffff';
		var background = backgrounds.black;
		window.ThemeName = 'Midnight';
	} else if (document.getElementById("theme-Dark").checked) {
		var primaryBG = '#1d1d1d';
		var primaryBGTrans = '#1d1d1dcc';
		var primaryBG2 = '#212121';
		var primaryBG3 = '#262626';
		var primaryText = '#ededed';
		var primaryText2 = '#fafafa';
		var primaryText3 = '#ffffff';
		var background = backgrounds.dark;
		window.ThemeName = 'Dark';
	} else {
		var primaryBG = window.BGColor;
		var primaryBGTrans = primaryBG + 'cc';
		var primaryBG2 = ColorLuminance(primaryBG, 0.15);
		var primaryBG3 = ColorLuminance(primaryBG2, 0.15);
		var primaryText = invertColor(primaryBG);
		var primaryText2 = invertColor(primaryBG2);
		var primaryText3 = invertColor(primaryBG3);
		window.ThemeName = 'Custom('+primaryBG+')';
	}
	var Palette = "//This Theme is Generated by the TDesktop Theme Generator, make yours at https://nightapps.github.io/td-gen  \n //Night Color Scheme \n nightBlue: #0054aa; \n nightBlue2: #002a55; \n nightRed: #aa1400; \n nightRed2: #550a00; \n nightOra: nightOra; \n nightOra2: #682c00; \n nightYel: #d1bb00; \n nightYel2: #685d00; \n nightGre: #24aa00; \n nightGre2: #125500; \n nightCyan: #00a0aa; \n nightCyan2: #005055; \n nightVio: #7800aa; \n nightVio2: #3c0055; \n nightPink: #d100b1; \n nightPink2: #680058; \n nightGrey: #1d1d1d; \n nightGrey2: #212121; \n nightGrey3: #262626; \n nightWhite: #fafafa; \n nightWhite2: #ededed; \n nightWhite3: #ffffff; \n  \n ";
	if (document.getElementById('theme-nightColorScheme').checked) {
		if (document.getElementById('nightColorScheme-select').options[document.getElementById('nightColorScheme-select').selectedIndex].value == 'undefined') return Materialize.toast('Color Not Set!', 3000);
		var replaceVars = [
			['Orange', 'Ora'],
			['Yellow', 'Yel'],
			['Green', 'Gre'],
			['Violet', 'Vio']
		];
		var primaryColor = getValueColor(document.getElementById('nightColorScheme-select'), nightColorScheme, 1);
		for (i = 0; i < replaceVars.length; i++) {
			primaryColor = primaryColor.replace(replaceVars[i][0], replaceVars[i][1]);
		}
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

	var Palette = Palette+'//Set Primary Colors \n primaryColor: '+primaryColor+'; // Sets the Primary Color of the App: ripples, text colors, etc. \n primaryColorTrans: '+primaryColorTrans+'; // Sets the Primary Color of the App: ripples, text colors, etc. \n primaryColorDark: '+primaryColorDark+'; // Dark Primary Colors, alt ripples etc \n primaryBG: '+primaryBG+'; // Background Colors \n primaryBG2: '+primaryBG2+'; // Dialog Colors \n primaryBG3: '+primaryBG3+'; // etc BG Colors \n primaryBGTrans: '+primaryBGTrans+'; // etc BG Colors \n primaryText: '+primaryText+'; // Text Colors \n primaryText2: '+primaryText2+'; // Alt Text Colors \n primaryText3: '+primaryText3+'; // Misc Text Colors \n';
	var Palette = Palette+'windowBg: primaryBG; // white: fallback for background \n windowFg: nightWhite2; // black: fallback for text \n windowBgOver: primaryBG3; // light gray: fallback for background with mouse over \n windowBgRipple: primaryColor; // darker gray: fallback for ripple effect \n windowFgOver: windowFg; // black: fallback for text with mouse over \n windowSubTextFg: #999999; // gray: fallback for additional text \n windowSubTextFgOver: #919191; // darker gray: fallback for additional text with mouse over \n windowBoldFg: nightWhite; // dark gray: fallback for bold text \n windowBoldFgOver: nightWhite; // dark gray: fallback for bold text with mouse over \n windowBgActive: primaryColor; // bright blue: fallback for blue filled active areas \n windowFgActive: nightWhite3; // white: fallback for text on active areas \n windowActiveTextFg: primaryColor; // online blue: fallback for active text like online status \n windowShadowFg: #000000; // black: fallback for shadow \n windowShadowFgFallback: #f1f1f1; // gray: fallback for shadow without opacity \n shadowFg: #00000018; // most shadows (including opacity) \n slideFadeOutBg: #0000003c; // slide animation (chat to profile) fade out filling \n slideFadeOutShadowFg: windowShadowFg; // slide animation (chat to profile) fade out right section shadow \n imageBg: #000000; // image background fallback (when photo size is less than minimum allowed) \n imageBgTransparent: nightWhite3; // image background when displaying an image with opacity where no opacity is needed \n activeButtonBg: windowBgActive; // default active button background \n activeButtonBgOver: primaryColor; // default active button background with mouse over \n activeButtonBgRipple: primaryColorDark; // default active button ripple effect \n activeButtonFg: windowFgActive; // default active button text \n activeButtonFgOver: activeButtonFg; // default active button text with mouse over \n activeButtonSecondaryFg: #cceeff; // default active button additional text (selected messages counter in forward / delete buttons) \n activeButtonSecondaryFgOver: activeButtonSecondaryFg; // default active button additional text with mouse over \n activeLineFg: primaryColor; // default active line (like code input field bottom border when you log in and field is focused) \n activeLineFgError: nightRed; // default active line for error state (like code input field bottom border when you log in and you\'ve entered incorrect code) \n lightButtonBg: windowBg; // default light button background (like buttons in boxes) \n lightButtonBgOver: primaryBG3; // default light button background with mouse over \n lightButtonBgRipple: primaryColor; // default light button ripple effect \n lightButtonFg: windowActiveTextFg; // default light button text \n lightButtonFgOver: nightWhite; // default light button text with mouse over \n attentionButtonFg: nightRed; // default attention button text (like confirm button on log out) \n attentionButtonFgOver: nightRed; // default attention button text with mouse over \n attentionButtonBgOver: primaryBG3; // default attention button background with mouse over \n attentionButtonBgRipple: nightRed; // default attention button ripple effect \n outlineButtonBg: windowBg; // default left outlined button background (like shared media links in profiles) \n outlineButtonBgOver: lightButtonBgOver; // default left outlined button background with mouse over \n outlineButtonOutlineFg: windowBgActive; // default left outlined button left outline border \n outlineButtonBgRipple: lightButtonBgRipple; // default left outlined button ripple effect \n menuBg: windowBg; // default popup menu background \n menuBgOver: windowBgOver; // default popup menu item background with mouse over \n menuBgRipple: primaryColor; // default popup menu item ripple effect \n menuIconFg: primaryColor; // default popup menu item icon (like main menu) \n menuIconFgOver: nightWhite; // default popup menu item icon with mouse over \n menuSubmenuArrowFg: #373737; // default popup menu submenu arrow icon (like in message field context menu in case of RTL system language) \n menuFgDisabled: #cccccc; // default popup menu item disabled text (like unavailable items in message field context menu) \n menuSeparatorFg: #f1f1f1; // default popup menu separator (like in message field context menu) \n scrollBarBg: primaryColor; // default scroll bar current rectangle, the bar itself (like in chats list) \n scrollBarBgOver: primaryColor; // default scroll bar current rectangle with mouse over it \n scrollBg: primaryBg; // default scroll bar background \n scrollBgOver: primaryBg; // default scroll bar background with mouse over the scroll bar \n smallCloseIconFg: #c7c7c7; // small X icon (like in Show all sessions box to the right for sessions termination) \n smallCloseIconFgOver: #a3a3a3; // small X icon with mouse over \n radialFg: windowFgActive; // default radial loader line (like in Media Viewer when loading a photo) \n radialBg: #00000056; // default radial loader background (like in Media Viewer when loading a photo) \n placeholderFg: windowSubTextFg; // default input field placeholder when field is not focused (like in phone input field when you log in) \n placeholderFgActive: #aaaaaa; // default input field placeholder when field is focused \n inputBorderFg: #e0e0e0; // default input field bottom border (like in code input field when you log in and field is not focused) \n filterInputBorderFg: primaryColor; // default rounded input field border (like in chats list search field when field is focused) \n filterInputInactiveBg: primaryBG2; // default rounded input field background (like in chats list search field when field is inactive) \n checkboxFg: primaryColor; // default unchecked checkbox rounded rectangle (and also emoji category icons) \n sliderBgInactive: #e1eaef; // default slider not active bar (like in Settings when you choose interface scale or custom notifications count) \n sliderBgActive: windowBgActive; // default slider active bar (like in Settings when you choose interface scale or custom notifications count) \n tooltipBg: #eef2f5; // tooltip background (like when you put mouse over the message timestamp and wait) \n tooltipFg: #5d6c80; // tooltip text \n tooltipBorderFg: #c9d1db; // tooltip border \n titleShadow: #00000003; // one pixel line shadow at the bottom of custom window title \n titleBg: nightGrey; // custom window title background when window is inactive \n titleBgActive: nightGrey; // custom window title background when window is active \n titleButtonBg: nightGrey; // custom window title minimize/maximize/restore button background when window is inactive (Windows only) \n titleButtonFg: primaryColor; // custom window title minimize/maximize/restore button icon when window is inactive (Windows only) \n titleButtonBgOver: #e5e5e5; // custom window title minimize/maximize/restore button background with mouse over when window is inactive (Windows only) \n titleButtonFgOver: #9a9a9a; // custom window title minimize/maximize/restore button icon with mouse over when window is inactive (Windows only) \n titleButtonBgActive: titleButtonBg; // custom window title minimize/maximize/restore button background when window is active (Windows only) \n titleButtonFgActive: titleButtonFg; // custom window title minimize/maximize/restore button icon when window is active (Windows only) \n titleButtonBgActiveOver: titleButtonBgOver; // custom window title minimize/maximize/restore button background with mouse over when window is active (Windows only) \n titleButtonFgActiveOver: titleButtonFgOver; // custom window title minimize/maximize/restore button icon with mouse over when window is active (Windows only) \n titleButtonCloseBg: titleButtonBg; // custom window title close button background when window is inactive (Windows only) \n titleButtonCloseFg: #e81026; // custom window title close button icon when window is inactive (Windows only) \n titleButtonCloseBgOver: #e81123; // custom window title close button background with mouse over when window is inactive (Windows only) \n titleButtonCloseFgOver: windowFgActive; // custom window title close button icon with mouse over when window is inactive (Windows only) \n titleButtonCloseBgActive: titleButtonCloseBg; // custom window title close button background when window is active (Windows only) \n titleButtonCloseFgActive: titleButtonCloseFg; // custom window title close button icon when window is active (Windows only) \n titleButtonCloseBgActiveOver: titleButtonCloseBgOver; // custom window title close button background with mouse over when window is active (Windows only) \n titleButtonCloseFgActiveOver: titleButtonCloseFgOver; // custom window title close button icon with mouse over when window is active (Windows only) \n titleFg: #acacac; // custom window title text when window is inactive (macOS only) \n titleFgActive: #3e3c3e; // custom window title text when window is active (macOS only) \n trayCounterBg: nightGrey; // tray icon counter background \n trayCounterBgMute: primaryColor; // tray icon counter background if all unread messages are muted \n trayCounterFg: nightWhite3; // tray icon counter text \n trayCounterBgMacInvert: nightWhite3; // tray icon counter background when tray icon is pressed or when dark theme of macOS is used (macOS only) \n trayCounterFgMacInvert: #ffffff01; // tray icon counter text when tray icon is pressed or when dark theme of macOS is used (macOS only) \n layerBg: #0000007f; // box and main menu background layer fade \n cancelIconFg: menuIconFg; // default for settings close icon and box search cancel icon \n cancelIconFgOver: menuIconFgOver; // default for settings close icon and box search cancel icon with mouse over \n boxBg: windowBg; // box background \n boxTextFg: windowFg; // box text \n boxTextFgGood: #4ab44a; // accepted box text (like when choosing username that is not occupied) \n boxTextFgError: #d84d4d; // rejecting box text (like when choosing username that is occupied) \n boxTitleFg: nightWhite3; // box title text \n boxSearchBg: boxBg; // box search field background (like in contacts box) \n boxTitleAdditionalFg: #808080; // box title additional text (like in create group box when you see chosen members count) \n boxTitleCloseFg: cancelIconFg; // settings close icon and box search cancel icon (like in contacts box) \n boxTitleCloseFgOver: cancelIconFgOver; // settings close icon and box search cancel icon (like in contacts box) with mouse over \n membersAboutLimitFg: windowSubTextFgOver; // text in channel members box about the limit (max 200 last members are shown) \n contactsBg: windowBg; // contacts (and some other) box row background \n contactsBgOver: windowBgOver; // contacts (and some other) box row background with mouse over \n contactsNameFg: boxTextFg; // contacts (and some other) box row name text \n contactsStatusFg: primaryColor; // contacts (and some other) box row additional text (like last seen stamp) \n contactsStatusFgOver: primaryColor; // contacts (and some other) box row additional text (like last seen stamp) with mouse over \n contactsStatusFgOnline: windowActiveTextFg; // contacts (and some other) box row active additional text (like online status) \n photoCropFadeBg: layerBg; // avatar crop box fade background (when choosing a new photo in Settings or for a group) \n photoCropPointFg: #ffffff7f; // avatar crop box corner rectangles (when choosing a new photo in Settings or for a group) \n introBg: windowBg; // login background \n introTitleFg: windowBoldFg; // login title text \n introDescriptionFg: windowSubTextFg; // login description text \n introErrorFg: windowSubTextFg; // login error text (like when providing a wrong log in code) \n introCoverTopBg: primaryColor; // intro gradient top (from) \n introCoverBottomBg: primaryColor; // intro gradient bottom (to) \n introCoverIconsFg: primaryColor; // intro cloud graphics \n introCoverPlaneTrace: #5ec6ff69; // intro plane traces \n introCoverPlaneInner: #c6d8e8; // intro plane part \n introCoverPlaneOuter: #a1bed4; // intro plane part \n introCoverPlaneTop: nightWhite3; // intro plane part \n dialogsMenuIconFg: menuIconFg; // main menu and lock telegram icon \n dialogsMenuIconFgOver: menuIconFgOver; // main menu and lock telegram icon with mouse over \n dialogsBg: windowBg; // chat list background \n dialogsNameFg: windowBoldFg; // chat list name text \n dialogsChatIconFg: dialogsNameFg; // chat list group or channel icon \n dialogsDateFg: windowSubTextFg; // chat list date text \n dialogsTextFg: windowSubTextFg; // chat list message text \n dialogsTextFgService: windowActiveTextFg; // chat list group sender name text (or media message type text) \n dialogsDraftFg: #dd4b39; // chat list draft label \n dialogsVerifiedIconBg: windowBgActive; // chat list verified icon background \n dialogsVerifiedIconFg: windowFgActive; // chat list verified icon check \n dialogsSendingIconFg: #c1c1c1; // chat list sending message icon (clock) \n dialogsSentIconFg: primaryColor; // chat list sent message tick / double tick icon \n dialogsUnreadBg: windowBgActive; // chat list unread badge background for not muted chat \n dialogsUnreadBgMuted: primaryColorDark; // chat list unread badge background for muted chat \n dialogsUnreadFg: windowFgActive; // chat list unread badge text \n dialogsBgOver: windowBgOver; // chat list background with mouse over \n dialogsNameFgOver: windowBoldFgOver; // chat list name text with mouse over \n dialogsChatIconFgOver: dialogsNameFgOver; // chat list group or channel icon with mouse over \n dialogsDateFgOver: windowSubTextFgOver; // chat list date text with mouse over \n dialogsTextFgOver: windowSubTextFgOver; // chat list message text with mouse over \n dialogsTextFgServiceOver: dialogsTextFgService; // chat list group sender name text with mouse over \n dialogsDraftFgOver: dialogsDraftFg; // chat list draft label with mouse over \n dialogsVerifiedIconBgOver: dialogsVerifiedIconBg; // chat list verified icon background with mouse over \n dialogsVerifiedIconFgOver: dialogsVerifiedIconFg; // chat list verified icon check with mouse over \n dialogsSendingIconFgOver: dialogsSendingIconFg; // chat list sending message icon (clock) with mouse over \n dialogsSentIconFgOver: dialogsSentIconFg; // chat list sent message tick / double tick icon with mouse over \n dialogsUnreadBgOver: dialogsUnreadBg; // chat list unread badge background for not muted chat with mouse over \n dialogsUnreadBgMutedOver: dialogsUnreadBgMuted; // chat list unread badge background for muted chat with mouse over \n dialogsUnreadFgOver: dialogsUnreadFg; // chat list unread badge text with mouse over \n dialogsBgActive: primaryColor; // chat list background for current (active) chat \n dialogsNameFgActive: windowFgActive; // chat list name text for current (active) chat \n dialogsChatIconFgActive: dialogsNameFgActive; // chat list group or channel icon for current (active) chat \n dialogsDateFgActive: windowFgActive; // chat list date text for current (active) chat \n dialogsTextFgActive: windowFgActive; // chat list message text for current (active) chat \n dialogsTextFgServiceActive: dialogsTextFgActive; // chat list group sender name text for current (active) chat \n dialogsDraftFgActive: #c6e1f7; // chat list draft label for current (active) chat \n dialogsVerifiedIconBgActive: dialogsTextFgActive; // chat list verified icon background for current (active) chat \n dialogsVerifiedIconFgActive: dialogsBgActive; // chat list verified icon check for current (active) chat \n dialogsSendingIconFgActive: #ffffff99; // chat list sending message icon (clock) for current (active) chat \n dialogsSentIconFgActive: dialogsTextFgActive; // chat list sent message tick / double tick icon for current (active) chat \n dialogsUnreadBgActive: nightWhite; // chat list unread badge background for not muted chat for current (active) chat \n dialogsUnreadBgMutedActive: dialogsDraftFgActive; // chat list unread badge background for muted chat for current (active) chat \n dialogsUnreadFgActive: dialogsBgActive; // chat list unread badge text for current (active) chat \n dialogsForwardBg: dialogsBgActive; // forwarding panel background (when forwarding messages in the smallest window size) \n dialogsForwardFg: dialogsNameFgActive; // forwarding panel text (when forwarding messages in the smallest window size) \n searchedBarBg: windowBgOver; // search results bar background (in chats list, contacts box..) \n searchedBarFg: windowSubTextFgOver; // search results bar text (in chats list, contacts box..) \n topBarBg: primaryBG2; // top bar background (in chat view, media overview..) \n emojiPanBg: primaryBG2; // emoji panel background \n emojiPanCategories: nightGrey; // emoji panel categories background \n emojiPanHeaderFg: nightWhite; // emoji panel section header text \n emojiPanHeaderBg: #fffffff2; // emoji panel section header background \n stickerPanDeleteBg: #000000cc; // delete X button background for custom sent stickers in stickers panel (legacy) \n stickerPanDeleteFg: windowFgActive; // delete X button icon for custom sent stickers in stickers panel (legacy) \n stickerPreviewBg: #ffffffb0; // sticker and GIF preview background (when you press and hold on a sticker) \n historyTextInFg: windowFg; // inbox message text \n historyTextInFgSelected: historyTextInFg; // inbox message selected text or text in a selected message \n historyTextOutFg: windowFg; // outbox message text \n historyTextOutFgSelected: historyTextOutFg; // outbox message selected text or text in a selected message \n historyLinkInFg: primaryColor; // inbox message link \n historyLinkInFgSelected: historyLinkInFg; // inbox message link in a selected text or message \n historyLinkOutFg: primaryColorDark; // outbox message link \n historyLinkOutFgSelected: historyLinkOutFg; // outbox message link in a selected text or message \n historyFileNameInFg: historyTextInFg; // inbox media filename text \n historyFileNameInFgSelected: historyFileNameInFg; // inbox media filename text in a selected message \n historyFileNameOutFg: historyTextOutFg; // outbox media filename text \n historyFileNameOutFgSelected: historyFileNameOutFg; // outbox media filename text in a selected message \n historyOutIconFg: primaryColorDark; // outbox message tick / double tick icon \n historyOutIconFgSelected: primaryColor; // outbox message tick / double tick icon in a selected message \n historyIconFgInverted: windowFgActive; // media message tick / double tick icon (like in sent photo) \n historySendingOutIconFg: primaryColorDark; // outbox sending message icon (clock) \n historySendingInIconFg: primaryColor; // inbox sending message icon (clock) (like in sent messages to yourself or in sent messages to a channel) \n historySendingInvertedIconFg: #ffffffc8; // media sending message icon (clock) (like in sent photo) \n historyUnreadBarBg: nightGrey; // new unread messages bar background \n historyUnreadBarBorder: shadowFg; // new unread messages bar shadow \n historyUnreadBarFg: primaryColor; // new unread messages bar text \n historyForwardChooseBg: #0000004c; // forwarding messages in a large window size "choose recipient" background \n historyForwardChooseFg: windowFgActive; // forwarding messages in a large window size "choose recipient" text \n historyPeer1NameFg: nightRed; // red group member name \n historyPeer1NameFgSelected: historyPeer1NameFg; // red group member name in a selected message \n historyPeer1UserpicBg: nightRed2; // red userpic background \n historyPeer2NameFg: nightGre; // green group member name \n historyPeer2NameFgSelected: historyPeer2NameFg; // green group member name in a selected message \n historyPeer2UserpicBg: nightGre2; // green userpic background \n historyPeer3NameFg: nightYel; // yellow group member name \n historyPeer3NameFgSelected: historyPeer3NameFg; // yellow group member name in a selected message \n historyPeer3UserpicBg: nightYel2; // yellow userpic background \n historyPeer4NameFg: nightBlue; // blue group member name \n historyPeer4NameFgSelected: historyPeer4NameFg; // blue group member name in a selected message \n historyPeer4UserpicBg: nightBlue2; // blue userpic background \n historyPeer5NameFg: nightVio; // purple group member name \n historyPeer5NameFgSelected: historyPeer5NameFg; // purple group member name in a selected message \n historyPeer5UserpicBg: nightVio2; // purple userpic background \n historyPeer6NameFg: nightPink; // pink group member name \n historyPeer6NameFgSelected: historyPeer6NameFg; // pink group member name in a selected message \n historyPeer6UserpicBg: nightPink2; // pink userpic background \n historyPeer7NameFg: nightCyan; // sea group member name \n historyPeer7NameFgSelected: historyPeer7NameFg; // sea group member name in a selected message \n historyPeer7UserpicBg: nightCyan2; // sea userpic background \n historyPeer8NameFg: nightOra; // orange group member name \n historyPeer8NameFgSelected: historyPeer8NameFg; // orange group member name in a selected message \n historyPeer8UserpicBg: nightOra2; // orange userpic background \n historyPeerUserpicFg: nightWhite; // default userpic initials \n historyScrollBarBg: primaryColor; // scroll bar current rectangle, the bar itself in the chat view (adjusted) \n historyScrollBarBgOver: primaryBG3; // scroll bar current rectangle with mouse over it in the chat view (adjusted) \n historyScrollBg: primaryBG2; // scroll bar background (adjusted) \n historyScrollBgOver: primaryBG2; // scroll bar background with mouse over the scroll bar (adjusted) \n msgInBg: primaryBG2; // inbox message background \n msgInBgSelected: primaryColor; // inbox selected message background (and background of selected text in those messages) \n msgOutBg: primaryColor; // outbox message background \n msgOutBgSelected: primaryColorDark; // outbox selected message background (and background of selected text in those messages) \n msgSelectOverlay: primaryColorTrans; // overlay which is filling the media parts of selected messages (like in selected photo message) \n msgStickerOverlay: primaryColorTrans; // overlay which is filling the selected sticker message \n msgInServiceFg: windowActiveTextFg; // inbox message information text (like information about a forwarded message original sender) \n msgInServiceFgSelected: windowActiveTextFg; // inbox selected message information text (like information about a forwarded message original sender) \n msgOutServiceFg: primaryColorDark; // outbox message information text (like information about a forwarded message original sender) \n msgOutServiceFgSelected: primaryColor; // outbox message information text (like information about a forwarded message original sender) \n msgInShadow: #21212140; // inbox message shadow (below the bubble) \n msgInShadowSelected: primaryColorTrans; // inbox selected message shadow (below the bubble) \n msgOutShadow: primaryColorTrans; // outbox message shadow (below the bubble) \n msgOutShadowSelected: primaryColorTrans; // outbox selected message shadow (below the bubble) \n msgInDateFg: primaryColor; // inbox message time text \n msgInDateFgSelected: primaryColorDark; // inbox selected message time text \n msgOutDateFg: primaryColorDark; // outbox message time text \n msgOutDateFgSelected: primaryColor; // outbox selected message time text \n msgServiceFg: windowFgActive; // service message text (like date dividers or service message about the group title being changed) \n msgServiceBg: primaryColorTrans; // service message background (like in a service message about group title being changed) (adjusted) \n msgServiceBgSelected: primaryColorTrans; // service message selected text background (like in a service message about group title being changed) (adjusted) \n msgInReplyBarColor: activeLineFg; // inbox message reply outline \n msgInReplyBarSelColor: activeLineFg; // inbox selected message reply outline \n msgOutReplyBarColor: historyOutIconFg; // outbox message reply outline \n msgOutReplyBarSelColor: historyOutIconFgSelected; // outbox selected message reply outline \n msgImgReplyBarColor: msgServiceFg; // sticker message reply outline \n msgInMonoFg: #b5bd68; // inbox message monospace text (like a message sent with `test` text) \n msgOutMonoFg: primaryBG2; // outbox message monospace text \n msgInMonoFgSelected: #b5bd68; // inbox message monospace text in a selected text or message \n msgOutMonoFgSelected: nightWhite; // outbox message monospace text in a selected text or message \n msgDateImgFg: msgServiceFg; // media message time text (like time text in a sent photo) \n msgDateImgBg: #00000054; // media message time bubble background (like time bubble in a sent photo) or file with thumbnail download icon circle background \n msgDateImgBgOver: #00000074; // media message download icon circle background with mouse over (like file with thumbnail download icon) \n msgDateImgBgSelected: #1c4a7187; // selected media message time bubble background \n msgFileThumbLinkInFg: lightButtonFg; // inbox media file message with thumbnail download / open with button text \n msgFileThumbLinkInFgSelected: lightButtonFgOver; // inbox selected media file message with thumbnail download / open with button text \n msgFileThumbLinkOutFg: #5eba5b; // outbox media file message with thumbnail download / open with button text \n msgFileThumbLinkOutFgSelected: #31a298; // outbox selected media file message with thumbnail download / open with button text \n msgFileInBg: windowBgActive; // inbox audio file download circle background \n msgFileInBgOver: primaryText; // inbox audio file download circle background with mouse over \n msgFileInBgSelected: primaryBG2; // inbox selected audio file download circle background \n msgFileOutBg: primaryColorDark; // outbox audio file download circle background \n msgFileOutBgOver: primaryText; // outbox audio file download circle background with mouse over \n msgFileOutBgSelected: primaryColor; // outbox selected audio file download circle background \n msgFile1Bg: nightCyan; // blue shared links / files without image square thumbnail \n msgFile1BgDark: nightCyan; // blue shared files without image download circle background \n msgFile1BgOver: primaryText; // blue shared files without image download circle background with mouse over \n msgFile1BgSelected: nightCyan2; // blue shared files without image download circle background if file is selected \n msgFile2Bg: nightGre; // green shared links / shared files without image square thumbnail \n msgFile2BgDark: nightGre; // green shared files without image download circle background \n msgFile2BgOver: primaryText; // green shared files without image download circle background with mouse over \n msgFile2BgSelected: nightGre2; // green shared files without image download circle background if file is selected \n msgFile3Bg: nightRed; // red shared links / shared files without image square thumbnail \n msgFile3BgDark: nightRed; // red shared files without image download circle background \n msgFile3BgOver: primaryText; // red shared files without image download circle background with mouse over \n msgFile3BgSelected: nightRed2; // red shared files without image download circle background if file is selected \n msgFile4Bg: nightYel; // yellow shared links / shared files without image square thumbnail \n msgFile4BgDark: nightYel; // yellow shared files without image download circle background \n msgFile4BgOver: primaryText; // yellow shared files without image download circle background with mouse over \n msgFile4BgSelected: nightYel2; // yellow shared files without image download circle background if file is selected \n historyFileInIconFg: msgInBg; // inbox file without thumbnail (like audio file) download arrow icon \n historyFileInIconFgSelected: msgInBgSelected; // inbox selected file without thumbnail (like audio file) download arrow icon \n historyFileInRadialFg: historyFileInIconFg; // inbox file without thumbnail (like audio file) radial download animation line \n historyFileInRadialFgSelected: historyFileInIconFgSelected; // inbox selected file without thumbnail (like audio file) radial download animation line \n historyFileOutIconFg: msgOutBg; // outbox file without thumbnail (like audio file) download arrow icon \n historyFileOutIconFgSelected: msgOutBgSelected; // outbox selected file without thumbnail (like audio file) download arrow icon \n historyFileOutRadialFg: historyFileOutIconFg; // outbox file without thumbnail (like audio file) radial download animation line \n historyFileOutRadialFgSelected: historyFileOutIconFgSelected; // outbox selected file without thumbnail (like audio file) radial download animation line \n historyFileThumbIconFg: msgInBg; // file with thumbnail (or photo / video) download arrow icon \n historyFileThumbIconFgSelected: msgInBgSelected; // selected file with thumbnail (or photo / video) download arrow icon \n historyFileThumbRadialFg: historyFileThumbIconFg; // file with thumbnail (or photo / video) radial download animation line \n historyFileThumbRadialFgSelected: historyFileThumbIconFgSelected; // selected file with thumbnail (or photo / video) radial download animation line \n msgWaveformInActive: primaryColor; // inbox voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformInActiveSelected: #262626; // inbox selected voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformInInactive: primaryText; // inbox voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgWaveformInInactiveSelected: primaryText; // inbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgWaveformOutActive: primaryText; // outbox voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformOutActiveSelected: primaryText; // outbox selected voice message active waveform lines (like played part of currently playing voice message) \n msgWaveformOutInactive: primaryColorDark; // outbox voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgWaveformOutInactiveSelected: primaryColor; // outbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message) \n msgBotKbOverBgAdd: #ffffff20; // this is painted over a bot inline keyboard button (which has msgServiceBg background) when mouse is over that button \n msgBotKbIconFg: msgServiceFg; // bot inline keyboard button icon in the top-right corner (like in @vote bot when a poll is ready to be shared) \n msgBotKbRippleBg: primaryColor; // bot inline keyboard button ripple effect \n mediaInFg: msgInDateFg; // inbox media message status text (like in file that is being downloaded) \n mediaInFgSelected: msgInDateFgSelected; // inbox selected media message status text (like in file that is being downloaded) \n mediaOutFg: msgOutDateFg; // outbox media message status text (like in file that is being downloaded) \n mediaOutFgSelected: msgOutDateFgSelected; // outbox selected media message status text (like in file that is being downloaded) \n youtubePlayIconBg: #e83131c8; // youtube play icon background (when a link to a youtube video with a webpage preview is sent) \n youtubePlayIconFg: windowFgActive; // youtube play icon arrow (when a link to a youtube video with a webpage preview is sent) \n videoPlayIconBg: #0000007f; // other video play icon background (like when a link to a vimeo video with a webpage preview is sent) \n videoPlayIconFg: nightWhite3; // other video play icon arrow (like when a link to a vimeo video with a webpage preview is sent) \n toastBg: #000000b2; // toast notification background (like when you click on your t.me link when editing your username) \n toastFg: windowFgActive; // toast notification text (like when you click on your t.me link when editing your username) \n reportSpamBg: #ff0000f2; // report spam panel background (like a non contact user writes your for the first time) \n reportSpamFg: windowFg; // report spam panel text (when you send a report from that panel) \n historyToDownBg: windowBg; // arrow button background (to scroll to the end of the viewed chat) \n historyToDownBgOver: windowBgOver; // arrow button background with mouse over \n historyToDownBgRipple: windowBgRipple; // arrow button ripple effect \n historyToDownFg: menuIconFg; // arrow button icon \n historyToDownFgOver: menuIconFgOver; // arrow button icon with mouse over \n historyToDownShadow: #00000040; // arrow button shadow \n historyComposeAreaBg: #00000000; // history compose area background (message write area / reply information / forwarding information) \n historyComposeAreaFg: historyTextInFg; // history compose area text \n historyComposeAreaFgService: msgInDateFg; // history compose area text when replying to a media message \n historyComposeIconFg: primaryColor; // history compose area icon (like emoji, attach, bot command..) \n historyComposeIconFgOver: nightWhite; // history compose area icon with mouse over \n historySendIconFg: windowBgActive; // send message icon \n historySendIconFgOver: windowBgActive; // send message icon with mouse over \n historyPinnedBg: primaryBG2; // pinned message area background \n historyReplyBg: primaryBGTrans; // reply / forward / edit message area background \n historyReplyIconFg: windowBgActive; // reply / forward / edit message left icon \n historyReplyCancelFg: cancelIconFg; // reply / forward / edit message cancel button \n historyReplyCancelFgOver: cancelIconFgOver; // reply / forward / edit message cancel button with mouse over \n historyComposeButtonBg: primaryBGTrans; // unblock / join channel / mute channel button background \n historyComposeButtonBgOver: windowBgOver; // unblock / join channel / mute channel button background with mouse over \n historyComposeButtonBgRipple: windowBgRipple; // unblock / join channel / mute channel button ripple effect \n overviewCheckBg: #00000040; // shared files / links checkbox background for not selected rows when some rows are selected \n overviewCheckFg: windowBg; // shared files / links checkbox icon for not selected rows when some rows are selected \n overviewCheckFgActive: windowBg; // shared files / links checkbox icon for selected rows \n overviewPhotoSelectOverlay: #40ace333; // shared photos / videos / links fill for selected rows \n profileStatusFgOver: #7c99b2; // group members list in group profile user last seen text with mouse over \n profileVerifiedCheckBg: primaryColor; // profile verified check icon background \n profileVerifiedCheckFg: windowFgActive; // profile verified check icon tick \n profileAdminStartFg: nightYel; // group members list admin star icon \n notificationsBoxMonitorFg: windowFg; // custom notifications settings box monitor color \n notificationsBoxScreenBg: primaryColor; // #6389a8; // custom notifications settings box monitor screen background \n notificationSampleUserpicFg: primaryColor; // custom notifications settings box small sample userpic placeholder \n notificationSampleCloseFg: #d7d7d7; // custom notifications settings box small sample close button placeholder \n notificationSampleTextFg: #d7d7d7; // custom notifications settings box small sample text placeholder \n notificationSampleNameFg: #939393; // custom notifications settings box small sample name placeholder \n changePhoneSimcardFrom: primaryColorDark; // change phone number box left simcard icon \n changePhoneSimcardTo: primaryColor; // change phone number box right simcard and plane icons \n mainMenuBg: windowBg; // main menu background \n mainMenuCoverBg: primaryColor; // main menu top cover background \n mainMenuCoverFg: windowFgActive; // main menu top cover text \n mainMenuCloudFg: activeButtonFg; //  \n mainMenuCloudBg: primaryColorDark; //  \n mediaPlayerBg: windowBg; // audio file player background \n mediaPlayerActiveFg: primaryColor; // audio file player playback progress already played part \n mediaPlayerInactiveFg: #e2ebef; // audio file player playback progress upcoming (not played yet) part with mouse over \n mediaPlayerDisabledFg: #9dd1ef; // audio file player loading progress (when you\'re playing an audio file and switch to the previous one which is not loaded yet) \n mediaviewFileBg: windowBg; // file rectangle background (when you view a png file in Media Viewer and go to a previous, not loaded yet, file) \n mediaviewFileNameFg: windowFg; // file name in file rectangle \n mediaviewFileSizeFg: windowSubTextFg; // file size text in file rectangle \n mediaviewFileRedCornerFg: nightRed; // red file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .pdf) \n mediaviewFileYellowCornerFg: #24aa00; // yellow file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .zip) \n mediaviewFileGreenCornerFg: primaryColor; // green file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .exe) \n mediaviewFileBlueCornerFg: nightPink; // blue file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .dmg) \n mediaviewFileExtFg: activeButtonFg; // file extension text in file thumbnail placeholder in file rectangle \n mediaviewMenuBg: primaryBG2; // context menu in Media Viewer background \n mediaviewMenuBgOver: primaryBG3; // context menu item background with mouse over \n mediaviewMenuBgRipple: primaryColor; // context menu item ripple effect \n mediaviewMenuFg: windowFgActive; // context menu item text \n mediaviewBg: primaryBGee; // Media Viewer background \n mediaviewVideoBg: primaryBG; // Media Viewer background when viewing a video in full screen \n mediaviewControlBg: #0000003c; // controls background (like next photo / previous photo) \n mediaviewControlFg: windowFgActive; // controls icon (like next photo / previous photo) \n mediaviewCaptionBg: primaryBGee; // caption text background (when viewing photo with caption) \n mediaviewCaptionFg: mediaviewControlFg; // caption text \n mediaviewTextLinkFg: primaryColor; // caption text link \n mediaviewSaveMsgBg: toastBg; // save to file toast message background in Media Viewer \n mediaviewSaveMsgFg: toastFg; // save to file toast message text \n mediaviewPlaybackActive: #c7c7c7; // video playback progress already played part \n mediaviewPlaybackInactive: primaryBG3; // video playback progress upcoming (not played yet) part \n mediaviewPlaybackActiveOver: nightWhite3; // video playback progress already played part with mouse over \n mediaviewPlaybackInactiveOver: #474747; // video playback progress upcoming (not played yet) part with mouse over \n mediaviewPlaybackProgressFg: #ffffffc7; // video playback progress text \n mediaviewPlaybackIconFg: mediaviewPlaybackActive; // video playback controls icon \n mediaviewPlaybackIconFgOver: mediaviewPlaybackActiveOver; // video playback controls icon with mouse over \n mediaviewTransparentBg: nightWhite3; // transparent filling part (when viewing a transparent .png file in Media Viewer) \n mediaviewTransparentFg: #cccccc; // another transparent filling part \n notificationBg: windowBg; // custom notification window background \n callArrowMissedFg: #aa1300; \n historyCallArrowMissedInFgSelected: callArrowMissedFg; \n historyCallArrowMissedInFg: callArrowMissedFg; \n callArrowFg: primaryColor; \n callAnswerBg: primaryColor; \n callBg: primaryColor; \n callAnswerRipple: primaryColorDark; \n callAnswerBgOuter: primaryColorTrans; \n callHangupBg: nightRed; \n callHangupRipple: nightRed2; \n callMuteRipple: nightVio; \n callBarBg: primaryBG2; \n callBarMuteRipple: primaryColor; \n callBarBgMuted: primaryBG3; \n callCancelRipple: #550a00; \n callCancelBg: nightRed; \n callCancelFg: primaryText2; \n profileOtherAdminStarFg: nightOra; \n profileOtherAdminStarFgOver: nightOra; \n profileAdminStarFgOver: nightYel; \n botKbBg: menuBgOver; \n botKbDownBg: primaryBG; \n filterInputActiveBg: primaryBG3; \n  \n';
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
		saveAs(blob, 'Night-'+window.ThemeName+'-'+window.ColorName + ".tdesktop-theme");
	});
	}catch(err){
		console.log(err);
	}
}

function makeThemeAndroid(){
	try{
		if (document.getElementById("theme-Light").checked) {
		var primaryBG = 'ffededed';
		var primaryBGTrans = '66ededed';
		var primaryBG2 = 'fffafafa';
		var primaryBG3 = 'ffffffff';
		var primaryText = 'ff1d1d1d';
		var primaryTextBubble = primaryBG;
		window.ThemeName = 'Dawn';
	} else if (document.getElementById("theme-Amoled").checked) {
		var primaryBG = 'ff000000';
		var primaryBGTrans = '66000000';
		var primaryBG2 = 'ff000000';
		var primaryBG3 = 'ff000000';
		var primaryText = 'fffbfbfb';
		var primaryTextBubble = primaryText;
		window.ThemeName = 'Midnight';
	} else if (document.getElementById("theme-Dark").checked) {
		var primaryBG = 'ff1d1d1d';
		var primaryBGTrans = '661d1d1d';
		var primaryBG2 = 'ff212121';
		var primaryBG3 = 'ff262626';
		var primaryText = 'fffbfbfb';
		var primaryTextBubble = primaryText;
		window.ThemeName = 'Dark';
	} else {
		var primaryBG = 'ff'+window.BGColor.substr(1);
		var primaryBGTrans = '66'+primaryBG;
		var primaryBG2 = ColorLuminance(primaryBG, 0.15).substr(1);
		var primaryBG3 = 'ff'+ColorLuminance(primaryBG2, 0.15).substr(1);
		var primaryText = 'ff'+invertColor(primaryBG).substr(1);
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
		window.ColorName = 'Custom('+primaryColor+')';
	}
		if(document.getElementById("theme-tandroid").checked){var Palette='avatar_backgroundViolet=-8912726\nprofile_adminIcon=$primaryColor$\navatar_backgroundBlue=-16755542\nchat_replyPanelClose=$primaryColor$\ndialogTextGray=$primaryColor$\ndialogTextBlue2=$primaryColor$\nactionBarActionModeDefaultSelector=$primaryColorDark$\nchats_menuItemIcon=$primaryColor$\nchat_inTimeText=$primaryColor$\nchat_inLoader=$primaryColor$\nwindowBackgroundGray=$primaryBG$\nwindowBackgroundWhiteGreenText2=$primaryColor$\nchat_emojiPanelBackspace=$primaryColor$\nchat_outFileInfoSelectedText=$primaryColor$\nchat_inBubble=$primaryBG3$\nchat_outLoaderSelected=$primaryColor$\nchat_emojiPanelIcon=$primaryColor$\nchat_selectedBackground=$primaryBG3$\nchats_pinnedIcon=$primaryColor$\nchat_muteIcon=$primaryColorDark$\nchat_addContact=$primaryColor$\nchat_outMenu=$primaryColorDark$\navatar_backgroundRed=-5630976\nactionBarActionModeDefault=$primaryColor$\nchat_emojiPanelShadowLine=$primaryColor$\navatar_nameInMessageBlue=-16755542\navatar_backgroundGreen=-14374400\ndialogBackground=$primaryBG3$\ndialogCheckboxSquareBackground=$primaryColor$\nchat_outForwardedNameText=$primaryColorDark$\nswitchThumb=$primaryBG3$\nchats_tabletSelectedOverlay=0\ndivider=0\navatar_actionBarSelectorBlue=$primaryColor$\nchats_actionMessage=$primaryColor$\nchat_inLoaderSelected=$primaryColorDark$\nchat_stickerReplyLine=$primaryColor$\ninappPlayerBackground=$primaryColor$\navatar_nameInMessageRed=-5630976\nchat_topPanelLine=$primaryColorDark$\nchat_outFileInfoText=$primaryColorDark$\nchat_outBubbleShadow=0\nchat_inMenuSelected=$primaryColorDark$\nactionBarDefaultSearchPlaceholder=$primaryColorDark$\nprofile_actionBackground=$primaryBG3$\nchat_outSentClockSelected=$primaryColor$\navatar_nameInMessageGreen=-14374400\nchat_outAudioSeekbarFill=$primaryColorDark$\nchat_messagePanelVoiceShadow=16514043\nchat_inReplyNameText=$primaryColor$\navatar_backgroundCyan=-16736086\nchats_nameIcon=$primaryColor$\ngraySection=$primaryBG$\nchat_messagePanelIcons=$primaryColor$\nchat_emojiPanelIconSelector=$primaryColor$\nchat_inFileInfoSelectedText=$primaryColorDark$\nchat_inAudioPerfomerText=$primaryColor$\nchat_messageLinkIn=$primaryColor$\nchats_attachMessage=$primaryColor$\nchats_unreadCounter=$primaryColor$\nactionBarDefaultSubmenuBackground=$primaryBG3$\ncheckbox=$primaryColor$\nchat_outSentCheckSelected=$primaryColor$\nchat_outTimeSelectedText=$primaryColorDark$\nchats_secretIcon=$primaryColor$\nchat_messagePanelSend=$primaryColor$\nchat_messagePanelshadow=0\nchats_pinnedOverlay=0\ndialogIcon=$primaryColor$\nchat_outAudioPerfomerText=$primaryColorDark$\nwindowBackgroundGrayShadow=0\nwindowBackgroundWhiteBlueHeader=$primaryColor$\nactionBarDefaultSelector=$primaryColorDark$\nreturnToCallBackground=$primaryColorDark$\nchat_messagePanelBackground=$primaryBGTrans$\nchat_inReplyLine=$primaryColor$\nchat_searchPanelIcons=$primaryColor$\nswitchThumbChecked=$primaryColor$\navatar_backgroundOrange=-3057408\nchat_inReplyMessageText=$primaryColor$\nchat_inAudioDurationSelectedText=$primaryColorDark$\ndialogLinkSelection=$primaryColor$\nactionBarDefault=$primaryColor$\ndialogInputFieldActivated=$primaryColor$\nchat_outSentClock=$primaryColorDark$\nchat_goDownButton=$primaryBG3$\nchats_verifiedBackground=$primaryColor$\nprofile_actionPressedBackground=$primaryColor$\nchat_outContactPhoneText=$primaryColorDark$\nchat_outAudioDurationText=$primaryColorDark$\nwindowBackgroundWhiteLinkText=$primaryColor$\nwindowBackgroundWhiteLinkSelection=$primaryColor$\nchat_outSiteNameText=$primaryColorDark$\nchats_actionBackground=$primaryColor$\nchats_date=$primaryColor$\nchat_inBubbleSelected=$primaryColor$\nprogressCircle=$primaryColor$\nchat_outBubbleSelected=$primaryColorDark$\nstickers_menu=$primaryColor$\nchats_unreadCounterMuted=$primaryColorDark$\navatar_nameInMessagePink=-3080015\nchat_inSiteNameText=$primaryColor$\nchat_topPanelMessage=$primaryColorDark$\nchat_topPanelBackground=$primaryColor$\nchat_inReplyMediaMessageSelectedText=$primaryColorDark$\nchat_outAudioDurationSelectedText=$primaryColor$\nkey_chat_messagePanelVoiceLockShadow=16514043\nchats_actionPressedBackground=$primaryColorDark$\nswitchTrackChecked=$primaryColorDark$\nchat_serviceBackground=1814439462\nwindowBackgroundWhiteGrayText2=$primaryColor$\nsharedMedia_startStopLoadIcon=$primaryColor$\nprofile_actionIcon=$primaryColor$\ndialogTextBlue3=$primaryColor$\nchat_emojiPanelBackground=$primaryBG2$\nactionBarDefaultTitle=$primaryColorDark$\nchat_inVoiceSeekbarFill=$primaryColor$\nchat_inPreviewLine=$primaryColor$\ndialogTextBlue=$primaryColor$\navatar_backgroundActionBarBlue=$primaryColor$\nchat_inViaBotNameText=$primaryColor$\navatar_nameInMessageOrange=-3057408\nwindowBackgroundWhiteGrayText4=$primaryColor$\nchat_outFileBackground=$primaryColor$\ndialogTextLink=$primaryColor$\nchat_fieldOverlayText=$primaryColor$\navatar_nameInMessageViolet=-8912726\nchat_inForwardedNameText=$primaryColor$\nchats_nameMessage=$primaryColor$\nchat_outBubble=$primaryColor$\nwindowBackgroundWhite=$primaryBG$\nchats_menuBackground=$primaryBG2$\nchat_messagePanelHint=16514043\nchat_replyPanelLine=0\nchat_inReplyMediaMessageText=$primaryColor$\ncalls_callReceivedGreenIcon=$primaryColor$\nchat_outReplyMediaMessageText=$primaryColorDark$\nchat_outLoader=$primaryColorDark$\nchat_outReplyNameText=$primaryColorDark$\nchat_inFileInfoText=$primaryColor$\nwindowBackgroundWhiteGrayIcon=$primaryColor$\nchat_inContactPhoneText=$primaryColor$\nchat_sentError=-5630976\navatar_backgroundInProfileBlue=$primaryColor$\nchat_outVoiceSeekbarFill=$primaryColorDark$\nchat_goDownButtonShadow=0\nchat_outPreviewLine=$primaryColorDark$\nchats_sentCheck=$primaryColor$\nchat_replyPanelIcons=$primaryColor$\nchat_inMenu=$primaryColor$\navatar_actionBarIconBlue=$primaryColorDark$\nchats_sentClock=$primaryColor$\ndialogButton=$primaryColor$\ndialogTextBlue4=$primaryColor$\ninappPlayerClose=$primaryColorDark$\nchat_outReplyMessageText=$primaryColorDark$\nchat_inAudioDurationText=$primaryColor$\nlistSelectorSDK21=$primaryColor$\nchat_goDownButtonIcon=$primaryColor$\nchats_menuCloudBackgroundCats=$primaryBG$\nactionBarDefaultIcon=$primaryColorDark$\nchat_wallpaper=$primaryBG$\nchat_editDoneIcon=$primaryColor$\nchat_emojiPanelStickerPackSelector=$primaryColor$\nchat_replyPanelName=$primaryColor$\nfeaturedStickers_addedIcon=$primaryColor$\navatar_backgroundPink=-3080015\nchat_outViaBotNameText=$primaryColorDark$\nwindowBackgroundWhiteValueText=$primaryColor$\nactionBarActionModeDefaultIcon=$primaryColorDark$\nchats_message=$primaryColor$\navatar_subtitleInProfileBlue=$primaryColorDark$\nemptyListPlaceholder=$primaryColor$\nchat_inAudioSeekbarFill=$primaryColor$\nwindowBackgroundWhiteBlueText=$primaryColor$\nchat_goDownButtonCounterBackground=$primaryColor$\nchat_outReplyMediaMessageSelectedText=$primaryColor$\nchat_topPanelClose=$primaryColorDark$\nchat_outSentCheck=$primaryColorDark$\nchat_outMenuSelected=$primaryColor$\nchat_recordedVoiceDot=-5630976\nchat_outReplyLine=$primaryColorDark$\ninappPlayerPlayPause=$primaryColorDark$\ndialogBackgroundGray=$primaryBG3$\ncalls_callReceivedRedIcon=-5630976\ndialogButtonSelector=$primaryColorDark$\navatar_nameInMessageCyan=-16736086\nchat_outTimeText=$primaryColorDark$\nchat_inTimeSelectedText=$primaryColor$\nswitchTrack=$primaryBG2$\nchats_menuCloud=$primaryText$\nchat_emojiPanelIconSelected=$primaryText$\nchat_stickerReplyMessageText=$primaryText$\nchat_goDownButtonCounter=$primaryText$\nchats_menuItemText=$primaryText$\ndialogTextGray4=$primaryText$\ninappPlayerPerformer=$primaryText$\ndialogTextGray3=$primaryText$\nchat_replyPanelMessage=$primaryText$\nchat_emojiPanelTrendingTitle=$primaryText$\nchat_emojiPanelEmptyText=$primaryText$\nfiles_iconText=$primaryText$\nchats_secretName=$primaryText$\nactionBarDefaultSubtitle=$primaryText$\ndialogTextBlack=$primaryText$\ndialogTextGray2=$primaryText$\nchats_name=$primaryText$\nchat_linkSelectBackground=$primaryText$\nchats_menuPhone=$primaryText$\nactionBarDefaultSubmenuItem=$primaryText$\nchat_searchPanelText=$primaryText$\nchat_topPanelTitle=$primaryText$\ninappPlayerTitle=$primaryText$\nchats_muteIcon=$primaryText$\nwindowBackgroundWhiteBlackText=$primaryText$\nchat_messageTextIn=$primaryText$\nchat_messageTextOut=$primaryTextBubble$\nchat_messageLinkOut=$primaryTextBubble$\nchat_messagePanelText=$primaryText$\nchat_inFileNameText=$primaryText$\nchat_inVoiceSeekbar=$primaryText$\nchat_inAudioTitleText=$primaryText$\nchat_inVoiceSeekbarSelected=$primaryText$\nchat_inAudioSeekbar=$primaryText$\nchat_inContactNameText=$primaryText$\nchat_outVoiceSeekbarSelected=$primaryTextBubble$\nchat_outFileNameText=$primaryTextBubble$\nchat_outAudioTitleText=$primaryTextBubble$\nchat_outVoiceSeekbar=$primaryTextBubble$\nchat_outAudioSeekbar=$primaryTextBubble$\nchat_outContactNameText=$primaryTextBubble$\navatar_subtitleInProfilePink=-9961384\navatar_actionBarSelectorRed=-11204096\navatar_actionBarSelectorBlue=-16766123\navatar_actionBarIconViolet=-12844971\navatar_subtitleInProfileCyan=-16756651\navatar_backgroundActionBarViolet=-8912726\navatar_subtitleInProfileRed=-11204096\navatar_actionBarIconOrange=-11204096\navatar_actionBarIconPink=-9961384\navatar_actionBarSelectorGreen=-15575808\navatar_backgroundActionBarGreen=-14374400\navatar_backgroundActionBarBlue=-16755542\navatar_actionBarSelectorCyan=-16756651\navatar_backgroundActionBarPink=-3080015\navatar_subtitleInProfileViolet=-12844971\navatar_actionBarIconCyan=-16756651\navatar_actionBarSelectorViolet=-12844971\navatar_actionBarIconBlue=-16766123\navatar_actionBarSelectorPink=-9961384\navatar_actionBarIconRed=-11204096\navatar_subtitleInProfileGreen=-15575808\navatar_backgroundActionBarRed=-5630976\navatar_backgroundActionBarOrange=-3057408\navatar_actionBarSelectorOrange=-9950208\navatar_subtitleInProfileBlue=-16766123\navatar_actionBarIconGreen=-15575808\navatar_backgroundActionBarCyan=-16736086\navatar_subtitleInProfileOrange=-11204096\n';
	} else if (document.getElementById("theme-plus").checked) {var Palette = '<?xml version=\'1.0\' encoding=\'utf-8\' standalone=\'yes\' ?>\n<map>\n    <int name="chatsNameColor" value="$primaryText$" />\n    <int name="chatStatusColor" value="$primaryText$" />\n    <int name="chatsFavIndicatorColor" value="$primaryBG$" />\n    <int name="chatForwardColor" value="$primaryColor$" />\n    <int name="chatAttachTextColor" value="$primaryText$" />\n    <int name="contactsStatusColor" value="$primaryColor$" />\n    <int name="prefTitleColor" value="$primaryText$" />\n    <boolean name="usePlusTheme" value="true" />\n    <int name="chatLTimeColor" value="$primaryColor$" />\n    <int name="drawerOptionColor" value="$primaryText$" />\n    <string name="version">4.2.1.1</string>\n    <int name="contactsOnlineColor" value="$primaryColor$" />\n    <int name="chatEmojiViewTabIconColor" value="$primaryColor$" />\n    <int name="chatsMemberColor" value="$primaryColor$" />\n    <int name="chatsChecksColor" value="$primaryColor$" />\n    <int name="chatsTimeColor" value="$primaryColor$" />\n    <int name="chatsHeaderTitleColor" value="$primaryColorDark$" />\n    <int name="chatsRowColor" value="$primaryBG$" />\n    <int name="profileCreatorStarColor" value="$primaryText$" />\n    <int name="chatEditTextIconsColor" value="$primaryColor$" />\n    <int name="chatsMessageColor" value="$primaryColor$" />\n    <int name="chatRBubbleColor" value="$primaryColor$" />\n    <int name="chatsDividerColor" value="$primaryBG$" />\n    <int name="profileIconsColor" value="$primaryColor$" />\n    <int name="chatForwardRColor" value="$primaryColorDark$" />\n    <boolean name="drawerHeaderBGCheck" value="true" />\n    <int name="profileRowColor" value="$primaryBG$" />\n    <int name="prefHeaderStatusColor" value="$primaryColor$" />\n    <boolean name="chatsTabTitlesMode" value="false" />\n    <int name="profileAdminStarColor" value="$primaryColor$" />\n    <int name="chatMemberColor" value="$primaryColor$" />\n    <int name="chatSelectedMsgBGColor" value="-14606047" />\n    <int name="chatChecksColor" value="$primaryColorDark$" />\n    <int name="chatRTimeColor" value="$primaryColorDark$" />\n    <int name="chatsHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="chatAttachBGColor" value="$primaryBG$" />\n    <int name="contactsNameColor" value="$primaryText$" />\n    <int name="chatsHeaderTitle" value="4" />\n    <int name="prefShadowColor" value="$primaryBG$" />\n    <int name="prefDividerColor" value="$primaryBG$" />\n    <int name="chatsTabsTextSize" value="8" />\n    <int name="contactsRowColor" value="$primaryBG$" />\n    <int name="chatRTextColor" value="$primaryText$" />\n    <int name="chatHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="dialogColor" value="$primaryColor$" />\n    <int name="chatsGroupIconColor" value="$primaryColor$" />\n    <int name="chatsHeaderColor" value="$primaryColor$" />\n    <int name="chatsFloatingPencilColor" value="$primaryText$" />\n    <int name="drawerVersionColor" value="$primaryText$" />\n    <int name="profileHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="chatRLinkColor" value="$primaryColorDark$" />\n    <int name="drawerIconColor" value="$primaryColor$" />\n    <int name="chatsCountBGColor" value="$primaryColor$" />\n    <int name="chatNameColor" value="$primaryColorDark$" />\n    <int name="chatEmojiViewTabColor" value="$primaryText$" />\n    <int name="themeColor" value="$primaryColor$" />\n    <int name="prefHeaderIconsColor" value="$primaryColorDark$" />\n    <int name="drawerListColor" value="$primaryBG$" />\n    <int name="prefBGColor" value="$primaryBG$" />\n    <int name="chatsTypingColor" value="$primaryColor$" />\n    <int name="contactsHeaderIconsColor" value="$primaryColorDark$" />\n    <boolean name="drawerHideBGShadowCheck" value="true" />\n    <int name="contactsIconsColor" value="$primaryColor$" />\n    <int name="drawerPhoneColor" value="$primaryText$" />\n    <int name="chatHeaderColor" value="$primaryColor$" />\n    <int name="chatLBubbleColor" value="$primaryBG3$" />\n    <int name="chatsCountSilentBGColor" value="$primaryColorDark$" />\n    <int name="chatsMuteColor" value="$primaryText$" />\n    <int name="chatEditTextBGColor" value="$primaryBGTrans$" />\n    <int name="chatsHighlightSearchColor" value="$primaryColor$" />\n    <int name="chatEmojiViewBGColor" value="$primaryBG$" />\n    <int name="profileTitleColor" value="$primaryText$" />\n    <int name="contactsHeaderColor" value="$primaryColor$" />\n    <string name="date">1506185073208</string>\n    <int name="chatSolidBGColor" value="$primaryBG$" />\n    <int name="chatsMediaColor" value="$primaryColor$" />\n    <int name="chatLTextColor" value="$primaryText$" />\n    <int name="profileOnlineColor" value="$primaryColor$" />\n    <int name="chatsFloatingBGColor" value="$primaryColor$" />\n    <boolean name="chatSolidBGColorCheck" value="true" />\n    <int name="profileStatusColor" value="$primaryColorDark$" />\n    <int name="chatDateBubbleColor" value="2015437089" />\n    <int name="chatSendIconColor" value="$primaryColor$" />\n    <int name="chatOnlineColor" value="$primaryText$" />\n    <boolean name="chatShowContactAvatar" value="false" />\n    <int name="prefHeaderTitleColor" value="$primaryColorDark$" />\n    <int name="drawerListDividerColor" value="$primaryBG$" />\n    <int name="chatsPinnedMsgBGColor" value="$primaryBG$" />\n    <int name="chatTypingColor" value="$primaryText$" />\n    <int name="prefSummaryColor" value="$primaryText$" />\n    <int name="prefHeaderColor" value="$primaryColor$" />\n    <int name="chatEditTextColor" value="$primaryText$" />\n    <string name="themeName">Night Theme Generator https://nightapps.github.io/td-gen</string>\n    <int name="contactsHeaderTitleColor" value="$primaryColorDark$" />\n    <int name="profileSummaryColor" value="$primaryColor$" />\n</map>\n';}
		var primaryColor = convertToDec(primaryColor);
		var primaryColorDark = convertToDec(primaryColorDark);
		var primaryBG = convertToDec(primaryBG);
		var primaryBGTrans = convertToDec(primaryBGTrans);
		var primaryBG2 = convertToDec(primaryBG2);
		var primaryBG3 = convertToDec(primaryBG3);
		var primaryText = convertToDec(primaryText);
		var primaryTextBubble = convertToDec(primaryTextBubble);
		var Palette = Palette.replace(/\$primaryColor\$/g, primaryColor);
		var Palette = Palette.replace(/\$primaryColorDark\$/g, primaryColorDark);
		var Palette = Palette.replace(/\$primaryBG\$/g, primaryBG);
		var Palette = Palette.replace(/\$primaryBG2\$/g, primaryBG2);
		var Palette = Palette.replace(/\$primaryBG3\$/g, primaryBG3);
		var Palette = Palette.replace(/\$primaryBGTrans\$/g, primaryBGTrans);
		var Palette = Palette.replace(/\$primaryText\$/g, primaryText);
		var Palette = Palette.replace(/\$primaryTextBubble\$/g, primaryTextBubble);
		if (document.getElementById("theme-tandroid").checked){var filetype = ".attheme"}else if (document.getElementById("theme-plus").checked){var filetype = ".xml"}
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(Palette));
		element.setAttribute('download', 'Night - '+window.ThemeName+' / '+window.ColorName + filetype);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}catch(err){console.log(err);}
}