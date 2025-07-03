
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
          <el-link :href="`/#/market/daily?select_id=1&p\ara_id=1&level=analysis&id=${row.idx}&trade_date=20240926`" style="color: gray" target="_blank">{{ row.name }}</el-link>
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
          prop="date"
          label="买盘特大(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: red">{{ row.buy_elg_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="买盘大(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: red">{{ row.buy_lg_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="买盘中(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: red">{{ row.buy_md_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="买盘小(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: red">{{ row.buy_sm_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="卖盘特大(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.sell_elg_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="卖盘大(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.sell_lg_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="卖盘中(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.sell_md_amount_pct }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="卖盘小(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.sell_sm_amount_pct }}</a>
        </template>
      </el-table-column>

      <el-table-column width="60">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            换手(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Silver">{{ row.turnover_rate }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="净流入金额"
          width="70">
        <template #default="{ row }">
          <a v-if="row.net_mf_amount > 0" :href="market" style="color: red">{{ row.net_mf_amount }}</a>
          <a v-if="row.net_mf_amount == 0" :href="market" style="color: gray">{{ row.net_mf_amount }}</a>
          <a v-if="row.net_mf_amount < 0" :href="market" style="color: green">{{ row.net_mf_amount }}</a>
        </template>
      </el-table-column>
      <el-table-column width="60">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            成交金额
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Teal">{{ row.amount }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="address"
          label="板块"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.market }}</a>
        </template>
      </el-table-column>
      <el-table-column width="80">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            净资产
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.assets }}</a>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            市值
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_mv }}</a>
        </template>
      </el-table-column>
      <el-table-column
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

const route = useRoute();


var tableData = ref([]);

const onSelectDate = ()=>{
  alert("dsfds")
}

const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  axios.post("http://127.0.0.1:8081/industry/money_flow_pct",para_dic).then(
      (response) => {
        var raw_data = response.data;
        // alert(JSON.stringify(raw_data));
        tableData.value = raw_data;

        var ts_code_list = raw_data.map((item)=>{
          return item["ts_code"];
        })

        var name_list = raw_data.map((item)=>{
          return item["name"];
        })

        localStorage.setItem("analysis_code",ts_code_list);
        localStorage.setItem("analysis_name",name_list);
      }
  ).catch(error => {
    console.log(error);
    alert("axios请求错误");
  });
}

onMounted(axiosTable);
onUpdated(axiosTable);
</script>

<style scoped>
.headItem{
  font-weight: bold;
  text-align: left;
}
</style>