// COLLAPSIBLE ITEMS
function toggleCollapsible(sender, id) {
	var obj = document.getElementById(id);
	
	if(sender.classList.contains("collapsed")) {
		sender.classList.add("expanded");
		sender.classList.remove("collapsed");
		obj.style.display = "block";
	}
	else {
		sender.classList.add("collapsed");
		sender.classList.remove("expanded");
		obj.style.display = "none";
	}
}

// TAB CONTROL
function switchTab(sender, targetID) {
	var menuItems = sender.parentElement.children;
	
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.add("tab-btn-inactive");
	}
	sender.classList.remove("tab-btn-inactive");
	
	var tabPages = sender.parentElement.parentElement.children[1].children;
	
	for (var i = 0; i < tabPages.length; i++) {
		tabPages[i].style.display = "none";
	}
	
	document.getElementById(targetID).style.display = "block";
}

// ADDONS
function searchAddons() {
	var term = document.getElementById("filter-search").value.toLowerCase();
	
	var addons = document.getElementsByClassName("addon");
	
	for(var i = 1; i < addons.length; i++) {
		var temp = addons[i].innerHTML.toLowerCase();
		if(temp.includes(term) || term == "") {
			addons[i].style.display = "block";
		}
		else {
			addons[i].style.display = "none";
		}
	}
}