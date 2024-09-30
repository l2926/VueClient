import * as echarts from "echarts";

export function InitDailyECharts(rawData){
    var priceData = rawData.daily_vo_list;

    if(priceData == null){
        alert("请求价格为空");
    }

    var dates = priceData.map(item => {
        return item['trade_date'];
    });

    var data = priceData.map(item =>{
        return [+item["open"], +item["close"], +item["low"], +item["high"]];
    });

    var amount = priceData.map(item => {
        return item["amount"];
    });

    var total_mv = priceData.map(item=>{
        return item['total_mv']
    });

    var pe = priceData.map(item=>{
        return item["pe"]
    })

    var pb = priceData.map(item=>{
        return item["pb"]
    })

    var roe = priceData.map(item=>{
        if(item['pe'] == 0){
            item['roe'] = 0;
        }else{
            item['roe'] = item['pb'] / item['pe'];
        }
        return item['roe'].toFixed(2);
    })

    var pct_chg = priceData.map(item=>{
        return item["pct_chg"]
    })

    var turn_over_rate = priceData.map(item=>{
        return item["turn_over_rate"]
    })

    var turn_over_rate_f = priceData.map(item=>{
        return item["turn_over_rate_f"]
    })

    var asset = priceData.map((item=>{
        if(item["pb"] != 0 && item["pb"] != null){
            return (item["total_mv"] / item["pb"]).toFixed(2)
        }else{
            return 0
        }
    }))

    const option = {
        title: {
            text: rawData.ts_name,
            subtext: rawData.ts_code
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
            {top:'58%',bottom:'7%',width:'',height:'16%'},
            {top:'81%',bottom:'0%',width:'',height:'12%'}
        ],
        xAxis: [{
            gridIndex:0,
            data: dates,
        },{
            gridIndex:1,
            data: dates,
        },{
            gridIndex:2,
            data: dates,
        }],
        yAxis: [{
            gridIndex:0,
            scale:true
        },{
            gridIndex: 1,
            scale: true
        },{
            gridIndex: 2,
            scale: true
        },{
            gridIndex: 1,
            scale: true
        },{
            gridIndex: 1,
            scale: true
        },{
            gridIndex: 2,
            scale: true
        },{
            gridIndex: 0,
            scale: true
        },{
            gridIndex: 1,
            scale: true
        },{
            gridIndex: 2,
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
                name: '成交金额',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:1,
                data:amount,
                itemStyle:{
                    normal:{
                        color:(params)=>{
                            var colorList;
                            if (data[params.dataIndex][1]>data[params.dataIndex][0]) {
                                colorList = '#ff5900';
                            } else {
                                colorList = 'rgba(0,255,0,0.62)';
                            }
                            return colorList
                        }
                    }
                }
            },{
                name: '市值',
                type: 'line',
                xAxisIndex:2,
                yAxisIndex:2,
                data:total_mv,
                itemStyle:{
                    normal:{
                        color:'transparent'
                    }
                }
            },{
                name: '市盈率',
                type: 'line',
                xAxisIndex:1,
                yAxisIndex:3,
                data:pe,
            },{
                name: '市净率',
                type: 'line',
                xAxisIndex:1,
                yAxisIndex:4,
                data:pb,
            },{
                name: 'ROE',
                type: 'line',
                xAxisIndex:2,
                yAxisIndex:5,
                data:roe,
            },{
                name: '涨跌幅',
                type: 'line',
                xAxisIndex:0,
                yAxisIndex:6,
                data:pct_chg,
                itemStyle:{
                    normal:{
                        color:'transparent'
                    }
                }
            },{
                name: '换手率',
                type: 'line',
                xAxisIndex:1,
                yAxisIndex:7,
                data:turn_over_rate,
                itemStyle:{
                    normal:{
                        color:'transparent'
                    }
                }
            },{
                name: '真实换手率',
                type: 'line',
                xAxisIndex:1,
                yAxisIndex:7,
                data:turn_over_rate_f,
                itemStyle:{
                    normal:{
                        color:'transparent'
                    }
                }
            },{
                name: '净资产',
                type: 'bar',
                xAxisIndex:2,
                yAxisIndex:8,
                data:asset
            }
        ],
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)
}