
<template>
  <el-container>
    <el-header style="">
      <FinanceNavigation></FinanceNavigation>
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
      <el-table-column width="85">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业1
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.industry_name_l1 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="80">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业2
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.industry_name_l2 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="80">
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
          prop="date"
          label="净资产"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.net_assets }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="总资产"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_assets }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="总负债"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_liab }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="杠杆率"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.level_rate }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="营业总收入"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_revenue }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="营业总成本"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.total_cogs }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="营业成本"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.oper_cost }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="净利润"
          width="65">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.nincome_attr_p }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="利润率(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.profit_rate }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="ROE(%)"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.roe }}</a>
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
      <el-table-column>
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            净资产(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.assets }}</a>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            市值(亿)
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
import {industryParameterTransform} from "@/Api/utils/urlParameterTransform";
import FinanceNavigation from "@/components/finance/FinanceNavigation.vue";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/finance/finance_overview",para_dic).then(
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