<template>
  <div>
    <el-button @click="handleSelectMarket">看板</el-button>
    <el-select v-model="defaultLimit" placeholder="涨停" style="width: 5%" popper-class="horizontal-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in limitOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

    <el-button style="margin-left:0;margin-right: 0" @click="handleSelectFinaMain">主营业务</el-button>
    <el-button style="margin-left:0;margin-right: 0" @click="handleSelectTopHold">十大股东</el-button>

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


const defaultLimit = ref('');
const limitOptions = ref([
  {value:'limitUp',label:'涨停'},
  {value:'limitDown',label:'跌停'}
]);

const handleSelectMarket = () =>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:'/analysis/limit',query:query_dic});
}

const handleSelectFinaMain = () =>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:'/analysis/fina_main',query:query_dic});
}

const handleSelectTopHold = () =>{
  const query_dic = JSON.parse(JSON.stringify(route.query));
  router.push({path:'/analysis/top_hold',query:query_dic});
}

const handleSelectionChange = (value)=> {
  console.log('选中的选项值：', value);
  console.log("kkk")
};

const selectedDate = ref(new Date()); // 响应式变量，用于存储选择的日期
const handleDateChange = (selectDate)=>{
  var date = getNormDate(selectDate)
  const query_dic = JSON.parse(JSON.stringify(route.query))
  query_dic["trade_date"] = date;
  router.push({path: '/analysis/limit', query: query_dic});
}
const selectPreviousDay=()=>{
  if (selectedDate.value) {
    const day = getPreviousDay(selectedDate);
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = day;
    router.push({path: '/analysis/limit', query: query_dic});
  }
};

const selectNextDay=()=>{
  if (selectedDate.value) {
    const day = getNextDay(selectedDate)
    const query_dic = JSON.parse(JSON.stringify(route.query))
    query_dic["trade_date"] = day;
    router.push({path: '/analysis/limit', query: query_dic});
  }
};

onMounted(()=>{
  const query_dic = JSON.parse(JSON.stringify(route.query))
  selectedDate.value = new Date(dayjs(query_dic["trade_date"]).format('YYYY-MM-DD'));
});

</script>


<style scoped>
.navigation {
  text-align: right;
}
</style>