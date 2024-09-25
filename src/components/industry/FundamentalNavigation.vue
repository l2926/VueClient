<template>
  <div>
    <el-button style="margin-left:0;margin-right: 0" @click="selectMarket">行情</el-button>
    <el-input-number v-model="levelId" :min="1" :max="100" :step="1" controls-position="right"
                     @change="handleItemChange" style="width: 5%"></el-input-number>
    <el-select v-model="selectedRange" placeholder="日幅" style="width: 5%" popper-class="vertical-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in options"
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
const selectedRange = ref('');


const options = ref([
  {value: 'daily', label: '日幅'},
  {value: 'weekly', label: '周幅'},
  {value: 'monthly', label: '月幅'}
]);
const handleSelectionChange = (value)=> {
  console.log('选中的选项值：', value);
  console.log("kkk")
};

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
  query_dic["id"] = value;
  router.push({path: '/industry/fundamental', query: query_dic});
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