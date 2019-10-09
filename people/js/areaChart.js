function drawAreaChart(data_json,x_name,y_name,id_name,color) {
	let pre_array = new Array();

	let mychart = echarts.init(document.getElementById(id_name));
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
			name: x_name,
			nameLocation: "middle",
			nameGap: 30,
			nameTextStyle: {
				color: "white",
				fontSize: 15
			},
			boundaryGap: false,
			data: data_json.time,

			axisLabel: {
				color: "white",
			}

		},
		yAxis: {
			type: 'value',

			name: y_name,
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
			name: y_name,
			data: data_json.data,
			type: 'line',
			areaStyle: {
				color:color

			},
		}
		]
	};

	mychart.setOption(option);

}