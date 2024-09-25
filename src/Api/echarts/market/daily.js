import * as echarts from "echarts";

export function InitDailyECharts(rawData){
    var priceData = rawData.getDailyVoList;

    if(priceData == null){
        alert("请求价格为空");
    }

    var dates = priceData.map(item => {
        return item['trade_date'];
    });

    var open = priceData.map(item => {
        return item["open"];
    });

    var data = priceData.map(item =>{
        return [+item["open"], +item["close"], +item["low"], +item["high"]];
    });

    const option = {
        title: {
            text: rawData.tsName,
            subtext: rawData.tsCode
        },
        legend: {

        },
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
            {top:'58%',bottom:'7%',width:'',height:'18%'},
            {top:'81%',bottom:'0%',width:'',height:'10%'}
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
        }],
        dataZoom: [{
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
                data: data,
            },{
                name: '成交量',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                data:open
            }
        ],
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)
}