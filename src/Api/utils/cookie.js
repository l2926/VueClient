
//设置cookie
export function setCookie(key,list){
    localStorage.setItem(key,list)
}


//读取cookie
export function getCookie(key){
    var raw_str = localStorage.getItem(key)
    var res_list = raw_str.split(',')
    return res_list
}