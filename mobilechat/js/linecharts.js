function draw_linechart(idname, male, female, datelist) {

	let mychart = echarts.init(document.getElementById(idname));
		option = {
		title: {
			textStyle: {
				color: "white",
			},
			text:"男女占比历史变化"
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['男生', '女生'],
			textStyle: {
				color: "white"
			},
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: datelist,
			axisLabel: {
				color: 'white',
			},
			nameTextStyle: {
				color: 'white',
				fontSize: 10,

			},
		},
		yAxis: {

			type: 'value',
			axisLabel: {
				color: 'white',
			},
			nameTextStyle: {
				color: 'white',
				fontSize: 10,
			},
		},
		series: [{
				name: '女生',
				type: 'line',
				color: "#33FFFF",
				data: female
			}
			, {
				name: '男生',
				type: 'line',
				color: "#33FF74",
				data: male
			},

		]
	};

	mychart.setOption(option);
}
