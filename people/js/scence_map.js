var province_array = new Array()
var loaction_array = new Array()
var area_array = new Array()
var maker_array = new Array() // 存放浮标
var lnglat =new Array()
function scence_map() {
	let url = "http://scenicmonitor.top/attractions/api/getScenceInfo"
	$.get(url, {}, function(data) {
		let data_info = data['data']
		for(let i = 0; i < data_info.length; i++) {
			let scence = data_info[i]
			let province = scence['province']
			let loaction = scence['loaction']
			let area = scence['area']
			let longitude = scence['longitude']
			let latitude = scence['latitude']
			lnglat[i]=[longitude,latitude]
			province_array[i] = province
			loaction_array[i] = loaction
			area_array[i] = area
			let marker = new AMap.Marker({
				position: new AMap.LngLat(longitude, latitude), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
				title: area
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
			province = province_array[i]
			loaction = loaction_array[i]
			area = area_array[i]
			
			let info ="<a class='input-item' style='color: white;width:100%' >" + area + "</a></div></div>"
			infoWindow = new AMap.InfoWindow({
				content:  info,
				isCustom: true, //自定制
			});
			infoWindow.open(map,lnglat[i]);
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