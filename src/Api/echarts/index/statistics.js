import * as echarts from "echarts";

export function InitStatisticsECharts(rawData){
    // JSON.stringify(rawData);
    var priceData = rawData;

    if(priceData == null){
        alert("请求价格为空");
    }

    var dates = priceData.map(item => {
        return item['industry_name'];
    });

    // alert(dates);

    var upCount = priceData.map(item => {
        return item['up_count'];
    })

    var upCountPct = priceData.map(item => {
        return (100*item['up_count'] / item['all_count']).toFixed(2);
    })

    var downCount = priceData.map(item=>{
        return -item["down_count"];
    })

    var pctChange = priceData.map(item=>{
        return item["pct_change"];
    })

    // alert(upCount)

    const option = {
        title: {
            text: rawData.index_name,
            subtext: rawData.index_code
        },
        legend: {

        },
        toolbox: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false,
                type: 'cross'
            }
        },
        animation:false,
        grid:[
            {top:'7%',bottom:'7%',width:'',height:'45%'},
            {top:'58%',bottom:'7%',width:'',height:'26%'}
        ],
        xAxis: [{
            gridIndex:0,
            data: dates,
        },{
            gridIndex:1,
            data: dates,
        }],
        yAxis: [{
            gridIndex:0,
            scale:true
        },{
            gridIndex: 0,
            scale: true
        },{
            gridIndex: 1,
            scale: true
        }],
        dataZoom: [{
            textStyle: {
                color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            dataBackground: {
                areaStyle: {
                    color: '#8392A5'
                },
                lineStyle: {
                    opacity: 0.8,
                    color: '#8392A5'
                }
            },
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            },
            "xAxisIndex": [
                0,
                1,
                2
            ]
        }, {
            type: 'inside'
        }],
        series: [
            {
                name: '大盘涨幅统计',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                data: upCount,
            },
            {
                name: '大盘跌幅统计',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                data: downCount,
                color:'red',
                barGap: '-100%'
            },{
                name:'大盘涨幅统计(%)',
                type:'line',
                xAxisIndex: 0,
                yAxisIndex: 1,
                data:upCountPct
            },{
                name:'涨跌幅统计(%)',
                type:'bar',
                xAxisIndex: 1,
                yAxisIndex: 2,
                data: pctChange,
                itemStyle:{
                    color: function (params){
                        return params.value > 0 ? 'blue':'red'
                    }
                }
            }
        ],
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)

    mychart.on('click', function (params) {
        // 可以根据 params.name 或 params.dataIndex 进行不同跳转
        console.log(params); // 打印参数方便调试
        alert(params.name)
    });
}