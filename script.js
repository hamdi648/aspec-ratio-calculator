

var form = document.getElementById('form');
var number = document.getElementById('number');
var wnumber = document.getElementById('wnumber');
var sixteenval = document.getElementById("radiosixteen").value;

function sixteen(x) {
	var y = x/16;
	var q = y*9;
	alert("the height is " + q);
}

function four(c) {
	var p = c/4;
	var e = p*3;
	alert("the height is " + e);
}

function three(j) {
	var w = j/3;
	var r = w*4;
	alert("the width is " + r);
}

function nine(t) {
	var v = t/9;
	var a = v*16;
	alert("the width is " + a);
}

function twentyone(g) {
	var u = g/21;
	var n = u*9;
	alert("the height is " + n);
}

function twnine(h) {
	var i = h/9;
	var l = i*21;
	alert("the width is " + l)
}


//chooses to calculate the height or the width
form.onsubmit = function() {
	if (document.getElementById("heightbox").checked === true) {
		//chooses the calculation - 16:9 or else 4:3 if calculating height
		if (document.getElementById("radiosixteen").checked === true) {
			sixteen(number.value);
		} else if (document.getElementById("radiofour").checked === true) {
			four(number.value);
		} else {
			twentyone(number.value)
		}


	} else {
		//chooses the calculation - 16:9 or else 4:3 if calculating width
		if(document.getElementById("radiosixteen").checked === true) {
			nine(wnumber.value);
		} else if (document.getElementById("radiofour").checked === true) {
			three(wnumber.value);
		} else {
			twnine(wnumber.value);
		}
	}
}


var w_box = $("#widthbox");
var h_box = $("#heightbox");

var the_height = $("#theheight");
var the_width = $("#thewidth");

w_box.change(function(){
	the_height.show();
	the_width.hide();
});

h_box.change(function(){
	the_height.hide();
	the_width.show();
});







