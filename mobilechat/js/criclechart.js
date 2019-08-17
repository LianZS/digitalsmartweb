function draw_circle(idname) {
	let mychart = echarts.init(document.getElementById(idname));

	option = {
		title: {

			x: 'center',

		},

		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['男生', '女生'],
			textStyle: {
				color: 'white' // 图例文字颜色
			}

		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: 47,
					name: '女生'
				}, {
					value: 53,
					name: '男生'
				},

			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				color: function(params) {
					colorList = ['pink', '#F8FF6E']
					return colorList[params.dataIndex];
				}
			}
		}]
	};
	mychart.setOption(option);

}

function draw_brand_circle(idname, brand_map) {
	legend_data = Object.keys(brand_map)
	series_data = new Array()
	j = 0
	other_rate = 100 //其它品牌
	for(let i = 0; i < legend_data.length; i++) {
		let brand = legend_data[i]
		let rate = brand_map[brand]
		series_data[i] = {
			value: rate,
			name: brand
		}
		j = i
		other_rate -= rate

	}
	legend_data[j + 1] = "其它"
	series_data[j + 1] = {
		value: other_rate,
		name: "其它"
	}
	let mychart = echarts.init(document.getElementById(idname));

	option = {
		title: {

			x: 'center',

		},

		legend: {
			orient: 'vertical',
			left: 'left',
			data: legend_data,
			textStyle: {
				color: 'white' // 图例文字颜色
			}

		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: series_data,
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				color: function(params) {
					colorList = ['#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD', '#07A0FD', '#6007FD', '#9107FD', '#EE07FD', '#E28ACB', '#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD']
					return colorList[params.dataIndex];
				}
			}
		}]
	};
	mychart.setOption(option);

}

function draw_system_circle(idname) {
	let mychart = echarts.init(document.getElementById(idname));

	option = {
		title: {

			x: 'center',

		},

		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['安卓', '苹果', '其它'],
			textStyle: {
				color: 'white' // 图例文字颜色
			}

		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: 87,
					name: '安卓'
				}, {
					value: 20,
					name: '苹果'
				},
				{
					value: 3,
					name: '其它'
				},

			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				color: function(params) {
					colorList = ['#4B6CFF', '#F4FF4B', "#D705FD"]
					return colorList[params.dataIndex];
				}
			}
		}]
	};
	mychart.setOption(option);

}

function draw_detail_system_rate(idname, system_map) {
legend_data = Object.keys(system_map)
	series_data = new Array()
	j = 0
	for(let i = 0; i < legend_data.length; i++) {
		let brand = legend_data[i]
		let rate = system_map[brand]
		series_data[i] = {
			value: rate,
			name: brand
		}
		j = i
	}

	let mychart = echarts.init(document.getElementById(idname));

	option = {
		title: {

			x: 'center',

		},

		legend: {
			orient: 'vertical',
			left: 'left',
			data: legend_data,
			textStyle: {
				color: 'white' // 图例文字颜色
			}

		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: series_data,
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				color: function(params) {
					colorList = ['#34FD07', '#07FDA0', '#07F9FD', '#FDC907', '#F2FD07','#07A0FD', '#6007FD', '#9107FD', '#EE07FD', '#E28ACB',  '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD']
					
					return colorList[params.dataIndex];
				}
			}
		}]
	};
	mychart.setOption(option);
}