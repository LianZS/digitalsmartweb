

function draw_bar(idname,keyword_array,keyword_value_array) {
	let mychart = echarts.init(document.getElementById(idname));
	var dataAxis = keyword_array;
	var yMax = 1.4;

	let option = {
		title: {
			text: '',
			textStyle: {
				color: "white",
			},
		},

		xAxis: {
			data: dataAxis,
			axisLabel: {
				fontSize:8,
				textStyle: {
					color: 'white',
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
			axisLine: {
				show: false
			},
			type: 'value',

			nameTextStyle: {
				color: 'white',
				fontSize: 10,
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: 'white'
				}
			}
		},
		dataZoom: [{
			type: 'inside'
		}],
		series: [{ // For shadow
				type: 'bar',
				itemStyle: {
					normal: {
						color: 'rgba(0,0,0,0.05)'
					}
				},
				barGap: '-100%',
				barCategoryGap: '40%',
				data:[1.4,1.4] ,
				animation: false
			},	{
				type: 'bar',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#83bff6'
								},
								{
									offset: 0.5,
									color: '#188df0'
								},
								{
									offset: 1,
									color: '#188df0'
								}
							]
						)
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#2378f7'
								},
								{
									offset: 0.7,
									color: '#2378f7'
								},
								{
									offset: 1,
									color: '#83bff6'
								}
							]
						)
					}
				},
				data: keyword_value_array
			}
		

		]
	};
	mychart.setOption(option);

}


