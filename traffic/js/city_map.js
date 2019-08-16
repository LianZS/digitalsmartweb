
var maker_array = new Array() // 存放坐标

function city_map() {
	let url = "http://127.0.0.1:8000/traffic/api/getCityInfo"
	$.get(url, {}, function(data) {
		let data_info = data['data']

		for(let i = 0; i < data_info.length; i++) {
			city = data_info[i]
			let loaction = city['loaction']
			
			let longitude = city['longitude']
			let latitude = city['latitude']
			loaction_array[i] = loaction
			let marker = new AMap.Marker({
				position: new AMap.LngLat(longitude, latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
			});
			maker_array[i] = marker
		}
		draw_map()

	}, 'json')
}

function draw_map() {
	var map = new AMap.Map("container", {
		zooms: [4, 15],
		center: [100, 36],
		showIndoorMap: false,
		zoom: 5,

		isHotspot: false,
		defaultCursor: 'pointer',
		touchZoomCenter: 1,
		pitch: 0,
		mapStyle: "amap://styles/18df5ae292f09eda98fc81c6b37810c0",
		viewMode: '3D',
		resizeEnable: true,
	});
	map.add(maker_array);
	//鼠标点击marker弹出自定义的信息窗体
	//#这里需要做性能优化
	for(let i = 0; i < maker_array.length; i++) {
				

		AMap.event.addListener(maker_array[i], 'mouseover', function() {
			
			let info ="<a class='input-item' style='color: white;width:100%' >" + maker_array[i][0] + "</a></div></div>"
			infoWindow = new AMap.InfoWindow({
				content:  info,
				isCustom: true, //自定制
			});
			console.log(info)
			console.log(maker_array[i][1], maker_array[i][2])
			infoWindow.open(map,[maker_array[i][1], maker_array[i][2]]);
			infoWindow.close();

		});

		AMap.event.addListener(maker_array[i], 'click', () => {
			province = province_array[i]
			loaction = loaction_array[i]
			area = area_array[i]
			range = 60
			href = $("a").attr("href") + "?province=" + province + "&location=" + loaction + "&area=" + area + "&range=" + range
			$("a").attr("href", href)
			$("a")[0].click()
		});
	}

	map.addControl(new AMap.Scale());
	map.addControl(new AMap.ToolBar({
		liteStyle: true
	}));
}