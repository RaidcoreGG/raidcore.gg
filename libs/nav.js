console.log("meme");

var menuItems = document.getElementsByClassName("main-menu");
		
function setActive(id) {
	var caller = menuItems[0];
	for(var i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove("active");
		
		var href = menuItems[i].href;
		href = href.split("#")[1];
		
		if(href == id) {
			caller = menuItems[i];
		}
	}
	
	caller.classList.add("active");
}

var contentBody = document.getElementById("content-container");
var sections = contentBody.getElementsByTagName("section");
var closest = sections[0];

setActive(closest);

contentBody.addEventListener("scroll", () => {
	var prevDiff = 99999;
	for(var i = 0; i < sections.length; i++) {
		var diff = sections[i].offsetTop - contentBody.scrollTop;
		if(diff < 0) { diff *= -1; }
		//console.log(sections[i].id + " el:" + sections[i].offsetTop + " diff:" + (sections[i].offsetTop - contentBody.scrollTop));
		//console.log(sections[i].id + " proximity:" + diff);
		if(diff < prevDiff) {
			closest = sections[i];
			prevDiff = diff;
			setActive(closest.id);
		}
	}
	//console.log(contentBody.scrollTop);
	//console.log(prevDiff);
	//console.log(closest.id);
});