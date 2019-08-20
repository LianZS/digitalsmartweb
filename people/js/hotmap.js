function hotmap(heatmapData,elementid,center_lon,center_lat) {
	var map = new AMap.Map(elementid, {
		resizeEnable: true,
		center: [center_lon,center_lat],
		showIndoorMap: false,
        zoom: 16,
		zooms: [15, 16],
        isHotspot: false,
        defaultCursor: 'pointer',
        touchZoomCenter: 1,
        pitch: 0,
        mapStyle: "amap://styles/18df5ae292f09eda98fc81c6b37810c0",
        viewMode: '3D',
	});
	map.plugin(["AMap.Heatmap"], function() {
		//初始化heatmap对象
		heatmap = new AMap.Heatmap(map, {
			radius: 50, //给定半径
			opacity: [0, 0.8]
			/*,
			gradient:{
			    0.5: 'blue',
			    0.65: 'rgb(117,211,248)',
			    0.7: 'rgb(0, 255, 0)',
			    0.9: '#ffea00',
			    1.0: 'red'
			}
			 */
		});
		heatmap.setDataSet({
			data: heatmapData,
			max: 800
		});
	});
}