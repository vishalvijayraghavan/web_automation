function apiGetCall(url){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, false ); // false for synchronous request
	xmlHttp.send( null );
	return JSON.parse(xmlHttp.responseText);
}

function apiPostCall(url, data){
	var http = new XMLHttpRequest();
	var url = 'get_data.php';
	var params = 'orem=ipsum&name=binny';
	http.open('POST', url, true);
	http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	http.send(params);
}

//Just to denote plugin is active
document.body.style.border = "1px solid red";

window.addEventListener('click', function(Event){
	console.log(Event);
	console.log(apiGetCall("http://dummy.restapiexample.com/api/v1/employees"));
});

window.addEventListener('scroll', function(Event){console.log(Event);});
window.addEventListener('keydown', function(Event){console.log(Event);});
window.addEventListener('dblclick', function(Event){console.log(Event);});
