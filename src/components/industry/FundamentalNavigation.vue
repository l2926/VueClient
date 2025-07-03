<template>
  <div>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickMarket">行情</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="hanleClickFundmental">基本面</el-button>
<!--    <el-select v-model="defaultLimit" placeholder="五日涨停" style="width: 7%" popper-class="horizontal-select"-->
<!--               @change="handleSelectLimitChange">-->
<!--      <el-option-->
<!--          v-for="item in limitOptions"-->
<!--          :key="item.value"-->
<!--          :label="item.label"-->
<!--          :value="item.value">-->
<!--      </el-option>-->
<!--    </el-select>-->

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
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickCompanyInfo">公司信息</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleClickTopHold">十大股东</el-button>

    <el-select v-model="dailyLevel" placeholder="资金流向" style="width: 7%" @change="handleSelectMoneyFlow" id="test_select">
      <el-option
          v-for="item in moneyFlowOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

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

    <el-date-picker
        v-model="selectedStartDate"
        type="date"
        placeholder="选择日期"
        @change="handleStartDateChange"
        style="width: 8%"
    ></el-date-picker>
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

const finaMainOptions = ref([
  {value: 'fina_main1', label: '主营业务1'},
  {value: 'fina_main2', label: '主营业务2'},
  {value: 'fina_main3', label: '主营业务3'}
]);

// const limitOptions = ref([
//   {value:'fiveDays',label:'五日涨停'},
//   {value:'tenDays',label:'十日涨停'},
//   {value: 'fifteenDays',label: '十五涨停'},
//   {value: 'twentyDays',label: '二十涨停'}
// ]);

const moneyFlowOptions = ref([
  {value:'money_flow',label:'资金流向'},
  {value:'money_flow_pct',label:'资金流向(%)'}
])

const hanleClickFundmental = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path:'/industry/fundamental',query:query_dic});
}

const handleClickFiveDaysLimit = ()=> {
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:'/industry/five_days_limit',query:query_dic});
};

const handleClickTenDays = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path:'/industry/ten_days',query:query_dic});
}

// const handleClickFinaMain = ()=>{
//   const query_dic = JSON.parse(JSON.stringify(route.query))
//   router.push({path:'/industry/fina_main',query:query_dic});
// };

const handleSelectFinaMain = (value)=>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  if(value === "fina_main1"){
    router.push({path:'/industry/fina_main',query:query_dic})
  }

  if(value === "fina_main2"){
    router.push({path:'/industry/fina_main2',query:query_dic})
  }

  if(value === "fina_main3"){
    router.push({path:'/industry/fina_main3',query:query_dic})
  }

}

const handleClickCompanyInfo = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path:'/industry/company_info',query:query_dic});
}

const handleClickTopHold = ()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  router.push({path:'/industry/top_hold',query:query_dic})
}

const handleSelectMoneyFlow = (value) => {
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query));
  if(value === 'money_flow'){
    router.push({path:'/industry/money_flow',query:query_dic});
  }
  if(value === 'money_flow_pct'){
    router.push({path:'/industry/money_flow_pct',query:query_dic});
  }
}


const selectedDate = ref(new Date()); // 响应式变量，用于存储选择的日期
const selectedStartDate = ref(new Date());

const handleDateChange = (value)=>{
  var date = getNormDate(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["trade_date"] = date;
  router.push({path: '/industry/fundamental', query: query_dic});
}

const handleStartDateChange = (value)=>{
  var date = getNormDate(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["start_date"] = date;
  router.push({path: '/industry/two_days_diff', query: query_dic});
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
  selectedStartDate.value = new Date(dayjs(query_dic["start_date"]).format('YYYY-MM-DD'));
  levelId.value = query_dic["level_id"];
});

</script>


<style scoped>
.navigation {
  text-align: right;
}
</style>