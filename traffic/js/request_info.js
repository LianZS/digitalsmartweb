var up_date = 0
var cityname = ""

function city_list() {
	let url = "http://scenicmonitor.top/traffic/api/trafficindex/city/list?"
	let city_href = "http://127.0.0.1:8020/DigitalSmart/traffic/traffic.html?cityCode="
	//城市列表请求
	let request_datetime = Date.parse(new Date());
	let callback = "jsonp_" + request_datetime

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
	//城市交通
	let url = "http://scenicmonitor.top/traffic/api/trafficindex/city/curve?"

	pid = getParams("cityCode")

	let ddate = new Date().format("yyyyMMdd");
	callback = "jsonp_" + Date.parse(new Date());

	$.get(url, {
		"cityCode": pid,
		"type": "hour",
		"ddate": ddate,
		"callback": callback
	}, function(data) {
		indexList = data['data']['indexlist']
		city = data['data']['city']
		$("#cityname").text(city)
		timeList = new Array()
		dataList = new Array()

		for(let i = 0; i < indexList.length; i++) {
			item = indexList[i]
			ttime = item['ttime'].slice(0, 5)
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
		chart = new LineChart("realtime-traffic", city);
		chart.setData(jsondata)

	}, "json")
}

function road_traffic() {
	let url = "http://scenicmonitor.top/traffic/api/trafficindex/city/road?"

	//道路交通
	pid = getParams("cityCode")
	let request_datetime = Date.parse(new Date());
	let callback = "jsonp_" + request_datetime
	$.get(url, {
		"cityCode": pid,
		"request_datetime": request_datetime,
		"callback": callback
	}, function(data) {
		data = data['data']
		up_date = data['up_date']
		roadlist = data['roadlist']
		RoadNameList = new Array()
		SpeedList = new Array()
		dirList = new Array()
		rateList = new Array()
		for(let i = 0; i < roadlist.length; i++) {
			road = roadlist[i]
			roadname = road['roadname']
			speed = road['speed']
			direction = road['direction']
			roadid = road['roadid']
			road_rate = road['rate']
			RoadNameList[i] = roadname
			SpeedList[i] = speed
			dirList[i] = direction
			rateList[i] = road_rate

		}
		

		data = {

			"info": {

				"listRoadName": RoadNameList,
				"listSpeed": SpeedList,
				"dir": dirList,
				"rate": rateList,
			}
		}
		road_info_insert(data)

	}, 'json')
}

function year_traffic() {
	let url = "http://scenicmonitor.top/traffic/api/trafficindex/city/year?"
	$.get(url, {
		"cityCode": pid
	}, function(data) {
		YearList = data['data']['detail']['indexSet']
		year_deilt_dateList = new Array()
		year_dataList = new Array()
		for(let i = 0; i < YearList.length; i++) {
			item = YearList[i]
			tmp_date = item['tmp_date']
			year_rate = item['rate']
			year_deilt_dateList[i] = tmp_date
			year_dataList[i] = year_rate
		}

		yeardata = {
			"Yeartraffic": {
				"time": year_deilt_dateList,
				"data": year_dataList
			}
		}
		new LineChart("year-traffic", "").setData(yeardata)
	}, "json")
}

function Animate() {
	//城市导航按钮动画效果

	$("#btn").click(function() {
		$("#Citylist").slideToggle();

	});
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

function air_state_request() {
	let url = "http://scenicmonitor.top/traffic/api/airstate?"
	pid = getParams("cityCode")
	$.get(url, {
		"cityCode": pid
	}, function(data) {
		lasttime = data["lasttime"]
		data = data["data"]
		aqi = data['aqi']
		co = data['co']
		noo = data['no2']
		ooo = data["o3"]
		pmm = data["pm2"]
		pmmmm = data["pm10"]
		soo = data["so2"]
		$("#value1").text(aqi)
		$("#value2").text(pmm)
		$("#value3").text(pmmmm)
		$("#value4").text(co)
		$("#value5").text(noo)
		$("#value6").text(ooo)
		$("#value7").text(soo)
		$(".num").text(aqi)
		if(aqi <= 50) {
			$(".status").text("优")
		}
		if(aqi > 50 & aqi <= 100) {
			$(".status").text("良")
		}
		if(aqi > 100 & aqi <= 150) {
			$(".status").text("轻度")
		}
		if(aqi > 150 & aqi <= 200) {
			$(".status").text("中度")
		}
		if(aqi > 200 & aqi <= 300) {
			$(".status").text("重度")
		}
		if(aqi > 300) {
			$(".status").text("严重")
		}
		//		alert(cityname)

	})

}