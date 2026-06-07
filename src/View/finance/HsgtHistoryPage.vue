
<template>
  <el-container>
    <el-header style="">
      <FinanceNavigation></FinanceNavigation>
      HSGT history
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
          <el-link :href="`/#/market/daily?select_id=1&p\ara_id=20&level=L1&id=${row.idx}&trade_date=${row.trade_date}`" style="color: gray" target="_blank">{{ row.name }}</el-link>
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
          <el-link class="headItem" @click="onSelectIndustryL3" style="text-decoration: none; color: inherit;">
            行业3
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.industry_name_l3 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20170630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20180630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20181231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20191231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20200630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20201231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20210630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20211231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20220630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20221231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20230630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20241231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20250630 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20251231 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="20170630"
          width="70">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.num20260331 }}</a>
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
          <el-link class="headItem" @click="onSelectAssets" style="text-decoration: none; color: inherit;">
            净资产(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.asset }}</a>
        </template>
      </el-table-column>
      <el-table-column>
        <template #header>
          <el-link class="headItem" @click="onSelectTotalMv" style="text-decoration: none; color: inherit;">
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
import {useRoute, useRouter} from "vue-router";
import {industryParameterTransform} from "@/Api/utils/urlParameterTransform";
import FinanceNavigation from "@/components/finance/FinanceNavigation.vue";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const router = useRouter();

const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/finance/hsgt_hold",para_dic).then(
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


const onSelectIndustryL3 = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 2
  router.push({path:'/finance/finance_history',query:query_dic})
}

const onSelectTotalMv = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 1
  router.push({path:'/finance/finance_history',query:query_dic})
}

const onSelectAssets = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 3
  router.push({path:'/finance/finance_history',query:query_dic})
}

</script>

<style scoped>
.headItem{
  font-weight: bold;
  text-align: left;
}
</style>