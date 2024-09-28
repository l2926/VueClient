/**
 * @desc 日期计算函数
 * @date 2024-06-23
 */
import {getCookie} from "@/Api/utils/cookie";


export function marketParameterTransform(param_dic) {
    //定义参数副本
    var param_dic_copy
    if(param_dic["ts_code"] != null){
        var select_id = param_dic["select_id"]
        var para_id = param_dic["para_id"]
        var ts_code = param_dic["ts_code"]
        var name = param_dic["name"]
        var trade_date = param_dic["trade_date"]
        param_dic_copy = {
            "select_id":select_id,
            "para_id":para_id,
            "ts_code":ts_code,
            "name":name,
            "trade_date":trade_date
        }
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
    var industry = industry_list[level_id-1];

    param_dic_copy = {
        "select_id":select_id,
        "para_id":para_id,
        "sort_id":sort_id,
        "block_id":block_id,
        "level":level,
        "industry":industry,
        "trade_date":trade_date
    }

    return param_dic_copy
}