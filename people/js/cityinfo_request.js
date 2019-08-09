function CityInfoRequest() {
	this.city_url = "http://127.0.0.1:8000/attractions/api/getCitysByProvince";
	//	var objs = document.getElementById("prov_select0");
	//					var grade = objs.options[objs.selectedIndex].value;
	this.pro = $("#prov_select0").val();
	$.get(this.city_url, {
		province: this.pro
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
		
		
		start_Add_Element_Of_area();
		
	}, 'json');
	

}
CityInfoRequest.prototype.start_Add_Element_Of_area=function(){
	var city = $("#city_select0").text();
	var citypid = $("#city_select0").val();
	$.get("http://127.0.0.1:8000/attractions/api/getRegionsByCity", {
		province: this.pro,
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
	$("#prov_select0").change(function() {
		this.pro = $(this).children('option:selected').val();

		$.get(this.city_url, {
			province: this.pro
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

		}, 'json');
	});
	$("#city_select0").change(function() {
		var city = $(this).children('option:selected').text();
		var citypid = $(this).children('option:selected').val();
		$.get("http://127.0.0.1:8000/attractions/api/getRegionsByCity", {
			province: this.pro,
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