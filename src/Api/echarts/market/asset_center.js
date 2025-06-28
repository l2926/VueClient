import * as echarts from "echarts";

export function InitAssetCenterEcharts(rawData){
    var priceData = rawData.asset_center_vo_list;

    if(priceData == null){
        alert("priceData为null");
    }

    var dates = priceData.map(item => {
        return item['end_date'];
    });

    var total_revenue = priceData.map(item =>{
        return item['total_revenue'];
    });

    var total_cogs = priceData.map(item =>{
        return item['total_cogs'];
    });

    var total_assets = priceData.map(item => {
        return item["total_assets"];
    });

    // alert(total_assets)

    var net_assets = priceData.map(item=>{
        return item['net_assets']
    })

    var nincome_attr_p = priceData.map(item=>{
        return item['nincome_attr_p']
    })

    var total_liab = priceData.map(item=>{
        return item["total_liab"]
    })

    var level_rate = priceData.map(item=>{
        return item["level_rate"]
    })


    var profit_rate = priceData.map(item=>{
        return item["profit_rate"]
    })

    var roe = priceData.map(item=>{
        return item["roe"]
    })

    const option = {
        title: {
            text: rawData.ts_name,
            subtext: rawData.ts_code
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
            {top:'7%',bottom:'7%',width:'',height:'40%'},
            {top:'53%',bottom:'7%',width:'',height:'16%'},
            {top:'76%',bottom:'0%',width:'',height:'12%'}
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
            gridIndex: 0,
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
                name: '总营收',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                data: total_revenue,
            },{
                name: '总成本',
                type: 'bar',
                xAxisIndex:0,
                yAxisIndex:0,
                data: total_cogs,
            },{
                name: '利润率',
                type: 'line',
                xAxisIndex:0,
                yAxisIndex:1,
                data:profit_rate
            },{
                name: '总资产',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:2,
                data:total_assets
            },{
                name: '总负债',
                type: 'bar',
                xAxisIndex:1,
                yAxisIndex:2,
                symbol:"none",
                data:total_liab,
            },{
                name: '杠杆率',
                type: 'line',
                xAxisIndex:1,
                yAxisIndex:3,
                symbol:"none",
                data:level_rate,
            },{
                name: '净资产',
                type: 'bar',
                xAxisIndex:2,
                yAxisIndex:4,
                data:net_assets
            },{
                name: '净利润',
                type: 'bar',
                xAxisIndex:2,
                yAxisIndex:4,
                data:nincome_attr_p
            },{
                name: 'roe',
                type: 'line',
                xAxisIndex:2,
                yAxisIndex:5,
                data:roe
            }
        ],
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)
}