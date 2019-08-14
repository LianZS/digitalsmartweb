function city_list() {
	let request_datetime = Date.parse(new Date());
	let callback = "jsonp_" + request_datetime
	let url = "http://127.0.0.1:8000/traffic/api/trafficindex/city/list?"
	let city_href = "http://127.0.0.1:8020/DigitalSmart/traffic/traffic.html?cityCode="
	$.get(url, {
		"request_datetime": request_datetime,
		"callback": callback
	}, function(data) {
		citylist = data['data']['citylist']
		Liarray = ""
		ulArray = ""
		var j = 1
		for(let i = 0; i < citylist.length; i++) {

			city = citylist[i]
			cityname = city['cityname']
			pid = city['pid']
			href = city_href + pid
			li = "<li><a href=\"" + href + "\">" + cityname + "</a></li>"
			Liarray += li
			if(j % 10 == 0) {
				ulArray += "<ul class=\"itemlist\">" + Liarray + "</ul>"
				Liarray = ""

			}
			j += 1
		}
		ulArray += "<ul class=\"itemlist\">" + Liarray + "</ul>"

		ul = "<ul class=\"itemlist\">" + ulArray + "</ul>"
		$("#Citylist .row").append(ul)
	}, 'json')
}

function daily_traffic() {
	pid = getParams("cityCode")
	
	let ddate = new Date().format("yyyyMMdd");
	callback = "jsonp_" + Date.parse(new Date());

	let url = "http://127.0.0.1:8000/traffic/api/trafficindex/city/curve?"
	$.get(url, {
		"cityCode": pid,
		"type": "hour",
		"ddate": ddate,
		"callback": callback
	}, function(data) {
		indexList = data['data']['indexlist']
		city = data['data']['city']
		timeList = new Array()
		dataList = new Array()

		for(let i = 0; i < indexList.length; i++) {
			item = indexList[i]
			ttime = item['ttime'].slice(0,5)
			rate = item['rate']
			timeList[i] = ttime
			dataList[i] = rate
		}
		jsondata = {
			"Citytraffic": {
				"time": timeList,
				"data": dataList
			}
		}
		chart = new CityChart("realtime-traffic", city);
		chart.setData(jsondata)

	}, "json")
}
function road_traffic(){
		pid = getParams("cityCode")
	
	let request_datetime = Date.parse(new Date());
	let callback = "jsonp_" + request_datetime
	let url="http://127.0.0.1:8000/traffic/api/trafficindex/city/road?"
	$.get(url, {
		"cityCode":pid,
		"request_datetime": request_datetime,
		"callback": callback
}
function getParams(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

};
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}