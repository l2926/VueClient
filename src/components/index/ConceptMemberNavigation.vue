<template>
  <el-button style="margin-left:0;margin-right: 0" @click="handleReturn">返回</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleConceptMember">概念成员信息</el-button>
  <el-button style="margin-left:0;margin-right: 0" @click="handleClickFiveDaysLimit">五日涨停</el-button>

  <el-button style="margin-left:0;margin-right: 0" @click="handleClickTenDays">十日统计</el-button>
  <!--    <el-button style="margin-left:0;margin-right: 0" @click="handleSelectFinaMain">主营业务</el-button>-->
  <el-select v-model="dailyLevel" placeholder="主营业务" style="width: 7%" @change="handleSelectFinaMain" id="test_select">
    <el-option
        v-for="item in finaMainOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>

  <el-button style="margin-left:0;margin-right: 0" @click="handleCompanyInfo">公司信息</el-button>

  <el-select v-model="dailyLevel" placeholder="资金流向" style="width: 7%" @change="handleSelectMoneyFlow" id="test_select">
    <el-option
        v-for="item in moneyFlowOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>


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

const finaMainOptions = ref([
  {value: 'fina_main2', label: '主营业务2'},
  {value: 'fina_main3', label: '主营业务3'}
]);

const moneyFlowOptions = ref([
  {value:'money_flow',label:'资金流向'},
  {value:'money_flow_pct',label:'资金流向(%)'}
])

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

  // if(query_dic["select_id"] == 2){
  //   router.push({path: "dc_member", query: query_dic});
  // }
}

const handleClickFiveDaysLimit=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path: "five_days_limit", query: query_dic});
}

const handleClickTenDays = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path: "ten_days", query: query_dic});
}

const handleSelectFinaMain = (value)=>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))

  if(value === "fina_main2"){
    router.push({path:'/index/fina_main2',query:query_dic})
  }

  if(value === "fina_main3"){
    router.push({path:'/index/fina_main3',query:query_dic})
  }

}

const handleSelectMoneyFlow = (value) => {
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'money_flow'){
    router.push({path:'/index/money_flow',query:query_dic});
  }
  if(value === 'money_flow_pct'){
    router.push({path:'/index/money_flow_pct',query:query_dic});
  }
}

// const handleFinaMain2=()=>{
//   const query_dic = JSON.parse(JSON.stringify(route.query))
//   router.push({path: "fina_main2", query: query_dic});
// }
//
// const handleFinaMain3=()=>{
//   const query_dic = JSON.parse(JSON.stringify(route.query))
//   router.push({path: "fina_main3", query: query_dic});
// }

const handleCompanyInfo=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path: "company_info", query: query_dic});
}

const handleReturn=()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  if(query_dic["select_id"] == 1){
    router.push({path: "kpl_concept", query: {"block_id":1,"level":"L1","mv_id":1,"para_id":9,"trade_date":query_dic["trade_date"]}});
  }

  if(query_dic["select_id"] == 2){
    router.push({path: "dc_index", query: {"block_id":1,"level":"L1","mv_id":1,"para_id":9,"trade_date":query_dic["trade_date"]}});
  }

}

</script>

<style scoped>

</style>