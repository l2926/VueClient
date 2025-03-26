
<template>
  <el-container>
    <el-header style="">
      <FundamentalNavigation></FundamentalNavigation>
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
      <el-table-column
          label="9天前">
        <template #default="{ row }">
          <a v-if="row.ypct9 > 0" :href="market" style="color: red">{{ row.ypct9 }}</a>
          <a v-if="row.ypct9 == 0" :href="market" style="color: gray">{{ row.ypct9 }}</a>
          <a v-if="row.ypct9 < 0" :href="market" style="color: green">{{ row.ypct9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct8 > 0" :href="market" style="color: red">{{ row.ypct8 }}</a>
          <a v-if="row.ypct8 == 0" :href="market" style="color: gray">{{ row.ypct8 }}</a>
          <a v-if="row.ypct8 < 0" :href="market" style="color: green">{{ row.ypct8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct7 > 0" :href="market" style="color: red">{{ row.ypct7 }}</a>
          <a v-if="row.ypct7 == 0" :href="market" style="color: gray">{{ row.ypct7 }}</a>
          <a v-if="row.ypct7 < 0" :href="market" style="color: green">{{ row.ypct7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct6 > 0" :href="market" style="color: red">{{ row.ypct6 }}</a>
          <a v-if="row.ypct6 == 0" :href="market" style="color: gray">{{ row.ypct6 }}</a>
          <a v-if="row.ypct6 < 0" :href="market" style="color: green">{{ row.ypct6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct5 > 0" :href="market" style="color: red">{{ row.ypct5 }}</a>
          <a v-if="row.ypct5 == 0" :href="market" style="color: gray">{{ row.ypct5 }}</a>
          <a v-if="row.ypct5 < 0" :href="market" style="color: green">{{ row.ypct5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct4 > 0" :href="market" style="color: red">{{ row.ypct4 }}</a>
          <a v-if="row.ypct4 == 0" :href="market" style="color: gray">{{ row.ypct4 }}</a>
          <a v-if="row.ypct4 < 0" :href="market" style="color: green">{{ row.ypct4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct3 > 0" :href="market" style="color: red">{{ row.ypct3 }}</a>
          <a v-if="row.ypct3 == 0" :href="market" style="color: gray">{{ row.ypct3 }}</a>
          <a v-if="row.ypct3 < 0" :href="market" style="color: green">{{ row.ypct3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct2 > 0" :href="market" style="color: red">{{ row.ypct2 }}</a>
          <a v-if="row.ypct2 == 0" :href="market" style="color: gray">{{ row.ypct2 }}</a>
          <a v-if="row.ypct2 < 0" :href="market" style="color: green">{{ row.ypct2 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="1天前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.ypct1 > 0" :href="market" style="color: red">{{ row.ypct1 }}</a>
          <a v-if="row.ypct1 == 0" :href="market" style="color: gray">{{ row.ypct1 }}</a>
          <a v-if="row.ypct1 < 0" :href="market" style="color: green">{{ row.ypct1 }}</a>
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
import FundamentalNavigation from "@/components/industry/FundamentalNavigation.vue";
import {industryParameterTransform} from "@/Api/utils/urlParameterTransform";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/industry/ten_days_market",para_dic).then(
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