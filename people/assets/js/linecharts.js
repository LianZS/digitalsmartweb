function LineChart(idname) {
    this.mychart = echarts.init(document.getElementById(idname));


}


LineChart.prototype.drawtrend =function(jsondata) {
	
    option = {
    title: {
        textStyle:{
        	color:"white",
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['时间'],
        textStyle:{
        	color:"white"
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
    		name:"时间",
        type: 'category',
        boundaryGap: false,
        data: ["2019-06-01","2019-06-02","2019-06-03","2019-06-04","2019-06-05","2019-06-06",],
        axisLabel:{
        	color:'white',
        },
        nameTextStyle:{
       	 	color:'white',
       	 	        	fontSize:15,

        		},
    },
    yAxis: {
    	    		name:"指数",
		
        type: 'value',
         axisLabel:{
        	color:'white',
        },
        nameTextStyle:{
        	color:'white',
        	fontSize:15,
        },
    },
    series: [
        {
            name:'指数',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
     
    ]
};
    this.mychart.setOption(option);
   
}

LineChart.prototype.drawsearch=function(jsondata){
	 option = {
    title: {
        textStyle:{
        	color:"white",
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['百度','微信','搜狗'],
        textStyle:{
        	color:"white"
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
    		name:"日期",
        type: 'category',
        boundaryGap: false,
        data: json.time,
        axisLabel:{
        	color:'white',
        },
        nameTextStyle:{
       	 	color:'white',
       	 	        	fontSize:15,

        		},
    },
    yAxis: {
    	    		name:"数量",
		
        type: 'value',
         axisLabel:{
        	color:'white',
        },
        nameTextStyle:{
        	color:'white',
        	fontSize:15,
        },
    },
    series: [
        {
            name:'百度',
            type:'line',
            stack: '总量',
            data:json.data.baidu
        },
        {
            name:'微信',
            type:'line',
            stack: '总量',
            data:json.data.wechat
        },
        {
            name:'搜狗',
            type:'line',
            stack: '总量',
            data:json.data.sougou
        },
        
    ]
};
    this.mychart.setOption(option);
}
