
<template>
  <el-container>
    <el-header style="">
      <StatsticsLevelNavigation></StatsticsLevelNavigation>
      daily index
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
          label="15日前">
        <template #default="{ row }">
          <a v-if="row.day15 > 0" :href="market" style="color: red">{{ row.day15 }}</a>
          <a v-if="row.day15 == 0" :href="market" style="color: gray">{{ row.day15 }}</a>
          <a v-if="row.day15 < 0" :href="market" style="color: green">{{ row.day15 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="14日前">
        <template #default="{ row }">
          <a v-if="row.day14 > 0" :href="market" style="color: red">{{ row.day14 }}</a>
          <a v-if="row.day14 == 0" :href="market" style="color: gray">{{ row.day14 }}</a>
          <a v-if="row.day14 < 0" :href="market" style="color: green">{{ row.day14 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="13日前">
        <template #default="{ row }">
          <a v-if="row.day13 > 0" :href="market" style="color: red">{{ row.day13 }}</a>
          <a v-if="row.day13 == 0" :href="market" style="color: gray">{{ row.day13 }}</a>
          <a v-if="row.day13 < 0" :href="market" style="color: green">{{ row.day13 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="12日前">
        <template #default="{ row }">
          <a v-if="row.day12 > 0" :href="market" style="color: red">{{ row.day12 }}</a>
          <a v-if="row.day12 == 0" :href="market" style="color: gray">{{ row.day12 }}</a>
          <a v-if="row.day12 < 0" :href="market" style="color: green">{{ row.day12 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="11日前">
        <template #default="{ row }">
          <a v-if="row.day11 > 0" :href="market" style="color: red">{{ row.day11 }}</a>
          <a v-if="row.day11 == 0" :href="market" style="color: gray">{{ row.day11 }}</a>
          <a v-if="row.day11 < 0" :href="market" style="color: green">{{ row.day11 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="10日前">
        <template #default="{ row }">
          <a v-if="row.day10 > 0" :href="market" style="color: red">{{ row.day10 }}</a>
          <a v-if="row.day10 == 0" :href="market" style="color: gray">{{ row.day10 }}</a>
          <a v-if="row.day10 < 0" :href="market" style="color: green">{{ row.day10 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="9日前">
        <template #default="{ row }">
          <a v-if="row.day9 > 0" :href="market" style="color: red">{{ row.day9 }}</a>
          <a v-if="row.day9 == 0" :href="market" style="color: gray">{{ row.day9 }}</a>
          <a v-if="row.day9 < 0" :href="market" style="color: green">{{ row.day9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day8 > 0" :href="market" style="color: red">{{ row.day8 }}</a>
          <a v-if="row.day8 == 0" :href="market" style="color: gray">{{ row.day8 }}</a>
          <a v-if="row.day8 < 0" :href="market" style="color: green">{{ row.day8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day7 > 0" :href="market" style="color: red">{{ row.day7 }}</a>
          <a v-if="row.day7 == 0" :href="market" style="color: gray">{{ row.day7 }}</a>
          <a v-if="row.day7 < 0" :href="market" style="color: green">{{ row.day7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day6 > 0" :href="market" style="color: red">{{ row.day6 }}</a>
          <a v-if="row.day6 == 0" :href="market" style="color: gray">{{ row.day6 }}</a>
          <a v-if="row.day6 < 0" :href="market" style="color: green">{{ row.day6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day5 > 0" :href="market" style="color: red">{{ row.day5 }}</a>
          <a v-if="row.day5 == 0" :href="market" style="color: gray">{{ row.day5 }}</a>
          <a v-if="row.day5 < 0" :href="market" style="color: green">{{ row.day5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day4 > 0" :href="market" style="color: red">{{ row.day4 }}</a>
          <a v-if="row.day4 == 0" :href="market" style="color: gray">{{ row.day4 }}</a>
          <a v-if="row.day4 < 0" :href="market" style="color: green">{{ row.day4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day3 > 0" :href="market" style="color: red">{{ row.day3 }}</a>
          <a v-if="row.day3 == 0" :href="market" style="color: gray">{{ row.day3 }}</a>
          <a v-if="row.day3 < 0" :href="market" style="color: green">{{ row.day3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day2 > 0" :href="market" style="color: red">{{ row.day2 }}</a>
          <a v-if="row.day2 == 0" :href="market" style="color: gray">{{ row.day2 }}</a>
          <a v-if="row.day2 < 0" :href="market" style="color: green">{{ row.day2 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="1日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day1 > 0" :href="market" style="color: red">{{ row.day1 }}</a>
          <a v-if="row.day1 == 0" :href="market" style="color: gray">{{ row.day1 }}</a>
          <a v-if="row.day1 < 0" :href="market" style="color: green">{{ row.day1 }}</a>
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
  axios.post("http://127.0.0.1:8081/index/daily_overview",para_dic).then(
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