function draw_age_barchart(idname, under_nineth, nin_twen, twe_thir, thir_four, four_fift, over_fift) {
	let mychart = echarts.init(document.getElementById(idname));

	var dataAxis = ['19岁以下', '19~25岁', '26~35岁', '36~45岁', '46~55岁', '55岁以上'];
	var data = [under_nineth, nin_twen, twe_thir, thir_four, four_fift, over_fift];
	var yMax = 1;
	var dataShadow = [];

	for(var i = 0; i < data.length; i++) {
		dataShadow.push(yMax);
	}

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
				inside: true,
				textStyle: {
					color: 'white'
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
				data: dataShadow,
				animation: false
			},
			{
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
				data: data
			}
		]
	};

	mychart.setOption(option);
}

function draw_keyword_rate_barchart(idname, keyword_array, rate_array) {
	let mychart = echarts.init(document.getElementById(idname));

	let option = {

		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
			axisLabel: {
				color: 'white',
				fontSize: 8,

			},
		},
		yAxis: {
			type: 'category',
			data: keyword_array,
			axisLabel: {
				color: 'white',
				fontSize: 8,

			},
			nameTextStyle: {
				color: 'white',
				fontSize: 4,
			}
		},
		series: [{
			type: 'bar',
			data: rate_array,

			itemStyle: {
				color: function(params) {
					colorList = ['#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD', '#07A0FD', '#6007FD', '#9107FD', '#EE07FD', '#E28ACB', '#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD']
					return colorList[params.dataIndex];
				}
			}

		}]
	}
	mychart.setOption(option);

}

function draw_bar(idname) {
	let mychart = echarts.init(document.getElementById(idname));

	var dataAxis = ['人均安装应用', '人均启动应用'];
	var yMax = 40;

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
				textStyle: {
					color: 'white'
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
				data: [54, 54],
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
				data: [46,34]
			}
		

		]
	};
	mychart.setOption(option);

}


