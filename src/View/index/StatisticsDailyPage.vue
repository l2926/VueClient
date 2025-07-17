<template>
  <el-header>
    <StatisticsNavigation></StatisticsNavigation>
  </el-header>

  <div style="display: flex; justify-content: center;">
    <div id="upDiv">大盘上涨个数:,</div>
    <div id="downDiv">大盘下跌个数:</div>
  </div>

  <div id="priceCharts" class="container-fluid" style="width:99%;height:600px;margin-left: 0"></div>

</template>

<script setup>
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {InitStatisticsECharts} from "@/Api/echarts/index/statistics";
import StatisticsNavigation from "@/components/index/StatisticsNavigation.vue";

const route = useRoute();

const axiosEcharts = ()=>{
  // alert("statistics");
  const query_dic = JSON.parse(JSON.stringify(route.query));

  //标题头数据
  axios.post("http://127.0.0.1:8081/index/statistics_count",query_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        document.getElementById("upDiv").innerText = "大盘上涨个数:" + response.data.up_count + ",";
        document.getElementById("downDiv").innerText = "大盘下跌个数:" + response.data.down_count;
      }
  ).catch(error=>{
    alert(error)
  })

  //正文图表
  // alert(JSON.stringify(query_dic))
  axios.post("http://127.0.0.1:8081/index/statistics",query_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        try{
          InitStatisticsECharts(response.data);
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