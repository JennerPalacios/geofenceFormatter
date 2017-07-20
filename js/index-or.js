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
	setTimeout(function(){ x.style.display="none"; }, 3000);
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
  zoom: 12,
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
    strokeWeight: 1,
    strokeColor: '#ee9900',
    clickable: false,
    zIndex: 1,
    editable: false
  },
  polygonOptions: {
    editable: false
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

  
  
  
  



var l01 = [
	{lat: 47.99255680507467, lng: -122.21383452415466},
	{lat: 47.992389869147, lng: -122.20122814178467},
	{lat: 48.0016207946144, lng: -122.20099478960037},
	{lat: 48.0036056855108, lng: -122.20021963119507},
	{lat: 48.01165932339874, lng: -122.19007015228271},
	{lat: 48.01631004939964, lng: -122.18762397766113},
	{lat: 48.01831949257984, lng: -122.19247341156006},
	{lat: 48.019812171101385, lng: -122.20448970794678},
	{lat: 48.018463021238745, lng: -122.20338463783264},
	{lat: 48.01666170760967, lng: -122.20675349235535},
	{lat: 48.009890071354235, lng: -122.21324980258942},
	{lat: 48.00796284539459, lng: -122.21411347389221},
	{lat: 48.004998293928836, lng: -122.21425294876099},
	{lat: 48.00284475987267, lng: -122.21397399902344},
	{lat: 47.997417455283504, lng: -122.21373796463013}
	];
var l02 = [
	{lat: 48.019822935452986, lng: -122.20450043678284},
	{lat: 48.01846660945011, lng: -122.20338463783264},
	{lat: 48.01666350177807, lng: -122.20675349235535},
	{lat: 48.009890519955235, lng: -122.21325047314167},
	{lat: 48.00796306970349, lng: -122.21411380916834},
	{lat: 48.005000088503046, lng: -122.21425294876099},
	{lat: 48.00284610585952, lng: -122.21397466957569},
	{lat: 47.99741610915501, lng: -122.21373829990625},
	{lat: 47.992559497585226, lng: -122.21383452415466},
	{lat: 47.98962008994587, lng: -122.21423149108887},
	{lat: 47.98847120725541, lng: -122.21367359161377},
	{lat: 47.9820657175089, lng: -122.21425294876099},
	{lat: 47.98337273175977, lng: -122.2212266921997},
	{lat: 47.999657364467666, lng: -122.22564697265625},
	{lat: 48.00703688999151, lng: -122.22375869750977},
	{lat: 48.018463021238745, lng: -122.21654891967773}
	];
var l03 = [
	{lat: 47.99239704919802, lng: -122.2012335062027},
	{lat: 47.99214754183944, lng: -122.17936277389526},
	{lat: 47.99534976049116, lng: -122.18054294586182},
	{lat: 48.0030170459058, lng: -122.17663764953613},
	{lat: 48.01168803287057, lng: -122.1795129776001},
	{lat: 48.01630960085447, lng: -122.18762330710888},
	{lat: 48.011660220569986, lng: -122.19007015228271},
	{lat: 48.003606582822115, lng: -122.20021963119507},
	{lat: 48.0016207946144, lng: -122.20099478960037}
	];
var l04 = [
	{lat: 47.992393459172646, lng: -122.2012335062027},
	{lat: 47.97667932059547, lng: -122.2014856338501},
	{lat: 47.97671523176901, lng: -122.19046711921692},
	{lat: 47.979509044508035, lng: -122.18940496444702},
	{lat: 47.98467971291763, lng: -122.18356847763062},
	{lat: 47.989892945826455, lng: -122.18294620513916},
	{lat: 47.99216908209062, lng: -122.18104183673859}
	];
var l05 = [
	{lat: 47.97671523176901, lng: -122.19046711921692},
	{lat: 47.976718822884976, lng: -122.18568205833435},
	{lat: 47.979221769966045, lng: -122.18180894851685},
	{lat: 47.98008358879643, lng: -122.17554330825806},
	{lat: 47.983688708259656, lng: -122.16796875},
	{lat: 47.98864354128941, lng: -122.1724534034729},
	{lat: 47.992149336860734, lng: -122.17936545610428},
	{lat: 47.99216683831489, lng: -122.1810445189476},
	{lat: 47.989892945826455, lng: -122.18294687569141},
	{lat: 47.98467791763655, lng: -122.18356981873512},
	{lat: 47.979509044508035, lng: -122.18940529972315}
	];
var l06 = [
	{lat: 47.99239166415985, lng: -122.20123015344143},
	{lat: 47.99255680507467, lng: -122.21383418887854},
	{lat: 47.98962053872316, lng: -122.21423149108887},
	{lat: 47.98847143164905, lng: -122.21367359161377},
	{lat: 47.982065941930394, lng: -122.21425261348486},
	{lat: 47.976435123952946, lng: -122.21422880887985},
	{lat: 47.97667954504037, lng: -122.20148496329784}
	];
var l07 = [
	{lat: 47.97667954504037, lng: -122.20148529857397},
	{lat: 47.976434899506984, lng: -122.21422914415598},
	{lat: 47.98206616635188, lng: -122.21425261348486},
	{lat: 47.98337295617559, lng: -122.22122702747583},
	{lat: 47.96191052921869, lng: -122.24581718444824},
	{lat: 47.957653661192865, lng: -122.24103212356567},
	{lat: 47.95674656170277, lng: -122.22976416349411},
	{lat: 47.959812673537854, lng: -122.21092700958252},
	{lat: 47.963245892120526, lng: -122.21077546477318},
	{lat: 47.963598810106134, lng: -122.20454335212708},
	{lat: 47.96442497000723, lng: -122.20089554786682}
	];
var l08 = [
	{lat: 47.9644251945054, lng: -122.2008965536952},
	{lat: 47.964187001390606, lng: -122.19747170805931},
	{lat: 47.96460456823724, lng: -122.18878269195557},
	{lat: 47.96698957352149, lng: -122.18890070915222},
	{lat: 47.97208248416854, lng: -122.18740940093994},
	{lat: 47.975558879434246, lng: -122.18719482421875},
	{lat: 47.976720618442904, lng: -122.18568474054337},
	{lat: 47.97671568065853, lng: -122.19046778976917},
	{lat: 47.9766799939302, lng: -122.20148529857397}
	];
var l09 = [
	{lat: 47.9644251945054, lng: -122.20089621841908},
	{lat: 47.964187674888215, lng: -122.19747237861156},
	{lat: 47.96460411924246, lng: -122.18878202140331},
	{lat: 47.96281574200239, lng: -122.18798875808716},
	{lat: 47.960660447392144, lng: -122.18631505966187},
	{lat: 47.95731237810493, lng: -122.18687295913696},
	{lat: 47.951362912859835, lng: -122.190842628479},
	{lat: 47.949120907682776, lng: -122.19152927398682},
	{lat: 47.947856143904566, lng: -122.1902847290039},
	{lat: 47.94791363383868, lng: -122.17981338500977},
	{lat: 47.94582598960648, lng: -122.17975974082947},
	{lat: 47.94568585211989, lng: -122.19987630844116}
	];
var l10 = [
	{lat: 47.945686076699495, lng: -122.19987630844116},
	{lat: 47.936207049853984, lng: -122.1995360031724},
	{lat: 47.93621131764884, lng: -122.21903398633003},
	{lat: 47.94364977327548, lng: -122.21701629459858},
	{lat: 47.950576066351466, lng: -122.21399813890457},
	{lat: 47.9559041124676, lng: -122.2128877043724},
	{lat: 47.959813122574324, lng: -122.21092667430639},
	{lat: 47.96324611662385, lng: -122.21077512949705},
	{lat: 47.96359925910967, lng: -122.20454335212708},
	{lat: 47.96442474550905, lng: -122.20089621841908}
	];
var l11 = [
	{lat: 47.9210480911497, lng: -122.20761179924011},
	{lat: 47.919477058319856, lng: -122.18024253845215},
	{lat: 47.9261922606358, lng: -122.17867612838745},
	{lat: 47.93552127802976, lng: -122.18024253845215},
	{lat: 47.945828684554435, lng: -122.17976108193398},
	{lat: 47.945685627540264, lng: -122.19987563788891},
	{lat: 47.93620749909558, lng: -122.1995360031724}
	];
var l12 = [
	{lat: 47.93621176689039, lng: -122.21903499215841},
	{lat: 47.93645750142994, lng: -122.23180800676346},
	{lat: 47.93732003389691, lng: -122.23487377166748},
	{lat: 47.94437788392301, lng: -122.24303305149078},
	{lat: 47.95368026790498, lng: -122.24744528532028},
	{lat: 47.95696031529409, lng: -122.24753379821777},
	{lat: 47.960360495097625, lng: -122.24407643079758},
	{lat: 47.95765388572048, lng: -122.2410324588418},
	{lat: 47.95674656170277, lng: -122.22976449877024},
	{lat: 47.959813122574324, lng: -122.21092734485865},
	{lat: 47.955904561538006, lng: -122.21288803964853},
	{lat: 47.95057629090985, lng: -122.21399813890457},
	{lat: 47.94364954868703, lng: -122.2170166298747}
	];
var l13 = [
	{lat: 47.94363764549741, lng: -122.25320935249329},
	{lat: 47.944378782264174, lng: -122.24303171038628},
	{lat: 47.953682962443374, lng: -122.24744528532028},
	{lat: 47.95695986623285, lng: -122.2475341334939},
	{lat: 47.960361617676824, lng: -122.24407508969307},
	{lat: 47.961910080200504, lng: -122.24581718444824},
	{lat: 47.9592666423338, lng: -122.26004362106323},
	{lat: 47.95713634699937, lng: -122.25866764783859},
	{lat: 47.95550533639803, lng: -122.2593355178833},
	{lat: 47.9484310403679, lng: -122.25779056549072},
	{lat: 47.94248055254846, lng: -122.25682497024536}
	];
var l14 = [
	{lat: 47.92349082660848, lng: -122.24043667316437},
	{lat: 47.92459082874943, lng: -122.24045544862747},
	{lat: 47.926230902880114, lng: -122.24119439721107},
	{lat: 47.9279401193186, lng: -122.24313095211983},
	{lat: 47.92980563493529, lng: -122.24749088287354},
	{lat: 47.94248100173552, lng: -122.25682564079762},
	{lat: 47.9555057854719, lng: -122.2593355178833},
	{lat: 47.957136571529226, lng: -122.25866697728634},
	{lat: 47.9592666423338, lng: -122.26004295051098},
	{lat: 47.957398597203145, lng: -122.27757453918457},
	{lat: 47.95406468729688, lng: -122.2884750366211},
	{lat: 47.9519090275941, lng: -122.28873252868652},
	{lat: 47.94449287146505, lng: -122.28233814239502},
	{lat: 47.922072652074874, lng: -122.2783899307251}
	];
var l15 = [
	{lat: 47.94995448506888, lng: -122.30817317962646},
	{lat: 47.9547544794095, lng: -122.29429006576538},
	{lat: 47.95406491184007, lng: -122.28847570717335},
	{lat: 47.951909925804365, lng: -122.28873319923878},
	{lat: 47.93834067872843, lng: -122.30013728141785},
	{lat: 47.939677549224534, lng: -122.31164932250977},
	{lat: 47.94710876894193, lng: -122.31074810028076}
	];
var l16 = [
	{lat: 47.92349801624089, lng: -122.2404420375824},
	{lat: 47.9245926261194, lng: -122.24045813083649},
	{lat: 47.92623359884958, lng: -122.2411984205246},
	{lat: 47.92794101794539, lng: -122.24313229322433},
	{lat: 47.929806533529664, lng: -122.24749356508255},
	{lat: 47.94248100173552, lng: -122.25682497024536},
	{lat: 47.94363809467443, lng: -122.25320801138878},
	{lat: 47.944378557678895, lng: -122.2430320456624},
	{lat: 47.93732272928833, lng: -122.2348764538765},
	{lat: 47.93645750142994, lng: -122.23180767148733},
	{lat: 47.93621131764884, lng: -122.21903465688229},
	{lat: 47.936207049853984, lng: -122.1995360031724},
	{lat: 47.92104831583632, lng: -122.20761146396399}
	];
var l17 = [
	{lat: 47.86927597800497, lng: -122.27725267410278},
	{lat: 47.88943581293232, lng: -122.25840345025063},
	{lat: 47.90772335662865, lng: -122.2715274989605},
	{lat: 47.92231710571832, lng: -122.27194458246231},
	{lat: 47.92207355080363, lng: -122.2783899307251},
	{lat: 47.944493769804225, lng: -122.28233814239502},
	{lat: 47.951910374909495, lng: -122.28873252868652},
	{lat: 47.93834067872843, lng: -122.3001379519701},
	{lat: 47.93967777383027, lng: -122.31164932250977},
	{lat: 47.87991589402529, lng: -122.33782768249512},
	{lat: 47.87971441438967, lng: -122.32248544692993},
	{lat: 47.8753968053319, lng: -122.29028820991516},
	{lat: 47.87336740478141, lng: -122.27656602859497}
	];
var l18 = [
	{lat: 47.88943648740406, lng: -122.25840345025063},
	{lat: 47.90733140072808, lng: -122.24168658256531},
	{lat: 47.90772380611767, lng: -122.27152682840824}
	];
var l19 = [
	{lat: 47.90733162547427, lng: -122.24168792366982},
	{lat: 47.92253077702851, lng: -122.22748328000307},
	{lat: 47.9234982409169, lng: -122.24043902009726},
	{lat: 47.92231575763152, lng: -122.27194625884295},
	{lat: 47.90772380611767, lng: -122.27152850478888}
	];
var l20 = [
	{lat: 47.88943693705184, lng: -122.258404456079},
	{lat: 47.88200440015969, lng: -122.25203856825829},
	{lat: 47.88191265876422, lng: -122.23367348313332},
	{lat: 47.89468653383448, lng: -122.21717119216919},
	{lat: 47.92093844395395, lng: -122.20569670200348},
	{lat: 47.92253077702851, lng: -122.2274836152792}
	];
	/*
var l21 = [
	{lat: 47.92324458109479, lng: -122.22702026367188},
	{lat: 47.930146201090984, lng: -122.22066879272461},
	{lat: 47.93635687170487, lng: -122.21895217895508},
	{lat: 47.93635687170487, lng: -122.23285675048828},
	{lat: 47.936931896067414, lng: -122.23474502563477},
	{lat: 47.938656930784596, lng: -122.2364616394043},
	{lat: 47.93405671030359, lng: -122.24367141723633},
	{lat: 47.93026122028869, lng: -122.24710464477539},
	{lat: 47.92911101680044, lng: -122.24641799926758},
	{lat: 47.92738566360356, lng: -122.24178314208984},
	{lat: 47.9240498175478, lng: -122.24040985107422}
	];
var l22 = [
	{lat: 47.941359369456585, lng: -122.19715118408203},
	{lat: 47.94147436371335, lng: -122.21783638000488},
	{lat: 47.936126860169225, lng: -122.21903800964355},
	{lat: 47.93020371072182, lng: -122.22058296203613},
	{lat: 47.92318706372565, lng: -122.22736358642578},
	{lat: 47.921634070583856, lng: -122.21234321594238},
	{lat: 47.92008103081933, lng: -122.20839500427246},
	{lat: 47.919505819074956, lng: -122.20890998840332},
	{lat: 47.91967838326981, lng: -122.20830917358398},
	{lat: 47.91858546698133, lng: -122.20659255981445},
	{lat: 47.92606285383993, lng: -122.20315933227539},
	{lat: 47.92732815083907, lng: -122.20170021057129},
	{lat: 47.929513590931165, lng: -122.19792366027832},
	{lat: 47.93026122028869, lng: -122.1968936920166},
	{lat: 47.9315839226757, lng: -122.19603538513184},
	{lat: 47.933424147979885, lng: -122.1957778930664},
	{lat: 47.939461927289166, lng: -122.19749450683594}
	];
var l23 = [
	{lat: 47.94147436371335, lng: -122.21783638000488},
	{lat: 47.9451540448678, lng: -122.21637725830078},
	{lat: 47.949465837887026, lng: -122.21457481384277},
	{lat: 47.95412217032464, lng: -122.2130298614502},
	{lat: 47.956708840388984, lng: -122.21268653869629},
	{lat: 47.96010005606408, lng: -122.21071243286133},
	{lat: 47.96320368548244, lng: -122.2107982635498},
	{lat: 47.963146212558144, lng: -122.20770835876465},
	{lat: 47.964353130540374, lng: -122.20084190368652},
	{lat: 47.964295658894954, lng: -122.19938278198242},
	{lat: 47.95222519664452, lng: -122.19912528991699},
	{lat: 47.94889095293431, lng: -122.19878196716309},
	{lat: 47.942681787965334, lng: -122.19706535339355},
	{lat: 47.941359369456585, lng: -122.19723701477051}
	];
var l24 = [
	{lat: 47.94147436371335, lng: -122.2177505493164},
	{lat: 47.94147436371335, lng: -122.21920967102051},
	{lat: 47.94538401624287, lng: -122.21826553344727},
	{lat: 47.946303891511285, lng: -122.21981048583984},
	{lat: 47.947856143904566, lng: -122.22084045410156},
	{lat: 47.94963830212584, lng: -122.2232437133789},
	{lat: 47.951822799335524, lng: -122.22384452819824},
	{lat: 47.9547544794095, lng: -122.22676277160645},
	{lat: 47.96337610387173, lng: -122.22616195678711},
	{lat: 47.96211168898589, lng: -122.22109794616699},
	{lat: 47.96211168898589, lng: -122.21963882446289},
	{lat: 47.961421995094305, lng: -122.2177505493164},
	{lat: 47.96170936866815, lng: -122.21500396728516},
	{lat: 47.96326115834284, lng: -122.21431732177734},
	{lat: 47.963146212558144, lng: -122.2107982635498},
	{lat: 47.96010005606408, lng: -122.2107982635498},
	{lat: 47.95642143899872, lng: -122.21277236938477},
	{lat: 47.954179653288456, lng: -122.21294403076172}
	];
var l25 = [
	{lat: 47.938656930784596, lng: -122.23654747009277},
	{lat: 47.943889184015546, lng: -122.24238395690918},
	{lat: 47.944636605532914, lng: -122.23989486694336},
	{lat: 47.95084553568268, lng: -122.23860740661621},
	{lat: 47.95153537076782, lng: -122.23920822143555},
	{lat: 47.95527181745099, lng: -122.23706245422363},
	{lat: 47.964295658894954, lng: -122.23980903625488},
	{lat: 47.9660772501689, lng: -122.23749160766602},
	{lat: 47.96337610387173, lng: -122.22616195678711},
	{lat: 47.954639514696865, lng: -122.22676277160645},
	{lat: 47.951822799335524, lng: -122.22384452819824},
	{lat: 47.94963830212584, lng: -122.2232437133789},
	{lat: 47.947856143904566, lng: -122.22075462341309},
	{lat: 47.94613141614546, lng: -122.21972465515137},
	{lat: 47.94544150892677, lng: -122.21843719482422},
	{lat: 47.94141686661692, lng: -122.21920967102051},
	{lat: 47.94153186074577, lng: -122.2177505493164},
	{lat: 47.93635687170487, lng: -122.21903800964355},
	{lat: 47.93635687170487, lng: -122.23259925842285},
	{lat: 47.936931896067414, lng: -122.23474502563477}
	];
var l26 = [
	{lat: 47.958663127446556, lng: -122.26066589355469},
	{lat: 47.958375736927124, lng: -122.25963592529297},
	{lat: 47.94204933116007, lng: -122.25714683532715},
	{lat: 47.94360171132348, lng: -122.25345611572266},
	{lat: 47.943544216593224, lng: -122.244873046875},
	{lat: 47.9444066308325, lng: -122.24289894104004},
	{lat: 47.94377419513057, lng: -122.24238395690918},
	{lat: 47.94480908588676, lng: -122.23980903625488},
	{lat: 47.95096050883636, lng: -122.23852157592773},
	{lat: 47.951477884862456, lng: -122.23929405212402},
	{lat: 47.95515685388941, lng: -122.23706245422363},
	{lat: 47.96452554509298, lng: -122.23980903625488},
	{lat: 47.95998510324542, lng: -122.24839210510254},
	{lat: 47.958835560990885, lng: -122.25216865539551},
	{lat: 47.95854817143061, lng: -122.25817680358887},
	{lat: 47.95929538096209, lng: -122.25920677185059}
	];
var l27 = [
	{lat: 47.958663127446556, lng: -122.26075172424316},
	{lat: 47.957283638373575, lng: -122.26727485656738},
	{lat: 47.95659388002471, lng: -122.27680206298828},
	{lat: 47.9554442623138, lng: -122.2807502746582},
	{lat: 47.95245513655713, lng: -122.28813171386719},
	{lat: 47.95257010612971, lng: -122.29010581970215},
	{lat: 47.93721940585052, lng: -122.28323936462402},
	{lat: 47.93497678714276, lng: -122.27096557617188},
	{lat: 47.93307911072358, lng: -122.26881980895996},
	{lat: 47.93204398514112, lng: -122.26641654968262},
	{lat: 47.933309135816906, lng: -122.2642707824707},
	{lat: 47.93296409779321, lng: -122.26049423217773},
	{lat: 47.94216432388204, lng: -122.25714683532715},
	{lat: 47.958030866193575, lng: -122.25955009460449}
	];
var l28 = [
	{lat: 47.9444066308325, lng: -122.24307060241699},
	{lat: 47.94348672179899, lng: -122.24478721618652},
	{lat: 47.94360171132348, lng: -122.2532844543457},
	{lat: 47.94204933116007, lng: -122.25723266601562},
	{lat: 47.93284908460702, lng: -122.26049423217773},
	{lat: 47.92278444035087, lng: -122.26040840148926},
	{lat: 47.92278444035087, lng: -122.25723266601562},
	{lat: 47.923704717745686, lng: -122.24710464477539},
	{lat: 47.92324458109479, lng: -122.22796440124512},
	{lat: 47.9240498175478, lng: -122.2404956817627},
	{lat: 47.927270638010604, lng: -122.24169731140137},
	{lat: 47.928995995044666, lng: -122.24624633789062},
	{lat: 47.93026122028869, lng: -122.24701881408691},
	{lat: 47.933999204957544, lng: -122.2437572479248},
	{lat: 47.93871443095058, lng: -122.2364616394043}
	];
	*/
	// Construct the polygon.
	var cl01 = new google.maps.Polygon({
	  paths: l01,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Nortwest Everett',
	  center: {lat: 47.99255680507467, lng: -122.21383452415466}
	});
	var cl02 = new google.maps.Polygon({
	  paths: l02,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Marina',
	  center: {lat: 48.019822935452986, lng: -122.20450043678284}
	});
	var cl03 = new google.maps.Polygon({
	  paths: l03,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Delta',
	  center: {lat: 47.99239704919802, lng: -122.2012335062027}
	});
	var cl04 = new google.maps.Polygon({
	  paths: l04,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Riverside',
	  center: {lat: 47.992393459172646, lng: -122.2012335062027}
	});
	var cl05 = new google.maps.Polygon({
	  paths: l05,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Riverside East',
	  center: {lat: 47.97671523176901, lng: -122.19046711921692}
	});
	var cl06 = new google.maps.Polygon({
	  paths: l06,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Bayside',
	  center: {lat: 47.99239166415985, lng: -122.20123015344143}
	});
	var cl07 = new google.maps.Polygon({
	  paths: l07,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Port Gardner',
	  center: {lat: 47.97667954504037, lng: -122.20148529857397}
	});
	var cl08 = new google.maps.Polygon({
	  paths: l08,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Port Gardner East',
	  center: {lat: 47.9644251945054, lng: -122.2008965536952}
	});
	var cl09 = new google.maps.Polygon({
	  paths: l09,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Lowell North',
	  center: {lat: 47.9644251945054, lng: -122.20089621841908}
	});
	var cl10 = new google.maps.Polygon({
	  paths: l10,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Glacier View',
	  center: {lat: 47.945686076699495, lng: -122.19987630844116}
	});
	var cl11 = new google.maps.Polygon({
	  paths: l11,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Valley View',
	  center: {lat: 47.9210480911497, lng: -122.20761179924011}
	});
	var cl12 = new google.maps.Polygon({
	  paths: l12,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'View Ridge Madison',
	  center: {lat: 47.93621176689039, lng: -122.21903499215841}
	});
	var cl13 = new google.maps.Polygon({
	  paths: l13,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Glenwood',
	  center: {lat: 47.94363764549741, lng: -122.25320935249329}
	});
	var cl14 = new google.maps.Polygon({
	  paths: l14,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Boulevard Bluffs',
	  center: {lat: 47.92349082660848, lng: -122.24043667316437}
	});
	var cl15 = new google.maps.Polygon({
	  paths: l15,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Downtown Mukilteo',
	  center: {lat: 47.94995448506888, lng: -122.30817317962646}
	});
	var cl16 = new google.maps.Polygon({
	  paths: l16,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Evergreen',
	  center: {lat: 47.92349801624089, lng: -122.2404420375824}
	});
	var cl17 = new google.maps.Polygon({
	  paths: l17,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Mukilteo',
	  center: {lat: 47.86927597800497, lng: -122.27725267410278}
	});
	var cl18 = new google.maps.Polygon({
	  paths: l18,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Holly',
	  center: {lat: 47.88943648740406, lng: -122.25840345025063}
	});
	var cl19 = new google.maps.Polygon({
	  paths: l19,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Westmot',
	  center: {lat: 47.90733162547427, lng: -122.24168792366982}
	});
	var cl20 = new google.maps.Polygon({
	  paths: l20,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Everett Mall South',
	  center: {lat: 47.88943693705184, lng: -122.258404456079}
	});
	/*
	var cl21 = new google.maps.Polygon({
	  paths: l21,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Evergreen',
	  center: {lat: 47.92324458109479, lng: -122.22702026367188}
	});
	var cl22 = new google.maps.Polygon({
	  paths: l22,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Pinehurst',
	  center: {lat: 47.941359369456585, lng: -122.19715118408203}
	});
	var cl23 = new google.maps.Polygon({
	  paths: l23,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Glacier View',
	  center: {lat: 47.94147436371335, lng: -122.21783638000488}
	});
	var cl24 = new google.maps.Polygon({
	  paths: l24,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'South Forest Park',
	  center: {lat: 47.94147436371335, lng: -122.2177505493164}
	});
	var cl25 = new google.maps.Polygon({
	  paths: l25,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'View Ridge Madison',
	  center: {lat: 47.938656930784596, lng: -122.23654747009277}
	});
	var cl26 = new google.maps.Polygon({
	  paths: l26,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Glenwood',
	  center: {lat: 47.958663127446556, lng: -122.26066589355469}
	});
	var cl27 = new google.maps.Polygon({
	  paths: l27,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Boulevard Bluffs',
	  center: {lat: 47.958663127446556, lng: -122.26075172424316}
	});
	var cl28 = new google.maps.Polygon({
	  paths: l28,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 1,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  label: 'Hardeson',
	  center: {lat: 47.9444066308325, lng: -122.24307060241699}
	});
	*/
	cl01.setMap(map);cl02.setMap(map);cl03.setMap(map);cl04.setMap(map);cl05.setMap(map);cl06.setMap(map);
	cl07.setMap(map);cl08.setMap(map);cl09.setMap(map);cl10.setMap(map);cl11.setMap(map);cl12.setMap(map);
	cl13.setMap(map);cl14.setMap(map);cl15.setMap(map);cl16.setMap(map);cl17.setMap(map);cl18.setMap(map);
	cl19.setMap(map);cl20.setMap(map);/*cl21.setMap(map);cl22.setMap(map);cl23.setMap(map);cl24.setMap(map);
	cl25.setMap(map);cl26.setMap(map);cl27.setMap(map);cl28.setMap(map); */
	cl01.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl01.label; console.log(infodata);
		var label = cl01.label;
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl01.center);
		infoWindow.open(map);
        });
	cl02.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl02.label; console.log(infodata);
		var label = cl02.label;
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl02.center);
		infoWindow.open(map);
        });
	cl03.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl03.label; console.log(infodata);
		var label = cl03.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl03.center);
		infoWindow.open(map);
        });
	cl04.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl04.label; console.log(infodata);
		var label = cl04.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl04.center);
		infoWindow.open(map);
        });
	cl05.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl05.label; console.log(infodata);
		var label = cl05.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl05.center);
		infoWindow.open(map);
        });
	cl06.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl06.label; console.log(infodata);
		var label = cl06.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl06.center);
		infoWindow.open(map);
        });
	cl07.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl07.label; console.log(infodata);
		var label = cl07.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl07.center);
		infoWindow.open(map);
        });
	cl08.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl08.label; console.log(infodata);
		var label = cl08.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl08.center);
		infoWindow.open(map);
        });
	cl09.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl09.label; console.log(infodata);
		var label = cl09.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl09.center);
		infoWindow.open(map);
        });
	cl10.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl10.label; console.log(infodata);
		var label = cl10.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl10.center);
		infoWindow.open(map);
        });
	cl11.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl11.label; console.log(infodata);
		var label = cl11.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl11.center);
		infoWindow.open(map);
        });
	cl12.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl12.label; console.log(infodata);
		var label = cl12.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl12.center);
		infoWindow.open(map);
        });
	cl13.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl13.label; console.log(infodata);
		var label = cl13.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl13.center);
		infoWindow.open(map);
        });
	cl14.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl14.label; console.log(infodata);
		var label = cl14.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl14.center);
		infoWindow.open(map);
        });
	cl15.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl15.label; console.log(infodata);
		var label = cl15.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl15.center);
		infoWindow.open(map);
        });
	cl16.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl16.label; console.log(infodata);
		var label = cl16.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl16.center);
		infoWindow.open(map);
        });
	cl17.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl17.label; console.log(infodata);
		var label = cl17.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl17.center);
		infoWindow.open(map);
        });
	cl18.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl18.label; console.log(infodata);
		var label = cl18.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl18.center);
		infoWindow.open(map);
        });
	cl19.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl19.label; console.log(infodata);
		var label = cl19.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl19.center);
		infoWindow.open(map);
        }); 
	cl20.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl20.label; console.log(infodata);
		var label = cl20.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl20.center);
		infoWindow.open(map);
        });
		/*
	cl21.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl21.label; console.log(infodata);
		var label = cl21.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl21.center);
		infoWindow.open(map);
        });
	cl22.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl22.label; console.log(infodata);
		var label = cl22.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl22.center);
		infoWindow.open(map);
        });
	cl23.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl23.label; console.log(infodata);
		var label = cl23.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl23.center);
		infoWindow.open(map);
        });
	cl24.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl24.label; console.log(infodata);
		var label = cl24.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl24.center);
		infoWindow.open(map);
        });
	cl25.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl25.label; console.log(infodata);
		var label = cl25.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl25.center);
		infoWindow.open(map);
        });
	cl26.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl26.label; console.log(infodata);
		var label = cl26.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl26.center);
		infoWindow.open(map);
        });
	cl27.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl27.label; console.log(infodata);
		var label = cl27.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl27.center);
		infoWindow.open(map);
        });
	cl28.addListener('click', function(event) {
		infoWindow = new google.maps.InfoWindow;
		var infodata = cl28.label; console.log(infodata);
		var label = cl28.label;				
		var contentString = '<div id="content">'+ label + '</div>';
		infoWindow.setContent(contentString);
		infoWindow.setPosition(cl28.center);
		infoWindow.open(map);
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