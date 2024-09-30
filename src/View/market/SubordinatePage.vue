<template>
  <el-header>
    <MarketNavigation></MarketNavigation>
  </el-header>
  <el-table
      :data="tableData"
      border
      style="width:100%"
      class="no-header">

    <el-table-column
        prop="date"
        label="序号"
        width="50">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.idx }}</a>
      </template>
    </el-table-column>
    <el-table-column
        prop="date"
        label="公司名称"
        width="100">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.name }}</a>
      </template>
    </el-table-column>
    <el-table-column
        prop="date"
        label="地区"
        width="100">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.area }}</a>
      </template>
    </el-table-column>
    <el-table-column
        prop="date"
        label="行业1"
        width="150">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.industry_name_l1 }}</a>
      </template>
    </el-table-column>
    <el-table-column
        prop="date"
        label="行业2"
        width="150">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.industry_name_l2 }}</a>
      </template>
    </el-table-column>
    <el-table-column
        prop="date"
        label="行业3"
        width="150">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.industry_name_l3 }}</a>
      </template>
    </el-table-column>
    <el-table-column
        prop="date"
        label="概念">
      <template #default="{ row }">
        <a :href="market" style="color: gray">{{ row.concept }}</a>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import MarketNavigation from "@/components/market/MarketNavigation.vue";
import {onMounted, ref} from "vue";
import {marketParameterTransform} from "@/Api/utils/urlParameterTransform";
import axios from "axios";
import {useRoute} from "vue-router";

//初始化所属行业表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = marketParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/market/subordinate",para_dic).then(
      (response) => {
        tableData.value = response.data;
      }
  ).catch(error => {
    console.log(error);
    alert("axios请求错误");
  });
}

onMounted(axiosTable);
// onUpdated(axiosTable);
</script>

<style scoped>

</style>