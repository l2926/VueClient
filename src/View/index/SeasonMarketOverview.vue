
<template>
  <el-container>
    <el-header style="">
      <StatsticsLevelNavigation></StatsticsLevelNavigation>
      season index
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
          label="15季前">
        <template #default="{ row }">
          <a v-if="row.season15 > 0" :href="market" style="color: red">{{ row.season15 }}</a>
          <a v-if="row.season15 == 0" :href="market" style="color: gray">{{ row.season15 }}</a>
          <a v-if="row.season15 < 0" :href="market" style="color: green">{{ row.season15 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="14季前">
        <template #default="{ row }">
          <a v-if="row.season14 > 0" :href="market" style="color: red">{{ row.season14 }}</a>
          <a v-if="row.season14 == 0" :href="market" style="color: gray">{{ row.season14 }}</a>
          <a v-if="row.season14 < 0" :href="market" style="color: green">{{ row.season14 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="13季前">
        <template #default="{ row }">
          <a v-if="row.season13 > 0" :href="market" style="color: red">{{ row.season13 }}</a>
          <a v-if="row.season13 == 0" :href="market" style="color: gray">{{ row.season13 }}</a>
          <a v-if="row.season13 < 0" :href="market" style="color: green">{{ row.season13 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="12季前">
        <template #default="{ row }">
          <a v-if="row.season12 > 0" :href="market" style="color: red">{{ row.season12 }}</a>
          <a v-if="row.season12 == 0" :href="market" style="color: gray">{{ row.season12 }}</a>
          <a v-if="row.season12 < 0" :href="market" style="color: green">{{ row.season12 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="11季前">
        <template #default="{ row }">
          <a v-if="row.season11 > 0" :href="market" style="color: red">{{ row.season11 }}</a>
          <a v-if="row.season11 == 0" :href="market" style="color: gray">{{ row.season11 }}</a>
          <a v-if="row.season11 < 0" :href="market" style="color: green">{{ row.season11 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="10季前">
        <template #default="{ row }">
          <a v-if="row.season10 > 0" :href="market" style="color: red">{{ row.season10 }}</a>
          <a v-if="row.season10 == 0" :href="market" style="color: gray">{{ row.season10 }}</a>
          <a v-if="row.season10 < 0" :href="market" style="color: green">{{ row.season10 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="9季前">
        <template #default="{ row }">
          <a v-if="row.season9 > 0" :href="market" style="color: red">{{ row.season9 }}</a>
          <a v-if="row.season9 == 0" :href="market" style="color: gray">{{ row.season9 }}</a>
          <a v-if="row.season9 < 0" :href="market" style="color: green">{{ row.season9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season8 > 0" :href="market" style="color: red">{{ row.season8 }}</a>
          <a v-if="row.season8 == 0" :href="market" style="color: gray">{{ row.season8 }}</a>
          <a v-if="row.season8 < 0" :href="market" style="color: green">{{ row.season8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season7 > 0" :href="market" style="color: red">{{ row.season7 }}</a>
          <a v-if="row.season7 == 0" :href="market" style="color: gray">{{ row.season7 }}</a>
          <a v-if="row.season7 < 0" :href="market" style="color: green">{{ row.season7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season6 > 0" :href="market" style="color: red">{{ row.season6 }}</a>
          <a v-if="row.season6 == 0" :href="market" style="color: gray">{{ row.season6 }}</a>
          <a v-if="row.season6 < 0" :href="market" style="color: green">{{ row.season6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season5 > 0" :href="market" style="color: red">{{ row.season5 }}</a>
          <a v-if="row.season5 == 0" :href="market" style="color: gray">{{ row.season5 }}</a>
          <a v-if="row.season5 < 0" :href="market" style="color: green">{{ row.season5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season4 > 0" :href="market" style="color: red">{{ row.season4 }}</a>
          <a v-if="row.season4 == 0" :href="market" style="color: gray">{{ row.season4 }}</a>
          <a v-if="row.season4 < 0" :href="market" style="color: green">{{ row.season4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season3 > 0" :href="market" style="color: red">{{ row.season3 }}</a>
          <a v-if="row.season3 == 0" :href="market" style="color: gray">{{ row.season3 }}</a>
          <a v-if="row.season3 < 0" :href="market" style="color: green">{{ row.season3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season2 > 0" :href="market" style="color: red">{{ row.season2 }}</a>
          <a v-if="row.season2 == 0" :href="market" style="color: gray">{{ row.season2 }}</a>
          <a v-if="row.season2 < 0" :href="market" style="color: green">{{ row.season2 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="1季前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.season1 > 0" :href="market" style="color: red">{{ row.season1 }}</a>
          <a v-if="row.season1 == 0" :href="market" style="color: gray">{{ row.season1 }}</a>
          <a v-if="row.season1 < 0" :href="market" style="color: green">{{ row.season1 }}</a>
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
  axios.post("http://127.0.0.1:8081/index/season_overview",para_dic).then(
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