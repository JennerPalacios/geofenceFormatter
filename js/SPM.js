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
	setTimeout(function(){ x.style.display="none"; toggle('coords'); document.getElementById("action").value=""; }, 1000);
}
function clearcoords() {
	document.getElementById("action").value="";
  toggle('coords');
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
//		ZONE NAME: <b>S</b>eattle<b>P</b>oke<b>M</b>aps.<i>com</i><br />Coverage Map
//################################################

var loc_0=[{lng:-122.2024726,lat:48.18735356},{lng:-122.1291733,lat:48.18783459},{lng:-122.0759583,lat:48.18943681},{lng:-121.9523621,lat:47.85509922},{lng:-121.9792271,lat:47.80051819},{lng:-121.9745064,lat:47.79221541},{lng:-121.9739056,lat:47.78829418},{lng:-121.9552803,lat:47.76983739},{lng:-121.9570827,lat:47.76620293},{lng:-121.9858361,lat:47.75068154},{lng:-121.9852352,lat:47.74439089},{lng:-121.9804287,lat:47.74970048},{lng:-121.9619751,lat:47.75197367},{lng:-121.9472122,lat:47.73211849},{lng:-121.9451523,lat:47.71849254},{lng:-121.9853211,lat:47.70809747},{lng:-121.9853211,lat:47.70835195},{lng:-121.9727897,lat:47.69483533},{lng:-121.9602584,lat:47.69136896},{lng:-121.9424057,lat:47.69030553},{lng:-121.9070434,lat:47.67851792},{lng:-121.9087601,lat:47.66534039},{lng:-121.9012069,lat:47.65146571},{lng:-121.8833541,lat:47.64475828},{lng:-121.9104766,lat:47.62787027},{lng:-121.9104766,lat:47.61329129},{lng:-121.9145965,lat:47.60495863},{lng:-121.9135665,lat:47.59824523},{lng:-121.9128799,lat:47.59824523},{lng:-121.8871307,lat:47.57230956},{lng:-121.8871307,lat:47.56883506},{lng:-121.8716812,lat:47.56721355},{lng:-121.8648147,lat:47.56165369},{lng:-121.8484211,lat:47.55780832},{lng:-121.8440437,lat:47.55497004},{lng:-121.8348598,lat:47.55404322},{lng:-121.8348598,lat:47.55294261},{lng:-121.8400096,lat:47.55201575},{lng:-121.8394088,lat:47.55021992},{lng:-121.8357181,lat:47.54564319},{lng:-121.7965793,lat:47.52512985},{lng:-121.7927169,lat:47.52691476},{lng:-121.7736625,lat:47.52158248},{lng:-121.7566681,lat:47.50987274},{lng:-121.7417335,lat:47.47321946},{lng:-121.7800141,lat:47.47333549},{lng:-121.7961502,lat:47.46928601},{lng:-121.8158054,lat:47.48494915},{lng:-121.8204402,lat:47.50194128},{lng:-121.8358898,lat:47.51324699},{lng:-121.8822383,lat:47.50791332},{lng:-121.8887615,lat:47.48297701},{lng:-121.8977737,lat:47.47340529},{lng:-121.9123649,lat:47.47137471},{lng:-121.9227504,lat:47.46545653},{lng:-121.9353675,lat:47.46592073},{lng:-121.9467831,lat:47.46098845},{lng:-121.9512462,lat:47.45263155},{lng:-121.9600868,lat:47.44758194},{lng:-121.9654083,lat:47.43666849},{lng:-121.9654056,lat:47.43666941},{lng:-121.9238663,lat:47.41925871},{lng:-121.9595745,lat:47.39207418},{lng:-121.9626617,lat:47.38207728},{lng:-121.8610382,lat:47.38626151},{lng:-121.8531391,lat:47.36440872},{lng:-121.9290161,lat:47.28685473},{lng:-121.9273451,lat:47.21584436},{lng:-121.9273424,lat:47.21584436},{lng:-121.9242257,lat:47.08313296},{lng:-121.9721943,lat:47.08331561},{lng:-121.9718001,lat:47.05281317},{lng:-122.1800809,lat:47.05281134},{lng:-122.1798134,lat:46.99998277},{lng:-122.2421265,lat:46.85432176},{lng:-122.3614311,lat:46.84246391},{lng:-122.3638397,lat:46.84157592},{lng:-122.5469971,lat:46.83294856},{lng:-122.6884407,lat:46.84892147},{lng:-122.6884461,lat:46.84892147},{lng:-123.0097479,lat:46.80006679},{lng:-123.0449867,lat:46.79289085},{lng:-123.0709291,lat:46.79242442},{lng:-123.1385529,lat:46.80664329},{lng:-123.1392342,lat:46.86535543},{lng:-123.1185491,lat:46.86518305},{lng:-123.1183827,lat:46.85084759},{lng:-123.1075519,lat:46.85074119},{lng:-123.1075573,lat:46.85435477},{lng:-123.0970109,lat:46.85439146},{lng:-123.0973703,lat:46.86523073},{lng:-123.0932933,lat:46.86531142},{lng:-123.0932879,lat:46.86563418},{lng:-123.0865932,lat:46.86570387},{lng:-123.0866414,lat:46.87245203},{lng:-123.0769801,lat:46.87243003},{lng:-123.0771089,lat:46.87529774},{lng:-123.0711114,lat:46.87540042},{lng:-123.0712187,lat:46.87990336},{lng:-123.0817491,lat:46.87980803},{lng:-123.0818886,lat:46.89064217},{lng:-123.0765778,lat:46.89070449},{lng:-123.0765671,lat:46.89378384},{lng:-123.0756015,lat:46.89306168},{lng:-123.0750651,lat:46.89265111},{lng:-123.0734181,lat:46.89171263},{lng:-123.0722004,lat:46.89119207},{lng:-123.0713851,lat:46.89100877},{lng:-123.0716318,lat:46.90152177},{lng:-123.0664068,lat:46.90159141},{lng:-123.0664498,lat:46.90219251},{lng:-123.0613858,lat:46.90209355},{lng:-123.0613106,lat:46.90930256},{lng:-123.0611229,lat:46.91225258},{lng:-123.0585481,lat:46.91230755},{lng:-123.0585372,lat:46.91296351},{lng:-123.0561931,lat:46.91300014},{lng:-123.0572551,lat:46.93827174},{lng:-123.0573571,lat:46.95241907},{lng:-123.0561447,lat:46.96750715},{lng:-123.0569118,lat:46.98209691},{lng:-123.0350143,lat:46.98291668},{lng:-123.0350251,lat:46.98291302},{lng:-123.0345315,lat:46.98795218},{lng:-123.0337483,lat:46.98801439},{lng:-123.0335766,lat:46.99057953},{lng:-123.0344296,lat:46.99064905},{lng:-123.0340971,lat:46.99593263},{lng:-123.0130148,lat:46.99597287},{lng:-123.0130471,lat:46.99974131},{lng:-122.9916912,lat:46.99970106},{lng:-122.9917611,lat:47.00696644},{lng:-123.0078059,lat:47.00714568},{lng:-123.0078381,lat:47.01089503},{lng:-123.0131972,lat:47.01101208},{lng:-123.0134654,lat:47.02529376},{lng:-123.0292368,lat:47.02508898},{lng:-123.0293012,lat:47.02151982},{lng:-123.0347997,lat:47.02147228},{lng:-123.0344511,lat:47.02499025},{lng:-123.0344403,lat:47.02856649},{lng:-123.0395257,lat:47.02850067},{lng:-123.0394292,lat:47.03205474},{lng:-123.0419827,lat:47.03204012},{lng:-123.0419129,lat:47.03380244},{lng:-123.0392791,lat:47.03382072},{lng:-123.0390161,lat:47.03915121},{lng:-123.0129291,lat:47.03972517},{lng:-123.0126661,lat:47.03961184},{lng:-123.0128914,lat:47.03613505},{lng:-123.0115664,lat:47.03613505},{lng:-123.0117381,lat:47.03254469},{lng:-123.0077577,lat:47.03251911},{lng:-123.0074412,lat:47.03969227},{lng:-123.0126312,lat:47.03975442},{lng:-123.0126071,lat:47.04327849},{lng:-123.0230972,lat:47.04306099},{lng:-123.0230221,lat:47.05012126},{lng:-123.0335847,lat:47.04991658},{lng:-123.0333138,lat:47.05707827},{lng:-123.0280405,lat:47.05721898},{lng:-123.0273351,lat:47.06819445},{lng:-123.0324769,lat:47.06824012},{lng:-123.0324796,lat:47.07178972},{lng:-123.0484816,lat:47.07177145},{lng:-123.0484897,lat:47.06816705},{lng:-123.0644971,lat:47.06795878},{lng:-123.0643898,lat:47.07526784},{lng:-123.0591354,lat:47.07534273},{lng:-123.0591139,lat:47.07890464},{lng:-123.0325413,lat:47.07893387},{lng:-123.0326593,lat:47.08371376},{lng:-123.0642664,lat:47.08423611},{lng:-123.0750061,lat:47.08479132},{lng:-123.0750892,lat:47.07515276},{lng:-123.0857188,lat:47.07521487},{lng:-123.0857563,lat:47.06779983},{lng:-123.0804643,lat:47.06776878},{lng:-123.0793458,lat:47.05702528},{lng:-123.0854023,lat:47.03778756},{lng:-123.1026435,lat:47.03251544},{lng:-123.1183666,lat:47.03350994},{lng:-123.1263167,lat:47.03915121},{lng:-123.1394005,lat:47.04502582},{lng:-123.1553167,lat:47.05584848},{lng:-123.1785393,lat:47.05936784},{lng:-123.2022661,lat:47.05638207},{lng:-123.2204568,lat:47.05020533},{lng:-123.2338196,lat:47.05030402},{lng:-123.2404768,lat:47.04762478},{lng:-123.2556957,lat:47.04456889},{lng:-123.2772392,lat:47.05398091},{lng:-123.3087444,lat:47.04810361},{lng:-123.3110941,lat:47.04942679},{lng:-123.2972378,lat:47.05818744},{lng:-123.2973236,lat:47.07011817},{lng:-123.2329613,lat:47.08333204},{lng:-123.2216263,lat:47.09630525},{lng:-123.0758804,lat:47.13730423},{lng:-123.0482537,lat:47.15295296},{lng:-123.0048181,lat:47.15365338},{lng:-122.9533195,lat:47.16929366},{lng:-122.9457718,lat:47.18691264},{lng:-122.9253656,lat:47.19267254},{lng:-122.9215622,lat:47.18959216},{lng:-122.9129845,lat:47.16450869},{lng:-122.8987259,lat:47.15400359},{lng:-122.8321373,lat:47.17536178},{lng:-122.8096391,lat:47.18621266},{lng:-122.7464676,lat:47.12597983},{lng:-122.6875931,lat:47.11016981},{lng:-122.6477623,lat:47.14291262},{lng:-122.6405525,lat:47.17151094},{lng:-122.5983238,lat:47.18422933},{lng:-122.5820161,lat:47.22085061},{lng:-122.5689697,lat:47.23483931},{lng:-122.5669098,lat:47.24754252},{lng:-122.5413322,lat:47.27783147},{lng:-122.5353241,lat:47.29296944},{lng:-122.5536919,lat:47.31799582},{lng:-122.5428772,lat:47.32334876},{lng:-122.5172997,lat:47.31380618},{lng:-122.4848557,lat:47.29518156},{lng:-122.4579048,lat:47.27876316},{lng:-122.4453521,lat:47.27688521},{lng:-122.4316406,lat:47.28738054},{lng:-122.4518967,lat:47.29692789},{lng:-122.4512101,lat:47.31299149},{lng:-122.4354172,lat:47.32579232},{lng:-122.3276997,lat:47.34955289},{lng:-122.3277855,lat:47.34950019},{lng:-122.3289871,lat:47.36438511},{lng:-122.3274422,lat:47.37170973},{lng:-122.3310471,lat:47.38868035},{lng:-122.3289871,lat:47.39367751},{lng:-122.3358536,lat:47.40134664},{lng:-122.3384285,lat:47.40692349},{lng:-122.3504448,lat:47.41308057},{lng:-122.3547363,lat:47.42248906},{lng:-122.3568821,lat:47.43592555},{lng:-122.3628902,lat:47.44254365},{lng:-122.3890686,lat:47.44974133},{lng:-122.3896694,lat:47.45212099},{lng:-122.3719025,lat:47.46134842},{lng:-122.3735332,lat:47.47156054},{lng:-122.3649502,lat:47.48264077},{lng:-122.3767948,lat:47.49337071},{lng:-122.3949051,lat:47.50206903},{lng:-122.4043465,lat:47.51754851},{lng:-122.4021149,lat:47.51957731},{lng:-122.3979951,lat:47.52299711},{lng:-122.4052048,lat:47.53122693},{lng:-122.3997974,lat:47.53725358},{lng:-122.4048615,lat:47.55706709},{lng:-122.4165344,lat:47.56957704},{lng:-122.4271774,lat:47.57513605},{lng:-122.4282074,lat:47.57918913},{lng:-122.4034882,lat:47.58810479},{lng:-122.3899269,lat:47.59840802},{lng:-122.3811722,lat:47.59863953},{lng:-122.3694992,lat:47.58694701},{lng:-122.3514748,lat:47.59157802},{lng:-122.3439217,lat:47.60118607},{lng:-122.3444366,lat:47.60079179},{lng:-122.3768806,lat:47.62326596},{lng:-122.3938751,lat:47.62546422},{lng:-122.4191093,lat:47.63656979},{lng:-122.4239158,lat:47.64593828},{lng:-122.4268341,lat:47.65403315},{lng:-122.4443435,lat:47.66247361},{lng:-122.4314689,lat:47.66628872},{lng:-122.4132728,lat:47.67368691},{lng:-122.4089813,lat:47.68408884},{lng:-122.4120712,lat:47.69541303},{lng:-122.4060631,lat:47.70072762},{lng:-122.3864936,lat:47.70916053},{lng:-122.3870087,lat:47.70906849},{lng:-122.3777391,lat:47.73124172},{lng:-122.3900986,lat:47.74740375},{lng:-122.3835754,lat:47.75802178},{lng:-122.3952484,lat:47.76563773},{lng:-122.4014282,lat:47.77417551},{lng:-122.4024582,lat:47.78432671},{lng:-122.3938751,lat:47.78709486},{lng:-122.4017715,lat:47.80739023},{lng:-122.3851204,lat:47.81707387},{lng:-122.3629761,lat:47.83839454},{lng:-122.3437501,lat:47.84933961},{lng:-122.3346519,lat:47.87352573},{lng:-122.3384285,lat:47.88595992},{lng:-122.3137092,lat:47.92747732},{lng:-122.3135375,lat:47.94610806},{lng:-122.3102761,lat:47.95484609},{lng:-122.2522544,lat:47.96438725},{lng:-122.2309684,lat:47.97656979},{lng:-122.2361183,lat:48.00655416},{lng:-122.2297668,lat:48.02090832},{lng:-122.2536277,lat:48.03250357},{lng:-122.2481346,lat:48.03881671}];
var zone_0=new google.maps.Polygon({paths: loc_0,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#f2dcdb',fillOpacity: 0.2,label: '<b>S</b>eattle<b>P</b>oke<b>M</b>aps.<i>com</i><br />Coverage Map',center: {lng: -122.2024726, lat: 48.18735356 }});
zone_0.setMap(map);
zone_0.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_0.label;var label=zone_0.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_0.center); infoWindow.open(map);});



  
  

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
