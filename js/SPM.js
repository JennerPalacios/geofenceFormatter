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

  // ADD GMAP GEOFENCE HERE

//################################################
//		ZONE NAME: Northwest Everett
//################################################
var loc_01=[
	{lat: 47.99255680507467, lng: -122.21383452415466},{lat: 47.992389869147, lng: -122.20122814178467},{lat: 48.0016207946144, lng: -122.20099478960037},{lat: 48.0036056855108, lng: -122.20021963119507},{lat: 48.01165932339874, lng: -122.19007015228271},{lat: 48.01631004939964, lng: -122.18762397766113},{lat: 48.01831949257984, lng: -122.19247341156006},{lat: 48.019812171101385, lng: -122.20448970794678},{lat: 48.018463021238745, lng: -122.20338463783264},{lat: 48.01666170760967, lng: -122.20675349235535},{lat: 48.009890071354235, lng: -122.21324980258942},{lat: 48.00796284539459, lng: -122.21411347389221},{lat: 48.004998293928836, lng: -122.21425294876099},{lat: 48.00284475987267, lng: -122.21397399902344},{lat: 47.997417455283504, lng: -122.21373796463013}
];

var zone_01=new google.maps.Polygon({paths: loc_01,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Northwest Everett',center: {lat: 47.99255680507467, lng: -122.21383452415466 }});

zone_01.setMap(map);

zone_01.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_01.label;var label=zone_01.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_01.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Marina
//################################################
var loc_02=[
	{lat: 48.019822935452986, lng: -122.20450043678284},{lat: 48.01846660945011, lng: -122.20338463783264},{lat: 48.01666350177807, lng: -122.20675349235535},{lat: 48.009890519955235, lng: -122.21325047314167},{lat: 48.00796306970349, lng: -122.21411380916834},{lat: 48.005000088503046, lng: -122.21425294876099},{lat: 48.00284610585952, lng: -122.21397466957569},{lat: 47.99741610915501, lng: -122.21373829990625},{lat: 47.992559497585226, lng: -122.21383452415466},{lat: 47.98962008994587, lng: -122.21423149108887},{lat: 47.98847120725541, lng: -122.21367359161377},{lat: 47.9820657175089, lng: -122.21425294876099},{lat: 47.98337273175977, lng: -122.2212266921997},{lat: 47.999657364467666, lng: -122.22564697265625},{lat: 48.00703688999151, lng: -122.22375869750977},{lat: 48.018463021238745, lng: -122.21654891967773}
];
var zone_02=new google.maps.Polygon({paths: loc_02,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Marina',center: {lat: 48.019822935452986, lng: -122.20450043678284 }});
zone_02.setMap(map);
zone_02.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_02.label;var label=zone_02.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_02.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Delta
//################################################
var loc_03=[
	{lat: 47.99239704919802, lng: -122.2012335062027},	{lat: 47.99214754183944, lng: -122.17936277389526},	{lat: 47.99534976049116, lng: -122.18054294586182},	{lat: 48.0030170459058, lng: -122.17663764953613},	{lat: 48.01168803287057, lng: -122.1795129776001},	{lat: 48.01630960085447, lng: -122.18762330710888},	{lat: 48.011660220569986, lng: -122.19007015228271},	{lat: 48.003606582822115, lng: -122.20021963119507},	{lat: 48.0016207946144, lng: -122.20099478960037}
];
var zone_03=new google.maps.Polygon({paths: loc_03,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Delta',center: {lat: 47.99239704919802, lng: -122.2012335062027 }});
zone_03.setMap(map);
zone_03.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_03.label;var label=zone_03.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_03.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Riverside
//################################################
var loc_04=[
	{lat: 47.992393459172646, lng: -122.2012335062027},	{lat: 47.97667932059547, lng: -122.2014856338501},	{lat: 47.97671523176901, lng: -122.19046711921692},	{lat: 47.979509044508035, lng: -122.18940496444702},	{lat: 47.98467971291763, lng: -122.18356847763062},	{lat: 47.989892945826455, lng: -122.18294620513916},	{lat: 47.99216908209062, lng: -122.18104183673859}
];
var zone_04=new google.maps.Polygon({paths: loc_04,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Riverside',center: {lat: 47.992393459172646, lng: -122.2012335062027 }});
zone_04.setMap(map);
zone_04.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_04.label;var label=zone_04.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_04.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Riverside East
//################################################
var loc_05=[
	{lat: 47.97671523176901, lng: -122.19046711921692},	{lat: 47.976718822884976, lng: -122.18568205833435},	{lat: 47.979221769966045, lng: -122.18180894851685},	{lat: 47.98008358879643, lng: -122.17554330825806},	{lat: 47.983688708259656, lng: -122.16796875},	{lat: 47.98864354128941, lng: -122.1724534034729},	{lat: 47.992149336860734, lng: -122.17936545610428},	{lat: 47.99216683831489, lng: -122.1810445189476},	{lat: 47.989892945826455, lng: -122.18294687569141},	{lat: 47.98467791763655, lng: -122.18356981873512},	{lat: 47.979509044508035, lng: -122.18940529972315}
];
var zone_05=new google.maps.Polygon({paths: loc_05,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Riverside East',center: {lat: 47.97671523176901, lng: -122.19046711921692 }});
zone_05.setMap(map);
zone_05.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_05.label;var label=zone_05.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_05.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bayside
//################################################
var loc_06=[
	{lat: 47.99239166415985, lng: -122.20123015344143},	{lat: 47.99255680507467, lng: -122.21383418887854},	{lat: 47.98962053872316, lng: -122.21423149108887},	{lat: 47.98847143164905, lng: -122.21367359161377},	{lat: 47.982065941930394, lng: -122.21425261348486},	{lat: 47.976435123952946, lng: -122.21422880887985},	{lat: 47.97667954504037, lng: -122.20148496329784}
];
var zone_06=new google.maps.Polygon({paths: loc_06,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Bayside',center: {lat: 47.99239166415985, lng: -122.20123015344143 }});
zone_06.setMap(map);
zone_06.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_06.label;var label=zone_06.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_06.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Port Gardner
//################################################
var loc_07=[{lat:47.97667954504037,lng:-122.20148529857397},{lat:47.976434899506984,lng:-122.21422914415598},{lat:47.98206616635188,lng:-122.21425261348486},{lat:47.98337295617559,lng:-122.22122702747583},{lat:47.96191052921869,lng:-122.24581718444824},{lat:47.957653661192865,lng:-122.24103212356567},{lat:47.95674656170277,lng:-122.22976416349411},{lat:47.959812673537854,lng:-122.21092700958252},{lat:47.963245892120526,lng:-122.21077546477318},{lat:47.963598810106134,lng:-122.20454335212708},{lat:47.96442497000723,lng:-122.20089554786682}];
var zone_07=new google.maps.Polygon({paths: loc_07,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Port Gardner',center: {lat: 47.97667954504037, lng: -122.20148529857397 }});
zone_07.setMap(map);
zone_07.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_07.label;var label=zone_07.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_07.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Port Gardner East
//################################################
var loc_08=[{lat:47.9644251945054,lng:-122.2008965536952},{lat:47.964187001390606,lng:-122.19747170805931},{lat:47.96460456823724,lng:-122.18878269195557},{lat:47.96698957352149,lng:-122.18890070915222},{lat:47.97208248416854,lng:-122.18740940093994},{lat:47.975558879434246,lng:-122.18719482421875},{lat:47.976720618442904,lng:-122.18568474054337},{lat:47.97671568065853,lng:-122.19046778976917},{lat:47.9766799939302,lng:-122.20148529857397}];
var zone_08=new google.maps.Polygon({paths: loc_08,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Port Gardner East',center: {lat: 47.9644251945054, lng: -122.2008965536952 }});
zone_08.setMap(map);
zone_08.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_08.label;var label=zone_08.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_08.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lowell North
//################################################
var loc_09=[{lat:47.9644251945054,lng:-122.20089621841908},{lat:47.964187674888215,lng:-122.19747237861156},{lat:47.96460411924246,lng:-122.18878202140331},{lat:47.96281574200239,lng:-122.18798875808716},{lat:47.960660447392144,lng:-122.18631505966187},{lat:47.95731237810493,lng:-122.18687295913696},{lat:47.951362912859835,lng:-122.190842628479},{lat:47.949120907682776,lng:-122.19152927398682},{lat:47.947856143904566,lng:-122.1902847290039},{lat:47.94791363383868,lng:-122.17981338500977},{lat:47.94582598960648,lng:-122.17975974082947},{lat:47.94568585211989,lng:-122.19987630844116}];
var zone_09=new google.maps.Polygon({paths: loc_09,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Lowell North',center: {lat: 47.9644251945054, lng: -122.20089621841908 }});
zone_09.setMap(map);
zone_09.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_09.label;var label=zone_09.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_09.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Glacier View
//################################################
var loc_10=[{lat:47.945686076699495,lng:-122.19987630844116},{lat:47.936207049853984,lng:-122.1995360031724},{lat:47.93621131764884,lng:-122.21903398633003},{lat:47.94364977327548,lng:-122.21701629459858},{lat:47.950576066351466,lng:-122.21399813890457},{lat:47.9559041124676,lng:-122.2128877043724},{lat:47.959813122574324,lng:-122.21092667430639},{lat:47.96324611662385,lng:-122.21077512949705},{lat:47.96359925910967,lng:-122.20454335212708},{lat:47.96442474550905,lng:-122.20089621841908}];
var zone_10=new google.maps.Polygon({paths: loc_10,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Glacier View',center: {lat: 47.945686076699495, lng: -122.19987630844116 }});
zone_10.setMap(map);
zone_10.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_10.label;var label=zone_10.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_10.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Valley View
//################################################
var loc_11=[{lat:47.9210480911497,lng:-122.20761179924011},{lat:47.919477058319856,lng:-122.18024253845215},{lat:47.9261922606358,lng:-122.17867612838745},{lat:47.93552127802976,lng:-122.18024253845215},{lat:47.945828684554435,lng:-122.17976108193398},{lat:47.945685627540264,lng:-122.19987563788891},{lat:47.93620749909558,lng:-122.1995360031724}];
var zone_11=new google.maps.Polygon({paths: loc_11,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Valley View',center: {lat: 47.945686076699495, lng: -122.19987630844116 }});
zone_11.setMap(map);
zone_11.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_11.label;var label=zone_11.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_11.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: View Ridge Madison
//################################################
var loc_12=[{lat:47.93621176689039,lng:-122.21903499215841},{lat:47.93645750142994,lng:-122.23180800676346},{lat:47.93732003389691,lng:-122.23487377166748},{lat:47.94437788392301,lng:-122.24303305149078},{lat:47.95368026790498,lng:-122.24744528532028},{lat:47.95696031529409,lng:-122.24753379821777},{lat:47.960360495097625,lng:-122.24407643079758},{lat:47.95765388572048,lng:-122.2410324588418},{lat:47.95674656170277,lng:-122.22976449877024},{lat:47.959813122574324,lng:-122.21092734485865},{lat:47.955904561538006,lng:-122.21288803964853},{lat:47.95057629090985,lng:-122.21399813890457},{lat:47.94364954868703,lng:-122.2170166298747}];
var zone_12=new google.maps.Polygon({paths: loc_12,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'View Ridge Madison',center: {lat: 47.93621176689039, lng: -122.21903499215841 }});
zone_12.setMap(map);
zone_12.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_12.label;var label=zone_12.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_12.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Glenwood
//################################################
var loc_13=[{lat:47.94363764549741,lng:-122.25320935249329},{lat:47.944378782264174,lng:-122.24303171038628},{lat:47.953682962443374,lng:-122.24744528532028},{lat:47.95695986623285,lng:-122.2475341334939},{lat:47.960361617676824,lng:-122.24407508969307},{lat:47.961910080200504,lng:-122.24581718444824},{lat:47.9592666423338,lng:-122.26004362106323},{lat:47.95713634699937,lng:-122.25866764783859},{lat:47.95550533639803,lng:-122.2593355178833},{lat:47.9484310403679,lng:-122.25779056549072},{lat:47.94248055254846,lng:-122.25682497024536}];
var zone_13=new google.maps.Polygon({paths: loc_13,strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.35,label: 'Glenwood',center: {lat: 47.94363764549741, lng: -122.25320935249329 }});
zone_13.setMap(map);
zone_13.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_13.label;var label=zone_13.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_13.center); infoWindow.open(map);});



  
  
  
  
  // END GMAP GEOFENCE
  
  
  
  
  

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