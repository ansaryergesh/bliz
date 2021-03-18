import React, { useEffect, useState } from 'react'

const Timer = (props) => {
  const [time, setTime] = useState({days: '', minutes: '', hours: '', seconds: ''})
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds};
  }

  const initializeClock = (endtime) => {
    const updateClock = () => {
      var t = getTimeRemaining(endtime);
      setTime({
        days: t.days,
        hours: ('0' + t.hours).slice(-2),
        minutes: ('0' + t.minutes).slice(-2),
        seconds: ('0' + t.seconds).slice(-2)
      })
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000*60);
  }

  useEffect(() => {
    var finalDate = () => {
      let date = props.date_finish;
      return date.slice(6,10) + '-' + date.slice(3,5) + '-' + date.slice(0,2) +' '+ date.slice(11,17)
    }
    initializeClock(props.date_finish.slice(6,10) + '-' + props.date_finish.slice(3,5) + '-' + props.date_finish.slice(0,2) +' '+ props.date_finish.slice(11,17))
  }, [])
  return (
    <div title={'Закончится' + props.date_finish}>
      {time.days + " дней" + " " + ""  +time.hours + " часа" + " " + time.minutes + " минута"}
    </div>
  )
}

export default Timer;