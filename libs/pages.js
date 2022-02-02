function readFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("text/html");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		} else if (rawFile.status == "404" && file != "Pages/404.html") {
			readFile("Pages/404.html", function(text){
			document.getElementById("content").innerHTML=text;
			});
		}
	}
	rawFile.send(null);
}

function getPage(page) {
	readFile("Pages/"+page+".html", function(text){
		document.getElementById("content").innerHTML=text;
		console.log("Pages/"+page+".html loaded");
	});
	
	toggleBanner(page == "coming-soon");
}

window.onload = function() {
	getPage("main");
	toggleBanner(true);
};

function toggleBanner(show) {
	var banner = document.getElementById("banner");
	
	if(show) {
		banner.style.display = "";
	}
	else {
		banner.style.display = "none";
	}
}