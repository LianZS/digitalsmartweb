function KeyWordRadar(idname, keyword_array) {
	indicatorList = new Array()
	valueList = new Array()
	for(let i = 0; i < keyword_array.length; i++) {
		key = keyword_array[i][0]
		rate = keyword_array[i][1]*77
		
		indicatorList[i] = {
			name: key,
			max: 100,
			color: 'aquamarine'
		}
		
		valueList[i] = rate
	}

	let mychart = echarts.init(document.getElementById(idname));
	let option = {

		tooltip: {},
		backgroundcolor: "blue",
		radar: {
			indicator: indicatorList,
			splitLine: {
				lineStyle: {
					color: "#14FDFD"
				}
			},
			axisLine: {
				lineStyle: {
					color: "#10F8FF"
				}
			}

		},
		series: [{
			lineStyle:{
				color:"#F5FE2A"
			},
			type: 'radar',
			// areaStyle: {normal: {}},
			data: [{
				value: valueList,
				name: "关键词分布"
			}, ]
		}]
	};
	mychart.setOption(option);
	

}