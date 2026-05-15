<template>
  <el-select v-model="dailyLevel" placeholder="日线" style="width: 5%" @change="onDailyLevel" id="test_select">
    <el-option
        v-for="item in dailyLeveloptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
<!--  <el-select v-model="monthlyLevel" placeholder="指数/股票" style="width: 5%" @change="onSelect1">-->
<!--    <el-option-->
<!--        v-for="item in selectOptions1"-->
<!--        :key="item.value"-->
<!--        :label="item.label"-->
<!--        :value="item.value">-->
<!--    </el-option>-->
<!--  </el-select>-->
  <el-select v-model="monthlyLevel" placeholder="行业1" style="width: 5%" @change="onLevel1">
    <el-option
        v-for="item in selectLevel1Options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-input-number v-model="levelId1" :min="1" :max="100" :step="1" controls-position="right"
                   @change="handleItemChange1" style="width: 5%"></el-input-number>
  <el-input v-model="inputValue" style="width: 5%"></el-input>
  <el-button @click="onQueryStock1">查询</el-button>

<!--  <el-select v-model="monthlyLevel" placeholder="指数/股票" style="width: 5%" @change="onSelect2">-->
<!--    <el-option-->
<!--        v-for="item in selectOptions2"-->
<!--        :key="item.value"-->
<!--        :label="item.label"-->
<!--        :value="item.value">-->
<!--    </el-option>-->
<!--  </el-select>-->
  <el-select v-model="monthlyLevel" placeholder="行业2" style="width: 5%" @change="onLevel2">
    <el-option
        v-for="item in selectLevel1Options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-input-number v-model="levelId2" :min="1" :max="100" :step="1" controls-position="right"
                   @change="handleItemChange2" style="width: 5%"></el-input-number>
  <el-input-number v-model="id" :min="1" :max="100" :step="1" controls-position="right"
                   @change="handleItemChange3" style="width: 5%"></el-input-number>
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
import axios from "axios";
const route = useRoute();
const router = useRouter();

const inputValue = ref('');

const dailyLeveloptions = ref([
  {value: 'daily1', label: '日线1'},
  {value: 'daily2', label: '日线2'},
  {value: 'daily3', label: '日线3'}
]);

// const selectOptions1 = ref([
//   {value: 'index', label: '指数'},
//   {value: 'stock', label: '股票'}
// ]);
//
// const selectOptions2 = ref([
//   {value: 'index', label: '指数'},
//   {value: 'stock', label: '股票'}
// ]);


const selectLevel1Options1 = ref([
  {value:'market',label:'大盘'},
  {value: 'l1', label: 'L1'},
  {value: 'l2', label: 'L2'},
  {value: 'l3', label: 'L3'}
]);

const selectLevel1Options2 = ref([
  {value:'market',label:'大盘'},
  {value: 'l1', label: 'L1'},
  {value: 'l2', label: 'L2'},
  {value: 'l3', label: 'L3'}
]);

const onQueryStock1 = ()=>{
  // alert(inputValue.value)
  axios.get("http://127.0.0.1:8081/search/stock", {
    params: {
      queryName: inputValue.value
    }
  }).then(response => {
    alert(JSON.stringify(response.data));
    var ts_code = response.data["ts_code"]
    var name = response.data["name"]

    const query_dic = JSON.parse(JSON.stringify(route.query));
    query_dic["select_id1"] = 2
    query_dic["ts_code"] = ts_code;
    query_dic["name"] = name;
    router.push({path: '/compare/daily', query: query_dic});
  }).catch(function (error) {
    // alert("shibaile")
    alert(error)
  })
}

const onDailyLevel= (value) => {
  console.log("mmmmmm")
  // alert("dsfds")
  const query_dic = JSON.parse(JSON.stringify(route.query));
  // alert(JSON.stringify(route.query))

  if(value === "daily1"){
    query_dic["para_id"] = 1;
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "daily2"){
    query_dic["para_id"] = 2;
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "daily3"){
    query_dic["para_id"] = 3;
    router.push({path: '/compare/daily', query: query_dic});
  }
};

// const onSelect1=(value)=>{
//   // alert(value)
//   const query_dic = JSON.parse(JSON.stringify(route.query));
//   if(value === "index"){
//     query_dic["select_id1"] = 1;
//     router.push({path: '/compare/daily', query: query_dic});
//   }
//   if(value === "stock"){
//     query_dic["select_id1"] = 2;
//     router.push({path: '/compare/daily', query: query_dic});
//   }
// }

const onLevel1=(value)=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id1"] = 1
  if(value === "market"){
    query_dic["level1"] = "market";
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "l1"){
    query_dic["level1"] = "L1";
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "l2"){
    query_dic["level1"] = "L2";
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "l3"){
    query_dic["level1"] = "L3";
    router.push({path: '/compare/daily', query: query_dic});
  }
}

// const onSelect2=(value)=>{
//   const query_dic = JSON.parse(JSON.stringify(route.query));
//   if(value === "index"){
//     query_dic["select_id2"] = 1;
//     router.push({path: '/compare/daily', query: query_dic});
//   }
//   if(value === "stock"){
//     query_dic["select_id2"] = 2;
//     router.push({path: '/compare/daily', query: query_dic});
//   }
// }

const onLevel2=(value)=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  query_dic["select_id2"] = 1
  if(value === "market"){
    query_dic["level2"] = "market";
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "l1"){
    query_dic["level2"] = "L1";
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "l2"){
    query_dic["level2"] = "L2";
    router.push({path: '/compare/daily', query: query_dic});
  }
  if(value === "l3"){
    query_dic["level2"] = "L3";
    router.push({path: '/compare/daily', query: query_dic});
  }
}

//板块id处理
const levelId1 = ref(1);
const levelId2 = ref(1);
const id = ref(1);

const handleItemChange1 = (value) =>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["level_id1"] = value;
  query_dic["select_id1"] = 1;
  router.push({path: '/compare/daily', query: query_dic});
};

const handleItemChange2 = (value) =>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["level_id2"] = value;
  query_dic["select_id2"] = 1;
  router.push({path: '/compare/daily', query: query_dic});
};

const handleItemChange3 = (value) =>{
  // alert(value);
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["id"] = value;
  query_dic["select_id2"] = 2;
  router.push({path: '/compare/daily', query: query_dic});
};

//日期处理
const selectedDate = ref(new Date()); // 响应式变量，用于存储选择的日期

const handleDateChange = (value)=>{
  var date = getNormDate(value)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["trade_date"] = date;
  router.push({path: '/compare/daily', query: query_dic});
}

const selectPreviousDay=()=>{
  if (selectedDate.value) {
    const day = getPreviousDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = day;
    router.push({path: '/compare/daily', query: query_dic});
  }
};

const selectNextDay=()=>{
  if (selectedDate.value) {
    const date = getNextDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = date;
    router.push({path: '/compare/daily', query: query_dic});
  }
};

onMounted(()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  selectedDate.value = new Date(dayjs(query_dic["trade_date"]).format('YYYY-MM-DD'));
  levelId1.value = query_dic["level_id1"];
  levelId2.value = query_dic["level_id2"];
  id.value = query_dic["id"];
});

</script>

<style scoped>

</style>