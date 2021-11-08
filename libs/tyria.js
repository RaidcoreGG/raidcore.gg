var map = document.getElementById("map");
var panorama = document.getElementById("panorama");

document.querySelector('#panorama .btn_exit').addEventListener('click', exitPanorama);

function showPanorama(id) {
	map.classList.add("hidden");
	panorama.classList.remove("hidden");
}

function exitPanorama() {
	map.classList.remove("hidden");
	panorama.classList.add("hidden");
}