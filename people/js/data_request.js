function realtimeFlow(area_pid, dbegin, dend) {
	//人流热度
	this.url = "http://127.0.0.1:8000/attractions/api/getLocation_pn_percent_new"
	$.get(this.url, {
		pid: area_pid,
		date_begin: dbegin,
		date_end: dend,
		predict: true,
		sub_domain: ''

	}, function(data, state) {
		data = data['data'];
		timeList = new Array(data.length); //时间
		numList = new Array(data.length); //人数

		for(let i = 0; i < data.length; i++) {
			timeList[i] = data[i][0];
			numList[i] = data[i][1];
		}
		json = {
			"data": numList,
			"time": timeList
		}
		var obj = new drawAreaChart(json);

	}, 'json');

}

function SearchRate(area_pid) {
	//关键词热度
	this.url = "http://127.0.0.1:8000/attractions/api/getLocation_search_rate"
	$.get(this.url, {
		pid: area_pid,
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
		dataList = {
			"wechat": wechat_numList,
			"baidu": baidu_numList,
			"sougou": sougou_numList

		}
		if(wechat_dateList.length > baidu_dateList && wechat_dateList.length > sougou_dateList) {
			dateList = wechat_dateList
		}
		if(baidu_dateList.length > wechat_dateList && baidu_dateList.length > sougou_dateList) {
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
	this.url = "http://127.0.0.1:8000/attractions/api/getLocation_geographic_bounds"
	$.get(this.url, {
		pid: area_pid,
		flag:flag_id,
		sub_domain: ''

	}, function(data, state) {
		var bounds = data['bounds']
	

		new map(bounds,"container",lon,lat)
	}, 'json');
}

function People_Distribution_rate(area_pid,lon,lat){
		//  人口分布
	this.url = "http://127.0.0.1:8000/attractions/api/getLocation_distribution_rate"
	$.get(this.url, {
		pid: area_pid,
		flag:0,
		sub_domain: ''

	}, function(data, state) {
		var heatmapData = data['data']
		
		new hotmap(heatmapData, "container",lon,lat);
	
	}, 'json');
	
}
