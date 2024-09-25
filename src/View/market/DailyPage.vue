<template>
  <el-header>
    <MarketNavigation></MarketNavigation>
  </el-header>
  <div id="priceCharts" class="container" style="width: 1500px;height:600px;"></div>

</template>

<script setup>
import MarketNavigation from "@/components/market/MarketNavigation.vue";
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