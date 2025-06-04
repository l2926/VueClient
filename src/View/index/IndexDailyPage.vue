<template>
  <el-header>
    <IndexNavigation></IndexNavigation>
  </el-header>
  <div id="priceCharts" class="container-fluid" style="width:99%;height:600px;margin-left: 0"></div>

</template>

<script setup>
import IndexNavigation from "@/components/index/IndexNavigation.vue";
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {InitDailyECharts} from "@/Api/echarts/index/index_daily";
import {useRoute} from "vue-router";
import {indexParameterTransform} from "@/Api/utils/urlParameterTransform";

const route = useRoute();

const axiosEcharts = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  // alert(JSON.stringify(query_dic))
  const para_dic = indexParameterTransform(query_dic);
  axios.post("http://127.0.0.1:8081/index/daily",para_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        try{
          InitDailyECharts(response.data);
        }
        catch (err){
          alert(err)
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