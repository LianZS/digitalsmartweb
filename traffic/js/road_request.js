function roaditem_listen(IdName) {
	//路况item监听
		let url = 'http://127.0.0.1:8000/traffic/api/trafficindex/city/detailroad?cityCode=100&id=4&up_date=1563968622'

	pid = getParams("cityCode")

	var tags = document.getElementsByClassName('route');
	var lines = document.getElementsByClassName("paiming");
	for(let i = 0; i < tags.length; i++) {
		$(".route").hover(function() {
			$(this).css("background-color", "gray");
		}, function() {

			$(this).css("background-color", "transparent");
			// $(this).attr("done", "false");

		});
		let num = lines[i].innerHTML;
		tags[i].addEventListener('click', function() {
			// $(this).attr("done", "true");
			$.get(url, {
				"cityCode": pid,
				"id": i,
				"up_date": up_date

			}, function(data) {
				bounds = data['data']['detail']['bounds']
				data = data['data']['detail']['data']
				road_timelist = data['time']
				road_datalist = data['data']
				road_routeMap(pid, bounds)
				roaddata = {
					"Roadtraffic": {
						"time": road_timelist,
						"data": road_datalist
					}
				}
				
				new LineChart(IdName).setData(roaddata, i);
			})

		})
	}
}