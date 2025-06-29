import * as echarts from "echarts";

export function InitMoneyFlowEcharts(rawData){
    var priceData = rawData.money_flow_vo;

    alert(JSON.stringify(priceData))

    if(priceData == null){
        alert("priceData为null");
    }

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '访问来源',
            subtext: '虚拟数据',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '搜索引擎' },
                    { value: 735, name: '直接访问' },
                    { value: 580, name: '邮件营销' },
                    { value: 484, name: '联盟广告' },
                    { value: 300, name: '视频广告' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    const mychart = echarts.init(document.getElementById("priceCharts"));
    mychart.setOption(option)
}