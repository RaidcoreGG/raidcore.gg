window.onload = function() {
	document.getElementById("header").innerHTML="" +
		"<div id='header-content'>" +
			"<a href='index.html' id='header-logo'></a>" +
			"<a class='locked'>GLOBAL STATS</a>" +
			"<a class='locked'>LEADERBOARDS</a>" +
			"<a class='locked'>ADDONS</a>" +
			"<a class='locked'>CLIENT</a>" +
			"<a class='locked'>EXPLORE TYRIA</a>" +
			"<a href='info.html'>ABOUT</a>" +
		"</div>";
	
	document.getElementById("footer").innerHTML="" +
		"<div id='footer-left'>" +
			"Built with <span class='uwu'>&#9825;</span> by <a href='https://youtube.com/DeltaGW2' target='_blank'>Delta</a>" +
		"</div>" +
		"<div id='footer-right'>" +
			"&#169; 2018 - 2021 Raidcore | <a>Legal</a> • <a href='contact.html'>Contact Us</a>" +
		"</div>";
};