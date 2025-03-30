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
      <tr>
        <td rowspan="2">大盘指数</td>
        <td><el-link style="width:100px;color:black" @click="ShangHai" to="">上证指数</el-link></td>
        <td><el-link style="width:100px;color:black" @click="ShenZhen" to="">深证指数</el-link></td>
        <td><el-link style="width:100px;color:black" @click="MidSmall" to="">中小板指</el-link></td>
        <td><el-link style="width:100px;color:black" @click="ChinaNext" to="">创业板指</el-link></td>
        <td><el-link style="width:100px;color:black" to="">深证余指</el-link></td>
        <td><el-link style="width:100px;color:black" @click="Statistic" to="">行业统计图</el-link></td>
        <td><el-link style="width:100px;color:black" to="">涨跌统计图</el-link></td>
        <td><el-link style="width:100px;color:black" to="">地域统计图</el-link></td>
      </tr>
      <tr>
        <td><el-link style="height:30px;width:100px;color:black" to="">北向资金</el-link></td>
        <td><el-link style="color:black" to="">融资融券</el-link></td>
      </tr>
      <tr v-for="(index) in industry_len" :key="index">
        <td v-if="index==1&&industries.length==31" rowspan="4" style="width:185px;">
          <text>申万行业(L1)</text>
          <br>
          <router-link style="color: black;" to="/index/index_list?level=L1" >L1 </router-link>
          <router-link style="color: black;" to="/index/index_list?level=L2" >L2 </router-link>
          <router-link style="color: black;" to="/index/index_list?level=L3" >L3 </router-link>
        </td>
        <td v-if="index==1&&industries.length==134" rowspan="17" style="width:185px;">
          <text>申万行业(L2)</text>
          <br>
          <router-link style="color: black;" to="/index/index_list?level=L1" >L1 </router-link>
          <router-link style="color: black;" to="/index/index_list?level=L2" >L2 </router-link>
          <router-link style="color: black;" to="/index/index_list?level=L3" >L3 </router-link>
        </td>
        <td v-if="index==1&&industries.length==346" rowspan="44" style="width:185px;">
          <text>申万行业(L3)</text>
          <br>
          <router-link style="color: black;" to="/index/index_list?level=L1" >L1 </router-link>
          <router-link style="color: black;" to="/index/index_list?level=L2" >L2 </router-link>
          <router-link style="color: black;" to="/index/index_list?level=L3" >L3 </router-link>
        </td>
        <td v-for="(index2) in 8" :key="index2" >
          <el-link style="width:100px;color:black;" to="" @click="onIndex(index,index2)" >{{industries[(index-1)*8 + index2-1]}}</el-link>
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
// import {ajaxGetList} from '@/Api/industry/industry_list'
import { getCookie } from '@/Api/utils/cookie'
import {getIndustryKey,getIndustryHeight,updateIndustryItem} from '@/Api/list/list'
import {getCurDate} from '@/Api/utils/calcDate'

export default{
  setup() {
    //alert('setup')

    var key = getIndustryKey("L3")

    var industries = reactive(getCookie(key))

    var industry_len = reactive(getIndustryHeight(industries))

    var areas = getCookie("area_list")


    return {industries ,areas,industry_len}

  },
  methods:{
    ShangHai:function (){
      const query_dic = {
        "para_id":1,
        "level":"market",
        "level_id":1,
        "trade_date":"20250309"
      }
      this.$router.push({path:'/index/index_daily',query:query_dic})
    },
    ShenZhen:function (){
      const query_dic = {
        "para_id":1,
        "level":"market",
        "level_id":2,
        "trade_date":"20250309"
      }
      this.$router.push({path:'/index/index_daily',query:query_dic})
    },
    MidSmall:function (){
      const query_dic = {
        "para_id":1,
        "level":"market",
        "level_id":3,
        "trade_date":"20250309"
      }
      this.$router.push({path:'/index/index_daily',query:query_dic})
    },
    ChinaNext:function (){
      const query_dic = {
        "para_id":1,
        "level":"market",
        "level_id":4,
        "trade_date":"20250309"
      }
      this.$router.push({path:'/index/index_daily',query:query_dic})
    },
    Statistic:function(){
      const query_dic = {
        "para_id":1,
        "level":"market",
        "level_id":3,
        "trade_date":"20250309"
      }
      this.$router.push({path:'/index/statistics'})
    },
    onIndex:function(index,index2){
      // alert((index-1)*8 + index2)
      var level = this.$route.query.level
      var query_dic = {
        select_id:1,
        para_id:1,
        block_id:1,
        level:level,
        level_id:(index-1)*8 + index2,
        trade_date:getCurDate()
      }

      this.$router.push({path:'/index/index_daily',query:query_dic})
    }
  },
  mounted(){
    var arg_level = this.$route.query.level


    //查询申万指数L1,L2,L3对应的
    var key = getIndustryKey(arg_level)

    var industry_list  = getCookie(key)

    updateIndustryItem(industry_list,this.industries)
    this.industry_len = getIndustryHeight(this.industries)
  },
  updated(){
    // alert("updated")
    var arg_level = this.$route.query.level

    var key = getIndustryKey(arg_level)

    var industry_list  = getCookie(key)

    updateIndustryItem(industry_list,this.industries)
    this.industry_len = getIndustryHeight(this.industries)
  }
}
</script>

<style>
/**设置industry_list页面,css属性 */
.list {
  text-align:center;
  margin-top:3%;
}
.table tr td, .table1 tr th{
  max-width:450px;
  min-width:100px;
  color:black;
}

</style>