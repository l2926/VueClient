<template>
  <el-header>
    <CompareNavigation></CompareNavigation>
  </el-header>
  <div id="priceCharts" class="container-fluid" style="width:99%;height:600px;margin-left: 0"></div>

</template>

<script setup>
import {onMounted, onUpdated} from "vue";
import axios from "axios";
import {InitCompareDailyECharts} from "@/Api/echarts/compare/compare_daily";
import CompareNavigation from "@/components/compare/CompareNavigation.vue";
import {compareParameterTransform} from "@/Api/utils/urlParameterTransform";
import {useRoute} from "vue-router";
// import {indexParameterTransform} from "@/Api/utils/urlParameterTransform";

const route = useRoute();

const axiosEcharts = ()=>{
  // alert(JSON.stringify(query_dic))
  // const para_dic = {
  //   "para_id" : 1,
  //   "ts_code1":"000001.SH",
  //   "ts_code2":"000006.SZ",
  //   "name1":"上证指数",
  //   "name2":"平安银行",
  //   "trade_date":"20250501",
  //   "start_date":"20200101",
  //   "select_id1":1,
  //   "select_id2":2
  // }
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = compareParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/compare/daily",para_dic).then(
      response=>{
        // alert(JSON.stringify(response.data));
        try{
          InitCompareDailyECharts(response.data);
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