function myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}
function sonar(sonido) {
    document.getElementById(sonido).play();
}

