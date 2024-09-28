<template>
  <div>
    <el-button>看板</el-button>
    <el-input v-model="input" placeholder="" style="width: 3%"></el-input>
    <el-select v-model="defaultRange" placeholder="日幅" style="width: 5%" popper-class="vertical-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in rangeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="defaultLimit" placeholder="涨停" style="width: 5%" popper-class="horizontal-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in limitOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="defaultLimit" placeholder="跌停" style="width: 5%" popper-class="horizontal-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in limitOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="defaultRange" placeholder="板块" style="width: 5%" popper-class="vertical-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in rangeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="defaultRange" placeholder="市值" style="width: 5%" popper-class="vertical-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in rangeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="defaultRange" placeholder="成交金额" style="width: 8%" popper-class="vertical-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in rangeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="defaultRange" placeholder="资金流入" style="width: 8%" popper-class="vertical-select"
               @change="handleSelectionChange">
      <el-option
          v-for="item in rangeOptions"
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


const defaultLimit = ref('');
const limitOptions = ref([
  {value:'limitUp',label:'涨停'},
  {value:'limitDown',label:'跌停'}
]);

const input = ref();
const defaultRange = ref('');
const rangeOptions = ref([
  {value: 'daily', label: '日幅'},
  {value: 'weekly', label: '周幅'},
  {value: 'monthly', label: '月幅'}
]);
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