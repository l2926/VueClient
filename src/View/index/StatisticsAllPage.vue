<template>
  <el-header>
    <StatisticsNavigation></StatisticsNavigation>
  </el-header>
  <div id="priceCharts" class="container-fluid" style="width:99%;height:600px;margin-left: 0"></div>

</template>

<script setup>
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {InitStatisticsAllECharts} from "@/Api/echarts/index/statistics_all";
import StatisticsNavigation from "@/components/index/StatisticsNavigation.vue";

const route = useRoute();

const axiosEcharts = ()=>{
  // alert("statistics");
  const query_dic = JSON.parse(JSON.stringify(route.query));
  // alert(JSON.stringify(query_dic))
  axios.post("http://127.0.0.1:8081/index/statistics_all",query_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        try{
          InitStatisticsAllECharts(response.data);
        }
        catch (err){
          alert("echarts处理异常")
        }
      }
  ).catch(error => {
    console.log(error);
    alert("axios请求错误");
  });
}

onMounted(axiosEcharts);
onUpdated(axiosEcharts);
</script>

<style scoped>

</style>