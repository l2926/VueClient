<template>
<!--  <MarketNavigation></MarketNavigation>-->
  <el-main>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>板块分类</th>
        <th colspan="8">板块明细</th>
      </tr>
      </thead>
    </table>
    <div id="priceCharts" class="container" style="width: 1500px;height:600px;"></div>
  </el-main>

</template>

<script setup>
// import MarketNavigation from "@/components/market/MarketNavigation.vue";
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {InitDailyECharts} from "@/Api/echarts/market/daily";


const axiosEcharts = ()=>{
  axios.post("http://127.0.0.1:8081/market/price").then(
      response=>{
        // alert(JSON.stringify(response.data));
        try{
          InitDailyECharts(response.data);
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