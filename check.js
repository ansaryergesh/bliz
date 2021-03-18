console.log(Date.parse('12.03.2021 23:00'))
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    // return {'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds};
    return t;
  }

  console.log(getTimeRemaining('10.03.2021T12:00'))

  console.log(Date.parse(new Date()))
  console.log(Date.parse('2021-05-05 12:00'))

  let date = '19.03.2021 12:00'
  console.log(date.slice(6,10) + '-' + date.slice(3,5) + '-' + date.slice(0,2) +' '+ date.slice(11,17))