/**
 * 根据list参数，获取cookie的key
 */
export function getIndustryKey(arg_level){
    var key = ""

    if (arg_level == 'L1')  {key = "l1_name"}
    if (arg_level == 'L2')  {key = "l2_name"}
    if (arg_level == 'L3')  {key = "l3_name"}

    return key
}

//国际参数返回
export function getGlobalKey(arg_glob){
    var key = ""

    if (arg_glob == "us"){
        key = "us_name"
    }

    if (arg_glob == "hk"){
        key = "hk_name"
    }

    if (arg_glob == "a"){
        key = "a_name"
    }

    if (arg_glob == "usn"){
        key = "us_con_name"
    }

    if (arg_glob == "hkn"){
        key = "hk_con_name"
    }

    if (arg_glob == "an"){
        key = "a_con_name"
    }

    if (arg_glob == "swn"){
        key = "sw_name"
    }

    return key
}


/**
 * 求行业表格高度
 */
export function getIndustryHeight(industries){
    //获取所有行业数，除以8。得到表格高度。
    var industry_len = Math.floor(industries.length / 8)

    if (industries.length % 8 != 0){
        industry_len = industry_len + 1
    }
    return industry_len
}

//更新行业数据
export function updateIndustryItem(industry_list,industries){
    //截取本次更新表格，后面的表格清零

    // alert("update")
    // alert(industry_list.length)
    // alert(industries.length)
    industries.splice(industry_list.length,industries.length)

    for(var i = 0;i < industry_list.length;i++){
        industries[i] = industry_list[i]
    }
}