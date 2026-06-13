
<template>
  <el-container>
    <el-header style="">
      <StatsticsLevelNavigation></StatsticsLevelNavigation>
      year index
    </el-header>
    <el-table
        :data="tableData"
        border
        style="width:100%"
        class="no-header">

      <el-table-column
          prop="date"
          label="序号123"
          width="50">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.idx }}</a>
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
      <el-table-column
          label="15年前">
        <template #default="{ row }">
          <a v-if="row.year15 > 0" :href="market" style="color: red">{{ row.year15 }}</a>
          <a v-if="row.year15 == 0" :href="market" style="color: gray">{{ row.year15 }}</a>
          <a v-if="row.year15 < 0" :href="market" style="color: green">{{ row.year15 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="14年前">
        <template #default="{ row }">
          <a v-if="row.year14 > 0" :href="market" style="color: red">{{ row.year14 }}</a>
          <a v-if="row.year14 == 0" :href="market" style="color: gray">{{ row.year14 }}</a>
          <a v-if="row.year14 < 0" :href="market" style="color: green">{{ row.year14 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="13年前">
        <template #default="{ row }">
          <a v-if="row.year13 > 0" :href="market" style="color: red">{{ row.year13 }}</a>
          <a v-if="row.year13 == 0" :href="market" style="color: gray">{{ row.year13 }}</a>
          <a v-if="row.year13 < 0" :href="market" style="color: green">{{ row.year13 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="12年前">
        <template #default="{ row }">
          <a v-if="row.year12 > 0" :href="market" style="color: red">{{ row.year12 }}</a>
          <a v-if="row.year12 == 0" :href="market" style="color: gray">{{ row.year12 }}</a>
          <a v-if="row.year12 < 0" :href="market" style="color: green">{{ row.year12 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="11年前">
        <template #default="{ row }">
          <a v-if="row.year11 > 0" :href="market" style="color: red">{{ row.year11 }}</a>
          <a v-if="row.year11 == 0" :href="market" style="color: gray">{{ row.year11 }}</a>
          <a v-if="row.year11 < 0" :href="market" style="color: green">{{ row.year11 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="10年前">
        <template #default="{ row }">
          <a v-if="row.year10 > 0" :href="market" style="color: red">{{ row.year10 }}</a>
          <a v-if="row.year10 == 0" :href="market" style="color: gray">{{ row.year10 }}</a>
          <a v-if="row.year10 < 0" :href="market" style="color: green">{{ row.year10 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="9年前">
        <template #default="{ row }">
          <a v-if="row.year9 > 0" :href="market" style="color: red">{{ row.year9 }}</a>
          <a v-if="row.year9 == 0" :href="market" style="color: gray">{{ row.year9 }}</a>
          <a v-if="row.year9 < 0" :href="market" style="color: green">{{ row.year9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year8 > 0" :href="market" style="color: red">{{ row.year8 }}</a>
          <a v-if="row.year8 == 0" :href="market" style="color: gray">{{ row.year8 }}</a>
          <a v-if="row.year8 < 0" :href="market" style="color: green">{{ row.year8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year7 > 0" :href="market" style="color: red">{{ row.year7 }}</a>
          <a v-if="row.year7 == 0" :href="market" style="color: gray">{{ row.year7 }}</a>
          <a v-if="row.year7 < 0" :href="market" style="color: green">{{ row.year7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year6 > 0" :href="market" style="color: red">{{ row.year6 }}</a>
          <a v-if="row.year6 == 0" :href="market" style="color: gray">{{ row.year6 }}</a>
          <a v-if="row.year6 < 0" :href="market" style="color: green">{{ row.year6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year5 > 0" :href="market" style="color: red">{{ row.year5 }}</a>
          <a v-if="row.year5 == 0" :href="market" style="color: gray">{{ row.year5 }}</a>
          <a v-if="row.year5 < 0" :href="market" style="color: green">{{ row.year5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year4 > 0" :href="market" style="color: red">{{ row.year4 }}</a>
          <a v-if="row.year4 == 0" :href="market" style="color: gray">{{ row.year4 }}</a>
          <a v-if="row.year4 < 0" :href="market" style="color: green">{{ row.year4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year3 > 0" :href="market" style="color: red">{{ row.year3 }}</a>
          <a v-if="row.year3 == 0" :href="market" style="color: gray">{{ row.year3 }}</a>
          <a v-if="row.year3 < 0" :href="market" style="color: green">{{ row.year3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year2 > 0" :href="market" style="color: red">{{ row.year2 }}</a>
          <a v-if="row.year2 == 0" :href="market" style="color: gray">{{ row.year2 }}</a>
          <a v-if="row.year2 < 0" :href="market" style="color: green">{{ row.year2 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="1年前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.year1 > 0" :href="market" style="color: red">{{ row.year1 }}</a>
          <a v-if="row.year1 == 0" :href="market" style="color: gray">{{ row.year1 }}</a>
          <a v-if="row.year1 < 0" :href="market" style="color: green">{{ row.year1 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="70">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            涨跌幅(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a v-if="row.pct_change > 0" :href="market" style="color: red">{{ row.pct_change }}</a>
          <a v-if="row.pct_change == 0" :href="market" style="color: gray">{{ row.pct_change }}</a>
          <a v-if="row.pct_change < 0" :href="market" style="color: green">{{ row.pct_change }}</a>
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
import StatsticsLevelNavigation from "@/components/index/StatsticsLevelNavigation.vue";
import {industryParameterTransform} from "@/Api/utils/urlParameterTransform";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/index/year_overview",para_dic).then(
      (response) => {
        alert(JSON.stringify(response.data));
        tableData.value = response.data;

        var ts_code_list = response.data.map((item)=>{
          return item["ts_code"]
        });

        var name_list = response.data.map((item)=>{
          return item["name"]
        });

        localStorage.setItem("industry_code",ts_code_list);
        localStorage.setItem("industry_name",name_list);
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