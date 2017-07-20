function toggle(el) {
	var x = document.getElementById(el);
	var y = x.style.display;
	if(!y || y=="none") { 
		x.style.display="block";
		return;
	}
	else {
		x.style.display="none";
		return;
	}
}
function copied() {
	var x = document.getElementById("copied");
	x.style.display="block";
	setTimeout(function(){ x.style.display="none"; }, 2000);
}
function clearcoords() {
	document.getElementById("action").value="";
  toggle();
}
function nsearch() {
	var nloc = document.getElementById("search").value;
	geocoder.geocode( { 'address': nloc }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
				map.setCenter(results[0].geometry.location);
			} else {
				alert("No results found");
			}
		} else {
		alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

// MAP SETTINGS
var myOptions = {
	center: new google.maps.LatLng(41.914420, -87.666609),
	zoom: 10,
	mapTypeId: google.maps.MapTypeId.MAP
};

var drawingManager = new google.maps.drawing.DrawingManager({
	drawingMode: google.maps.drawing.OverlayType.POLYGON,
	drawingControl: true,
	drawingControlOptions: {
		position: google.maps.ControlPosition.TOP_CENTER,
		drawingModes: [ google.maps.drawing.OverlayType.POLYGON ]
	},
	polylineOptions: {
		clickable: false,
		zIndex: 1,
		editable: false
	},
	polygonOptions: {
		editable: false,
		strokeColor: '#000000',
		strokeOpacity: 1,
		strokeWeight: 1,
		fillColor: '#000000',
		fillOpacity: 0.15
	}
});

var map;
var geocoder;
var address = "seattle, wa";


function loadcoords(){
	// USER COORDINATES
	var uc = document.getElementById("action").value;
	var uc = uc.split("\n");
	
	jsonP = "[";																		// START VARIABLE
	for (ucl = 1; ucl < uc.length; ucl++) {
		var uics = uc[ucl].split(",");
		jsonP += " {";																	// START COORDINATES
		jsonP += "lat: "+ uics[0] + ", lng: " + uics[1];			// LAT AND LONG
		jsonP += "},";																	// END COORDINATES
	}
	jsonP += "]";																		// END VARIABLE
	console.log(jsonP);
	initialize(jsonP);
}

// MAP INITIALIZE 

function initialize(el) {
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		geocoder = new google.maps.Geocoder();
		google.maps.event.addListener(map, 'click', function(event) {
		alert(event.latLng);
	});

	if(el) {
		alert(el);
		var userCoordSettings = new google.maps.Polygon({
			paths: el,
			strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
			label: 'User Coords',
			center: {lat: 47.99255680507467, lng: -122.21383452415466 }
		});
	}
	
	userCoordSettings.setMap(map);

	cl01.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl01.label; console.log(infodata); var label = cl01.label;
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl01.center); infoWindow.open(map);
        });
		
	drawingManager.setMap(map);

	google.maps.event.addDomListener(drawingManager, 'polygoncomplete', function(polygon) {
		document.getElementById("action").value += "\n\n";
		path = polygon.getPath();
		for(var i = 0; i < path.length; i++) {
			document.getElementById("action").value += path.getAt(i).lat() + "," + path.getAt(i).lng();
			if (i != path.length-1) {
				document.getElementById("action").value += '\n';
			}
		}
		drawingManager.setOptions({
		drawingControl: true
		});
	});
	if (geocoder) {
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
					map.setCenter(results[0].geometry.location);
				}
				else {
					alert("No results found");
				}
			}
			else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
	}
}




// END MAP






function copyToClipboard(text) {
	alert(text);
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
	copied();
	console.info('Action:', e.action);
	console.info('Text:', e.text);
	console.info('Trigger:', e.trigger);
	e.clearSelection();
});

clipboard.on('error', function(e) {
	alert("Error copying.  Please manually copy.")
	console.error('Action:', e.action);
	console.error('Trigger:', e.trigger);
});

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(document.getElementById("map_canvas"), 'ready', function() { drawingManager.setMap(map) } );