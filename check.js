const dateParse2 = (date) => {
    let months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
  
    let dateFinal = date.slice(0,10)
    let time = date.slice(11, date.length)
    let day =  dateFinal.slice(0,2);
    let month = ''

    if(date.slice(3,4) === '0') {
        month = months[date.slice(4,5)-1]
    }else {
        month = months[date.slice(3,5)-1]
    }
    return day + ' ' + month + ' ' + time
}

console.log(dateParse2("28.02.2021 15:03"));


const leftTime = (date) => {
    date = '12.03.2021 23:00'

    let timeNow = new Date()
    return timeNow
}

console.log(leftTime())