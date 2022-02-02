function toggleCollapsible(source, id) {
	var obj = document.getElementById(id);
	
	if(source.classList.contains("collapsed")) {
		source.classList.add("expanded");
		source.classList.remove("collapsed");
		obj.style.display = "block";
	}
	else {
		source.classList.add("collapsed");
		source.classList.remove("expanded");
		obj.style.display = "none";
	}
}