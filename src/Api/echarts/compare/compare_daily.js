import * as echarts from "echarts";

export function InitCompareDailyECharts(rawData){
    var priceData = rawData.daily_compare_vo_list;

    // alert(JSON.stringify(priceData));

    if(priceData == null){
        alert("请求价格为空");
    }

    var dates = priceData.map(item => {
        return item['trade_date'];
    });

    var data1 = priceData.map(item =>{
        return [+item["open1"], +item["close1"], +item["low1"], +item["high1"]];
    });

    var data2 = priceData.map(item =>{
        return [+item["open2"], +item["close2"], +item["low2"], +item["high2"]];
    });

    var pct_chg1 = priceData.map(item=>{
        return item['pct_chg1']
    });

    var pct_chg2 = priceData.map(item=>{
        return item['pct_chg2']
    });

    const option = {
        title: [{
            text: rawData.ts_first_name,
            subtext: rawData.ts_first_code,
            left:"0%",
            bottom:"87%"
        },{
            text: rawData.ts_second_name,
            subtext: rawData.ts_second_code,
            left:"0%",
            bottom:"40%"
        }],
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
            {top:'62%',bottom:'7%',width:'',height:'30%'}
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
            gridIndex: 1,
            scale: true
        },{
            gridIndex:0,
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
                name: 'K线',
                type: 'candlestick',
                xAxisIndex:0,
                yAxisIndex:0,
                data: data1,
            },{
                name: 'K线2',
                type: 'candlestick',
                xAxisIndex:1,
                yAxisIndex:1,
                data:data2,
            },{
                name:'涨跌幅1(%)',
                type:'line',
                xAxisIndex: 0,
                yAxisIndex: 2,
                data: pct_chg1,
                itemStyle:{
                    normal:{
                        color:'transparent'
                    }
                }
            },{
                name:'涨跌幅2(%)',
                type:'line',
                xAxisIndex: 1,
                yAxisIndex: 3,
                data: pct_chg2,
                itemStyle:{
                    normal:{
                        color:'transparent'
                    }
                }
            }
        ],
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)
}