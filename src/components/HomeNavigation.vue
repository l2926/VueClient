<template>
  <div class="navigation">
    <p>
      <el-link href="#/" >首页</el-link>
      <el-link href="#/industry/industry_list?level=L1" >板块</el-link>
      <el-link href="#/finance/finance_list?level=L1">财务</el-link>
      <el-link href="#/index/index_list?level=L1">指数</el-link>
      <el-link :href="`#/compare/daily?para_id=1&select_id1=1&level1=market&level_id1=1&ts_code=&name=&select_id2=1&level2=L1&level_id2=1&id=1&trade_date=${getCurDate()}`">对比</el-link>
      <el-link :href="`#/analysis/limit_market?select_id=1&sort_id=1&block_id=1&\para_id=1&trade_date=${getCurDate()}`">分析</el-link>
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