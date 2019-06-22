function CityChart(IdName,cityName) {
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

CityChart.prototype.setData = function dealData(json, num = -1) {
    var time = '';
    var data = '';
    if (this.IdName == 'Citytraffic') {
        json = json.Citytraffic;
        this.option.xAxis.data = json.time;
        this.option.series[0].data = json.data;

    } else if (this.IdName == "roadData") {
        if (num != -1) {
            json = json.roadData.data;
            this.option.xAxis.data = json[num - 1].time;
            this.option.series[0].data = json[num - 1].data;
        }

        // this.mychart.setOption(this.option);
    } else if (this.IdName == 'yearData') {
        this.option.xAxis.data = json.time;
        this.option.series[0].data = json.data;
        // this.mychart.setOption(this.option);
    }
    this.mychart.setOption(this.option);

};