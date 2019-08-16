function draw_active_areachart(idname, ddate_array, active_array) {
	let mychart = echarts.init(document.getElementById(idname));
	let option = {
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
				color: "#07F9FD"
			},
		}]
	};

	mychart.setOption(option);

}

function draw_province_rate_linechart(idname, ddate_array, province_set, collections) {
	let series_array = new Array()
	let i = 0
	for(let item of province_set) {
		series_array[i] = {
			name: item,
			type: 'line',
			stack: '总量',
			areaStyle: {},
			data: collections[item]
		}

		i += 1
	}
	var mychart = echarts.init(document.getElementById(idname));
	let option = {
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
		legend: {
			data: province_set
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

			name: "热度",
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

		series: series_array
	};
	mychart.setOption(option);
}