function draw_age_barchart(idname,under_nineth,nin_twen,twe_thir,thir_four,four_fift,over_fift) {
	let mychart = echarts.init(document.getElementById(idname));

	var dataAxis = ['19岁以下', '19~25岁', '26~35岁', '36~45岁', '46~55岁', '55岁以上'];
	var data = [under_nineth,nin_twen,twe_thir,thir_four,four_fift,over_fift];
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
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#999'
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