// DarkRed 660033
// Red FF0000
// Blue 0000FF
// DarkBlue 003399
// Pink FF00FF
// Green 005500
// Purple 6600CC
//
function loadcoords(){
  alert("Function coming soon")
}
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



// MAP INITIALIZE 

function initialize() {
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  geocoder = new google.maps.Geocoder();
  google.maps.event.addListener(map, 'click', function(event) {
    alert(event.latLng);
  });
  
  
// Everett
	var cl01 = new google.maps.Polygon({
	  paths: l01,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Nortwest Everett',
	  center: {lat: 47.99255680507467, lng: -122.21383452415466 }
	});
	var cl02 = new google.maps.Polygon({
	  paths: l02,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Marina',
	  center: {lat: 48.019822935452986, lng: -122.20450043678284 }
	});
	var cl03 = new google.maps.Polygon({
	  paths: l03,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Delta',
	  center: {lat: 47.99239704919802, lng: -122.2012335062027 }
	});
	var cl04 = new google.maps.Polygon({
	  paths: l04,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Riverside',
	  center: {lat: 47.992393459172646, lng: -122.2012335062027 }
	});
	var cl05 = new google.maps.Polygon({
	  paths: l05,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Riverside East',
	  center: {lat: 47.97671523176901, lng: -122.19046711921692 }
	});
	var cl06 = new google.maps.Polygon({
	  paths: l06,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Bayside',
	  center: {lat: 47.99239166415985, lng: -122.20123015344143 }
	});
	var cl07 = new google.maps.Polygon({
	  paths: l07,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Port Gardner',
	  center: {lat: 47.97667954504037, lng: -122.20148529857397 }
	});
	var cl08 = new google.maps.Polygon({
	  paths: l08,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Port Gardner East',
	  center: {lat: 47.9644251945054, lng: -122.2008965536952 }
	});
	var cl09 = new google.maps.Polygon({
	  paths: l09,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Lowell North',
	  center: {lat: 47.9644251945054, lng: -122.20089621841908 }
	});
	var cl10 = new google.maps.Polygon({
	  paths: l10,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Glacier View',
	  center: {lat: 47.945686076699495, lng: -122.19987630844116 }
	});
	var cl11 = new google.maps.Polygon({
	  paths: l11,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Valley View',
	  center: {lat: 47.9210480911497, lng: -122.20761179924011 }
	});
	var cl12 = new google.maps.Polygon({
	  paths: l12,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'View Ridge Madison',
	  center: {lat: 47.93621176689039, lng: -122.21903499215841 }
	});
	var cl13 = new google.maps.Polygon({
	  paths: l13,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Glenwood',
	  center: {lat: 47.94363764549741, lng: -122.25320935249329 }
	});
	var cl14 = new google.maps.Polygon({
	  paths: l14,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Boulevard Bluffs',
	  center: {lat: 47.92349082660848, lng: -122.24043667316437 }
	});
	var cl15 = new google.maps.Polygon({
	  paths: l15,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Downtown Mukilteo',
	  center: {lat: 47.94995448506888, lng: -122.30817317962646 }
	});
	var cl16 = new google.maps.Polygon({
	  paths: l16,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Evergreen',
	  center: {lat: 47.92349801624089, lng: -122.2404420375824 }
	});
	var cl17 = new google.maps.Polygon({
	  paths: l17,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Harbour Pointe',
	  center: {lat: 47.88103840907988, lng: -122.30740070343018 }
	});
	var cl18 = new google.maps.Polygon({
	  paths: l18,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Mukilteo',
	  center: {lat: 47.86927597800497, lng: -122.27725267410278 }
	});
	var cl19 = new google.maps.Polygon({
	  paths: l19,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Holly',
	  center: {lat: 47.88943648740406, lng: -122.25840345025063 }
	});
	var cl20 = new google.maps.Polygon({
	  paths: l20,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Westmot',
	  center: {lat: 47.90733162547427, lng: -122.24168792366982 }
	});
	var cl21 = new google.maps.Polygon({
	  paths: l21,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Everett Mall South',
	  center: {lat: 47.88943693705184, lng: -122.258404456079 }
	});
	var cl22 = new google.maps.Polygon({
	  paths: l22,
	  strokeColor: '#660033',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.35,
	  label: 'Issaquah',
	  center: {lat: 47.573283112482144, lng: -122.09587097167969 }
	});
	
// Lake Stevens
	var cl23 = new google.maps.Polygon({
	  paths: l23,
	  strokeColor: '#FF00FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.35,
	  label: 'Lake Stevens',
	  center: {lat: 47.997108742226125, lng: -122.08646714687347 }
	});
	var cl24 = new google.maps.Polygon({
	  paths: l24,
	  strokeColor: '#FF00FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.35,
	  label: 'West Lake Stevens',
	  center: {lat: 47.96076102980758, lng: -122.06887722015381 }
	});
	var cl25 = new google.maps.Polygon({
	  paths: l25,
	  strokeColor: '#FF00FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.35,
	  label: 'Machias',
	  center: {lat: 48.000623833709476, lng: -122.06813223659992 }
	});
	
// Snohomish
	var cl26 = new google.maps.Polygon({
	  paths: l26,
	  strokeColor: '#005500',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.35,
	  label: 'Northwest Snohomish',
	  center: {lat: 47.93129997583024, lng: -122.1200879663229 }
	});
	var cl27 = new google.maps.Polygon({
	  paths: l27,
	  strokeColor: '#005500',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.35,
	  label: 'Fobes Hill',
	  center: {lat: 47.960939518210004, lng: -122.14922245591879 }
	});
	var cl28 = new google.maps.Polygon({
	  paths: l28,
	  strokeColor: '#005500',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.35,
	  label: 'Snohomish',
	  center: {lat: 47.93125122846973, lng: -122.1047980338335 }
	});
	var cl29 = new google.maps.Polygon({
	  paths: l29,
	  strokeColor: '#005500',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.35,
	  label: 'Bromart',
	  center: {lat: 47.90584782975482, lng: -122.0900871232152 }
	});

// Lynnwood - Edmonds
	var cl30 = new google.maps.Polygon({
	  paths: l30,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Lake Serene',
	  center: {lat: 47.86347833737415, lng: -122.33757019042969 }
	});
	var cl31 = new google.maps.Polygon({
	  paths: l31,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Picnic Point',
	  center: {lat: 47.8643087965169, lng: -122.30360269546509 }
	});
	var cl32 = new google.maps.Polygon({
	  paths: l32,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Meadowdale',
	  center: {lat: 47.83917386980714, lng: -122.30342634022236 }
	});
	var cl33 = new google.maps.Polygon({
	  paths: l33,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Downtown Lynnwood',
	  center: {lat: 47.83914326408497, lng: -122.2817849367857 }
	});
	var cl34 = new google.maps.Polygon({
	  paths: l34,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Perrinville',
	  center: {lat: 47.82144878476596, lng: -122.35221806913614 }
	});
	var cl35 = new google.maps.Polygon({
	  paths: l35,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Downtown Edmonds',
	  center: {lat: 47.83960549858354, lng: -122.35859870910645 }
	});
	var cl36 = new google.maps.Polygon({
	  paths: l36,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Edmonds Marina',
	  center: {lat: 47.801510004745005, lng: -122.39773750305176 }
	});
	var cl37 = new google.maps.Polygon({
	  paths: l37,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'College Place',
	  center: {lat: 47.799605633556666, lng: -122.35185865312815 }
	});
	var cl38 = new google.maps.Polygon({
	  paths: l38,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Woodway',
	  center: {lat: 47.77771702015147, lng: -122.36667718738317 }
	});
	var cl39 = new google.maps.Polygon({
	  paths: l39,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Esperance',
	  center: {lat: 47.77771814669373, lng: -122.36667886376381 }
	});
	var cl40 = new google.maps.Polygon({
	  paths: l40,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Mount Lake Terrace',
	  center: {lat: 47.77780601691542, lng: -122.34622199088335 }
	});
	var cl41 = new google.maps.Polygon({
	  paths: l41,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Alderwood Mall',
	  center: {lat: 47.81973267516136, lng: -122.28180304169655 }
	});
	var cl42 = new google.maps.Polygon({
	  paths: l42,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Brier',
	  center: {lat: 47.777329037542664, lng: -122.28648886084557 }
	});
	var cl43 = new google.maps.Polygon({
	  paths: l43,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Alderwood Manor',
	  center: {lat: 47.777077140199005, lng: -122.25722696632147 }
	});
	var cl44 = new google.maps.Polygon({
	  paths: l44,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Marta Lake',
	  center: {lat: 47.81421025787533, lng: -122.23259456455708 }
	});
	var cl45 = new google.maps.Polygon({
	  paths: l45,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Mill Creek',
	  center: {lat: 47.8399916660198, lng: -122.22307808697224 }
	});
	var cl46 = new google.maps.Polygon({
	  paths: l46,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'Silver Lake',
	  center: {lat: 47.87818552720337, lng: -122.20700595527887 }
	});
	var cl47 = new google.maps.Polygon({
	  paths: l47,
	  strokeColor: '#0000FF',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.35,
	  label: 'North Creek',
	  center: {lat: 47.791271837313474, lng: -122.22152676433325 }
	});
	
// Shoreline
	var cl48 = new google.maps.Polygon({
	  paths: l48,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Richmond Beach',
	  center: {lat: 47.74948136196793, lng: -122.38700866699219 }
	});
	var cl49 = new google.maps.Polygon({
	  paths: l49,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Sherwood',
	  center: {lat: 47.75597944951226, lng: -122.36384276300669 }
	});
	var cl50 = new google.maps.Polygon({
	  paths: l50,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Echo Lake',
	  center: {lat: 47.755980801928054, lng: -122.3638441041112 }
	});
	var cl51 = new google.maps.Polygon({
	  paths: l51,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Ridgecrest',
	  center: {lat: 47.73406524945243, lng: -122.3248528316617 }
	});
	var cl53 = new google.maps.Polygon({
	  paths: l53,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Briarcrest 2',
	  center: {lat: 47.733965353941144, lng: -122.31275707483292 }
	});
	var cl54 = new google.maps.Polygon({
	  paths: l54,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Lake Forest Park',
	  center: {lat: 47.74685480161139, lng: -122.28049378842115 }
	});
	var cl55 = new google.maps.Polygon({
	  paths: l55,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Ballinger',
	  center: {lat: 47.755655995721774, lng: -122.29924712330103 }
	});
	var cl56 = new google.maps.Polygon({
	  paths: l56,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Parkwood',
	  center: {lat: 47.73412162380989, lng: -122.35554467886686 }
	});
	var cl57 = new google.maps.Polygon({
	  paths: l57,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'The Highlands',
	  center: {lat: 47.7339854232579, lng: -122.37919807434082 }
	});
	
// North Seattle
	var cl58 = new google.maps.Polygon({
	  paths: l58,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Broadview',
	  center: {lat: 47.70508526413626, lng: -122.35542666167021 }
	});
	var cl59 = new google.maps.Polygon({
	  paths: l59,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Bitter Lake',
	  center: {lat: 47.70508594100531, lng: -122.35542733222246 }
	});
	var cl60 = new google.maps.Polygon({
	  paths: l60,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Northgate',
	  center: {lat: 47.69055988714493, lng: -122.34451040625572 }
	});
	var cl61 = new google.maps.Polygon({
	  paths: l61,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Lake City',
	  center: {lat: 47.697605775777745, lng: -122.30688001960516 }
	});
	var cl62 = new google.maps.Polygon({
	  paths: l62,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Wedgwood',
	  center: {lat: 47.69760667839932, lng: -122.30688035488129 }
	});
	var cl63 = new google.maps.Polygon({
	  paths: l63,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Ravenna',
	  center: {lat: 47.668517907263144, lng: -122.29019097983837 }
	});
	var cl64 = new google.maps.Polygon({
	  paths: l64,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Hawthorne Hills',
	  center: {lat: 47.668518810388164, lng: -122.290192656219 }
	});
	var cl65 = new google.maps.Polygon({
	  paths: l65,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Sand Point',
	  center: {lat: 47.66371215787028, lng: -122.26367097347975 }
	});
	var cl66 = new google.maps.Polygon({
	  paths: l66,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'University District',
	  center: {lat: 47.65304756736063, lng: -122.32235670089722 }
	});
	var cl67 = new google.maps.Polygon({
	  paths: l67,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Wallingford',
	  center: {lat: 47.65304847075327, lng: -122.32235603034496 }
	});
	var cl68 = new google.maps.Polygon({
	  paths: l68,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Fremont',
	  center: {lat: 47.665050243610644, lng: -122.3473196849227 }
	});
	var cl69 = new google.maps.Polygon({
	  paths: l69,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Greenwood',
	  center: {lat: 47.686935020207066, lng: -122.3444876074791 }
	});
	var cl70 = new google.maps.Polygon({
	  paths: l70,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Sunset Hill',
	  center: {lat: 47.665549928325, lng: -122.39835977554321 }
	});
	var cl71 = new google.maps.Polygon({
	  paths: l71,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Crown Hill',
	  center: {lat: 47.68693163468339, lng: -122.36604116857052 }
	});
	var cl72 = new google.maps.Polygon({
	  paths: l72,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Ballard',
	  center: {lat: 47.686932988892885, lng: -122.36604116857052 }
	});
	var cl73 = new google.maps.Polygon({
	  paths: l73,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Phinney Ridge',
	  center: {lat: 47.68693637441646, lng: -122.34448928385973 }
	});
	var cl74 = new google.maps.Polygon({
	  paths: l74,
	  strokeColor: '#6600CC',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.35,
	  label: 'Green Lake',
	  center: {lat: 47.665050695203156, lng: -122.3473210260272 }
	});
	
// Seattle
	var cl75 = new google.maps.Polygon({
	  paths: l75,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Magnolia',
	  center: {lat: 47.63540177990284, lng: -122.39030845463276 }
	});
	var cl76 = new google.maps.Polygon({
	  paths: l76,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Discovery Park',
	  center: {lat: 47.65212722797064, lng: -122.42176908999681 }
	});
	var cl77 = new google.maps.Polygon({
	  paths: l77,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Interbay',
	  center: {lat: 47.623723342895985, lng: -122.37224578857422 }
	});
	var cl78 = new google.maps.Polygon({
	  paths: l78,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'North Queen Anne',
	  center: {lat: 47.63990674557932, lng: -122.37617757171392 }
	});
	var cl79 = new google.maps.Polygon({
	  paths: l79,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Lower Queen Anne',
	  center: {lat: 47.61749555400884, lng: -122.34359946101904 }
	});
	var cl80 = new google.maps.Polygon({
	  paths: l80,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Queen Anne',
	  center: {lat: 47.62862225046296, lng: -122.34359677881002 }
	});
	var cl81 = new google.maps.Polygon({
	  paths: l81,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Westlake',
	  center: {lat: 47.62857525205512, lng: -122.33792424201965 }
	});
	var cl82 = new google.maps.Polygon({
	  paths: l82,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Eastlake',
	  center: {lat: 47.62850294672978, lng: -122.3278820514679 }
	});
	var cl83 = new google.maps.Polygon({
	  paths: l83,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'South Lake Union',
	  center: {lat: 47.61856317599249, lng: -122.34360013157129 }
	});
	var cl84 = new google.maps.Polygon({
	  paths: l84,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Pioneer Square',
	  center: {lat: 47.60257142450823, lng: -122.33426302671432 }
	});
	var cl85 = new google.maps.Polygon({
	  paths: l85,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Downtown Seattle',
	  center: {lat: 47.6038868882396, lng: -122.33818039298058 }
	});
	var cl86 = new google.maps.Polygon({
	  paths: l86,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Seattle Waterfront',
	  center: {lat: 47.602994845126226, lng: -122.34041299670935 }
	});
	var cl87 = new google.maps.Polygon({
	  paths: l87,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Capitol Hill',
	  center: {lat: 47.615287469013246, lng: -122.31277987360954 }
	});
	var cl88 = new google.maps.Polygon({
	  paths: l88,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Stevens',
	  center: {lat: 47.61528837305895, lng: -122.3127805441618 }
	});
	var cl89 = new google.maps.Polygon({
	  paths: l89,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Madison Park',
	  center: {lat: 47.626106420504456, lng: -122.2922981902957 }
	});
	var cl90 = new google.maps.Polygon({
	  paths: l90,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Montlake',
	  center: {lat: 47.63429722348722, lng: -122.29898024350405 }
	});
	var cl91 = new google.maps.Polygon({
	  paths: l91,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Squire Park',
	  center: {lat: 47.59928069877307, lng: -122.30221834033728 }
	});
	var cl92 = new google.maps.Polygon({
	  paths: l92,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Madison Madrona',
	  center: {lat: 47.6080021613312, lng: -122.30235379189253 }
	});
	var cl93 = new google.maps.Polygon({
	  paths: l93,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'First Hill',
	  center: {lat: 47.598408020375025, lng: -122.32074838131666 }
	});
	var cl94 = new google.maps.Polygon({
	  paths: l94,
	  strokeColor: '#006666',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#006666',fillOpacity: 0.35,
	  label: 'Leschi',
	  center: {lat: 47.59007298227701, lng: -122.28414058685303 }
	});
	
// South Seattle
	var cl95 = new google.maps.Polygon({
	  paths: l95,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Industrial District',
	  center: {lat: 47.55346486419091, lng: -122.31799006462097 }
	});
	var cl96 = new google.maps.Polygon({
	  paths: l96,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'North Beacon Hill',
	  center: {lat: 47.56082858072232, lng: -122.29337275028229 }
	});
	var cl97 = new google.maps.Polygon({
	  paths: l97,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Mount Baker',
	  center: {lat: 47.56082948570916, lng: -122.2933740913868 }
	});
	var cl98 = new google.maps.Polygon({
	  paths: l98,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Beacon Hill',
	  center: {lat: 47.53706683763688, lng: -122.28109862655401 }
	});
	var cl99 = new google.maps.Polygon({
	  paths: l99,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Seward Park',
	  center: {lat: 47.53699282136253, lng: -122.26094484329224 }
	});
	var cl100 = new google.maps.Polygon({
	  paths: l100,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Rainier Valley',
	  center: {lat: 47.522620367242595, lng: -122.25847721099854 }
	});
	var cl101 = new google.maps.Polygon({
	  paths: l101,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Rainier Beach',
	  center: {lat: 47.50386650826986, lng: -122.2185230255127 }
	});
	var cl102 = new google.maps.Polygon({
	  paths: l102,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Bryn Mawr Skyway',
	  center: {lat: 47.50047852284065, lng: -122.21901688724756 }
	});
	var cl103 = new google.maps.Polygon({
	  paths: l103,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Allentown',
	  center: {lat: 47.516881876321946, lng: -122.28831376880407 }
	});
	var cl104 = new google.maps.Polygon({
	  paths: l104,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: 'Georgetown',
	  center: {lat: 47.51627230592579, lng: -122.30529718101025 }
	});
	
// West Seattle
	var cl105 = new google.maps.Polygon({
	  paths: l105,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'North Admiral',
	  center: {lat: 47.57108311395889, lng: -122.35331106930971 }
	});
	var cl106 = new google.maps.Polygon({
	  paths: l106,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Alki',
	  center: {lat: 47.554054995211224, lng: -122.40220069885254 }
	});
	var cl107 = new google.maps.Polygon({
	  paths: l107,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'West Seattle',
	  center: {lat: 47.57064179117868, lng: -122.37612828612328 }
	});
	var cl108 = new google.maps.Polygon({
	  paths: l108,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'North Delridge',
	  center: {lat: 47.55377961664723, lng: -122.37633313983679 }
	});
	var cl109 = new google.maps.Polygon({
	  paths: l109,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Delridge',
	  center: {lat: 47.52828623943211, lng: -122.36043702811003 }
	});
	var cl110 = new google.maps.Polygon({
	  paths: l110,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Riverview',
	  center: {lat: 47.528265185417816, lng: -122.3409715667367 }
	});
	var cl111 = new google.maps.Polygon({
	  paths: l111,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'White Center',
	  center: {lat: 47.517490307467675, lng: -122.37688936293125 }
	});
	var cl112 = new google.maps.Polygon({
	  paths: l112,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Roxhill',
	  center: {lat: 47.517490307467675, lng: -122.376888692379 }
	});
	var cl113 = new google.maps.Polygon({
	  paths: l113,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Fauntleroy',
	  center: {lat: 47.497372111153915, lng: -122.38039970397949 }
	});
	var cl114 = new google.maps.Polygon({
	  paths: l114,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Highline',
	  center: {lat: 47.488514181910396, lng: -122.32655066996813 }
	});
	var cl115 = new google.maps.Polygon({
	  paths: l115,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'South Park',
	  center: {lat: 47.517248928482644, lng: -122.33009185642004 }
	});
	var cl116 = new google.maps.Polygon({
	  paths: l116,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Burien',
	  center: {lat: 47.43465236493952, lng: -122.31381822377443 }
	});
	var cl117 = new google.maps.Polygon({
	  paths: l117,
	  strokeColor: '#003399',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.35,
	  label: 'Latona',
	  center: {lat: 47.463516759510206, lng: -122.28979736566544 }
	});
	/*
	var cl118 = new google.maps.Polygon({
	  paths: l118,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl119 = new google.maps.Polygon({
	  paths: l119,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl120 = new google.maps.Polygon({
	  paths: l120,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl121 = new google.maps.Polygon({
	  paths: l121,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl122 = new google.maps.Polygon({
	  paths: l122,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl123 = new google.maps.Polygon({
	  paths: l123,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl124 = new google.maps.Polygon({
	  paths: l124,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl125 = new google.maps.Polygon({
	  paths: l125,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl126 = new google.maps.Polygon({
	  paths: l126,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl127 = new google.maps.Polygon({
	  paths: l127,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl128 = new google.maps.Polygon({
	  paths: l128,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl129 = new google.maps.Polygon({
	  paths: l129,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl130 = new google.maps.Polygon({
	  paths: l130,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl131 = new google.maps.Polygon({
	  paths: l131,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl132 = new google.maps.Polygon({
	  paths: l132,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl133 = new google.maps.Polygon({
	  paths: l133,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl134 = new google.maps.Polygon({
	  paths: l134,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl135 = new google.maps.Polygon({
	  paths: l135,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl136 = new google.maps.Polygon({
	  paths: l136,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl137 = new google.maps.Polygon({
	  paths: l137,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl138 = new google.maps.Polygon({
	  paths: l138,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl139 = new google.maps.Polygon({
	  paths: l139,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl140 = new google.maps.Polygon({
	  paths: l140,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl141 = new google.maps.Polygon({
	  paths: l141,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl142 = new google.maps.Polygon({
	  paths: l142,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl143 = new google.maps.Polygon({
	  paths: l143,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl144 = new google.maps.Polygon({
	  paths: l144,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl145 = new google.maps.Polygon({
	  paths: l145,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl146 = new google.maps.Polygon({
	  paths: l146,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl147 = new google.maps.Polygon({
	  paths: l147,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl148 = new google.maps.Polygon({
	  paths: l148,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl149 = new google.maps.Polygon({
	  paths: l149,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl150 = new google.maps.Polygon({
	  paths: l150,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl151 = new google.maps.Polygon({
	  paths: l151,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl152 = new google.maps.Polygon({
	  paths: l152,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl153 = new google.maps.Polygon({
	  paths: l153,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl154 = new google.maps.Polygon({
	  paths: l154,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl155 = new google.maps.Polygon({
	  paths: l155,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl156 = new google.maps.Polygon({
	  paths: l156,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl157 = new google.maps.Polygon({
	  paths: l157,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl158 = new google.maps.Polygon({
	  paths: l158,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl159 = new google.maps.Polygon({
	  paths: l159,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl160 = new google.maps.Polygon({
	  paths: l160,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl161 = new google.maps.Polygon({
	  paths: l161,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl162 = new google.maps.Polygon({
	  paths: l162,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl163 = new google.maps.Polygon({
	  paths: l163,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl164 = new google.maps.Polygon({
	  paths: l164,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl165 = new google.maps.Polygon({
	  paths: l165,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl166 = new google.maps.Polygon({
	  paths: l166,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl167 = new google.maps.Polygon({
	  paths: l167,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl168 = new google.maps.Polygon({
	  paths: l168,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl169 = new google.maps.Polygon({
	  paths: l169,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl170 = new google.maps.Polygon({
	  paths: l170,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl171 = new google.maps.Polygon({
	  paths: l171,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl172 = new google.maps.Polygon({
	  paths: l172,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl173 = new google.maps.Polygon({
	  paths: l173,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl174 = new google.maps.Polygon({
	  paths: l174,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl175 = new google.maps.Polygon({
	  paths: l175,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl176 = new google.maps.Polygon({
	  paths: l176,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl177 = new google.maps.Polygon({
	  paths: l177,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl178 = new google.maps.Polygon({
	  paths: l178,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl179 = new google.maps.Polygon({
	  paths: l179,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl180 = new google.maps.Polygon({
	  paths: l180,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl181 = new google.maps.Polygon({
	  paths: l181,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl182 = new google.maps.Polygon({
	  paths: l182,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl183 = new google.maps.Polygon({
	  paths: l183,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl184 = new google.maps.Polygon({
	  paths: l184,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl185 = new google.maps.Polygon({
	  paths: l185,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl186 = new google.maps.Polygon({
	  paths: l186,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl187 = new google.maps.Polygon({
	  paths: l187,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl188 = new google.maps.Polygon({
	  paths: l188,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl189 = new google.maps.Polygon({
	  paths: l189,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl190 = new google.maps.Polygon({
	  paths: l190,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl191 = new google.maps.Polygon({
	  paths: l191,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl192 = new google.maps.Polygon({
	  paths: l192,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl193 = new google.maps.Polygon({
	  paths: l193,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl194 = new google.maps.Polygon({
	  paths: l194,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl195 = new google.maps.Polygon({
	  paths: l195,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl196 = new google.maps.Polygon({
	  paths: l196,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl197 = new google.maps.Polygon({
	  paths: l197,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl198 = new google.maps.Polygon({
	  paths: l198,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl199 = new google.maps.Polygon({
	  paths: l199,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	var cl200 = new google.maps.Polygon({
	  paths: l200,
	  strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,
	  label: '',
	  center: 
	});
	*/
	cl01.setMap(map);cl02.setMap(map);cl03.setMap(map);cl04.setMap(map);cl05.setMap(map);
	cl06.setMap(map);cl07.setMap(map);cl08.setMap(map);cl09.setMap(map);cl10.setMap(map);
	cl11.setMap(map);cl12.setMap(map);cl13.setMap(map);cl14.setMap(map);cl15.setMap(map);
	cl16.setMap(map);cl17.setMap(map);cl18.setMap(map);cl19.setMap(map);cl20.setMap(map);
	cl21.setMap(map);cl22.setMap(map);cl23.setMap(map);cl24.setMap(map);cl25.setMap(map);
	cl26.setMap(map);cl27.setMap(map);cl28.setMap(map);cl29.setMap(map);cl30.setMap(map);
	cl31.setMap(map);cl32.setMap(map);cl33.setMap(map);cl34.setMap(map);cl35.setMap(map);
	cl36.setMap(map);cl37.setMap(map);cl38.setMap(map);cl39.setMap(map);cl40.setMap(map);
	cl41.setMap(map);cl42.setMap(map);cl43.setMap(map);cl44.setMap(map);cl45.setMap(map);
	cl46.setMap(map);cl47.setMap(map);cl48.setMap(map);cl49.setMap(map);cl50.setMap(map);
	cl51.setMap(map);cl53.setMap(map);cl54.setMap(map);cl55.setMap(map);cl56.setMap(map);
					cl57.setMap(map);cl58.setMap(map);cl59.setMap(map);cl60.setMap(map);
	cl61.setMap(map);cl62.setMap(map);cl63.setMap(map);cl64.setMap(map);cl65.setMap(map);
	cl66.setMap(map);cl67.setMap(map);cl68.setMap(map);cl69.setMap(map);cl70.setMap(map);
	cl71.setMap(map);cl72.setMap(map);cl73.setMap(map);cl74.setMap(map);cl75.setMap(map);
	cl76.setMap(map);cl77.setMap(map);cl78.setMap(map);cl79.setMap(map);cl80.setMap(map);
	cl81.setMap(map);cl82.setMap(map);cl83.setMap(map);cl84.setMap(map);
	cl85.setMap(map);cl86.setMap(map);cl87.setMap(map);cl88.setMap(map);cl89.setMap(map);
	cl90.setMap(map);cl91.setMap(map);cl92.setMap(map);cl93.setMap(map);cl94.setMap(map);
	cl95.setMap(map);cl96.setMap(map);cl97.setMap(map);cl98.setMap(map);cl99.setMap(map);
	cl100.setMap(map);cl101.setMap(map);cl102.setMap(map);cl103.setMap(map);cl104.setMap(map);
	cl105.setMap(map);cl106.setMap(map);cl107.setMap(map);cl108.setMap(map);cl109.setMap(map);
	cl110.setMap(map);cl111.setMap(map);cl112.setMap(map);cl113.setMap(map);cl114.setMap(map);
	cl115.setMap(map);cl116.setMap(map);cl117.setMap(map);/*cl118.setMap(map);cl119.setMap(map);
	cl120.setMap(map);cl121.setMap(map);cl122.setMap(map);cl123.setMap(map);cl124.setMap(map);
	cl125.setMap(map);cl126.setMap(map);cl127.setMap(map);cl128.setMap(map);cl129.setMap(map);
	cl130.setMap(map);cl131.setMap(map);cl132.setMap(map);cl133.setMap(map);cl134.setMap(map);
	cl135.setMap(map);cl136.setMap(map);cl137.setMap(map);cl138.setMap(map);cl139.setMap(map);
	cl140.setMap(map);cl141.setMap(map);cl142.setMap(map);cl143.setMap(map);cl144.setMap(map);
	cl145.setMap(map);cl146.setMap(map);cl147.setMap(map);cl148.setMap(map);cl149.setMap(map);
	cl150.setMap(map);cl151.setMap(map);cl152.setMap(map);cl153.setMap(map);cl154.setMap(map);
	cl155.setMap(map);cl156.setMap(map);cl157.setMap(map);cl158.setMap(map);cl159.setMap(map);
	cl160.setMap(map);cl161.setMap(map);cl162.setMap(map);cl163.setMap(map);cl164.setMap(map);
	cl165.setMap(map);cl166.setMap(map);cl167.setMap(map);cl168.setMap(map);cl169.setMap(map);
	cl170.setMap(map);cl171.setMap(map);cl172.setMap(map);cl173.setMap(map);cl174.setMap(map);
	cl175.setMap(map);cl176.setMap(map);cl177.setMap(map);cl178.setMap(map);cl179.setMap(map);
	cl180.setMap(map);cl181.setMap(map);cl182.setMap(map);cl183.setMap(map);cl184.setMap(map);
	cl185.setMap(map);cl186.setMap(map);cl187.setMap(map);cl188.setMap(map);cl189.setMap(map);
	cl190.setMap(map);cl191.setMap(map);cl192.setMap(map);cl193.setMap(map);cl194.setMap(map);
	cl195.setMap(map);cl196.setMap(map);cl197.setMap(map);cl198.setMap(map);cl199.setMap(map);*/
	cl01.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl01.label; console.log(infodata); var label = cl01.label;
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl01.center); infoWindow.open(map);
        });
	cl02.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl02.label; console.log(infodata); var label = cl02.label;
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl02.center); infoWindow.open(map);
        });
	cl03.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl03.label; console.log(infodata); var label = cl03.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl03.center); infoWindow.open(map);
        });
	cl04.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl04.label; console.log(infodata); var label = cl04.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl04.center); infoWindow.open(map);
        });
	cl05.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl05.label; console.log(infodata); var label = cl05.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl05.center); infoWindow.open(map);
        });
	cl06.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl06.label; console.log(infodata); var label = cl06.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl06.center); infoWindow.open(map);
        });
	cl07.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl07.label; console.log(infodata); var label = cl07.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl07.center); infoWindow.open(map);
        });
	cl08.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl08.label; console.log(infodata); var label = cl08.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl08.center); infoWindow.open(map);
        });
	cl09.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl09.label; console.log(infodata); var label = cl09.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl09.center); infoWindow.open(map);
        });
	cl10.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl10.label; console.log(infodata); var label = cl10.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl10.center); infoWindow.open(map);
        });
	cl11.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl11.label; console.log(infodata); var label = cl11.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl11.center); infoWindow.open(map);
        });
	cl12.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl12.label; console.log(infodata); var label = cl12.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl12.center); infoWindow.open(map);
        });
	cl13.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl13.label; console.log(infodata); var label = cl13.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl13.center); infoWindow.open(map);
        });
	cl14.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl14.label; console.log(infodata); var label = cl14.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl14.center); infoWindow.open(map);
        });
	cl15.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl15.label; console.log(infodata); var label = cl15.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl15.center); infoWindow.open(map);
        });
	cl16.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl16.label; console.log(infodata); var label = cl16.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl16.center); infoWindow.open(map);
        });
	cl17.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl17.label; console.log(infodata); var label = cl17.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl17.center); infoWindow.open(map);
        });
	cl18.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl18.label; console.log(infodata); var label = cl18.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl18.center); infoWindow.open(map);
        });
	cl19.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl19.label; console.log(infodata); var label = cl19.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl19.center); infoWindow.open(map);
        }); 
	cl20.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl20.label; console.log(infodata); var label = cl20.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl20.center); infoWindow.open(map);
        });
	cl21.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl21.label; console.log(infodata); var label = cl21.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl21.center); infoWindow.open(map);
        });
	cl22.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl22.label; console.log(infodata); var label = cl22.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl22.center); infoWindow.open(map);
        });
	cl23.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl23.label; console.log(infodata); var label = cl23.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl23.center); infoWindow.open(map);
        });
	cl24.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl24.label; console.log(infodata); var label = cl24.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl24.center); infoWindow.open(map);
        });
	cl25.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl25.label; console.log(infodata); var label = cl25.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl25.center); infoWindow.open(map);
        });
	cl26.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl26.label; console.log(infodata); var label = cl26.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl26.center); infoWindow.open(map);
        });
	cl27.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl27.label; console.log(infodata); var label = cl27.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl27.center); infoWindow.open(map);
        });
	cl28.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl28.label; console.log(infodata); var label = cl28.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl28.center); infoWindow.open(map);
        });
	cl29.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl29.label; console.log(infodata); var label = cl29.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl29.center); infoWindow.open(map);
        });
	cl30.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl30.label; console.log(infodata); var label = cl30.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl30.center); infoWindow.open(map);
        });
	cl31.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl31.label; console.log(infodata); var label = cl31.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl31.center); infoWindow.open(map);
        });
	cl32.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl32.label; console.log(infodata); var label = cl32.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl32.center); infoWindow.open(map);
        });
	cl33.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl33.label; console.log(infodata); var label = cl33.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl33.center); infoWindow.open(map);
        });
	cl34.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl34.label; console.log(infodata); var label = cl34.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl34.center); infoWindow.open(map);
        });
	cl35.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl35.label; console.log(infodata); var label = cl35.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl35.center); infoWindow.open(map);
        });
	cl36.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl36.label; console.log(infodata); var label = cl36.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl36.center); infoWindow.open(map);
        });
	cl37.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl37.label; console.log(infodata); var label = cl37.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl37.center); infoWindow.open(map);
        });
	cl38.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl38.label; console.log(infodata); var label = cl38.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl38.center); infoWindow.open(map);
        });
	cl39.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl39.label; console.log(infodata); var label = cl39.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl39.center); infoWindow.open(map);
        });
	cl40.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl40.label; console.log(infodata); var label = cl40.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl40.center); infoWindow.open(map);
        });
	cl41.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl41.label; console.log(infodata); var label = cl41.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl41.center); infoWindow.open(map);
        });
	cl42.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl42.label; console.log(infodata); var label = cl42.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl42.center); infoWindow.open(map);
        });
	cl43.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl43.label; console.log(infodata); var label = cl43.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl43.center); infoWindow.open(map);
        });
	cl44.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl44.label; console.log(infodata); var label = cl44.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl44.center); infoWindow.open(map);
        });
	cl45.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl45.label; console.log(infodata); var label = cl45.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl45.center); infoWindow.open(map);
        });
	cl46.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl46.label; console.log(infodata); var label = cl46.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl46.center); infoWindow.open(map);
        });
	cl47.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl47.label; console.log(infodata); var label = cl47.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl47.center); infoWindow.open(map);
        });
	cl48.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl48.label; console.log(infodata); var label = cl48.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl48.center); infoWindow.open(map);
        });
	cl49.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl49.label; console.log(infodata); var label = cl49.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl49.center); infoWindow.open(map);
        });
	cl50.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl50.label; console.log(infodata); var label = cl50.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl50.center); infoWindow.open(map);
        });
	cl51.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl51.label; console.log(infodata); var label = cl51.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl51.center); infoWindow.open(map);
        });
	cl53.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl53.label; console.log(infodata); var label = cl53.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl53.center); infoWindow.open(map);
        });
	cl54.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl54.label; console.log(infodata); var label = cl54.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl54.center); infoWindow.open(map);
        });
	cl55.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl55.label; console.log(infodata); var label = cl55.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl55.center); infoWindow.open(map);
        });
	cl56.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl56.label; console.log(infodata); var label = cl56.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl56.center); infoWindow.open(map);
        });
	cl57.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl57.label; console.log(infodata); var label = cl57.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl57.center); infoWindow.open(map);
        });
	cl58.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl58.label; console.log(infodata); var label = cl58.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl58.center); infoWindow.open(map);
        });
	cl59.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl59.label; console.log(infodata); var label = cl59.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl59.center); infoWindow.open(map);
        });
	cl60.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl60.label; console.log(infodata); var label = cl60.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl60.center); infoWindow.open(map);
        });
	cl61.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl61.label; console.log(infodata); var label = cl61.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl61.center); infoWindow.open(map);
        });
	cl62.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl62.label; console.log(infodata); var label = cl62.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl62.center); infoWindow.open(map);
        });
	cl63.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl63.label; console.log(infodata); var label = cl63.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl63.center); infoWindow.open(map);
        });
	cl64.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl64.label; console.log(infodata); var label = cl64.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl64.center); infoWindow.open(map);
        });
	cl65.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl65.label; console.log(infodata); var label = cl65.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl65.center); infoWindow.open(map);
        });
	cl66.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl66.label; console.log(infodata); var label = cl66.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl66.center); infoWindow.open(map);
        });
	cl67.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl67.label; console.log(infodata); var label = cl67.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl67.center); infoWindow.open(map);
        });
	cl68.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl68.label; console.log(infodata); var label = cl68.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl68.center); infoWindow.open(map);
        });
	cl69.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl69.label; console.log(infodata); var label = cl69.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl69.center); infoWindow.open(map);
        });
	cl70.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl70.label; console.log(infodata); var label = cl70.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl70.center); infoWindow.open(map);
        });
	cl71.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl71.label; console.log(infodata); var label = cl71.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl71.center); infoWindow.open(map);
        });
	cl72.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl72.label; console.log(infodata); var label = cl72.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl72.center); infoWindow.open(map);
        });
	cl73.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl73.label; console.log(infodata); var label = cl73.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl73.center); infoWindow.open(map);
        });
	cl74.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl74.label; console.log(infodata); var label = cl74.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl74.center); infoWindow.open(map);
        });
	cl75.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl75.label; console.log(infodata); var label = cl75.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl75.center); infoWindow.open(map);
        });
	cl76.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl76.label; console.log(infodata); var label = cl76.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl76.center); infoWindow.open(map);
        });
	cl77.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl77.label; console.log(infodata); var label = cl77.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl77.center); infoWindow.open(map);
        });
	cl78.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl78.label; console.log(infodata); var label = cl78.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl78.center); infoWindow.open(map);
        });
	cl79.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl79.label; console.log(infodata); var label = cl79.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl79.center); infoWindow.open(map);
        });
	cl80.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl80.label; console.log(infodata); var label = cl80.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl80.center); infoWindow.open(map);
        });
	cl81.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl81.label; console.log(infodata); var label = cl81.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl81.center); infoWindow.open(map);
        });
	cl82.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl82.label; console.log(infodata); var label = cl82.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl82.center); infoWindow.open(map);
        });
	cl83.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl83.label; console.log(infodata); var label = cl83.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl83.center); infoWindow.open(map);
        });
	cl84.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl84.label; console.log(infodata); var label = cl84.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl84.center); infoWindow.open(map);
        });
	cl85.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl85.label; console.log(infodata); var label = cl85.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl85.center); infoWindow.open(map);
        });
	cl86.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl86.label; console.log(infodata); var label = cl86.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl86.center); infoWindow.open(map);
        });
	cl87.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl87.label; console.log(infodata); var label = cl87.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl87.center); infoWindow.open(map);
        });
	cl88.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl88.label; console.log(infodata); var label = cl88.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl88.center); infoWindow.open(map);
        });
	cl89.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl89.label; console.log(infodata); var label = cl89.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl89.center); infoWindow.open(map);
        });
	cl90.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl90.label; console.log(infodata); var label = cl90.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl90.center); infoWindow.open(map);
        });
	cl91.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl91.label; console.log(infodata); var label = cl91.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl91.center); infoWindow.open(map);
        });
	cl92.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl92.label; console.log(infodata); var label = cl92.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl92.center); infoWindow.open(map);
        });
	cl93.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl93.label; console.log(infodata); var label = cl93.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl93.center); infoWindow.open(map);
        });
	cl94.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl94.label; console.log(infodata); var label = cl94.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl94.center); infoWindow.open(map);
        });
	cl95.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl95.label; console.log(infodata); var label = cl95.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl95.center); infoWindow.open(map);
        });
	cl96.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl96.label; console.log(infodata); var label = cl96.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl96.center); infoWindow.open(map);
        });
	cl97.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl97.label; console.log(infodata); var label = cl97.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl97.center); infoWindow.open(map);
        });
	cl98.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl98.label; console.log(infodata); var label = cl98.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl98.center); infoWindow.open(map);
        });
	cl99.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl99.label; console.log(infodata); var label = cl99.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl99.center); infoWindow.open(map);
        });
	cl100.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl100.label; console.log(infodata); var label = cl100.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl100.center); infoWindow.open(map);
        });
	cl101.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl101.label; console.log(infodata); var label = cl101.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl101.center); infoWindow.open(map);
        });
	cl102.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl102.label; console.log(infodata); var label = cl102.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl102.center); infoWindow.open(map);
        });
	cl103.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl103.label; console.log(infodata); var label = cl103.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl103.center); infoWindow.open(map);
        });
	cl104.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl104.label; console.log(infodata); var label = cl104.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl104.center); infoWindow.open(map);
        });
	cl105.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl105.label; console.log(infodata); var label = cl105.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl105.center); infoWindow.open(map);
        });
	cl106.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl106.label; console.log(infodata); var label = cl106.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl106.center); infoWindow.open(map);
        });
	cl107.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl107.label; console.log(infodata); var label = cl107.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl107.center); infoWindow.open(map);
        });
	cl108.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl108.label; console.log(infodata); var label = cl108.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl108.center); infoWindow.open(map);
        });
	cl109.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl109.label; console.log(infodata); var label = cl109.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl109.center); infoWindow.open(map);
        });
	cl110.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl110.label; console.log(infodata); var label = cl110.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl110.center); infoWindow.open(map);
        });
	cl111.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl111.label; console.log(infodata); var label = cl111.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl111.center); infoWindow.open(map);
        });
	cl112.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl112.label; console.log(infodata); var label = cl112.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl112.center); infoWindow.open(map);
        });
	cl113.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl113.label; console.log(infodata); var label = cl113.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl113.center); infoWindow.open(map);
        });
	cl114.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl114.label; console.log(infodata); var label = cl114.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl114.center); infoWindow.open(map);
        });
	cl115.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl115.label; console.log(infodata); var label = cl115.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl115.center); infoWindow.open(map);
        });
	cl116.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl116.label; console.log(infodata); var label = cl116.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl116.center); infoWindow.open(map);
        });
	cl117.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl117.label; console.log(infodata); var label = cl117.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl117.center); infoWindow.open(map);
        });
		/*
	cl118.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl118.label; console.log(infodata); var label = cl118.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl118.center); infoWindow.open(map);
        });
	cl119.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl119.label; console.log(infodata); var label = cl119.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl119.center); infoWindow.open(map);
        });
	cl120.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl120.label; console.log(infodata); var label = cl120.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl120.center); infoWindow.open(map);
        });
	cl121.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl121.label; console.log(infodata); var label = cl121.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl121.center); infoWindow.open(map);
        });
	cl122.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl122.label; console.log(infodata); var label = cl122.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl122.center); infoWindow.open(map);
        });
	cl123.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl123.label; console.log(infodata); var label = cl123.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl123.center); infoWindow.open(map);
        });
	cl124.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl124.label; console.log(infodata); var label = cl124.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl124.center); infoWindow.open(map);
        });
	cl125.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl125.label; console.log(infodata); var label = cl125.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl125.center); infoWindow.open(map);
        });
	cl126.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl126.label; console.log(infodata); var label = cl126.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl126.center); infoWindow.open(map);
        });
	cl127.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl127.label; console.log(infodata); var label = cl127.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl127.center); infoWindow.open(map);
        });
	cl128.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl128.label; console.log(infodata); var label = cl128.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl128.center); infoWindow.open(map);
        });
	cl129.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl129.label; console.log(infodata); var label = cl129.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl129.center); infoWindow.open(map);
        });
	cl130.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl130.label; console.log(infodata); var label = cl130.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl130.center); infoWindow.open(map);
        });
	cl131.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl131.label; console.log(infodata); var label = cl131.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl131.center); infoWindow.open(map);
        });
	cl132.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl132.label; console.log(infodata); var label = cl132.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl132.center); infoWindow.open(map);
        });
	cl133.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl133.label; console.log(infodata); var label = cl133.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl133.center); infoWindow.open(map);
        });
	cl134.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl134.label; console.log(infodata); var label = cl134.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl134.center); infoWindow.open(map);
        });
	cl135.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl135.label; console.log(infodata); var label = cl135.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl135.center); infoWindow.open(map);
        });
	cl136.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl136.label; console.log(infodata); var label = cl136.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl136.center); infoWindow.open(map);
        });
	cl137.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl137.label; console.log(infodata); var label = cl137.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl137.center); infoWindow.open(map);
        });
	cl138.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl138.label; console.log(infodata); var label = cl138.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl138.center); infoWindow.open(map);
        });
	cl139.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl139.label; console.log(infodata); var label = cl139.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl139.center); infoWindow.open(map);
        });
	cl140.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl140.label; console.log(infodata); var label = cl140.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl140.center); infoWindow.open(map);
        });
	cl141.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl141.label; console.log(infodata); var label = cl141.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl141.center); infoWindow.open(map);
        });
	cl142.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl142.label; console.log(infodata); var label = cl142.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl142.center); infoWindow.open(map);
        });
	cl143.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl143.label; console.log(infodata); var label = cl143.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl143.center); infoWindow.open(map);
        });
	cl144.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl144.label; console.log(infodata); var label = cl144.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl144.center); infoWindow.open(map);
        });
	cl145.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl145.label; console.log(infodata); var label = cl145.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl145.center); infoWindow.open(map);
        });
	cl146.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl146.label; console.log(infodata); var label = cl146.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl146.center); infoWindow.open(map);
        });
	cl147.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl147.label; console.log(infodata); var label = cl147.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl147.center); infoWindow.open(map);
        });
	cl148.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl148.label; console.log(infodata); var label = cl148.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl148.center); infoWindow.open(map);
        });
	cl149.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl149.label; console.log(infodata); var label = cl149.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl149.center); infoWindow.open(map);
        });
	cl150.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl150.label; console.log(infodata); var label = cl150.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl150.center); infoWindow.open(map);
        });
	cl151.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl151.label; console.log(infodata); var label = cl151.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl151.center); infoWindow.open(map);
        });
	cl152.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl152.label; console.log(infodata); var label = cl152.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl152.center); infoWindow.open(map);
        });
	cl153.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl153.label; console.log(infodata); var label = cl153.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl153.center); infoWindow.open(map);
        });
	cl154.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl154.label; console.log(infodata); var label = cl154.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl154.center); infoWindow.open(map);
        });
	cl155.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl155.label; console.log(infodata); var label = cl155.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl155.center); infoWindow.open(map);
        });
	cl156.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl156.label; console.log(infodata); var label = cl156.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl156.center); infoWindow.open(map);
        });
	cl157.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl157.label; console.log(infodata); var label = cl157.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl157.center); infoWindow.open(map);
        });
	cl158.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl158.label; console.log(infodata); var label = cl158.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl158.center); infoWindow.open(map);
        });
	cl159.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl159.label; console.log(infodata); var label = cl159.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl159.center); infoWindow.open(map);
        });
	cl160.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl160.label; console.log(infodata); var label = cl160.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl160.center); infoWindow.open(map);
        });
	cl161.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl161.label; console.log(infodata); var label = cl161.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl161.center); infoWindow.open(map);
        });
	cl162.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl162.label; console.log(infodata); var label = cl162.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl162.center); infoWindow.open(map);
        });
	cl163.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl163.label; console.log(infodata); var label = cl163.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl163.center); infoWindow.open(map);
        });
	cl164.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl164.label; console.log(infodata); var label = cl164.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl164.center); infoWindow.open(map);
        });
	cl165.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl165.label; console.log(infodata); var label = cl165.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl165.center); infoWindow.open(map);
        });
	cl166.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl166.label; console.log(infodata); var label = cl166.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl166.center); infoWindow.open(map);
        });
	cl167.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl167.label; console.log(infodata); var label = cl167.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl167.center); infoWindow.open(map);
        });
	cl168.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl168.label; console.log(infodata); var label = cl168.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl168.center); infoWindow.open(map);
        });
	cl169.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl169.label; console.log(infodata); var label = cl169.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl169.center); infoWindow.open(map);
        });
	cl170.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl170.label; console.log(infodata); var label = cl170.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl170.center); infoWindow.open(map);
        });
	cl171.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl171.label; console.log(infodata); var label = cl171.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl171.center); infoWindow.open(map);
        });
	cl172.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl172.label; console.log(infodata); var label = cl172.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl172.center); infoWindow.open(map);
        });
	cl173.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl173.label; console.log(infodata); var label = cl173.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl173.center); infoWindow.open(map);
        });
	cl174.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl174.label; console.log(infodata); var label = cl174.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl174.center); infoWindow.open(map);
        });
	cl175.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl175.label; console.log(infodata); var label = cl175.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl175.center); infoWindow.open(map);
        });
	cl176.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl176.label; console.log(infodata); var label = cl176.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl176.center); infoWindow.open(map);
        });
	cl177.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl177.label; console.log(infodata); var label = cl177.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl177.center); infoWindow.open(map);
        });
	cl178.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl178.label; console.log(infodata); var label = cl178.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl178.center); infoWindow.open(map);
        });
	cl179.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl179.label; console.log(infodata); var label = cl179.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl179.center); infoWindow.open(map);
        });
	cl180.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl180.label; console.log(infodata); var label = cl180.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl180.center); infoWindow.open(map);
        });
	cl181.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl181.label; console.log(infodata); var label = cl181.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl181.center); infoWindow.open(map);
        });
	cl182.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl182.label; console.log(infodata); var label = cl182.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl182.center); infoWindow.open(map);
        });
	cl183.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl183.label; console.log(infodata); var label = cl183.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl183.center); infoWindow.open(map);
        });
	cl184.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl184.label; console.log(infodata); var label = cl184.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl184.center); infoWindow.open(map);
        });
	cl185.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl185.label; console.log(infodata); var label = cl185.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl185.center); infoWindow.open(map);
        });
	cl186.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl186.label; console.log(infodata); var label = cl186.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl186.center); infoWindow.open(map);
        });
	cl187.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl187.label; console.log(infodata); var label = cl187.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl187.center); infoWindow.open(map);
        });
	cl188.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl188.label; console.log(infodata); var label = cl188.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl188.center); infoWindow.open(map);
        });
	cl189.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl189.label; console.log(infodata); var label = cl189.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl189.center); infoWindow.open(map);
        });
	cl190.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl190.label; console.log(infodata); var label = cl190.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl190.center); infoWindow.open(map);
        });
	cl191.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl191.label; console.log(infodata); var label = cl191.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl191.center); infoWindow.open(map);
        });
	cl192.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl192.label; console.log(infodata); var label = cl192.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl192.center); infoWindow.open(map);
        });
	cl193.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl193.label; console.log(infodata); var label = cl193.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl193.center); infoWindow.open(map);
        });
	cl194.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl194.label; console.log(infodata); var label = cl194.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl194.center); infoWindow.open(map);
        });
	cl195.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl195.label; console.log(infodata); var label = cl195.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl195.center); infoWindow.open(map);
        });
	cl196.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl196.label; console.log(infodata); var label = cl196.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl196.center); infoWindow.open(map);
        });
	cl197.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl197.label; console.log(infodata); var label = cl197.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl197.center); infoWindow.open(map);
        });
	cl198.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl198.label; console.log(infodata); var label = cl198.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl198.center); infoWindow.open(map);
        });
	cl199.addListener('click', function(event) { infoWindow = new google.maps.InfoWindow;
		var infodata = cl199.label; console.log(infodata); var label = cl199.label;				
		var contentString = '<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);
		infoWindow.setPosition(cl199.center); infoWindow.open(map);
        });
  */
  
  
  
  
  

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
      } else {
        alert("No results found");
      }
    } else {
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