function map(lineArr){
	 var polyline = new AMap.Polyline({
        path: lineArr,          //设置线覆盖物路径
        strokeColor: "red", //线颜色
        strokeWeight: 5,        //线宽
        strokeStyle: "solid",   //线样式
    });
    var map = new AMap.Map("container", {
    	
        zooms: [4, 15],
        center: [106.633037,26.676849],
        showIndoorMap: false,
        zoom: 11,
		
        isHotspot: false,
        defaultCursor: 'pointer',
        touchZoomCenter: 1,
        pitch: 0,
        mapStyle: "amap://styles/18df5ae292f09eda98fc81c6b37810c0",
        viewMode: '3D',
        resizeEnable: true,
    });
    map.add(polyline);
}

