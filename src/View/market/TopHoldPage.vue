
<template>
  <el-container>
    <el-header style="">
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
          width="90">
        <template #default="{ row }">
          <el-link :href="`/#/market/daily?select_id=1&p\ara_id=1&level=L1&id=${row.idx}&trade_date=20240926`" style="color: gray" target="_blank">{{ row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="60">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            地区
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.area }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业1
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.industry_name_l1 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业2
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.industry_name_l2 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业3
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.industry_name_l3 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="70">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            涨跌幅(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a v-if="row.pct_chg > 0" :href="market" style="color: red">{{ row.pct_chg }}</a>
          <a v-if="row.pct_chg == 0" :href="market" style="color: gray">{{ row.pct_chg }}</a>
          <a v-if="row.pct_chg < 0" :href="market" style="color: green">{{ row.pct_chg }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="address"
          label="十大股东">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.top_holder }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="address"
          label="板块"
          width="90">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.market }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            净资产(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.asset }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            市值(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_mv }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90"
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
import {marketParameterTransform} from "@/Api/utils/urlParameterTransform";
import MarketNavigation from "@/components/market/MarketNavigation.vue";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = marketParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/market/top_hold",para_dic).then(
      (response) => {
        // alert(JSON.stringify(response.data));
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