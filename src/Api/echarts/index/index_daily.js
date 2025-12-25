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
        if(rawData.index_code == "000001.sh" || rawData.index_code == "399001.sz" || rawData.index_code == "399005.sz" || rawData.index_code == "399006.sz"){
            return item["pct_chg"]
        }else{
            return item["pct_change"]
        }
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
                symbol:"none",
                data:pe,
            },{
                name: '市净率',
                type: 'line',
                xAxisIndex:1,
                yAxisIndex:4,
                symbol:"none",
                data:pb,
            },{
                name: 'ROE',
                type: 'line',
                xAxisIndex:2,
                yAxisIndex:5,
                symbol:"none",
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