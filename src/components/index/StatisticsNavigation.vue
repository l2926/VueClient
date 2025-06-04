<template>
  <el-button style="margin-left:0;margin-right: 0" @click="handleStatistics">行情统计</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleStatisticsAll">所有统计</el-button>

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

</script>

<style scoped>

</style>