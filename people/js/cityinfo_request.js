function CityInfoRequest() {
	//刚进入该页面时进行的初始化
	//页面省份城市初始化
	this.city_url = "http://scenicmonitor.top/attractions/api/getCitysByProvince";
	this.area_url = "http://scenicmonitor.top/attractions/api/getRegionsByCity"
	//	var objs = document.getElementById("prov_select0");
	//					var grade = objs.options[objs.selectedIndex].value;\n
	var pro = getParams("province")
	if(pro == null) {
		pro = $("#prov_select0 option:first").val();
	} else {
		$("#prov_select0 option:contains(" + pro + ")").attr("selected", true);

	}

	var area_list_url = this.area_url

	$.get(this.city_url, {
		province: pro
	}, function(data, state) {
		//这里显示从服务器返回的数据

		citylist = data['city'];
		$('#city_select0').find("option").remove();
		for(let i = 0; i < citylist.length; i++) {
			city = citylist[i]['loaction'];
			pid = citylist[i]['citypid'];

			var newElement = "<option value=" + pid + ">" + city + "</option>";
			$('#city_select0').append(newElement);

		}
		city = getParams("location")
		if(city == null) {
			start_Add_Element_Of_area(pro, area_list_url);
			return
		} else {
			$("#city_select0 option:contains(" + city + ")").attr("selected", true);
			start_Add_Element_Of_area(pro, area_list_url);
		}

	}, 'json');
	this.listen();

}

function start_Add_Element_Of_area(pro, area_url) {
	//切换省份时自动加载第一个城市以及第一个景区
	//页面城市地区初始化
	var city = $("#city_select0 option:selected").text();
	var citypid = $("#city_select0").val();
	$.get(area_url, {
		province: pro,
		location: city,
		citypid: citypid
	}, function(data, state) {
		//这里显示从服务器返回的数据
		areaList = data['area'];
		$('#scence_select0').find("option").remove();
		for(let i = 0; i < areaList.length; i++) {
			area = areaList[i]['area'];
			pid = areaList[i]['pid'];
			flag = areaList[i]['type_flag'];
			lon = areaList[i]['longitude'];
			lat = areaList[i]['latitude'];
			var newElement = "<option value=" + pid + " flag=" + flag + " lon=" + lon + " lat=" + lat + " >" + area + "</option>";
			$('#scence_select0').append(newElement);

		}
		area = getParams("area")
		range=getParams("range")
		if(area == null&range==null) {
			load_data()
		} else {
			$("#scence_select0  option:contains(" + area + ")").attr("selected", true);
			 $("#range_select0 option:contains(" + range + ")").attr("selected", true);
				load_data()

		}

	}, 'json');
}
CityInfoRequest.prototype.listen = function() {
	//页面省份城市地区监听
	var pro = $("#prov_select0 option:selected").val();
	url = this.city_url
	area_url = this.area_url
	$("#prov_select0").change(function() {
		pro = $(this).children('option:selected').val();

		$.get(url, {
			province: pro
		}, function(data, state) {
			//这里显示从服务器返回的数据

			citylist = data['city'];
			$('#city_select0').find("option").remove();
			for(let i = 0; i < citylist.length; i++) {
				city = citylist[i]['loaction'];
				pid = citylist[i]['citypid'];

				var newElement = "<option value=" + pid + ">" + city + "</option>";
				$('#city_select0').append(newElement);

			}
			start_Add_Element_Of_area(pro, area_url);

		}, 'json');
	});

	$("#city_select0").change(function() {
		var city = $(this).children('option:selected').text();
		var citypid = $(this).children('option:selected').val();
		$.get(area_url, {
			province: pro,
			location: city,
			citypid: citypid
		}, function(data, state) {
			//这里显示从服务器返回的数据
			areaList = data['area'];
			$('#scence_select0').find("option").remove();
			for(let i = 0; i < areaList.length; i++) {
				area = areaList[i]['area'];
				pid = areaList[i]['pid'];
				flag = areaList[i]['flag'];
				lon = areaList[i]['longitude'];
				lat = areaList[i]['latitude'];
				var newElement = "<option value=" + pid + " flag=" + flag + " lon=" + lon + " lat=" + lat + " >" + area + "</option>";
				$('#scence_select0').append(newElement);

			}
		}, 'json');

	});

	$("#load").click(function() {
		//更新页面数据
		children_page()
		load_data()
	})
}

function children_page() {
	//切换链接
	province = $('#prov_select0 option:selected').val();
	city = $('#city_select0 option:selected').text();
	citypid = $('#city_select0 option:selected').val();
	area = $('#scence_select0 option:selected').text();
	pid = $('#scence_select0 option:selected').val();
	flag = parseInt($('#scence_select0 option:selected').attr("flag"));
	range = $('#range_select0 option:selected').val();
//	href = "realtimeScence.html?province=" + province + "&location=" + city + "&citypid=" + citypid + "&area=" + area + "&pid=" + pid + "&flag=" + flag + "&range=" + range
	var url = window.location.href;
	var valiable = url.split("?")[0] + "?province=" + province + "&location=" + city + "&area=" + area + "&range=" + range
	window.history.pushState({}, 0, valiable);

}

function load_data() {
	pid = $('#scence_select0 option:selected').val();
	lon = $('#scence_select0 option:selected').attr("lon");
	lat = $('#scence_select0 option:selected').attr("lat");
	date_begin = new Date().format("yyyyMMdd");
	date_end = parseInt(date_begin) + 1;
	flag = parseInt($('#scence_select0 option:selected').attr("flag"));
	range = $('#range_select0 option:selected').val();
	try{
		new realtimeFlow(pid, date_begin, date_end,range);
	}catch(e){
		new realtimeFlow(pid, date_begin, date_end,range);
	}
	try{
			new SearchRate(pid, flag);

	}catch(e){
	new SearchRate(pid, flag);
	}
	try{
			new Geographic_bounds(pid, flag, lon, lat);

	}catch(e){
	new Geographic_bounds(pid, flag, lon, lat);
	}
	
	try{
			new People_Distribution_rate(pid, flag,lon, lat);

	}catch(e){
	new People_Distribution_rate(pid, flag,lon, lat);
	}
	try{
			new Image_reuqest(pid);

	}catch(e){
	new Image_reuqest(pid);
	}
	try{	new Comment(pid);

		
	}catch(e){
	new Comment(pid);
	}
	try{
			new CommentRate(pid, "evaluate");

	}catch(e){
			new CommentRate(pid, "evaluate");
	}
	try{
			new ScenceState(pid);

	}catch(e){
	new ScenceState(pid);
	}
	try{
		new trend(pid,date_begin, date_end);
	}catch(e){
		new trend(pid,date_begin, date_end);
	}

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

function getParams(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

};