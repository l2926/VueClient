<template>
  <el-header>
    <MarketNavigation></MarketNavigation>
  </el-header>
  finance-center
  <div id="priceCharts" class="container-fluid" style="width:99%;height:600px;margin-left: 0"></div>
</template>

<script setup>
import MarketNavigation from "@/components/market/MarketNavigation.vue";
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {marketParameterTransform} from "@/Api/utils/urlParameterTransform";
import {InitFinanceCenterECharts} from "@/Api/echarts/market/finance_center";

const route = useRoute();

const axiosEcharts = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  // alert(JSON.stringify(query_dic))
  const para_dic = marketParameterTransform(query_dic);
  axios.post("http://127.0.0.1:8081/market/finance_center",para_dic).then(
      response=>{
        alert(JSON.stringify(response.data));
        try{
          InitFinanceCenterECharts(response.data);
        }
        catch (err){
          alert(err)
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