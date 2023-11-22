// COLLAPSIBLE ITEMS
function toggleCollapsible(sender, id) {
	var obj = document.getElementById(id);

	if (sender.classList.contains("collapsed")) {
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

// COLLAPSIBLE ITEMS
function toggleCollapsibleT(sender, id) {
	var obj = document.getElementById(id);

	if (sender.classList.contains("collapsed")) {
		sender.classList.add("expanded");
		sender.classList.remove("collapsed");
		obj.style.display = "table-row";
	}
	else {
		sender.classList.add("collapsed");
		sender.classList.remove("expanded");
		obj.style.display = "none";
	}
}