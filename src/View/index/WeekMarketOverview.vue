
<template>
  <el-container>
    <el-header style="">
      <StatsticsLevelNavigation></StatsticsLevelNavigation>
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
          label="15周前">
        <template #default="{ row }">
          <a v-if="row.week15 > 0" :href="market" style="color: red">{{ row.week15 }}</a>
          <a v-if="row.week15 == 0" :href="market" style="color: gray">{{ row.week15 }}</a>
          <a v-if="row.week15 < 0" :href="market" style="color: green">{{ row.week15 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="14周前">
        <template #default="{ row }">
          <a v-if="row.week14 > 0" :href="market" style="color: red">{{ row.week14 }}</a>
          <a v-if="row.week14 == 0" :href="market" style="color: gray">{{ row.week14 }}</a>
          <a v-if="row.week14 < 0" :href="market" style="color: green">{{ row.week14 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="13周前">
        <template #default="{ row }">
          <a v-if="row.week13 > 0" :href="market" style="color: red">{{ row.week13 }}</a>
          <a v-if="row.week13 == 0" :href="market" style="color: gray">{{ row.week13 }}</a>
          <a v-if="row.week13 < 0" :href="market" style="color: green">{{ row.week13 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="12周前">
        <template #default="{ row }">
          <a v-if="row.week12 > 0" :href="market" style="color: red">{{ row.week12 }}</a>
          <a v-if="row.week12 == 0" :href="market" style="color: gray">{{ row.week12 }}</a>
          <a v-if="row.week12 < 0" :href="market" style="color: green">{{ row.week12 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="11周前">
        <template #default="{ row }">
          <a v-if="row.week11 > 0" :href="market" style="color: red">{{ row.week11 }}</a>
          <a v-if="row.week11 == 0" :href="market" style="color: gray">{{ row.week11 }}</a>
          <a v-if="row.week11 < 0" :href="market" style="color: green">{{ row.week11 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="10周前">
        <template #default="{ row }">
          <a v-if="row.week10 > 0" :href="market" style="color: red">{{ row.week10 }}</a>
          <a v-if="row.week10 == 0" :href="market" style="color: gray">{{ row.week10 }}</a>
          <a v-if="row.week10 < 0" :href="market" style="color: green">{{ row.week10 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="9周前">
        <template #default="{ row }">
          <a v-if="row.week9 > 0" :href="market" style="color: red">{{ row.week9 }}</a>
          <a v-if="row.week9 == 0" :href="market" style="color: gray">{{ row.week9 }}</a>
          <a v-if="row.week9 < 0" :href="market" style="color: green">{{ row.week9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week8 > 0" :href="market" style="color: red">{{ row.week8 }}</a>
          <a v-if="row.week8 == 0" :href="market" style="color: gray">{{ row.week8 }}</a>
          <a v-if="row.week8 < 0" :href="market" style="color: green">{{ row.week8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week7 > 0" :href="market" style="color: red">{{ row.week7 }}</a>
          <a v-if="row.week7 == 0" :href="market" style="color: gray">{{ row.week7 }}</a>
          <a v-if="row.week7 < 0" :href="market" style="color: green">{{ row.week7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week6 > 0" :href="market" style="color: red">{{ row.week6 }}</a>
          <a v-if="row.week6 == 0" :href="market" style="color: gray">{{ row.week6 }}</a>
          <a v-if="row.week6 < 0" :href="market" style="color: green">{{ row.week6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week5 > 0" :href="market" style="color: red">{{ row.week5 }}</a>
          <a v-if="row.week5 == 0" :href="market" style="color: gray">{{ row.week5 }}</a>
          <a v-if="row.week5 < 0" :href="market" style="color: green">{{ row.week5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week4 > 0" :href="market" style="color: red">{{ row.week4 }}</a>
          <a v-if="row.week4 == 0" :href="market" style="color: gray">{{ row.week4 }}</a>
          <a v-if="row.week4 < 0" :href="market" style="color: green">{{ row.week4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week3 > 0" :href="market" style="color: red">{{ row.week3 }}</a>
          <a v-if="row.week3 == 0" :href="market" style="color: gray">{{ row.week3 }}</a>
          <a v-if="row.week3 < 0" :href="market" style="color: green">{{ row.week3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week2 > 0" :href="market" style="color: red">{{ row.week2 }}</a>
          <a v-if="row.week2 == 0" :href="market" style="color: gray">{{ row.week2 }}</a>
          <a v-if="row.week2 < 0" :href="market" style="color: green">{{ row.week2 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="1周前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.week1 > 0" :href="market" style="color: red">{{ row.week1 }}</a>
          <a v-if="row.week1 == 0" :href="market" style="color: gray">{{ row.week1 }}</a>
          <a v-if="row.week1 < 0" :href="market" style="color: green">{{ row.week1 }}</a>
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
  axios.post("http://127.0.0.1:8081/index/week_overview",para_dic).then(
      (response) => {
        // alert(JSON.stringify(response.data));
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