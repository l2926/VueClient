<template>
  <div class="hello">
    <img alt="stock analysis logo" src="@/assets/index.jpg" style="">
    <p>
      <label class="title" style="color:dimgray">股票查询：</label>
      <el-input v-model="inputValue2" style="width: 40%"></el-input>
      <el-button type="danger" @click="handleButtonClick()" style="width: 10%">查询</el-button>
    </p>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {getCurDate} from "@/Api/utils/calcDate";

const inputValue2 = ref('');

const router = useRouter();

const handleButtonClick = () => {
  console.log('当前输入框的值:', inputValue2.value);
  // 可以在这里处理输入值，例如发送请求或更新其他状态
  // alert(inputValue2.value);

  axios.get("http://127.0.0.1:8081/search/stock", {
    params: {
      queryName: inputValue2.value
    }
  }).then(response => {
    // alert(JSON.stringify(response.data));
    var ts_code = response.data["ts_code"]
    var name = response.data["name"]
    router.push({
      path: '/market/daily', query: {
        "select_id": 1,
        "para_id": 1,
        "ts_code": ts_code,
        "name": name,
        "trade_date":getCurDate()
      }
    });
  }).catch(function (error) {
    alert(error)
  })
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
