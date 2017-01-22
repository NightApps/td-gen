$(document).ready(function(){
      changeColor();
      showHideBox();
	  $("#extendedColorScheme-select").hide();
      $("#CustomColor-select").hide();
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
]

function changeColor(){
dupCheck = localStorage.getItem('dupCheck');
var nightColors = ["red", "orange", "yellow", "green", "cyan", "blue", "violet", "pink"];
var piColor = nightColors[Math.floor(Math.random()*nightColors.length)];
if (dupCheck == piColor) changeColor();
document.getElementsByTagName("nav")[0].style.background='var(--night-'+piColor+')';
localStorage.setItem('dupCheck', piColor);
}

function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementsByTagName("nav")[0].style.backgroundColor = '#' + jscolor
}

function showHideBox(){
$("input[name$='accent-Select']").click(function() {
        var test = $(this).attr('id');
		var test = test.replace("theme-", "");
		var test = '#'+test+"-select";
		console.log(test);
        $("#accent-boxes select").hide();
        $("#accent-boxes input").hide();
        $(test).show();
    });
}
	
function colorizeSelectOptions(array){
	document.write('<select id="'+array[0][0]+'-select" onchange="colorSelectBox(this,'+array[0][0]+')" class="browser-default">\n<option style="background:#262626;" value="" disabled selected>Choose your option</option>');
	for (i = 1; i < array.length; i++) {
    document.write('<option value="'+array[i][0]+'" style="background:'+array[i][1]+' !important;">'+array[i][0].replace("night-", "")+'</option>');
}
	document.write('</select>');
}

function colorSelectBox(option, array){
	//console.log(option.value);
	var name = option.value
	for(var i = 1; i < array.length; i++) {
   if(array[i][0] === name) {
     option.style.backgroundColor = array[i][1];
	 document.getElementsByTagName("nav")[0].style.backgroundColor=array[i][1];
   }
}
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