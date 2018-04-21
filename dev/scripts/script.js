const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu-overlay');
const menuExit = document.querySelector('.menu-exit');
const body = document.querySelector('body')

hamburger.addEventListener('click', function(e) {
	hamburger.classList.toggle("is-active");
	overlay.classList.remove('hidden');
	body.classList.toggle('noscroll');
});

menuExit.addEventListener('click', function() {
	overlay.classList.toggle('hidden');
	body.classList.toggle('noscroll');
});

// add X into DOM next to menu