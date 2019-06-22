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
        data:['整体','PC端','移动端'],
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
            name:'整体',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'PC端',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'移动端',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        
    ]
};
    this.mychart.setOption(option);
}
