
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
          <el-link class="headItem" @click="onSelectIndustry3" style="text-decoration: none; color: inherit;">
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
          <a v-if="row.day_pct15 > 0" :href="market" style="color: red">{{ row.day_pct15 }}</a>
          <a v-if="row.day_pct15 == 0" :href="market" style="color: gray">{{ row.day_pct15 }}</a>
          <a v-if="row.day_pct15 < 0" :href="market" style="color: green">{{ row.day_pct15 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="14日前">
        <template #default="{ row }">
          <a v-if="row.day_pct14 > 0" :href="market" style="color: red">{{ row.day_pct14 }}</a>
          <a v-if="row.day_pct14 == 0" :href="market" style="color: gray">{{ row.day_pct14 }}</a>
          <a v-if="row.day_pct14 < 0" :href="market" style="color: green">{{ row.day_pct14 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="13日前">
        <template #default="{ row }">
          <a v-if="row.day_pct13 > 0" :href="market" style="color: red">{{ row.day_pct13 }}</a>
          <a v-if="row.day_pct13 == 0" :href="market" style="color: gray">{{ row.day_pct13 }}</a>
          <a v-if="row.day_pct13 < 0" :href="market" style="color: green">{{ row.day_pct13 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="12日前">
        <template #default="{ row }">
          <a v-if="row.day_pct12 > 0" :href="market" style="color: red">{{ row.day_pct12 }}</a>
          <a v-if="row.day_pct12 == 0" :href="market" style="color: gray">{{ row.day_pct12 }}</a>
          <a v-if="row.day_pct12 < 0" :href="market" style="color: green">{{ row.day_pct12 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="11日前">
        <template #default="{ row }">
          <a v-if="row.day_pct11 > 0" :href="market" style="color: red">{{ row.day_pct11 }}</a>
          <a v-if="row.day_pct11 == 0" :href="market" style="color: gray">{{ row.day_pct11 }}</a>
          <a v-if="row.day_pct11 < 0" :href="market" style="color: green">{{ row.day_pct11 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="10日前">
        <template #default="{ row }">
          <a v-if="row.day_pct10 > 0" :href="market" style="color: red">{{ row.day_pct10 }}</a>
          <a v-if="row.day_pct10 == 0" :href="market" style="color: gray">{{ row.day_pct10 }}</a>
          <a v-if="row.day_pct10 < 0" :href="market" style="color: green">{{ row.day_pct10 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="9日前">
        <template #default="{ row }">
          <a v-if="row.day_pct9 > 0" :href="market" style="color: red">{{ row.day_pct9 }}</a>
          <a v-if="row.day_pct9 == 0" :href="market" style="color: gray">{{ row.day_pct9 }}</a>
          <a v-if="row.day_pct9 < 0" :href="market" style="color: green">{{ row.day_pct9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct8 > 0" :href="market" style="color: red">{{ row.day_pct8 }}</a>
          <a v-if="row.day_pct8 == 0" :href="market" style="color: gray">{{ row.day_pct8 }}</a>
          <a v-if="row.day_pct8 < 0" :href="market" style="color: green">{{ row.day_pct8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct7 > 0" :href="market" style="color: red">{{ row.day_pct7 }}</a>
          <a v-if="row.day_pct7 == 0" :href="market" style="color: gray">{{ row.day_pct7 }}</a>
          <a v-if="row.day_pct7 < 0" :href="market" style="color: green">{{ row.day_pct7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct6 > 0" :href="market" style="color: red">{{ row.day_pct6 }}</a>
          <a v-if="row.day_pct6 == 0" :href="market" style="color: gray">{{ row.day_pct6 }}</a>
          <a v-if="row.day_pct6 < 0" :href="market" style="color: green">{{ row.day_pct6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct5 > 0" :href="market" style="color: red">{{ row.day_pct5 }}</a>
          <a v-if="row.day_pct5 == 0" :href="market" style="color: gray">{{ row.day_pct5 }}</a>
          <a v-if="row.day_pct5 < 0" :href="market" style="color: green">{{ row.day_pct5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct4 > 0" :href="market" style="color: red">{{ row.day_pct4 }}</a>
          <a v-if="row.day_pct4 == 0" :href="market" style="color: gray">{{ row.day_pct4 }}</a>
          <a v-if="row.day_pct4 < 0" :href="market" style="color: green">{{ row.day_pct4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct3 > 0" :href="market" style="color: red">{{ row.day_pct3 }}</a>
          <a v-if="row.day_pct3 == 0" :href="market" style="color: gray">{{ row.day_pct3 }}</a>
          <a v-if="row.day_pct3 < 0" :href="market" style="color: green">{{ row.day_pct3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2日前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.day_pct2 > 0" :href="market" style="color: red">{{ row.day_pct2 }}</a>
          <a v-if="row.day_pct2 == 0" :href="market" style="color: gray">{{ row.day_pct2 }}</a>
          <a v-if="row.day_pct2 < 0" :href="market" style="color: green">{{ row.day_pct2 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="65">
        <template #header>
          <el-link class="headItem" @click="onPreDay1" style="text-decoration: none; color: inherit;">
            1日前
          </el-link>
        </template>
        <template #default="{ row }">
          <a v-if="row.day_pct1 > 0" :href="market" style="color: red">{{ row.day_pct1 }}</a>
          <a v-if="row.day_pct1 == 0" :href="market" style="color: gray">{{ row.day_pct1 }}</a>
          <a v-if="row.day_pct1 < 0" :href="market" style="color: green">{{ row.day_pct1 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="70">
        <template #header>
          <el-link class="headItem" @click="onSelectPctChg" style="text-decoration: none; color: inherit;">
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
          <el-link class="headItem" @click="onSelectAsset" style="text-decoration: none; color: inherit;">
            净资产(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.asset }}</a>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectTotalMv" style="text-decoration: none; color: inherit;">
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
import {useRoute, useRouter} from "vue-router";
import FundamentalNavigation from "@/components/industry/FundamentalNavigation.vue";
import {industryParameterTransform} from "@/Api/utils/urlParameterTransform";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const router = useRouter();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  const para_dic = industryParameterTransform(query_dic);
  // alert(JSON.stringify(para_dic))
  axios.post("http://127.0.0.1:8081/industry/daily_overview",para_dic).then(
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

const onSelectIndustry3=()=>{
  // alert('333')
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 2
  router.push({path:route.path,query:query_dic})
}

const onSelectAsset=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 3
  router.push({path:route.path,query:query_dic})
}

const onSelectTotalMv=()=>{
  // alert('mv')
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 1
  router.push({path:route.path,query:query_dic})
}

const onSelectPctChg=()=>{
  // alert('mv')
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 4
  router.push({path:route.path,query:query_dic})
}

const onPreDay1=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 5
  router.push({path:route.path,query:query_dic})
}

</script>

<style scoped>
.headItem{
  font-weight: bold;
  text-align: left;
}
</style>