<template>
  <el-header>
    <StatisticsNavigation></StatisticsNavigation>
  </el-header>

  <div style="display: flex; justify-content: center;">
    <div id="upText">大盘上涨个数:</div>
    <div id="upDiv" style="color:red"></div>
    <div id="downText">,大盘下跌个数:</div>
    <div id="downDiv" style="color: green"></div>
  </div>

  <div id="priceCharts" class="container-fluid" style="width:99%;height:600px;margin-left: 0"></div>

</template>

<script setup>
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import StatisticsNavigation from "@/components/index/StatisticsNavigation.vue";
import {InitStatisticsMvECharts} from "@/Api/echarts/index/statistics_mv";

const route = useRoute();

const axiosEcharts = ()=>{
  // alert("statistics");
  const query_dic = JSON.parse(JSON.stringify(route.query));

  //标题头数据
  axios.post("http://127.0.0.1:8081/index/statistics_count",query_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        document.getElementById("upDiv").innerText = response.data.up_count;
        document.getElementById("downDiv").innerText = response.data.down_count;
      }
  ).catch(error=>{
    alert(error)
  })

  //正文图表
  // alert(JSON.stringify(query_dic))
  axios.post("http://127.0.0.1:8081/index/statistics_mv",query_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        try{
          InitStatisticsMvECharts(response.data);
        }
        catch (err){
          alert("echarts处理异常")
        }
      }
  ).catch(error => {
    console.log(error);
    alert(error);
  });
}

onMounted(axiosEcharts);
onUpdated(axiosEcharts);
</script>

<style scoped>

</style>