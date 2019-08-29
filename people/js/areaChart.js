function drawAreaChart(data_json, future_time, future_data) {
	let pre_array = new Array();
	for(let i = 0; i < data_json.data.length; i++) {
		pre_array[i] = 0
	}

	future_data = pre_array.concat(future_data); //在预测数据中已经发生的置为0
	let mychart = echarts.init(document.getElementById("scence"));
	let option = {
		title: {
			//             text:'景区客流量实时监测',
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
			data: data_json.time.concat(future_time),

			axisLabel: {
				color: "white",
			}

		},
		yAxis: {
			type: 'value',

			name: "客流量",
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
			name: "客流量",
			data: data_json.data,
			type: 'line',
			areaStyle: {
				color: "red"

			},
		}, {
			name:"预测",
			data: future_data,
			type: 'line',
			areaStyle: {
				color: "#07F9FD"
			},
		}]
	};

	mychart.setOption(option);

}