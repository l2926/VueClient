import * as echarts from "echarts";

export function InitMoneyFlowEcharts(rawData){
    var priceData = rawData.money_flow_vo;

    // alert(JSON.stringify(priceData))

    if(priceData == null){
        alert("priceData为null");
    }

    // alert(priceData.net_mf_amount)
    document.getElementById("myDiv").innerText = "资金净流入(亿):" + priceData.net_mf_amount;
    // 指定图表的配置项和数据
    var option = {
        title: [{
            text: rawData.ts_name,
            subtext: rawData.ts_code
        },{
            text:rawData.trade_date,
            left:"87%",
            bottom:"87%"
        },{
            text:"成交量(手):",
            left:"0%",
            bottom:"67%"
        },{
            text:"成交金额(万):",
            left:"0%",
            bottom:"25%"
        },{
            text:"买盘",
            left:"28%",
            bottom:"5%"
        },{
            text:"卖盘",
            left:"68%",
            bottom:"5%"
        }],
        tooltip: {},
        legend: {
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '30%',
                center:["30%", "30%"],
                data: [
                    { value: priceData.buy_elg_vol, name: '特大单' },
                    { value: priceData.buy_lg_vol, name: '大单' },
                    { value: priceData.buy_md_vol, name: '中单' },
                    { value: priceData.buy_sm_vol, name: '小单' }

                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: '30%',
                center:["30%", "70%"],
                data: [
                    { value: priceData.buy_elg_amount, name: '特大单' },
                    { value: priceData.buy_lg_amount, name: '大单' },
                    { value: priceData.buy_md_amount, name: '中单' },
                    { value: priceData.buy_sm_amount, name: '小单' }

                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: '30%',
                center:["70%", "30%"],
                data: [
                    { value: priceData.sell_elg_vol, name: '特大单' },
                    { value: priceData.sell_lg_vol, name: '大单' },
                    { value: priceData.sell_md_vol, name: '中单' },
                    { value: priceData.sell_sm_vol, name: '小单' }
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: '30%',
                center:["70%", "70%"],
                data: [
                    { value: priceData.sell_elg_amount, name: '特大单' },
                    { value: priceData.sell_lg_amount, name: '大单' },
                    { value: priceData.sell_md_amount, name: '中单' },
                    { value: priceData.sell_sm_amount, name: '小单' }
                ]
            },
        ]
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)
}