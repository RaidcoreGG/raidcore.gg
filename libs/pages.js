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

function getTemplate(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("text/html");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

function getPage(page) {
	readFile("Pages/"+page+".html", function(text){
		document.getElementById("content").innerHTML = text;
		console.log("Pages/"+page+".html loaded");
		
		scrollTo(0, 0);
		
		switch(page) {
			case "addons":
				getAddons();
				break;
		}
	});
}
var addonTemplate;
	
window.onload = function() {
	getPage("main");
	getTemplate("templates/addon.html", function(text){
		addonTemplate = text;
		console.log("templates/addon.html loaded");
	});
};

function getAddons() {
	fetch("data/addons.json")
		.then(response => {  return response.json(); })
		.then(json => parseAddons(json));
}
function parseAddons(addons) {
	var addonList = document.getElementById("addon-list");
	
	for (var i = 0; i < addons.length; i++) {
		if(addons[i].id == null) { console.log(addons[i]); continue; }
		
		var curr = addonTemplate;
		//console.log(addons[i]);
		
		curr = curr.replace("{NAME}", addons[i].name);
		curr = curr.replace("{DOWNLOADCOUNT}", addons[i].downloadCount);
		curr = curr.replace("{LASTUPDATED}", addons[i].lastUpdated);
		curr = curr.replace("{UPLOADDATE}", addons[i].uploadDate);
		curr = curr.replace("{DESCRIPTION}", addons[i].description);
		curr = curr.replace("{DOWNLOAD}", addons[i].download);
		
		var authors = "";
		addons[i].authors.forEach(element => authors += "<a>" + element + "</a>, ");
		authors = authors.substr(0, authors.length-2);
		curr = curr.replace("{AUTHORS}", authors);
		
		var tags = "";
		addons[i].tags.forEach(element => tags += "<li class='tag tag-" + element + "'></li>");
		curr = curr.replace("{TAGS}", tags);
		
		addonList.innerHTML += curr;
	}
}