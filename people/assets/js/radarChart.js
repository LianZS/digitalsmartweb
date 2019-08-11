function drawRadar(idname,jsondata) {

    var mychart = echarts.init(document.getElementById(idname));
    var option = {


        tooltip: {},
        backgroundcolor: "blue",
        radar: {
            indicator: [{
                name: "环境优美",
                max: 100
            },
                {
                    name: '设备齐全',
                    max: 100
                },
                {
                    name: '性价比高',
                    max: 100
                },
                {
                    name: '交通方便',
                    max: 100
                },
                {
                    name: '干净整洁',
                    max: 100
                },
                {
                    name: '人流拥挤',
                    max: 100
                }
            ]
        },
        series: [{

            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: [80, 20, 38, 78, 93, 67],
                name: "景区评分"
            },
            ]
        }]
    };
    mychart.setOption(option);

}


 