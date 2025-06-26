
<template>
  <el-container>
    <el-header style="">
      <StatisticsNavigation></StatisticsNavigation>
    </el-header>
    <el-table
        :data="tableData"
        border
        style="width:100%"
        class="no-header">

      <el-table-column
          prop="date"
          label="序号"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.idx }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="概念名称"
          width="150">
        <template #default="{ row }">
          <el-link :href="`/#/index/dc_member`" style="color: gray" target="_blank">{{ row.name }}</el-link>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="概念涨跌幅(%)"
          width="120">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.pct_change }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="领涨股票名称"
          width="150">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.leading }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="领涨股票涨跌幅(%)"
          width="150">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.leading_pct }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="上涨家数"
          width="120">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.up_num }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="下跌家数"
          width="120">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.down_num }}</a>
        </template>
      </el-table-column>

      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            总家数
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.down_num }}</a>
        </template>
      </el-table-column>

      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            上涨百分比(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.up_num }}</a>
        </template>
      </el-table-column>

      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            下跌百分比(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.down_num }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="换手率(%)"
          width="120">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.turnover_rate }}</a>
        </template>
      </el-table-column>

      <el-table-column width="150">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            市值(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_mv }}</a>
        </template>
      </el-table-column>
      <el-table-column width="150"
                       prop="address"
                       label="日期">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.trade_date }}</a>
        </template>
      </el-table-column>
    </el-table>

  </el-container>
</template>


<script setup>
import {onMounted, onUpdated, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import {industryParameterTransform} from "@/Api/utils/urlParameterTransform";
import StatisticsNavigation from "@/components/index/StatisticsNavigation.vue";
//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/index/dc_index",para_dic).then(
      (response) => {
        alert(JSON.stringify(response.data));
        tableData.value = response.data;
      }
  ).catch(error => {
    console.log(error);
    alert("axios请求错误");
  });
}

onMounted(axiosTable);
onUpdated(axiosTable);

//根据表格标题头排序
const onSelectDate = ()=>{
  alert("dsfds")
}
</script>

<style scoped>
.headItem{
  font-weight: bold;
  text-align: left;
}
</style>