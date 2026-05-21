
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
      <el-table-column
          prop="date"
          label="公司名称"
          width="90">
        <template #default="{ row }">
          <el-link :href="`/#/index/dc_member?theme_code=${row.theme_code}&name=${row.name}&sort_id=1`" style="color: gray" target="_blank">{{ row.name }}</el-link>
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

      <el-table-column>
        <template #header>
          <el-link class="headItem" @click="onSelectZTNum" style="text-decoration: none; color: inherit;">
            涨停个数
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.ztnum}}</a>
        </template>
      </el-table-column>

      <el-table-column
          prop="address"
          label="领涨个股">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.lead_stock}}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="address"
          label="领涨个股涨幅">
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.lead_stock_pct_change}}</a>
        </template>
      </el-table-column>

      <el-table-column>
        <template #header>
          <el-link class="headItem" @click="onSelectMainChange" style="text-decoration: none; color: inherit;">
            主力流入金额(亿)
          </el-link>
        </template>
        <template #default="{ row }">
          <a :href="market" style="color: gray">{{ row.main_change}}</a>
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
import IndexNavigation from "@/components/index/IndexNavigation.vue";

//初始化所属表格内容
var tableData = ref([]);

//ajax获取行业信息
const route = useRoute();
const axiosTable = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  // alert(JSON.stringify(query_dic))
  // alert("dsfsf")
  axios.post("http://127.0.0.1:8081/index/dc_index2",query_dic).then(
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
    alert(error);
  });
}

onMounted(axiosTable);
onUpdated(axiosTable);

const router = useRouter()
//根据表格标题头排序
const onSelectPctChg = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 1
  router.push({path:'/index/dc_index2',query:query_dic})
}

const onSelectZTNum = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 2
  router.push({path:'/index/dc_index2',query:query_dic})
}

const onSelectMainChange = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["sort_id"] = 3
  router.push({path:'/index/dc_index2',query:query_dic})
}
</script>

<style scoped>
.headItem{
  font-weight: bold;
  text-align: left;
}
</style>