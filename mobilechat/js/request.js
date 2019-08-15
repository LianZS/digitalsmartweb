function request() {
	let url = "http://127.0.0.1:8000/internet/api/app/appinfo?"
	appid = getParams("appid")
	$.get(url, {
		"appid": appid
	}, function(data) {
		sex_data = data['sex']
		ddate = new Array()
		bboy = new Array()
		ggirl = new Array()
		for(let i = 0; i < sex_data.length; i++) {
			sex = sex_data[i]
			ddate[i] = sex['ddate']
			bboy[i] = sex['boy']
			ggirl[i] = sex['girl']
			
		}
		draw_linechart("sex-chart",bboy,ggirl,ddate)

	}, 'json')

}

function getParams(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

};