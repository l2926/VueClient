<template>
  <div>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickFinance">财务概览</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="hanleClickNetAssets">净资产</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickTotalAssets">总资产</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickTotalLiab">总债务</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickLevel">杠杆</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickRevenue">营收</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickProfit">利润</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickProfitRate">利润率</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickROE">ROE</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickROA">ROA</el-button>

    <el-input-number v-model="levelId" :min="1" :max="500" :step="1" controls-position="right"
                     @change="handleItemChange" style="width: 5%"></el-input-number>

    <el-date-picker
        v-model="selectedDate"
        type="date"
        placeholder="选择日期"
        @change="handleDateChange"
        style="width: 8%"
    ></el-date-picker>

    <el-button style="margin-left:0;margin-right: 0" @click="selectPreviousDay">前一天</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="selectNextDay">后一天</el-button>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { useRoute,useRouter} from "vue-router";
import {getNextDay, getNormDate, getPreviousDay} from "@/Api/utils/calcDate";
import {dayjs} from "element-plus";

const router = useRouter();
const route = useRoute();

const levelId = ref(1);

const handleClickFinance = ()=>{
  // alert("finance_overview");

  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path: '/finance/finance_overview', query: query_dic});
}

const hanleClickNetAssets = ()=>{
  // alert("netAssets")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 5;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickTotalAssets = ()=>{
  // alert("totalAssets")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 1;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickTotalLiab = ()=>{
  // alert("totalLiab")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 2;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickRevenue = ()=>{
  // alert("revenue")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 3;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickProfit = ()=>{
  // alert("profit")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 4;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickLevel = ()=>{
  // alert("aaa")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 6;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickProfitRate = ()=>{
  // alert("bbb")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 7;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickROE = ()=>{
  // alert("ccc")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 8;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const handleClickROA = ()=>{
  // alert("ddd")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id"] = 9;
  router.push({path: '/finance/finance_history', query: query_dic});
}

const selectedDate = ref(new Date()); // 响应式变量，用于存储选择的日期

const handleDateChange = (value)=>{
  var date = getNormDate(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["trade_date"] = date;
  router.push({path: '/industry/fundamental', query: query_dic});
}

const selectPreviousDay=()=>{
  if (selectedDate.value) {
    const day = getPreviousDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = day;
    router.push({path: '/industry/fundamental', query: query_dic});
  }
};

const selectNextDay=()=>{
  if (selectedDate.value) {
    const date = getNextDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = date;
    router.push({path: '/industry/fundamental', query: query_dic});
  }
};


const handleItemChange = (value) =>{
  console.log(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["level_id"] = value;
  router.push({path: route.path, query: query_dic});
};


onMounted(()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  selectedDate.value = new Date(dayjs(query_dic["trade_date"]).format('YYYY-MM-DD'));
  levelId.value = query_dic["level_id"];
});

</script>


<style scoped>
.navigation {
  text-align: right;
}
</style>