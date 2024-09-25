
<template>
  <FundamentalNavigation></FundamentalNavigation>
  <el-main>
    <div>
      <el-table
          :data="tableData"
          border
          style="width:100%"
          class="no-header"
          @sort-change="handleSortChange">

        <el-table-column
            prop="date"
            label="日期"
            width="180">
          <template #default="{ row }">
            <a :href="market" style="color: green">{{ row.date }}</a>
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180"
            sortable
        >
          <template #default="{ row }">
            <a :href="market" style="color: red">{{ row.name }}</a>
          </template>
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            :syle="{color:'red'}"
            sortable>
          <template #default="{ row }">
            <a :href="market" style="color: palegreen">{{ row.address }}</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-main>
</template>


<script setup>
import FundamentalNavigation from "@/components/industry/FundamentalNavigation.vue";
import {ref} from "vue";


const tableData = ref([
  {
    date: '2024-05-25',
    name: '张三',
    address: '1'
  },
  {
    date: '2024-05-26',
    name: '李四',
    address: '2'
  },
  {
    date: '2024-05-27',
    name: '李四',
    address: '5'
  },
  {
    date: '2024-05-28',
    name: null,
    address: '3'
  }
]);

const handleSortChange = ({ column, prop, order }) => {
  console.log('排序的列：', column);
  console.log('排序的字段：', prop);
  console.log('排序的方式：', order);

  // 在这里执行您想要的响应
  alert("排序")
};
</script>

<style scoped>

</style>