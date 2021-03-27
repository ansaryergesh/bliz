export const dateParse = (date) => {
  let months = [
      'янв', 'фев', 'мар', 'апр', 'май', 'июн',
      'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
  ];

  if(date.slice(5,6) === '0') {
      return date.slice(8,10) + ' ' + months[parseInt(date.slice(6,7)) - 1]
  }else {
      return date.slice(8,10) + ' ' + months[parseInt(date.slice(5,7)) - 1]
  }
}

export const dateParse2 = (date) => {
    // parse for dates -> "28.02.2021 15:03"
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

   export const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (match) {
      return '+' + match[1] + '(' + match[2]+')' + ' '
    }
    return null
  }
  export const formatPhoneNumberHidden = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (match) {
      return match[3] + ' ' + match[4] + ' ' + match[5]
    }
    return null
  }


  
export const parseDateTime = (val) => {
    if(val) {
        return new Intl.DateTimeFormat('ru', { month: 'short', day: '2-digit', hour:'numeric', minute:'numeric' }).format(new Date(Date.parse(val)))
    }
}

export const deleteFalseKey = (mySet) => {
  mySet.forEach((value,key) =>{
    if(value === false) {
      mySet.delete(key);
    }
  })
  return Array.from(mySet.keys()).join(',')
}

export const parseBoolean = (val) => {
  if(val === true) {
    return 1
  }else {
    return 0
  }
}

export const formatForLetter = (val) => {
  return val.replace(/[^a-zA-Z]+/g, '')
}