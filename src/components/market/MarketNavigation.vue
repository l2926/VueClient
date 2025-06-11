<template>
  <el-select v-model="dailyLevel" placeholder="日线" style="width: 5%" @change="onDailyLevel" id="test_select">
    <el-option
        v-for="item in dailyLeveloptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="weeklyLevel" placeholder="周线" style="width: 5%" @change="onWeeklyLevel">
    <el-option
        v-for="item in weeklyLeveloptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="月线" style="width: 5%" @change="onMonthlyLevel">
    <el-option
        v-for="item in monthlyLeveloptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="复权" style="width: 5%" @change="onMonthlyLevel">
    <el-option
        v-for="item in selectPriceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="财务概览" style="width: 7%" @change="onMonthlyLevel">
    <el-option
        v-for="item in financeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="资金流向" style="width: 7%" @change="onMonthlyLevel">
    <el-option
        v-for="item in topHoldOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="十大股东" style="width: 7%" @change="onMonthlyLevel">
    <el-option
        v-for="item in topHoldOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-button @click="onSelectSubordinate" style="margin-right: 0;margin-left:0">所属</el-button>
  <el-button style="margin-right: 0;margin-left:0">对比</el-button>

  <el-input-number v-model="levelId" :min="1" :max="100" :step="1" controls-position="right"
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

</template>

<script setup>
import {onMounted, ref} from "vue";
import { useRoute,useRouter} from "vue-router";
import {getNextDay, getNormDate, getPreviousDay} from "@/Api/utils/calcDate";
import {dayjs} from "element-plus";
const route = useRoute();
const router = useRouter();

const dailyLeveloptions = ref([
  {value: 'daily1', label: '日线1'},
  {value: 'daily2', label: '日线2'},
  {value: 'daily3', label: '日线3'}
]);

const weeklyLeveloptions = ref([
  {value: 'weekly1', label: '周线1'},
  {value: 'weekly2', label: '周线2'},
  {value: 'weekly3', label: '周线3'}
]);

const monthlyLeveloptions = ref([
  {value: 'monthly1', label: '月线1'},
  {value: 'monthly2', label: '月线2'},
  {value: 'monthly3', label: '月线3'}
]);


const selectPriceOptions = ref([
  {value: 'monthly1', label: '复权'},
  {value: 'monthly2', label: '对数'},
  {value: 'monthly3', label: '涨跌'}
]);

const financeOptions = ref([
  {value: 'monthly2', label: '资产概览'},
  {value: 'monthly3', label: '利润概览'},
  {value: 'monthly3', label: '财务概览'}
]);

const topHoldOptions = ref([
  {value: 'monthly1', label: '十大股东'},
  {value: 'monthly2', label: '十大流通股东'}
]);

const onDailyLevel= (value) => {
  console.log("mmmmmm")
  alert("dsfds")
  const query_dic = JSON.parse(JSON.stringify(route.query));

  if(value === "daily1"){
    query_dic["select_id"] = 1;
    router.push({path: '/market/price', query: query_dic});
  }
  if(value === "daily2"){
    query_dic["select_id"] = 2;
    router.push({path: '/market/price', query: query_dic});
  }
  if(value === "daily3"){
    query_dic["select_id"] = 3;
    router.push({path: '/market/price', query: query_dic});
  }
};

//所属行业页面条抓按
const onSelectSubordinate = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path:"/market/subordinate",query:query_dic})
}

//板块id处理
const levelId = ref(1);

const handleItemChange = (value) =>{
  console.log(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["id"] = value;
  if(query_dic["ts_code"] == null){
    router.push({path: '/market/daily', query: query_dic});
  }
};

//日期处理
const selectedDate = ref(new Date()); // 响应式变量，用于存储选择的日期

const handleDateChange = (value)=>{
  var date = getNormDate(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["trade_date"] = date;
  router.push({path: '/market/daily', query: query_dic});
}

const selectPreviousDay=()=>{
  if (selectedDate.value) {
    const day = getPreviousDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = day;
    router.push({path: '/market/daily', query: query_dic});
  }
};

const selectNextDay=()=>{
  if (selectedDate.value) {
    const date = getNextDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = date;
    router.push({path: '/market/daily', query: query_dic});
  }
};

onMounted(()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  selectedDate.value = new Date(dayjs(query_dic["trade_date"]).format('YYYY-MM-DD'));
  levelId.value = query_dic["id"];
});

</script>

<style scoped>

</style>