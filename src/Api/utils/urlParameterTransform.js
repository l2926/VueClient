/**
 * @desc 日期计算函数
 * @date 2024-06-23
 */
import {getCookie} from "@/Api/utils/cookie";


export function marketParameterTransform(param_dic) {
    //定义参数副本
    var param_dic_copy
    if(param_dic["ts_code"] == null){
        var select_id = param_dic["select_id"]
        var para_id = param_dic["para_id"]

        var level = param_dic["level"]
        var id = param_dic["id"]

        //解析ts_code和name
        var ts_code_list = []
        var name_list = []
        var ts_code = ""
        var name = ""

        if(level == "analysis"){
            ts_code_list = getCookie("analysis_code")
            name_list = getCookie("analysis_name")
        }

        if(level == 'L1' || level == 'L2' || level == 'L3'){
            ts_code_list = getCookie("industry_code")
            name_list = getCookie("industry_name")
        }
        ts_code = ts_code_list[id - 1]
        name = name_list[id - 1]

        //拼接最后的参数返回
        var trade_date = param_dic["trade_date"]
        param_dic_copy = {
            "select_id":select_id,
            "para_id":para_id,
            "ts_code":ts_code,
            "name":name,
            "trade_date":trade_date
        }
    }else{
        return param_dic
    }

    return param_dic_copy;
}

export function industryParameterTransform(param_dic){
    //定义参数副本
    var param_dic_copy

    if(param_dic["industry_code"] == null){
        var select_id = param_dic["select_id"]
        var para_id = param_dic["para_id"]
        var sort_id = param_dic["sort_id"]
        var block_id = param_dic["block_id"]
        var level = param_dic["level"]
        var level_id = param_dic["level_id"]
        var trade_date = param_dic["trade_date"]
        var start_date = param_dic["start_date"]

        // 定义行业列表
        var industry_list = []

        //根据请求的行业level不同，获取不同的行业列表cookie数据
        if(param_dic["level"] == 'L1'){
            industry_list = getCookie("l1_list")
        }
        if(param_dic["level"] == 'L2'){
            industry_list = getCookie("l2_list")
        }
        if(param_dic["level"] == 'L3'){
            industry_list = getCookie("l3_list")
        }
        if(param_dic["level"] == 'area'){
            industry_list = getCookie("area_list")
        }
        var industry_code = industry_list[level_id-1];

        param_dic_copy = {
            "select_id":select_id,
            "para_id":para_id,
            "sort_id":sort_id,
            "block_id":block_id,
            "level":level,
            "industry_code":industry_code,
            "trade_date":trade_date,
            "start_date":start_date
        }
    }else{
        return param_dic
    }

    return param_dic_copy
}

export function indexParameterTransform(param_dic){
    // alert("fdsfds")
    var para_dic_copy;

    if(param_dic["index_code"] == null){
        var select_id = param_dic["select_id"]
        var para_id = param_dic["para_id"]
        var level = param_dic["level"];
        var block_id = param_dic["block_id"]
        var mv_id = param_dic["mv_id"]
        var level_id = param_dic["level_id"];
        var trade_date = param_dic["trade_date"]

        //定义指数列表和名称列表
        var index_list;
        var index_name;

        //如果是大盘指数
        if(param_dic["level"] == "market"){
            index_list = getCookie("market_list")
            index_name = getCookie("market_name")
        }

        //如果是L1指数
        if(param_dic["level"] == "L1"){
            index_list = getCookie("l1_list")
            index_name = getCookie("l1_name")
        }

        //如果是L2指数
        if(param_dic["level"] == "L2"){
            index_list = getCookie("l2_list")
            index_name = getCookie("l2_name")
        }

        //如果是L3指数
        if(param_dic["level"] == "L3"){
            index_list = getCookie("l3_list")
            index_name = getCookie("l3_name")
        }

        // alert("aaa")
        //如果是地域
        if(param_dic["level"] == "area"){
            // alert("bbb")
            index_list = getCookie("area_list")
            index_name = getCookie("area_list")
        }
        // alert("ccc")

        var code = index_list[level_id - 1];
        var name = index_name[level_id - 1];


        para_dic_copy = {
            "index_name":name,
            "select_id":select_id,
            "para_id":para_id,
            "block_id":block_id,
            "mv_id":mv_id,
            "level":level,
            "trade_date":trade_date,
            "index_code":code
        }
    }else{
        return param_dic
    }

    return para_dic_copy;
}

export function compareParameterTransform(param_dic){
    //定义参数副本
    var param_dic_copy;

    var para_id = param_dic["para_id"];
    var select_id1 = param_dic["select_id1"];
    var level_id1 = param_dic["level_id1"];
    var ts_code = param_dic["ts_code"];
    var name = param_dic["name"];

    var select_id2 = param_dic["select_id2"];
    var level2 = param_dic["level2"];
    var level_id2 = param_dic["level_id2"];
    var id = param_dic["id"]

    var trade_date = param_dic["trade_date"];
    var start_date = "20100101";

    var ts_code1;
    var name1;
    var index_list1;
    var name_list1;
    if(select_id1 == 1){

        if(param_dic["level1"] == "market"){
            index_list1 = getCookie("market_list")
            name_list1 = getCookie("market_name")
        }

        //如果是L1指数
        if(param_dic["level1"] == "L1"){
            index_list1 = getCookie("l1_list")
            name_list1 = getCookie("l1_name")
        }

        //如果是L2指数
        if(param_dic["level1"] == "L2"){
            index_list1 = getCookie("l2_list")
            name_list1 = getCookie("l2_name")
        }

        //如果是L3指数
        if(param_dic["level1"] == "L3"){
            index_list1 = getCookie("l3_list")
            name_list1 = getCookie("l3_name")
        }

        ts_code1 = index_list1[level_id1 - 1];
        name1 = name_list1[level_id1 - 1];
    }else{
        ts_code1 = ts_code;
        name1 = name;
    }


    var ts_code2;
    var name2;
    var index_list2
    var name_list2
    if(select_id2 == 1){
        if(param_dic["level2"] == "market"){
            index_list2 = getCookie("market_list")
            name_list2 = getCookie("market_name")
        }

        //如果是L1指数
        if(param_dic["level2"] == "L1"){
            index_list2 = getCookie("l1_list")
            name_list2 = getCookie("l1_name")
        }

        //如果是L2指数
        if(param_dic["level2"] == "L2"){
            index_list2 = getCookie("l2_list")
            name_list2 = getCookie("l2_name")
        }

        //如果是L3指数
        if(param_dic["level2"] == "L3"){
            index_list2 = getCookie("l3_list")
            name_list2 = getCookie("l3_name")
        }

        ts_code2 = index_list2[level_id2 - 1];
        name2 = name_list2[level_id2 - 1];
    }else{
        var ts_code_list;
        var name_list;
        if(level2 == "analysis"){
            ts_code_list = getCookie("analysis_code")
            name_list = getCookie("analysis_name")
        }

        if(level2 == 'L1' || level2 == 'L2' || level2 == 'L3'){
            ts_code_list = getCookie("industry_code")
            name_list = getCookie("industry_name")
        }
        ts_code2 = ts_code_list[id - 1]
        name2 = name_list[id - 1]
    }

    param_dic_copy = {
        "para_id" : para_id,
        "select_id1" : select_id1,
        "select_id2" : select_id2,
        "ts_code1" : ts_code1,
        "ts_code2" : ts_code2,
        "name1" : name1,
        "name2" : name2,
        "trade_date" : trade_date,
        "start_date" : start_date
    };

    // alert(JSON.stringify(param_dic_copy))
    return param_dic_copy;
}