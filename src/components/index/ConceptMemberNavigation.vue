<template>
  <el-button style="margin-left:0;margin-right: 0" @click="handleReturn">返回</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleConceptMember">概念成员信息</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleFinaMain2">主营业务2</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleFinaMain3">主营业务3</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleCompanyInfo">公司信息</el-button>

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

const handleConceptMember=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  if(query_dic["select_id"] == 1){
    router.push({path: "kpl_concept_cons", query: query_dic});
  }

  if(query_dic["select_id"] == 2){
    router.push({path: "dc_member", query: query_dic});
  }
}

const handleFinaMain2=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path: "fina_main2", query: query_dic});
}

const handleFinaMain3=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path: "fina_main3", query: query_dic});
}

const handleCompanyInfo=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path: "company_info", query: query_dic});
}

const handleReturn=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  if(query_dic["select_id"] == 1){
    router.push({path: "kpl_concept", query: {"block_id":1,"level":"L1","trade_date":query_dic["trade_date"]}});
  }

  if(query_dic["select_id"] == 2){
    router.push({path: "dc_index", query: {"block_id":1,"level":"L1","trade_date":query_dic["trade_date"]}});
  }

}

</script>

<style scoped>

</style>