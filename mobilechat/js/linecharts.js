

function draw_sex_linechart(idname,ddate_array, male, female) {

	let mychart = echarts.init(document.getElementById(idname));
	let option = {
		title: {
			textStyle: {
				color: "white",
			},
			text: "男女占比历史变化"
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
			data: ddate_array,
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
			}, {
				name: '男生',
				type: 'line',
				color: "#33FF74",
				data: male
			},

		]
	};

	mychart.setOption(option);
}

function draw_age_linechart(idname, ddate_array, under_nineth_array, nin_twen_array, twe_thir_array, thir_four_array, four_fift_array, over_fift_array) {
	let mychart = echarts.init(document.getElementById(idname));
	
	let option = {
		title: {
			textStyle: {
				color: "white",
			},
			text: ""
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['19岁以下', '19~25岁', '26~35岁', '36~45岁', '46~55岁', '55岁以上'],
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
			data: ddate_array,
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
				name: '19岁以下',
				type: 'line',
				color: "#33FFFF",
				data: under_nineth_array
			}, {
				name: '19~25岁',
				type: 'line',
				color: "#33FF74",
				data: nin_twen_array
			},
			{
				name: '26~35岁',
				type: 'line',
				color: "#7B0F84",
				data: twe_thir_array
			},
			{
				name: '36~45岁',
				type: 'line',
				color: "#EAFD07",
				data: thir_four_array
			},
			{
				name: '46~55岁',
				type: 'line',
				color: "#0BFD07",
				data: four_fift
			},
			{
				name: '55岁以上',
				type: 'line',
				color: "#07F2FD",
				data: over_fift_array
			},

		]
	};

	mychart.setOption(option);

}
function draw_activerate_linechart(idname, ddate_array,activerate_array,base_activerate_array,aver_activerate_array) {

	let mychart = echarts.init(document.getElementById(idname));
	let option = {
		title: {
			textStyle: {
				color: "white",
			},
			text: ""
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['月活跃率', '行业活跃度基准值','行业活跃度基均值'],
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
			data: ddate_array,
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
				name: '月活跃率',
				type: 'line',
				color: "#33FFFF",
				data: activerate_array
			}, {
				name: '行业活跃度基准值',
				type: 'line',
				color: "#FD07F6",
				data: base_activerate_array
			},{
				name: '行业活跃度基均值',
				type: 'line',
				color: "#33FF74",
				data: aver_activerate_array
			},

		]
	};

	mychart.setOption(option);
}
