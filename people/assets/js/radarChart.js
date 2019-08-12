function CommentRadar(idname,jsondata) {
	len=jsondata.length
	indicatorList=new Array(len)
	valueList=new Array(len)
	for(let i=0;i<len;i++){
		item =jsondata[i]
		adjectives=item['adjectives']
		rate=item['rate']
		indicatorList[i]={name:adjectives,max:100}
		valueList[i]=rate
	}
	
    var mychart = echarts.init(document.getElementById(idname));
    var option = {


        tooltip: {},
        backgroundcolor: "blue",
        radar: {
            indicator: indicatorList
            
        },
        series: [{

            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: valueList,
                name: "景区评分"
            },
            ]
        }]
    };
    mychart.setOption(option);

}


 