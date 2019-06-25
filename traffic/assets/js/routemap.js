function RouteMap(response, num) {
    parametar = document.location.toString().split("/");
    cityCode = parametar[parametar.length - 1];
    num = parseInt(num);
    var data = response.roadData.info.route.tableData[num - 1];

    var lat = data.coords;
    if (parseInt(cityCode) > 1000) {
        Gaode(lat);
    } else {
        Baidu(lat);
    }


}

function Gaode(lat) {
    var path = [];
    for (let i = 0; i < lat.length; i++) {
        path.push(new AMap.LngLat(lat[i].lon, lat[i].lat));
    }

    postions = lat.length;
    var map = new AMap.Map('map', {
        center: [lat[postions - 1].lon, lat[postions - 1].lat], //设置地图中心点坐标
        layers: [new AMap.TileLayer.RoadNet(),new AMap.TileLayer.Satellite(),new AMap.TileLayer.Traffic()], //设置图层,可设置成包含一个或多个图层的数组
        mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
        viewMode: '2D', //设置地图模式
        lang: 'zh_cn', //设置地图语言类型
        expandZoomRange: true,
        zooms: [3, 20],
        zoom: 20,

    });
    var maker1 = new AMap.Marker({
        position: new AMap.LngLat(lat[Math.floor(postions - 1)].lon, lat[Math.floor(postions - 1)].lat)   // 经纬度对象，如 new AMap.LngLat(116.39, 39.9); 也可以是经纬度构成的一维数组[116.39, 39.9]

    });
    var maker2 = new AMap.Marker({
        position: new AMap.LngLat(lat[Math.floor(0)].lon, lat[Math.floor(0)].lat)   // 经纬度对象，如 new AMap.LngLat(116.39, 39.9); 也可以是经纬度构成的一维数组[116.39, 39.9]

    });
    var polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2,
        strokeColor: 'red',
        lineJoin: 'round'
    });
    map.add(polyline);
    map.add(maker1);
    map.add(maker2);

    map.setFitView();
    // 传入覆盖物数组，仅包括polyline和marker1的情况
    map.setFitView([polyline, maker1, maker2]);
}

function Baidu(lat) {
    var path = [];
    var map = new BMap.Map("map");
    postions = lat.length;

    for (let i = 0; i < lat.length; i++) {
        path.push(new BMap.Point(lat[i].lon, lat[i].lat));
    }

    map.centerAndZoom(new BMap.Point(lat[postions - 1].lon, lat[postions - 1].lat), 15);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);
    var polyline = new BMap.Polyline(path, {
        strokeColor: "red",//设置颜色
        strokeWeight: 4, //宽度
        strokeOpacity: 1,
    });//透明度
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_SATELLITE_MAP,
            BMAP_NORMAL_MAP

        ]
    }));

    map.setMapType(BMAP_SATELLITE_MAP);
    map.addOverlay(polyline);

}