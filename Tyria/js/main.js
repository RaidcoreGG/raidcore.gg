import * as leaflet from '../vendors/leaflet/leaflet-src.esm.js';
import * as pannellum from '../vendors/pannellum/pannellum.js';

const delay = ms => new Promise(res => setTimeout(res, ms));

class Map {
    
    map;
    southwest;
    southeast;
    basebounds = new leaflet.LatLngBounds({ lat: -71.5, lng: 77.625 }, { lat: -140.625, lng: 170.375 });

    constructor(){
        this.map = new leaflet.Map('map',
        {
            minZoom: 0,
            maxZoom: 4,
            crs: leaflet.CRS.Simple,
            maxBoundsViscosity: 1.0          
        }).setView([0,0], 0 );

        this.southwest = this.map.unproject([0,40500], this.map.getMaxZoom());
        this.northeast = this.map.unproject([40500,0], this.map.getMaxZoom());
        this.map.setMaxBounds(new leaflet.LatLngBounds(this.southwest, this.northeast));

        leaflet.tileLayer("https://tiles{s}.guildwars2.com/1/1/{z}/{x}/{y}.jpg",
        {
            minZoom: 0,
            maxZoom: 4,
            continuousWorld: true,
            subdomains: [1,2,3,4]
        }).addTo(this.map);

        this.map.fitBounds(this.basebounds);

        var marker1 = new leaflet.Marker([-115, 129.9]).addTo(this.map).on('click', this.showPanorama("verdant"), this);
        var marker2 = new leaflet.Marker([1, 1]).addTo(this.map).on('click', this.showPanorama("aerodrome"), this);
        var marker3 = new leaflet.Marker([115, -129.9]).addTo(this.map).on('click', this.showPanorama("largos"), this);
    }

    async showPanorama(id){
        document.querySelector('#map').classList.add('hidden');
        document.querySelector('#panorama').className = '';

		if(id == "verdant") {
        window.pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "src/pano_verdant.png",
            "autoLoad": true
        });}
		if(id == "aerodrome") {
		window.pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "src/pano_aerodrome.png",
            "autoLoad": true
        });}
		if(id == "largos") {
		window.pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "src/pano_largos.png",
            "autoLoad": true
        });}
    }
    hidePanorama(){
        var button = document.querySelector('#panorama .panoramaexit');
        var mapClass = document.querySelector('#map').className;

        document.querySelector('#panorama').innerHTML = "";
        document.querySelector('#panorama').appendChild(button);
        document.querySelector('#map').classList.remove('hidden');
        document.querySelector('#panorama').className = 'hidden';

        this.map.invalidateSize();
    }

}

const map = new Map();

document.querySelector('#panorama .panoramaexit').addEventListener('click', map.hidePanorama.bind(map));