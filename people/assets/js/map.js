function map(bounds,elementid,center_lon,center_lat){
	if(bounds.length>200){
			zoom_size=15

	}
	else{
		zoom_size=16
	}
 var map = new AMap.Map(elementid, {
    	        resizeEnable: true,

        zooms: [4, 20],
        center: [center_lon,center_lat],
       
        showIndoorMap: false,
        zoom: zoom_size,
		
        isHotspot: false,
        defaultCursor: 'pointer',
        touchZoomCenter: 1,
        pitch: 0,
        mapStyle: "amap://styles/18df5ae292f09eda98fc81c6b37810c0",
        viewMode: '3D',
        resizeEnable: true,
    });
     
	 var polyline = new AMap.Polyline({
        path: bounds,          //设置线覆盖物路径
        strokeColor: "red", //线颜色
        strokeWeight: 5,        //线宽
        strokeStyle: "solid",   //线样式
    });
    map.add(polyline);
 

   
}
 