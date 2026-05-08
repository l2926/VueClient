
<template>
  <el-container>
    <el-header style="">
      <IndexNavigation></IndexNavigation>
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
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            省份
          </el-link>
        </template>
        <template #default="{ row }">
          <!--          <e-link :href="market" style="color: gray">{{ row.industry_name_l1 }}</e-link>-->
          <el-link :href="`/#/index/market_overview?select_id=1&p\ara_id=1&block_id=1&level=L1&index_code=${row.index_code_l1}&trade_date=${row.trade_date}`" style="color: gray" target="_blank">{{ row.province }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业1
          </el-link>
        </template>
        <template #default="{ row }">
          <!--          <e-link :href="market" style="color: gray">{{ row.industry_name_l1 }}</e-link>-->
          <el-link :href="`/#/index/market_overview?select_id=1&p\ara_id=1&block_id=1&level=L1&index_code=${row.index_code_l1}&trade_date=${row.trade_date}`" style="color: gray" target="_blank">{{ row.industry_name_l1 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业2
          </el-link>
        </template>
        <template #default="{ row }">
          <!--          <a :href="market" style="color: gray">{{ row.industry_name_l2 }}</a>-->
          <el-link :href="`/#/industry/fundamental?select_id=1&p\ara_id=1&sort_id=1&level=L2&industry_code=${row.index_code_l2}&trade_date=${row.trade_date}&start_date=20251231`" style="color: gray" target="_blank">{{ row.industry_name_l2 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="150">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业3
          </el-link>
        </template>
        <template #default="{ row }">
          <!--          <a :href="market" style="color: gray">{{ row.industry_name_l3 }}</a>-->
          <el-link :href="`/#/industry/fundamental?select_id=1&p\ara_id=1&sort_id=1&level=L3&industry_code=${row.index_code_l3}&trade_date=${row.trade_date}&start_date=20251231`" style="color: gray" target="_blank">{{ row.industry_name_l3 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            PE
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: navy">{{ row.pe }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            PB
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Olive">{{ row.pb }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            PS
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Teal">{{ row.ps }}</a>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            收入(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.income }}</a>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            利润(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.profit }}</a>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            交易金额(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.amt }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            ROE
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: purple">{{ row.roe }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            利润率(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Fuchsia">{{ row.profit_rate }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            换手率(%)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Silver">{{ row.turnover }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            计数
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: Teal">{{ row.ct }}</a>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            净资产(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.asset }}</a>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            市值(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.mv }}</a>
        </template>
      </el-table-column>
      <el-table-column width="120">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            平均市值(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.avg_mv }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="address"
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
import {indexParameterTransform} from "@/Api/utils/urlParameterTransform";
import IndexNavigation from "@/components/index/IndexNavigation.vue";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = indexParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/index/statistics_area_excel",para_dic).then(
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