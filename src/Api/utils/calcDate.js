/**
 * @desc 日期计算函数
 * @date 2024-06-23
 */

export function getCurDate(){
    var date = new Date();
    const  year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}${month}${day}`;
}

export function getNormDate(date){

    var year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}${month}${day}`;
}

export function getPreviousDay(selectedDate){
    const previousDay = new Date(selectedDate.value);
    previousDay.setDate(previousDay.getDate() - 1);
    selectedDate.value = previousDay;

    const year = selectedDate.value.getFullYear();
    const month = ('0' + (selectedDate.value.getMonth() + 1)).slice(-2);
    const day = ('0' + selectedDate.value.getDate()).slice(-2);

    return `${year}${month}${day}`;
}

export function getNextDay(selectedDate){
    const previousDay = new Date(selectedDate.value);
    previousDay.setDate(previousDay.getDate() + 1);
    selectedDate.value = previousDay;

    const year = selectedDate.value.getFullYear();
    const month = ('0' + (selectedDate.value.getMonth() + 1)).slice(-2);
    const day = ('0' + selectedDate.value.getDate()).slice(-2);

    return `${year}${month}${day}`;
}