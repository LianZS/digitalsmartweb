function CityInfoRequest() {
	//页面省份城市初始化
	this.city_url = "http://127.0.0.1:8000/attractions/api/getCitysByProvince";
	this.area_url = "http://127.0.0.1:8000/attractions/api/getRegionsByCity"
	//	var objs = document.getElementById("prov_select0");
	//					var grade = objs.options[objs.selectedIndex].value;
	var pro = $("#prov_select0 option:first").val();
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

		start_Add_Element_Of_area(pro, area_list_url);

	}, 'json');
	this.listen();

}

function start_Add_Element_Of_area(pro, area_url) {
	//页面城市地区初始化
	var city = $("#city_select0 option:first").text();
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

			var newElement = "<option value=" + pid + ">" + area + "</option>";
			$('#scence_select0').append(newElement);

		}
		first_area = $('#scence_select0 option:selected').val();
		date_begin = new Date().format("yyyyMMdd");
		date_end = parseInt(date_begin) + 1;
		new realtimeFlow(first_area, date_begin, date_end);
		new SearchRate(first_area)

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

				var newElement = "<option value=" + pid + ">" + area + "</option>";
				$('#scence_select0').append(newElement);

			}

		}, 'json');

	});
	$("#scence_select0").change(function() {
		var pid = $(this).children('option:selected').val();
		date_begin = new Date().format("yyyyMMdd");
		date_end = parseInt(date_begin) + 1;
		new realtimeFlow(pid, date_begin, date_end);
		

	});
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