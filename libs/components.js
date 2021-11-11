function readFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("text/html");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		} else if (rawFile.status == "404") {
			readFile("Pages/404.html", function(text){
				callback(text);
			});
		}
	}
	rawFile.send(null);
}

function getComponent(component) {
	readFile("Components/"+component+".html", function(text){
		document.getElementById(component).innerHTML=text;
		console.log("Components/"+component+".html loaded");
	});
}

function getPage(page) {
	readFile("Pages/"+page+".html", function(text){
		document.getElementById("content").innerHTML=text;
		console.log("Pages/"+page+".html loaded");
	});
}

window.onload = function() {
	getComponent("header");
	getComponent("footer");
	getPage("coming-soon");
};