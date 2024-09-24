<template>
  <div class="navigation">
    <p>
      <el-link href="#/" >首页</el-link>
      <el-link href="#/industry/industry_list?level=L1" >板块</el-link>
      <el-link href="#/finance/industry_list?level=L1">财务</el-link>
      <el-link href="#/statistics/industry_list?level=L1">统计</el-link>
      <el-link target="_blank" @click="onSelectAnalysis">分析</el-link>
      <el-link to="#/test" target="_blank">对比</el-link>
      <el-link href="#/test" target="_blank">国际</el-link>
      <el-link href="#/test" target="_blank">衍生品</el-link>

    </p>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";
import {getCurDate} from "@/Api/utils/calcDate";

const router = useRouter()
const onSelectAnalysis = () =>{
  const query_dic = {
    "id":"1",
    "trade_date":getCurDate()
  };
  router.push({path:"/analysis/limit",query:query_dic});
}

</script>


<style scoped>
.navigation{
  text-align:right;
}
a {
  color: #FF4040;
  font-weight: bold;
  width:45px;
}
</style>