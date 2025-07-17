<template>
  <el-select v-model="dailyLevel" placeholder="行业级别" style="width: 7%" @change="handleSelectLevel" id="test_select">
    <el-option
        v-for="item in levelOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="dailyLevel" placeholder="板块" style="width: 7%" @change="handleSelectBlock" id="test_select">
    <el-option
        v-for="item in blockOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="dailyLevel" placeholder="市值" style="width: 7%" @change="handleSelectMv" id="test_select">
    <el-option
        v-for="item in mvOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="dailyLevel" placeholder="统计范围" style="width: 7%" @change="handleSelectScope" id="test_select">
    <el-option
        v-for="item in scopeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-button style="margin-left:0;margin-right: 0" @click="handleStatistics">行情统计</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleStatisticsAll">所有统计</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleKaipanla">开盘啦题材</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleOriental">东方财富题材</el-button>

  <el-date-picker
      v-model="selectedDate"
      type="date"
      placeholder="选择日期"
      @change="handleDateChange"
      style="width: 8%"
  ></el-date-picker>

  <el-button style="margin-left:0;margin-right: 0" @click="selectPreviousDay">前一天</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="selectNextDay">后一天</el-button>

</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import {getNextDay, getNormDate, getPreviousDay} from "@/Api/utils/calcDate";

const route = useRoute();
const router = useRouter();

const levelOptions = ref([
  {value:'all',label:'行业级别'},
  {value:'l1',label:'行业L1'},
  {value:'l2',label:'行业L2'},
  {value: 'l3',label: '行业L3'},
]);

const blockOptions = ref([
  {value:'all',label:'板块'},
  {value:'main',label:'主板'},
  {value:'startup',label:'创业板'},
  {value:'kcb',label:'科创板'},
  {value:'bj',label:'北交所'}
])

const mvOptions = ref([
  {value:'all',label:'市值'},
  {value:'big',label:'大盘股'},
  {value:'mid',label:'中盘股'},
  {value:'small',label:'小盘股'}
])

const scopeOptions = ref([
  {value:'nine',label:'九点'},
  {value:'five',label:'五点'},
  {value:'zero',label:'零点'}
])

const handleSelectLevel = (value)=>{
  // alert(value)
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'l1'){
    query_dic['level'] = "L1";
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'l2'){
    query_dic['level'] = "L2";
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'l3'){
    query_dic['level'] = "L3";
    router.push({path:route.path,query:query_dic});
  }
}

const handleSelectBlock = (value)=>{
  // alert(value)
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'all'){
    query_dic['block_id'] = 1
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'main'){
    query_dic['block_id'] = 2
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'startup'){
    query_dic['block_id'] = 3
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'kcb'){
    query_dic['block_id'] = 4
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'bj'){
    query_dic['block_id'] = 5
    router.push({path:route.path,query:query_dic});
  }
}

const handleSelectMv = (value)=>{
  // alert(value)
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'all'){
    query_dic["mv_id"] = 1;
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'big'){
    query_dic["mv_id"] = 2;
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'mid'){
    query_dic["mv_id"] = 3;
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'small'){
    query_dic["mv_id"] = 4;
    router.push({path:route.path,query:query_dic});
  }
}

//统计范围处理
const handleSelectScope = (value)=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'nine'){
    query_dic["para_id"] = 9;
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'five'){
    query_dic["para_id"] = 5;
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'zero'){
    query_dic["para_id"] = 0;
    router.push({path:route.path,query:query_dic});
  }
}

//日期处理
const selectedDate = ref(new Date()); // 响应式变量，用于存储选择的日期

const handleDateChange = (value)=>{
  var date = getNormDate(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["trade_date"] = date;
  router.push({path: route.path, query: query_dic});
}

const selectPreviousDay=()=>{
  if (selectedDate.value) {
    const day = getPreviousDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = day;
    router.push({path: route.path, query: query_dic});
  }
};

const selectNextDay=()=>{
  if (selectedDate.value) {
    const date = getNextDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = date;
    router.push({path: route.path, query: query_dic});
  }
};

//处理统计点击事件
const handleStatistics = ()=>{
  // alert("dsff")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:"/index/statistics",query:query_dic});
}

//处理统计所有点击事件
const handleStatisticsAll = ()=>{
  // alert("ddd")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:"/index/statistics_all",query:query_dic});
}

const handleKaipanla = ()=>{
  // alert("kaipanla")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:"/index/kpl_concept",query:query_dic});
}

const handleOriental = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:"/index/dc_index",query:query_dic});
}



</script>

<style scoped>

</style>