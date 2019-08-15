function draw_active_areachart(idname, ddate_array, active_array) {
	var mychart = echarts.init(document.getElementById(idname));
	option = {
		title: {
			textStyle: {
				color: 'white'
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		xAxis: {
			type: 'category',
			name: "时间",
			nameLocation: "middle",
			nameGap: 30,
			nameTextStyle: {
				color: "white",
				fontSize: 15
			},
			boundaryGap: false,
			data: ddate_array,

			axisLabel: {
				color: "white",
			}

		},
		yAxis: {
			type: 'value',

			name: "活跃数",
			nameLocation: "middle",
			nameGap: 50,
			nameTextStyle: {
				color: "white",
				fontSize: 15,

			},

			axisLabel: {
				color: "white",
			}

		},

		series: [{
			name: "活跃数",
			data: active_array,
			type: 'line',
			areaStyle: {
			color:"#07F9FD"
			},
		}]
	};

	mychart.setOption(option);

}