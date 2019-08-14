function LineChart(IdName,cityName) {
	//画折线图
    this.IdName = IdName;
    this.mychart = echarts.init(document.getElementById(IdName));
    this.option = {
        title:{
            text:cityName,
            textStyle:{
                color:'white'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            name: "时间",
            nameLocation: "middle",
            nameGap: 30,
            nameTextStyle: {
                color: "white",
                fontSize: 15
            },
            boundaryGap: false,

            axisLabel: {
                color: "white",
            }

        },
        yAxis: {
            type: 'value',

            name: "拥堵指数",
            nameLocation: "middle",
            nameGap: 50,
            nameTextStyle: {
                color: "white",
                fontSize: 15,

            },

            axisLabel: {
                color: "white",
            }

        },

        series: [
            {
                name: "拥堵指数",
                // data: data,
                type: 'line',


            }]
    };

}

LineChart.prototype.setData = function dealData(json, num = -1) {
    var time = '';
    var data = '';
    if (this.IdName == 'realtime-traffic') {
        json = json.Citytraffic;
        this.option.xAxis.data = json.time;
        this.option.series[0].data = json.data;

    } else if (this.IdName == "roadData") {
        if (num != -1) {
        		roaddata=json.Roadtraffic
            this.option.xAxis.data = roaddata.time;
            this.option.series[0].data = roaddata.data;
        }
		
        // this.mychart.setOption(this.option);
    } else if (this.IdName == 'year-traffic') {
    		yearjson=json.Yeartraffic
    		console.log(yearjson)
        this.option.xAxis.data = yearjson.time;
        this.option.series[0].data = yearjson.data;
        // this.mychart.setOption(this.option);
    }
    this.mychart.setOption(this.option);

};