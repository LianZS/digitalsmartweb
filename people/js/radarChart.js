function CommentRadar(idname, jsondata) {
	len = jsondata.length
	indicatorList = new Array(len)
	valueList = new Array(len)
	for(let i = 0; i < len; i++) {
		item = jsondata[i]
		adjectives = item['adjectives']
		rate = item['rate']
		
		indicatorList[i] = {
			name: adjectives,
			max: 100,
			color: 'aquamarine'
		}
		
		valueList[i] = rate
	}

	var mychart = echarts.init(document.getElementById(idname));
	var option = {

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
				name: "景区评分"
			}, ]
		}]
	};
	mychart.setOption(option);
	

}