const dateParse = (date) => {
    let months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
  
    if(date.slice(3,4) === '0') {
        return date.slice(0,2) + ' ' + months[parseInt(date.slice(4,5)) - 1]
    }else {
        return date.slice(0,2) + ' ' + months[parseInt(date.slice(3,5)) - 1]
    }
  }

  console.log(dateParse('02.01.2020'))

