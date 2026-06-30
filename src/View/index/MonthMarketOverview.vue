WeekMarketOverview.vue
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
          <el-link :href="`/#/industry/week_overview?select_id=2&p\ara_id=1&sort_id=1&level=L1&industry_code=${row.index_code_l1}&trade_date=${row.trade_date}&start_date=20251231`" style="color: gray" target="_blank">{{ row.industry_name_l1 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectDate" style="text-decoration: none; color: inherit;">
            行业2
          </el-link>
        </template>
        <template #default="{ row }">
          <el-link :href="`/#/industry/week_overview?select_id=2&p\ara_id=1&sort_id=1&level=L2&industry_code=${row.index_code_l2}&trade_date=${row.trade_date}&start_date=20251231`" style="color: gray" target="_blank">{{ row.industry_name_l2 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template #header>
          <el-link class="headItem" @click="onSelectIndustry3" style="text-decoration: none; color: inherit;">
            行业3
          </el-link>
        </template>
        <template #default="{ row }">
          <el-link :href="`/#/industry/week_overview?select_id=2&p\ara_id=1&sort_id=1&level=L3&industry_code=${row.index_code_l3}&trade_date=${row.trade_date}&start_date=20251231`" style="color: gray" target="_blank">{{ row.industry_name_l3 }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
          label="15月前">
        <template #default="{ row }">
          <a v-if="row.month15 > 0" :href="market" style="color: red">{{ row.month15 }}</a>
          <a v-if="row.month15 == 0" :href="market" style="color: gray">{{ row.month15 }}</a>
          <a v-if="row.month15 < 0" :href="market" style="color: green">{{ row.month15 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="14月前">
        <template #default="{ row }">
          <a v-if="row.month14 > 0" :href="market" style="color: red">{{ row.month14 }}</a>
          <a v-if="row.month14 == 0" :href="market" style="color: gray">{{ row.month14 }}</a>
          <a v-if="row.month14 < 0" :href="market" style="color: green">{{ row.month14 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="13月前">
        <template #default="{ row }">
          <a v-if="row.month13 > 0" :href="market" style="color: red">{{ row.month13 }}</a>
          <a v-if="row.month13 == 0" :href="market" style="color: gray">{{ row.month13 }}</a>
          <a v-if="row.month13 < 0" :href="market" style="color: green">{{ row.month13 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="12月前">
        <template #default="{ row }">
          <a v-if="row.month12 > 0" :href="market" style="color: red">{{ row.month12 }}</a>
          <a v-if="row.month12 == 0" :href="market" style="color: gray">{{ row.month12 }}</a>
          <a v-if="row.month12 < 0" :href="market" style="color: green">{{ row.month12 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="11月前">
        <template #default="{ row }">
          <a v-if="row.month11 > 0" :href="market" style="color: red">{{ row.month11 }}</a>
          <a v-if="row.month11 == 0" :href="market" style="color: gray">{{ row.month11 }}</a>
          <a v-if="row.month11 < 0" :href="market" style="color: green">{{ row.month11 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="10月前">
        <template #default="{ row }">
          <a v-if="row.month10 > 0" :href="market" style="color: red">{{ row.month10 }}</a>
          <a v-if="row.month10 == 0" :href="market" style="color: gray">{{ row.month10 }}</a>
          <a v-if="row.month10 < 0" :href="market" style="color: green">{{ row.month10 }}</a>
        </template>
      </el-table-column>

      <el-table-column
          label="9月前">
        <template #default="{ row }">
          <a v-if="row.month9 > 0" :href="market" style="color: red">{{ row.month9 }}</a>
          <a v-if="row.month9 == 0" :href="market" style="color: gray">{{ row.month9 }}</a>
          <a v-if="row.month9 < 0" :href="market" style="color: green">{{ row.month9 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="8月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month8 > 0" :href="market" style="color: red">{{ row.month8 }}</a>
          <a v-if="row.month8 == 0" :href="market" style="color: gray">{{ row.month8 }}</a>
          <a v-if="row.month8 < 0" :href="market" style="color: green">{{ row.month8 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="7月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month7 > 0" :href="market" style="color: red">{{ row.month7 }}</a>
          <a v-if="row.month7 == 0" :href="market" style="color: gray">{{ row.month7 }}</a>
          <a v-if="row.month7 < 0" :href="market" style="color: green">{{ row.month7 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="6月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month6 > 0" :href="market" style="color: red">{{ row.month6 }}</a>
          <a v-if="row.month6 == 0" :href="market" style="color: gray">{{ row.month6 }}</a>
          <a v-if="row.month6 < 0" :href="market" style="color: green">{{ row.month6 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="5月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month5 > 0" :href="market" style="color: red">{{ row.month5 }}</a>
          <a v-if="row.month5 == 0" :href="market" style="color: gray">{{ row.month5 }}</a>
          <a v-if="row.month5 < 0" :href="market" style="color: green">{{ row.month5 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="4月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month4 > 0" :href="market" style="color: red">{{ row.month4 }}</a>
          <a v-if="row.month4 == 0" :href="market" style="color: gray">{{ row.month4 }}</a>
          <a v-if="row.month4 < 0" :href="market" style="color: green">{{ row.month4 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="3月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month3 > 0" :href="market" style="color: red">{{ row.month3 }}</a>
          <a v-if="row.month3 == 0" :href="market" style="color: gray">{{ row.month3 }}</a>
          <a v-if="row.month3 < 0" :href="market" style="color: green">{{ row.month3 }}</a>
        </template>
      </el-table-column>
      <el-table-column
          label="2月前"
          width="65">
        <template #default="{ row }">
          <a v-if="row.month2 > 0" :href="market" style="color: red">{{ row.month2 }}</a>
          <a v-if="row.month2 == 0" :href="market" style="color: gray">{{ row.month2 }}</a>
          <a v-if="row.month2 < 0" :href="market" style="color: green">{{ row.month2 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="65">
        <template #header>
          <el-link class="headItem" @click="onPreMonth1" style="text-decoration: none; color: inherit;">
            1月前
          </el-link>
        </template>
        <template #default="{ row }">
          <a v-if="row.month1 > 0" :href="market" style="color: red">{{ row.month1 }}</a>
          <a v-if="row.month1 == 0" :href="market" style="color: gray">{{ row.month1 }}</a>
          <a v-if="row.month1 < 0" :href="market" style="color: green">{{ row.month1 }}</a>
        </template>
      </el-table-column>
      <el-table-column width="70">
        <template #header>
          <el-link class="headItem" @click="onSelectPctChg" style="text-decoration: none; color: inherit;">
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
import StatsticsLevelNavigation from "@/components/index/StatsticsLevelNavigation.vue";
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
  axios.post("http://127.0.0.1:8081/index/month_overview",para_dic).then(
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

const onPreMonth1=()=>{
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