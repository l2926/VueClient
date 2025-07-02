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

    return param_dic_copy
}

export function indexParameterTransform(param_dic){
    var para_dic_copy;

    var para_id = param_dic["para_id"]
    // var level = param_dic["level"];
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

    var code = index_list[level_id - 1];
    var name = index_name[level_id - 1];

    para_dic_copy = {
        "index_name":name,
        "para_id":para_id,
        "trade_date":trade_date,
        "index_code":code
    }

    return para_dic_copy;
}