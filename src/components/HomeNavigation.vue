<template>
  <div class="navigation">
    <p>
      <el-link href="#/" >首页</el-link>
      <el-link href="#/industry/industry_list?level=L1" >板块</el-link>
      <el-link href="#/finance/finance_list?level=L1">财务</el-link>
      <el-link href="#/index/index_list?level=L1">指数</el-link>
      <el-link :href="`#/analysis/limit?select_id=1&sort_id=1&block_id=1&mv_id=1&trade_date=${getCurDate()}`">分析</el-link>
      <el-link :href="`#/compare/daily`">对比</el-link>
      <el-link href="#/test">国际</el-link>
      <el-link href="#/test">衍生品</el-link>
    </p>
  </div>
</template>

<script setup>
import {getCurDate} from "@/Api/utils/calcDate";

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