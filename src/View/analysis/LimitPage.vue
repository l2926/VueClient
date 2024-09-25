
<template>
  <el-container>
    <el-header style="">
      <AnalysisNavigation></AnalysisNavigation>
    </el-header>
    <el-table
        :data="tableData"
        border
        style="width:100%"
        class="no-header">

      <el-table-column
          prop="date"
          label="序号"
          width="50">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="公司名称"
          width="100">
        <template #default="{ row }">
          <el-link :href="`/#/market/daily?ts_code=${row.date}&name=平安银行`" style="color: green" target="_blank">{{ row.date }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="地区"
          width="80">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="行业1"
          width="90">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="行业2"
          width="90">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="行业3"
          width="90">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="涨跌幅"
          width="100"
      >
        <template #default="{ row }">
          <a :href="market" style="color: red">{{ row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="收盘价"
          width="75">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="振幅"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="PE"
          width="60"
      >
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="PB"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="PS"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="营/资"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="利润(%)"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="ROE"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="换手(%)"
          width="60">
        <template #default="{ row }">
          <a :href="market" style="color: green">{{ row.date }}</a>
        </template>
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          :syle="{color:'red'}"
      >
        <template #default="{ row }">
          <a :href="market" style="color: palegreen">{{ row.address }}</a>
        </template>
      </el-table-column>
    </el-table>

  </el-container>
</template>


<script setup>
import {ref} from "vue";
import AnalysisNavigation from "@/components/analysis/AnalysisNavigation.vue";


const tableData = ref([
  {
    date: '1',
    name: '张三',
    address: '青岛'
  },
  {
    date: '2',
    name: '李四',
    address: '北京'
  }
]);

</script>

<style scoped>

</style>