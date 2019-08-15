function request(){
	let url ="http://127.0.0.1:8000/internet/api/app/appinfo?"
	appid = getParams("appid")
	$.get(url,{
		"appid":appId
	},function(data){
		
	},'json')
	
}

function getParams(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

};