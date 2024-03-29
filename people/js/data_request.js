function realtimeFlow(area_pid, dbegin, dend,range) {
	//人流热度
	let url = "http://scenicmonitor.top/attractions/api/getLocation_pn_percent_new"
	$.get(url, {
		pid: area_pid,
		date_begin: dbegin,
		date_end: dend,
		range:range,
		predict: true,
		sub_domain: ''

	}, function(data, state) {
		future_data = data['future_data'];//预测数据
		future_time = data['future_time'];//未来时间
		data = data['data'];//已经存在的数据
		timeList = new Array(data.length); //已过去的时间
		numList = new Array(data.length); //过去的人数
		for(let i = 0; i < data.length; i++) {
			timeList[i] = data[i][0];
			numList[i] = data[i][1];
		}
		
		data_json = {
			"data": numList,
			"time": timeList
		}
		let obj = new drawAreaChart(data_json,"时间","客流量","scence","red");

	}, 'json');

}

function SearchRate(area_pid,flag_id) {
	//关键词热度
	let url = "http://scenicmonitor.top/attractions/api/getLocation_search_rate"
	$.get(url, {
		pid: area_pid,
		type_flag:flag_id,
		sub_domain: ''

	}, function(data, state) {
		wechat = data["wechat"];
		sougou = data['sougou'];
		baidu = data['baidu'];

		//微信数据
		wechat_dateList = new Array(wechat.length); //时间
		wechat_numList = new Array(wechat.length); //搜索次数

		for(let i = 0; i < wechat.length; i++) {
			wechat_dateList[i] = wechat[i]['tmp_date'];
			wechat_numList[i] = wechat[i]['rate'];
		}
		//搜狗数据
		sougou_dateList = new Array(sougou.length); //时间
		sougou_numList = new Array(sougou.length); //搜索次数

		for(let i = 0; i < sougou.length; i++) {
			
			
			sougou_dateList[i] = sougou[i]['tmp_date'];
			sougou_numList[i] = sougou[i]['rate'];
		}
		//搜狗数据
		baidu_dateList = new Array(baidu.length); //时间
		baidu_numList = new Array(baidu.length); //搜索次数

		for(let i = 0; i < baidu.length; i++) {
			baidu_dateList[i] = baidu[i]['tmp_date'];
			baidu_numList[i] = baidu[i]['rate'];
		}
		let dataList = {
			"wechat": wechat_numList,
			"baidu": baidu_numList,
			"sougou": sougou_numList

		}
		
		if(wechat_dateList.length >= baidu_dateList.length && wechat_dateList.length >= sougou_dateList.length) {
			dateList = wechat_dateList
		}
		if(baidu_dateList.length >= wechat_dateList.length && baidu_dateList.length >= sougou_dateList.length) {
			dateList = baidu_dateList
		} else {
			dateList = sougou_dateList
		}
		json = {
			"data": dataList,
			"time": dateList
		}
		search = new LineChart("search-index");
		search.drawsearch(json);
	}, 'json');

}

function Geographic_bounds(area_pid,flag_id,lon,lat){
	//  地区地图范围
	let url = "http://scenicmonitor.top/attractions/api/getLocation_geographic_bounds"
	$.get(url, {
		pid: area_pid,
		type_flag:flag_id,
		sub_domain: ''

	}, function(data, state) {
		var bounds = data['bounds']
	

		new map(bounds,"container",lon,lat)
	}, 'json');
}

function People_Distribution_rate(area_pid,flag_id,lon,lat){
		//  人口分布
	let url = " http://scenicmonitor.top/attractions/api/getLocation_distribution_rate"
	$.get(url, {
		pid: area_pid,
		type_flag:flag_id,
		sub_domain: ''

	}, function(data, state) {
		let heatmapData = data['data']
		new hotmap(heatmapData, "container",lon,lat);
	
	}, 'json');
	
}

function trend(area_pid,dbegin, dend){
	let url='http://scenicmonitor.top/attractions/api/getLocation_trend_percent_new?'
	$.get(url, {
		pid: area_pid,
		date_begin: dbegin,
		date_end: dend,
		predict: true,
		sub_domain: ''

	}, function(data, state) {

		data = data['data'];//已经存在的数据
		timeList = new Array(data.length); //已过去的时间
		numList = new Array(data.length); //过去的人数
		for(let i = 0; i < data.length; i++) {
			timeList[i] = data[i][0];
			numList[i] = data[i][1];
		}
		
		data_json = {
			"data": numList,
			"time": timeList
		}
		let obj = new drawAreaChart(data_json,"时间","趋势指数","trend-index","#07F9FD");

	}, 'json');
}





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
