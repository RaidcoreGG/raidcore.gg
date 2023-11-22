// TAB CONTROL
function switchTab(sender, id) {
	var menuItems = sender.parentElement.children;

	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.add("btn-secondary");
		sender.classList.remove("btn-primary");
	}
	sender.classList.remove("btn-secondary");
	sender.classList.add("btn-primary");

	var tabPages = sender.parentElement.parentElement.children[1].children;

	for (var i = 0; i < tabPages.length; i++) {
		tabPages[i].style.display = "none";
	}

	document.getElementById(id).style.display = "block";
}