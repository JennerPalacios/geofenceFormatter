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
/*
var loc_0=[{lng:-122.2024726,lat:48.18735356},{lng:-122.1291733,lat:48.18783459},{lng:-122.0759583,lat:48.18943681},{lng:-121.9523621,lat:47.85509922},{lng:-121.9792271,lat:47.80051819},{lng:-121.9745064,lat:47.79221541},{lng:-121.9739056,lat:47.78829418},{lng:-121.9552803,lat:47.76983739},{lng:-121.9570827,lat:47.76620293},{lng:-121.9858361,lat:47.75068154},{lng:-121.9852352,lat:47.74439089},{lng:-121.9804287,lat:47.74970048},{lng:-121.9619751,lat:47.75197367},{lng:-121.9472122,lat:47.73211849},{lng:-121.9451523,lat:47.71849254},{lng:-121.9853211,lat:47.70809747},{lng:-121.9853211,lat:47.70835195},{lng:-121.9727897,lat:47.69483533},{lng:-121.9602584,lat:47.69136896},{lng:-121.9424057,lat:47.69030553},{lng:-121.9070434,lat:47.67851792},{lng:-121.9087601,lat:47.66534039},{lng:-121.9012069,lat:47.65146571},{lng:-121.8833541,lat:47.64475828},{lng:-121.9104766,lat:47.62787027},{lng:-121.9104766,lat:47.61329129},{lng:-121.9145965,lat:47.60495863},{lng:-121.9135665,lat:47.59824523},{lng:-121.9128799,lat:47.59824523},{lng:-121.8871307,lat:47.57230956},{lng:-121.8871307,lat:47.56883506},{lng:-121.8716812,lat:47.56721355},{lng:-121.8648147,lat:47.56165369},{lng:-121.8484211,lat:47.55780832},{lng:-121.8440437,lat:47.55497004},{lng:-121.8348598,lat:47.55404322},{lng:-121.8348598,lat:47.55294261},{lng:-121.8400096,lat:47.55201575},{lng:-121.8394088,lat:47.55021992},{lng:-121.8357181,lat:47.54564319},{lng:-121.7965793,lat:47.52512985},{lng:-121.7927169,lat:47.52691476},{lng:-121.7736625,lat:47.52158248},{lng:-121.7566681,lat:47.50987274},{lng:-121.7417335,lat:47.47321946},{lng:-121.7800141,lat:47.47333549},{lng:-121.7961502,lat:47.46928601},{lng:-121.8158054,lat:47.48494915},{lng:-121.8204402,lat:47.50194128},{lng:-121.8358898,lat:47.51324699},{lng:-121.8822383,lat:47.50791332},{lng:-121.8887615,lat:47.48297701},{lng:-121.8977737,lat:47.47340529},{lng:-121.9123649,lat:47.47137471},{lng:-121.9227504,lat:47.46545653},{lng:-121.9353675,lat:47.46592073},{lng:-121.9467831,lat:47.46098845},{lng:-121.9512462,lat:47.45263155},{lng:-121.9600868,lat:47.44758194},{lng:-121.9654083,lat:47.43666849},{lng:-121.9654056,lat:47.43666941},{lng:-121.9238663,lat:47.41925871},{lng:-121.9595745,lat:47.39207418},{lng:-121.9626617,lat:47.38207728},{lng:-121.8610382,lat:47.38626151},{lng:-121.8531391,lat:47.36440872},{lng:-121.9290161,lat:47.28685473},{lng:-121.9273451,lat:47.21584436},{lng:-121.9273424,lat:47.21584436},{lng:-121.9242257,lat:47.08313296},{lng:-121.9721943,lat:47.08331561},{lng:-121.9718001,lat:47.05281317},{lng:-122.1800809,lat:47.05281134},{lng:-122.1798134,lat:46.99998277},{lng:-122.2421265,lat:46.85432176},{lng:-122.3614311,lat:46.84246391},{lng:-122.3638397,lat:46.84157592},{lng:-122.5469971,lat:46.83294856},{lng:-122.6884407,lat:46.84892147},{lng:-122.6884461,lat:46.84892147},{lng:-123.0097479,lat:46.80006679},{lng:-123.0449867,lat:46.79289085},{lng:-123.0709291,lat:46.79242442},{lng:-123.1385529,lat:46.80664329},{lng:-123.1392342,lat:46.86535543},{lng:-123.1185491,lat:46.86518305},{lng:-123.1183827,lat:46.85084759},{lng:-123.1075519,lat:46.85074119},{lng:-123.1075573,lat:46.85435477},{lng:-123.0970109,lat:46.85439146},{lng:-123.0973703,lat:46.86523073},{lng:-123.0932933,lat:46.86531142},{lng:-123.0932879,lat:46.86563418},{lng:-123.0865932,lat:46.86570387},{lng:-123.0866414,lat:46.87245203},{lng:-123.0769801,lat:46.87243003},{lng:-123.0771089,lat:46.87529774},{lng:-123.0711114,lat:46.87540042},{lng:-123.0712187,lat:46.87990336},{lng:-123.0817491,lat:46.87980803},{lng:-123.0818886,lat:46.89064217},{lng:-123.0765778,lat:46.89070449},{lng:-123.0765671,lat:46.89378384},{lng:-123.0756015,lat:46.89306168},{lng:-123.0750651,lat:46.89265111},{lng:-123.0734181,lat:46.89171263},{lng:-123.0722004,lat:46.89119207},{lng:-123.0713851,lat:46.89100877},{lng:-123.0716318,lat:46.90152177},{lng:-123.0664068,lat:46.90159141},{lng:-123.0664498,lat:46.90219251},{lng:-123.0613858,lat:46.90209355},{lng:-123.0613106,lat:46.90930256},{lng:-123.0611229,lat:46.91225258},{lng:-123.0585481,lat:46.91230755},{lng:-123.0585372,lat:46.91296351},{lng:-123.0561931,lat:46.91300014},{lng:-123.0572551,lat:46.93827174},{lng:-123.0573571,lat:46.95241907},{lng:-123.0561447,lat:46.96750715},{lng:-123.0569118,lat:46.98209691},{lng:-123.0350143,lat:46.98291668},{lng:-123.0350251,lat:46.98291302},{lng:-123.0345315,lat:46.98795218},{lng:-123.0337483,lat:46.98801439},{lng:-123.0335766,lat:46.99057953},{lng:-123.0344296,lat:46.99064905},{lng:-123.0340971,lat:46.99593263},{lng:-123.0130148,lat:46.99597287},{lng:-123.0130471,lat:46.99974131},{lng:-122.9916912,lat:46.99970106},{lng:-122.9917611,lat:47.00696644},{lng:-123.0078059,lat:47.00714568},{lng:-123.0078381,lat:47.01089503},{lng:-123.0131972,lat:47.01101208},{lng:-123.0134654,lat:47.02529376},{lng:-123.0292368,lat:47.02508898},{lng:-123.0293012,lat:47.02151982},{lng:-123.0347997,lat:47.02147228},{lng:-123.0344511,lat:47.02499025},{lng:-123.0344403,lat:47.02856649},{lng:-123.0395257,lat:47.02850067},{lng:-123.0394292,lat:47.03205474},{lng:-123.0419827,lat:47.03204012},{lng:-123.0419129,lat:47.03380244},{lng:-123.0392791,lat:47.03382072},{lng:-123.0390161,lat:47.03915121},{lng:-123.0129291,lat:47.03972517},{lng:-123.0126661,lat:47.03961184},{lng:-123.0128914,lat:47.03613505},{lng:-123.0115664,lat:47.03613505},{lng:-123.0117381,lat:47.03254469},{lng:-123.0077577,lat:47.03251911},{lng:-123.0074412,lat:47.03969227},{lng:-123.0126312,lat:47.03975442},{lng:-123.0126071,lat:47.04327849},{lng:-123.0230972,lat:47.04306099},{lng:-123.0230221,lat:47.05012126},{lng:-123.0335847,lat:47.04991658},{lng:-123.0333138,lat:47.05707827},{lng:-123.0280405,lat:47.05721898},{lng:-123.0273351,lat:47.06819445},{lng:-123.0324769,lat:47.06824012},{lng:-123.0324796,lat:47.07178972},{lng:-123.0484816,lat:47.07177145},{lng:-123.0484897,lat:47.06816705},{lng:-123.0644971,lat:47.06795878},{lng:-123.0643898,lat:47.07526784},{lng:-123.0591354,lat:47.07534273},{lng:-123.0591139,lat:47.07890464},{lng:-123.0325413,lat:47.07893387},{lng:-123.0326593,lat:47.08371376},{lng:-123.0642664,lat:47.08423611},{lng:-123.0750061,lat:47.08479132},{lng:-123.0750892,lat:47.07515276},{lng:-123.0857188,lat:47.07521487},{lng:-123.0857563,lat:47.06779983},{lng:-123.0804643,lat:47.06776878},{lng:-123.0793458,lat:47.05702528},{lng:-123.0854023,lat:47.03778756},{lng:-123.1026435,lat:47.03251544},{lng:-123.1183666,lat:47.03350994},{lng:-123.1263167,lat:47.03915121},{lng:-123.1394005,lat:47.04502582},{lng:-123.1553167,lat:47.05584848},{lng:-123.1785393,lat:47.05936784},{lng:-123.2022661,lat:47.05638207},{lng:-123.2204568,lat:47.05020533},{lng:-123.2338196,lat:47.05030402},{lng:-123.2404768,lat:47.04762478},{lng:-123.2556957,lat:47.04456889},{lng:-123.2772392,lat:47.05398091},{lng:-123.3087444,lat:47.04810361},{lng:-123.3110941,lat:47.04942679},{lng:-123.2972378,lat:47.05818744},{lng:-123.2973236,lat:47.07011817},{lng:-123.2329613,lat:47.08333204},{lng:-123.2216263,lat:47.09630525},{lng:-123.0758804,lat:47.13730423},{lng:-123.0482537,lat:47.15295296},{lng:-123.0048181,lat:47.15365338},{lng:-122.9533195,lat:47.16929366},{lng:-122.9457718,lat:47.18691264},{lng:-122.9253656,lat:47.19267254},{lng:-122.9215622,lat:47.18959216},{lng:-122.9129845,lat:47.16450869},{lng:-122.8987259,lat:47.15400359},{lng:-122.8321373,lat:47.17536178},{lng:-122.8096391,lat:47.18621266},{lng:-122.7464676,lat:47.12597983},{lng:-122.6875931,lat:47.11016981},{lng:-122.6477623,lat:47.14291262},{lng:-122.6405525,lat:47.17151094},{lng:-122.5983238,lat:47.18422933},{lng:-122.5820161,lat:47.22085061},{lng:-122.5689697,lat:47.23483931},{lng:-122.5669098,lat:47.24754252},{lng:-122.5413322,lat:47.27783147},{lng:-122.5353241,lat:47.29296944},{lng:-122.5536919,lat:47.31799582},{lng:-122.5428772,lat:47.32334876},{lng:-122.5172997,lat:47.31380618},{lng:-122.4848557,lat:47.29518156},{lng:-122.4579048,lat:47.27876316},{lng:-122.4453521,lat:47.27688521},{lng:-122.4316406,lat:47.28738054},{lng:-122.4518967,lat:47.29692789},{lng:-122.4512101,lat:47.31299149},{lng:-122.4354172,lat:47.32579232},{lng:-122.3276997,lat:47.34955289},{lng:-122.3277855,lat:47.34950019},{lng:-122.3289871,lat:47.36438511},{lng:-122.3274422,lat:47.37170973},{lng:-122.3310471,lat:47.38868035},{lng:-122.3289871,lat:47.39367751},{lng:-122.3358536,lat:47.40134664},{lng:-122.3384285,lat:47.40692349},{lng:-122.3504448,lat:47.41308057},{lng:-122.3547363,lat:47.42248906},{lng:-122.3568821,lat:47.43592555},{lng:-122.3628902,lat:47.44254365},{lng:-122.3890686,lat:47.44974133},{lng:-122.3896694,lat:47.45212099},{lng:-122.3719025,lat:47.46134842},{lng:-122.3735332,lat:47.47156054},{lng:-122.3649502,lat:47.48264077},{lng:-122.3767948,lat:47.49337071},{lng:-122.3949051,lat:47.50206903},{lng:-122.4043465,lat:47.51754851},{lng:-122.4021149,lat:47.51957731},{lng:-122.3979951,lat:47.52299711},{lng:-122.4052048,lat:47.53122693},{lng:-122.3997974,lat:47.53725358},{lng:-122.4048615,lat:47.55706709},{lng:-122.4165344,lat:47.56957704},{lng:-122.4271774,lat:47.57513605},{lng:-122.4282074,lat:47.57918913},{lng:-122.4034882,lat:47.58810479},{lng:-122.3899269,lat:47.59840802},{lng:-122.3811722,lat:47.59863953},{lng:-122.3694992,lat:47.58694701},{lng:-122.3514748,lat:47.59157802},{lng:-122.3439217,lat:47.60118607},{lng:-122.3444366,lat:47.60079179},{lng:-122.3768806,lat:47.62326596},{lng:-122.3938751,lat:47.62546422},{lng:-122.4191093,lat:47.63656979},{lng:-122.4239158,lat:47.64593828},{lng:-122.4268341,lat:47.65403315},{lng:-122.4443435,lat:47.66247361},{lng:-122.4314689,lat:47.66628872},{lng:-122.4132728,lat:47.67368691},{lng:-122.4089813,lat:47.68408884},{lng:-122.4120712,lat:47.69541303},{lng:-122.4060631,lat:47.70072762},{lng:-122.3864936,lat:47.70916053},{lng:-122.3870087,lat:47.70906849},{lng:-122.3777391,lat:47.73124172},{lng:-122.3900986,lat:47.74740375},{lng:-122.3835754,lat:47.75802178},{lng:-122.3952484,lat:47.76563773},{lng:-122.4014282,lat:47.77417551},{lng:-122.4024582,lat:47.78432671},{lng:-122.3938751,lat:47.78709486},{lng:-122.4017715,lat:47.80739023},{lng:-122.3851204,lat:47.81707387},{lng:-122.3629761,lat:47.83839454},{lng:-122.3437501,lat:47.84933961},{lng:-122.3346519,lat:47.87352573},{lng:-122.3384285,lat:47.88595992},{lng:-122.3137092,lat:47.92747732},{lng:-122.3135375,lat:47.94610806},{lng:-122.3102761,lat:47.95484609},{lng:-122.2522544,lat:47.96438725},{lng:-122.2309684,lat:47.97656979},{lng:-122.2361183,lat:48.00655416},{lng:-122.2297668,lat:48.02090832},{lng:-122.2536277,lat:48.03250357},{lng:-122.2481346,lat:48.03881671}];
var zone_0=new google.maps.Polygon({paths: loc_0,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#f2dcdb',fillOpacity: 0.2,label: '<b>S</b>eattle<b>P</b>oke<b>M</b>aps.<i>com</i><br />Coverage Map',center: {lng: -122.2024726, lat: 48.18735356 }});
zone_0.setMap(map);
zone_0.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_0.label;var label=zone_0.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_0.center); infoWindow.open(map);});
*/

//################################################
//		ZONE NAME: Marina
//################################################
var loc_1=[{lng:-122.20450043678284,lat:48.019822935452986},{lng:-122.20338463783264,lat:48.01846660945011},{lng:-122.20675349235535,lat:48.01666350177807},{lng:-122.21325047314167,lat:48.009890519955235},{lng:-122.21411380916834,lat:48.00796306970349},{lng:-122.21425294876099,lat:48.005000088503046},{lng:-122.21397466957569,lat:48.00284610585952},{lng:-122.21373829990625,lat:47.99741610915501},{lng:-122.21383452415466,lat:47.992559497585226},{lng:-122.21423149108887,lat:47.98962008994587},{lng:-122.21367359161377,lat:47.98847120725541},{lng:-122.21425294876099,lat:47.9820657175089},{lng:-122.2212266921997,lat:47.98337273175977},{lng:-122.22564697265625,lat:47.999657364467666},{lng:-122.22375869750977,lat:48.00703688999151},{lng:-122.21654891967773,lat:48.018463021238745}];
var zone_1=new google.maps.Polygon({paths: loc_1,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Marina',center: {lng: -122.20450043678284, lat: 48.019822935452986 }});
zone_1.setMap(map);
zone_1.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_1.label;var label=zone_1.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_1.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Delta
//################################################
var loc_2=[{lng:-122.2012335062027,lat:47.99239704919802},{lng:-122.17936277389526,lat:47.99214754183944},{lng:-122.18054294586182,lat:47.99534976049116},{lng:-122.17663764953613,lat:48.0030170459058},{lng:-122.1795129776001,lat:48.01168803287057},{lng:-122.18762330710888,lat:48.01630960085447},{lng:-122.19007015228271,lat:48.011660220569986},{lng:-122.20021963119507,lat:48.003606582822115},{lng:-122.20099478960037,lat:48.0016207946144}];
var zone_2=new google.maps.Polygon({paths: loc_2,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Delta',center: {lng: -122.2012335062027, lat: 47.99239704919802 }});
zone_2.setMap(map);
zone_2.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_2.label;var label=zone_2.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_2.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Riverside
//################################################
var loc_3=[{lng:-122.2012335062027,lat:47.992393459172646},{lng:-122.2014856338501,lat:47.97667932059547},{lng:-122.19046711921692,lat:47.97671523176901},{lng:-122.18940496444702,lat:47.979509044508035},{lng:-122.18356847763062,lat:47.98467971291763},{lng:-122.18294620513916,lat:47.989892945826455},{lng:-122.18104183673859,lat:47.99216908209062}];
var zone_3=new google.maps.Polygon({paths: loc_3,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Riverside',center: {lng: -122.2012335062027, lat: 47.992393459172646 }});
zone_3.setMap(map);
zone_3.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_3.label;var label=zone_3.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_3.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Riverside East
//################################################
var loc_4=[{lng:-122.19046711921692,lat:47.97671523176901},{lng:-122.18568205833435,lat:47.976718822884976},{lng:-122.18180894851685,lat:47.979221769966045},{lng:-122.17554330825806,lat:47.98008358879643},{lng:-122.16796875,lat:47.983688708259656},{lng:-122.1724534034729,lat:47.98864354128941},{lng:-122.17936545610428,lat:47.992149336860734},{lng:-122.1810445189476,lat:47.99216683831489},{lng:-122.18294687569141,lat:47.989892945826455},{lng:-122.18356981873512,lat:47.98467791763655},{lng:-122.18940529972315,lat:47.979509044508035}];
var zone_4=new google.maps.Polygon({paths: loc_4,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Riverside East',center: {lng: -122.19046711921692, lat: 47.97671523176901 }});
zone_4.setMap(map);
zone_4.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_4.label;var label=zone_4.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_4.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bayside
//################################################
var loc_5=[{lng:-122.20123015344143,lat:47.99239166415985},{lng:-122.21383418887854,lat:47.99255680507467},{lng:-122.21423149108887,lat:47.98962053872316},{lng:-122.21367359161377,lat:47.98847143164905},{lng:-122.21425261348486,lat:47.982065941930394},{lng:-122.21422880887985,lat:47.976435123952946},{lng:-122.20148496329784,lat:47.97667954504037}];
var zone_5=new google.maps.Polygon({paths: loc_5,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Bayside',center: {lng: -122.20123015344143, lat: 47.99239166415985 }});
zone_5.setMap(map);
zone_5.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_5.label;var label=zone_5.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_5.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Port Gardner
//################################################
var loc_6=[{lng:-122.20148529857397,lat:47.97667954504037},{lng:-122.21422914415598,lat:47.976434899506984},{lng:-122.21425261348486,lat:47.98206616635188},{lng:-122.22122702747583,lat:47.98337295617559},{lng:-122.24581718444824,lat:47.96191052921869},{lng:-122.24103212356567,lat:47.957653661192865},{lng:-122.22976416349411,lat:47.95674656170277},{lng:-122.21092700958252,lat:47.959812673537854},{lng:-122.21077546477318,lat:47.963245892120526},{lng:-122.20454335212708,lat:47.963598810106134},{lng:-122.20089554786682,lat:47.96442497000723}];
var zone_6=new google.maps.Polygon({paths: loc_6,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Port Gardner',center: {lng: -122.20148529857397, lat: 47.97667954504037 }});
zone_6.setMap(map);
zone_6.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_6.label;var label=zone_6.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_6.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Port Gardner East
//################################################
var loc_7=[{lng:-122.2008965536952,lat:47.9644251945054},{lng:-122.19747170805931,lat:47.964187001390606},{lng:-122.18878269195557,lat:47.96460456823724},{lng:-122.18890070915222,lat:47.96698957352149},{lng:-122.18740940093994,lat:47.97208248416854},{lng:-122.18719482421875,lat:47.975558879434246},{lng:-122.18568474054337,lat:47.976720618442904},{lng:-122.19046778976917,lat:47.97671568065853},{lng:-122.20148529857397,lat:47.9766799939302}];
var zone_7=new google.maps.Polygon({paths: loc_7,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Port Gardner East',center: {lng: -122.2008965536952, lat: 47.9644251945054 }});
zone_7.setMap(map);
zone_7.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_7.label;var label=zone_7.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_7.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lowell North
//################################################
var loc_8=[{lng:-122.20089621841908,lat:47.9644251945054},{lng:-122.19747237861156,lat:47.964187674888215},{lng:-122.18878202140331,lat:47.96460411924246},{lng:-122.18798875808716,lat:47.96281574200239},{lng:-122.18631505966187,lat:47.960660447392144},{lng:-122.18687295913696,lat:47.95731237810493},{lng:-122.190842628479,lat:47.951362912859835},{lng:-122.19152927398682,lat:47.949120907682776},{lng:-122.1902847290039,lat:47.947856143904566},{lng:-122.17981338500977,lat:47.94791363383868},{lng:-122.17975974082947,lat:47.94582598960648},{lng:-122.19987630844116,lat:47.94568585211989}];
var zone_8=new google.maps.Polygon({paths: loc_8,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Lowell North',center: {lng: -122.20089621841908, lat: 47.9644251945054 }});
zone_8.setMap(map);
zone_8.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_8.label;var label=zone_8.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_8.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Glacier View
//################################################
var loc_9=[{lng:-122.19987630844116,lat:47.945686076699495},{lng:-122.1995360031724,lat:47.936207049853984},{lng:-122.21903398633003,lat:47.93621131764884},{lng:-122.21701629459858,lat:47.94364977327548},{lng:-122.21399813890457,lat:47.950576066351466},{lng:-122.2128877043724,lat:47.9559041124676},{lng:-122.21092667430639,lat:47.959813122574324},{lng:-122.21077512949705,lat:47.96324611662385},{lng:-122.20454335212708,lat:47.96359925910967},{lng:-122.20089621841908,lat:47.96442474550905}];
var zone_9=new google.maps.Polygon({paths: loc_9,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Glacier View',center: {lng: -122.19987630844116, lat: 47.945686076699495 }});
zone_9.setMap(map);
zone_9.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_9.label;var label=zone_9.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_9.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: View Ridge Madison
//################################################
var loc_10=[{lng:-122.21903499215841,lat:47.93621176689039},{lng:-122.23180800676346,lat:47.93645750142994},{lng:-122.23487377166748,lat:47.93732003389691},{lng:-122.24303305149078,lat:47.94437788392301},{lng:-122.24744528532028,lat:47.95368026790498},{lng:-122.24753379821777,lat:47.95696031529409},{lng:-122.24407643079758,lat:47.960360495097625},{lng:-122.2410324588418,lat:47.95765388572048},{lng:-122.22976449877024,lat:47.95674656170277},{lng:-122.21092734485865,lat:47.959813122574324},{lng:-122.21288803964853,lat:47.955904561538006},{lng:-122.21399813890457,lat:47.95057629090985},{lng:-122.2170166298747,lat:47.94364954868703}];
var zone_10=new google.maps.Polygon({paths: loc_10,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'View Ridge Madison',center: {lng: -122.21903499215841, lat: 47.93621176689039 }});
zone_10.setMap(map);
zone_10.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_10.label;var label=zone_10.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_10.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Glenwood
//################################################
var loc_11=[{lng:-122.25320935249329,lat:47.94363764549741},{lng:-122.24303171038628,lat:47.944378782264174},{lng:-122.24744528532028,lat:47.953682962443374},{lng:-122.2475341334939,lat:47.95695986623285},{lng:-122.24407508969307,lat:47.960361617676824},{lng:-122.24581718444824,lat:47.961910080200504},{lng:-122.26004362106323,lat:47.9592666423338},{lng:-122.25866764783859,lat:47.95713634699937},{lng:-122.2593355178833,lat:47.95550533639803},{lng:-122.25779056549072,lat:47.9484310403679},{lng:-122.25682497024536,lat:47.94248055254846}];
var zone_11=new google.maps.Polygon({paths: loc_11,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Glenwood',center: {lng: -122.25320935249329, lat: 47.94363764549741 }});
zone_11.setMap(map);
zone_11.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_11.label;var label=zone_11.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_11.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Boulevard Bluffs
//################################################
var loc_12=[{lng:-122.24043667316437,lat:47.92349082660848},{lng:-122.24045544862747,lat:47.92459082874943},{lng:-122.24119439721107,lat:47.926230902880114},{lng:-122.24313095211983,lat:47.9279401193186},{lng:-122.24749088287354,lat:47.92980563493529},{lng:-122.25682564079762,lat:47.94248100173552},{lng:-122.2593355178833,lat:47.9555057854719},{lng:-122.25866697728634,lat:47.957136571529226},{lng:-122.26004295051098,lat:47.9592666423338},{lng:-122.27757453918457,lat:47.957398597203145},{lng:-122.2884750366211,lat:47.95406468729688},{lng:-122.28873252868652,lat:47.9519090275941},{lng:-122.28233814239502,lat:47.94449287146505},{lng:-122.2783899307251,lat:47.922072652074874}];
var zone_12=new google.maps.Polygon({paths: loc_12,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Boulevard Bluffs',center: {lng: -122.24043667316437, lat: 47.92349082660848 }});
zone_12.setMap(map);
zone_12.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_12.label;var label=zone_12.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_12.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Mukilteo
//################################################
var loc_13=[{lng:-122.30817317962646,lat:47.94995448506888},{lng:-122.29429006576538,lat:47.9547544794095},{lng:-122.28847570717335,lat:47.95406491184007},{lng:-122.28873319923878,lat:47.951909925804365},{lng:-122.30013728141785,lat:47.93834067872843},{lng:-122.31164932250977,lat:47.939677549224534},{lng:-122.31074810028076,lat:47.94710876894193}];
var zone_13=new google.maps.Polygon({paths: loc_13,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Downtown Mukilteo',center: {lng: -122.30817317962646, lat: 47.94995448506888 }});
zone_13.setMap(map);
zone_13.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_13.label;var label=zone_13.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_13.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Evergreen
//################################################
var loc_14=[{lng:-122.2404420375824,lat:47.92349801624089},{lng:-122.24045813083649,lat:47.9245926261194},{lng:-122.2411984205246,lat:47.92623359884958},{lng:-122.24313229322433,lat:47.92794101794539},{lng:-122.24749356508255,lat:47.929806533529664},{lng:-122.25682497024536,lat:47.94248100173552},{lng:-122.25320801138878,lat:47.94363809467443},{lng:-122.2430320456624,lat:47.944378557678895},{lng:-122.2348764538765,lat:47.93732272928833},{lng:-122.23180767148733,lat:47.93645750142994},{lng:-122.21903465688229,lat:47.93621131764884},{lng:-122.1995360031724,lat:47.936207049853984},{lng:-122.20761146396399,lat:47.92104831583632}];
var zone_14=new google.maps.Polygon({paths: loc_14,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Evergreen',center: {lng: -122.2404420375824, lat: 47.92349801624089 }});
zone_14.setMap(map);
zone_14.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_14.label;var label=zone_14.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_14.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mukilteo
//################################################
var loc_15=[{lng:-122.27725267410278,lat:47.86927597800497},{lng:-122.25840345025063,lat:47.88943581293232},{lng:-122.2715274989605,lat:47.90772335662865},{lng:-122.27194458246231,lat:47.92231710571832},{lng:-122.2783899307251,lat:47.92207355080363},{lng:-122.28233814239502,lat:47.944493769804225},{lng:-122.28873252868652,lat:47.951910374909495},{lng:-122.3001379519701,lat:47.93834067872843},{lng:-122.31164932250977,lat:47.93967777383027},{lng:-122.33782768249512,lat:47.87991589402529},{lng:-122.32248544692993,lat:47.87971441438967},{lng:-122.29028820991516,lat:47.8753968053319},{lng:-122.27656602859497,lat:47.87336740478141}];
var zone_15=new google.maps.Polygon({paths: loc_15,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Mukilteo',center: {lng: -122.27725267410278, lat: 47.86927597800497 }});
zone_15.setMap(map);
zone_15.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_15.label;var label=zone_15.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_15.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Harbour Pointe
//################################################
var loc_16=[{lng:-122.30740070343018,lat:47.88103840907988},{lng:-122.28000059723854,lat:47.88266637247207},{lng:-122.28873252868652,lat:47.90552620771504},{lng:-122.3153829574585,lat:47.90426037745339},{lng:-122.31808662414551,lat:47.8863628286501}];
var zone_16=new google.maps.Polygon({paths: loc_16,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Harbour Pointe',center: {lng: -122.30740070343018, lat: 47.88103840907988 }});
zone_16.setMap(map);
zone_16.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_16.label;var label=zone_16.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_16.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Holly
//################################################
var loc_17=[{lng:-122.25840345025063,lat:47.88943648740406},{lng:-122.24168658256531,lat:47.90733140072808},{lng:-122.27152682840824,lat:47.90772380611767}];
var zone_17=new google.maps.Polygon({paths: loc_17,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Holly',center: {lng: -122.25840345025063, lat: 47.88943648740406 }});
zone_17.setMap(map);
zone_17.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_17.label;var label=zone_17.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_17.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Westmont
//################################################
var loc_18=[{lng:-122.24168792366982,lat:47.90733162547427},{lng:-122.22748328000307,lat:47.92253077702851},{lng:-122.24043902009726,lat:47.9234982409169},{lng:-122.27194625884295,lat:47.92231575763152},{lng:-122.27152850478888,lat:47.90772380611767}];
var zone_18=new google.maps.Polygon({paths: loc_18,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Westmont',center: {lng: -122.24168792366982, lat: 47.90733162547427 }});
zone_18.setMap(map);
zone_18.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_18.label;var label=zone_18.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_18.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Everett Mall South
//################################################
var loc_19=[{lng:-122.258404456079,lat:47.88943693705184},{lng:-122.25203856825829,lat:47.88200440015969},{lng:-122.23367348313332,lat:47.88191265876422},{lng:-122.21717119216919,lat:47.89468653383448},{lng:-122.20569670200348,lat:47.92093844395395},{lng:-122.2274836152792,lat:47.92253077702851}];
var zone_19=new google.maps.Polygon({paths: loc_19,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Everett Mall South',center: {lng: -122.258404456079, lat: 47.88943693705184 }});
zone_19.setMap(map);
zone_19.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_19.label;var label=zone_19.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_19.center); infoWindow.open(map);});


//################################################
//		ZONE NAME: Lake Serene
//################################################
var loc_21=[{lng:-122.3375702,lat:47.86347834},{lng:-122.3145062,lat:47.864372},{lng:-122.2804281,lat:47.86417294},{lng:-122.2818208,lat:47.85005958},{lng:-122.2575029,lat:47.84980062},{lng:-122.246069,lat:47.86467858},{lng:-122.243195,lat:47.87399126},{lng:-122.2336742,lat:47.88191266},{lng:-122.2520382,lat:47.88200463},{lng:-122.2584031,lat:47.88943626},{lng:-122.277252,lat:47.86927733},{lng:-122.2765654,lat:47.87336718},{lng:-122.3224861,lat:47.87971509},{lng:-122.3378277,lat:47.87991612},{lng:-122.3316479,lat:47.87200003}];
var zone_21=new google.maps.Polygon({paths: loc_21,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Lake Serene',center: {lng: -122.3375702, lat: 47.86347834 }});
zone_21.setMap(map);
zone_21.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_21.label;var label=zone_21.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_21.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Picnic Point
//################################################
var loc_22=[{lng:-122.3036027,lat:47.8643088},{lng:-122.303426,lat:47.83917342},{lng:-122.2817846,lat:47.83914236},{lng:-122.2818208,lat:47.85006048},{lng:-122.2804274,lat:47.86417339}];
var zone_22=new google.maps.Polygon({paths: loc_22,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Picnic Point',center: {lng: -122.3036027, lat: 47.8643088 }});
zone_22.setMap(map);
zone_22.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_22.label;var label=zone_22.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_22.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Meadowdale
//################################################
var loc_23=[{lng:-122.3034263,lat:47.83917387},{lng:-122.3585987,lat:47.83960437},{lng:-122.3375699,lat:47.86347856},{lng:-122.3145069,lat:47.86437245},{lng:-122.3036027,lat:47.8643088}];
var zone_23=new google.maps.Polygon({paths: loc_23,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Meadowdale',center: {lng: -122.3034263, lat: 47.83917387 }});
zone_23.setMap(map);
zone_23.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_23.label;var label=zone_23.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_23.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lynnwood
//################################################
var loc_24=[{lng:-122.2817849,lat:47.83914326},{lng:-122.2818017,lat:47.81973222},{lng:-122.2992253,lat:47.810204},{lng:-122.3239489,lat:47.81045034},{lng:-122.3250895,lat:47.82853774},{lng:-122.3197033,lat:47.83930147}];
var zone_24=new google.maps.Polygon({paths: loc_24,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Lynnwood',center: {lng: -122.2817849, lat: 47.83914326 }});
zone_24.setMap(map);
zone_24.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_24.label;var label=zone_24.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_24.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Perrinville
//################################################
var loc_25=[{lng:-122.3522181,lat:47.82144878},{lng:-122.3246329,lat:47.82130606},{lng:-122.3250892,lat:47.82853774},{lng:-122.319703,lat:47.83930147},{lng:-122.3522767,lat:47.83955531}];
var zone_25=new google.maps.Polygon({paths: loc_25,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Perrinville',center: {lng: -122.3522181, lat: 47.82144878 }});
zone_25.setMap(map);
zone_25.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_25.label;var label=zone_25.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_25.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Edmonds
//################################################
var loc_26=[{lng:-122.3585987,lat:47.8396055},{lng:-122.3522771,lat:47.83955486},{lng:-122.3522174,lat:47.82144946},{lng:-122.3518573,lat:47.79960473},{lng:-122.3668472,lat:47.79958919},{lng:-122.3775646,lat:47.79823159},{lng:-122.383209,lat:47.80328189},{lng:-122.383149,lat:47.81025174},{lng:-122.3770017,lat:47.81772451},{lng:-122.380743,lat:47.81920633}];
var zone_26=new google.maps.Polygon({paths: loc_26,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Downtown Edmonds',center: {lng: -122.3585987, lat: 47.8396055 }});
zone_26.setMap(map);
zone_26.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_26.label;var label=zone_26.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_26.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Edmonds Marina
//################################################
var loc_27=[{lng:-122.3977375,lat:47.80151},{lng:-122.3832083,lat:47.80328189},{lng:-122.383148,lat:47.81025174},{lng:-122.377001,lat:47.81772473},{lng:-122.380742,lat:47.81920655},{lng:-122.3874915,lat:47.8124124},{lng:-122.3908496,lat:47.81195848},{lng:-122.3988318,lat:47.80694347}];
var zone_27=new google.maps.Polygon({paths: loc_27,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Edmonds Marina',center: {lng: -122.3977375, lat: 47.80151 }});
zone_27.setMap(map);
zone_27.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_27.label;var label=zone_27.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_27.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: College Place
//################################################
var loc_28=[{lng:-122.3518587,lat:47.79960563},{lng:-122.3317418,lat:47.79962861},{lng:-122.3239469,lat:47.81045169},{lng:-122.3246329,lat:47.82130696},{lng:-122.3522181,lat:47.82144924}];
var zone_28=new google.maps.Polygon({paths: loc_28,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'College Place',center: {lng: -122.3518587, lat: 47.79960563 }});
zone_28.setMap(map);
zone_28.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_28.label;var label=zone_28.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_28.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Woodway
//################################################
var loc_29=[{lng:-122.3666772,lat:47.77771702},{lng:-122.4013853,lat:47.77786708},{lng:-122.3977375,lat:47.80151181},{lng:-122.383208,lat:47.80328257},{lng:-122.3775646,lat:47.79823249},{lng:-122.3668472,lat:47.79959009}];
var zone_29=new google.maps.Polygon({paths: loc_29,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Woodway',center: {lng: -122.3666772, lat: 47.77771702 }});
zone_29.setMap(map);
zone_29.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_29.label;var label=zone_29.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_29.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Esperance
//################################################
var loc_30=[{lng:-122.3666789,lat:47.77771815},{lng:-122.3462206,lat:47.77780512},{lng:-122.3461683,lat:47.7794174},{lng:-122.3317421,lat:47.79962928},{lng:-122.3668475,lat:47.79959077}];
var zone_30=new google.maps.Polygon({paths: loc_30,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Esperance',center: {lng: -122.3666789, lat: 47.77771815 }});
zone_30.setMap(map);
zone_30.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_30.label;var label=zone_30.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_30.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mountlake Terrace
//################################################
var loc_31=[{lng:-122.346222,lat:47.77780602},{lng:-122.3461697,lat:47.77941762},{lng:-122.3317431,lat:47.79962928},{lng:-122.3239483,lat:47.81045191},{lng:-122.2869194,lat:47.81009232},{lng:-122.2864875,lat:47.77732814}];
var zone_31=new google.maps.Polygon({paths: loc_31,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Mountlake Terrace',center: {lng: -122.346222, lat: 47.77780602 }});
zone_31.setMap(map);
zone_31.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_31.label;var label=zone_31.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_31.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Alderwood Mall
//################################################
var loc_32=[{lng:-122.281803,lat:47.81973268},{lng:-122.2615349,lat:47.82991054},{lng:-122.2575032,lat:47.84980152},{lng:-122.2818211,lat:47.85006026},{lng:-122.2817856,lat:47.83914371}];
var zone_32=new google.maps.Polygon({paths: loc_32,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Alderwood Mall',center: {lng: -122.281803, lat: 47.81973268 }});
zone_32.setMap(map);
zone_32.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_32.label;var label=zone_32.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_32.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Brier
//################################################
var loc_33=[{lng:-122.2864889,lat:47.77732904},{lng:-122.2572253,lat:47.77707579},{lng:-122.2582921,lat:47.7975352},{lng:-122.286921,lat:47.81009165}];
var zone_33=new google.maps.Polygon({paths: loc_33,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Brier',center: {lng: -122.2864889, lat: 47.77732904 }});
zone_33.setMap(map);
zone_33.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_33.label;var label=zone_33.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_33.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Alderwood Manor
//################################################
var loc_34=[{lng:-122.257227,lat:47.77707714},{lng:-122.2231679,lat:47.7766851},{lng:-122.2207499,lat:47.7981647},{lng:-122.2325939,lat:47.81421003},{lng:-122.2615356,lat:47.82991099},{lng:-122.281803,lat:47.81973268},{lng:-122.2992159,lat:47.81021076},{lng:-122.286921,lat:47.81009142},{lng:-122.2582935,lat:47.79753498}];
var zone_34=new google.maps.Polygon({paths: loc_34,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Alderwood Manor',center: {lng: -122.257227, lat: 47.77707714 }});
zone_34.setMap(map);
zone_34.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_34.label;var label=zone_34.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_34.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Martha Lake
//################################################
var loc_35=[{lng:-122.2325946,lat:47.81421026},{lng:-122.2229457,lat:47.83423779},{lng:-122.2242043,lat:47.88924426},{lng:-122.2336755,lat:47.88191266},{lng:-122.2431953,lat:47.87399193},{lng:-122.24607,lat:47.86467903},{lng:-122.2575032,lat:47.84980197},{lng:-122.2615353,lat:47.82991144}];
var zone_35=new google.maps.Polygon({paths: loc_35,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Martha Lake',center: {lng: -122.2325946, lat: 47.81421026 }});
zone_35.setMap(map);
zone_35.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_35.label;var label=zone_35.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_35.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Silver Lake
//################################################
var loc_37=[{lng:-122.207006,lat:47.87818553},{lng:-122.223871,lat:47.87464816},{lng:-122.2242046,lat:47.88924449},{lng:-122.2171722,lat:47.89468676},{lng:-122.2056977,lat:47.92093912},{lng:-122.1802439,lat:47.91947863},{lng:-122.159735,lat:47.89801101},{lng:-122.1600713,lat:47.87899551}];
var zone_37=new google.maps.Polygon({paths: loc_37,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Silver Lake',center: {lng: -122.207006, lat: 47.87818553 }});
zone_37.setMap(map);
zone_37.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_37.label;var label=zone_37.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_37.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Creek
//################################################
var loc_38=[{lng:-122.2215268,lat:47.79127184},{lng:-122.1434376,lat:47.79034605},{lng:-122.1435472,lat:47.83412751},{lng:-122.1532682,lat:47.83420741},{lng:-122.2106896,lat:47.83461094},{lng:-122.2153597,lat:47.83997276},{lng:-122.2230778,lat:47.83999234},{lng:-122.2229463,lat:47.83423734},{lng:-122.2325946,lat:47.81421093},{lng:-122.2207509,lat:47.79816425}];
var zone_38=new google.maps.Polygon({paths: loc_38,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'North Creek',center: {lng: -122.2215268, lat: 47.79127184 }});
zone_38.setMap(map);
zone_38.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_38.label;var label=zone_38.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_38.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Richmond Beach
//################################################
var loc_39=[{lng:-122.3870087,lat:47.74948136},{lng:-122.3728037,lat:47.75171759},{lng:-122.3747624,lat:47.75789917},{lng:-122.3798663,lat:47.76742639},{lng:-122.3799394,lat:47.76834898},{lng:-122.3859878,lat:47.76871269},{lng:-122.3906746,lat:47.77177935},{lng:-122.3904982,lat:47.77782111},{lng:-122.4013836,lat:47.77786775},{lng:-122.3941326,lat:47.76465695},{lng:-122.3864937,lat:47.75784868}];
var zone_39=new google.maps.Polygon({paths: loc_39,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Richmond Beach',center: {lng: -122.3870087, lat: 47.74948136 }});
zone_39.setMap(map);
zone_39.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_39.label;var label=zone_39.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_39.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Sherwood
//################################################
var loc_40=[{lng:-122.3638428,lat:47.75597945},{lng:-122.3741391,lat:47.75592603},{lng:-122.3747637,lat:47.75789917},{lng:-122.379867,lat:47.76742662},{lng:-122.3799397,lat:47.7683483},{lng:-122.3859874,lat:47.76871201},{lng:-122.3906756,lat:47.77177913},{lng:-122.3904989,lat:47.77782089},{lng:-122.3666779,lat:47.77771837}];
var zone_40=new google.maps.Polygon({paths: loc_40,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Sherwood',center: {lng: -122.3638428, lat: 47.75597945 }});
zone_40.setMap(map);
zone_40.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_40.label;var label=zone_40.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_40.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Echo Lake
//################################################
var loc_41=[{lng:-122.3638441,lat:47.7559808},{lng:-122.329548,lat:47.75595127},{lng:-122.3247948,lat:47.76141069},{lng:-122.3232727,lat:47.76455509},{lng:-122.3222776,lat:47.76904508},{lng:-122.3190375,lat:47.77379876},{lng:-122.3178104,lat:47.77757958},{lng:-122.346221,lat:47.77780669},{lng:-122.3666789,lat:47.7777186}];
var zone_41=new google.maps.Polygon({paths: loc_41,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Echo Lake',center: {lng: -122.3638441, lat: 47.7559808 }});
zone_41.setMap(map);
zone_41.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_41.label;var label=zone_41.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_41.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Ridgecrest
//################################################
var loc_42=[{lng:-122.3248528,lat:47.73406525},{lng:-122.3127557,lat:47.73396423},{lng:-122.3134638,lat:47.75574864},{lng:-122.3295487,lat:47.75595218},{lng:-122.3302692,lat:47.75324817},{lng:-122.3290059,lat:47.74867522},{lng:-122.3298803,lat:47.743701}];
var zone_42=new google.maps.Polygon({paths: loc_42,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Ridgecrest',center: {lng: -122.3248528, lat: 47.73406525 }});
zone_42.setMap(map);
zone_42.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_42.label;var label=zone_42.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_42.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Briarcrest
//################################################
var loc_43=[{lng:-122.3127571,lat:47.73396535},{lng:-122.2831331,lat:47.7337137},{lng:-122.2804928,lat:47.74685548},{lng:-122.2992468,lat:47.755656},{lng:-122.3134652,lat:47.75574864}];
var zone_43=new google.maps.Polygon({paths: loc_43,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Briarcrest',center: {lng: -122.3127571, lat: 47.73396535 }});
zone_43.setMap(map);
zone_43.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_43.label;var label=zone_43.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_43.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake Forest Park
//################################################
var loc_44=[{lng:-122.2804938,lat:47.7468548},{lng:-122.2704077,lat:47.75049128},{lng:-122.2623315,lat:47.75835559},{lng:-122.257226,lat:47.77707827},{lng:-122.2864882,lat:47.77732971},{lng:-122.2992471,lat:47.75565577}];
var zone_44=new google.maps.Polygon({paths: loc_44,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Lake Forest Park',center: {lng: -122.2804938, lat: 47.7468548 }});
zone_44.setMap(map);
zone_44.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_44.label;var label=zone_44.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_44.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Ballinger
//################################################
var loc_45=[{lng:-122.2992471,lat:47.755656},{lng:-122.3295484,lat:47.75595218},{lng:-122.3247955,lat:47.76141114},{lng:-122.3232733,lat:47.76455531},{lng:-122.3222789,lat:47.76904553},{lng:-122.3190378,lat:47.77379943},{lng:-122.317811,lat:47.77757936},{lng:-122.2864882,lat:47.77732904}];
var zone_45=new google.maps.Polygon({paths: loc_45,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Ballinger',center: {lng: -122.2992471, lat: 47.755656 }});
zone_45.setMap(map);
zone_45.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_45.label;var label=zone_45.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_45.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Parkwood
//################################################
var loc_46=[{lng:-122.3555447,lat:47.73412162},{lng:-122.3248518,lat:47.7340657},{lng:-122.3298796,lat:47.74370167},{lng:-122.3290049,lat:47.74867589},{lng:-122.3302685,lat:47.75324817},{lng:-122.3295477,lat:47.75595308},{lng:-122.355768,lat:47.75597539}];
var zone_46=new google.maps.Polygon({paths: loc_46,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Parkwood',center: {lng: -122.3555447, lat: 47.73412162 }});
zone_46.setMap(map);
zone_46.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_46.label;var label=zone_46.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_46.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: The Highlands
//################################################
var loc_47=[{lng:-122.3791981,lat:47.73398542},{lng:-122.3555443,lat:47.73412207},{lng:-122.3557663,lat:47.75597494},{lng:-122.3638431,lat:47.75598125},{lng:-122.3741374,lat:47.75592693},{lng:-122.3728057,lat:47.75171894},{lng:-122.3870087,lat:47.74948226}];
var zone_47=new google.maps.Polygon({paths: loc_47,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'The Highlands',center: {lng: -122.3791981, lat: 47.73398542 }});
zone_47.setMap(map);
zone_47.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_47.label;var label=zone_47.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_47.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Broadview
//################################################
var loc_48=[{lng:-122.3554267,lat:47.70508526},{lng:-122.365668,lat:47.70152075},{lng:-122.397995,lat:47.70167531},{lng:-122.3851204,lat:47.70802888},{lng:-122.3796272,lat:47.72200402},{lng:-122.3791974,lat:47.73398633},{lng:-122.3555447,lat:47.7341232}];
var zone_48=new google.maps.Polygon({paths: loc_48,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Broadview',center: {lng: -122.3554267, lat: 47.70508526 }});
zone_48.setMap(map);
zone_48.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_48.label;var label=zone_48.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_48.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bitter Lake
//################################################
var loc_49=[{lng:-122.3554273,lat:47.70508594},{lng:-122.3446824,lat:47.70505187},{lng:-122.3450676,lat:47.73410358},{lng:-122.355545,lat:47.7341232}];
var zone_49=new google.maps.Polygon({paths: loc_49,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Bitter Lake',center: {lng: -122.3554273, lat: 47.70508594 }});
zone_49.setMap(map);
zone_49.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_49.label;var label=zone_49.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_49.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Northgate
//################################################
var loc_50=[{lng:-122.3445104,lat:47.69055989},{lng:-122.3291819,lat:47.69048157},{lng:-122.3206317,lat:47.68322074},{lng:-122.3066963,lat:47.6830501},{lng:-122.307337,lat:47.73392003},{lng:-122.3127564,lat:47.73396648},{lng:-122.3248535,lat:47.7340666},{lng:-122.345068,lat:47.73410358},{lng:-122.3446831,lat:47.705053}];
var zone_50=new google.maps.Polygon({paths: loc_50,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Northgate',center: {lng: -122.3445104, lat: 47.69055989 }});
zone_50.setMap(map);
zone_50.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_50.label;var label=zone_50.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_50.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake City
//################################################
var loc_51=[{lng:-122.30688,lat:47.69760578},{lng:-122.2683907,lat:47.69740065},{lng:-122.2786903,lat:47.73274269},{lng:-122.2831331,lat:47.7337146},{lng:-122.307338,lat:47.73392048}];
var zone_51=new google.maps.Polygon({paths: loc_51,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Lake City',center: {lng: -122.30688, lat: 47.69760578 }});
zone_51.setMap(map);
zone_51.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_51.label;var label=zone_51.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_51.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Wedgwood
//################################################
var loc_52=[{lng:-122.3068804,lat:47.69760668},{lng:-122.3066973,lat:47.683051},{lng:-122.2674727,lat:47.68301353},{lng:-122.268391,lat:47.69740156}];
var zone_52=new google.maps.Polygon({paths: loc_52,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Wedgwood',center: {lng: -122.3068804, lat: 47.69760668 }});
zone_52.setMap(map);
zone_52.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_52.label;var label=zone_52.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_52.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Ravenna
//################################################
var loc_53=[{lng:-122.290191,lat:47.66851791},{lng:-122.3005929,lat:47.66852445},{lng:-122.3044214,lat:47.66761726},{lng:-122.32148833572865,lat:47.67273398},{lng:-122.3206314,lat:47.68322142},{lng:-122.2904639,lat:47.68303633}];
var zone_53=new google.maps.Polygon({paths: loc_53,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Ravenna',center: {lng: -122.290191, lat: 47.66851791 }});
zone_53.setMap(map);
zone_53.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_53.label;var label=zone_53.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_53.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Hawthorne Hills
//################################################
var loc_54=[{lng:-122.2901927,lat:47.66851881},{lng:-122.26367,lat:47.66371103},{lng:-122.2636931,lat:47.68291602},{lng:-122.2674737,lat:47.68301399},{lng:-122.2904666,lat:47.68304987}];
var zone_54=new google.maps.Polygon({paths: loc_54,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Hawthorne Hills',center: {lng: -122.2901927, lat: 47.66851881 }});
zone_54.setMap(map);
zone_54.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_54.label;var label=zone_54.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_54.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Sand Point
//################################################
var loc_55=[{lng:-122.263671,lat:47.66371216},{lng:-122.2566319,lat:47.6661388},{lng:-122.2494221,lat:47.67157196},{lng:-122.2428989,lat:47.68197432},{lng:-122.244873,lat:47.68688582},{lng:-122.2681556,lat:47.69368938},{lng:-122.267474,lat:47.68301421},{lng:-122.2636944,lat:47.68291557}];
var zone_55=new google.maps.Polygon({paths: loc_55,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Sand Point',center: {lng: -122.263671, lat: 47.66371216 }});
zone_55.setMap(map);
zone_55.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_55.label;var label=zone_55.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_55.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: University District
//################################################
var loc_56=[{lng:-122.3223567,lat:47.65304757},{lng:-122.3214877,lat:47.6727351},{lng:-122.3044218,lat:47.66761816},{lng:-122.3005933,lat:47.66852491},{lng:-122.290191,lat:47.66851971},{lng:-122.2636706,lat:47.66371216},{lng:-122.2652149,lat:47.65729424},{lng:-122.2742271,lat:47.64711826},{lng:-122.3130977,lat:47.64736401},{lng:-122.3199373,lat:47.65292561}];
var zone_56=new google.maps.Polygon({paths: loc_56,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'University District',center: {lng: -122.3223567, lat: 47.65304757 }});
zone_56.setMap(map);
zone_56.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_56.label;var label=zone_56.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_56.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Wallingford
//################################################
var loc_57=[{lng:-122.322356,lat:47.65304847},{lng:-122.3254251,lat:47.65209087},{lng:-122.3322916,lat:47.64333068},{lng:-122.3384285,lat:47.64335959},{lng:-122.3428112,lat:47.64609911},{lng:-122.3424532,lat:47.6553873},{lng:-122.3472976,lat:47.65540943},{lng:-122.3473214,lat:47.66505092},{lng:-122.3401548,lat:47.6650245},{lng:-122.3394434,lat:47.67157241},{lng:-122.3214867,lat:47.67273443}];
var zone_57=new google.maps.Polygon({paths: loc_57,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Wallingford',center: {lng: -122.322356, lat: 47.65304847 }});
zone_57.setMap(map);
zone_57.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_57.label;var label=zone_57.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_57.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fremont
//################################################
var loc_58=[{lng:-122.3473197,lat:47.66505024},{lng:-122.3661475,lat:47.66502157},{lng:-122.366133,lat:47.65559778},{lng:-122.3566461,lat:47.65073212},{lng:-122.3461747,lat:47.64604852},{lng:-122.3428102,lat:47.64609934},{lng:-122.3424515,lat:47.65538798},{lng:-122.3472969,lat:47.65541011}];
var zone_58=new google.maps.Polygon({paths: loc_58,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Fremont',center: {lng: -122.3473197, lat: 47.66505024 }});
zone_58.setMap(map);
zone_58.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_58.label;var label=zone_58.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_58.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Greenwood
//################################################
var loc_59=[{lng:-122.3444876,lat:47.68693502},{lng:-122.3445091,lat:47.69056056},{lng:-122.3446817,lat:47.70505255},{lng:-122.3554267,lat:47.70508684},{lng:-122.3656683,lat:47.70152165},{lng:-122.3660422,lat:47.68693073}];
var zone_59=new google.maps.Polygon({paths: loc_59,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Greenwood',center: {lng: -122.3444876, lat: 47.68693502 }});
zone_59.setMap(map);
zone_59.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_59.label;var label=zone_59.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_59.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Sunset Hill
//################################################
var loc_60=[{lng:-122.3983598,lat:47.66554993},{lng:-122.3979933,lat:47.70167576},{lng:-122.404604,lat:47.69867154},{lng:-122.4097538,lat:47.69353005},{lng:-122.4076939,lat:47.68642358},{lng:-122.413702,lat:47.67729351},{lng:-122.4047756,lat:47.66795955}];
var zone_60=new google.maps.Polygon({paths: loc_60,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Sunset Hill',center: {lng: -122.3983598, lat: 47.66554993 }});
zone_60.setMap(map);
zone_60.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_60.label;var label=zone_60.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_60.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Crown Hill
//################################################
var loc_61=[{lng:-122.3660412,lat:47.68693163},{lng:-122.3981452,lat:47.68673573},{lng:-122.3979947,lat:47.70167576},{lng:-122.3656677,lat:47.70152143}];
var zone_61=new google.maps.Polygon({paths: loc_61,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Crown Hill',center: {lng: -122.3660412, lat: 47.68693163 }});
zone_61.setMap(map);
zone_61.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_61.label;var label=zone_61.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_61.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Ballard
//################################################
var loc_62=[{lng:-122.3660412,lat:47.68693299},{lng:-122.366132,lat:47.65559869},{lng:-122.3728466,lat:47.65978012},{lng:-122.3805285,lat:47.66038712},{lng:-122.3884249,lat:47.6645781},{lng:-122.3942506,lat:47.66446249},{lng:-122.3983604,lat:47.66555106},{lng:-122.3981462,lat:47.68673663}];
var zone_62=new google.maps.Polygon({paths: loc_62,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Ballard',center: {lng: -122.3660412, lat: 47.68693299 }});
zone_62.setMap(map);
zone_62.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_62.label;var label=zone_62.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_62.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Phinney Ridge
//################################################
var loc_63=[{lng:-122.3444893,lat:47.68693637},{lng:-122.3444641,lat:47.68277833},{lng:-122.3471805,lat:47.68114365},{lng:-122.34732,lat:47.66505002},{lng:-122.3661062,lat:47.66502179},{lng:-122.3660428,lat:47.68693209}];
var zone_63=new google.maps.Polygon({paths: loc_63,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Phinney Ridge',center: {lng: -122.3444893, lat: 47.68693637 }});
zone_63.setMap(map);
zone_63.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_63.label;var label=zone_63.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_63.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Green Lake
//################################################
var loc_64=[{lng:-122.347321,lat:47.6650507},{lng:-122.3401538,lat:47.66502383},{lng:-122.339442,lat:47.67157196},{lng:-122.3214873,lat:47.67273398},{lng:-122.3206297,lat:47.68322119},{lng:-122.3291819,lat:47.6904827},{lng:-122.3445101,lat:47.69056011},{lng:-122.3444903,lat:47.6869357},{lng:-122.3444651,lat:47.68277946},{lng:-122.3471822,lat:47.68114365}];
var zone_64=new google.maps.Polygon({paths: loc_64,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#6600CC',fillOpacity: 0.2,label: 'Green Lake',center: {lng: -122.347321, lat: 47.6650507 }});
zone_64.setMap(map);
zone_64.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_64.label;var label=zone_64.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_64.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Magnolia
//################################################
var loc_65=[{lng:-122.3903085,lat:47.63540178},{lng:-122.3971367,lat:47.62942122},{lng:-122.4209118,lat:47.63902232},{lng:-122.4217701,lat:47.652127},{lng:-122.4178219,lat:47.65330503},{lng:-122.4178128,lat:47.6541235},{lng:-122.403581,lat:47.65406862},{lng:-122.4035827,lat:47.66751295},{lng:-122.3983594,lat:47.66555196},{lng:-122.3942513,lat:47.66446362},{lng:-122.3884252,lat:47.664579},{lng:-122.3805288,lat:47.66038802},{lng:-122.3864317,lat:47.65586879},{lng:-122.3846232,lat:47.65398347},{lng:-122.3846141,lat:47.64296044}];
var zone_65=new google.maps.Polygon({paths: loc_65,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Magnolia',center: {lng: -122.3903085, lat: 47.63540178 }});
zone_65.setMap(map);
zone_65.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_65.label;var label=zone_65.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_65.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Discovery Park
//################################################
var loc_66=[{lng:-122.4217691,lat:47.65212723},{lng:-122.4178209,lat:47.65330458},{lng:-122.4178115,lat:47.65412282},{lng:-122.40358,lat:47.65406794},{lng:-122.403582,lat:47.66751295},{lng:-122.409841,lat:47.67325842},{lng:-122.4178219,lat:47.67238111},{lng:-122.4417686,lat:47.66186123},{lng:-122.4284649,lat:47.65723643}];
var zone_66=new google.maps.Polygon({paths: loc_66,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Discovery Park',center: {lng: -122.4217691, lat: 47.65212723 }});
zone_66.setMap(map);
zone_66.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_66.label;var label=zone_66.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_66.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Interbay
//################################################
var loc_67=[{lng:-122.3722458,lat:47.62372334},{lng:-122.3709996,lat:47.62856847},{lng:-122.3761823,lat:47.63350601},{lng:-122.3761561,lat:47.66004229},{lng:-122.3805285,lat:47.66038779},{lng:-122.386433,lat:47.65586924},{lng:-122.3846245,lat:47.65398325},{lng:-122.3846151,lat:47.64296089},{lng:-122.3903098,lat:47.63540201},{lng:-122.3971367,lat:47.62942212},{lng:-122.3877382,lat:47.62788835},{lng:-122.3865366,lat:47.62441753}];
var zone_67=new google.maps.Polygon({paths: loc_67,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Interbay',center: {lng: -122.3722458, lat: 47.62372334 }});
zone_67.setMap(map);
zone_67.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_67.label;var label=zone_67.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_67.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Queen Anne
//################################################
var loc_68=[{lng:-122.3761776,lat:47.63990675},{lng:-122.3455035,lat:47.63904536},{lng:-122.3461737,lat:47.64604942},{lng:-122.3566447,lat:47.65073212},{lng:-122.366133,lat:47.65560049},{lng:-122.3728463,lat:47.65978102},{lng:-122.3761568,lat:47.66004252}];
var zone_68=new google.maps.Polygon({paths: loc_68,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'North Queen Anne',center: {lng: -122.3761776, lat: 47.63990675 }});
zone_68.setMap(map);
zone_68.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_68.label;var label=zone_68.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_68.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lower Queen Anne
//################################################
var loc_69=[{lng:-122.3435995,lat:47.61749555},{lng:-122.3514855,lat:47.61119741},{lng:-122.3583734,lat:47.61477758},{lng:-122.3722475,lat:47.62372447},{lng:-122.3710006,lat:47.6285687},{lng:-122.3435958,lat:47.6286227}];
var zone_69=new google.maps.Polygon({paths: loc_69,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Lower Queen Anne',center: {lng: -122.3435995, lat: 47.61749555 }});
zone_69.setMap(map);
zone_69.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_69.label;var label=zone_69.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_69.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Queen Anne
//################################################
var loc_70=[{lng:-122.3435968,lat:47.62862225},{lng:-122.3434442,lat:47.63578269},{lng:-122.3436159,lat:47.6363005},{lng:-122.3455048,lat:47.63904649},{lng:-122.3761776,lat:47.63990742},{lng:-122.3761829,lat:47.63350624},{lng:-122.3710012,lat:47.62856847}];
var zone_70=new google.maps.Polygon({paths: loc_70,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Queen Anne',center: {lng: -122.3435968, lat: 47.62862225 }});
zone_70.setMap(map);
zone_70.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_70.label;var label=zone_70.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_70.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Westlake
//################################################
var loc_71=[{lng:-122.3379242,lat:47.62857525},{lng:-122.3435978,lat:47.6286218},{lng:-122.3434456,lat:47.63578246},{lng:-122.3436166,lat:47.63630005},{lng:-122.3455055,lat:47.63904627},{lng:-122.3461751,lat:47.64604987},{lng:-122.3431492,lat:47.6446607},{lng:-122.3405743,lat:47.64269456},{lng:-122.338171,lat:47.6377789}];
var zone_71=new google.maps.Polygon({paths: loc_71,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Westlake',center: {lng: -122.3379242, lat: 47.62857525 }});
zone_71.setMap(map);
zone_71.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_71.label;var label=zone_71.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_71.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Eastlake
//################################################
var loc_72=[{lng:-122.3278821,lat:47.62850295},{lng:-122.3324096,lat:47.62835834},{lng:-122.3325062,lat:47.63005749},{lng:-122.3298883,lat:47.63237114},{lng:-122.3314762,lat:47.63370144},{lng:-122.3314762,lat:47.64266565},{lng:-122.3243489,lat:47.65242784},{lng:-122.3223567,lat:47.65304915},{lng:-122.3224,lat:47.63447751}];
var zone_72=new google.maps.Polygon({paths: loc_72,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Eastlake',center: {lng: -122.3278821, lat: 47.62850295 }});
zone_72.setMap(map);
zone_72.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_72.label;var label=zone_72.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_72.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Lake Union
//################################################
var loc_73=[{lng:-122.3436001,lat:47.61856318},{lng:-122.3284286,lat:47.61848408},{lng:-122.3278824,lat:47.62850385},{lng:-122.3324086,lat:47.62835901},{lng:-122.3324519,lat:47.62912251},{lng:-122.3344374,lat:47.62912115},{lng:-122.3379256,lat:47.62857593},{lng:-122.3435971,lat:47.62862248}];
var zone_73=new google.maps.Polygon({paths: loc_73,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'South Lake Union',center: {lng: -122.3436001, lat: 47.61856318 }});
zone_73.setMap(map);
zone_73.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_73.label;var label=zone_73.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_73.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Pioneer Square
//################################################
var loc_74=[{lng:-122.334263,lat:47.60257142},{lng:-122.3362234,lat:47.60466973},{lng:-122.3404133,lat:47.60299462},{lng:-122.3399949,lat:47.60157672},{lng:-122.3388791,lat:47.60088223},{lng:-122.339952,lat:47.60044093},{lng:-122.3405528,lat:47.59842249},{lng:-122.3434925,lat:47.59053607},{lng:-122.343235,lat:47.58625231},{lng:-122.3202324,lat:47.58610758},{lng:-122.3205113,lat:47.59403808},{lng:-122.3207474,lat:47.59840802},{lng:-122.3281157,lat:47.60511551}];
var zone_74=new google.maps.Polygon({paths: loc_74,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Pioneer Square',center: {lng: -122.334263, lat: 47.60257142 }});
zone_74.setMap(map);
zone_74.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_74.label;var label=zone_74.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_74.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Seattle
//################################################
var loc_75=[{lng:-122.3381804,lat:47.60388689},{lng:-122.3362237,lat:47.60466905},{lng:-122.3342634,lat:47.60257052},{lng:-122.3281164,lat:47.60511438},{lng:-122.3284292,lat:47.61848498},{lng:-122.3436005,lat:47.61856363},{lng:-122.3436001,lat:47.61749555},{lng:-122.3494997,lat:47.61278478},{lng:-122.343066,lat:47.6089669}];
var zone_75=new google.maps.Polygon({paths: loc_75,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Downtown Seattle',center: {lng: -122.3381804, lat: 47.60388689 }});
zone_75.setMap(map);
zone_75.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_75.label;var label=zone_75.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_75.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Seattle Waterfront
//################################################
var loc_76=[{lng:-122.340413,lat:47.60299485},{lng:-122.3400593,lat:47.60357334},{lng:-122.3423553,lat:47.60510692},{lng:-122.3448658,lat:47.60750848},{lng:-122.3514855,lat:47.61119831},{lng:-122.3494986,lat:47.61278524},{lng:-122.343065,lat:47.60896736},{lng:-122.3381791,lat:47.60388734}];
var zone_76=new google.maps.Polygon({paths: loc_76,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Seattle Waterfront',center: {lng: -122.340413, lat: 47.60299485 }});
zone_76.setMap(map);
zone_76.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_76.label;var label=zone_76.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_76.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Capitol Hill
//################################################
var loc_77=[{lng:-122.3127799,lat:47.61528747},{lng:-122.3283538,lat:47.61523006},{lng:-122.3284296,lat:47.61848521},{lng:-122.3278831,lat:47.62850385},{lng:-122.322401,lat:47.63447797},{lng:-122.3223574,lat:47.65304915},{lng:-122.3199373,lat:47.65292629},{lng:-122.3126444,lat:47.64699539}];
var zone_77=new google.maps.Polygon({paths: loc_77,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Capitol Hill',center: {lng: -122.3127799, lat: 47.61528747 }});
zone_77.setMap(map);
zone_77.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_77.label;var label=zone_77.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_77.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Stevens
//################################################
var loc_78=[{lng:-122.3127805,lat:47.61528837},{lng:-122.3108554,lat:47.61527662},{lng:-122.3041686,lat:47.61810169},{lng:-122.2922972,lat:47.62610597},{lng:-122.2933147,lat:47.62775639},{lng:-122.2956429,lat:47.62869365},{lng:-122.2970581,lat:47.63048227},{lng:-122.2970112,lat:47.6326992},{lng:-122.2978755,lat:47.63379679},{lng:-122.3126729,lat:47.64051262}];
var zone_78=new google.maps.Polygon({paths: loc_78,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Stevens',center: {lng: -122.3127805, lat: 47.61528837 }});
zone_78.setMap(map);
zone_78.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_78.label;var label=zone_78.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_78.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Madison Park
//################################################
var loc_79=[{lng:-122.2922982,lat:47.62610642},{lng:-122.2888006,lat:47.62849978},{lng:-122.2777247,lat:47.6285391},{lng:-122.2749996,lat:47.63092512},{lng:-122.2738409,lat:47.63922473},{lng:-122.2742275,lat:47.64711894},{lng:-122.2985648,lat:47.64727367},{lng:-122.2989799,lat:47.63429745},{lng:-122.2978765,lat:47.63379634},{lng:-122.2970152,lat:47.6326992},{lng:-122.2970591,lat:47.63048295},{lng:-122.2956436,lat:47.62869343},{lng:-122.2933158,lat:47.62775571}];
var zone_79=new google.maps.Polygon({paths: loc_79,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Madison Park',center: {lng: -122.2922982, lat: 47.62610642 }});
zone_79.setMap(map);
zone_79.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_79.label;var label=zone_79.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_79.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Montlake
//################################################
var loc_80=[{lng:-122.2989802,lat:47.63429722},{lng:-122.2985642,lat:47.64727321},{lng:-122.3126779,lat:47.64736492},{lng:-122.3126733,lat:47.64051239}];
var zone_80=new google.maps.Polygon({paths: loc_80,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Montlake',center: {lng: -122.2989802, lat: 47.63429722 }});
zone_80.setMap(map);
zone_80.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_80.label;var label=zone_80.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_80.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Squire Park
//################################################
var loc_81=[{lng:-122.3022183,lat:47.5992807},{lng:-122.3025255,lat:47.61921065},{lng:-122.3041686,lat:47.61810191},{lng:-122.3108557,lat:47.61527775},{lng:-122.3127805,lat:47.61528883},{lng:-122.3168598,lat:47.615273},{lng:-122.316765,lat:47.59920021}];
var zone_81=new google.maps.Polygon({paths: loc_81,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Squire Park',center: {lng: -122.3022183, lat: 47.5992807 }});
zone_81.setMap(map);
zone_81.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_81.label;var label=zone_81.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_81.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Madrona
//################################################
var loc_82=[{lng:-122.3023538,lat:47.60800216},{lng:-122.2807503,lat:47.60801482},{lng:-122.2782612,lat:47.61680986},{lng:-122.2777244,lat:47.62854023},{lng:-122.2888013,lat:47.62850046},{lng:-122.2922989,lat:47.6261071},{lng:-122.3025268,lat:47.61921065}];
var zone_82=new google.maps.Polygon({paths: loc_82,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Madrona',center: {lng: -122.3023538, lat: 47.60800216 }});
zone_82.setMap(map);
zone_82.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_82.label;var label=zone_82.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_82.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: First Hill
//################################################
var loc_83=[{lng:-122.3207484,lat:47.59840802},{lng:-122.3167643,lat:47.59920112},{lng:-122.3168592,lat:47.61527346},{lng:-122.3283541,lat:47.61523029},{lng:-122.3281171,lat:47.60511393}];
var zone_83=new google.maps.Polygon({paths: loc_83,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'First Hill',center: {lng: -122.3207484, lat: 47.59840802 }});
zone_83.setMap(map);
zone_83.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_83.label;var label=zone_83.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_83.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Leschi
//################################################
var loc_84=[{lng:-122.2841406,lat:47.59007298},{lng:-122.3096538,lat:47.59034071},{lng:-122.3140311,lat:47.59535489},{lng:-122.3205026,lat:47.59375545},{lng:-122.3207487,lat:47.59840825},{lng:-122.3167646,lat:47.5992018},{lng:-122.3022193,lat:47.59928138},{lng:-122.3023541,lat:47.60800284},{lng:-122.2807516,lat:47.6080155},{lng:-122.283926,lat:47.59603498}];
var zone_84=new google.maps.Polygon({paths: loc_84,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Leschi',center: {lng: -122.2841406, lat: 47.59007298 }});
zone_84.setMap(map);
zone_84.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_84.label;var label=zone_84.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_84.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Industrial District
//################################################
var loc_85=[{lng:-122.3179901,lat:47.55346486},{lng:-122.3418188,lat:47.55335987},{lng:-122.3474407,lat:47.56459658},{lng:-122.3446083,lat:47.57412273},{lng:-122.3432343,lat:47.58625299},{lng:-122.3202331,lat:47.58610849},{lng:-122.319122,lat:47.57965232},{lng:-122.3217827,lat:47.56037767}];
var zone_85=new google.maps.Polygon({paths: loc_85,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Industrial District',center: {lng: -122.3179901, lat: 47.55346486 }});
zone_85.setMap(map);
zone_85.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_85.label;var label=zone_85.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_85.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Beacon Hill
//################################################
var loc_86=[{lng:-122.2933728,lat:47.56082858},{lng:-122.2973565,lat:47.56165913},{lng:-122.3045317,lat:47.55962765},{lng:-122.3134712,lat:47.56382536},{lng:-122.3134538,lat:47.56920175},{lng:-122.3154896,lat:47.57293613},{lng:-122.3201338,lat:47.57233083},{lng:-122.3191226,lat:47.57965254},{lng:-122.3202344,lat:47.58610849},{lng:-122.3205026,lat:47.59375613},{lng:-122.3140311,lat:47.59535534},{lng:-122.3096534,lat:47.59034161},{lng:-122.3073105,lat:47.59031697},{lng:-122.2965944,lat:47.57635517},{lng:-122.2967865,lat:47.56626365}];
var zone_86=new google.maps.Polygon({paths: loc_86,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'North Beacon Hill',center: {lng: -122.2933728, lat: 47.56082858 }});
zone_86.setMap(map);
zone_86.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_86.label;var label=zone_86.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_86.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mount Baker
//################################################
var loc_87=[{lng:-122.2933741,lat:47.56082949},{lng:-122.2869901,lat:47.56072609},{lng:-122.2881703,lat:47.56408824},{lng:-122.2795195,lat:47.56407263},{lng:-122.2795594,lat:47.57421683},{lng:-122.2842693,lat:47.58387873},{lng:-122.2841416,lat:47.59007389},{lng:-122.3073122,lat:47.59031674},{lng:-122.2965951,lat:47.57635472},{lng:-122.2967875,lat:47.5662641}];
var zone_87=new google.maps.Polygon({paths: loc_87,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Mount Baker',center: {lng: -122.2933741, lat: 47.56082949 }});
zone_87.setMap(map);
zone_87.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_87.label;var label=zone_87.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_87.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Beacon Hill
//################################################
var loc_88=[{lng:-122.2810986,lat:47.53706684},{lng:-122.2985065,lat:47.5371232},{lng:-122.3179911,lat:47.55346554},{lng:-122.3217834,lat:47.5603779},{lng:-122.3201342,lat:47.57233128},{lng:-122.3154892,lat:47.57293681},{lng:-122.3134531,lat:47.56920221},{lng:-122.3134705,lat:47.56382604},{lng:-122.3045321,lat:47.55962901},{lng:-122.2973572,lat:47.56166026},{lng:-122.2933738,lat:47.56083016}];
var zone_88=new google.maps.Polygon({paths: loc_88,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Beacon Hill',center: {lng: -122.2810986, lat: 47.53706684 }});
zone_88.setMap(map);
zone_88.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_88.label;var label=zone_88.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_88.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Seward Park
//################################################
var loc_89=[{lng:-122.2609448,lat:47.53699282},{lng:-122.2672702,lat:47.53697743},{lng:-122.2672169,lat:47.53888801},{lng:-122.2645581,lat:47.5424625},{lng:-122.2631952,lat:47.54847926},{lng:-122.2706088,lat:47.55549952},{lng:-122.2707725,lat:47.56927301},{lng:-122.2663307,lat:47.56766599},{lng:-122.2587776,lat:47.55446048},{lng:-122.2563744,lat:47.55486596},{lng:-122.2577477,lat:47.56222202},{lng:-122.2495079,lat:47.56361202},{lng:-122.2440147,lat:47.55364951},{lng:-122.247963,lat:47.54803028},{lng:-122.2551727,lat:47.54745094},{lng:-122.2556877,lat:47.54345335}];
var zone_89=new google.maps.Polygon({paths: loc_89,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Seward Park',center: {lng: -122.2609448, lat: 47.53699282 }});
zone_89.setMap(map);
zone_89.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_89.label;var label=zone_89.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_89.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Rainier Valley
//################################################
var loc_90=[{lng:-122.2584772,lat:47.52262037},{lng:-122.2883154,lat:47.51688097},{lng:-122.2985068,lat:47.5371241},{lng:-122.2811003,lat:47.53706774},{lng:-122.2933758,lat:47.56083084},{lng:-122.2869914,lat:47.560727},{lng:-122.2881716,lat:47.56408915},{lng:-122.2795205,lat:47.56407354},{lng:-122.2795604,lat:47.57421683},{lng:-122.2707721,lat:47.56927278},{lng:-122.2706078,lat:47.55549997},{lng:-122.2631925,lat:47.54847881},{lng:-122.2645571,lat:47.54246227},{lng:-122.2672165,lat:47.53888779},{lng:-122.2672695,lat:47.53697856},{lng:-122.2609455,lat:47.5369935},{lng:-122.2583699,lat:47.52937243}];
var zone_90=new google.maps.Polygon({paths: loc_90,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Rainier Valley',center: {lng: -122.2584772, lat: 47.52262037 }});
zone_90.setMap(map);
zone_90.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_90.label;var label=zone_90.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_90.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Rainier Beach
//################################################
var loc_91=[{lng:-122.218523,lat:47.50386651},{lng:-122.2190166,lat:47.50047716},{lng:-122.2487281,lat:47.49779797},{lng:-122.2722852,lat:47.49794656},{lng:-122.2883148,lat:47.51688188},{lng:-122.2584775,lat:47.52262082}];
var zone_91=new google.maps.Polygon({paths: loc_91,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Rainier Beach',center: {lng: -122.218523, lat: 47.50386651 }});
zone_91.setMap(map);
zone_91.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_91.label;var label=zone_91.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_91.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bryn Mawr Skyway
//################################################
var loc_92=[{lng:-122.2190169,lat:47.50047852},{lng:-122.2331005,lat:47.47730716},{lng:-122.2518267,lat:47.473888},{lng:-122.2513318,lat:47.47458463},{lng:-122.2539067,lat:47.4766151},{lng:-122.2587347,lat:47.47732574},{lng:-122.259239,lat:47.47802187},{lng:-122.2586489,lat:47.47882677},{lng:-122.2556448,lat:47.47921108},{lng:-122.2574043,lat:47.48103109},{lng:-122.2606981,lat:47.48124137},{lng:-122.2615564,lat:47.48201721},{lng:-122.2593033,lat:47.48356885},{lng:-122.2611916,lat:47.48459842},{lng:-122.2634232,lat:47.4843374},{lng:-122.2669423,lat:47.48236524},{lng:-122.26794,lat:47.48272778},{lng:-122.2684979,lat:47.48355435},{lng:-122.267704,lat:47.48504794},{lng:-122.2646785,lat:47.48696925},{lng:-122.2644532,lat:47.49049268},{lng:-122.2722842,lat:47.49794792},{lng:-122.2487284,lat:47.49779887}];
var zone_92=new google.maps.Polygon({paths: loc_92,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Bryn Mawr Skyway',center: {lng: -122.2190169, lat: 47.50047852 }});
zone_92.setMap(map);
zone_92.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_92.label;var label=zone_92.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_92.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Allentown
//################################################
var loc_93=[{lng:-122.2883138,lat:47.51688188},{lng:-122.3052979,lat:47.51627321},{lng:-122.3039675,lat:47.51259209},{lng:-122.2977877,lat:47.51178047},{lng:-122.2933245,lat:47.51004124},{lng:-122.2922945,lat:47.50812802},{lng:-122.2931528,lat:47.5063017},{lng:-122.2969723,lat:47.50363458},{lng:-122.2975087,lat:47.50185159},{lng:-122.29635,lat:47.50043096},{lng:-122.294333,lat:47.50014103},{lng:-122.2878957,lat:47.50074988},{lng:-122.2813296,lat:47.50005405},{lng:-122.2803855,lat:47.49045643},{lng:-122.2794843,lat:47.48996346},{lng:-122.2736478,lat:47.49155836},{lng:-122.2711694,lat:47.49065217},{lng:-122.2708154,lat:47.48894124},{lng:-122.2695601,lat:47.48873825},{lng:-122.2676826,lat:47.48926748},{lng:-122.2659767,lat:47.48883975},{lng:-122.2646788,lat:47.48696903},{lng:-122.2644518,lat:47.49049336},{lng:-122.2722825,lat:47.4979477}];
var zone_93=new google.maps.Polygon({paths: loc_93,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Allentown',center: {lng: -122.2883138, lat: 47.51688188 }});
zone_93.setMap(map);
zone_93.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_93.label;var label=zone_93.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_93.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Georgetown
//################################################
var loc_94=[{lng:-122.3052972,lat:47.51627231},{lng:-122.2883151,lat:47.5168812},{lng:-122.2985065,lat:47.5371241},{lng:-122.3179897,lat:47.55346532},{lng:-122.3418185,lat:47.55336055},{lng:-122.3367548,lat:47.54382994},{lng:-122.3094606,lat:47.52644568}];
var zone_94=new google.maps.Polygon({paths: loc_94,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Georgetown',center: {lng: -122.3052972, lat: 47.51627231 }});
zone_94.setMap(map);
zone_94.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_94.label;var label=zone_94.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_94.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Admiral
//################################################
var loc_95=[{lng:-122.3533111,lat:47.57108311},{lng:-122.394769,lat:47.57027964},{lng:-122.3941832,lat:47.57936848},{lng:-122.3972785,lat:47.58305351},{lng:-122.3870516,lat:47.59424067},{lng:-122.3811075,lat:47.59415271},{lng:-122.3792846,lat:47.58940909},{lng:-122.3722247,lat:47.58565938},{lng:-122.3604662,lat:47.58561551},{lng:-122.3594999,lat:47.57499107}];
var zone_95=new google.maps.Polygon({paths: loc_95,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'North Admiral',center: {lng: -122.3533111, lat: 47.57108311 }});
zone_95.setMap(map);
zone_95.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_95.label;var label=zone_95.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_95.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Alki
//################################################
var loc_96=[{lng:-122.4022007,lat:47.554055},{lng:-122.3950157,lat:47.55397331},{lng:-122.3947676,lat:47.57028054},{lng:-122.3941826,lat:47.57936961},{lng:-122.3972772,lat:47.58305351},{lng:-122.3870506,lat:47.59423954},{lng:-122.3811075,lat:47.59415226},{lng:-122.3821163,lat:47.59628098},{lng:-122.3891115,lat:47.59639674},{lng:-122.4032307,lat:47.58416819},{lng:-122.4247742,lat:47.57664152},{lng:-122.4141312,lat:47.57050358}];
var zone_96=new google.maps.Polygon({paths: loc_96,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Alki',center: {lng: -122.4022007, lat: 47.554055 }});
zone_96.setMap(map);
zone_96.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_96.label;var label=zone_96.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_96.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Seattle
//################################################
var loc_97=[{lng:-122.3761283,lat:47.57064179},{lng:-122.3764418,lat:47.54467751},{lng:-122.4015141,lat:47.54510456},{lng:-122.4022007,lat:47.55405613},{lng:-122.3950167,lat:47.55397376},{lng:-122.3947676,lat:47.57028122}];
var zone_97=new google.maps.Polygon({paths: loc_97,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'West Seattle',center: {lng: -122.3761283, lat: 47.57064179 }});
zone_97.setMap(map);
zone_97.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_97.label;var label=zone_97.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_97.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Delridge
//################################################
var loc_98=[{lng:-122.3763331,lat:47.55377962},{lng:-122.3418178,lat:47.5533601},{lng:-122.3495114,lat:47.56878078},{lng:-122.3533131,lat:47.57108311},{lng:-122.376129,lat:47.57064156}];
var zone_98=new google.maps.Polygon({paths: loc_98,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'North Delridge',center: {lng: -122.3763331, lat: 47.55377962 }});
zone_98.setMap(map);
zone_98.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_98.label;var label=zone_98.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_98.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Delridge
//################################################
var loc_99=[{lng:-122.360437,lat:47.52828624},{lng:-122.3766218,lat:47.53375434},{lng:-122.3764424,lat:47.54467841},{lng:-122.3763331,lat:47.55378052},{lng:-122.354789,lat:47.55351849},{lng:-122.3549787,lat:47.53911164},{lng:-122.3409679,lat:47.52826451}];
var zone_99=new google.maps.Polygon({paths: loc_99,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Delridge',center: {lng: -122.360437, lat: 47.52828624 }});
zone_99.setMap(map);
zone_99.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_99.label;var label=zone_99.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_99.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Riverview
//################################################
var loc_100=[{lng:-122.3409716,lat:47.52826519},{lng:-122.3340652,lat:47.52830526},{lng:-122.3344427,lat:47.54235884},{lng:-122.3367545,lat:47.54383085},{lng:-122.3418178,lat:47.55336078},{lng:-122.3547903,lat:47.55351872},{lng:-122.3549797,lat:47.53911141}];
var zone_100=new google.maps.Polygon({paths: loc_100,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Riverview',center: {lng: -122.3409716, lat: 47.52826519 }});
zone_100.setMap(map);
zone_100.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_100.label;var label=zone_100.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_100.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: White Center
//################################################
var loc_101=[{lng:-122.3768894,lat:47.51749031},{lng:-122.3758782,lat:47.50999074},{lng:-122.3761839,lat:47.49917111},{lng:-122.3498024,lat:47.49922615},{lng:-122.3499965,lat:47.48842605},{lng:-122.326549,lat:47.48851373},{lng:-122.3253018,lat:47.49220447},{lng:-122.3249182,lat:47.50718588},{lng:-122.3300909,lat:47.51724961}];
var zone_101=new google.maps.Polygon({paths: loc_101,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'White Center',center: {lng: -122.3768894, lat: 47.51749031 }});
zone_101.setMap(map);
zone_101.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_101.label;var label=zone_101.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_101.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Roxhill
//################################################
var loc_102=[{lng:-122.3768887,lat:47.51749031},{lng:-122.3766211,lat:47.53375547},{lng:-122.3604374,lat:47.52828692},{lng:-122.3409699,lat:47.52826519},{lng:-122.3340652,lat:47.52830616},{lng:-122.3300905,lat:47.5172487}];
var zone_102=new google.maps.Polygon({paths: loc_102,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Roxhill',center: {lng: -122.3768887, lat: 47.51749031 }});
zone_102.setMap(map);
zone_102.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_102.label;var label=zone_102.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_102.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fauntleroy
//################################################
var loc_103=[{lng:-122.3803997,lat:47.49737211},{lng:-122.3888111,lat:47.50108329},{lng:-122.402029,lat:47.51766443},{lng:-122.396965,lat:47.52321447},{lng:-122.404604,lat:47.53058945},{lng:-122.3994541,lat:47.53580493},{lng:-122.4015137,lat:47.54510524},{lng:-122.3764411,lat:47.54467819},{lng:-122.3766201,lat:47.53375411},{lng:-122.3768877,lat:47.51749076},{lng:-122.3758772,lat:47.50999096},{lng:-122.3761829,lat:47.49917201}];
var zone_103=new google.maps.Polygon({paths: loc_103,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Fauntleroy',center: {lng: -122.3803997, lat: 47.49737211 }});
zone_103.setMap(map);
zone_103.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_103.label;var label=zone_103.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_103.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Highline
//################################################
var loc_104=[{lng:-122.3265507,lat:47.48851418},{lng:-122.2708147,lat:47.48894147},{lng:-122.2711681,lat:47.49065263},{lng:-122.2736481,lat:47.49155972},{lng:-122.2794839,lat:47.48996436},{lng:-122.2803848,lat:47.49045689},{lng:-122.2813286,lat:47.50005518},{lng:-122.2878957,lat:47.50075056},{lng:-122.2943333,lat:47.50014148},{lng:-122.2963493,lat:47.50043164},{lng:-122.2975077,lat:47.50185182},{lng:-122.2969713,lat:47.50363413},{lng:-122.2931521,lat:47.50630147},{lng:-122.2922938,lat:47.50812802},{lng:-122.2933235,lat:47.51004237},{lng:-122.2977873,lat:47.51178137},{lng:-122.3039665,lat:47.51259254},{lng:-122.3052965,lat:47.51627321},{lng:-122.3300922,lat:47.51724983},{lng:-122.3249196,lat:47.50718611},{lng:-122.3253024,lat:47.49220424}];
var zone_104=new google.maps.Polygon({paths: loc_104,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Highline',center: {lng: -122.3265507, lat: 47.48851418 }});
zone_104.setMap(map);
zone_104.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_104.label;var label=zone_104.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_104.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Park
//################################################
var loc_105=[{lng:-122.3300919,lat:47.51724893},{lng:-122.3052962,lat:47.51627231},{lng:-122.30946,lat:47.52644704},{lng:-122.3344437,lat:47.54235975},{lng:-122.3340662,lat:47.52830526}];
var zone_105=new google.maps.Polygon({paths: loc_105,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'South Park',center: {lng: -122.3300919, lat: 47.51724893 }});
zone_105.setMap(map);
zone_105.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_105.label;var label=zone_105.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_105.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Burien
//################################################
var loc_106=[{lng:-122.3138182,lat:47.43465236},{lng:-122.3561096,lat:47.43517081},{lng:-122.3568821,lat:47.44080213},{lng:-122.3677826,lat:47.4462587},{lng:-122.3881245,lat:47.45032175},{lng:-122.3692417,lat:47.45925933},{lng:-122.3714733,lat:47.46889166},{lng:-122.3623753,lat:47.48316282},{lng:-122.3697567,lat:47.49128288},{lng:-122.3804004,lat:47.49737279},{lng:-122.3761833,lat:47.49917247},{lng:-122.3498021,lat:47.49922683},{lng:-122.3499955,lat:47.48842741},{lng:-122.3115504,lat:47.48862973},{lng:-122.3182636,lat:47.46438897},{lng:-122.3187089,lat:47.43988055}];
var zone_106=new google.maps.Polygon({paths: loc_106,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Burien',center: {lng: -122.3138182, lat: 47.43465236 }});
zone_106.setMap(map);
zone_106.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_106.label;var label=zone_106.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_106.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Latona
//################################################
var loc_107=[{lng:-122.2897974,lat:47.46351676},{lng:-122.2964332,lat:47.46392884},{lng:-122.3177098,lat:47.46639421},{lng:-122.3115514,lat:47.48863018},{lng:-122.2911666,lat:47.48878628},{lng:-122.286448,lat:47.48415977},{lng:-122.2835931,lat:47.47604064}];
var zone_107=new google.maps.Polygon({paths: loc_107,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Latona',center: {lng: -122.2897974, lat: 47.46351676 }});
zone_107.setMap(map);
zone_107.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_107.label;var label=zone_107.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_107.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: SeaTac
//################################################
var loc_108=[{lng:-122.2982208,lat:47.4082332},{lng:-122.2919857,lat:47.40817375},{lng:-122.289784,lat:47.41651639},{lng:-122.284838,lat:47.42223681},{lng:-122.2719741,lat:47.43094692},{lng:-122.2700214,lat:47.43432896},{lng:-122.2685174,lat:47.44135497},{lng:-122.2641836,lat:47.45476194},{lng:-122.2643241,lat:47.46308042},{lng:-122.289798,lat:47.46351812},{lng:-122.2949801,lat:47.45326748},{lng:-122.2964345,lat:47.44856665},{lng:-122.2955071,lat:47.43454691},{lng:-122.2963513,lat:47.42269209}];
var zone_108=new google.maps.Polygon({paths: loc_108,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'SeaTac',center: {lng: -122.2982208, lat: 47.4082332 }});
zone_108.setMap(map);
zone_108.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_108.label;var label=zone_108.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_108.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: SeaTac AirPort
//################################################
var loc_109=[{lng:-122.3138206,lat:47.43465305},{lng:-122.2955061,lat:47.43454645},{lng:-122.2964338,lat:47.44856642},{lng:-122.2949791,lat:47.45326703},{lng:-122.2897967,lat:47.46351812},{lng:-122.3177098,lat:47.46639444},{lng:-122.318265,lat:47.46438919},{lng:-122.3187099,lat:47.43987987}];
var zone_109=new google.maps.Polygon({paths: loc_109,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'SeaTac AirPort',center: {lng: -122.3138206, lat: 47.43465305 }});
zone_109.setMap(map);
zone_109.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_109.label;var label=zone_109.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_109.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Des Moines
//################################################
var loc_110=[{lng:-122.3294163,lat:47.38698971},{lng:-122.3131913,lat:47.38672299},{lng:-122.3118646,lat:47.39202243},{lng:-122.3116453,lat:47.40832169},{lng:-122.3258771,lat:47.40850253},{lng:-122.3354673,lat:47.40395541},{lng:-122.3307896,lat:47.39387542}];
var zone_110=new google.maps.Polygon({paths: loc_110,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Downtown Des Moines',center: {lng: -122.3294163, lat: 47.38698971 }});
zone_110.setMap(map);
zone_110.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_110.label;var label=zone_110.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_110.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Normandy Park
//################################################
var loc_111=[{lng:-122.3352893,lat:47.4349168},{lng:-122.3357885,lat:47.43127262},{lng:-122.3352588,lat:47.41604722},{lng:-122.3513879,lat:47.41554266},{lng:-122.355938,lat:47.42367408},{lng:-122.3561096,lat:47.43517217}];
var zone_111=new google.maps.Polygon({paths: loc_111,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Normandy Park',center: {lng: -122.3352893, lat: 47.4349168 }});
zone_111.setMap(map);
zone_111.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_111.label;var label=zone_111.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_111.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Tukwila
//################################################
var loc_112=[{lng:-122.289798,lat:47.46351721},{lng:-122.2487659,lat:47.46281182},{lng:-122.2488642,lat:47.46442024},{lng:-122.2482955,lat:47.46531238},{lng:-122.2468686,lat:47.46617912},{lng:-122.2438002,lat:47.46710749},{lng:-122.2461605,lat:47.46913099},{lng:-122.2478342,lat:47.46876111},{lng:-122.2489285,lat:47.46793431},{lng:-122.2499585,lat:47.46664331},{lng:-122.2508383,lat:47.4668754},{lng:-122.2518575,lat:47.46893517},{lng:-122.2518897,lat:47.47055247},{lng:-122.2531557,lat:47.47187239},{lng:-122.2532845,lat:47.47280066},{lng:-122.2518253,lat:47.47388868},{lng:-122.2513305,lat:47.47458509},{lng:-122.2539061,lat:47.47661578},{lng:-122.2587347,lat:47.47732642},{lng:-122.259238,lat:47.4780221},{lng:-122.2586475,lat:47.4788245},{lng:-122.2556435,lat:47.47921063},{lng:-122.257404,lat:47.481032},{lng:-122.2606981,lat:47.4812425},{lng:-122.2615554,lat:47.48201698},{lng:-122.259302,lat:47.48356885},{lng:-122.2611923,lat:47.48459978},{lng:-122.2634219,lat:47.48433922},{lng:-122.2669426,lat:47.48236615},{lng:-122.267939,lat:47.48272823},{lng:-122.2684969,lat:47.4835548},{lng:-122.2677037,lat:47.48504749},{lng:-122.2646775,lat:47.48696903},{lng:-122.265976,lat:47.48884065},{lng:-122.2676832,lat:47.48926884},{lng:-122.2695598,lat:47.48873915},{lng:-122.270815,lat:47.48894238},{lng:-122.2911676,lat:47.48878628},{lng:-122.2864493,lat:47.48415977},{lng:-122.2835944,lat:47.47604109}];
var zone_112=new google.maps.Polygon({paths: loc_112,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Tukwila',center: {lng: -122.289798, lat: 47.46351721 }});
zone_112.setMap(map);
zone_112.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_112.label;var label=zone_112.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_112.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Southcenter
//################################################
var loc_113=[{lng:-122.2462809,lat:47.44122708},{lng:-122.2685194,lat:47.44135361},{lng:-122.264185,lat:47.45476171},{lng:-122.2643254,lat:47.46308042},{lng:-122.2487663,lat:47.46281273},{lng:-122.2480488,lat:47.46126138},{lng:-122.2484457,lat:47.46020234},{lng:-122.2480166,lat:47.45971633},{lng:-122.2456992,lat:47.45964379},{lng:-122.2452271,lat:47.459107},{lng:-122.2468579,lat:47.45750386},{lng:-122.2468042,lat:47.45671315},{lng:-122.2439289,lat:47.45524776},{lng:-122.2436392,lat:47.45480524},{lng:-122.2438538,lat:47.45415233},{lng:-122.2470081,lat:47.45159501},{lng:-122.247228,lat:47.45076431},{lng:-122.2467774,lat:47.45016939},{lng:-122.2440147,lat:47.4489106},{lng:-122.2437304,lat:47.44788759},{lng:-122.2440737,lat:47.44707497},{lng:-122.2463751,lat:47.44535536},{lng:-122.2466272,lat:47.44436856},{lng:-122.2464824,lat:47.4434543},{lng:-122.2466326,lat:47.44243843}];
var zone_113=new google.maps.Polygon({paths: loc_113,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Southcenter',center: {lng: -122.2462809, lat: 47.44122708 }});
zone_113.setMap(map);
zone_113.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_113.label;var label=zone_113.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_113.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Kent
//################################################
var loc_114=[{lng:-122.2537317,lat:47.3867357},{lng:-122.2537595,lat:47.37781553},{lng:-122.1867556,lat:47.37793518},{lng:-122.1867801,lat:47.39232181},{lng:-122.2373002,lat:47.39233838}];
var zone_114=new google.maps.Polygon({paths: loc_114,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Downtown Kent',center: {lng: -122.2537317, lat: 47.3867357 }});
zone_114.setMap(map);
zone_114.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_114.label;var label=zone_114.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_114.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: O'Brien
//################################################
var loc_115=[{lng:-122.1970711,lat:47.43022658},{lng:-122.1966523,lat:47.39232385},{lng:-122.2372992,lat:47.39233793},{lng:-122.2492917,lat:47.38824907},{lng:-122.2494476,lat:47.42221504}];
var zone_115=new google.maps.Polygon({paths: loc_115,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'O\'Brien',center: {lng: -122.1970711, lat: 47.43022658 }});
zone_115.setMap(map);
zone_115.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_115.label;var label=zone_115.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_115.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Kent
//################################################
var loc_116=[{lng:-122.2494828,lat:47.35366769},{lng:-122.1654599,lat:47.35377513},{lng:-122.16537,lat:47.40137909},{lng:-122.1967546,lat:47.40144921},{lng:-122.196654,lat:47.39232385},{lng:-122.1867818,lat:47.39232068},{lng:-122.1867566,lat:47.37793609},{lng:-122.2473209,lat:47.37782961}];
var zone_116=new google.maps.Polygon({paths: loc_116,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Kent',center: {lng: -122.2494828, lat: 47.35366769 }});
zone_116.setMap(map);
zone_116.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_116.label;var label=zone_116.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_116.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Orillia Kent
//################################################
var loc_117=[{lng:-122.2212445,lat:47.42652831},{lng:-122.2494479,lat:47.42221435},{lng:-122.2848403,lat:47.42223681},{lng:-122.2719751,lat:47.4309476},{lng:-122.2700224,lat:47.43432896},{lng:-122.2685191,lat:47.44135475},{lng:-122.2462822,lat:47.44122776},{lng:-122.2175303,lat:47.44116041}];
var zone_117=new google.maps.Polygon({paths: loc_117,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Orillia Kent',center: {lng: -122.2212445, lat: 47.42652831 }});
zone_117.setMap(map);
zone_117.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_117.label;var label=zone_117.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_117.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Renton
//################################################
var loc_118=[{lng:-122.2331008,lat:47.47730807},{lng:-122.2179638,lat:47.47072154},{lng:-122.1930313,lat:47.47480944},{lng:-122.1916044,lat:47.49206582},{lng:-122.2238767,lat:47.49248629}];
var zone_118=new google.maps.Polygon({paths: loc_118,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Downtown Renton',center: {lng: -122.2331008, lat: 47.47730807 }});
zone_118.setMap(map);
zone_118.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_118.label;var label=zone_118.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_118.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Orillia Renton
//################################################
var loc_119=[{lng:-122.2175309,lat:47.44116064},{lng:-122.2153801,lat:47.45037593},{lng:-122.2180235,lat:47.46282814},{lng:-122.2179457,lat:47.46786178},{lng:-122.2338948,lat:47.4670846},{lng:-122.2487676,lat:47.46281159},{lng:-122.2480498,lat:47.4612616},{lng:-122.2484468,lat:47.46020211},{lng:-122.2480173,lat:47.45971565},{lng:-122.2456995,lat:47.45964243},{lng:-122.2452288,lat:47.45910723},{lng:-122.2468592,lat:47.45750408},{lng:-122.2468056,lat:47.45671292},{lng:-122.2439296,lat:47.45524686},{lng:-122.2436409,lat:47.45480479},{lng:-122.2438551,lat:47.45415255},{lng:-122.2470098,lat:47.45159478},{lng:-122.2472297,lat:47.45076318},{lng:-122.2467788,lat:47.45016916},{lng:-122.2440161,lat:47.44890969},{lng:-122.2437311,lat:47.44788736},{lng:-122.2440751,lat:47.44707542},{lng:-122.2463771,lat:47.44535559},{lng:-122.2466286,lat:47.4443681},{lng:-122.246483,lat:47.44345452},{lng:-122.2466332,lat:47.44243911},{lng:-122.2462819,lat:47.44122708}];
var zone_119=new google.maps.Polygon({paths: loc_119,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Orillia Renton',center: {lng: -122.2175309, lat: 47.44116064 }});
zone_119.setMap(map);
zone_119.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_119.label;var label=zone_119.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_119.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Renton
//################################################
var loc_120=[{lng:-122.2175326,lat:47.4411595},{lng:-122.1716166,lat:47.4462485},{lng:-122.1681659,lat:47.48856901},{lng:-122.1785833,lat:47.48835491},{lng:-122.1921881,lat:47.48503639},{lng:-122.193032,lat:47.47481057},{lng:-122.2179638,lat:47.47072222},{lng:-122.2330998,lat:47.47730852},{lng:-122.2518273,lat:47.47388936},{lng:-122.2532858,lat:47.47280066},{lng:-122.2531564,lat:47.47187193},{lng:-122.2518914,lat:47.47055247},{lng:-122.2518589,lat:47.46893495},{lng:-122.2508386,lat:47.46687449},{lng:-122.2499578,lat:47.46664195},{lng:-122.2489275,lat:47.46793408},{lng:-122.2478335,lat:47.46876066},{lng:-122.2461605,lat:47.46913009},{lng:-122.2438012,lat:47.46710749},{lng:-122.2468693,lat:47.4661798},{lng:-122.2482969,lat:47.46531284},{lng:-122.2488659,lat:47.46441956},{lng:-122.2487673,lat:47.46281001},{lng:-122.2338941,lat:47.46708369},{lng:-122.2179477,lat:47.46786087},{lng:-122.2180248,lat:47.46282701},{lng:-122.2153815,lat:47.45037571}];
var zone_120=new google.maps.Polygon({paths: loc_120,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'South Renton',center: {lng: -122.2175326, lat: 47.4411595 }});
zone_120.setMap(map);
zone_120.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_120.label;var label=zone_120.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_120.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Kennydale
//################################################
var loc_121=[{lng:-122.1916047,lat:47.49206514},{lng:-122.1967281,lat:47.50265023},{lng:-122.1985057,lat:47.51843928},{lng:-122.2135556,lat:47.518418},{lng:-122.2056484,lat:47.51111377},{lng:-122.2045755,lat:47.50621473},{lng:-122.218524,lat:47.50386606},{lng:-122.2190179,lat:47.50047784},{lng:-122.2238777,lat:47.49248538}];
var zone_121=new google.maps.Polygon({paths: loc_121,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Kennydale',center: {lng: -122.1916047, lat: 47.49206514 }});
zone_121.setMap(map);
zone_121.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_121.label;var label=zone_121.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_121.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Windsor Hill
//################################################
var loc_122=[{lng:-122.1681662,lat:47.48856788},{lng:-122.1681941,lat:47.50824397},{lng:-122.1765518,lat:47.50827296},{lng:-122.1834183,lat:47.51488195},{lng:-122.1985074,lat:47.51843928},{lng:-122.1967294,lat:47.50264796},{lng:-122.1916061,lat:47.49206514},{lng:-122.1921878,lat:47.4850339},{lng:-122.1785826,lat:47.488354}];
var zone_122=new google.maps.Polygon({paths: loc_122,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Windsor Hill',center: {lng: -122.1681662, lat: 47.48856788 }});
zone_122.setMap(map);
zone_122.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_122.label;var label=zone_122.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_122.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: May Creek
//################################################
var loc_123=[{lng:-122.1980953,lat:47.53933956},{lng:-122.207365,lat:47.53151669},{lng:-122.2135532,lat:47.51841687},{lng:-122.198506,lat:47.51843815},{lng:-122.1834186,lat:47.51488105},{lng:-122.1765528,lat:47.50827228},{lng:-122.1562542,lat:47.50817105},{lng:-122.1557164,lat:47.51370805},{lng:-122.1590987,lat:47.5159879},{lng:-122.1589351,lat:47.52031816},{lng:-122.1622724,lat:47.52409995},{lng:-122.1903136,lat:47.52379905},{lng:-122.1902204,lat:47.53927438}];
var zone_123=new google.maps.Polygon({paths: loc_123,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'May Creek',center: {lng: -122.1980953, lat: 47.53933956 }});
zone_123.setMap(map);
zone_123.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_123.label;var label=zone_123.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_123.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Kenmore
//################################################
var loc_124=[{lng:-122.2638416,lat:47.72569929},{lng:-122.2435886,lat:47.7262108},{lng:-122.2452248,lat:47.73179354},{lng:-122.2290762,lat:47.73330464},{lng:-122.2239672,lat:47.73321715},{lng:-122.2231693,lat:47.776686},{lng:-122.257228,lat:47.77707827},{lng:-122.2623326,lat:47.75835604},{lng:-122.2658895,lat:47.75489277},{lng:-122.2594643,lat:47.7543865},{lng:-122.2600651,lat:47.7497122},{lng:-122.2633266,lat:47.74757689},{lng:-122.2688198,lat:47.73822664}];
var zone_124=new google.maps.Polygon({paths: loc_124,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Kenmore',center: {lng: -122.2638416, lat: 47.72569929 }});
zone_124.setMap(map);
zone_124.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_124.label;var label=zone_124.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_124.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bothell
//################################################
var loc_125=[{lng:-122.2239696,lat:47.73321737},{lng:-122.1756114,lat:47.73296391},{lng:-122.1743212,lat:47.75799226},{lng:-122.168469,lat:47.7574583},{lng:-122.1639853,lat:47.75816964},{lng:-122.1637201,lat:47.76517732},{lng:-122.1664657,lat:47.76889049},{lng:-122.1677203,lat:47.79063483},{lng:-122.2215268,lat:47.79127229},{lng:-122.223171,lat:47.77668487}];
var zone_125=new google.maps.Polygon({paths: loc_125,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Bothell',center: {lng: -122.2239696, lat: 47.73321737 }});
zone_125.setMap(map);
zone_125.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_125.label;var label=zone_125.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_125.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Woodinville
//################################################
var loc_126=[{lng:-122.175613,lat:47.73296413},{lng:-122.1078873,lat:47.73251177},{lng:-122.1089172,lat:47.79020887},{lng:-122.167722,lat:47.7906346},{lng:-122.1664667,lat:47.76889049},{lng:-122.1637215,lat:47.76517754},{lng:-122.1639867,lat:47.75817009},{lng:-122.1684697,lat:47.7574592},{lng:-122.1743226,lat:47.75799293}];
var zone_126=new google.maps.Polygon({paths: loc_126,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Woodinville',center: {lng: -122.175613, lat: 47.73296413 }});
zone_126.setMap(map);
zone_126.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_126.label;var label=zone_126.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_126.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Finn Hill
//################################################
var loc_127=[{lng:-122.2513962,lat:47.70603626},{lng:-122.229615,lat:47.71155934},{lng:-122.2078073,lat:47.71124779},{lng:-122.2077352,lat:47.71847562},{lng:-122.1873377,lat:47.71840998},{lng:-122.1897268,lat:47.7244002},{lng:-122.1882124,lat:47.73303088},{lng:-122.2239689,lat:47.73321895},{lng:-122.2290768,lat:47.73330532},{lng:-122.2452261,lat:47.73179376},{lng:-122.2435896,lat:47.72621171},{lng:-122.2638416,lat:47.72569997},{lng:-122.2608376,lat:47.71490142}];
var zone_127=new google.maps.Polygon({paths: loc_127,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Finn Hill',center: {lng: -122.2513962, lat: 47.70603626 }});
zone_127.setMap(map);
zone_127.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_127.label;var label=zone_127.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_127.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Juanita
//################################################
var loc_128=[{lng:-122.2237587,lat:47.69497434},{lng:-122.1972625,lat:47.69500413},{lng:-122.1973068,lat:47.70397767},{lng:-122.1933649,lat:47.70399279},{lng:-122.1932536,lat:47.71485067},{lng:-122.1851426,lat:47.71482224},{lng:-122.1873393,lat:47.71841134},{lng:-122.2077365,lat:47.7184763},{lng:-122.2078083,lat:47.71124915},{lng:-122.229615,lat:47.71156047},{lng:-122.2513982,lat:47.70603716},{lng:-122.2472763,lat:47.70372587},{lng:-122.2467184,lat:47.70034674},{lng:-122.2380066,lat:47.69742954}];
var zone_128=new google.maps.Polygon({paths: loc_128,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Juanita',center: {lng: -122.2237587, lat: 47.69497434 }});
zone_128.setMap(map);
zone_128.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_128.label;var label=zone_128.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_128.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Kingsgate
//################################################
var loc_129=[{lng:-122.187341,lat:47.71840998},{lng:-122.1642965,lat:47.71865901},{lng:-122.1639726,lat:47.71148083},{lng:-122.1542174,lat:47.71138428},{lng:-122.1486139,lat:47.72832625},{lng:-122.1485211,lat:47.73278396},{lng:-122.175613,lat:47.73296504},{lng:-122.1882137,lat:47.73303111},{lng:-122.1897278,lat:47.72439975}];
var zone_129=new google.maps.Polygon({paths: loc_129,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Kingsgate',center: {lng: -122.187341, lat: 47.71840998 }});
zone_129.setMap(map);
zone_129.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_129.label;var label=zone_129.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_129.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Totem Lake
//################################################
var loc_130=[{lng:-122.1972645,lat:47.69500458},{lng:-122.1647089,lat:47.6950795},{lng:-122.1639713,lat:47.71148196},{lng:-122.1642951,lat:47.71865991},{lng:-122.1873407,lat:47.71841111},{lng:-122.1851446,lat:47.71482337},{lng:-122.1932553,lat:47.71485112},{lng:-122.1933659,lat:47.70399369},{lng:-122.1973078,lat:47.70397835}];
var zone_130=new google.maps.Polygon({paths: loc_130,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Totem Lake',center: {lng: -122.1972645, lat: 47.69500458 }});
zone_130.setMap(map);
zone_130.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_130.label;var label=zone_130.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_130.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Kirkland
//################################################
var loc_131=[{lng:-122.2107124,lat:47.67145637},{lng:-122.1963345,lat:47.67330854},{lng:-122.1910522,lat:47.67608622},{lng:-122.1845384,lat:47.67919108},{lng:-122.1843892,lat:47.68075359},{lng:-122.209607,lat:47.68038814},{lng:-122.2094689,lat:47.67638534},{lng:-122.2131157,lat:47.6753864}];
var zone_131=new google.maps.Polygon({paths: loc_131,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Downtown Kirkland',center: {lng: -122.2107124, lat: 47.67145637 }});
zone_131.setMap(map);
zone_131.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_131.label;var label=zone_131.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_131.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Market
//################################################
var loc_132=[{lng:-122.2131154,lat:47.67538572},{lng:-122.2094676,lat:47.67638511},{lng:-122.2096057,lat:47.68038836},{lng:-122.2100824,lat:47.69499082},{lng:-122.2195503,lat:47.69497976},{lng:-122.219553,lat:47.68705916},{lng:-122.2171497,lat:47.68128089}];
var zone_132=new google.maps.Polygon({paths: loc_132,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Market',center: {lng: -122.2131154, lat: 47.67538572 }});
zone_132.setMap(map);
zone_132.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_132.label;var label=zone_132.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_132.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Norkirk
//################################################
var loc_133=[{lng:-122.1904933,lat:47.68066488},{lng:-122.1907917,lat:47.69502128},{lng:-122.2100841,lat:47.69499082},{lng:-122.209607,lat:47.68038768}];
var zone_133=new google.maps.Polygon({paths: loc_133,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Norkirk',center: {lng: -122.1904933, lat: 47.68066488 }});
zone_133.setMap(map);
zone_133.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_133.label;var label=zone_133.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_133.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Highlands
//################################################
var loc_134=[{lng:-122.1904949,lat:47.68066465},{lng:-122.1843919,lat:47.68075269},{lng:-122.1845394,lat:47.6791913},{lng:-122.1759989,lat:47.67931478},{lng:-122.1757683,lat:47.69505536},{lng:-122.1907947,lat:47.69502151}];
var zone_134=new google.maps.Polygon({paths: loc_134,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Highlands',center: {lng: -122.1904949, lat: 47.68066465 }});
zone_134.setMap(map);
zone_134.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_134.label;var label=zone_134.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_134.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Rose Hill
//################################################
var loc_135=[{lng:-122.1760013,lat:47.67931523},{lng:-122.1639062,lat:47.67950078},{lng:-122.163925,lat:47.68260182},{lng:-122.1649677,lat:47.68946891},{lng:-122.1647089,lat:47.69508086},{lng:-122.1757706,lat:47.69505513}];
var zone_135=new google.maps.Polygon({paths: loc_135,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'North Rose Hill',center: {lng: -122.1760013, lat: 47.67931523 }});
zone_135.setMap(map);
zone_135.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_135.label;var label=zone_135.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_135.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Rose Hill
//################################################
var loc_136=[{lng:-122.1845404,lat:47.6791922},{lng:-122.1846172,lat:47.67637067},{lng:-122.1867751,lat:47.67131458},{lng:-122.1870312,lat:47.66105372},{lng:-122.1640802,lat:47.66073081},{lng:-122.1639065,lat:47.67950236},{lng:-122.1760013,lat:47.67931681}];
var zone_136=new google.maps.Polygon({paths: loc_136,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'South Rose Hill',center: {lng: -122.1845404, lat: 47.6791922 }});
zone_136.setMap(map);
zone_136.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_136.label;var label=zone_136.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_136.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lucerne
//################################################
var loc_137=[{lng:-122.2428668,lat:47.63834278},{lng:-122.2279644,lat:47.63598602},{lng:-122.2080088,lat:47.64315719},{lng:-122.2081804,lat:47.64946007},{lng:-122.2112703,lat:47.64946007},{lng:-122.2119141,lat:47.65356521},{lng:-122.2188234,lat:47.65365193},{lng:-122.2225571,lat:47.64891077},{lng:-122.2244883,lat:47.64205845},{lng:-122.225647,lat:47.64214519},{lng:-122.2270632,lat:47.65269795},{lng:-122.2323847,lat:47.65269795},{lng:-122.2340584,lat:47.64746521},{lng:-122.2345304,lat:47.64364873},{lng:-122.2380495,lat:47.64665567},{lng:-122.2424269,lat:47.64677132},{lng:-122.2430277,lat:47.64194279}];
var zone_137=new google.maps.Polygon({paths: loc_137,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Lucerne',center: {lng: -122.2428668, lat: 47.63834278 }});
zone_137.setMap(map);
zone_137.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_137.label;var label=zone_137.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_137.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lakeview
//################################################
var loc_138=[{lng:-122.2080108,lat:47.64315742},{lng:-122.2014954,lat:47.64232116},{lng:-122.2016358,lat:47.64596178},{lng:-122.2033954,lat:47.64843374},{lng:-122.204318,lat:47.6533773},{lng:-122.2046185,lat:47.65710635},{lng:-122.2045326,lat:47.66603764},{lng:-122.2041963,lat:47.67229712},{lng:-122.2107121,lat:47.67145727},{lng:-122.2103691,lat:47.6538832},{lng:-122.2081818,lat:47.64945985}];
var zone_138=new google.maps.Polygon({paths: loc_138,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Lakeview',center: {lng: -122.2080108, lat: 47.64315742 }});
zone_138.setMap(map);
zone_138.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_138.label;var label=zone_138.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_138.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Central Houghton
//################################################
var loc_139=[{lng:-122.201497,lat:47.64232229},{lng:-122.1879167,lat:47.63229545},{lng:-122.1866101,lat:47.63716441},{lng:-122.1870289,lat:47.66105485},{lng:-122.1867737,lat:47.67131458},{lng:-122.1846162,lat:47.67637044},{lng:-122.1845391,lat:47.67919243},{lng:-122.1910545,lat:47.67608622},{lng:-122.1963351,lat:47.67330922},{lng:-122.2041987,lat:47.67229712},{lng:-122.204535,lat:47.66602884},{lng:-122.2046198,lat:47.65710364},{lng:-122.2043194,lat:47.6533764},{lng:-122.2033967,lat:47.64843351},{lng:-122.2016368,lat:47.64596133}];
var zone_139=new google.maps.Polygon({paths: loc_139,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Central Houghton',center: {lng: -122.201497, lat: 47.64232229 }});
zone_139.setMap(map);
zone_139.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_139.label;var label=zone_139.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_139.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Redmond
//################################################
var loc_140=[{lng:-122.1323919,lat:47.68218491},{lng:-122.1324456,lat:47.67228719},{lng:-122.1262832,lat:47.66721446},{lng:-122.1107948,lat:47.66721175},{lng:-122.1072811,lat:47.66970392},{lng:-122.1059125,lat:47.67494054},{lng:-122.1191673,lat:47.67847233},{lng:-122.1191475,lat:47.68244653}];
var zone_140=new google.maps.Polygon({paths: loc_140,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Downtown Redmond',center: {lng: -122.1323919, lat: 47.68218491 }});
zone_140.setMap(map);
zone_140.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_140.label;var label=zone_140.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_140.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Rose Hill
//################################################
var loc_141=[{lng:-122.1324439,lat:47.67228787},{lng:-122.1639461,lat:47.67533606},{lng:-122.1639082,lat:47.67950259},{lng:-122.163926,lat:47.68260272},{lng:-122.1649694,lat:47.68946936},{lng:-122.1492704,lat:47.68907553}];
var zone_141=new google.maps.Polygon({paths: loc_141,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Rose Hill',center: {lng: -122.1324439, lat: 47.67228787 }});
zone_141.setMap(map);
zone_141.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_141.label;var label=zone_141.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_141.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Sammamish Valley
//################################################
var loc_142=[{lng:-122.1324446,lat:47.67228629},{lng:-122.1492731,lat:47.68907508},{lng:-122.150352,lat:47.69059081},{lng:-122.1508268,lat:47.69178783},{lng:-122.1542556,lat:47.70935388},{lng:-122.1542187,lat:47.71138586},{lng:-122.131892,lat:47.71114176},{lng:-122.1323892,lat:47.68218401}];
var zone_142=new google.maps.Polygon({paths: loc_142,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Sammamish Valley',center: {lng: -122.1324446, lat: 47.67228629 }});
zone_142.setMap(map);
zone_142.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_142.label;var label=zone_142.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_142.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Willows
//################################################
var loc_143=[{lng:-122.1639729,lat:47.71148241},{lng:-122.1647109,lat:47.6950795},{lng:-122.1649697,lat:47.68946778},{lng:-122.1492701,lat:47.68907463},{lng:-122.1503507,lat:47.69059216},{lng:-122.1508257,lat:47.69178896},{lng:-122.1542539,lat:47.7093541},{lng:-122.1542167,lat:47.71138653}];
var zone_143=new google.maps.Polygon({paths: loc_143,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Willows',center: {lng: -122.1639729, lat: 47.71148241 }});
zone_143.setMap(map);
zone_143.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_143.label;var label=zone_143.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_143.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Redmond
//################################################
var loc_144=[{lng:-122.1318947,lat:47.71114199},{lng:-122.1320898,lat:47.69968131},{lng:-122.093109,lat:47.69929049},{lng:-122.0926979,lat:47.70109497},{lng:-122.0929708,lat:47.70306951},{lng:-122.0896868,lat:47.70809995},{lng:-122.0885723,lat:47.71551906},{lng:-122.0843807,lat:47.72651437},{lng:-122.1078886,lat:47.73251335},{lng:-122.1485231,lat:47.73278441},{lng:-122.1486156,lat:47.72832692},{lng:-122.1542201,lat:47.71138495}];
var zone_144=new google.maps.Polygon({paths: loc_144,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'North Redmond',center: {lng: -122.1318947, lat: 47.71114199 }});
zone_144.setMap(map);
zone_144.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_144.label;var label=zone_144.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_144.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Education Hill
//################################################
var loc_145=[{lng:-122.1059128,lat:47.67493941},{lng:-122.10594,lat:47.67714181},{lng:-122.0935589,lat:47.68734444},{lng:-122.0931103,lat:47.6992923},{lng:-122.1320898,lat:47.69968222},{lng:-122.1323919,lat:47.68218198},{lng:-122.1191489,lat:47.6824454},{lng:-122.1191686,lat:47.67847188}];
var zone_145=new google.maps.Polygon({paths: loc_145,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Education Hill',center: {lng: -122.1059128, lat: 47.67493941 }});
zone_145.setMap(map);
zone_145.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_145.label;var label=zone_145.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_145.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bear Creek
//################################################
var loc_146=[{lng:-122.1059152,lat:47.67493963},{lng:-122.0903563,lat:47.67695038},{lng:-122.0829535,lat:47.67525637},{lng:-122.0729327,lat:47.67501075},{lng:-122.0684373,lat:47.67080615},{lng:-122.0627933,lat:47.67127824},{lng:-122.062684,lat:47.67842763},{lng:-122.0445442,lat:47.67856488},{lng:-122.0471426,lat:47.71848171},{lng:-122.0877673,lat:47.71764103},{lng:-122.0885744,lat:47.71551793},{lng:-122.0896878,lat:47.70810108},{lng:-122.0929725,lat:47.70306973},{lng:-122.0926996,lat:47.70109452},{lng:-122.0931137,lat:47.69929004},{lng:-122.0935616,lat:47.6873458},{lng:-122.105942,lat:47.67714181}];
var zone_146=new google.maps.Polygon({paths: loc_146,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Bear Creek',center: {lng: -122.1059152, lat: 47.67493963 }});
zone_146.setMap(map);
zone_146.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_146.label;var label=zone_146.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_146.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: SouthEast Redmond
//################################################
var loc_147=[{lng:-122.1107965,lat:47.66721333},{lng:-122.1072824,lat:47.66970437},{lng:-122.1059152,lat:47.67494167},{lng:-122.0903557,lat:47.67695174},{lng:-122.0829531,lat:47.67525749},{lng:-122.072932,lat:47.67501188},{lng:-122.068437,lat:47.6708075},{lng:-122.0627936,lat:47.67127959},{lng:-122.062794,lat:47.66131205},{lng:-122.0706448,lat:47.65607836},{lng:-122.0742953,lat:47.65512623},{lng:-122.0934677,lat:47.65509733},{lng:-122.0953989,lat:47.65821923},{lng:-122.0998621,lat:47.65821923},{lng:-122.1000338,lat:47.66232368},{lng:-122.1052694,lat:47.6624393},{lng:-122.1053553,lat:47.66428908},{lng:-122.1106768,lat:47.66420237}];
var zone_147=new google.maps.Polygon({paths: loc_147,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'SouthEast Redmond',center: {lng: -122.1107965, lat: 47.66721333 }});
zone_147.setMap(map);
zone_147.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_147.label;var label=zone_147.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_147.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Marymoor Park
//################################################
var loc_148=[{lng:-122.1056986,lat:47.65122359},{lng:-122.1168995,lat:47.65122359},{lng:-122.1175003,lat:47.65394102},{lng:-122.1260405,lat:47.66157219},{lng:-122.1274137,lat:47.66480932},{lng:-122.1262825,lat:47.66721581},{lng:-122.1107941,lat:47.66721288},{lng:-122.1106758,lat:47.66420373},{lng:-122.1053546,lat:47.66429021},{lng:-122.1052667,lat:47.66244201},{lng:-122.1000334,lat:47.66232436},{lng:-122.0998608,lat:47.65822104},{lng:-122.0953979,lat:47.65821991},{lng:-122.0934664,lat:47.65509755},{lng:-122.0990252,lat:47.65467817},{lng:-122.1021795,lat:47.65259677}];
var zone_148=new google.maps.Polygon({paths: loc_148,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Marymoor Park',center: {lng: -122.1056986, lat: 47.65122359 }});
zone_148.setMap(map);
zone_148.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_148.label;var label=zone_148.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_148.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Grass Lawn
//################################################
var loc_149=[{lng:-122.1640839,lat:47.66073126},{lng:-122.1432555,lat:47.66066464},{lng:-122.1432475,lat:47.65506977},{lng:-122.1378254,lat:47.65442274},{lng:-122.1373862,lat:47.65653726},{lng:-122.1335614,lat:47.66385193},{lng:-122.1305466,lat:47.66614602},{lng:-122.1262805,lat:47.66721491},{lng:-122.1324459,lat:47.67228945},{lng:-122.1639464,lat:47.67533673}];
var zone_149=new google.maps.Polygon({paths: loc_149,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Grass Lawn',center: {lng: -122.1640839, lat: 47.66073126 }});
zone_149.setMap(map);
zone_149.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_149.label;var label=zone_149.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_149.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Overlake
//################################################
var loc_150=[{lng:-122.0896053,lat:47.63653546},{lng:-122.1430272,lat:47.63666965},{lng:-122.1432472,lat:47.65507135},{lng:-122.1378261,lat:47.65442432},{lng:-122.1373879,lat:47.65653793},{lng:-122.1335627,lat:47.66385328},{lng:-122.1305486,lat:47.6661476},{lng:-122.1262805,lat:47.66721626},{lng:-122.1274121,lat:47.66480887},{lng:-122.1260391,lat:47.66157309},{lng:-122.117499,lat:47.65394124},{lng:-122.1168985,lat:47.65122517},{lng:-122.1056986,lat:47.65122471},{lng:-122.1034241,lat:47.64599069}];
var zone_150=new google.maps.Polygon({paths: loc_150,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0000FF',fillOpacity: 0.2,label: 'Overlake',center: {lng: -122.0896053, lat: 47.63653546 }});
zone_150.setMap(map);
zone_150.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_150.label;var label=zone_150.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_150.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: McGilvara
//################################################
var loc_151=[{lng:-122.2376841,lat:47.5891357},{lng:-122.255559,lat:47.58923362},{lng:-122.2549367,lat:47.59377761},{lng:-122.2491217,lat:47.59319878},{lng:-122.2468686,lat:47.59645461},{lng:-122.2411394,lat:47.59616522},{lng:-122.238822,lat:47.59330007},{lng:-122.2376686,lat:47.59318792}];
var zone_151=new google.maps.Polygon({paths: loc_151,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'McGilvara',center: {lng: -122.2376841, lat: 47.5891357 }});
zone_151.setMap(map);
zone_151.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_151.label;var label=zone_151.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_151.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Beaumont
//################################################
var loc_152=[{lng:-122.23767,lat:47.59318792},{lng:-122.2376857,lat:47.5891357},{lng:-122.237845,lat:47.58187661},{lng:-122.2306614,lat:47.58185331},{lng:-122.2269046,lat:47.58086206},{lng:-122.2193438,lat:47.58088264},{lng:-122.2193813,lat:47.58596286},{lng:-122.2233295,lat:47.58720751},{lng:-122.2235012,lat:47.5916359},{lng:-122.2263336,lat:47.59567323},{lng:-122.2287154,lat:47.59567323},{lng:-122.2359467,lat:47.59318431}];
var zone_152=new google.maps.Polygon({paths: loc_152,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Beaumont',center: {lng: -122.23767, lat: 47.59318792 }});
zone_152.setMap(map);
zone_152.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_152.label;var label=zone_152.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_152.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mercer Island Town
//################################################
var loc_153=[{lng:-122.2269257,lat:47.57457647},{lng:-122.2450367,lat:47.57464387},{lng:-122.2531986,lat:47.58089712},{lng:-122.2549582,lat:47.58518132},{lng:-122.2555576,lat:47.58923497},{lng:-122.2376837,lat:47.58913661},{lng:-122.2378436,lat:47.58187819},{lng:-122.230662,lat:47.58185422},{lng:-122.230479,lat:47.57966498},{lng:-122.2271701,lat:47.57575489}];
var zone_153=new google.maps.Polygon({paths: loc_153,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Mercer Island Town',center: {lng: -122.2269257, lat: 47.57457647 }});
zone_153.setMap(map);
zone_153.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_153.label;var label=zone_153.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_153.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mercer Heights
//################################################
var loc_154=[{lng:-122.2269257,lat:47.57457715},{lng:-122.2450367,lat:47.57464455},{lng:-122.2355604,lat:47.56827406},{lng:-122.2347021,lat:47.56711583},{lng:-122.2267534,lat:47.56731535}];
var zone_154=new google.maps.Polygon({paths: loc_154,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Mercer Heights',center: {lng: -122.2269257, lat: 47.57457715 }});
zone_154.setMap(map);
zone_154.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_154.label;var label=zone_154.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_154.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fortuna
//################################################
var loc_155=[{lng:-122.2268426,lat:47.57098494},{lng:-122.2032452,lat:47.57105371},{lng:-122.2003698,lat:47.57672837},{lng:-122.2006702,lat:47.57892858},{lng:-122.2053909,lat:47.58107081},{lng:-122.219383,lat:47.58596331},{lng:-122.2193448,lat:47.580884},{lng:-122.2269049,lat:47.58086342},{lng:-122.2306637,lat:47.58185512},{lng:-122.23048,lat:47.57966453},{lng:-122.2271715,lat:47.57575466},{lng:-122.2269274,lat:47.57457669}];
var zone_155=new google.maps.Polygon({paths: loc_155,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Fortuna',center: {lng: -122.2268426, lat: 47.57098494 }});
zone_155.setMap(map);
zone_155.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_155.label;var label=zone_155.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_155.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mercerwood
//################################################
var loc_156=[{lng:-122.2079659,lat:47.5600211},{lng:-122.2320843,lat:47.56019486},{lng:-122.2347028,lat:47.56711673},{lng:-122.2267554,lat:47.56731693},{lng:-122.2268422,lat:47.57098698},{lng:-122.2032455,lat:47.57105506},{lng:-122.2067213,lat:47.56922958},{lng:-122.2069788,lat:47.567},{lng:-122.2063351,lat:47.56601548},{lng:-122.2072363,lat:47.5644518},{lng:-122.2086096,lat:47.56352515}];
var zone_156=new google.maps.Polygon({paths: loc_156,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Mercerwood',center: {lng: -122.2079659, lat: 47.5600211 }});
zone_156.setMap(map);
zone_156.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_156.label;var label=zone_156.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_156.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: MidIsland
//################################################
var loc_157=[{lng:-122.2385216,lat:47.54611844},{lng:-122.2076225,lat:47.54600257},{lng:-122.2082663,lat:47.55286749},{lng:-122.2073221,lat:47.55593758},{lng:-122.2079655,lat:47.56002246},{lng:-122.2320843,lat:47.56019576},{lng:-122.2318268,lat:47.55654578},{lng:-122.2343588,lat:47.55417085},{lng:-122.23423,lat:47.55272267},{lng:-122.2374487,lat:47.5502317}];
var zone_157=new google.maps.Polygon({paths: loc_157,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'MidIsland',center: {lng: -122.2385216, lat: 47.54611844 }});
zone_157.setMap(map);
zone_157.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_157.label;var label=zone_157.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_157.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Mercer Island
//################################################
var loc_158=[{lng:-122.2076235,lat:47.54600393},{lng:-122.2385219,lat:47.54611958},{lng:-122.2389507,lat:47.54327953},{lng:-122.2425556,lat:47.54270014},{lng:-122.2465897,lat:47.53702179},{lng:-122.2416973,lat:47.53087921},{lng:-122.2267628,lat:47.52253343},{lng:-122.2247028,lat:47.52253343},{lng:-122.2081375,lat:47.53696385},{lng:-122.2074509,lat:47.54235251}];
var zone_158=new google.maps.Polygon({paths: loc_158,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'South Mercer Island',center: {lng: -122.2076235, lat: 47.54600393 }});
zone_158.setMap(map);
zone_158.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_158.label;var label=zone_158.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_158.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Bellevue
//################################################
var loc_159=[{lng:-122.2177935,lat:47.61122634},{lng:-122.2178555,lat:47.61742256},{lng:-122.2070375,lat:47.6210414},{lng:-122.1856958,lat:47.62277944},{lng:-122.1854772,lat:47.60819158},{lng:-122.20891,lat:47.60789909},{lng:-122.2132874,lat:47.61050304}];
var zone_159=new google.maps.Polygon({paths: loc_159,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Downtown Bellevue',center: {lng: -122.2177935, lat: 47.61122634 }});
zone_159.setMap(map);
zone_159.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_159.label;var label=zone_159.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_159.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Medina
//################################################
var loc_160=[{lng:-122.2178541,lat:47.61742188},{lng:-122.2177894,lat:47.61122769},{lng:-122.2234154,lat:47.60491885},{lng:-122.2328568,lat:47.61119741},{lng:-122.2421265,lat:47.61414836},{lng:-122.2445297,lat:47.62687605},{lng:-122.2428668,lat:47.63834504},{lng:-122.2279651,lat:47.6359876},{lng:-122.2279835,lat:47.62103869},{lng:-122.2247028,lat:47.62102604}];
var zone_160=new google.maps.Polygon({paths: loc_160,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Medina',center: {lng: -122.2178541, lat: 47.61742188 }});
zone_160.setMap(map);
zone_160.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_160.label;var label=zone_160.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_160.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Clyde Hill
//################################################
var loc_161=[{lng:-122.2178548,lat:47.61742097},{lng:-122.2070368,lat:47.62104073},{lng:-122.2080094,lat:47.643159},{lng:-122.2279671,lat:47.6359876},{lng:-122.2279852,lat:47.62103779},{lng:-122.2247022,lat:47.62102445}];
var zone_161=new google.maps.Polygon({paths: loc_161,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Clyde Hill',center: {lng: -122.2178548, lat: 47.61742097 }});
zone_161.setMap(map);
zone_161.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_161.label;var label=zone_161.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_161.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: NorthWest Bellevue
//################################################
var loc_162=[{lng:-122.1856961,lat:47.62277876},{lng:-122.1856767,lat:47.63197349},{lng:-122.187918,lat:47.63229862},{lng:-122.201496,lat:47.64232342},{lng:-122.2080108,lat:47.64315855},{lng:-122.2070378,lat:47.62103982}];
var zone_162=new google.maps.Polygon({paths: loc_162,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'NorthWest Bellevue',center: {lng: -122.1856961, lat: 47.62277876 }});
zone_162.setMap(map);
zone_162.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_162.label;var label=zone_162.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_162.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Cherry Crest
//################################################
var loc_163=[{lng:-122.1856978,lat:47.62277899},{lng:-122.1749847,lat:47.61993089},{lng:-122.1590722,lat:47.62324179},{lng:-122.1563333,lat:47.6315964},{lng:-122.1643303,lat:47.64611741},{lng:-122.1867697,lat:47.6461278},{lng:-122.1866114,lat:47.63716464},{lng:-122.1879184,lat:47.63229636},{lng:-122.1856787,lat:47.63197259}];
var zone_163=new google.maps.Polygon({paths: loc_163,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Cherry Crest',center: {lng: -122.1856978, lat: 47.62277899 }});
zone_163.setMap(map);
zone_163.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_163.label;var label=zone_163.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_163.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Shadowwood
//################################################
var loc_164=[{lng:-122.1590745,lat:47.62324179},{lng:-122.1430846,lat:47.62653078},{lng:-122.1430262,lat:47.63667078},{lng:-122.1431365,lat:47.6459349},{lng:-122.1643317,lat:47.64611718},{lng:-122.156335,lat:47.63159617}];
var zone_164=new google.maps.Polygon({paths: loc_164,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Shadowwood',center: {lng: -122.1590745, lat: 47.62324179 }});
zone_164.setMap(map);
zone_164.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_164.label;var label=zone_164.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_164.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bridle Trails Park
//################################################
var loc_165=[{lng:-122.16407988220453,lat:47.66073487307047},{lng:-122.18703288584948,lat:47.66105710996457},{lng:-122.18676533550024,lat:47.645990916358826},{lng:-122.16432832181454,lat:47.64611605299997}];
var zone_165=new google.maps.Polygon({paths: loc_165,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Bridle Trails Park',center: {lng: -122.16407988220453, lat: 47.66073487307047 }});
zone_165.setMap(map);
zone_165.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_165.label;var label=zone_165.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_165.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bridle Trails
//################################################
var loc_166=[{lng:-122.164331,lat:47.64611583},{lng:-122.1431365,lat:47.64593399},{lng:-122.1432455,lat:47.65507022},{lng:-122.1432539,lat:47.66066577},{lng:-122.1640836,lat:47.66073329}];
var zone_166=new google.maps.Polygon({paths: loc_166,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Bridle Trails',center: {lng: -122.164331, lat: 47.64611583 }});
zone_166.setMap(map);
zone_166.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_166.label;var label=zone_166.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_166.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: NorthEast Bellevue
//################################################
var loc_167=[{lng:-122.1430866,lat:47.62653078},{lng:-122.1372414,lat:47.62788473},{lng:-122.132349,lat:47.62781966},{lng:-122.1117738,lat:47.62117248},{lng:-122.102952,lat:47.61277416},{lng:-122.0878458,lat:47.62204568},{lng:-122.0856142,lat:47.62875601},{lng:-122.08673,lat:47.63375928},{lng:-122.0896073,lat:47.63653636},{lng:-122.1430276,lat:47.63667056}];
var zone_167=new google.maps.Polygon({paths: loc_167,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'NorthEast Bellevue',center: {lng: -122.1430866, lat: 47.62653078 }});
zone_167.setMap(map);
zone_167.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_167.label;var label=zone_167.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_167.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Wilburton
//################################################
var loc_168=[{lng:-122.1668744,lat:47.60312483},{lng:-122.1840191,lat:47.60312483},{lng:-122.1854789,lat:47.60819294},{lng:-122.1856978,lat:47.62277944},{lng:-122.1749854,lat:47.61993315},{lng:-122.1643739,lat:47.62213969},{lng:-122.1642351,lat:47.61021372},{lng:-122.1665096,lat:47.61021372}];
var zone_168=new google.maps.Polygon({paths: loc_168,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Wilburton',center: {lng: -122.1668744, lat: 47.60312483 }});
zone_168.setMap(map);
zone_168.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_168.label;var label=zone_168.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_168.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Crossroads
//################################################
var loc_169=[{lng:-122.1322444,lat:47.60982381},{lng:-122.1588063,lat:47.60996779},{lng:-122.1588707,lat:47.60635112},{lng:-122.1667131,lat:47.60630523},{lng:-122.1665106,lat:47.61021507},{lng:-122.1642365,lat:47.6102144},{lng:-122.1643746,lat:47.62214014},{lng:-122.1590712,lat:47.62324405},{lng:-122.1430839,lat:47.62653281},{lng:-122.137242,lat:47.62788631},{lng:-122.132348,lat:47.62782079}];
var zone_169=new google.maps.Polygon({paths: loc_169,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Crossroads',center: {lng: -122.1322444, lat: 47.60982381 }});
zone_169.setMap(map);
zone_169.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_169.label;var label=zone_169.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_169.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake Hills
//################################################
var loc_170=[{lng:-122.1317797,lat:47.5962855},{lng:-122.1254933,lat:47.59623757},{lng:-122.1209979,lat:47.59814034},{lng:-122.1215035,lat:47.61335978},{lng:-122.1184642,lat:47.61332113},{lng:-122.1082306,lat:47.60833309},{lng:-122.10295,lat:47.61277597},{lng:-122.1117735,lat:47.62117361},{lng:-122.132351,lat:47.62782124},{lng:-122.1322461,lat:47.60982404},{lng:-122.1321344,lat:47.60573083},{lng:-122.1307353,lat:47.60330749},{lng:-122.1307397,lat:47.60182269},{lng:-122.1316516,lat:47.60033965}];
var zone_170=new google.maps.Polygon({paths: loc_170,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Lake Hills',center: {lng: -122.1317797, lat: 47.5962855 }});
zone_170.setMap(map);
zone_170.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_170.label;var label=zone_170.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_170.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Lake Hills
//################################################
var loc_171=[{lng:-122.158873,lat:47.60635134},{lng:-122.1588077,lat:47.60996915},{lng:-122.1322441,lat:47.60982517},{lng:-122.1321334,lat:47.60573083},{lng:-122.130734,lat:47.60330727},{lng:-122.1307383,lat:47.60182224},{lng:-122.1316503,lat:47.60033897},{lng:-122.1317784,lat:47.59628595},{lng:-122.1326441,lat:47.58377018},{lng:-122.1352136,lat:47.57869699},{lng:-122.1594018,lat:47.57988391}];
var zone_171=new google.maps.Polygon({paths: loc_171,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'West Lake Hills',center: {lng: -122.158873, lat: 47.60635134 }});
zone_171.setMap(map);
zone_171.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_171.label;var label=zone_171.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_171.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Lake Sammamish
//################################################
var loc_172=[{lng:-122.0996475,lat:47.57380426},{lng:-122.1047652,lat:47.56828853},{lng:-122.135216,lat:47.57869766},{lng:-122.1326451,lat:47.58377063},{lng:-122.1317794,lat:47.59628731},{lng:-122.125494,lat:47.59623847},{lng:-122.1209992,lat:47.59814124},{lng:-122.1215045,lat:47.61336114},{lng:-122.1184629,lat:47.61332181},{lng:-122.1082303,lat:47.60833377},{lng:-122.1108484,lat:47.60561329},{lng:-122.107501,lat:47.59898679},{lng:-122.1092606,lat:47.59088339},{lng:-122.1084881,lat:47.58353136},{lng:-122.1102905,lat:47.57722053},{lng:-122.1051407,lat:47.57409378}];
var zone_172=new google.maps.Polygon({paths: loc_172,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'West Lake Sammamish',center: {lng: -122.0996475, lat: 47.57380426 }});
zone_172.setMap(map);
zone_172.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_172.label;var label=zone_172.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_172.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Bellevue
//################################################
var loc_173=[{lng:-122.1744731,lat:47.58024668},{lng:-122.2006723,lat:47.57892745},{lng:-122.2059917,lat:47.5820261},{lng:-122.2125149,lat:47.59464584},{lng:-122.212944,lat:47.59898679},{lng:-122.2178364,lat:47.60269079},{lng:-122.2166348,lat:47.6097508},{lng:-122.213286,lat:47.61050349},{lng:-122.2089097,lat:47.60790022},{lng:-122.1854775,lat:47.60819272},{lng:-122.1840174,lat:47.60312551},{lng:-122.1811008,lat:47.59997069},{lng:-122.181015,lat:47.59117282},{lng:-122.1786976,lat:47.58573129}];
var zone_173=new google.maps.Polygon({paths: loc_173,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'West Bellevue',center: {lng: -122.1744731, lat: 47.58024668 }});
zone_173.setMap(map);
zone_173.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_173.label;var label=zone_173.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_173.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Woodridge
//################################################
var loc_174=[{lng:-122.1744758,lat:47.58024668},{lng:-122.1593994,lat:47.57988414},{lng:-122.158871,lat:47.60635247},{lng:-122.1667138,lat:47.60630613},{lng:-122.1668757,lat:47.60312664},{lng:-122.1840204,lat:47.60312641},{lng:-122.1811025,lat:47.59997069},{lng:-122.1810167,lat:47.59117169},{lng:-122.1786989,lat:47.58573061}];
var zone_174=new google.maps.Polygon({paths: loc_174,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Woodridge',center: {lng: -122.1744758, lat: 47.58024668 }});
zone_174.setMap(map);
zone_174.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_174.label;var label=zone_174.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_174.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Newport Hills
//################################################
var loc_175=[{lng:-122.1662823,lat:47.54873407},{lng:-122.1670638,lat:47.55172475},{lng:-122.165821,lat:47.55715669},{lng:-122.1690064,lat:47.55963217},{lng:-122.1693068,lat:47.56214871},{lng:-122.1728339,lat:47.56576867},{lng:-122.1797493,lat:47.567635},{lng:-122.1858591,lat:47.56486082},{lng:-122.1877098,lat:47.56039758},{lng:-122.1944475,lat:47.55122375},{lng:-122.1952036,lat:47.54952973},{lng:-122.1855131,lat:47.54942654},{lng:-122.1707904,lat:47.54940527}];
var zone_175=new google.maps.Polygon({paths: loc_175,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Newport Hills',center: {lng: -122.1662823, lat: 47.54873407 }});
zone_175.setMap(map);
zone_175.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_175.label;var label=zone_175.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_175.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Newport Shores
//################################################
var loc_176=[{lng:-122.1858567,lat:47.56485946},{lng:-122.1879137,lat:47.56671768},{lng:-122.192688,lat:47.56673939},{lng:-122.1959496,lat:47.57064835},{lng:-122.1949625,lat:47.57200918},{lng:-122.1925378,lat:47.57215395},{lng:-122.1913147,lat:47.57578746},{lng:-122.1889329,lat:47.57614935},{lng:-122.1889114,lat:47.57794429},{lng:-122.1932459,lat:47.57759689},{lng:-122.1972799,lat:47.57808904},{lng:-122.2006766,lat:47.57892858},{lng:-122.1744738,lat:47.58024826},{lng:-122.1743631,lat:47.57834959},{lng:-122.1747708,lat:47.57626515},{lng:-122.1797487,lat:47.56763341}];
var zone_176=new google.maps.Polygon({paths: loc_176,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Newport Shores',center: {lng: -122.1858567, lat: 47.56485946 }});
zone_176.setMap(map);
zone_176.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_176.label;var label=zone_176.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_176.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake Heights
//################################################
var loc_177=[{lng:-122.1984812,lat:47.54956458},{lng:-122.1952016,lat:47.54952951},{lng:-122.1944462,lat:47.5512233},{lng:-122.1877081,lat:47.56039713},{lng:-122.1858557,lat:47.56486127},{lng:-122.187913,lat:47.56671949},{lng:-122.1926887,lat:47.56674075},{lng:-122.1926451,lat:47.56534947},{lng:-122.1898127,lat:47.56329348},{lng:-122.1901131,lat:47.56149804},{lng:-122.1912289,lat:47.56096229},{lng:-122.1937609,lat:47.55700917},{lng:-122.1941042,lat:47.55486596},{lng:-122.1958637,lat:47.5535771},{lng:-122.1971941,lat:47.55382329},{lng:-122.1983528,lat:47.55217235}];
var zone_177=new google.maps.Polygon({paths: loc_177,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Lake Heights',center: {lng: -122.1984812, lat: 47.54956458 }});
zone_177.setMap(map);
zone_177.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_177.label;var label=zone_177.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_177.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Factoria
//################################################
var loc_178=[{lng:-122.1594715,lat:47.56407535},{lng:-122.1481281,lat:47.56987224},{lng:-122.1481442,lat:47.57933365},{lng:-122.1594014,lat:47.57988549},{lng:-122.1744761,lat:47.58024826},{lng:-122.1743645,lat:47.57835027},{lng:-122.1747722,lat:47.57626606},{lng:-122.1797497,lat:47.56763387},{lng:-122.1728346,lat:47.56576754},{lng:-122.1693075,lat:47.56214826}];
var zone_178=new google.maps.Polygon({paths: loc_178,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Factoria',center: {lng: -122.1594715, lat: 47.56407535 }});
zone_178.setMap(map);
zone_178.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_178.label;var label=zone_178.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_178.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Somerset
//################################################
var loc_179=[{lng:-122.1507828,lat:47.54642849},{lng:-122.1465111,lat:47.55724086},{lng:-122.1366405,lat:47.56222202},{lng:-122.1515221,lat:47.56813901},{lng:-122.1594735,lat:47.56407557},{lng:-122.1693082,lat:47.56214871},{lng:-122.1690081,lat:47.55963104},{lng:-122.1658226,lat:47.55715624},{lng:-122.1670652,lat:47.5517243},{lng:-122.166284,lat:47.5487343}];
var zone_179=new google.maps.Polygon({paths: loc_179,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Somerset',center: {lng: -122.1507828, lat: 47.54642849 }});
zone_179.setMap(map);
zone_179.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_179.label;var label=zone_179.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_179.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Summit
//################################################
var loc_180=[{lng:-122.1303179,lat:47.54338319},{lng:-122.1290033,lat:47.538326},{lng:-122.1112347,lat:47.53597877},{lng:-122.0976734,lat:47.55127444},{lng:-122.1055484,lat:47.55244751},{lng:-122.1177196,lat:47.55737685},{lng:-122.1366426,lat:47.56222247},{lng:-122.1465128,lat:47.55724132},{lng:-122.1507842,lat:47.54642849}];
var zone_180=new google.maps.Polygon({paths: loc_180,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Summit',center: {lng: -122.1303179, lat: 47.54338319 }});
zone_180.setMap(map);
zone_180.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_180.label;var label=zone_180.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_180.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Eastgate Cougar Hills
//################################################
var loc_181=[{lng:-122.0976764,lat:47.55127354},{lng:-122.1047658,lat:47.56829034},{lng:-122.1352153,lat:47.5786988},{lng:-122.1481462,lat:47.57933342},{lng:-122.1481298,lat:47.56987337},{lng:-122.1515241,lat:47.56813788},{lng:-122.1366426,lat:47.56222156},{lng:-122.1177189,lat:47.55737526},{lng:-122.1055484,lat:47.55244637}];
var zone_181=new google.maps.Polygon({paths: loc_181,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#005500',fillOpacity: 0.2,label: 'Eastgate Cougar Hills',center: {lng: -122.0976764, lat: 47.55127354 }});
zone_181.setMap(map);
zone_181.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_181.label;var label=zone_181.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_181.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Pines
//################################################
var loc_182=[{lng:-122.1902485,lat:47.53481507},{lng:-122.1856096,lat:47.53481122},{lng:-122.1855114,lat:47.54942903},{lng:-122.1984816,lat:47.54956549},{lng:-122.1980953,lat:47.5393382},{lng:-122.1902224,lat:47.53927347}];
var zone_182=new google.maps.Polygon({paths: loc_182,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Pines',center: {lng: -122.1902485, lat: 47.53481507 }});
zone_182.setMap(map);
zone_182.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_182.label;var label=zone_182.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_182.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Pembrook Meadows
//################################################
var loc_183=[{lng:-122.1622724,lat:47.52409927},{lng:-122.1629081,lat:47.53176072},{lng:-122.1707405,lat:47.54073153},{lng:-122.1707904,lat:47.54940618},{lng:-122.1855141,lat:47.54942881},{lng:-122.185611,lat:47.5348119},{lng:-122.1902485,lat:47.53481575},{lng:-122.1903149,lat:47.5237986}];
var zone_183=new google.maps.Polygon({paths: loc_183,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Pembrook Meadows',center: {lng: -122.1622724, lat: 47.52409927 }});
zone_183.setMap(map);
zone_183.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_183.label;var label=zone_183.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_183.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Golf Club
//################################################
var loc_184=[{lng:-122.1322048,lat:47.53105398},{lng:-122.1450962,lat:47.53157396},{lng:-122.15265,lat:47.53337065},{lng:-122.1559122,lat:47.53823954},{lng:-122.1544075,lat:47.54015189},{lng:-122.1469402,lat:47.53994909},{lng:-122.1335936,lat:47.53679069},{lng:-122.1315658,lat:47.53534135}];
var zone_184=new google.maps.Polygon({paths: loc_184,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF00FF',fillOpacity: 0.2,label: 'Golf Club',center: {lng: -122.1322048, lat: 47.53105398 }});
zone_184.setMap(map);
zone_184.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_184.label;var label=zone_184.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_184.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Issaquah
//################################################
var loc_185=[{lng:-122.0363165,lat:47.53796544},{lng:-122.0404029,lat:47.53382021},{lng:-122.0405531,lat:47.52508367},{lng:-122.0298672,lat:47.51876579},{lng:-122.0257044,lat:47.5210264},{lng:-122.023387,lat:47.53035764}];
var zone_185=new google.maps.Polygon({paths: loc_185,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Downtown Issaquah',center: {lng: -122.0363165, lat: 47.53796544 }});
zone_185.setMap(map);
zone_185.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_185.label;var label=zone_185.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_185.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Gilman
//################################################
var loc_186=[{lng:-122.0405511,lat:47.52508389},{lng:-122.0480633,lat:47.52911164},{lng:-122.0510674,lat:47.54077363},{lng:-122.046175,lat:47.54077363},{lng:-122.0440722,lat:47.54439484},{lng:-122.0347488,lat:47.53947355},{lng:-122.0300858,lat:47.53429851},{lng:-122.0363162,lat:47.53796453},{lng:-122.0404019,lat:47.53381976}];
var zone_186=new google.maps.Polygon({paths: loc_186,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Gilman',center: {lng: -122.0405511, lat: 47.52508389 }});
zone_186.setMap(map);
zone_186.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_186.label;var label=zone_186.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_186.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Newport
//################################################
var loc_188=[{lng:-122.0629277,lat:47.53769631},{lng:-122.0502962,lat:47.5377873},{lng:-122.0510657,lat:47.54077272},{lng:-122.0461747,lat:47.54077272},{lng:-122.0440711,lat:47.54439416},{lng:-122.0538783,lat:47.54585773},{lng:-122.0708513,lat:47.5523751},{lng:-122.0823483,lat:47.54493324},{lng:-122.0734799,lat:47.54126477},{lng:-122.0631963,lat:47.54121815},{lng:-122.063264,lat:47.53993936}];
var zone_188=new google.maps.Polygon({paths: loc_188,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Newport',center: {lng: -122.0629277, lat: 47.53769631 }});
zone_188.setMap(map);
zone_188.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_188.label;var label=zone_188.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_188.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Montreux
//################################################
var loc_189=[{lng:-122.0823473,lat:47.54493256},{lng:-122.070849,lat:47.55237487},{lng:-122.0710123,lat:47.55538729},{lng:-122.0748532,lat:47.55540901},{lng:-122.0758295,lat:47.55767529},{lng:-122.0811081,lat:47.56882421},{lng:-122.0866013,lat:47.57206709},{lng:-122.0996495,lat:47.57380471},{lng:-122.1047675,lat:47.56828921},{lng:-122.0976788,lat:47.55127241}];
var zone_189=new google.maps.Polygon({paths: loc_189,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Montreux',center: {lng: -122.0823473, lat: 47.54493256 }});
zone_189.setMap(map);
zone_189.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_189.label;var label=zone_189.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_189.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake Sammamish Park
//################################################
var loc_190=[{lng:-122.0690643,lat:47.55168289},{lng:-122.0517755,lat:47.55194063},{lng:-122.0515609,lat:47.55868892},{lng:-122.0476985,lat:47.55868892},{lng:-122.0533848,lat:47.566667},{lng:-122.056818,lat:47.5660734},{lng:-122.0569897,lat:47.56338036},{lng:-122.0599508,lat:47.56422014},{lng:-122.0671606,lat:47.56306181},{lng:-122.0660019,lat:47.55976046},{lng:-122.0681906,lat:47.55819659},{lng:-122.0708084,lat:47.55865996},{lng:-122.0754942,lat:47.55689287},{lng:-122.0748542,lat:47.55540811},{lng:-122.0710143,lat:47.55538639},{lng:-122.0708513,lat:47.55237442}];
var zone_190=new google.maps.Polygon({paths: loc_190,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Lake Sammamish Park',center: {lng: -122.0690643, lat: 47.55168289 }});
zone_190.setMap(map);
zone_190.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_190.label;var label=zone_190.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_190.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Providence Point
//################################################
var loc_191=[{lng:-122.0477019,lat:47.55868937},{lng:-122.0238054,lat:47.55858032},{lng:-122.0251143,lat:47.56095143},{lng:-122.025286,lat:47.5665729},{lng:-122.0217562,lat:47.57318178},{lng:-122.0356406,lat:47.57706266},{lng:-122.0411754,lat:47.5770034},{lng:-122.0412612,lat:47.57364502},{lng:-122.0462823,lat:47.57370292},{lng:-122.0464969,lat:47.56846227},{lng:-122.0495546,lat:47.57063749},{lng:-122.0509064,lat:47.57091256},{lng:-122.0522153,lat:47.5706013},{lng:-122.0568177,lat:47.56607226},{lng:-122.0533875,lat:47.56666429}];
var zone_191=new google.maps.Polygon({paths: loc_191,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Providence Point',center: {lng: -122.0477019, lat: 47.55868937 }});
zone_191.setMap(map);
zone_191.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_191.label;var label=zone_191.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_191.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Pine Lake
//################################################
var loc_192=[{lng:-122.0788765,lat:47.57982601},{lng:-122.0666885,lat:47.58503659},{lng:-122.056818,lat:47.58839424},{lng:-122.0569199,lat:47.59202663},{lng:-122.0354247,lat:47.59177157},{lng:-122.0356413,lat:47.57706085},{lng:-122.0411747,lat:47.57700227},{lng:-122.0412558,lat:47.5736405},{lng:-122.0462813,lat:47.57370225},{lng:-122.0464959,lat:47.56846046},{lng:-122.0495556,lat:47.57063636},{lng:-122.0509071,lat:47.57091143},{lng:-122.052215,lat:47.5706004},{lng:-122.0568173,lat:47.56607113},{lng:-122.0575476,lat:47.56697104},{lng:-122.0625257,lat:47.56818719},{lng:-122.0666456,lat:47.56847674},{lng:-122.0693064,lat:47.57044567},{lng:-122.0710659,lat:47.57287777},{lng:-122.0750141,lat:47.57484653}];
var zone_192=new google.maps.Polygon({paths: loc_192,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Pine Lake',center: {lng: -122.0788765, lat: 47.57982601 }});
zone_192.setMap(map);
zone_192.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_192.label;var label=zone_192.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_192.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Issaquah
//################################################
var loc_193=[{lng:-122.0360403,lat:47.54015347},{lng:-122.0325708,lat:47.54606051},{lng:-122.0212841,lat:47.554837},{lng:-122.0238067,lat:47.55858258},{lng:-122.0477032,lat:47.55869073},{lng:-122.0515626,lat:47.55868983},{lng:-122.0517768,lat:47.55194176},{lng:-122.0690677,lat:47.5516838},{lng:-122.0538803,lat:47.54585592},{lng:-122.0440725,lat:47.5443928}];
var zone_193=new google.maps.Polygon({paths: loc_193,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'North Issaquah',center: {lng: -122.0360403, lat: 47.54015347 }});
zone_193.setMap(map);
zone_193.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_193.label;var label=zone_193.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_193.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Issaquah Highlands
//################################################
var loc_194=[{lng:-122.023389,lat:47.53035764},{lng:-122.0093966,lat:47.53684796},{lng:-121.9937754,lat:47.53177747},{lng:-121.9792271,lat:47.53137181},{lng:-121.971674,lat:47.53589185},{lng:-121.9760513,lat:47.55724086},{lng:-121.9880569,lat:47.57542195},{lng:-121.9903512,lat:47.57017807},{lng:-122.0212871,lat:47.554837},{lng:-122.0325775,lat:47.54606322},{lng:-122.0360416,lat:47.54015438},{lng:-122.0347495,lat:47.53947288},{lng:-122.0300891,lat:47.53429987}];
var zone_194=new google.maps.Polygon({paths: loc_194,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Issaquah Highlands',center: {lng: -122.023389, lat: 47.53035764 }});
zone_194.setMap(map);
zone_194.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_194.label;var label=zone_194.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_194.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Klahanie
//################################################
var loc_195=[{lng:-122.0212861,lat:47.55483609},{lng:-121.9903505,lat:47.57017717},{lng:-121.9880562,lat:47.57542082},{lng:-121.9920266,lat:47.57621449},{lng:-121.9944727,lat:47.57782125},{lng:-121.9982386,lat:47.57845815},{lng:-122.0047832,lat:47.58060763},{lng:-122.0225716,lat:47.58081027},{lng:-122.0356436,lat:47.57706176},{lng:-122.0217589,lat:47.5731811},{lng:-122.0252873,lat:47.5665729},{lng:-122.0251156,lat:47.56095075},{lng:-122.0238077,lat:47.558581}];
var zone_195=new google.maps.Polygon({paths: loc_195,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Klahanie',center: {lng: -122.0212861, lat: 47.55483609 }});
zone_195.setMap(map);
zone_195.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_195.label;var label=zone_195.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_195.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Tibbetts Creek Valley
//################################################
var loc_196=[{lng:-122.0675824,lat:47.52301976},{lng:-122.0554078,lat:47.5274246},{lng:-122.0480609,lat:47.52911119},{lng:-122.0502966,lat:47.53778889},{lng:-122.0629271,lat:47.53769767},{lng:-122.0617771,lat:47.53006946}];
var zone_196=new google.maps.Polygon({paths: loc_196,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#660033',fillOpacity: 0.2,label: 'Tibbetts Creek Valley',center: {lng: -122.0675824, lat: 47.52301976 }});
zone_196.setMap(map);
zone_196.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_196.label;var label=zone_196.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_196.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Arlington
//################################################
var loc_197=[{lng:-122.25484549999237,lat:48.12316099105548},{lng:-122.185282073915,lat:48.1229177118167},{lng:-122.19548486173153,lat:48.13732201954899},{lng:-122.2157335281372,lat:48.13703875669839},{lng:-122.21549212932587,lat:48.151818247033496},{lng:-122.05141067504883,lat:48.15074098066946},{lng:-122.10823059082031,lat:48.207887162297574},{lng:-122.13069677352905,lat:48.207672661352134},{lng:-122.14343592524529,lat:48.22464495232557},{lng:-122.21603527665138,lat:48.209860081984225},{lng:-122.25698824971914,lat:48.15488886890703}];
var zone_197=new google.maps.Polygon({paths: loc_197,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Arlington',center: {lng: -122.25484549999237, lat: 48.12316099105548 }});
zone_197.setMap(map);
zone_197.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_197.label;var label=zone_197.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_197.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Tulalip
//################################################
var loc_198=[{lng:-122.18528341501951,lat:48.12291838324213},{lng:-122.1843409538269,lat:48.04746196293428},{lng:-122.2335433959961,lat:48.02024274341273},{lng:-122.26813316345215,lat:48.04417690562673},{lng:-122.29250907897949,lat:48.05117712460671},{lng:-122.34786987304688,lat:48.09642606004488},{lng:-122.36846923828125,lat:48.123934463666366},{lng:-122.25484348833561,lat:48.12316211009255}];
var zone_198=new google.maps.Polygon({paths: loc_198,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BBFF',fillOpacity: 0.2,label: 'Tulalip',center: {lng: -122.18528341501951, lat: 48.12291838324213 }});
zone_198.setMap(map);
zone_198.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_198.label;var label=zone_198.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_198.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Marysville
//################################################
var loc_199=[{lng:-122.18434430658817,lat:48.0474637560306},{lng:-122.14069001376629,lat:48.02183627819335},{lng:-122.10928503423929,lat:48.02145953926336},{lng:-122.11027443408966,lat:48.02788704574577},{lng:-122.11133223026991,lat:48.07199889788077},{lng:-122.18465443700552,lat:48.072498706927256}];
var zone_199=new google.maps.Polygon({paths: loc_199,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFFF00',fillOpacity: 0.2,label: 'Marysville',center: {lng: -122.18434430658817, lat: 48.0474637560306 }});
zone_199.setMap(map);
zone_199.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_199.label;var label=zone_199.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_199.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Marysville
//################################################
var loc_200=[{lng:-122.11133323609829,lat:48.07199844982028},{lng:-122.11318966001272,lat:48.15114786611709},{lng:-122.21549347043037,lat:48.15181914176358},{lng:-122.21573419868946,lat:48.13703875669839},{lng:-122.19548553228378,lat:48.13732112456614},{lng:-122.18528408557177,lat:48.122917040391286},{lng:-122.1846541017294,lat:48.07249825887111}];
var zone_200=new google.maps.Polygon({paths: loc_200,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: 'FFFF00',fillOpacity: 0.2,label: 'North Marysville',center: {lng: -122.11133323609829, lat: 48.07199844982028 }});
zone_200.setMap(map);
zone_200.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_200.label;var label=zone_200.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_200.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Lake Stevens
//################################################
var loc_201=[{lng:-122.1102761104703,lat:48.02788637307912},{lng:-122.05424308776855,lat:48.03223991210832},{lng:-122.00986862182617,lat:48.071598554277934},{lng:-122.02694892883301,lat:48.11425089273602},{lng:-122.04008102416992,lat:48.14100518930899},{lng:-122.05141268670559,lat:48.150742099105564},{lng:-122.11319133639336,lat:48.151147642431624},{lng:-122.11133424192667,lat:48.07199889788077}];
var zone_201=new google.maps.Polygon({paths: loc_201,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'North Lake Stevens',center: {lng: -122.1102761104703, lat: 48.02788637307912 }});
zone_201.setMap(map);
zone_201.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_201.label;var label=zone_201.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_201.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake Stevens
//################################################
var loc_202=[{lng:-122.0681332424283,lat:48.000623833709476},{lng:-122.07149975001812,lat:48.002482015132635},{lng:-122.08795845508575,lat:47.99650993234488},{lng:-122.13754177093506,lat:47.995579508448934},{lng:-122.14069001376629,lat:48.02183695093898},{lng:-122.1092863753438,lat:48.02146066051426},{lng:-122.11027644574642,lat:48.02788771841243},{lng:-122.05424375832081,lat:48.03224125732798},{lng:-122.05158233642578,lat:48.01539142071859},{lng:-122.03893303871155,lat:48.000615757439846}];
var zone_202=new google.maps.Polygon({paths: loc_202,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Lake Stevens',center: {lng: -122.0681332424283, lat: 48.000623833709476 }});
zone_202.setMap(map);
zone_202.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_202.label;var label=zone_202.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_202.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Lake Stevens
//################################################
var loc_203=[{lng:-122.08245858550072,lat:47.99850735913909},{lng:-122.07880541682243,lat:47.9858832104274},{lng:-122.09299564361572,lat:47.97713898173056},{lng:-122.09341943264008,lat:47.95134225380102},{lng:-122.10571065545082,lat:47.95199615391755},{lng:-122.11872808635235,lat:47.95704563685879},{lng:-122.12973117828369,lat:47.96643643451448},{lng:-122.13827133178711,lat:47.97762736720274},{lng:-122.1673035621643,lat:47.97833120872724},{lng:-122.16962099075317,lat:47.9799112261813},{lng:-122.16797076165676,lat:47.98368893267409},{lng:-122.15882778167725,lat:47.98561325062664},{lng:-122.15187549591064,lat:47.99092691291412},{lng:-122.1509313583374,lat:47.99534976049116},{lng:-122.13754009455442,lat:47.99558085462537},{lng:-122.08795946091413,lat:47.99651060542093}];
var zone_203=new google.maps.Polygon({paths: loc_203,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'West Lake Stevens',center: {lng: -122.08245858550072, lat: 47.99850735913909 }});
zone_203.setMap(map);
zone_203.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_203.label;var label=zone_203.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_203.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Machias
//################################################
var loc_204=[{lng:-122.09342077374458,lat:47.95134270291107},{lng:-122.07437038421631,lat:47.94374544786937},{lng:-122.04291343688965,lat:47.962858846977404},{lng:-121.992322281003,lat:47.963431107012866},{lng:-122.00514793395996,lat:47.9983794794755},{lng:-122.03893538564444,lat:48.000616879144026},{lng:-122.06813357770443,lat:48.00062450673186},{lng:-122.07149975001812,lat:48.00248291246351},{lng:-122.08245992660522,lat:47.99850713478908},{lng:-122.07880709320307,lat:47.9858834348323},{lng:-122.09299731999636,lat:47.97713920617348}];
var zone_204=new google.maps.Polygon({paths: loc_204,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Machias',center: {lng: -122.09342077374458, lat: 47.95134270291107 }});
zone_204.setMap(map);
zone_204.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_204.label;var label=zone_204.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_204.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Hyland
//################################################
var loc_205=[{lng:-122.03893773257732,lat:48.00061441139478},{lng:-122.05158367753029,lat:48.01539074788886},{lng:-122.05424711108208,lat:48.03224080892143},{lng:-122.02676184475422,lat:48.05661983659316},{lng:-122.02068328857422,lat:48.054390021276966},{lng:-122.00514927506447,lat:47.99837790902152}];
var zone_205=new google.maps.Polygon({paths: loc_205,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Hyland',center: {lng: -122.03893773257732, lat: 48.00061441139478 }});
zone_205.setMap(map);
zone_205.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_205.label;var label=zone_205.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_205.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Snohomish
//################################################
var loc_206=[{lng:-122.12142705917358,lat:47.91757881313207},{lng:-122.11835861206055,lat:47.91332188890526},{lng:-122.10453987121582,lat:47.91140903526767},{lng:-122.09572076797485,lat:47.910560453494554},{lng:-122.0899486541748,lat:47.90546867064745},{lng:-122.07870483398438,lat:47.90564128165839},{lng:-122.07527160644531,lat:47.92036863429323},{lng:-122.08024978637695,lat:47.927673226466766},{lng:-122.12101936340332,lat:47.927730738847536}];
var zone_206=new google.maps.Polygon({paths: loc_206,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Downtown Snohomish',center: {lng: -122.12142705917358, lat: 47.91757881313207 }});
zone_206.setMap(map);
zone_206.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_206.label;var label=zone_206.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_206.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fobes Hills
//################################################
var loc_207=[{lng:-122.12973050773144,lat:47.966437556961644},{lng:-122.11872674524784,lat:47.95704608591929},{lng:-122.10571099072695,lat:47.95199705212632},{lng:-122.10140269249678,lat:47.95176845749451},{lng:-122.100700289011,lat:47.93858528009761},{lng:-122.1693417057395,lat:47.9380242001249},{lng:-122.17141270637512,lat:47.94193972848389},{lng:-122.15942859649658,lat:47.9508167923543},{lng:-122.13715553283691,lat:47.95599033391582}];
var zone_207=new google.maps.Polygon({paths: loc_207,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Fobes Hills',center: {lng: -122.12973050773144, lat: 47.966437556961644 }});
zone_207.setMap(map);
zone_207.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_207.label;var label=zone_207.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_207.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: NorthWest Snohomish
//################################################
var loc_208=[{lng:-122.1214260533452,lat:47.91757926253549},{lng:-122.1210190281272,lat:47.927730289532306},{lng:-122.08024878054857,lat:47.92767255249316},{lng:-122.07062602043152,lat:47.934932311148664},{lng:-122.04497337341309,lat:47.93503429140161},{lng:-122.04291377216578,lat:47.96285952049232},{lng:-122.07437105476856,lat:47.943746795397594},{lng:-122.09342110902071,lat:47.951343601131185},{lng:-122.10140503942966,lat:47.95176845749451},{lng:-122.10070095956326,lat:47.93858595392898},{lng:-122.16934204101562,lat:47.93802554780227},{lng:-122.1703290939331,lat:47.93109510182157},{lng:-122.1665096282959,lat:47.926839289758696},{lng:-122.15436458587646,lat:47.925027587817446},{lng:-122.1484637260437,lat:47.921864146583786},{lng:-122.13709115982056,lat:47.922410572982585}];
var zone_208=new google.maps.Polygon({paths: loc_208,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'NorthWest Snohomish',center: {lng: -122.1214260533452, lat: 47.91757926253549 }});
zone_208.setMap(map);
zone_208.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_208.label;var label=zone_208.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_208.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Auburn
//################################################
var loc_209=[{lng:-122.27113723754883,lat:47.34341746329922},{lng:-122.26598739624023,lat:47.343475622362554},{lng:-122.26641654968262,lat:47.34487142066086},{lng:-122.2657299041748,lat:47.34737213364802},{lng:-122.26658821105957,lat:47.34876782891704},{lng:-122.26461410522461,lat:47.34969827192655},{lng:-122.26306915283203,lat:47.350803151696304},{lng:-122.26418495178223,lat:47.35376876723614},{lng:-122.2089958190918,lat:47.354059504887665},{lng:-122.20792293548584,lat:47.35280932162145},{lng:-122.20796585083008,lat:47.350832227167366},{lng:-122.20719337463379,lat:47.34943658648799},{lng:-122.20775127410889,lat:47.34690689369039},{lng:-122.20487594604492,lat:47.343242985724736},{lng:-122.20573425292969,lat:47.34112012904623},{lng:-122.20856666564941,lat:47.33856095546579},{lng:-122.20835208892822,lat:47.33600165783748},{lng:-122.21062660217285,lat:47.33358766117047},{lng:-122.2113561630249,lat:47.3322788216627},{lng:-122.21118450164795,lat:47.33021369780691},{lng:-122.2098970413208,lat:47.32881751198528},{lng:-122.20212936401367,lat:47.32663589775116},{lng:-122.2023868560791,lat:47.322068760213504},{lng:-122.20423221588135,lat:47.317530321627935},{lng:-122.20371723175049,lat:47.31555190588103},{lng:-122.15947151184082,lat:47.31520276600099},{lng:-122.16496467590332,lat:47.31211859687351},{lng:-122.17097282409668,lat:47.30612431941652},{lng:-122.17105865478516,lat:47.304145476644784},{lng:-122.17706680297852,lat:47.30100245645759},{lng:-122.17487812042236,lat:47.300653220457775},{lng:-122.1740198135376,lat:47.299721913179944},{lng:-122.17359066009521,lat:47.29692789291742},{lng:-122.17483520507812,lat:47.295792780011936},{lng:-122.17444896697998,lat:47.29066991609843},{lng:-122.16917037963867,lat:47.28839939725384},{lng:-122.16118812561035,lat:47.288166518015046},{lng:-122.15848445892334,lat:47.28869049486048},{lng:-122.14964389801025,lat:47.287613425713516},{lng:-122.1346664428711,lat:47.28627433619016},{lng:-122.13213443756104,lat:47.283741617663225},{lng:-122.1254825592041,lat:47.28097586697658},{lng:-122.1174144744873,lat:47.27896696793538},{lng:-122.11007595062256,lat:47.278996082958955},{lng:-122.10977554321289,lat:47.2573300771116},{lng:-122.12556838989258,lat:47.25756309208491},{lng:-122.12316513061523,lat:47.243114224640834},{lng:-122.14410781860352,lat:47.24352210963712},{lng:-122.15234756469727,lat:47.24701813792506},{lng:-122.16711044311523,lat:47.246202418628506},{lng:-122.17217445373535,lat:47.24847474828181},{lng:-122.19182968139648,lat:47.250688719307824},{lng:-122.19903945922852,lat:47.25039741261818},{lng:-122.20341682434082,lat:47.24666854547898},{lng:-122.21208572387695,lat:47.244163065429134},{lng:-122.21826553344727,lat:47.24392999149296},{lng:-122.22358703613281,lat:47.24626068470913},{lng:-122.22890853881836,lat:47.25156262976331},{lng:-122.22521781921387,lat:47.23961793870555},{lng:-122.22830772399902,lat:47.2249310181656},{lng:-122.24701881408691,lat:47.22539733216676},{lng:-122.25543022155762,lat:47.244512674410664},{lng:-122.26161003112793,lat:47.266067436842626},{lng:-122.27499961853027,lat:47.27911254289306},{lng:-122.30916023254395,lat:47.27823908713895},{lng:-122.31036186218262,lat:47.2796948387185},{lng:-122.30735778808594,lat:47.28662366716016},{lng:-122.27354049682617,lat:47.30379626140715},{lng:-122.27396965026855,lat:47.305658716016914},{lng:-122.27611541748047,lat:47.30693911549743},{lng:-122.27869033813477,lat:47.31304968576614},{lng:-122.2807502746582,lat:47.31409714116217},{lng:-122.27886199951172,lat:47.31462086107463},{lng:-122.27062225341797,lat:47.31462086107463}];
var zone_209=new google.maps.Polygon({paths: loc_209,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Auburn',center: {lng: -122.27113723754883, lat: 47.34341746329922 }});
zone_209.setMap(map);
zone_209.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_209.label;var label=zone_209.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_209.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Buckley
//################################################
var loc_210=[{lng:-122.05012321472168,lat:47.12399424884499},{lng:-122.05527305603027,lat:47.1196140381433},{lng:-122.07338333129883,lat:47.14081090672473},{lng:-122.07544326782227,lat:47.13865073101149},{lng:-122.07887649536133,lat:47.140869288634036},{lng:-122.07956314086914,lat:47.15622150520611},{lng:-122.07801818847656,lat:47.18947915108537},{lng:-122.06926345825195,lat:47.187670937469676},{lng:-122.06291198730469,lat:47.185687664607926},{lng:-122.04668998718262,lat:47.17086910510096},{lng:-122.03630447387695,lat:47.17302797150425},{lng:-122.03132629394531,lat:47.17507006165581},{lng:-122.02342987060547,lat:47.17407819910428},{lng:-122.0112419128418,lat:47.17617859199598},{lng:-122.00840950012207,lat:47.17466164990763},{lng:-122.0035171508789,lat:47.16987716408659},{lng:-121.99441909790039,lat:47.172386155524144},{lng:-121.99167251586914,lat:47.16287470057644},{lng:-121.99047088623047,lat:47.13578982269116}];
var zone_210=new google.maps.Polygon({paths: loc_210,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Buckley',center: {lng: -122.05012321472168, lat: 47.12399424884499 }});
zone_210.setMap(map);
zone_210.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_210.label;var label=zone_210.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_210.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Enumclaw
//################################################
var loc_211=[{lng:-121.99047088623047,lat:47.13584821011389},{lng:-121.95510864257812,lat:47.156104775044035},{lng:-121.93965911865234,lat:47.19554496613323},{lng:-121.94034576416016,lat:47.2249310181656},{lng:-121.96283340454102,lat:47.23507242204601},{lng:-121.96300506591797,lat:47.22819513003102},{lng:-122.0804214477539,lat:47.22831170173733},{lng:-122.08003520965576,lat:47.19551580521947},{lng:-122.0780611038208,lat:47.18944998683838},{lng:-122.06930637359619,lat:47.187670937469676},{lng:-122.06291198730469,lat:47.185687664607926},{lng:-122.04668998718262,lat:47.17086910510096},{lng:-122.03630447387695,lat:47.17305714477358},{lng:-122.03124046325684,lat:47.17507006165581},{lng:-122.02334403991699,lat:47.17407819910428},{lng:-122.01128482818604,lat:47.17617859199598},{lng:-122.0083236694336,lat:47.17463247751969},{lng:-122.00347423553467,lat:47.16990633908672},{lng:-121.99433326721191,lat:47.172444502751944},{lng:-121.9916296005249,lat:47.16284552171396}];
var zone_211=new google.maps.Polygon({paths: loc_211,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Downtown Enumclaw',center: {lng: -121.99047088623047, lat: 47.13584821011389 }});
zone_211.setMap(map);
zone_211.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_211.label;var label=zone_211.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_211.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Maple Heights
//################################################
var loc_212=[{lng:-122.03836441040039,lat:47.40868972752111},{lng:-122.05072402954102,lat:47.39219039406568},{lng:-122.06119537353516,lat:47.386728208921234},{lng:-122.16556549072266,lat:47.38707687595002},{lng:-122.16522216796875,lat:47.41754727264091},{lng:-122.15513706207275,lat:47.421699641459384},{lng:-122.15372085571289,lat:47.45734426505423},{lng:-122.15595245361328,lat:47.468601552571364},{lng:-122.08162307739258,lat:47.46082615785414},{lng:-122.07836151123047,lat:47.455603232184146},{lng:-122.07406997680664,lat:47.45235314992174},{lng:-122.07286834716797,lat:47.44376267985063}];
var zone_212=new google.maps.Polygon({paths: loc_212,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Maple Heights',center: {lng: -122.03836441040039, lat: 47.40868972752111 }});
zone_212.setMap(map);
zone_212.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_212.label;var label=zone_212.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_212.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North East Tacoma
//################################################
var loc_214=[{lng:-122.44417190551758,lat:47.30632801961422},{lng:-122.44086742401123,lat:47.30667721812684},{lng:-122.43773460388184,lat:47.30693911549743},{lng:-122.43494510650635,lat:47.30787029563926},{lng:-122.43305683135986,lat:47.30990719500831},{lng:-122.43271350860596,lat:47.31174033732512},{lng:-122.4296236038208,lat:47.309587116020204},{lng:-122.42777824401855,lat:47.30670631789877},{lng:-122.42262840270996,lat:47.306473519274824},{lng:-122.42262840270996,lat:47.30303962047838},{lng:-122.41670608520508,lat:47.30286500949532},{lng:-122.41125583648682,lat:47.301206176392135},{lng:-122.40078449249268,lat:47.30088604471397},{lng:-122.39760875701904,lat:47.30170092153647},{lng:-122.3915147781372,lat:47.30123527917584},{lng:-122.38494873046875,lat:47.29759730705444},{lng:-122.3706579208374,lat:47.29721894358353},{lng:-122.36653804779053,lat:47.30068232354588},{lng:-122.35263347625732,lat:47.30062411735364},{lng:-122.3498010635376,lat:47.297771935435556},{lng:-122.34559535980225,lat:47.297422678096616},{lng:-122.34297752380371,lat:47.29395908461377},{lng:-122.33778476715088,lat:47.29296944480632},{lng:-122.3367977142334,lat:47.290349720626565},{lng:-122.33469486236572,lat:47.28973843297913},{lng:-122.33469486236572,lat:47.282577108681565},{lng:-122.32186317443848,lat:47.282664447744345},{lng:-122.33263492584229,lat:47.2689795696477},{lng:-122.33400821685791,lat:47.267174066182186},{lng:-122.3356819152832,lat:47.264320080254805},{lng:-122.35580921173096,lat:47.27809350977805},{lng:-122.35555171966553,lat:47.271978898937924},{lng:-122.35263347625732,lat:47.27200801780664},{lng:-122.35293388366699,lat:47.26793122029493},{lng:-122.3567533493042,lat:47.26801858353409},{lng:-122.35615253448486,lat:47.26111644337197},{lng:-122.35958576202393,lat:47.256718407927906},{lng:-122.36010074615479,lat:47.258291257267324},{lng:-122.35907077789307,lat:47.26207755479276},{lng:-122.35907077789307,lat:47.263533750972535},{lng:-122.36181735992432,lat:47.26510639785706},{lng:-122.37117290496826,lat:47.26880484619753},{lng:-122.3728895187378,lat:47.270464695686606},{lng:-122.375807762146,lat:47.2710470866794},{lng:-122.38027095794678,lat:47.27462865038345},{lng:-122.38593578338623,lat:47.27722003720156},{lng:-122.38988399505615,lat:47.278937852895766},{lng:-122.39147186279297,lat:47.278821392577136},{lng:-122.39477634429932,lat:47.276608597818594},{lng:-122.39593505859375,lat:47.27719092120069},{lng:-122.39168643951416,lat:47.28065561281992},{lng:-122.39361763000488,lat:47.281150550244966},{lng:-122.39850997924805,lat:47.28068472691427},{lng:-122.40065574645996,lat:47.28074295505491},{lng:-122.4041748046875,lat:47.28243154325648},{lng:-122.40649223327637,lat:47.2831011408955},{lng:-122.40825176239014,lat:47.2849061010112},{lng:-122.4091100692749,lat:47.28685655319183},{lng:-122.40975379943848,lat:47.287700756461426},{lng:-122.40928173065186,lat:47.2886031657467},{lng:-122.41099834442139,lat:47.291310301226616},{lng:-122.41456031799316,lat:47.29436657797505},{lng:-122.41958141326904,lat:47.29649131391436},{lng:-122.42623329162598,lat:47.29803387692584},{lng:-122.42970943450928,lat:47.29771372603926},{lng:-122.43322849273682,lat:47.29681147220239},{lng:-122.43537425994873,lat:47.29745178296298},{lng:-122.4371337890625,lat:47.29809208596965},{lng:-122.44293808937073,lat:47.29927808128356},{lng:-122.44361400604248,lat:47.299721913179944},{lng:-122.4447512626648,lat:47.30053680794518},{lng:-122.44496583938599,lat:47.30154085743759},{lng:-122.44480490684509,lat:47.30317057833718},{lng:-122.4443006515503,lat:47.30469839605306},{lng:-122.44449377059937,lat:47.3049966791218},{lng:-122.44488000869751,lat:47.30544773812628},{lng:-122.44490146636963,lat:47.305906068333584}];
var zone_214=new google.maps.Polygon({paths: loc_214,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#76923c',fillOpacity: 0.2,label: 'North East Tacoma',center: {lng: -122.44417190551758, lat: 47.30632801961422 }});
zone_214.setMap(map);
zone_214.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_214.label;var label=zone_214.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_214.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Federal Way
//################################################
var loc_215=[{lng:-122.27079391479492,lat:47.3433593041718},{lng:-122.27079391479492,lat:47.31462086107463},{lng:-122.27954864501953,lat:47.31450447932041},{lng:-122.28100776672363,lat:47.314038949740414},{lng:-122.27869033813477,lat:47.312933300551684},{lng:-122.27611541748047,lat:47.30693911549743},{lng:-122.27396965026855,lat:47.30560051530361},{lng:-122.27354049682617,lat:47.303738058643276},{lng:-122.30023384094238,lat:47.28994219631331},{lng:-122.30727195739746,lat:47.28662366716016},{lng:-122.31027603149414,lat:47.279578380066106},{lng:-122.31285095214844,lat:47.282664447744345},{lng:-122.32194900512695,lat:47.28272267370612},{lng:-122.33465194702148,lat:47.282664447744345},{lng:-122.33465194702148,lat:47.28982576021848},{lng:-122.33688354492188,lat:47.29029150305978},{lng:-122.33774185180664,lat:47.29296944480632},{lng:-122.34297752380371,lat:47.29395908461377},{lng:-122.34563827514648,lat:47.29745178296298},{lng:-122.34992980957031,lat:47.297859249409825},{lng:-122.35267639160156,lat:47.300653220457775},{lng:-122.36117362976074,lat:47.300711426617944},{lng:-122.36658096313477,lat:47.300711426617944},{lng:-122.37070083618164,lat:47.29727715352452},{lng:-122.38503456115723,lat:47.297626411824666},{lng:-122.39155769348145,lat:47.30123527917584},{lng:-122.39765167236328,lat:47.30170092153647},{lng:-122.40056991577148,lat:47.30094425061781},{lng:-122.41138458251953,lat:47.30123527917584},{lng:-122.41679191589355,lat:47.30292321322043},{lng:-122.42262840270996,lat:47.303097824011225},{lng:-122.42271423339844,lat:47.30653171902694},{lng:-122.42777824401855,lat:47.306648118338906},{lng:-122.42949485778809,lat:47.30952891963227},{lng:-122.4327564239502,lat:47.31174033732512},{lng:-122.43232727050781,lat:47.31482452852776},{lng:-122.43005275726318,lat:47.3165411230138},{lng:-122.42983818054199,lat:47.317326664603584},{lng:-122.4299669265747,lat:47.31924682821466},{lng:-122.4292802810669,lat:47.319945052226764},{lng:-122.42494583129883,lat:47.31913045664891},{lng:-122.42134094238281,lat:47.31945047783804},{lng:-122.41842269897461,lat:47.320323253047306},{lng:-122.41408824920654,lat:47.32006142199836},{lng:-122.41267204284668,lat:47.320701451160566},{lng:-122.40370273590088,lat:47.32203966889997},{lng:-122.40121364593506,lat:47.32302876457323},{lng:-122.39881038665771,lat:47.32489054148646},{lng:-122.39503383636475,lat:47.32777034839828},{lng:-122.39224433898926,lat:47.32826484490143},{lng:-122.38838195800781,lat:47.32843937197372},{lng:-122.38610744476318,lat:47.32774126022452},{lng:-122.3845624923706,lat:47.326112296927},{lng:-122.38207340240479,lat:47.32593776216555},{lng:-122.37778186798096,lat:47.327304935695715},{lng:-122.37404823303223,lat:47.332773275955894},{lng:-122.36984252929688,lat:47.33486738399105},{lng:-122.36366271972656,lat:47.33620524287193},{lng:-122.3543930053711,lat:47.33800839034171},{lng:-122.34726905822754,lat:47.33981147623595},{lng:-122.3356819152832,lat:47.34173082259019},{lng:-122.3338794708252,lat:47.3431848264051},{lng:-122.32701301574707,lat:47.34661611663449},{lng:-122.3243522644043,lat:47.34870967568433},{lng:-122.32460975646973,lat:47.35993206247558},{lng:-122.32572555541992,lat:47.364466857693266},{lng:-122.3243522644043,lat:47.36905939398391},{lng:-122.32392311096191,lat:47.37109393414344},{lng:-122.32563972473145,lat:47.37272150976277},{lng:-122.32460975646973,lat:47.375685893433115},{lng:-122.3131513595581,lat:47.37606369506553},{lng:-122.30001926422119,lat:47.37588932541767},{lng:-122.31164932250977,lat:47.35301284184581},{lng:-122.31199264526367,lat:47.34312666702138}];
var zone_215=new google.maps.Polygon({paths: loc_215,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#76923c',fillOpacity: 0.2,label: 'Federal Way',center: {lng: -122.27079391479492, lat: 47.3433593041718 }});
zone_215.setMap(map);
zone_215.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_215.label;var label=zone_215.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_215.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fife
//################################################
var loc_216=[{lng:-122.40009784698486,lat:47.242910280965006},{lng:-122.41159915924072,lat:47.24244412104348},{lng:-122.41048336029053,lat:47.23909347591473},{lng:-122.40241527557373,lat:47.23970534866596},{lng:-122.39855289459229,lat:47.23938484477277},{lng:-122.39692211151123,lat:47.23699557283679},{lng:-122.39426136016846,lat:47.23008938849186},{lng:-122.39190101623535,lat:47.22874884335262},{lng:-122.38906860351562,lat:47.22799112892809},{lng:-122.38718032836914,lat:47.22979796851973},{lng:-122.38443374633789,lat:47.22822427298163},{lng:-122.38138675689697,lat:47.2215501189796},{lng:-122.37683773040771,lat:47.220471683366746},{lng:-122.3717737197876,lat:47.21825644951765},{lng:-122.37040042877197,lat:47.21676985912017},{lng:-122.36804008483887,lat:47.21612857196378},{lng:-122.36143112182617,lat:47.210414944049745},{lng:-122.34181880950928,lat:47.20971527383798},{lng:-122.34203338623047,lat:47.21367994966394},{lng:-122.34113216400146,lat:47.21449616966011},{lng:-122.33654022216797,lat:47.21196001640316},{lng:-122.33641147613525,lat:47.227961985849305},{lng:-122.33448028564453,lat:47.22787455651677},{lng:-122.3206615447998,lat:47.22055912490933},{lng:-122.3204255104065,lat:47.22825341591623},{lng:-122.32192754745483,lat:47.23039537773811},{lng:-122.32409477233887,lat:47.232114713031606},{lng:-122.32375144958496,lat:47.235524077366435},{lng:-122.32763528823853,lat:47.23903520195086},{lng:-122.33654022216797,lat:47.23897692792289},{lng:-122.3362398147583,lat:47.24133697479034},{lng:-122.3356819152832,lat:47.24256066140841},{lng:-122.33645439147949,lat:47.24512448457646},{lng:-122.33482360839844,lat:47.247396860471255},{lng:-122.33542442321777,lat:47.251475239366684},{lng:-122.33662605285645,lat:47.26035919178181},{lng:-122.33576774597168,lat:47.26426183404183},{lng:-122.35576629638672,lat:47.27812262528228},{lng:-122.35550880432129,lat:47.27200801780664},{lng:-122.35267639160156,lat:47.27206625549603},{lng:-122.35293388366699,lat:47.26793122029493},{lng:-122.35671043395996,lat:47.26804770458176},{lng:-122.3561954498291,lat:47.26117469304566},{lng:-122.35980033874512,lat:47.256631026039145},{lng:-122.36988544464111,lat:47.24792124106491},{lng:-122.37314701080322,lat:47.24728033074545},{lng:-122.40078449249268,lat:47.24728033074545}];
var zone_216=new google.maps.Polygon({paths: loc_216,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Fife',center: {lng: -122.40009784698486, lat: 47.242910280965006 }});
zone_216.setMap(map);
zone_216.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_216.label;var label=zone_216.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_216.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Waller
//################################################
var loc_217=[{lng:-122.36151695251465,lat:47.21047324948409},{lng:-122.36812591552734,lat:47.21612857196378},{lng:-122.37044334411621,lat:47.216828157567974},{lng:-122.37198829650879,lat:47.21834389471367},{lng:-122.3770523071289,lat:47.22050083056362},{lng:-122.38134384155273,lat:47.221608412171605},{lng:-122.38443374633789,lat:47.22825341591623},{lng:-122.38709449768066,lat:47.22982711058905},{lng:-122.38898277282715,lat:47.22802027199088},{lng:-122.39215850830078,lat:47.22889455642319},{lng:-122.3943042755127,lat:47.23011853040097},{lng:-122.39705085754395,lat:47.23711212518693},{lng:-122.39850997924805,lat:47.239326571129354},{lng:-122.40237236022949,lat:47.23973448528738},{lng:-122.41052627563477,lat:47.23915174981453},{lng:-122.40777969360352,lat:47.22685453698151},{lng:-122.40803718566895,lat:47.199627335893815},{lng:-122.40752220153809,lat:47.19811106379041},{lng:-122.40786552429199,lat:47.17985407965152},{lng:-122.40477561950684,lat:47.18002909652704},{lng:-122.39919662475586,lat:47.18084583431804},{lng:-122.35688209533691,lat:47.18084583431804},{lng:-122.35748291015625,lat:47.19187056480316},{lng:-122.35010147094727,lat:47.19157893475296},{lng:-122.34692573547363,lat:47.19286209498707},{lng:-122.34160423278809,lat:47.19169558696534},{lng:-122.33645439147949,lat:47.19146228228417},{lng:-122.3382568359375,lat:47.192920419715115},{lng:-122.3466682434082,lat:47.196186502181575},{lng:-122.35138893127441,lat:47.20143514215493},{lng:-122.35894203186035,lat:47.2051671924795}];
var zone_217=new google.maps.Polygon({paths: loc_217,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Waller',center: {lng: -122.36151695251465, lat: 47.21047324948409 }});
zone_217.setMap(map);
zone_217.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_217.label;var label=zone_217.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_217.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Edgewood
//################################################
var loc_218=[{lng:-122.32177734375,lat:47.28272267370612},{lng:-122.31285095214844,lat:47.28260622171851},{lng:-122.30907440185547,lat:47.27818085624264},{lng:-122.2749137878418,lat:47.278996082958955},{lng:-122.26152420043945,lat:47.26571797013935},{lng:-122.25534439086914,lat:47.24392999149296},{lng:-122.24710464477539,lat:47.22539733216676},{lng:-122.25414276123047,lat:47.23227498720834},{lng:-122.26804733276367,lat:47.23600486750966},{lng:-122.30701446533203,lat:47.23530553495016},{lng:-122.30735778808594,lat:47.2389186538308},{lng:-122.3228931427002,lat:47.2389186538308},{lng:-122.3258113861084,lat:47.23973448528738},{lng:-122.32752799987793,lat:47.23903520195086},{lng:-122.33654022216797,lat:47.2389186538308},{lng:-122.33628273010254,lat:47.24148265325079},{lng:-122.33551025390625,lat:47.24293941582391},{lng:-122.33636856079102,lat:47.24503708355682},{lng:-122.33456611633301,lat:47.247484257597385},{lng:-122.33654022216797,lat:47.260650443675175},{lng:-122.3356819152832,lat:47.264320080254805},{lng:-122.33413696289062,lat:47.266941093507015}];
var zone_218=new google.maps.Polygon({paths: loc_218,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Edgewood',center: {lng: -122.32177734375, lat: 47.28272267370612 }});
zone_218.setMap(map);
zone_218.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_218.label;var label=zone_218.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_218.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West End
//################################################
var loc_219=[{lng:-122.50534772872925,lat:47.242881146090085},{lng:-122.55950689315796,lat:47.24275003895465},{lng:-122.56075143814087,lat:47.24427960201268},{lng:-122.55901336669922,lat:47.244410705362725},{lng:-122.55800485610962,lat:47.24439613833987},{lng:-122.5576400756836,lat:47.24400282720819},{lng:-122.55673885345459,lat:47.24410479704123},{lng:-122.55637407302856,lat:47.24427960201268},{lng:-122.55536556243896,lat:47.24617328556416},{lng:-122.55281209945679,lat:47.248795197184705},{lng:-122.55264043807983,lat:47.2494652204441},{lng:-122.55319833755493,lat:47.2507469804535},{lng:-122.55324125289917,lat:47.25176654012801},{lng:-122.55291938781738,lat:47.253863858311355},{lng:-122.5513744354248,lat:47.255087255560696},{lng:-122.55100965499878,lat:47.25523289620776},{lng:-122.54967927932739,lat:47.257941739229494},{lng:-122.54622459411621,lat:47.26251441785248},{lng:-122.54605293273926,lat:47.26327163861624},{lng:-122.5450873374939,lat:47.26452394149544},{lng:-122.54086017608643,lat:47.268601001443336},{lng:-122.53525972366333,lat:47.274162769632305},{lng:-122.52989530563354,lat:47.28263533473946},{lng:-122.52925157546997,lat:47.29042249249495},{lng:-122.52931594848633,lat:47.29328962441768},{lng:-122.53111839294434,lat:47.295297979581214},{lng:-122.53463745117188,lat:47.30174457529749},{lng:-122.53884315490723,lat:47.30795759293651},{lng:-122.54124641418457,lat:47.31040185872263},{lng:-122.54631042480469,lat:47.314038949740414},{lng:-122.54785537719727,lat:47.315304598704294},{lng:-122.54828453063965,lat:47.31639565106746},{lng:-122.54832744598389,lat:47.317021177595265},{lng:-122.5480055809021,lat:47.31786489932103},{lng:-122.547447681427,lat:47.31815583472336},{lng:-122.54536628723145,lat:47.31873770072213},{lng:-122.54249095916748,lat:47.31907227076991},{lng:-122.53991603851318,lat:47.31870860757437},{lng:-122.53313541412354,lat:47.3171666478195},{lng:-122.52283573150635,lat:47.30984899897283},{lng:-122.51749277114868,lat:47.30756475396348},{lng:-122.51556158065796,lat:47.3069973147369},{lng:-122.51433849334717,lat:47.306007918951096},{lng:-122.5130295753479,lat:47.3070700636961},{lng:-122.51219272613525,lat:47.307273760249245},{lng:-122.50875949859619,lat:47.30622616961348},{lng:-122.50768661499023,lat:47.30539681230239},{lng:-122.50682830810547,lat:47.3042036789601},{lng:-122.50691413879395,lat:47.30344704386265},{lng:-122.50665664672852,lat:47.30301051868791},{lng:-122.50970363616943,lat:47.30180278025615},{lng:-122.51024007797241,lat:47.30174457529749},{lng:-122.51017570495605,lat:47.2982085038651},{lng:-122.51298666000366,lat:47.298150294949416},{lng:-122.51298666000366,lat:47.29491959965724},{lng:-122.5050687789917,lat:47.29484683397687},{lng:-122.50491857528687,lat:47.24336186947741}];
var zone_219=new google.maps.Polygon({paths: loc_219,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'West End',center: {lng: -122.50534772872925, lat: 47.242881146090085 }});
zone_219.setMap(map);
zone_219.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_219.label;var label=zone_219.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_219.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North End
//################################################
var loc_220=[{lng:-122.4959921836853,lat:47.25532756241355},{lng:-122.5049614906311,lat:47.25538581845606},{lng:-122.50507950782776,lat:47.29485411054941},{lng:-122.51299738883972,lat:47.29491232309371},{lng:-122.51298666000366,lat:47.298150294949416},{lng:-122.51018643379211,lat:47.2982085038651},{lng:-122.51024007797241,lat:47.30174457529749},{lng:-122.50970363616943,lat:47.30179550463985},{lng:-122.50665664672852,lat:47.303017794137034},{lng:-122.50614166259766,lat:47.30195556796771},{lng:-122.50392079353333,lat:47.30010753458971},{lng:-122.50123858451843,lat:47.298223056084},{lng:-122.50072360038757,lat:47.29753182126285},{lng:-122.49883532524109,lat:47.29643310310829},{lng:-122.49937176704407,lat:47.29578550356856},{lng:-122.49936103820801,lat:47.29556720980158},{lng:-122.49369621276855,lat:47.29213260257684},{lng:-122.48955488204956,lat:47.288348455007984},{lng:-122.48883605003357,lat:47.28809374304264},{lng:-122.48755931854248,lat:47.28743876378515},{lng:-122.48693704605103,lat:47.286965718166215},{lng:-122.48703360557556,lat:47.28665277797019},{lng:-122.48230218887329,lat:47.28353783044189},{lng:-122.48165845870972,lat:47.2840254628419},{lng:-122.48048901557922,lat:47.28347960537729},{lng:-122.48111128807068,lat:47.28281729075728},{lng:-122.48044610023499,lat:47.28258438694231},{lng:-122.47992038726807,lat:47.28289007298919},{lng:-122.4776566028595,lat:47.28175465876839},{lng:-122.47811794281006,lat:47.28133978980151},{lng:-122.4760365486145,lat:47.280298963863906},{lng:-122.47510313987732,lat:47.2808302971457},{lng:-122.47021079063416,lat:47.27850112537918},{lng:-122.47026443481445,lat:47.27772956462353},{lng:-122.46988892555237,lat:47.27772956462353},{lng:-122.46951341629028,lat:47.27752575424353},{lng:-122.46819376945496,lat:47.27703078290946},{lng:-122.46787190437317,lat:47.277722285694885},{lng:-122.46153116226196,lat:47.2762810380999},{lng:-122.4586021900177,lat:47.27451945995041},{lng:-122.45599508285522,lat:47.27380607691001},{lng:-122.452712059021,lat:47.27225552754392},{lng:-122.44987964630127,lat:47.27055205474407},{lng:-122.44790554046631,lat:47.26865924288179},{lng:-122.44406461715698,lat:47.2672031876945},{lng:-122.44324922561646,lat:47.26615480315794},{lng:-122.44569540023804,lat:47.26468411763376},{lng:-122.46322631835938,lat:47.25596109343469},{lng:-122.46436357498169,lat:47.255480484388485},{lng:-122.46580123901367,lat:47.2554076644555},{lng:-122.4734616279602,lat:47.2554513564273},{lng:-122.47444868087769,lat:47.25524746025043}];
var zone_220=new google.maps.Polygon({paths: loc_220,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'North End',center: {lng: -122.4959921836853, lat: 47.25532756241355 }});
zone_220.setMap(map);
zone_220.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_220.label;var label=zone_220.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_220.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Central Tacoma
//################################################
var loc_221=[{lng:-122.50147461891174,lat:47.234351222504934},{lng:-122.49756932258606,lat:47.23432936782016},{lng:-122.49532699584961,lat:47.23266110028012},{lng:-122.49328851699829,lat:47.231568320149904},{lng:-122.49219417572021,lat:47.23132062018782},{lng:-122.48806357383728,lat:47.231174913786994},{lng:-122.48342871665955,lat:47.231240481716945},{lng:-122.48225927352905,lat:47.23134976141994},{lng:-122.48005986213684,lat:47.23226770202903},{lng:-122.47803211212158,lat:47.23317105662966},{lng:-122.47095108032227,lat:47.23425651880584},{lng:-122.46833324432373,lat:47.233906842143035},{lng:-122.46570467948914,lat:47.233775712799634},{lng:-122.45940685272217,lat:47.23383399254789},{lng:-122.45212197303772,lat:47.23384127751191},{lng:-122.4466073513031,lat:47.233753857877524},{lng:-122.44432210922241,lat:47.233782997771655},{lng:-122.44304537773132,lat:47.23411810540273},{lng:-122.44829177856445,lat:47.25620867821067},{lng:-122.44891405105591,lat:47.256631026039145},{lng:-122.44981527328491,lat:47.256995116290966},{lng:-122.45018005371094,lat:47.25778154269109},{lng:-122.45105981826782,lat:47.26200474393235},{lng:-122.46429920196533,lat:47.255495048363066},{lng:-122.4659514427185,lat:47.2554076644555},{lng:-122.4734616279602,lat:47.255436792440705},{lng:-122.47453451156616,lat:47.25520376811039},{lng:-122.5049614906311,lat:47.255378536454266},{lng:-122.50489711761475,lat:47.24339100408797},{lng:-122.50536918640137,lat:47.24283744374764},{lng:-122.50487565994263,lat:47.24175944122209},{lng:-122.50502586364746,lat:47.234416786505186}];
var zone_221=new google.maps.Polygon({paths: loc_221,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Central Tacoma',center: {lng: -122.50147461891174, lat: 47.234351222504934 }});
zone_221.setMap(map);
zone_221.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_221.label;var label=zone_221.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_221.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Side
//################################################
var loc_222=[{lng:-122.43417263031006,lat:47.233061780682135},{lng:-122.42979526519775,lat:47.233673723085985},{lng:-122.42653369903564,lat:47.23486844741369},{lng:-122.42245674133301,lat:47.23664591424816},{lng:-122.41934537887573,lat:47.23785514039236},{lng:-122.41696357727051,lat:47.238408752791265},{lng:-122.41054773330688,lat:47.239122612872634},{lng:-122.40771532058716,lat:47.22678167769217},{lng:-122.40801572799683,lat:47.19951070111655},{lng:-122.40752220153809,lat:47.19819854220495},{lng:-122.40786552429199,lat:47.179970757632624},{lng:-122.4209976196289,lat:47.17985407965152},{lng:-122.42108345031738,lat:47.18094792565851},{lng:-122.43406534194946,lat:47.18099167903004},{lng:-122.4340009689331,lat:47.23205643139263}];
var zone_222=new google.maps.Polygon({paths: loc_222,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'East Side',center: {lng: -122.43417263031006, lat: 47.233061780682135 }});
zone_222.setMap(map);
zone_222.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_222.label;var label=zone_222.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_222.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South End
//################################################
var loc_223=[{lng:-122.44303464889526,lat:47.2340962506218},{lng:-122.44271278381348,lat:47.23221670574562},{lng:-122.4430775642395,lat:47.23084707292048},{lng:-122.43417263031006,lat:47.23304721053878},{lng:-122.43402242660522,lat:47.23198357925375},{lng:-122.4340009689331,lat:47.223080294027625},{lng:-122.43406534194946,lat:47.18096980234879},{lng:-122.46496438980103,lat:47.18107918566494},{lng:-122.46271133422852,lat:47.19023741588168},{lng:-122.46125221252441,lat:47.20408842365993},{lng:-122.46322631835938,lat:47.2199616048274},{lng:-122.46309757232666,lat:47.232537252997496},{lng:-122.46391296386719,lat:47.233790282742696},{lng:-122.44432210922241,lat:47.23376114285255}];
var zone_223=new google.maps.Polygon({paths: loc_223,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'South End',center: {lng: -122.44303464889526, lat: 47.2340962506218 }});
zone_223.setMap(map);
zone_223.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_223.label;var label=zone_223.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_223.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Tacoma
//################################################
var loc_224=[{lng:-122.46391296386719,lat:47.233790282742696},{lng:-122.46309757232666,lat:47.23247897182318},{lng:-122.46322631835938,lat:47.21997617856806},{lng:-122.46125221252441,lat:47.20408842365993},{lng:-122.46273279190063,lat:47.19025199779085},{lng:-122.50881314277649,lat:47.19044520770881},{lng:-122.50848054885864,lat:47.202586857568775},{lng:-122.50629186630249,lat:47.204861057611474},{lng:-122.50524044036865,lat:47.20643544668346},{lng:-122.50503659248352,lat:47.234409501620256},{lng:-122.49756932258606,lat:47.23432936782016},{lng:-122.49533772468567,lat:47.23266110028012},{lng:-122.49328851699829,lat:47.231575605425384},{lng:-122.49216198921204,lat:47.23130604956578},{lng:-122.4880313873291,lat:47.231182199116546},{lng:-122.48346090316772,lat:47.23122591107286},{lng:-122.48222708702087,lat:47.23134976141994},{lng:-122.47802138328552,lat:47.23316377157349},{lng:-122.47095108032227,lat:47.23425651880584},{lng:-122.46839761734009,lat:47.23391412709707},{lng:-122.46579051017761,lat:47.233782997771655}];
var zone_224=new google.maps.Polygon({paths: loc_224,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'South Tacoma',center: {lng: -122.46391296386719, lat: 47.233790282742696 }});
zone_224.setMap(map);
zone_224.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_224.label;var label=zone_224.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_224.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Tacoma
//################################################
var loc_225=[{lng:-122.44324922561646,lat:47.26614752263716},{lng:-122.44566321372986,lat:47.26469867907684},{lng:-122.45105981826782,lat:47.26200474393235},{lng:-122.45018005371094,lat:47.25779610603277},{lng:-122.44980454444885,lat:47.25698783451048},{lng:-122.44891405105591,lat:47.25663830786871},{lng:-122.44830250740051,lat:47.256201396322005},{lng:-122.44304537773132,lat:47.234088965692834},{lng:-122.44272351264954,lat:47.23220942055828},{lng:-122.4430775642395,lat:47.23084707292048},{lng:-122.43414044380188,lat:47.23305449561096},{lng:-122.42976307868958,lat:47.233673723085985},{lng:-122.42639422416687,lat:47.234904871512754},{lng:-122.42243528366089,lat:47.23665319882562},{lng:-122.4193024635315,lat:47.237869709213804},{lng:-122.41697430610657,lat:47.23841603712639},{lng:-122.41052627563477,lat:47.239122612872634},{lng:-122.41159915924072,lat:47.24244412104348},{lng:-122.42945194244385,lat:47.24061586051212},{lng:-122.43021368980408,lat:47.243631364013616},{lng:-122.43179082870483,lat:47.243463840544216},{lng:-122.4322521686554,lat:47.244731178852454},{lng:-122.43241310119629,lat:47.247724598950654},{lng:-122.43445158004761,lat:47.25566981574558},{lng:-122.43515968322754,lat:47.25743930300802},{lng:-122.43608236312866,lat:47.25791989427552},{lng:-122.43910789489746,lat:47.262237738333226},{lng:-122.44025588035583,lat:47.2622086140892},{lng:-122.4414575099945,lat:47.2627546909987},{lng:-122.44239091873169,lat:47.26442201097324},{lng:-122.44209051132202,lat:47.26472780195101}];
var zone_225=new google.maps.Polygon({paths: loc_225,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Downtown Tacoma',center: {lng: -122.44324922561646, lat: 47.26614752263716 }});
zone_225.setMap(map);
zone_225.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_225.label;var label=zone_225.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_225.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Orting
//################################################
var loc_226=[{lng:-122.25251197814941,lat:47.05269803965602},{lng:-122.19594955444336,lat:47.051996291495065},{lng:-122.19440460205078,lat:47.05421846232779},{lng:-122.19114303588867,lat:47.056791386561166},{lng:-122.18865394592285,lat:47.059948896633344},{lng:-122.18770980834961,lat:47.08198778529541},{lng:-122.17698097229004,lat:47.08210467817519},{lng:-122.17517852783203,lat:47.08333203792844},{lng:-122.1743631362915,lat:47.084442481911566},{lng:-122.16367721557617,lat:47.089117781617055},{lng:-122.1589994430542,lat:47.09069560264967},{lng:-122.15277671813965,lat:47.09858400669407},{lng:-122.18358993530273,lat:47.096246823613455},{lng:-122.19346046447754,lat:47.09864243495673},{lng:-122.21122741699219,lat:47.107931713167105},{lng:-122.22109794616699,lat:47.1196140381433},{lng:-122.23011016845703,lat:47.124052649218086},{lng:-122.23259925842285,lat:47.130242725190705},{lng:-122.2382640838623,lat:47.12948360368509},{lng:-122.2408390045166,lat:47.12808212013255},{lng:-122.24143981933594,lat:47.12609662188623},{lng:-122.23852157592773,lat:47.121190955540605},{lng:-122.24255561828613,lat:47.12043170485017},{lng:-122.2422981262207,lat:47.111086193646585},{lng:-122.2397232055664,lat:47.10910006106945},{lng:-122.2388219833374,lat:47.10822380254699},{lng:-122.23916530609131,lat:47.1075227853425},{lng:-122.23985195159912,lat:47.10714306383515},{lng:-122.23907947540283,lat:47.10638361269401},{lng:-122.23787784576416,lat:47.10600388306016},{lng:-122.2379207611084,lat:47.10483546719634},{lng:-122.23830699920654,lat:47.103287276673974},{lng:-122.23586082458496,lat:47.097678360424375},{lng:-122.2355604171753,lat:47.09463995073755},{lng:-122.23264217376709,lat:47.092302594542396},{lng:-122.23156929016113,lat:47.090140448727226},{lng:-122.23225593566895,lat:47.08914700094987},{lng:-122.2313117980957,lat:47.08628343014868},{lng:-122.2327709197998,lat:47.08546523878666},{lng:-122.2465467453003,lat:47.0829229211525},{lng:-122.24706172943115,lat:47.081023409250946},{lng:-122.24444389343262,lat:47.07935762769432},{lng:-122.24388599395752,lat:47.074564562196784},{lng:-122.2523832321167,lat:47.067344924282246}];
var zone_226=new google.maps.Polygon({paths: loc_226,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Orting',center: {lng: -122.25251197814941, lat: 47.05269803965602 }});
zone_226.setMap(map);
zone_226.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_226.label;var label=zone_226.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_226.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Graham
//################################################
var loc_227=[{lng:-122.3214340209961,lat:47.05310738848569},{lng:-122.33748435974121,lat:47.053165866633435},{lng:-122.33902931213379,lat:47.0159608158365},{lng:-122.33662605285645,lat:47.01397113616876},{lng:-122.33593940734863,lat:47.0112205745573},{lng:-122.33448028564453,lat:47.0093477706977},{lng:-122.33156204223633,lat:47.00864545231998},{lng:-122.32898712158203,lat:47.00882103278017},{lng:-122.32641220092773,lat:47.00940629681234},{lng:-122.32409477233887,lat:47.00905513916261},{lng:-122.3214340209961,lat:47.00677255816479},{lng:-122.31997489929199,lat:47.004314284926956},{lng:-122.31551170349121,lat:47.001446156502446},{lng:-122.31602668762207,lat:46.99483131415812},{lng:-122.28323936462402,lat:46.994714229927254},{lng:-122.2393798828125,lat:46.99465568771563},{lng:-122.24753379821777,lat:47.01642896498461},{lng:-122.25337028503418,lat:47.03269459852135},{lng:-122.25311279296875,lat:47.03807637860649},{lng:-122.21946716308594,lat:47.03825186229739},{lng:-122.21826553344727,lat:47.039948174888444},{lng:-122.21843719482422,lat:47.04056234373547},{lng:-122.22019672393799,lat:47.04141047004433},{lng:-122.21963882446289,lat:47.044159476437585},{lng:-122.21946716308594,lat:47.0460310593111},{lng:-122.22011089324951,lat:47.04667440075839},{lng:-122.21826553344727,lat:47.0471715229261},{lng:-122.21787929534912,lat:47.04796106037588},{lng:-122.2179651260376,lat:47.04869210314993},{lng:-122.21882343292236,lat:47.049423135904604},{lng:-122.21938133239746,lat:47.050855931039564},{lng:-122.21993923187256,lat:47.05170389370275},{lng:-122.22126960754395,lat:47.05167465383536},{lng:-122.2223424911499,lat:47.051937812064864},{lng:-122.223801612854,lat:47.051937812064864},{lng:-122.22551822662354,lat:47.05269803965602},{lng:-122.25251197814941,lat:47.05269803965602},{lng:-122.25234031677246,lat:47.06743261805918},{lng:-122.2437572479248,lat:47.074739925849755},{lng:-122.29448318481445,lat:47.0746814713629},{lng:-122.29456901550293,lat:47.07111562641289},{lng:-122.30761528015137,lat:47.071291001415126},{lng:-122.32624053955078,lat:47.07164174968835},{lng:-122.33173370361328,lat:47.07152483385375},{lng:-122.33173370361328,lat:47.068601854632306},{lng:-122.32933044433594,lat:47.06602950031552},{lng:-122.32641220092773,lat:47.06526946278319},{lng:-122.32383728027344,lat:47.06269694765008},{lng:-122.32109069824219,lat:47.06269694765008}];
var zone_227=new google.maps.Polygon({paths: loc_227,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BBFF',fillOpacity: 0.2,label: 'Graham',center: {lng: -122.3214340209961, lat: 47.05310738848569 }});
zone_227.setMap(map);
zone_227.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_227.label;var label=zone_227.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_227.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Lacey
//################################################
var loc_228=[{lng:-122.86903381347656,lat:47.04041611369887},{lng:-122.8549575805664,lat:47.040533097760196},{lng:-122.84208297729492,lat:47.04509527608229},{lng:-122.82062530517578,lat:47.047083795821386},{lng:-122.80740737915039,lat:47.05655748948794},{lng:-122.73290634155273,lat:47.06743261805918},{lng:-122.73307800292969,lat:47.071700207509444},{lng:-122.73839950561523,lat:47.0719340381527},{lng:-122.73865699768066,lat:47.08438403806844},{lng:-122.7337646484375,lat:47.084559369405405},{lng:-122.7334213256836,lat:47.09390953794664},{lng:-122.7308464050293,lat:47.093675803737696},{lng:-122.72732734680176,lat:47.10226486202204},{lng:-122.76054382324219,lat:47.12008127780022},{lng:-122.78303146362305,lat:47.127030983234164},{lng:-122.78886795043945,lat:47.14740765679779},{lng:-122.80792236328125,lat:47.16871015093943},{lng:-122.81753540039062,lat:47.18370431764501},{lng:-122.82620429992676,lat:47.16765981718333},{lng:-122.83341407775879,lat:47.12235901236878},{lng:-122.82448768615723,lat:47.09653897710871},{lng:-122.82998085021973,lat:47.09028654242572},{lng:-122.8439712524414,lat:47.08140331704929},{lng:-122.86491394042969,lat:47.06012430837712},{lng:-122.86482810974121,lat:47.047317734446665}];
var zone_228=new google.maps.Polygon({paths: loc_228,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BBFF',fillOpacity: 0.2,label: 'North Lacey',center: {lng: -122.86903381347656, lat: 47.04041611369887 }});
zone_228.setMap(map);
zone_228.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_228.label;var label=zone_228.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_228.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Lacey
//################################################
var loc_229=[{lng:-122.86886215209961,lat:47.040357621572},{lng:-122.86980628967285,lat:47.03918776556841},{lng:-122.86534309387207,lat:47.03213884031304},{lng:-122.86474227905273,lat:47.00355336790271},{lng:-122.84482955932617,lat:46.99769979768072},{lng:-122.8352165222168,lat:46.99629484539914},{lng:-122.83487319946289,lat:46.991377221508436},{lng:-122.8245735168457,lat:46.99090885277506},{lng:-122.81787872314453,lat:46.98048658678813},{lng:-122.80963897705078,lat:46.974981873617736},{lng:-122.80105590820312,lat:46.97158506576048},{lng:-122.7802848815918,lat:46.95213711682888},{lng:-122.77101516723633,lat:46.946160724925114},{lng:-122.76535034179688,lat:46.94428564092958},{lng:-122.76552200317383,lat:46.95155122555818},{lng:-122.76912689208984,lat:46.95389475215748},{lng:-122.76723861694336,lat:46.95752701557932},{lng:-122.76277542114258,lat:46.96209628710839},{lng:-122.76449203491211,lat:46.96607943621572},{lng:-122.76363372802734,lat:46.97287353551795},{lng:-122.76118755340576,lat:46.97445479688532},{lng:-122.76187419891357,lat:46.97741221578906},{lng:-122.76479244232178,lat:46.978671265285506},{lng:-122.76942729949951,lat:46.97899334295279},{lng:-122.76882648468018,lat:46.98446836646482},{lng:-122.7650499343872,lat:46.98455619649706},{lng:-122.75788307189941,lat:46.986166388180855},{lng:-122.75032997131348,lat:46.98540521270224},{lng:-122.73170471191406,lat:46.98458547314239},{lng:-122.71780014038086,lat:46.98724958075185},{lng:-122.7042818069458,lat:46.995504543507266},{lng:-122.69861698150635,lat:47.004402082347724},{lng:-122.68797397613525,lat:47.0089966126632},{lng:-122.69140720367432,lat:47.011805812296096},{lng:-122.69084930419922,lat:47.02175387267526},{lng:-122.69578456878662,lat:47.024533146516184},{lng:-122.70389556884766,lat:47.038983038130624},{lng:-122.71659851074219,lat:47.042521787558435},{lng:-122.70505428314209,lat:47.054072269723754},{lng:-122.71389484405518,lat:47.054306177697846},{lng:-122.71110534667969,lat:47.05863329016001},{lng:-122.7079725265503,lat:47.067666467425674},{lng:-122.71273612976074,lat:47.06816339392306},{lng:-122.73290634155273,lat:47.06754954287069},{lng:-122.78011322021484,lat:47.060562835211705},{lng:-122.80745029449463,lat:47.05661596385244},{lng:-122.82049655914307,lat:47.0471715229261},{lng:-122.84204006195068,lat:47.04503678908543},{lng:-122.8549575805664,lat:47.04056234373547}];
var zone_229=new google.maps.Polygon({paths: loc_229,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BBFF',fillOpacity: 0.2,label: 'South Lacey',center: {lng: -122.86886215209961, lat: 47.040357621572 }});
zone_229.setMap(map);
zone_229.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_229.label;var label=zone_229.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_229.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lakewood
//################################################
var loc_230=[{lng:-122.59145736694336,lat:47.1765869920774},{lng:-122.59016990661621,lat:47.179037326604146},{lng:-122.58467674255371,lat:47.18702929847615},{lng:-122.58244514465332,lat:47.18667931030144},{lng:-122.58090019226074,lat:47.18434599683009},{lng:-122.57944107055664,lat:47.18390848913613},{lng:-122.57686614990234,lat:47.18513350159282},{lng:-122.57484912872314,lat:47.18758344170002},{lng:-122.57283210754395,lat:47.18723345717905},{lng:-122.57253170013428,lat:47.188429228098634},{lng:-122.57339000701904,lat:47.18904168569819},{lng:-122.57336854934692,lat:47.189377076150876},{lng:-122.57184505462646,lat:47.19038323479288},{lng:-122.57130861282349,lat:47.191097741666624},{lng:-122.57137298583984,lat:47.192001797802924},{lng:-122.57105112075806,lat:47.19274544533873},{lng:-122.56961345672607,lat:47.19357656848861},{lng:-122.56811141967773,lat:47.1937369591771},{lng:-122.56697416305542,lat:47.193664054378786},{lng:-122.56611585617065,lat:47.19274544533873},{lng:-122.56487131118774,lat:47.19350366346996},{lng:-122.56266117095947,lat:47.1941014816663},{lng:-122.56182432174683,lat:47.19407231995931},{lng:-122.56175994873047,lat:47.1937369591771},{lng:-122.55815505981445,lat:47.19430561316656},{lng:-122.55785465240479,lat:47.19471387381137},{lng:-122.5558590888977,lat:47.1945534860755},{lng:-122.55328416824341,lat:47.19383902572647},{lng:-122.55066633224487,lat:47.19380986387526},{lng:-122.54839181900024,lat:47.19448058239892},{lng:-122.54330635070801,lat:47.195034647828884},{lng:-122.54283428192139,lat:47.19545748334387},{lng:-122.53826379776001,lat:47.19620108245616},{lng:-122.53734111785889,lat:47.19672596967346},{lng:-122.53633260726929,lat:47.19694467114827},{lng:-122.53523826599121,lat:47.19668222927033},{lng:-122.53429412841797,lat:47.19679887026523},{lng:-122.53227710723877,lat:47.19655100784458},{lng:-122.53047466278076,lat:47.197032151485814},{lng:-122.52942323684692,lat:47.1971633717217},{lng:-122.52822160720825,lat:47.19678429015487},{lng:-122.52785682678223,lat:47.19650726729724},{lng:-122.52723455429077,lat:47.19583657438942},{lng:-122.52710580825806,lat:47.195574127030945},{lng:-122.52126932144165,lat:47.195661609628},{lng:-122.51875877380371,lat:47.19198721637452},{lng:-122.51850128173828,lat:47.186095991548804},{lng:-122.51489639282227,lat:47.188254238915},{lng:-122.5111198425293,lat:47.1904707259473},{lng:-122.48459815979004,lat:47.19041239852703},{lng:-122.46271133422852,lat:47.19023741588168},{lng:-122.46580123901367,lat:47.17757880776958},{lng:-122.47953414916992,lat:47.16299141586598},{lng:-122.48597145080566,lat:47.157797337296735},{lng:-122.5166130065918,lat:47.14046061392255},{lng:-122.52090454101562,lat:47.13923457094006},{lng:-122.52622604370117,lat:47.13724948902624},{lng:-122.54201889038086,lat:47.12732296778955},{lng:-122.56845474243164,lat:47.13952648850028},{lng:-122.56828308105469,lat:47.14553963366681},{lng:-122.5638198852539,lat:47.14653202912891},{lng:-122.56390571594238,lat:47.14869188462023},{lng:-122.56510734558105,lat:47.14854595120303},{lng:-122.57364749908447,lat:47.15388685324332},{lng:-122.57381916046143,lat:47.16538402279293},{lng:-122.57416248321533,lat:47.1667845231874},{lng:-122.57437705993652,lat:47.17693704679002}];
var zone_230=new google.maps.Polygon({paths: loc_230,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#76923c',fillOpacity: 0.2,label: 'Lakewood',center: {lng: -122.59145736694336, lat: 47.1765869920774 }});
zone_230.setMap(map);
zone_230.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_230.label;var label=zone_230.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_230.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Steilacoom
//################################################
var loc_231=[{lng:-122.6242446899414,lat:47.14571476362403},{lng:-122.62304306030273,lat:47.147232532417945},{lng:-122.62081146240234,lat:47.14910049605682},{lng:-122.6195240020752,lat:47.15266111990249},{lng:-122.61651992797852,lat:47.157505520065065},{lng:-122.61531829833984,lat:47.16322484567579},{lng:-122.61428833007812,lat:47.16655110901918},{lng:-122.61343002319336,lat:47.16876850220577},{lng:-122.60862350463867,lat:47.17116084893241},{lng:-122.60321617126465,lat:47.173319703476494},{lng:-122.59746551513672,lat:47.17518675014976},{lng:-122.59154319763184,lat:47.176645334689745},{lng:-122.574462890625,lat:47.1768787044982},{lng:-122.57420539855957,lat:47.166667816231495},{lng:-122.57386207580566,lat:47.16526731276001},{lng:-122.57360458374023,lat:47.15377011795269},{lng:-122.56510734558105,lat:47.14845839096039},{lng:-122.56386280059814,lat:47.148516764471516},{lng:-122.56386280059814,lat:47.14661959254488},{lng:-122.57969856262207,lat:47.14314613309231},{lng:-122.5796127319336,lat:47.147436844138326},{lng:-122.60527610778809,lat:47.14069414271377}];
var zone_231=new google.maps.Polygon({paths: loc_231,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#76923c',fillOpacity: 0.2,label: 'Steilacoom',center: {lng: -122.6242446899414, lat: 47.14571476362403 }});
zone_231.setMap(map);
zone_231.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_231.label;var label=zone_231.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_231.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fircrest
//################################################
var loc_232=[{lng:-122.50530481338501,lat:47.20643544668346},{lng:-122.51646280288696,lat:47.20636255933207},{lng:-122.51910209655762,lat:47.20736839593572},{lng:-122.52062559127808,lat:47.20868032805942},{lng:-122.52184867858887,lat:47.20924882190239},{lng:-122.52785682678223,lat:47.210400367681146},{lng:-122.53090381622314,lat:47.21126036657428},{lng:-122.53257751464844,lat:47.21287829279642},{lng:-122.5345516204834,lat:47.21349046822525},{lng:-122.53706216812134,lat:47.213577921281086},{lng:-122.53708362579346,lat:47.242691769012524},{lng:-122.50526189804077,lat:47.24283744374764},{lng:-122.50489711761475,lat:47.24178857671391},{lng:-122.50500440597534,lat:47.237418073886275},{lng:-122.50513315200806,lat:47.231051063031344},{lng:-122.50524044036865,lat:47.20771824767488}];
var zone_232=new google.maps.Polygon({paths: loc_232,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#953734',fillOpacity: 0.2,label: 'Fircrest',center: {lng: -122.50530481338501, lat: 47.20643544668346 }});
zone_232.setMap(map);
zone_232.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_232.label;var label=zone_232.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_232.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: University Place
//################################################
var loc_233=[{lng:-122.50528335571289,lat:47.20639171428466},{lng:-122.50627040863037,lat:47.204904791272234},{lng:-122.50850200653076,lat:47.202572279048894},{lng:-122.50880241394043,lat:47.19052905330345},{lng:-122.51116275787354,lat:47.19044156224518},{lng:-122.51854419708252,lat:47.18603765932099},{lng:-122.51880168914795,lat:47.1920747048848},{lng:-122.52133369445801,lat:47.19569077046163},{lng:-122.52708435058594,lat:47.195574127030945},{lng:-122.52723455429077,lat:47.19585115476017},{lng:-122.52783536911011,lat:47.19651455739096},{lng:-122.52823233604431,lat:47.19679887026523},{lng:-122.5294554233551,lat:47.1971633717217},{lng:-122.53048539161682,lat:47.197032151485814},{lng:-122.53227710723877,lat:47.19655100784458},{lng:-122.53427267074585,lat:47.19679887026523},{lng:-122.53524899482727,lat:47.196674939199625},{lng:-122.53634333610535,lat:47.19695196118191},{lng:-122.53739476203918,lat:47.196704099476385},{lng:-122.53828525543213,lat:47.19620108245616},{lng:-122.5428557395935,lat:47.19545748334387},{lng:-122.54334926605225,lat:47.19501277693474},{lng:-122.54837036132812,lat:47.1944878727711},{lng:-122.5506341457367,lat:47.19379528294363},{lng:-122.55331635475159,lat:47.19382444480286},{lng:-122.55584836006165,lat:47.19454619571233},{lng:-122.55784392356873,lat:47.19471387381137},{lng:-122.5581443309784,lat:47.194276451571724},{lng:-122.56177067756653,lat:47.19372966870178},{lng:-122.56183505058289,lat:47.19406502953006},{lng:-122.56270408630371,lat:47.19409419124108},{lng:-122.56487131118774,lat:47.193510953976336},{lng:-122.56612658500671,lat:47.19275273594924},{lng:-122.56698489189148,lat:47.193678635346465},{lng:-122.56814360618591,lat:47.19374424965142},{lng:-122.5696349143982,lat:47.19357656848861},{lng:-122.57108330726624,lat:47.192730864114644},{lng:-122.57140517234802,lat:47.192023669937996},{lng:-122.57130861282349,lat:47.19108315998984},{lng:-122.57187724113464,lat:47.19037594385685},{lng:-122.57337927818298,lat:47.189377076150876},{lng:-122.57339000701904,lat:47.189034394577874},{lng:-122.57254242897034,lat:47.18843651930211},{lng:-122.57285356521606,lat:47.18723345717905},{lng:-122.5748598575592,lat:47.1875980243383},{lng:-122.57686614990234,lat:47.185148084904164},{lng:-122.57943034172058,lat:47.18391578096057},{lng:-122.58088946342468,lat:47.18434599683009},{lng:-122.58244514465332,lat:47.18668660174526},{lng:-122.58468747138977,lat:47.187043881266675},{lng:-122.58362531661987,lat:47.188312568707005},{lng:-122.58362531661987,lat:47.1887500401036},{lng:-122.58401155471802,lat:47.189245836660895},{lng:-122.58362531661987,lat:47.19026657969598},{lng:-122.58373260498047,lat:47.19087901609422},{lng:-122.58351802825928,lat:47.19149144542541},{lng:-122.58278846740723,lat:47.19191430917246},{lng:-122.58285284042358,lat:47.19671138954308},{lng:-122.58321762084961,lat:47.197236271712526},{lng:-122.58313179016113,lat:47.199408645476105},{lng:-122.58358240127563,lat:47.19999181792025},{lng:-122.5835394859314,lat:47.20045835126041},{lng:-122.58285284042358,lat:47.20175587554152},{lng:-122.58276700973511,lat:47.203301200135584},{lng:-122.58212327957153,lat:47.20356360927502},{lng:-122.58117914199829,lat:47.20678530457597},{lng:-122.58053541183472,lat:47.20824302095702},{lng:-122.58059978485107,lat:47.209467471757954},{lng:-122.57757425308228,lat:47.21353419477121},{lng:-122.5758147239685,lat:47.21545812709875},{lng:-122.57330417633057,lat:47.217207095916486},{lng:-122.57240295410156,lat:47.218402191430926},{lng:-122.56974220275879,lat:47.21991788358141},{lng:-122.5678539276123,lat:47.221608412171605},{lng:-122.5658369064331,lat:47.223940087292966},{lng:-122.56450653076172,lat:47.228573987139136},{lng:-122.56433486938477,lat:47.23084707292048},{lng:-122.56476402282715,lat:47.23297435976187},{lng:-122.5631332397461,lat:47.23772402081907},{lng:-122.56390571594238,lat:47.239326571129354},{lng:-122.56442070007324,lat:47.241016480767314},{lng:-122.56377696990967,lat:47.24381345414033},{lng:-122.56274700164795,lat:47.24460007629554},{lng:-122.56137371063232,lat:47.24503708355682},{lng:-122.56092309951782,lat:47.24476031270993},{lng:-122.56077289581299,lat:47.244250467890836},{lng:-122.55939960479736,lat:47.242691769012524},{lng:-122.53360748291016,lat:47.242691769012524},{lng:-122.53706753253937,lat:47.24265535026614},{lng:-122.53704071044922,lat:47.2135633457818},{lng:-122.53459453582764,lat:47.21347589270194},{lng:-122.53259897232056,lat:47.212863717104845},{lng:-122.5308609008789,lat:47.21123121429776},{lng:-122.52781391143799,lat:47.210414944049745},{lng:-122.52180576324463,lat:47.209219668520184},{lng:-122.52051830291748,lat:47.20863659751143},{lng:-122.5190806388855,lat:47.20733924151995},{lng:-122.51641988754272,lat:47.20637713681038}];
var zone_233=new google.maps.Polygon({paths: loc_233,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#953734',fillOpacity: 0.2,label: 'University Place',center: {lng: -122.50528335571289, lat: 47.20639171428466 }});
zone_233.setMap(map);
zone_233.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_233.label;var label=zone_233.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_233.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Olympia
//################################################
var loc_234=[{lng:-122.89521217346191,lat:47.055446464379415},{lng:-122.86499977111816,lat:47.06006583785998},{lng:-122.85444259643555,lat:47.071349459620954},{lng:-122.84414291381836,lat:47.08134486987203},{lng:-122.82980918884277,lat:47.090637165667175},{lng:-122.82440185546875,lat:47.096597407615384},{lng:-122.83195495605469,lat:47.115642335392174},{lng:-122.84173965454102,lat:47.12948360368509},{lng:-122.8395938873291,lat:47.13345427321224},{lng:-122.84242630004883,lat:47.14005193606975},{lng:-122.84414291381836,lat:47.147641155073394},{lng:-122.83684730529785,lat:47.151610468823094},{lng:-122.84148216247559,lat:47.16526731276001},{lng:-122.85195350646973,lat:47.165617442089534},{lng:-122.86276817321777,lat:47.16205768636984},{lng:-122.87924766540527,lat:47.15441215887783},{lng:-122.88825988769531,lat:47.14559801038333},{lng:-122.8959846496582,lat:47.14670715581662},{lng:-122.9084300994873,lat:47.1411028156302},{lng:-122.90774345397949,lat:47.1320528942883},{lng:-122.89289474487305,lat:47.11196240504518},{lng:-122.89546966552734,lat:47.09846714997645},{lng:-122.90087699890137,lat:47.091046223198184},{lng:-122.90508270263672,lat:47.07824707772282},{lng:-122.90473937988281,lat:47.06982952543003},{lng:-122.89607048034668,lat:47.061059827930606}];
var zone_234=new google.maps.Polygon({paths: loc_234,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'North Olympia',center: {lng: -122.89521217346191, lat: 47.055446464379415 }});
zone_234.setMap(map);
zone_234.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_234.label;var label=zone_234.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_234.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Olympia
//################################################
var loc_235=[{lng:-122.86508560180664,lat:47.00355336790271},{lng:-122.86371231079102,lat:46.951316867254},{lng:-122.77084350585938,lat:46.94592634301753},{lng:-122.78079986572266,lat:46.9526058252274},{lng:-122.80139923095703,lat:46.97158506576048},{lng:-122.81015396118164,lat:46.974981873617736},{lng:-122.81770706176758,lat:46.98083793221806},{lng:-122.82440185546875,lat:46.9910259453432},{lng:-122.83452987670898,lat:46.991728495364846},{lng:-122.8352165222168,lat:46.99617776437492},{lng:-122.84517288208008,lat:46.99758271973483}];
var zone_235=new google.maps.Polygon({paths: loc_235,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'East Olympia',center: {lng: -122.86508560180664, lat: 47.00355336790271 }});
zone_235.setMap(map);
zone_235.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_235.label;var label=zone_235.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_235.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Tumwater
//################################################
var loc_236=[{lng:-122.86354064941406,lat:46.95155122555818},{lng:-122.97391891479492,lat:46.952723001685655},{lng:-123.00241470336914,lat:46.94733261906946},{lng:-122.99674987792969,lat:46.98880114268138},{lng:-122.99263000488281,lat:47.0067140291643},{lng:-122.95709609985352,lat:47.021695360091925},{lng:-122.90628433227539,lat:47.01678007415223},{lng:-122.86491394042969,lat:47.01748228556159}];
var zone_236=new google.maps.Polygon({paths: loc_236,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'Tumwater',center: {lng: -122.86354064941406, lat: 46.95155122555818 }});
zone_236.setMap(map);
zone_236.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_236.label;var label=zone_236.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_236.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Olympia
//################################################
var loc_237=[{lng:-122.95709609985352,lat:47.02204643463005},{lng:-122.93220520019531,lat:47.082280017014014},{lng:-122.93323516845703,lat:47.08859183088584},{lng:-122.92722702026367,lat:47.096422115902946},{lng:-122.9318618774414,lat:47.10144691616302},{lng:-122.92276382446289,lat:47.10880797649816},{lng:-122.92362213134766,lat:47.14875025787494},{lng:-122.93340682983398,lat:47.14384668100069},{lng:-122.94404983520508,lat:47.12574623214939},{lng:-122.94353485107422,lat:47.1186211402484},{lng:-122.93821334838867,lat:47.11091094963577},{lng:-122.9483413696289,lat:47.10121321503802},{lng:-122.98027038574219,lat:47.08485158701793},{lng:-123.00498962402344,lat:47.075382920973404},{lng:-123.00928115844727,lat:47.068601854632306},{lng:-123.0055046081543,lat:47.05854558190759},{lng:-123.01116943359375,lat:47.060767479833494},{lng:-123.01511764526367,lat:47.06930338426496},{lng:-123.01151275634766,lat:47.07783792189847},{lng:-122.9974365234375,lat:47.08379959611097},{lng:-122.98473358154297,lat:47.08625420924502},{lng:-122.98044204711914,lat:47.09992784051339},{lng:-122.95297622680664,lat:47.10460178094607},{lng:-122.95692443847656,lat:47.11207923214173},{lng:-122.96258926391602,lat:47.115817563823384},{lng:-122.96173095703125,lat:47.125395840104545},{lng:-122.93769836425781,lat:47.14804977458751},{lng:-122.9263687133789,lat:47.1514353582905},{lng:-122.91658401489258,lat:47.16637604771991},{lng:-122.91624069213867,lat:47.17512840593484},{lng:-122.93066024780273,lat:47.17757880776958},{lng:-122.94044494628906,lat:47.18889586310122},{lng:-122.94645309448242,lat:47.185862662252894},{lng:-122.94370651245117,lat:47.17221111345612},{lng:-122.97906875610352,lat:47.1444304638724},{lng:-122.98421859741211,lat:47.15248601283168},{lng:-123.00481796264648,lat:47.14524774912259},{lng:-123.02541732788086,lat:47.11219605898184},{lng:-123.06575775146484,lat:47.11067729005712},{lng:-123.0879020690918,lat:47.0938511044906},{lng:-123.08549880981445,lat:47.0323435940105},{lng:-123.01734924316406,lat:47.02895043138593},{lng:-122.99314498901367,lat:47.0067140291643}];
var zone_237=new google.maps.Polygon({paths: loc_237,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'West Olympia',center: {lng: -122.95709609985352, lat: 47.02204643463005 }});
zone_237.setMap(map);
zone_237.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_237.label;var label=zone_237.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_237.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Olympia
//################################################
var loc_238=[{lng:-122.95692443847656,lat:47.0214613091173},{lng:-122.93220520019531,lat:47.082630692960414},{lng:-122.91572570800781,lat:47.06883569886911},{lng:-122.91349411010742,lat:47.059598071414506},{lng:-122.9014778137207,lat:47.06006583785998},{lng:-122.89546966552734,lat:47.05538798873247},{lng:-122.86508560180664,lat:47.06006583785998},{lng:-122.86474227905273,lat:47.047434703374535},{lng:-122.86972045898438,lat:47.039363245604136},{lng:-122.8652572631836,lat:47.03222659199384},{lng:-122.8652572631836,lat:47.017833387803286},{lng:-122.90628433227539,lat:47.01678007415223}];
var zone_238=new google.maps.Polygon({paths: loc_238,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'Downtown Olympia',center: {lng: -122.95692443847656, lat: 47.0214613091173 }});
zone_238.setMap(map);
zone_238.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_238.label;var label=zone_238.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_238.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Midland
//################################################
var loc_239=[{lng:-122.4209976196289,lat:47.1809625101197},{lng:-122.42086887359619,lat:47.17988324917085},{lng:-122.40503311157227,lat:47.17999992708786},{lng:-122.39975452423096,lat:47.1808750032925},{lng:-122.35718250274658,lat:47.18090417225093},{lng:-122.35761165618896,lat:47.11079411997468},{lng:-122.35954284667969,lat:47.110823327414},{lng:-122.36928462982178,lat:47.115583925786886},{lng:-122.37486362457275,lat:47.11736538990553},{lng:-122.37718105316162,lat:47.11879635887033},{lng:-122.37876892089844,lat:47.12005207544186},{lng:-122.38237380981445,lat:47.12381904734101},{lng:-122.38473415374756,lat:47.12545423893895},{lng:-122.38928318023682,lat:47.12755655427984},{lng:-122.39683628082275,lat:47.12942520927432},{lng:-122.40318775177002,lat:47.13260761119462},{lng:-122.41005420684814,lat:47.134622060773715},{lng:-122.41434574127197,lat:47.13478262955797},{lng:-122.41441011428833,lat:47.13508916861796},{lng:-122.41574048995972,lat:47.13580441955287},{lng:-122.41567611694336,lat:47.14066495167096},{lng:-122.41553664207458,lat:47.170117857358505},{lng:-122.42028951644897,lat:47.170117857358505},{lng:-122.42101907730103,lat:47.17006680130108}];
var zone_239=new google.maps.Polygon({paths: loc_239,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#31859b',fillOpacity: 0.2,label: 'Midland',center: {lng: -122.4209976196289, lat: 47.1809625101197 }});
zone_239.setMap(map);
zone_239.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_239.label;var label=zone_239.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_239.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Parkland
//################################################
var loc_240=[{lng:-122.46502876281738,lat:47.18107918566494},{lng:-122.42108345031738,lat:47.18090417225093},{lng:-122.42104053497314,lat:47.162495374114506},{lng:-122.41541862487793,lat:47.162437015956904},{lng:-122.41576194763184,lat:47.135935791127764},{lng:-122.41421699523926,lat:47.13470964380706},{lng:-122.41563320159912,lat:47.134914003657194},{lng:-122.42082595825195,lat:47.13643208081505},{lng:-122.42391586303711,lat:47.13832961631811},{lng:-122.43464469909668,lat:47.13835880864309},{lng:-122.43464469909668,lat:47.13940972166852},{lng:-122.44327068328857,lat:47.13943891340048},{lng:-122.44670391082764,lat:47.13984759596534},{lng:-122.45331287384033,lat:47.13993517039198},{lng:-122.45841979980469,lat:47.14370073428107},{lng:-122.4596643447876,lat:47.143905059576355},{lng:-122.46798992156982,lat:47.14378830236091},{lng:-122.46738910675049,lat:47.14912968246778},{lng:-122.46837615966797,lat:47.149188055241666},{lng:-122.46824741363525,lat:47.15394522079247},{lng:-122.47305393218994,lat:47.15409113938487},{lng:-122.4730110168457,lat:47.15590049664334},{lng:-122.4891471862793,lat:47.15587131395057},{lng:-122.48575687408447,lat:47.15785570055076},{lng:-122.4794054031372,lat:47.16310813089911},{lng:-122.46584415435791,lat:47.177607978538916}];
var zone_240=new google.maps.Polygon({paths: loc_240,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#31859b',fillOpacity: 0.2,label: 'Parkland',center: {lng: -122.46502876281738, lat: 47.18107918566494 }});
zone_240.setMap(map);
zone_240.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_240.label;var label=zone_240.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_240.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Puyallup
//################################################
var loc_241=[{lng:-122.35679626464844,lat:47.18084583431804},{lng:-122.3573112487793,lat:47.19175391297538},{lng:-122.3503589630127,lat:47.191637260891184},{lng:-122.34718322753906,lat:47.19274544533873},{lng:-122.34151840209961,lat:47.19175391297538},{lng:-122.33628273010254,lat:47.19146228228417},{lng:-122.33817100524902,lat:47.192920419715115},{lng:-122.34658241271973,lat:47.19601153857395},{lng:-122.35138893127441,lat:47.20126019585407},{lng:-122.35894203186035,lat:47.20528381482166},{lng:-122.36143112182617,lat:47.210414944049745},{lng:-122.34177589416504,lat:47.20971527383798},{lng:-122.34203338623047,lat:47.21367994966394},{lng:-122.34113216400146,lat:47.214408718118555},{lng:-122.33654022216797,lat:47.21198916827907},{lng:-122.33636856079102,lat:47.227903699643626},{lng:-122.33456611633301,lat:47.227845413373856},{lng:-122.32061862945557,lat:47.22058827205813},{lng:-122.32040405273438,lat:47.22825341591623},{lng:-122.32186317443848,lat:47.230351665096784},{lng:-122.32409477233887,lat:47.23210014262787},{lng:-122.32375144958496,lat:47.2355386468288},{lng:-122.32752799987793,lat:47.238860379674655},{lng:-122.32572555541992,lat:47.23967621202852},{lng:-122.32297897338867,lat:47.2389186538308},{lng:-122.30727195739746,lat:47.23921002365024},{lng:-122.30727195739746,lat:47.23548036895529},{lng:-122.266845703125,lat:47.23583003523503},{lng:-122.25405693054199,lat:47.23204186097286},{lng:-122.25603103637695,lat:47.2257470649757},{lng:-122.25500106811523,lat:47.22079230165118},{lng:-122.2529411315918,lat:47.21787751866836},{lng:-122.25268363952637,lat:47.21228068615676},{lng:-122.25079536437988,lat:47.209307128618676},{lng:-122.24796295166016,lat:47.20650833393468},{lng:-122.25122451782227,lat:47.20382601711648},{lng:-122.2573184967041,lat:47.20190166280355},{lng:-122.26375579833984,lat:47.200152189218635},{lng:-122.27568626403809,lat:47.20143514215493},{lng:-122.27731704711914,lat:47.200502088550735},{lng:-122.27723121643066,lat:47.19641978609435},{lng:-122.28238105773926,lat:47.19653642766614},{lng:-122.28272438049316,lat:47.190179088205035},{lng:-122.25637435913086,lat:47.18539600058429},{lng:-122.2562026977539,lat:47.178162220111105},{lng:-122.25264072418213,lat:47.16973128884548},{lng:-122.2774887084961,lat:47.169672938636836},{lng:-122.29680061340332,lat:47.16978963899},{lng:-122.29637145996094,lat:47.16339991736006},{lng:-122.29710102081299,lat:47.1612698393425},{lng:-122.29950428009033,lat:47.15954820703117},{lng:-122.30268001556396,lat:47.158993771190936},{lng:-122.3468828201294,lat:47.15765142888123},{lng:-122.35713958740234,lat:47.15800160840535}];
var zone_241=new google.maps.Polygon({paths: loc_241,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFCC00',fillOpacity: 0.2,label: 'Puyallup',center: {lng: -122.35679626464844, lat: 47.18084583431804 }});
zone_241.setMap(map);
zone_241.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_241.label;var label=zone_241.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_241.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Hill
//################################################
var loc_242=[{lng:-122.23483085632324,lat:47.150559796973},{lng:-122.23783493041992,lat:47.133629442981295},{lng:-122.23568916320801,lat:47.12977557477715},{lng:-122.23852157592773,lat:47.12942520927432},{lng:-122.24101066589355,lat:47.1279653281696},{lng:-122.24152565002441,lat:47.125921427306295},{lng:-122.23860740661621,lat:47.1210741484473},{lng:-122.24272727966309,lat:47.12043170485017},{lng:-122.2422981262207,lat:47.11131985143006},{lng:-122.23886489868164,lat:47.108106966987386},{lng:-122.23916530609131,lat:47.107435157542774},{lng:-122.23987340927124,lat:47.10715766855863},{lng:-122.23914384841919,lat:47.106442032397226},{lng:-122.2378134727478,lat:47.10597467297614},{lng:-122.2383713722229,lat:47.10331648823265},{lng:-122.23588228225708,lat:47.097678360424375},{lng:-122.2355604171753,lat:47.09463995073755},{lng:-122.23270654678345,lat:47.09224415932313},{lng:-122.23159074783325,lat:47.09009662053952},{lng:-122.23229885101318,lat:47.089044733214955},{lng:-122.23135471343994,lat:47.08625420924502},{lng:-122.23272800445557,lat:47.085450628112426},{lng:-122.24661111831665,lat:47.0828644756423},{lng:-122.24706172943115,lat:47.08099418546195},{lng:-122.24446535110474,lat:47.07932840299161},{lng:-122.2438645362854,lat:47.074491493837755},{lng:-122.29456901550293,lat:47.074652244095404},{lng:-122.29463338851929,lat:47.071042553324986},{lng:-122.32604742050171,lat:47.071583291803115},{lng:-122.32572555541992,lat:47.09634907751911},{lng:-122.32016801834106,lat:47.09645133122842},{lng:-122.32016801834106,lat:47.10191431533552},{lng:-122.31491088867188,lat:47.101870496837414},{lng:-122.31488943099976,lat:47.11110079728811},{lng:-122.33606815338135,lat:47.110969364370156},{lng:-122.33615398406982,lat:47.126709798372005},{lng:-122.33726978302002,lat:47.129571195181},{lng:-122.33821392059326,lat:47.12913323625893},{lng:-122.33855724334717,lat:47.12583382979995},{lng:-122.35774040222168,lat:47.12527904224337},{lng:-122.35705375671387,lat:47.158030789928176},{lng:-122.3466682434082,lat:47.15768061059638},{lng:-122.30255126953125,lat:47.15902295216886},{lng:-122.29941844940186,lat:47.15954820703117},{lng:-122.29705810546875,lat:47.1613281987822},{lng:-122.29641437530518,lat:47.163487452985834},{lng:-122.29671478271484,lat:47.16981881403825},{lng:-122.27238178253174,lat:47.169672938636836},{lng:-122.2527265548706,lat:47.16978963899},{lng:-122.25800514221191,lat:47.154587259602074},{lng:-122.25852012634277,lat:47.14518937202145},{lng:-122.25482940673828,lat:47.145422880041444},{lng:-122.25122451782227,lat:47.14583151660831},{lng:-122.2474479675293,lat:47.14396343808791},{lng:-122.24324226379395,lat:47.14629852598111},{lng:-122.24032402038574,lat:47.15079328140136}];
var zone_242=new google.maps.Polygon({paths: loc_242,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'South Hill',center: {lng: -122.23483085632324, lat: 47.150559796973 }});
zone_242.setMap(map);
zone_242.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_242.label;var label=zone_242.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_242.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Elk Plain
//################################################
var loc_243=[{lng:-122.33894348144531,lat:47.021110230731466},{lng:-122.35319137573242,lat:47.0200569817223},{lng:-122.40606307983398,lat:47.020174010416035},{lng:-122.41584777832031,lat:47.02122725711659},{lng:-122.4264907836914,lat:47.02590810218079},{lng:-122.44314193725586,lat:47.031758581362226},{lng:-122.44468688964844,lat:47.06719876766676},{lng:-122.44159698486328,lat:47.06930338426496},{lng:-122.43576049804688,lat:47.08204623176735},{lng:-122.43352890014648,lat:47.07935762769432},{lng:-122.43189811706543,lat:47.07906537994598},{lng:-122.43249893188477,lat:47.0677833917242},{lng:-122.41378784179688,lat:47.06784185377727},{lng:-122.40048408508301,lat:47.055446464379415},{lng:-122.40022659301758,lat:47.06801723955179},{lng:-122.36846923828125,lat:47.0677833917242},{lng:-122.36855506896973,lat:47.05275651825264},{lng:-122.33739852905273,lat:47.05304891027382}];
var zone_243=new google.maps.Polygon({paths: loc_243,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFFF00',fillOpacity: 0.2,label: 'Elk Plain',center: {lng: -122.33894348144531, lat: 47.021110230731466 }});
zone_243.setMap(map);
zone_243.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_243.label;var label=zone_243.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_243.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Frederikson
//################################################
var loc_244=[{lng:-122.35748291015625,lat:47.125395840104545},{lng:-122.3386001586914,lat:47.125921427306295},{lng:-122.33817100524902,lat:47.12919163099025},{lng:-122.33726978302002,lat:47.12962958943144},{lng:-122.33619689941406,lat:47.126826593091735},{lng:-122.33593940734863,lat:47.11745300135624},{lng:-122.33611106872559,lat:47.1109985717133},{lng:-122.31491088867188,lat:47.111086193646585},{lng:-122.31495380401611,lat:47.10188510300745},{lng:-122.32018947601318,lat:47.101943527647556},{lng:-122.32018947601318,lat:47.09645133122842},{lng:-122.32572555541992,lat:47.09636368520391},{lng:-122.32606887817383,lat:47.071700207509444},{lng:-122.33181953430176,lat:47.07152483385375},{lng:-122.3316478729248,lat:47.068601854632306},{lng:-122.32933044433594,lat:47.06602950031552},{lng:-122.32641220092773,lat:47.0650940679676},{lng:-122.32392311096191,lat:47.06263847995432},{lng:-122.32109069824219,lat:47.06269694765008},{lng:-122.32126235961914,lat:47.053224344717066},{lng:-122.3686408996582,lat:47.05304891027382},{lng:-122.3682975769043,lat:47.0677833917242},{lng:-122.39971160888672,lat:47.067900315766245},{lng:-122.39971160888672,lat:47.11885476494942},{lng:-122.3770523071289,lat:47.118387514521594},{lng:-122.37447738647461,lat:47.117219370500415},{lng:-122.36855506896973,lat:47.11505823645416},{lng:-122.35774040222168,lat:47.11032679876571}];
var zone_244=new google.maps.Polygon({paths: loc_244,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFFF00',fillOpacity: 0.2,label: 'Frederikson',center: {lng: -122.35748291015625, lat: 47.125395840104545 }});
zone_244.setMap(map);
zone_244.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_244.label;var label=zone_244.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_244.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Spanaway
//################################################
var loc_245=[{lng:-122.4680757522583,lat:47.14375911301701},{lng:-122.46743202209473,lat:47.138738307409476},{lng:-122.46490001678467,lat:47.138796691594656},{lng:-122.46477127075195,lat:47.13599417839021},{lng:-122.46623039245605,lat:47.135964984767},{lng:-122.46635913848877,lat:47.13219887298251},{lng:-122.46962070465088,lat:47.13219887298251},{lng:-122.4697494506836,lat:47.127381364508274},{lng:-122.4724531173706,lat:47.12793613013881},{lng:-122.47274279594421,lat:47.12760035163258},{lng:-122.47230291366577,lat:47.11428429548579},{lng:-122.47622966766357,lat:47.11440111748531},{lng:-122.47610092163086,lat:47.097298568694725},{lng:-122.43515968322754,lat:47.096831129001046},{lng:-122.43507385253906,lat:47.08415026205488},{lng:-122.435781955719,lat:47.08239690925263},{lng:-122.43342161178589,lat:47.079401464718295},{lng:-122.43202686309814,lat:47.07921150402052},{lng:-122.43241310119629,lat:47.068046470458114},{lng:-122.41357326507568,lat:47.067929546736664},{lng:-122.40039825439453,lat:47.05550493996223},{lng:-122.39988327026367,lat:47.11873795272716},{lng:-122.37898349761963,lat:47.118387514521594},{lng:-122.37662315368652,lat:47.118387514521594},{lng:-122.37803936004639,lat:47.119292808498976},{lng:-122.38451957702637,lat:47.12548343833213},{lng:-122.39048480987549,lat:47.12790693209197},{lng:-122.3963212966919,lat:47.129308420260514},{lng:-122.4021577835083,lat:47.1320528942883},{lng:-122.40971088409424,lat:47.134622060773715},{lng:-122.41473197937012,lat:47.13479722669612},{lng:-122.42108345031738,lat:47.136461274181826},{lng:-122.42391586303711,lat:47.13835880864309},{lng:-122.4347734451294,lat:47.13844638552188},{lng:-122.43468761444092,lat:47.13943891340048},{lng:-122.443528175354,lat:47.13946810511645},{lng:-122.44683265686035,lat:47.13990597893245},{lng:-122.45331287384033,lat:47.13993517039198},{lng:-122.45846271514893,lat:47.14370073428107},{lng:-122.45975017547607,lat:47.14393424884014}];
var zone_245=new google.maps.Polygon({paths: loc_245,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFFF00',fillOpacity: 0.2,label: 'Spanaway',center: {lng: -122.4680757522583, lat: 47.14375911301701 }});
zone_245.setMap(map);
zone_245.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_245.label;var label=zone_245.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_245.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Prairie Ridge
//################################################
var loc_246=[{lng:-122.09999084472656,lat:47.09957727843912},{lng:-122.05570220947266,lat:47.11172875008272},{lng:-122.05535888671875,lat:47.11967244332479},{lng:-122.07329750061035,lat:47.14069414271377},{lng:-122.07535743713379,lat:47.13853396225645},{lng:-122.07887649536133,lat:47.14075252475131},{lng:-122.0797348022461,lat:47.1559880446255},{lng:-122.14479446411133,lat:47.154645626381935},{lng:-122.14479446411133,lat:47.14629852598111},{lng:-122.16693878173828,lat:47.14758278060064},{lng:-122.16693878173828,lat:47.15155209870968},{lng:-122.17620849609375,lat:47.1514353582905},{lng:-122.17878341674805,lat:47.14980096549695},{lng:-122.18144416809082,lat:47.151318617614905},{lng:-122.18539237976074,lat:47.14886700419196},{lng:-122.18753814697266,lat:47.15026793999513},{lng:-122.19594955444336,lat:47.15091002323091},{lng:-122.20436096191406,lat:47.15569621745735},{lng:-122.20736503601074,lat:47.15470399309771},{lng:-122.20968246459961,lat:47.156163140157126},{lng:-122.21165657043457,lat:47.1559880446255},{lng:-122.21320152282715,lat:47.15441215887783},{lng:-122.21500396728516,lat:47.15412032305527},{lng:-122.2148323059082,lat:47.151610468823094},{lng:-122.21903800964355,lat:47.14991770950615},{lng:-122.22993850708008,lat:47.155404388686534},{lng:-122.23225593566895,lat:47.15184394863576},{lng:-122.23474502563477,lat:47.150501425705635},{lng:-122.23783493041992,lat:47.133512663199355},{lng:-122.23568916320801,lat:47.12983396880321},{lng:-122.23259925842285,lat:47.13006754426644},{lng:-122.22993850708008,lat:47.12387744790645},{lng:-122.22101211547852,lat:47.11967244332479},{lng:-122.21096992492676,lat:47.10775645876983},{lng:-122.19320297241211,lat:47.098408721521494},{lng:-122.18341827392578,lat:47.09630525444073},{lng:-122.1526050567627,lat:47.09858400669407},{lng:-122.15526580810547,lat:47.0953119216571},{lng:-122.14367866516113,lat:47.09764914577211},{lng:-122.1401596069336,lat:47.096422115902946},{lng:-122.12582588195801,lat:47.0959546685153},{lng:-122.11878776550293,lat:47.09519505775847},{lng:-122.11183547973633,lat:47.09653897710871},{lng:-122.10419654846191,lat:47.09706484936081}];
var zone_246=new google.maps.Polygon({paths: loc_246,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Prairie Ridge',center: {lng: -122.09999084472656, lat: 47.09957727843912 }});
zone_246.setMap(map);
zone_246.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_246.label;var label=zone_246.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_246.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bonney Lake
//################################################
var loc_247=[{lng:-122.20436096191406,lat:47.15578376577608},{lng:-122.20736503601074,lat:47.154645626381935},{lng:-122.20976829528809,lat:47.156163140157126},{lng:-122.21148490905762,lat:47.15607559246344},{lng:-122.2122573852539,lat:47.16112394046272},{lng:-122.21371650695801,lat:47.16252455316927},{lng:-122.21461772918701,lat:47.164304445204316},{lng:-122.2122573852539,lat:47.16970211374916},{lng:-122.21088409423828,lat:47.17069405803284},{lng:-122.21109867095947,lat:47.17717041531639},{lng:-122.21320152282715,lat:47.17921234617199},{lng:-122.21298694610596,lat:47.183966823703635},{lng:-122.2122573852539,lat:47.18580432976868},{lng:-122.20800876617432,lat:47.1855418327964},{lng:-122.2080945968628,lat:47.19811106379041},{lng:-122.20444679260254,lat:47.19758619027435},{lng:-122.20170021057129,lat:47.194990906031585},{lng:-122.19998359680176,lat:47.19029574349424},{lng:-122.19916820526123,lat:47.18443349793618},{lng:-122.18028545379639,lat:47.18434599683009},{lng:-122.18050003051758,lat:47.192045542064086},{lng:-122.1650505065918,lat:47.19146228228417},{lng:-122.16144561767578,lat:47.18854588723388},{lng:-122.16127395629883,lat:47.18434599683009},{lng:-122.156982421875,lat:47.18434599683009},{lng:-122.15578079223633,lat:47.181429210762225},{lng:-122.14393615722656,lat:47.18107918566494},{lng:-122.14479446411133,lat:47.14653202912891},{lng:-122.16693878173828,lat:47.147466031462834},{lng:-122.16676712036133,lat:47.1514353582905},{lng:-122.17655181884766,lat:47.1514353582905},{lng:-122.17886924743652,lat:47.149859337533584},{lng:-122.1815299987793,lat:47.15155209870968},{lng:-122.18522071838379,lat:47.148925377254365},{lng:-122.1873664855957,lat:47.15038468297858},{lng:-122.19603538513184,lat:47.151085135494384}];
var zone_247=new google.maps.Polygon({paths: loc_247,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Bonney Lake',center: {lng: -122.20436096191406, lat: 47.15578376577608 }});
zone_247.setMap(map);
zone_247.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_247.label;var label=zone_247.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_247.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Sumner
//################################################
var loc_248=[{lng:-122.22993850708008,lat:47.15552112038719},{lng:-122.23217010498047,lat:47.15178557877874},{lng:-122.23508834838867,lat:47.15073491039044},{lng:-122.24040985107422,lat:47.15096839404951},{lng:-122.24332809448242,lat:47.14594826933617},{lng:-122.24761962890625,lat:47.14396343808791},{lng:-122.25156784057617,lat:47.14594826933617},{lng:-122.25860595703125,lat:47.14536450313262},{lng:-122.2584342956543,lat:47.154587259602074},{lng:-122.25259780883789,lat:47.16987716408659},{lng:-122.25637435913086,lat:47.17839558325284},{lng:-122.2562026977539,lat:47.18539600058429},{lng:-122.28263854980469,lat:47.19029574349424},{lng:-122.28229522705078,lat:47.196361465212306},{lng:-122.27714538574219,lat:47.196361465212306},{lng:-122.27714538574219,lat:47.200327139173126},{lng:-122.27572917938232,lat:47.20140598447816},{lng:-122.26375579833984,lat:47.200093872438956},{lng:-122.25105285644531,lat:47.203709391569404},{lng:-122.2477912902832,lat:47.20656664366358},{lng:-122.25088119506836,lat:47.209307128618676},{lng:-122.25285530090332,lat:47.21239729285914},{lng:-122.25285530090332,lat:47.21787751866836},{lng:-122.25508689880371,lat:47.22085059567639},{lng:-122.25611686706543,lat:47.225805353552836},{lng:-122.25405693054199,lat:47.23186701562326},{lng:-122.24684715270996,lat:47.22522246489705},{lng:-122.22736358642578,lat:47.224872728627005},{lng:-122.22744941711426,lat:47.22300742955065},{lng:-122.22633361816406,lat:47.22090888963752},{lng:-122.21912384033203,lat:47.22096718353454},{lng:-122.21860885620117,lat:47.215778775700485},{lng:-122.21414566040039,lat:47.21583707523795},{lng:-122.21217155456543,lat:47.2122223827094},{lng:-122.2122573852539,lat:47.20872405857137},{lng:-122.20796585083008,lat:47.204584076922835},{lng:-122.20813751220703,lat:47.19799442567996},{lng:-122.20813751220703,lat:47.1856293319314},{lng:-122.2122573852539,lat:47.18580432976868},{lng:-122.2130298614502,lat:47.183995990963375},{lng:-122.21328735351562,lat:47.17921234617199},{lng:-122.21114158630371,lat:47.17711207328097},{lng:-122.21096992492676,lat:47.17069405803284},{lng:-122.21234321594238,lat:47.1695854132037},{lng:-122.21457481384277,lat:47.16427526712715},{lng:-122.21371650695801,lat:47.16246619504373},{lng:-122.21234321594238,lat:47.16112394046272},{lng:-122.21148490905762,lat:47.156104775044035},{lng:-122.21320152282715,lat:47.154528892758094},{lng:-122.21491813659668,lat:47.15406195569846},{lng:-122.21491813659668,lat:47.15178557877874},{lng:-122.21903800964355,lat:47.149976081414586}];
var zone_248=new google.maps.Polygon({paths: loc_248,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Sumner',center: {lng: -122.22993850708008, lat: 47.15552112038719 }});
zone_248.setMap(map);
zone_248.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_248.label;var label=zone_248.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_248.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Lake Tapps
//################################################
var loc_249=[{lng:-122.2287368774414,lat:47.25150436951492},{lng:-122.22496032714844,lat:47.23961793870555},{lng:-122.2280502319336,lat:47.225164175678934},{lng:-122.22633361816406,lat:47.22096718353454},{lng:-122.21929550170898,lat:47.22061741919094},{lng:-122.21860885620117,lat:47.21525407697904},{lng:-122.21414566040039,lat:47.21572047609892},{lng:-122.2122573852539,lat:47.212105775622426},{lng:-122.21208572387695,lat:47.208607443792744},{lng:-122.20779418945312,lat:47.20487563550238},{lng:-122.20830917358398,lat:47.19799442567996},{lng:-122.20453262329102,lat:47.197527870674314},{lng:-122.20075607299805,lat:47.19426187076831},{lng:-122.19921112060547,lat:47.187962588993614},{lng:-122.19938278198242,lat:47.18446266493951},{lng:-122.18067169189453,lat:47.18434599683009},{lng:-122.18067169189453,lat:47.19251214527277},{lng:-122.1653938293457,lat:47.19181223892131},{lng:-122.16144561767578,lat:47.18854588723388},{lng:-122.16178894042969,lat:47.183995990963375},{lng:-122.1573257446289,lat:47.184112659842015},{lng:-122.15560913085938,lat:47.1813125359862},{lng:-122.14393615722656,lat:47.1809625101197},{lng:-122.14427947998047,lat:47.15470399309771},{lng:-122.0797348022461,lat:47.15587131395057},{lng:-122.07870483398438,lat:47.189245836660895},{lng:-122.080078125,lat:47.195778252866376},{lng:-122.08110809326172,lat:47.22912769650293},{lng:-122.10222244262695,lat:47.22831170173733},{lng:-122.12247848510742,lat:47.22842827318726},{lng:-122.12350845336914,lat:47.243114224640834},{lng:-122.14410781860352,lat:47.243463840544216},{lng:-122.15217590332031,lat:47.246959872677586},{lng:-122.16676712036133,lat:47.24637721667813},{lng:-122.17208862304688,lat:47.24835822092734},{lng:-122.18067169189453,lat:47.2496400077265},{lng:-122.19165802001953,lat:47.250688719307824},{lng:-122.19886779785156,lat:47.250222627835285},{lng:-122.20333099365234,lat:47.246610279847},{lng:-122.21208572387695,lat:47.244163065429134},{lng:-122.21860885620117,lat:47.24392999149296},{lng:-122.22341537475586,lat:47.24614415248376}];
var zone_249=new google.maps.Polygon({paths: loc_249,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Lake Tapps',center: {lng: -122.2287368774414, lat: 47.25150436951492 }});
zone_249.setMap(map);
zone_249.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_249.label;var label=zone_249.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_249.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Northwest Everett
//################################################
var loc_250=[{lng:-122.21383452415466,lat:47.99255680507467},{lng:-122.20122814178467,lat:47.992389869147},{lng:-122.20099478960037,lat:48.0016207946144},{lng:-122.20021963119507,lat:48.0036056855108},{lng:-122.19007015228271,lat:48.01165932339874},{lng:-122.18762397766113,lat:48.01631004939964},{lng:-122.19247341156006,lat:48.01831949257984},{lng:-122.20448970794678,lat:48.019812171101385},{lng:-122.20338463783264,lat:48.018463021238745},{lng:-122.20675349235535,lat:48.01666170760967},{lng:-122.21324980258942,lat:48.009890071354235},{lng:-122.21411347389221,lat:48.00796284539459},{lng:-122.21425294876099,lat:48.004998293928836},{lng:-122.21397399902344,lat:48.00284475987267},{lng:-122.21373796463013,lat:47.997417455283504}];
var zone_250=new google.maps.Polygon({paths: loc_250,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Northwest Everett',center: {lng: -122.21383452415466, lat: 47.99255680507467 }});
zone_250.setMap(map);
zone_250.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_250.label;var label=zone_250.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_250.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Valley View
//################################################
var loc_251=[{lat:47.920933051462924,lng:-122.205700725317},{lat:47.919476159546,lng:-122.18024656176567},{lat:47.89800943720365,lng:-122.15973403304815},{lat:47.92573574077345,lng:-122.15922474861145},{lat:47.92685007350887,lng:-122.1665096282959},{lat:47.93109465253554,lng:-122.17032641172409},{lat:47.93802801854402,lng:-122.1693380177021},{lat:47.941945118784865,lng:-122.17139661312103},{lat:47.94791273555895,lng:-122.1798200905323},{lat:47.94582733708046,lng:-122.17976175248623},{lat:47.94568719959753,lng:-122.1998779848218},{lat:47.93620727447478,lng:-122.19953801482916},{lat:47.92107685103142,lng:-122.20761448144913}];
var zone_251=new google.maps.Polygon({paths: loc_251,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Valley View',center: {lat: 47.920933051462924, lng: -122.205700725317 }});
zone_251.setMap(map);
zone_251.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_251.label;var label=zone_251.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_251.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Three Lakes
//################################################
var loc_252=[{lat:47.905679040240315,lng:-122.0402878895402},{lat:47.91202748440402,lng:-121.93965911865234},{lat:47.93238902930423,lng:-121.94704055786133},{lat:47.94825857210037,lng:-121.97433471679688},{lat:47.95055810167944,lng:-121.96892738342285},{lat:47.96269338653887,lng:-121.96948360651731},{lat:47.96343222952534,lng:-121.99232462793589},{lat:47.96285974499733,lng:-122.04291544854641},{lat:47.9350374361639,lng:-122.0449760556221},{lat:47.934932985027665,lng:-122.07062769681215},{lat:47.92767210317745,lng:-122.08025179803371},{lat:47.92036840960363,lng:-122.07527328282595},{lat:47.905802204946994,lng:-122.07867532968521}];
var zone_252=new google.maps.Polygon({paths: loc_252,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Three Lakes',center: {lat: 47.905679040240315, lng: -122.0402878895402 }});
zone_252.setMap(map);
zone_252.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_252.label;var label=zone_252.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_252.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Far SouthEast Redmond
//################################################
var loc_253=[{lat:47.65607791013515,lng:-122.07064613699913},{lat:47.656492089994,lng:-122.06271886825562},{lat:47.65240886483876,lng:-122.04935073852539},{lat:47.646366551259895,lng:-122.0390510559082},{lat:47.64272347900329,lng:-122.01828002929688},{lat:47.63670896254457,lng:-122.003173828125},{lat:47.63147461317285,lng:-121.99853897094727},{lat:47.63410631292459,lng:-121.9863510131836},{lat:47.630549148796625,lng:-121.9782829284668},{lat:47.63384604083273,lng:-121.97184562683105},{lat:47.644516133610985,lng:-121.96343421936035},{lat:47.65717861861977,lng:-121.98587894439697},{lat:47.66194793671875,lng:-122.0069932937622},{lat:47.6712791389278,lng:-122.06279497593641},{lat:47.661312730248646,lng:-122.06279497593641}];
var zone_253=new google.maps.Polygon({paths: loc_253,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Far SouthEast Redmond',center: {lat: 47.65607791013515, lng: -122.07064613699913 }});
zone_253.setMap(map);
zone_253.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_253.label;var label=zone_253.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_253.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Union Hill
//################################################
var loc_254=[{lat:47.678565786076575,lng:-122.04454556107521},{lat:47.678429666016456,lng:-122.06268802285194},{lat:47.67127778431193,lng:-122.06279531121254},{lat:47.6619465818607,lng:-122.00699228793383},{lat:47.657177037807635,lng:-121.98587995022535},{lat:47.64451477830059,lng:-121.96343857795},{lat:47.64625090207728,lng:-121.95416484028101},{lat:47.65347848388514,lng:-121.95184707641602},{lat:47.653883198892245,lng:-121.96300506591797},{lat:47.661398764709375,lng:-121.96549415588379},{lat:47.70497493436341,lng:-122.0036244392395},{lat:47.694636066263215,lng:-122.04559229314327}];
var zone_254=new google.maps.Polygon({paths: loc_254,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Union Hill',center: {lat: 47.678565786076575, lng: -122.04454556107521 }});
zone_254.setMap(map);
zone_254.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_254.label;var label=zone_254.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_254.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Novelty Hill
//################################################
var loc_255=[{lat:47.66139808727322,lng:-121.96549650281668},{lat:47.69127688626756,lng:-121.9398307800293},{lat:47.71855389473068,lng:-121.94523811340332},{lat:47.72206175907168,lng:-122.00909614562988},{lat:47.72939430918593,lng:-122.02857971191406},{lat:47.72887471363289,lng:-122.04892158508301},{lat:47.718480586146974,lng:-122.04714428633451},{lat:47.69463471225374,lng:-122.0455926284194},{lat:47.70497267812841,lng:-122.00362578034401}];
var zone_255=new google.maps.Polygon({paths: loc_255,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Novelty Hill',center: {lat: 47.66139808727322, lng: -121.96549650281668 }});
zone_255.setMap(map);
zone_255.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_255.label;var label=zone_255.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_255.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Pacific Ridge
//################################################
var loc_256=[{lat:47.343125985465726,lng:-122.31199398636818},{lat:47.34341019341178,lng:-122.26584792137146},{lat:47.34487142066086,lng:-122.26641319692135},{lat:47.3473730423158,lng:-122.26572588086128},{lat:47.348767147434216,lng:-122.26658552885056},{lat:47.34969554604324,lng:-122.26461209356785},{lat:47.350803151696304,lng:-122.26306781172752},{lat:47.35376785867846,lng:-122.26418294012547},{lat:47.35384145179917,lng:-122.24945694208145},{lat:47.37783029045438,lng:-122.2473145276308},{lat:47.37782234419972,lng:-122.25375384092331},{lat:47.38673501884623,lng:-122.25372835993767},{lat:47.38824838935279,lng:-122.24928930401802},{lat:47.42221594239968,lng:-122.24944554269314},{lat:47.42223817317005,lng:-122.2848416492343},{lat:47.41651820403485,lng:-122.28980273008347},{lat:47.40817556299307,lng:-122.2919873893261},{lat:47.375883876356895,lng:-122.30003267526627},{lat:47.3530121604178,lng:-122.31165233999491}];
var zone_256=new google.maps.Polygon({paths: loc_256,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Pacific Ridge',center: {lat: 47.343125985465726, lng: -122.31199398636818 }});
zone_256.setMap(map);
zone_256.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_256.label;var label=zone_256.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_256.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Des Moines
//################################################
var loc_257=[{lat:47.415554454881104,lng:-122.35139697790146},{lat:47.40394633529271,lng:-122.33544319868088},{lat:47.408500943952724,lng:-122.32587575912476},{lat:47.4083212358888,lng:-122.31164865195751},{lat:47.3920201632979,lng:-122.31186926364899},{lat:47.386725484951015,lng:-122.31319695711136},{lat:47.38699424933663,lng:-122.32940956950188},{lat:47.375504257069416,lng:-122.3255968093872},{lat:47.37606006237043,lng:-122.31315404176712},{lat:47.37588819019674,lng:-122.30002094060183},{lat:47.408176243708496,lng:-122.29198537766933},{lat:47.408235012105116,lng:-122.2982195019722},{lat:47.422690952940194,lng:-122.29635000228882},{lat:47.434547814161405,lng:-122.29550510644913},{lat:47.43491907053894,lng:-122.33529299497604},{lat:47.43126989451032,lng:-122.33580127358437},{lat:47.416051305164544,lng:-122.33526282012463}];
var zone_257=new google.maps.Polygon({paths: loc_257,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#002266',fillOpacity: 0.2,label: 'Des Moines',center: {lat: 47.415554454881104, lng: -122.35139697790146 }});
zone_257.setMap(map);
zone_257.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_257.label;var label=zone_257.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_257.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Hill
//################################################
var loc_258=[{lat:47.473220368526704,lng:-122.1694278717041},{lat:47.468592486782704,lng:-122.15593367815018},{lat:47.457345171827136,lng:-122.15371683239937},{lat:47.42168512325782,lng:-122.15511560440063},{lat:47.41754001296808,lng:-122.16520339250565},{lat:47.40135934553252,lng:-122.16536700725555},{lat:47.40144285736167,lng:-122.1967676281929},{lat:47.43018484520194,lng:-122.19710290431976},{lat:47.42650494619286,lng:-122.22128033638},{lat:47.44116109230566,lng:-122.21753261983395},{lat:47.44625054159279,lng:-122.17161990702152}];
var zone_258=new google.maps.Polygon({paths: loc_258,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'East Hill',center: {lat:47.473220368526704,lng:-122.1694278717041 }});
zone_258.setMap(map);
zone_258.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_258.label;var label=zone_258.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_258.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Port Tacoma
//################################################
var loc_259=[{lat:47.262237738333226,lng:-122.43912264704704},{lat:47.24017153268599,lng:-122.4305248260498},{lat:47.242677201516976,lng:-122.39996910095215},{lat:47.24716380076328,lng:-122.40056991577148},{lat:47.24707640310839,lng:-122.37027168273926},{lat:47.25686404408873,lng:-122.35902786254883},{lat:47.26357743623909,lng:-122.35898494720459},{lat:47.26516464314072,lng:-122.36177444458008},{lat:47.2688121263528,lng:-122.37118363380432},{lat:47.27049381538843,lng:-122.3728895187378},{lat:47.271090765745505,lng:-122.37582921981812},{lat:47.27468688518896,lng:-122.38024950027466},{lat:47.279025197966504,lng:-122.38994836807251},{lat:47.280713840992604,lng:-122.39160060882568},{lat:47.28120877787291,lng:-122.40041971206665},{lat:47.2849352127665,lng:-122.40808010101318},{lat:47.285284552580066,lng:-122.41250038146973},{lat:47.267407037831994,lng:-122.43721961975098}];
var zone_259=new google.maps.Polygon({paths: loc_259,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'Port Tacoma',center: {lat:47.24716380076328,lng:-122.40056991577148}});
zone_259.setMap(map);
zone_259.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_259.label;var label=zone_259.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_259.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mill Creek
//################################################
var loc_260=[{lat:47.8399921160967,lng:-122.22307842224836},{lat:47.839969837284485,lng:-122.2153714299202},{lat:47.83460464072149,lng:-122.21069633960724},{lat:47.83412480668731,lng:-122.14355394244194},{lat:47.833786309465026,lng:-122.1261477470398},{lat:47.86483153808142,lng:-122.1101188659668},{lat:47.8789973114275,lng:-122.16007333248854},{lat:47.878191598766946,lng:-122.20701903104782},{lat:47.87464905783842,lng:-122.22387235611677}];
var zone_260=new google.maps.Polygon({paths: loc_260,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#003399',fillOpacity: 0.2,label: 'Mill Creek',center: {lat: 47.8399921160967, lng: -122.22307842224836 }});
zone_260.setMap(map);
zone_260.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_260.label;var label=zone_260.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_260.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Bromart
//################################################
var loc_261=[{lat:47.864830638358654,lng:-122.11012825369835},{lat:47.864198129382146,lng:-122.07887649536133},{lat:47.90547406475026,lng:-122.08994597196579},{lat:47.9105640492094,lng:-122.09571942687035},{lat:47.91332593386858,lng:-122.11835525929928},{lat:47.91758150955247,lng:-122.1214260533452},{lat:47.92241551595821,lng:-122.13709250092506},{lat:47.92186684278085,lng:-122.14846473187208},{lat:47.92503567591355,lng:-122.15436458587646},{lat:47.92575865672874,lng:-122.15924084186554},{lat:47.898010785923724,lng:-122.15973738580942},{lat:47.87899551247376,lng:-122.1600753441453}];
var zone_261=new google.maps.Polygon({paths: loc_261,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Bromart',center: {lat: 47.864830638358654, lng: -122.11012825369835 }});
zone_261.setMap(map);
zone_261.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_261.label;var label=zone_261.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_261.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Maltby
//################################################
var loc_262=[{lat:47.79020797203918,lng:-122.10891924798489},{lat:47.79724353976066,lng:-122.08737373352051},{lat:47.790554862537554,lng:-122.03836441040039},{lat:47.8226065582677,lng:-122.03510284423828},{lat:47.85003078545827,lng:-122.07595825195312},{lat:47.86421252512038,lng:-122.0788899064064},{lat:47.86483378738832,lng:-122.11013026535511},{lat:47.8338016139084,lng:-122.12615579366684},{lat:47.83412728239024,lng:-122.14354991912842},{lat:47.790438631953165,lng:-122.14345067739487}];
var zone_262=new google.maps.Polygon({paths: loc_262,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Maltby',center: {lat: 47.79020797203918, lng: -122.10891924798489 }});
zone_262.setMap(map);
zone_262.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_262.label;var label=zone_262.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_262.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Monroe
//################################################
var loc_263=[{lat:47.83701184618674,lng:-122.01261520385742},{lat:47.839201099883006,lng:-121.98171615600586},{lat:47.85515681615558,lng:-121.95184707641602},{lat:47.87767079094932,lng:-121.94849967956543},{lat:47.88112475538432,lng:-122.01347351074219}];
var zone_263=new google.maps.Polygon({paths: loc_263,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Downtown Monroe',center: {lat: 47.83701184618674, lng: -122.01261520385742 }});
zone_263.setMap(map);
zone_263.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_263.label;var label=zone_263.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_263.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Monroe
//################################################
var loc_264=[{lat:47.82260205599027,lng:-122.03511089086533},{lat:47.78798871907585,lng:-121.97347640991211},{lat:47.855415984025335,lng:-121.95188999176025},{lat:47.83928751589684,lng:-121.9817590713501},{lat:47.837020848241416,lng:-122.01260849833488},{lat:47.88111935874453,lng:-122.01346680521965},{lat:47.87762761493672,lng:-121.94856405258179},{lat:47.91220007354157,lng:-121.93987369537354},{lat:47.90568443432118,lng:-122.04027816653252},{lat:47.9060440384454,lng:-122.09069967269897},{lat:47.84991558793594,lng:-122.07630157470703}];
var zone_264=new google.maps.Polygon({paths: loc_264,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Monroe',center: {lat: 47.82260205599027, lng: -122.03511089086533 }});
zone_264.setMap(map);
zone_264.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_264.label;var label=zone_264.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_264.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Duvall
//################################################
var loc_265=[{lat:47.72205363928807,lng:-122.00909480452538},{lat:47.71853224051363,lng:-121.94515496492386},{lat:47.766560801839226,lng:-121.94721221923828},{lat:47.78799727910489,lng:-121.97347976267338},{lat:47.822607458723134,lng:-122.03510820865631},{lat:47.79056207062726,lng:-122.03837379813194},{lat:47.78997821212268,lng:-122.02342987060547},{lat:47.775675234834075,lng:-122.02360153198242},{lat:47.77532914630374,lng:-122.0005989074707},{lat:47.7484425665415,lng:-122.00471878051758},{lat:47.736783551486944,lng:-122.01501846313477},{lat:47.72205454148632,lng:-122.009117603302}];
var zone_265=new google.maps.Polygon({paths: loc_265,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Duvall',center: {lat: 47.72205363928807, lng: -122.00909480452538 }});
zone_265.setMap(map);
zone_265.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_265.label;var label=zone_265.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_265.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Cottage Lake
//################################################
var loc_266=[{lat:47.73251177364587,lng:-122.1078896149993},{lat:47.72651346541449,lng:-122.08438374102116},{lat:47.717638996216756,lng:-122.08776768296957},{lat:47.71848036058193,lng:-122.04714260995388},{lat:47.72887020323215,lng:-122.04891219735146},{lat:47.72939160297253,lng:-122.02858038246632},{lat:47.722054315936774,lng:-122.00909815728664},{lat:47.736783551486944,lng:-122.01501443982124},{lat:47.74844279197678,lng:-122.00471609830856},{lat:47.77533365267961,lng:-122.00059421360493},{lat:47.77567793864164,lng:-122.0235975086689},{lat:47.78997956365459,lng:-122.02342785894871},{lat:47.79056815245217,lng:-122.03837346285582},{lat:47.79725435050319,lng:-122.08737775683403},{lat:47.79020864780213,lng:-122.10892427712679}];
var zone_266=new google.maps.Polygon({paths: loc_266,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Cottage Lake',center: {lat: 47.73251177364587, lng: -122.1078896149993 }});
zone_266.setMap(map);
zone_266.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_266.label;var label=zone_266.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_266.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Sammamish
//################################################
var loc_267=[{lat:47.63604385330619,lng:-122.04226970672607},{lat:47.62730989442013,lng:-122.05183982849121},{lat:47.61218107572824,lng:-122.05175399780273},{lat:47.60176481344253,lng:-122.03527450561523},{lat:47.602372485714724,lng:-122.0145034790039},{lat:47.61672307387489,lng:-122.0138168334961},{lat:47.641017508622134,lng:-122.01377391815186}];
var zone_267=new google.maps.Polygon({paths: loc_267,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Downtown Sammamish',center: {lat: 47.63604385330619, lng: -122.04226970672607 }});
zone_267.setMap(map);
zone_267.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_267.label;var label=zone_267.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_267.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Sammamish
//################################################
var loc_268=[{lat:47.64098814158916,lng:-122.01390165835619},{lat:47.642725512038545,lng:-122.01827935874462},{lat:47.64636835827636,lng:-122.03905172646046},{lat:47.65241157504984,lng:-122.04934805631638},{lat:47.65649367082686,lng:-122.06271953880787},{lat:47.65607926514549,lng:-122.07064714282751},{lat:47.655128942586494,lng:-122.07429930567741},{lat:47.65509845429032,lng:-122.0934683829546},{lat:47.64885294675266,lng:-122.0907211303711},{lat:47.63960064341703,lng:-122.0829963684082},{lat:47.632081940263305,lng:-122.07286834716797},{lat:47.62294236759983,lng:-122.07338333129883},{lat:47.6141483590261,lng:-122.07063674926758},{lat:47.6025750415702,lng:-122.08351135253906},{lat:47.59042030203756,lng:-122.09003448486328},{lat:47.5820839916191,lng:-122.08488464355469},{lat:47.57982352458906,lng:-122.07886878401041},{lat:47.5850203044946,lng:-122.06667512655258},{lat:47.58839242858681,lng:-122.05681264400482},{lat:47.59202481705239,lng:-122.0569172501564},{lat:47.59177021437398,lng:-122.03542806208134},{lat:47.601767526280845,lng:-122.03527450561523},{lat:47.6121817538028,lng:-122.05175265669823},{lat:47.62730989442013,lng:-122.05183748155832},{lat:47.636040238558955,lng:-122.04226166009903}];
var zone_268=new google.maps.Polygon({paths: loc_268,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'West Sammamish',center: {lat: 47.64098814158916, lng: -122.01390165835619 }});
zone_268.setMap(map);
zone_268.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_268.label;var label=zone_268.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_268.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Sammamish
//################################################
var loc_269=[{lat:47.57706039796166,lng:-122.03564330935478},{lat:47.58080936708365,lng:-122.02257089316845},{lat:47.58060672696709,lng:-122.00478382408619},{lat:47.57845724601852,lng:-121.99823822826147},{lat:47.577819893480445,lng:-121.9944740831852},{lat:47.576214490639885,lng:-121.99202723801136},{lat:47.575419461007066,lng:-121.98805723339319},{lat:47.583994513354966,lng:-121.97871208190918},{lat:47.588220571293085,lng:-121.95313453674316},{lat:47.599912816315054,lng:-121.96223258972168},{lat:47.61171817478493,lng:-121.9581127166748},{lat:47.622710965271416,lng:-121.9647216796875},{lat:47.62797511482446,lng:-121.99321746826172},{lat:47.631476194762975,lng:-121.99853863567114},{lat:47.63671122173271,lng:-122.00317315757275},{lat:47.64093753989361,lng:-122.0137782767415},{lat:47.60237497245431,lng:-122.01450683176517},{lat:47.60176843056025,lng:-122.03527919948101},{lat:47.591770666600084,lng:-122.03543107956648}];
var zone_269=new google.maps.Polygon({paths: loc_269,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'East Sammamish',center: {lat: 47.57706039796166, lng: -122.03564330935478 }});
zone_269.setMap(map);
zone_269.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_269.label;var label=zone_269.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_269.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Ames Lake
//################################################
var loc_270=[{lat:47.622709609395386,lng:-121.96472335606813},{lat:47.631445692659135,lng:-121.94643974304199},{lat:47.63688246791005,lng:-121.94626808166504},{lat:47.646252257342624,lng:-121.95416651666164},{lat:47.64451974777184,lng:-121.96344494819641},{lat:47.63384784828229,lng:-121.97184696793556},{lat:47.63055027852387,lng:-121.97828326374292},{lat:47.634107894435054,lng:-121.98635201901197},{lat:47.631476194762975,lng:-121.9985406473279},{lat:47.62797195143225,lng:-121.99321880936623}];
var zone_270=new google.maps.Polygon({paths: loc_270,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Ames Lake',center: {lat: 47.622709609395386, lng: -121.96472335606813 }});
zone_270.setMap(map);
zone_270.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_270.label;var label=zone_270.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_270.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Carnation
//################################################
var loc_271=[{lat:47.640063297504945,lng:-121.92764282226562},{lat:47.62786665555359,lng:-121.91044449806213},{lat:47.64475828183574,lng:-121.88335452228785},{lat:47.65521295468835,lng:-121.88301086425781},{lat:47.65521295468835,lng:-121.92317962646484},{lat:47.646597848856985,lng:-121.92438125610352}];
var zone_271=new google.maps.Polygon({paths: loc_271,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Carnation',center: {lat: 47.640063297504945, lng: -121.92764282226562 }});
zone_271.setMap(map);
zone_271.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_271.label;var label=zone_271.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_271.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Snoqualmie River
//################################################
var loc_272=[{lat:47.58822170193502,lng:-121.9531375542283},{lat:47.572675102390996,lng:-121.91245079040527},{lat:47.58191030436744,lng:-121.89597129821777},{lat:47.62786959299514,lng:-121.910444162786},{lat:47.64006510473945,lng:-121.92762404680252},{lat:47.646597848856985,lng:-121.9243785738945},{lat:47.65521566475389,lng:-121.92316889762878},{lat:47.65520211442473,lng:-121.90326154232025},{lat:47.67914276865707,lng:-121.90635681152344},{lat:47.69127778899867,lng:-121.93983279168606},{lat:47.66139921633347,lng:-121.96549750864506},{lat:47.653882521358575,lng:-121.96300640702248},{lat:47.653477806346224,lng:-121.95184875279665},{lat:47.646251579709954,lng:-121.95416785776615},{lat:47.63688088648353,lng:-121.94627042859793},{lat:47.63144727425016,lng:-121.94644276052713},{lat:47.62271028733341,lng:-121.96472570300102},{lat:47.611718626838645,lng:-121.95811439305544},{lat:47.599912816315054,lng:-121.96223493665457}];
var zone_272=new google.maps.Polygon({paths: loc_272,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'North Snoqualmie River',center: {lat: 47.58822170193502, lng: -121.9531375542283 }});
zone_272.setMap(map);
zone_272.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_272.label;var label=zone_272.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_272.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Fall City
//################################################
var loc_273=[{lat:47.552490952452025,lng:-121.89983367919922},{lat:47.5675501654106,lng:-121.87090873718262},{lat:47.58191075667875,lng:-121.89597263932228},{lat:47.57267623336868,lng:-121.91245213150978},{lat:47.576544938950114,lng:-121.92257311195135},{lat:47.56193242677904,lng:-121.91880226135254}];
var zone_273=new google.maps.Polygon({paths: loc_273,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Fall City',center: {lat: 47.552490952452025, lng: -121.89983367919922 }});
zone_273.setMap(map);
zone_273.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_273.label;var label=zone_273.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_273.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Issaquah
//################################################
var loc_274=[{lat:47.535893203365696,lng:-121.97167865931988},{lat:47.517519517419636,lng:-121.92382335662842},{lat:47.55249547810603,lng:-121.89983300864697},{lat:47.561937856585324,lng:-121.91879689693451},{lat:47.5765442604136,lng:-121.92257009446621},{lat:47.58822418934719,lng:-121.95313956588507},{lat:47.583995417941566,lng:-121.97871375828981},{lat:47.57542036574183,lng:-121.9880585744977},{lat:47.55723973253392,lng:-121.97605300694704}];
var zone_274=new google.maps.Polygon({paths: loc_274,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#953734',fillOpacity: 0.2,label: 'East Issaquah',center: {lat: 47.535893203365696, lng: -121.97167865931988 }});
zone_274.setMap(map);
zone_274.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_274.label;var label=zone_274.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_274.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: [Downtown Snoqualmie
//################################################
var loc_275=[{lat:47.548319943545174,lng:-121.82893753051758},{lat:47.54797234448566,lng:-121.84404373168945},{lat:47.540208698176976,lng:-121.84507369995117},{lat:47.512679047971524,lng:-121.83674812316895},{lat:47.50181535133646,lng:-121.82051539421082},{lat:47.52143214539812,lng:-121.77228927612305}];
var zone_275=new google.maps.Polygon({paths: loc_275,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'Downtown Snoqualmie',center: {lat: 47.548319943545174, lng: -121.82893753051758 }});
zone_275.setMap(map);
zone_275.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_275.label;var label=zone_275.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_275.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Snoqualmie Ridge
//################################################
var loc_276=[{lat:47.51752155532265,lng:-121.92382704466581},{lat:47.48296523683727,lng:-121.88873738050461},{lat:47.507887956587,lng:-121.88217971473932},{lat:47.51267950088065,lng:-121.83674678206444},{lat:47.540210056191384,lng:-121.8450690060854},{lat:47.547967818441045,lng:-121.84403970837593},{lat:47.54831835944012,lng:-121.82893820106983},{lat:47.55440255392955,lng:-121.8343448638916},{lat:47.56755129649897,lng:-121.87091309577227},{lat:47.55249502554066,lng:-121.89984139055014}];
var zone_276=new google.maps.Polygon({paths: loc_276,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'Snoqualmie Ridge',center: {lat: 47.51752155532265, lng: -121.92382704466581 }});
zone_276.setMap(map);
zone_276.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_276.label;var label=zone_276.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_276.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Bend
//################################################
var loc_277=[{lat:47.501821240373445,lng:-121.82051941752434},{lat:47.484949611093406,lng:-121.81580644100904},{lat:47.4692855618149,lng:-121.79615054279566},{lat:47.47333594703685,lng:-121.78001370280981},{lat:47.47321946202758,lng:-121.74173254519701},{lat:47.50988180668379,lng:-121.75667613744736},{lat:47.52143327748206,lng:-121.77229262888432}];
var zone_277=new google.maps.Polygon({paths: loc_277,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'North Bend',center: {lat: 47.501821240373445, lng: -121.82051941752434 }});
zone_277.setMap(map);
zone_277.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_277.label;var label=zone_277.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_277.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Tiger Mountain
//################################################
var loc_278=[{lat:47.43566429687654,lng:-121.97575092315674},{lat:47.436854459961516,lng:-121.96343421936035},{lat:47.46279912808656,lng:-121.93880081176758},{lat:47.465004124842224,lng:-121.89691543579102},{lat:47.48240874665262,lng:-121.88575744628906},{lat:47.51752857476576,lng:-121.92383006215096},{lat:47.53590633191749,lng:-121.97168201208115},{lat:47.53138086122684,lng:-121.97922974824905},{lat:47.53178018317367,lng:-121.99377603828907},{lat:47.536857011413055,lng:-122.00940057635307},{lat:47.5303587733455,lng:-122.02338963747025},{lat:47.52102821629425,lng:-122.02570706605911},{lat:47.51050503915368,lng:-122.01789379119873},{lat:47.49864785970502,lng:-122.02231407165527},{lat:47.48588897929538,lng:-122.0127010345459},{lat:47.485308956533295,lng:-122.0002555847168},{lat:47.479972446613736,lng:-121.99931144714355},{lat:47.47277890160307,lng:-121.99295997619629},{lat:47.47115441643408,lng:-121.97064399719238},{lat:47.45995570627158,lng:-121.97553634643555},{lat:47.438828329632734,lng:-121.97991371154785}];
var zone_278=new google.maps.Polygon({paths: loc_278,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Tiger Mountain',center: {lat: 47.43566429687654, lng: -121.97575092315674 }});
zone_278.setMap(map);
zone_278.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_278.label;var label=zone_278.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_278.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Sycamore
//################################################
var loc_279=[{lat:47.527426866561456,lng:-122.05540884286165},{lat:47.52288119282575,lng:-122.05780506134033},{lat:47.51609930620232,lng:-122.05853462219238},{lat:47.51580946245539,lng:-122.0375919342041},{lat:47.50682351218946,lng:-122.02699184417725},{lat:47.492732764212036,lng:-122.02943801879883},{lat:47.48055252829916,lng:-122.04694747924805},{lat:47.47689088187623,lng:-121.99658866971731},{lat:47.47997380618768,lng:-121.99930910021067},{lat:47.48531439427641,lng:-122.00025290250778},{lat:47.48589532325893,lng:-122.0127023756504},{lat:47.4986492187956,lng:-122.02231205999851},{lat:47.5105057185455,lng:-122.0178921148181},{lat:47.52102957480543,lng:-122.02570606023073},{lat:47.51876715212439,lng:-122.02986650168896},{lat:47.52508638507302,lng:-122.04055342823267},{lat:47.529113225372555,lng:-122.04806327819824}];
var zone_279=new google.maps.Polygon({paths: loc_279,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Sycamore',center: {lat: 47.527426866561456, lng: -122.05540884286165 }});
zone_279.setMap(map);
zone_279.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_279.label;var label=zone_279.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_279.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Squak Mountain
//################################################
var loc_280=[{lat:47.52302496331759,lng:-122.0675753429532},{lat:47.527427772125115,lng:-122.05540414899588},{lat:47.522882551288916,lng:-122.05780003219843},{lat:47.516102023479874,lng:-122.05853261053562},{lat:47.51581172686587,lng:-122.03758858144283},{lat:47.50682351218946,lng:-122.0269888266921},{lat:47.49273163150893,lng:-122.02943667769432},{lat:47.48055275489234,lng:-122.04694345593452},{lat:47.48056703025924,lng:-122.0579445362091},{lat:47.48828875540377,lng:-122.06196784973145},{lat:47.49110889594638,lng:-122.05930709838867},{lat:47.49963364417298,lng:-122.05935001373291},{lat:47.50189507978143,lng:-122.08797454833984},{lat:47.506939469733226,lng:-122.0870304107666}];
var zone_280=new google.maps.Polygon({paths: loc_280,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Squak Mountain',center: {lat: 47.52302496331759, lng: -122.0675753429532 }});
zone_280.setMap(map);
zone_280.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_280.label;var label=zone_280.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_280.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Forest Ridge Newcastle
//################################################
var loc_281=[{lat:47.524099493760346,lng:-122.16227509081364},{lat:47.520318615820024,lng:-122.15893674641848},{lat:47.51872775358732,lng:-122.15900748968124},{lat:47.51604133758101,lng:-122.13054656982422},{lat:47.53105578737427,lng:-122.13220652192831},{lat:47.531576447866414,lng:-122.14509755373001},{lat:47.53338377878162,lng:-122.15264797210693},{lat:47.538239992950494,lng:-122.15590752661228},{lat:47.54015120886754,lng:-122.15440582484007},{lat:47.53994660073514,lng:-122.14694157242775},{lat:47.536788653605434,lng:-122.13359490036964},{lat:47.535341122152225,lng:-122.13156748563051},{lat:47.538328267129295,lng:-122.12900094687939},{lat:47.54338477140511,lng:-122.13031724095345},{lat:47.546430072156525,lng:-122.15078417211771},{lat:47.54873656151607,lng:-122.16628465801477},{lat:47.54940662834029,lng:-122.17079278081656},{lat:47.54073062579498,lng:-122.17074416577816},{lat:47.53176026242299,lng:-122.16291010379791}];
var zone_281=new google.maps.Polygon({paths: loc_281,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#d99694',fillOpacity: 0.2,label: 'Forest Ridge Newcastle',center: {lat: 47.524099493760346, lng: -122.16227509081364 }});
zone_281.setMap(map);
zone_281.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_281.label;var label=zone_281.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_281.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Cougar Mountain
//################################################
var loc_282=[{lat:47.51605039518231,lng:-122.13056266307831},{lat:47.50844689449078,lng:-122.1306324005127},{lat:47.50189870379875,lng:-122.0879678428173},{lat:47.50693811085724,lng:-122.08702303469181},{lat:47.52302971792555,lng:-122.06755220890045},{lat:47.53007104578859,lng:-122.06176199018955},{lat:47.53769766934982,lng:-122.06292238086462},{lat:47.53993890528098,lng:-122.06326067447662},{lat:47.541219730177964,lng:-122.06319596618414},{lat:47.54126703341401,lng:-122.07348022609949},{lat:47.55127534762943,lng:-122.09767811000347},{lat:47.53598057607955,lng:-122.11123567074537},{lat:47.53832917250471,lng:-122.12900463491678},{lat:47.53534270664948,lng:-122.13156949728727},{lat:47.53105669287523,lng:-122.13221155107021}];
var zone_282=new google.maps.Polygon({paths: loc_282,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Cougar Mountain',center: {lat: 47.51605039518231, lng: -122.13056266307831 }});
zone_282.setMap(map);
zone_282.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_282.label;var label=zone_282.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_282.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Renton Highlands
//################################################
var loc_283=[{lat:47.460822077645986,lng:-122.08163045346737},{lat:47.4805697493763,lng:-122.05794185400009},{lat:47.48828875540377,lng:-122.06194907426834},{lat:47.4911082163035,lng:-122.05930408090353},{lat:47.49963477672723,lng:-122.05934900790453},{lat:47.50190346032113,lng:-122.08797287195921},{lat:47.508448479800535,lng:-122.13063072413206},{lat:47.516042243341204,lng:-122.13054522871971},{lat:47.51873454644065,lng:-122.15900883078575},{lat:47.515986539059796,lng:-122.15910270810127},{lat:47.51370533000816,lng:-122.1557204425335},{lat:47.508176938191276,lng:-122.15625956654549},{lat:47.50824669213323,lng:-122.16821417212486},{lat:47.48856810288113,lng:-122.16817058622837},{lat:47.473212210034035,lng:-122.16942988336086},{lat:47.468584327571605,lng:-122.15593501925468}];
var zone_283=new google.maps.Polygon({paths: loc_283,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0077CC',fillOpacity: 0.2,label: 'East Renton Highlands',center: {lat: 47.460822077645986, lng: -122.08163045346737 }});
zone_283.setMap(map);
zone_283.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_283.label;var label=zone_283.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_283.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Mirrormont
//################################################
var loc_284=[{lat:47.40868927371526,lng:-122.03836910426617},{lat:47.42239651042624,lng:-121.99759483337402},{lat:47.43566565759666,lng:-121.97574991732836},{lat:47.438828329632734,lng:-121.97991069406271},{lat:47.45996658700533,lng:-121.9755095243454},{lat:47.47115894910764,lng:-121.97063729166985},{lat:47.47278615365641,lng:-121.99295595288277},{lat:47.476926912686835,lng:-121.9965648651123},{lat:47.48056340476959,lng:-122.04695552587509},{lat:47.480572468493236,lng:-122.05795124173164},{lat:47.46082525114125,lng:-122.08163447678089},{lat:47.45560005837369,lng:-122.07836486399174},{lat:47.4523495224856,lng:-122.07407400012016},{lat:47.44375814481476,lng:-122.07288041710854}];
var zone_284=new google.maps.Polygon({paths: loc_284,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#0077CC',fillOpacity: 0.2,label: 'Mirrormont',center: {lat: 47.40868927371526, lng: -122.03836910426617 }});
zone_284.setMap(map);
zone_284.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_284.label;var label=zone_284.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_284.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Hobart
//################################################
var loc_285=[{lat:47.39219220985757,lng:-122.05072671175003},{lat:47.37312839581924,lng:-121.97158813476562},{lat:47.39846539733272,lng:-121.91734313964844},{lat:47.42158349573474,lng:-121.9266128540039},{lat:47.43686171697095,lng:-121.96344494819641},{lat:47.43566679153005,lng:-121.97575360536575},{lat:47.42239832517713,lng:-121.99759818613529},{lat:47.40869154274444,lng:-122.03837178647518}];
var zone_285=new google.maps.Polygon({paths: loc_285,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#002266',fillOpacity: 0.2,label: 'Hobart',center: {lat: 47.39219220985757, lng: -122.05072671175003 }});
zone_285.setMap(map);
zone_285.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_285.label;var label=zone_285.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_285.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Maple Valley
//################################################
var loc_286=[{lat:47.386729570906326,lng:-122.06119671463966},{lat:47.38196286171234,lng:-122.06995010375977},{lat:47.357897091768734,lng:-122.06977844238281},{lat:47.34359194029703,lng:-122.05398559570312},{lat:47.3429521884858,lng:-121.99965476989746},{lat:47.35786075229282,lng:-121.97398066520691},{lat:47.365338889008,lng:-121.96901321411133},{lat:47.37313248282845,lng:-121.97159014642239},{lat:47.3922003809203,lng:-122.05072671175003}];
var zone_286=new google.maps.Polygon({paths: loc_286,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#002266',fillOpacity: 0.2,label: 'Maple Valley',center: {lat: 47.386729570906326, lng: -122.06119671463966 }});
zone_286.setMap(map);
zone_286.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_286.label;var label=zone_286.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_286.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Covington
//################################################
var loc_287=[{lat:47.3152020840849,lng:-122.1594775468111},{lat:47.31595923282549,lng:-122.13715553283691},{lat:47.318286755131744,lng:-122.12136268615723},{lat:47.30990719500831,lng:-122.10831642150879},{lat:47.30920883835333,lng:-122.09175109863281},{lat:47.30362165292325,lng:-122.08651542663574},{lat:47.31691934819999,lng:-122.06758975982666},{lat:47.34359557522835,lng:-122.05398291349411},{lat:47.35789822737696,lng:-122.06977609544992},{lat:47.381962407676276,lng:-122.0699467509985},{lat:47.38673093289134,lng:-122.0611910149455},{lat:47.387099575546415,lng:-122.16545686125755},{lat:47.35378194132059,lng:-122.16546691954136},{lat:47.35372583786905,lng:-122.20872089266777},{lat:47.352808640190794,lng:-122.20792662352324},{lat:47.3508320000153,lng:-122.20796953886747},{lat:47.34943681364605,lng:-122.20719773322344},{lat:47.34690689369039,lng:-122.20775496214628},{lat:47.343242985724736,lng:-122.20487929880619},{lat:47.34112376414772,lng:-122.20574364066124},{lat:47.33856050105605,lng:-122.20857135951519},{lat:47.336002339485105,lng:-122.20835477113724},{lat:47.333573118687504,lng:-122.21068024635315},{lat:47.33226427881928,lng:-122.2114098072052},{lat:47.33021369780691,lng:-122.21120327711105},{lat:47.328812967049274,lng:-122.20990106463432},{lat:47.32662680750334,lng:-122.20213741064072},{lat:47.322072396626574,lng:-122.20239222049713},{lat:47.31753213999069,lng:-122.20424830913544},{lat:47.31555099666558,lng:-122.20371890813112}];
var zone_287=new google.maps.Polygon({paths: loc_287,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFFF00',fillOpacity: 0.2,label: 'Covington',center: {lat: 47.3152020840849, lng: -122.1594775468111 }});
zone_287.setMap(map);
zone_287.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_287.label;var label=zone_287.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_287.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Auburn
//################################################
var loc_288=[{lat:47.276033092242294,lng:-122.11004376411438},{lat:47.28027712813545,lng:-122.09230899810791},{lat:47.28237331697429,lng:-122.0551872253418},{lat:47.30146810086879,lng:-122.05218315124512},{lat:47.30362847357797,lng:-122.08651676774025},{lat:47.309213839638225,lng:-122.09175042808056},{lat:47.3099181067578,lng:-122.10831373929977},{lat:47.318288573468465,lng:-122.12136201560497},{lat:47.315961960450714,lng:-122.13715754449368},{lat:47.31520322061172,lng:-122.15947352349758},{lat:47.3121192788294,lng:-122.16496735811234},{lat:47.3061225006612,lng:-122.17098891735077},{lat:47.30414615870352,lng:-122.17106133699417},{lat:47.301002001724704,lng:-122.17707753181458},{lat:47.30065140151423,lng:-122.17487946152687},{lat:47.29972100369219,lng:-122.17402249574661},{lat:47.296931531060636,lng:-122.17360273003578},{lat:47.295791870456554,lng:-122.17484191060066},{lat:47.290669006454934,lng:-122.174451649189},{lat:47.28839757788878,lng:-122.16917037963867},{lat:47.28816492606359,lng:-122.16118812561035},{lat:47.288689357763595,lng:-122.15848378837109},{lat:47.286271152173306,lng:-122.13466912508011},{lat:47.28374093534126,lng:-122.13213443756104},{lat:47.28097427480872,lng:-122.12548390030861},{lat:47.27896514824587,lng:-122.11741514503956},{lat:47.27899471819255,lng:-122.11007863283157}];
var zone_288=new google.maps.Polygon({paths: loc_288,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'East Auburn',center: {lat: 47.276033092242294, lng: -122.11004376411438 }});
zone_288.setMap(map);
zone_288.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_288.label;var label=zone_288.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_288.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Black Diamond
//################################################
var loc_289=[{lat:47.342954233159475,lng:-121.99965611100197},{lat:47.321351700121284,lng:-121.97911106050014},{lat:47.31799582045031,lng:-121.9533920288086},{lat:47.301584511330795,lng:-121.95064544677734},{lat:47.27934546199225,lng:-121.98686599731445},{lat:47.270726772426436,lng:-121.98755264282227},{lat:47.271542113984516,lng:-122.05055236816406},{lat:47.28238878333674,lng:-122.05520331859589},{lat:47.301438998213264,lng:-122.05224752426147},{lat:47.30362438118527,lng:-122.0865248143673},{lat:47.31692048468986,lng:-122.0675927773118},{lat:47.34359716551073,lng:-122.05398861318827}];
var zone_289=new google.maps.Polygon({paths: loc_289,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#974806',fillOpacity: 0.2,label: 'Black Diamond',center: {lat: 47.342954233159475, lng: -121.99965611100197 }});
zone_289.setMap(map);
zone_289.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_289.label;var label=zone_289.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_289.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Ravensdale
//################################################
var loc_290=[{lat:47.30158678497008,lng:-121.95065148174763},{lat:47.284644094492855,lng:-121.92532539367676},{lat:47.31409714116217,lng:-121.88790321350098},{lat:47.343708257975216,lng:-121.84816360473633},{lat:47.391493125354344,lng:-121.85348510742188},{lat:47.39846653206751,lng:-121.91735118627548},{lat:47.37312953109962,lng:-121.97159383445978},{lat:47.36533911609762,lng:-121.9690165668726},{lat:47.357862115023615,lng:-121.9739830121398},{lat:47.3429521884858,lng:-121.99965912848711},{lat:47.321350109168904,lng:-121.9791130721569},{lat:47.3179935475168,lng:-121.95339571684599}];
var zone_290=new google.maps.Polygon({paths: loc_290,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Ravensdale',center: {lat: 47.30158678497008, lng: -121.95065148174763 }});
zone_290.setMap(map);
zone_290.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_290.label;var label=zone_290.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_290.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Enumclaw
//################################################
var loc_291=[{lat:47.13584821011389,lng:-121.99048429727554},{lat:47.083312632348765,lng:-121.97219230234623},{lat:47.08309825729834,lng:-121.92420959472656},{lat:47.16730970131579,lng:-121.9097900390625},{lat:47.28464682373411,lng:-121.92532572895288},{lat:47.30158678497008,lng:-121.95064712315798},{lat:47.27934546199225,lng:-121.98686800897121},{lat:47.27072950238565,lng:-121.98755599558353},{lat:47.27154507139474,lng:-122.05054968595505},{lat:47.28237854824445,lng:-122.05519024282694},{lat:47.28028713617878,lng:-122.09231972694397},{lat:47.27603786919182,lng:-122.11004208773375},{lat:47.25733508330344,lng:-122.10978124290705},{lat:47.25756491251035,lng:-122.12557174265385},{lat:47.243113541795005,lng:-122.1235154941678},{lat:47.2284237196198,lng:-122.12248519062996},{lat:47.22830896959091,lng:-122.10222143679857},{lat:47.22819285323732,lng:-121.96300271898508},{lat:47.23507082849725,lng:-121.96283306926489},{lat:47.22492965200525,lng:-121.94034978747368},{lat:47.195548611246295,lng:-121.93967118859291},{lat:47.15610842286548,lng:-121.95511534810066}];
var zone_291=new google.maps.Polygon({paths: loc_291,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#7733AA',fillOpacity: 0.2,label: 'Enumclaw',center: {lat: 47.13584821011389, lng: -121.99048429727554 }});
zone_291.setMap(map);
zone_291.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_291.label;var label=zone_291.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_291.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Wilkeson - Carbonado
//################################################
var loc_292=[{lat:47.09706895771736,lng:-122.10419956594706},{lat:47.04322366037692,lng:-122.09484100341797},{lat:47.03339660061744,lng:-122.07509994506836},{lat:47.035268561061955,lng:-122.00489044189453},{lat:47.05281476835347,lng:-121.97179935872555},{lat:47.083316285164294,lng:-121.97218727320433},{lat:47.135860982354096,lng:-121.9904638454318},{lat:47.12399653011076,lng:-122.05012522637844},{lat:47.11967267146989,lng:-122.05537062138319},{lat:47.11173331366603,lng:-122.05571562051773},{lat:47.09957841959545,lng:-122.0999925211072}];
var zone_292=new google.maps.Polygon({paths: loc_292,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#76923c',fillOpacity: 0.2,label: 'Wilkeson - Carbonado',center: {lat: 47.09706895771736, lng: -122.10419956594706 }});
zone_292.setMap(map);
zone_292.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_292.label;var label=zone_292.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_292.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: East Orting
//################################################
var loc_293=[{lat:47.05200017489246,lng:-122.19595290720463},{lat:47.04486132771009,lng:-122.19564914703369},{lat:47.027955842839084,lng:-122.14496612548828},{lat:47.04322868677655,lng:-122.0948275923729},{lat:47.09707009892743,lng:-122.10419688373804},{lat:47.09654240077298,lng:-122.11183782666922},{lat:47.095198253259085,lng:-122.11878910660744},{lat:47.09595672273643,lng:-122.12582521140575},{lat:47.096424626595606,lng:-122.14015994220972},{lat:47.097650743448845,lng:-122.14367933571339},{lat:47.09530301992386,lng:-122.15537376701832},{lat:47.09069720053499,lng:-122.15900111943483},{lat:47.08911892299755,lng:-122.1636788919568},{lat:47.08444271020769,lng:-122.1743668243289},{lat:47.08333340773377,lng:-122.17518053948879},{lat:47.08210604801213,lng:-122.17698365449905},{lat:47.08199006836193,lng:-122.18771383166313},{lat:47.059949810237676,lng:-122.1886583045125},{lat:47.05679321387799,lng:-122.19114672392607},{lat:47.054219376030304,lng:-122.19440761953592}];
var zone_293=new google.maps.Polygon({paths: loc_293,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#548dd4',fillOpacity: 0.2,label: 'East Orting',center: {lat: 47.05200017489246, lng: -122.19595290720463 }});
zone_293.setMap(map);
zone_293.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_293.label;var label=zone_293.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_293.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Dupont
//################################################
var loc_294=[{lat:47.07832744724769,lng:-122.69070982933044},{lat:47.07615012091265,lng:-122.68636465072632},{lat:47.088007435093296,lng:-122.64484405517578},{lat:47.09338363453388,lng:-122.62166976928711},{lat:47.095224273757175,lng:-122.61690616607666},{lat:47.09858400669407,lng:-122.62252807617188},{lat:47.11187478455447,lng:-122.62239933013916},{lat:47.11552916672371,lng:-122.6245665550232},{lat:47.124519849894845,lng:-122.62454509735107},{lat:47.13730787484622,lng:-122.60767936706543},{lat:47.140697107428146,lng:-122.6052751019597},{lat:47.14571864019208,lng:-122.62423496693373},{lat:47.13911780346723,lng:-122.63497352600098},{lat:47.13672401376151,lng:-122.64527320861816},{lat:47.12977146894478,lng:-122.6545425876975},{lat:47.1111446081886,lng:-122.67342567443848},{lat:47.09408483793012,lng:-122.6898193359375}];
var zone_294=new google.maps.Polygon({paths: loc_294,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#76923c',fillOpacity: 0.2,label: 'Dupont',center: {lat: 47.07832744724769, lng: -122.69070982933044 }});
zone_294.setMap(map);
zone_294.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_294.label;var label=zone_294.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_294.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Camp Murray
//################################################
var loc_295=[{lat:47.11050615201961,lng:-122.5711714848876},{lat:47.12732707381091,lng:-122.54201218485832},{lat:47.13212497131865,lng:-122.55239635705948},{lat:47.130009150496804,lng:-122.56939888000488},{lat:47.11505823645416,lng:-122.57763862609863}];
var zone_295=new google.maps.Polygon({paths: loc_295,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'Camp Murray',center: {lat: 47.11050615201961, lng: -122.5711714848876 }});
zone_295.setMap(map);
zone_295.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_295.label;var label=zone_295.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_295.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: North Fort Lewis
//################################################
var loc_296=[{lat:47.095223817257306,lng:-122.61691220104694},{lat:47.09975255976476,lng:-122.60845184326172},{lat:47.1029075249525,lng:-122.59703636169434},{lat:47.10419282753968,lng:-122.58819580078125},{lat:47.10781487696638,lng:-122.5802993774414},{lat:47.110510943892116,lng:-122.57116913795471},{lat:47.11505914911375,lng:-122.57763393223286},{lat:47.13000800999284,lng:-122.569396533072},{lat:47.132121321851095,lng:-122.55239099264145},{lat:47.13952899715985,lng:-122.568453066051},{lat:47.14568739960626,lng:-122.56824284791946},{lat:47.14316209620082,lng:-122.57968313992023},{lat:47.14745326201033,lng:-122.57960066199303},{lat:47.140697107428146,lng:-122.60528180748224},{lat:47.1373094713326,lng:-122.60768506675959},{lat:47.12452030614351,lng:-122.62455314397812},{lat:47.11552825407217,lng:-122.62457393109798},{lat:47.11187478455447,lng:-122.62240268290043},{lat:47.098581724338764,lng:-122.62253277003765}];
var zone_296=new google.maps.Polygon({paths: loc_296,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'North Fort Lewis',center: {lat: 47.095223817257306, lng: -122.61691220104694 }});
zone_296.setMap(map);
zone_296.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_296.label;var label=zone_296.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_296.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: JBLM
//################################################
var loc_298=[{lat:46.9955747473023,lng:-122.62450821697712},{lat:47.00203150133959,lng:-122.5536060333252},{lat:47.01174728881082,lng:-122.53884315490723},{lat:47.010693855109274,lng:-122.52133369445801},{lat:47.067196483966434,lng:-122.44468085467815},{lat:47.069302470820936,lng:-122.44158625602722},{lat:47.08404798472633,lng:-122.43483245372772},{lat:47.09685121438474,lng:-122.4351355433464},{lat:47.097459250141746,lng:-122.47588634490967},{lat:47.11435730926556,lng:-122.47618675231934},{lat:47.11424048716985,lng:-122.47222781181335},{lat:47.127848535950235,lng:-122.47223854064941},{lat:47.12714777724865,lng:-122.46949195861816},{lat:47.132111285814055,lng:-122.46949195861816},{lat:47.13217697620391,lng:-122.46629476547241},{lat:47.135950387949386,lng:-122.46619284152985},{lat:47.13597958158063,lng:-122.46472835540771},{lat:47.13882041015157,lng:-122.46487587690353},{lat:47.13876202599242,lng:-122.46740251779556},{lat:47.143795599694386,lng:-122.46794164180756},{lat:47.14914427566727,lng:-122.4673730134964},{lat:47.149202648425124,lng:-122.4683627486229},{lat:47.15395434071624,lng:-122.4682366847992},{lat:47.15409410335213,lng:-122.4730509147048},{lat:47.15590300453026,lng:-122.47300900518894},{lat:47.155884537360215,lng:-122.48937115073204},{lat:47.14046289448211,lng:-122.5166143476963},{lat:47.1392418688986,lng:-122.52094745635986},{lat:47.13724948902624,lng:-122.52629041671753},{lat:47.127328442484654,lng:-122.5420269370079},{lat:47.110511172076535,lng:-122.57117584347725},{lat:47.107820353669005,lng:-122.58031010627747},{lat:47.10419921746079,lng:-122.58819982409477},{lat:47.10291482789578,lng:-122.59704038500786},{lat:47.09975370091735,lng:-122.60845452547073},{lat:47.09522518675687,lng:-122.61691555380821},{lat:47.09338500408078,lng:-122.62167379260063},{lat:47.08801747945014,lng:-122.64484137296677},{lat:47.07615286089262,lng:-122.68637537956238},{lat:47.057841169772985,lng:-122.69034504890442},{lat:47.04028998997037,lng:-122.67678380012512},{lat:47.03384631585754,lng:-122.62577086687088}];
var zone_298=new google.maps.Polygon({paths: loc_298,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FF0000',fillOpacity: 0.2,label: 'JBLM',center: {lat: 46.9955747473023, lng: -122.62450821697712 }});
zone_298.setMap(map);
zone_298.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_298.label;var label=zone_298.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_298.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Nisqually
//################################################
var loc_297=[{lat:46.99557406127217,lng:-122.62450218200684},{lat:46.995855790235524,lng:-122.65858769416809},{lat:46.999660815139805,lng:-122.66389846801758},{lat:47.00760658945381,lng:-122.68630027770996},{lat:47.01180215458015,lng:-122.69143536686897},{lat:47.021751587028696,lng:-122.69085668027401},{lat:47.02453268941065,lng:-122.69578758627176},{lat:47.03897389849454,lng:-122.7039223909378},{lat:47.04251904584964,lng:-122.71660722792149},{lat:47.05406884332977,lng:-122.70507171750069},{lat:47.05430115234201,lng:-122.7139163017273},{lat:47.058633746973456,lng:-122.7111080288887},{lat:47.06766144332898,lng:-122.70798191428185},{lat:47.068160425166376,lng:-122.71274250000715},{lat:47.07833087208271,lng:-122.69070480018854},{lat:47.07615560087248,lng:-122.68636263906956},{lat:47.057843910694245,lng:-122.69033432006836},{lat:47.040299129381005,lng:-122.67677307128906},{lat:47.033853628269156,lng:-122.62576282024384}];
var zone_297=new google.maps.Polygon({paths: loc_297,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#880000',fillOpacity: 0.2,label: 'Nisqually',center: {lat: 46.99557406127217, lng: -122.62450218200684 }});
zone_297.setMap(map);
zone_297.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_297.label;var label=zone_297.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_297.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Yelm
//################################################
var loc_299=[{lat:46.99557772009938,lng:-122.62450754642487},{lat:46.96795375670559,lng:-122.63763427734375},{lat:46.937956747541584,lng:-122.63669013977051},{lat:46.928930920386854,lng:-122.61154174804688},{lat:46.92670353424042,lng:-122.57823944091797},{lat:46.93942183570541,lng:-122.56579399108887},{lat:47.002032873234036,lng:-122.55360670387745}];
var zone_299=new google.maps.Polygon({paths: loc_299,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Downtown Yelm',center: {lat: 46.99557772009938, lng: -122.62450754642487 }});
zone_299.setMap(map);
zone_299.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_299.label;var label=zone_299.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_299.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Roy
//################################################
var loc_300=[{lat:46.926706739838,lng:-122.57824212312698},{lat:46.8353009487,lng:-122.58338928222656},{lat:46.84140712700584,lng:-122.36091613769531},{lat:47.020059267441425,lng:-122.3531910404563},{lat:47.02017492470169,lng:-122.40606307983398},{lat:47.021229085651825,lng:-122.41584744304419},{lat:47.02591358730532,lng:-122.4264907836914},{lat:47.03176223771119,lng:-122.44313590228558},{lat:47.06720059462691,lng:-122.44468454271555},{lat:47.01069545539322,lng:-122.52133470028639},{lat:47.01174957488566,lng:-122.53884416073561},{lat:46.996060683094164,lng:-122.52571105957031},{lat:46.937605120417125,lng:-122.52622604370117},{lat:46.9125164282261,lng:-122.55420684814453},{lat:46.9125164282261,lng:-122.57205963134766}];
var zone_300=new google.maps.Polygon({paths: loc_300,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#b2a1c7',fillOpacity: 0.2,label: 'Roy',center: {lat: 46.926706739838, lng: -122.57824212312698 }});
zone_300.setMap(map);
zone_300.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_300.label;var label=zone_300.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_300.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Roy
//################################################
var loc_301=[{lat:46.92670605292426,lng:-122.57824245840311},{lat:46.91247978310949,lng:-122.57209181785583},{lat:46.91249993792672,lng:-122.55418539047241},{lat:46.93760580719109,lng:-122.52622235566378},{lat:46.99607348887174,lng:-122.52569228410721},{lat:47.011749803493146,lng:-122.53884214907885},{lat:47.002031729988666,lng:-122.55361072719097},{lat:46.93942275137298,lng:-122.56579600274563}];
var zone_301=new google.maps.Polygon({paths: loc_301,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#b2a1c7',fillOpacity: 0.2,label: 'Downtown Roy',center: {lat: 46.92670605292426, lng: -122.57824245840311 }});
zone_301.setMap(map);
zone_301.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_301.label;var label=zone_301.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_301.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Eatonville
//################################################
var loc_302=[{lat:46.84141033770434,lng:-122.3609221726656},{lat:46.822381746503375,lng:-122.30083465576172},{lat:46.839645800630784,lng:-122.2093391418457},{lat:46.93748791086251,lng:-122.19097137451172},{lat:46.9366383628474,lng:-122.35680263489485}];
var zone_302=new google.maps.Polygon({paths: loc_302,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#b2a1c7',fillOpacity: 0.2,label: 'Eatonville',center: {lat: 46.84141033770434, lng: -122.3609221726656 }});
zone_302.setMap(map);
zone_302.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_302.label;var label=zone_302.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_302.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: SouthEast Graham
//################################################
var loc_303=[{lat:47.02005972458522,lng:-122.35319372266531},{lat:46.936636760345806,lng:-122.35680397599936},{lat:46.9374828745087,lng:-122.19097405672073},{lat:46.99383609001889,lng:-122.15972900390625},{lat:47.027958356758134,lng:-122.14496545493603},{lat:47.04486292697003,lng:-122.19564780592918},{lat:47.05200131706812,lng:-122.19594955444336},{lat:47.05238371610062,lng:-122.22484767436981},{lat:47.05190857232569,lng:-122.22379624843597},{lat:47.05191588226199,lng:-122.22233712673187},{lat:47.05166003389565,lng:-122.2212427854538},{lat:47.05168561878752,lng:-122.21995532512665},{lat:47.05084496591685,lng:-122.21939742565155},{lat:47.04940120506773,lng:-122.21883416175842},{lat:47.048684792771795,lng:-122.21799731254578},{lat:47.047975681329554,lng:-122.21789002418518},{lat:47.04717883351164,lng:-122.21829771995544},{lat:47.04668171141208,lng:-122.22015380859375},{lat:47.04601643782436,lng:-122.21949934959412},{lat:47.044159476437585,lng:-122.21964955329895},{lat:47.041395847291156,lng:-122.22023963928223},{lat:47.040540409255534,lng:-122.21845865249634},{lat:47.03995548646394,lng:-122.2183084487915},{lat:47.038259174105335,lng:-122.21948862075806},{lat:47.03813487323424,lng:-122.25313425064087},{lat:47.032723848793054,lng:-122.25345611572266},{lat:46.99477277207476,lng:-122.23959445953369},{lat:46.99484594966893,lng:-122.31600522994995},{lat:47.00146079020153,lng:-122.31546878814697},{lat:47.00438744945428,lng:-122.32001781463623},{lat:47.006801822641,lng:-122.32141256332397},{lat:47.00909903399507,lng:-122.32411623001099},{lat:47.009428244088795,lng:-122.32642829418182},{lat:47.008663741978175,lng:-122.33157813549042},{lat:47.009358744349086,lng:-122.33446955680847},{lat:47.01124983659654,lng:-122.33592867851257},{lat:47.01398576643687,lng:-122.33661532402039},{lat:47.01596813069852,lng:-122.33901858329773},{lat:47.02116142980653,lng:-122.33879327774048}];
var zone_303=new google.maps.Polygon({paths: loc_303,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BBFF',fillOpacity: 0.2,label: 'SouthEast Graham',center: {lat: 47.02005972458522, lng: -122.35319372266531 }});
zone_303.setMap(map);
zone_303.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_303.label;var label=zone_303.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_303.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: West Yelm
//################################################
var loc_304=[{lat:46.946254111180515,lng:-122.77125388383865},{lat:46.90197626002191,lng:-122.72202730178833},{lat:46.909232926322225,lng:-122.71539688110352},{lat:46.9098779157865,lng:-122.68758773803711},{lat:46.91808619458964,lng:-122.6869010925293},{lat:46.91732405022374,lng:-122.64244079589844},{lat:46.92893389688941,lng:-122.61153738945723},{lat:46.93795949461938,lng:-122.63668611645699},{lat:46.96795284152607,lng:-122.63762824237347},{lat:46.995579549512904,lng:-122.62450151145458},{lat:46.99587225486929,lng:-122.65858501195908},{lat:46.99968642496636,lng:-122.66389310359955},{lat:47.00762487946771,lng:-122.6862895488739},{lat:47.00901124429404,lng:-122.68800616264343},{lat:47.00440756968172,lng:-122.69862502813339},{lat:46.99552649649542,lng:-122.70428717136383},{lat:46.987264218338964,lng:-122.71782159805298},{lat:46.98459828166969,lng:-122.73171007633209},{lat:46.98541802103311,lng:-122.75033801794052},{lat:46.98618834500497,lng:-122.75790989398956},{lat:46.98455802628786,lng:-122.76505529880524},{lat:46.98447042498287,lng:-122.76882883161306},{lat:46.97898602302735,lng:-122.76943802833557},{lat:46.97866943529322,lng:-122.76479244232178},{lat:46.97740855571823,lng:-122.76188760995865},{lat:46.97445479688532,lng:-122.76119157671928},{lat:46.97287399306562,lng:-122.76363775134087},{lat:46.96607577536927,lng:-122.76449874043465},{lat:46.962096744748244,lng:-122.7627794444561},{lat:46.95752518486349,lng:-122.7672466635704},{lat:46.953894065592465,lng:-122.76912923902273},{lat:46.9515493946379,lng:-122.76552602648735},{lat:46.94429296560422,lng:-122.76535838842392}];
var zone_304=new google.maps.Polygon({paths: loc_304,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'West Yelm',center: {lat: 46.946254111180515, lng: -122.77125388383865 }});
zone_304.setMap(map);
zone_304.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_304.label;var label=zone_304.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_304.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Rainier
//################################################
var loc_305=[{lat:46.90197877986818,lng:-122.72203031927347},{lat:46.87714956962451,lng:-122.70441055297852},{lat:46.87738425250182,lng:-122.67316818237305},{lat:46.89768043714358,lng:-122.6722240447998},{lat:46.902723961941376,lng:-122.66501426696777},{lat:46.90847065603954,lng:-122.66776084899902},{lat:46.90988387090875,lng:-122.68759310245514},{lat:46.909243920525846,lng:-122.7154129743576}];
var zone_305=new google.maps.Polygon({paths: loc_305,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Downtown Rainier',center: {lat: 46.90197877986818, lng: -122.72203031927347 }});
zone_305.setMap(map);
zone_305.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_305.label;var label=zone_305.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_305.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Rainier
//################################################
var loc_306=[{lat:46.87715209063743,lng:-122.70441256463528},{lat:46.84246389511563,lng:-122.70303726196289},{lat:46.8353009487,lng:-122.58338626474142},{lat:46.926706739838,lng:-122.57823809981346},{lat:46.928935499621495,lng:-122.61154677718878},{lat:46.91732588231453,lng:-122.64244247227907},{lat:46.918111843490315,lng:-122.68693327903748},{lat:46.90987745770014,lng:-122.68759712576866},{lat:46.908463326465,lng:-122.66778230667114},{lat:46.90272579453131,lng:-122.6650182902813},{lat:46.89768135352473,lng:-122.67223209142685},{lat:46.87740258705838,lng:-122.6731950044632}];
var zone_306=new google.maps.Polygon({paths: loc_306,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#00BB55',fillOpacity: 0.2,label: 'Rainier',center: {lat: 46.87715209063743, lng: -122.70441256463528 }});
zone_306.setMap(map);
zone_306.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_306.label;var label=zone_306.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_306.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Downtown Tenino
//################################################
var loc_307=[{lat:46.81985626692976,lng:-122.8831958770752},{lat:46.81832917521864,lng:-122.82036781311035},{lat:46.85866506991246,lng:-122.79573440551758},{lat:46.870519354271636,lng:-122.84500122070312},{lat:46.85983887819072,lng:-122.87006378173828},{lat:46.84610371505515,lng:-122.89538383483887}];
var zone_307=new google.maps.Polygon({paths: loc_307,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Downtown Tenino',center: {lat: 46.81985626692976, lng: -122.8831958770752 }});
zone_307.setMap(map);
zone_307.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_307.label;var label=zone_307.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_307.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Tenino
//################################################
var loc_308=[{lat:46.87051339477709,lng:-122.84500189125538},{lat:46.881227038604095,lng:-122.84646034240723},{lat:46.909819280701356,lng:-122.86096572875977},{lat:46.92529671632026,lng:-122.8597640991211},{lat:46.92177950987856,lng:-122.8048324584961},{lat:46.89891203930481,lng:-122.75436401367188},{lat:46.886066797403835,lng:-122.74449348449707},{lat:46.87715186145444,lng:-122.70440820604563},{lat:46.84247857230414,lng:-122.70290851593018},{lat:46.81833651710946,lng:-122.82043218612671},{lat:46.858659567625736,lng:-122.79574781656265}];
var zone_308=new google.maps.Polygon({paths: loc_308,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Tenino',center: {lat: 46.87051339477709, lng: -122.84500189125538 }});
zone_308.setMap(map);
zone_308.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_308.label;var label=zone_308.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_308.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: South Olympia
//################################################
var loc_309=[{lat:46.82226428496766,lng:-122.96241760253906},{lat:46.80804954491424,lng:-122.95555114746094},{lat:46.81997373372649,lng:-122.88311004638672},{lat:46.84609637695661,lng:-122.89531946182251},{lat:46.85983521007984,lng:-122.87005573511124},{lat:46.87051660373578,lng:-122.84499317407608},{lat:46.88123162191555,lng:-122.8464563190937},{lat:46.90982386156971,lng:-122.86095768213272},{lat:46.9252921367745,lng:-122.85975605249405},{lat:46.92176668630761,lng:-122.80483514070511},{lat:46.89890470842326,lng:-122.754385471344},{lat:46.886065422534344,lng:-122.7444951608777},{lat:46.87714979880749,lng:-122.70440820604563},{lat:46.9019819869451,lng:-122.72202797234058},{lat:46.94597578303657,lng:-122.77089178562164},{lat:46.95158601303149,lng:-122.86372035741806},{lat:46.95274497224301,lng:-122.97392427921295},{lat:46.94735459183965,lng:-123.00239324569702},{lat:47.00684937738064,lng:-122.99258977174759},{lat:46.99617776437492,lng:-123.035888671875},{lat:46.98212617904094,lng:-123.05854797363281},{lat:46.913220009605624,lng:-123.05665969848633},{lat:46.91239916376481,lng:-122.95228958129883},{lat:46.85995625760719,lng:-122.97306060791016},{lat:46.841994222966385,lng:-122.98370361328125},{lat:46.8420529322096,lng:-122.96061515808105}];
var zone_309=new google.maps.Polygon({paths: loc_309,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'South Olympia',center: {lat: 46.82226428496766, lng: -122.96241760253906 }});
zone_309.setMap(map);
zone_309.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_309.label;var label=zone_309.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_309.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Grand Mound
//################################################
var loc_310=[{lat:46.792978993284386,lng:-123.04524421691895},{lat:46.7834879617426,lng:-123.01168441772461},{lat:46.78748438952456,lng:-122.96499252319336},{lat:46.808055052385065,lng:-122.95554779469967},{lat:46.82226795564454,lng:-122.96240955591202},{lat:46.84205453753956,lng:-122.96061147004366},{lat:46.84199743362977,lng:-122.98369824886322},{lat:46.8451937831902,lng:-122.98179924488068},{lat:46.8455753693972,lng:-123.00447463989258},{lat:46.822102774937036,lng:-123.03995087742805},{lat:46.811691695830795,lng:-123.04121017456055},{lat:46.81145672579487,lng:-123.05022239685059}];
var zone_310=new google.maps.Polygon({paths: loc_310,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Grand Mound',center: {lat: 46.792978993284386, lng: -123.04524421691895 }});
zone_310.setMap(map);
zone_310.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_310.label;var label=zone_310.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_310.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Rochester
//################################################
var loc_311=[{lat:46.845571700311964,lng:-123.00447061657906},{lat:46.873570528566766,lng:-123.08841705322266},{lat:46.86699855299767,lng:-123.14128875732422},{lat:46.80675710949845,lng:-123.13905715942383},{lat:46.791950634179464,lng:-123.06970596313477},{lat:46.792993683986396,lng:-123.04517984390259},{lat:46.81145121867235,lng:-123.0502063035965},{lat:46.811688024431874,lng:-123.04119408130646},{lat:46.82210254551902,lng:-123.03994987159967}];
var zone_311=new google.maps.Polygon({paths: loc_311,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Rochester',center: {lat: 46.845571700311964, lng: -123.00447061657906 }});
zone_311.setMap(map);
zone_311.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_311.label;var label=zone_311.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_311.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Littlerock
//################################################
var loc_312=[{lat:46.84557078304061,lng:-123.00448268651962},{lat:46.84519309523185,lng:-122.98180025070906},{lat:46.85994158519416,lng:-122.97302305698395},{lat:46.912415654095184,lng:-122.95227080583572},{lat:46.91327131205325,lng:-123.05664896965027},{lat:46.91220127940456,lng:-123.06167006492615},{lat:46.89075947987671,lng:-123.08223724365234},{lat:46.87354852552694,lng:-123.08842778205872}];
var zone_312=new google.maps.Polygon({paths: loc_312,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#e36c09',fillOpacity: 0.2,label: 'Littlerock',center: {lat: 46.84557078304061, lng: -123.00448268651962 }});
zone_312.setMap(map);
zone_312.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_312.label;var label=zone_312.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_312.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: McCleary
//################################################
var loc_313=[{lat:47.04614803106044,lng:-123.31672668457031},{lat:47.040065159975796,lng:-123.24531555175781},{lat:47.052230208574706,lng:-123.15399169921875},{lat:47.03140757069519,lng:-123.12034606933594},{lat:47.032352734782236,lng:-123.08549076318741},{lat:47.093807279356454,lng:-123.0879020690918},{lat:47.100994119301625,lng:-123.07843923568726},{lat:47.12089893732652,lng:-123.13528060913086},{lat:47.097356998367914,lng:-123.22626113891602},{lat:47.08426715018989,lng:-123.23535919189453},{lat:47.08508535995386,lng:-123.27054977416992},{lat:47.0701218238331,lng:-123.299560546875},{lat:47.051996291495065,lng:-123.31809997558594}];
var zone_313=new google.maps.Polygon({paths: loc_313,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#FFCC00',fillOpacity: 0.2,label: 'McCleary',center: {lat: 47.04614803106044, lng: -123.31672668457031 }});
zone_313.setMap(map);
zone_313.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_313.label;var label=zone_313.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_313.center); infoWindow.open(map);});

//################################################
//		ZONE NAME: Squaxin
//################################################
var loc_314=[{lat:47.120897568487365,lng:-123.13528262078762},{lat:47.10097586128289,lng:-123.0784821510315},{lat:47.116518471778036,lng:-123.05734634399414},{lat:47.11955563289768,lng:-123.02129745483398},{lat:47.13835880864309,lng:-123.01185607910156},{lat:47.15505419204604,lng:-123.01322937011719},{lat:47.154587259602074,lng:-123.04893493652344},{lat:47.14408019491866,lng:-123.07193756103516},{lat:47.142912615071396,lng:-123.10163497924805}];
var zone_314=new google.maps.Polygon({paths: loc_314,strokeColor: '#000000',strokeOpacity: 0.4,strokeWeight: 1,fillColor: '#99DD55',fillOpacity: 0.2,label: 'Squaxin',center: {lat: 47.120897568487365, lng: -123.13528262078762 }});
zone_314.setMap(map);
zone_314.addListener('click', function(event){infoWindow=new google.maps.InfoWindow;var infodata=zone_314.label;var label=zone_314.label;var contentString='<div id="content">'+ label + '</div>';infoWindow.setContent(contentString);infoWindow.setPosition(zone_314.center); infoWindow.open(map);});




  
  

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
