function draw_province_rate_circle_linechart(idname, ddate_array, province_set, collections) {
	let source = new Array()
	let series_array = new Array()

	source[0] = ddate_array
	let i = 1
	for(let item of province_set) {
		source[i] = new Array()
		source[i][0] = item
		source[i] = source[i].concat(collections[item])
		series_array[i - 1] = {
			type: 'line',
			smooth: true,
			seriesLayoutBy: 'row'
		}
		i += 1
	}
	let mychart = echarts.init(document.getElementById(idname));

	let option = {
		legend: {},
		tooltip: {
			trigger: 'axis',
			showContent: false
		},
		dataset: {
			source: source
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			gridIndex: 0
		},
		grid: {
			top: '55%'
		},
		series: series_array
	};

	mychart.setOption(option);

}