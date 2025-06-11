<template>
  <el-main>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>板块分类</th>
        <th colspan="8">板块明细</th>
      </tr>
      </thead>
      <tbody id="m_table">
      <tr v-for="(index) in industry_len" :key="index">
        <td v-if="index==1&&industries.length==31" rowspan="4" style="width:185px;">
          <text>申万行业(L1)</text>
          <br>
          <router-link style="color: black;" to="/industry/industry_list?level=L1" >L1 </router-link>
          <router-link style="color: black;" to="/industry/industry_list?level=L2" >L2 </router-link>
          <router-link style="color: black;" to="/industry/industry_list?level=L3" >L3 </router-link>
        </td>
        <td v-if="index==1&&industries.length==134" rowspan="17" style="width:185px;">
          <text>申万行业(L2)</text>
          <br>
          <router-link style="color: black;" to="/industry/industry_list?level=L1" >L1 </router-link>
          <router-link style="color: black;" to="/industry/industry_list?level=L2" >L2 </router-link>
          <router-link style="color: black;" to="/industry/industry_list?level=L3" >L3 </router-link>
        </td>
        <td v-if="index==1&&industries.length==346" rowspan="44" style="width:185px;">
          <text>申万行业(L3)</text>
          <br>
          <router-link style="color: black;" to="/industry/industry_list?level=L1" >L1 </router-link>
          <router-link style="color: black;" to="/industry/industry_list?level=L2" >L2 </router-link>
          <router-link style="color: black;" to="/industry/industry_list?level=L3" >L3 </router-link>
        </td>
        <td v-for="(index2) in 8" :key="index2" >
          <el-link style="width:100px;color:black;" to="" @click="onBasicInfo(index,index2)" >{{industries[(index-1)*8 + index2-1]}}</el-link>
        </td>
      </tr>
      <tr v-for="(index3) in (areas.length/8)" :key="index3">
        <td v-if="index3==1" rowspan="4" style="width:185px;">
          <text>地域</text>
        </td>
        <td v-for="(index4) in 8" :key="index4" >
          <el-link style="width:100px;color:black;" to="" @click="onBasicInfo_area(index3,index4)" >{{areas[(index3-1)*8 + index4-1]}}</el-link>
        </td>
      </tr>
      </tbody>
    </table>
  </el-main>
</template>


<script>
import {reactive} from 'vue'
import {getCurDate} from "@/Api/utils/calcDate";
import { getCookie } from '@/Api/utils/cookie'
import {getIndustryKey,getIndustryHeight,updateIndustryItem} from '@/Api/list/list'

export default{
  setup() {
    //alert('setup')

    //v-for表格初始化数据
    // var industries = reactive([])

    // ajaxGetList(industries)

    // var arg_level = listParse()

    var key = getIndustryKey("L3")


    var industries = reactive(getCookie(key))
    // var industries = reactive([])

    var industry_len = reactive(getIndustryHeight(industries))

    var areas = getCookie("area_list")


    return {industries ,areas,industry_len}
  },
  methods:{
    onBasicInfo:function(index,index2){
      //alert("onBasicInfo")
      var level = this.$route.query.level

      var query_dic = {
        "select_id":1,
        "para_id":1,
        "sort_id":1,
        "block_id":1,
        "level":level,
        "level_id":(index-1)*8 + index2,
        "trade_date":getCurDate()
      }

      this.$router.push({path:'/finance/finance_overview',query:query_dic})
    },
    onBasicInfo_area:function(index,index2){
      this.$router.push({path:'/industry/basic_info',query:{
          "select_id":1,
          "para_id":1,
          "sort_id":1,
          "block_id":1,
          "level":"area",
          "level_id":(index-1)*8 + index2,
          "trade_date":getCurDate()
        }})
    }
  },mounted(){
    //获取路由参数，申万指数L1,L2,L3
    var arg_level = this.$route.query.level

    //查询申万指数L1,L2,L3对应的
    var key = getIndustryKey(arg_level)

    var industry_list  = getCookie(key)

    updateIndustryItem(industry_list,this.industries)
    this.industry_len = getIndustryHeight(this.industries)

  },updated(){
    var arg_level = this.$route.query.level

    var key = getIndustryKey(arg_level)

    var industry_list  = getCookie(key)

    updateIndustryItem(industry_list,this.industries)

    this.industry_len = getIndustryHeight(this.industries)
  }
}
</script>


<style>
.my_button{
  background-color:aliceblue;
}
.my_select{
  margin-right: 0.25em;
  background-color:aliceblue;
}

a {
  text-decoration:none
}
</style>