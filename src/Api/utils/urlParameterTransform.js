/**
 * @desc 日期计算函数
 * @date 2024-06-23
 */


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
