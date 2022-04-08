var tooltip = document.createElement("div");
tooltip.id = "tooltip";
document.body.appendChild(tooltip);

document.onmouseover = function(e) {
	if(e.srcElement.dataset.tooltip != null) {
		tooltip.innerHTML = e.srcElement.dataset.tooltip;
		/*tooltip.innerHTML = "Y: " + e.Y;
		tooltip.innerHTML += "<br>cY: " + e.clientY;
		tooltip.innerHTML += "<br>sY: " + e.screenY;
		tooltip.innerHTML += "<br>oY: " + e.offsetY;*/
		tooltip.style.display = "block";
	} else {
		tooltip.style.display = "none";
	}
	
	if(e.srcElement.dataset.type == "gw2") {
		tooltip.classList.add("tooltip-gw2");
	} else {
		tooltip.classList.remove("tooltip-gw2");
	}
	
	if(e.srcElement.dataset.highlight == "true") {
		tooltip.classList.add("tooltip-highlight");
	} else {
		tooltip.classList.remove("tooltip-highlight");
	}
};

document.onmousemove = function(e) {
	//console.log(e);
	
	if(tooltip.style.display == "block") {
		if(document.body.offsetWidth <= tooltip.offsetWidth + e.pageX + 16) {
			tooltip.style.left = e.pageX - tooltip.offsetWidth - 3 + "px";
		} else {
			tooltip.style.left = e.pageX + 3 + "px";
		}
		
		if(document.body.offsetHeight <= tooltip.offsetHeight + e.pageY + 32) {
			tooltip.style.top = e.pageY - tooltip.offsetHeight - 3 + "px";
		} else {
			tooltip.style.top = e.pageY + 24 + "px";
		}
	}
}