function CityInfoRequest() {
	this.city_url = "http://127.0.0.1:8000/attractions/api/getCitysByProvince";
	this.area_url ="http://127.0.0.1:8000/attractions/api/getRegionsByCity"
	//	var objs = document.getElementById("prov_select0");
	//					var grade = objs.options[objs.selectedIndex].value;
	var pro = $("#prov_select0 option:first").val();
	var area_list_url=this.area_url
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
		
		start_Add_Element_Of_area(pro,area_list_url);
		
	}, 'json');
	this.listen();
	

}
function start_Add_Element_Of_area(pro,area_url){
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

	}, 'json');
}
CityInfoRequest.prototype.listen = function() {
	var pro;
	url = this.city_url
	area_url =this.area_url
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
		start_Add_Element_Of_area(pro,area_url);

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
}