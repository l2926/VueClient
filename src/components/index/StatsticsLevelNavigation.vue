<template>
  <el-select v-model="monthlyLevel" placeholder="行情概览" style="width: 7%" @change="onSelectMarketOverview">
    <el-option
        v-for="item in marketOverviewOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="板块" style="width: 7%" @change="onSelectBlock">
    <el-option
        v-for="item in blockOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="涨幅" style="width: 7%" @change="onSelectUp">
    <el-option
        v-for="item in upPctChgOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="monthlyLevel" placeholder="跌幅" style="width: 7%" @change="onSelectDown">
    <el-option
        v-for="item in downPctChgOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>

  <el-select v-model="monthlyLevel" placeholder="市值" style="width: 7%" @change="onSelectMv">
    <el-option
        v-for="item in mvOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>

  <el-select v-model="dailyLevel" placeholder="历史行情" style="width: 7%" @change="handleSelectMarketOverview" id="test_select">
    <el-option
        v-for="item in MarketOverviewOpetions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="dailyLevel" placeholder="选项" style="width: 7%" @change="handleSelectGrowthRate" id="test_select">
    <el-option
        v-for="item in growthOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>


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

// const selectPriceOptions = ref([
//   {value: 'monthly1', label: '复权'},
//   {value: 'monthly2', label: '对数'},
//   {value: 'monthly3', label: '涨跌'}
// ]);
//
// const financeOptions = ref([
//   {value: 'monthly1', label: '财务概览'},
//   {value: 'monthly2', label: '净资产'},
//   {value: 'monthly3', label: '盈利情况'},
//   {value: 'monthly3', label: '成本中心'}
// ]);
//
// const topHoldOptions = ref([
//   {value: 'monthly1', label: '十大股东'},
//   {value: 'monthly2', label: '十大流通股东'}
// ]);

const marketOverviewOptions = ref([
  {value: 'overview', label: '行情概览'},
  {value: 'all', label: '基本面概览'}
]);


const blockOptions = ref([
  {value: 'all', label: '所有'},
  {value: 'main_board', label: '主板'},
  {value: 'start_up', label: '创业板'},
  {value: 'kechuang', label: '科创板'},
  {value: 'beijing', label: '北交所'},
]);

const mvOptions = ref([
  {value: 'all', label: '所有'},
  {value: '1000', label: '千亿'},
  {value: '500', label: '五百亿'},
  {value: '100', label: '百亿'},
  {value: '100', label: '五十亿'},
  {value: '0', label: '其他'},
]);

const upPctChgOptions = ref([
  {value: 'up_10', label: '涨10点'},
  {value: 'up_5', label: '涨5点'},
  {value: 'up_0', label: '涨0点'}
]);

const downPctChgOptions = ref([
  {value: 'down_10', label: '跌10点'},
  {value: 'down_5', label: '跌5点'},
  {value: 'down_0', label: '跌0点'}
])


const MarketOverviewOpetions = ref([
  {value: 'dailyPctChg', label: '日度行情'},
  {value: 'weekPctChg', label: '周度行情'},
  {value: 'monthPctChg', label: '月度行情'},
  {value: 'seasonPctChg', label: '季度行情'},
  {value: 'yearPctChg',label: '年度行情'}
]);

const growthOptions = ref([
  {value:'margin',label:'边际行情'},
  {value:'accumulate',label:'累计行情'},
  {value:'pb',label:'PB'}
])

//所属行业页面条抓按
const onSelectMarketOverview = (value)=>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === "overview"){
    router.push({path:'/index/statistics_level_excel',query:query_dic});
  }
  if(value === "all"){
    router.push({path:'/index/statistics_level_all_excel',query:query_dic});
  }
}

const onSelectBlock = (value)=>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === "all"){
    query_dic["block_id"] = 1;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "main_board"){
    query_dic["block_id"] = 2;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "start_up"){
    query_dic["block_id"] = 3;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "kechuang"){
    query_dic["block_id"] = 4;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "beijing"){
    query_dic["block_id"] = 5;
    router.push({path:route.path,query:query_dic});
  }
}

const onSelectMv = (value)=>{
  // alert(value)
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === "all"){
    query_dic["mv_id"] = 1;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "1000"){
    query_dic["mv_id"] = 2;
    router.push({path:route.path,query:query_dic});
  }
}

const handleSelectMarketOverview = (value)=>{
  // alert(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["select_id"] = 1;
  if(value == "dailyPctChg"){
    router.push(({path:'/index/daily_overview',query:query_dic}))
  }
  if(value == "weekPctChg"){
    router.push(({path:'/index/week_overview',query:query_dic}))
  }
  if(value == "monthPctChg"){
    router.push(({path:'/index/month_overview',query:query_dic}))
  }
  if(value == "seasonPctChg"){
    router.push(({path:'/index/season_overview',query:query_dic}))
  }
  if(value == "yearPctChg"){
    router.push(({path:'/index/year_overview',query:query_dic}))
  }
}

const handleSelectGrowthRate = (value) =>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'margin'){
    query_dic["select_id"] = 1
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'accumulate'){
    query_dic["select_id"] = 2
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'pb'){
    query_dic["select_id"] = 3
    router.push({path:route.path,query:query_dic});
  }
  if(value === 'growth_rate'){
    query_dic["select_id"] = 4
    router.push({path:route.path,query:query_dic});
  }
}


const onSelectUp = (value)=>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === "up_10"){
    query_dic["para_id"] = 1;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "up_5"){
    query_dic["para_id"] = 2;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "up_0"){
    query_dic["para_id"] = 3;
    router.push({path:route.path,query:query_dic});
  }
}

const onSelectDown=(value)=>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === "down_10"){
    query_dic["para_id"] = 4;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "down_5"){
    query_dic["para_id"] = 5;
    router.push({path:route.path,query:query_dic});
  }
  if(value === "down_0"){
    query_dic["para_id"] = 6;
    router.push({path:route.path,query:query_dic});
  }
}

//板块id处理
const levelId = ref(1);

const handleItemChange = (value) =>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["level_id"] = value;
  if(query_dic["ts_code"] == null){
    router.push({path: '/index/index_daily', query: query_dic});
  }
};

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

onMounted(()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  selectedDate.value = new Date(dayjs(query_dic["trade_date"]).format('YYYY-MM-DD'));
  levelId.value = query_dic["level_id"];
});

</script>

<style scoped>

</style>