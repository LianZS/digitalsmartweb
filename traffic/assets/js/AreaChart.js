

function drawAreaChart(json) {
    var mychart = echarts.init(document.getElementById("scence"));
    option = {
           title:{
//             text:'景区客流量实时监测',
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
            data: json.time,

            axisLabel: {
                color: "white",
            }

        },
        yAxis: {
            type: 'value',

            name: "客流量",
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
                name: "客流量",
                data: json.data,
                type: 'line',
                areaStyle: {},
            }]
    };
   
    mychart.setOption(option);




}