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
            color: 'white'          // 图例文字颜色
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
					colorList = [  'pink','#F8FF6E']
					return colorList[params.dataIndex];
				}
			}
		}]
	};
	mychart.setOption(option);

}