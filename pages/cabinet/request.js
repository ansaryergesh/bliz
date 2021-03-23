import CancelReason from "../../components/request/CancelReason"
import CargoInMap from "../../components/request/CargoInMap"
import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import cookie from 'js-cookie'
import axios from "axios"
import {useDispatch} from 'react-redux'
import RequestParticipant from "../../components/request/RequestParticipant"
import { dateParse, dateParse2 } from "../../defaults/extraFunctions"
const Request = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {request_id} = router.query
  const [details,setDetails] = useState([])
  const [participants, setParticipants] = useState([])
  const [loading, setLoading] = useState(true)

  const onAccept = (e) => {
    axios.get(`${process.env.BASE_URL}/acceptPost`, {params: {
      token: cookie.get('token'),
      user_id: e.target.name,
    }})
      .then(res=> {
        if(res.data.success) {
          router.push('/cabinet/requests')
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Принять'})
        }else {
          dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
        }
      })
  }
  useEffect(() => {
    if(!request_id) {
      router.push('/cabinet/requests')
    }
    axios.get(`${process.env.BASE_URL}/detailOffer`, {params: {
      token: cookie.get('token'),
      order_id: request_id
    }})
      .then(res=> {
        setLoading(false)
        if(res.data.success && res.data.data !== []) {
          setDetails(res.data.details[0])
          setParticipants(res.data.data)
        }else {
          router.push('/cabinet/requests')
        }
      })
  },[])
  return (
    <section className="request_items_body">
      <div className="grid-container container done">
        <div className="section">
          <p className="request_items__breadcrumbs"><a href='/cabinet'>Личный кабинет</a> / <a href ='/cabinet/request'>Заявки</a> / Заявка №{request_id}</p>
          <span className="blue_span_title yellow">{participants.length} ПРЕДЛОЖЕНИЯ</span>
          <div className="request_items__title">
            <h1>{details.title} {details.net} тн / {details.volume} м³</h1>
            <p>{details.from_string} - {details.to_string}, {details.start_date !== undefined ? dateParse(details.start_date) : ''}</p>
          </div>
          <div className="request_item">
            <h3>Информация о грузе:</h3>
            <div className="request_item__section second">
              <div className="request_item__section__wrapper">
                <div className="goods__city">
                  <img
                    className="signs__item"
                    src="/img/goods__nav1__item/a-sign.svg"
                    alt="a-sign"/>
                  <p className="info__map__city">{details.from_string}</p>
                  <img
                    className="goods__info__rectangle"
                    src="/img/goods__nav1__item/rectangle.png"
                    alt="rectangle"/>
                </div>
                <div className="info__map__content">
                  <div className="info__map__row">
                    <div className="map__row__item">
                      <img src="/img/goods__nav1__item/right-sign.svg" alt="right-sign"/>
                      <div className="row__item__text">
                        <p>Поверните направо в сторону мкр. Кок-тобе</p>
                        <p className="descr__gray">Двигайтесь мимо ИП Головацкий Ю.Ю (справа)</p>
                      </div>
                    </div>
                    <div className="map__row__item2">
                      <p>78 м</p>
                    </div>
                    <div className="map__row__item3">
                      <p>2 мин</p>
                    </div>
                  </div>
                  <div className="info__map__row">
                    <div className="map__row__item">
                      <img src="/img/goods__nav1__item/right-sign.svg" alt="right-sign"/>
                      <div className="row__item__text">
                        <p className="item__text__paragraph">Поверните налево на перекрестке на ул. Айриха</p>
                      </div>
                    </div>
                    <div className="map__row__item2">
                      <p>1.2 км</p>
                    </div>
                    <div className="map__row__item3">
                      <p>10 мин</p>
                    </div>
                  </div>
                  <div className="info__map__row">
                    <div className="map__row__item">
                      <img src="/img/goods__nav1__item/right-sign.svg" alt="right-sign"/>
                      <div className="row__item__text">
                        <p className="item__text__paragraph">Поверните направо на перекрестке пр. Улугбека на улица Саина</p>
                        <p className="descr__gray">Двигайтесь мимо «СТАТУС» (справа)</p>
                      </div>
                    </div>
                    <div className="map__row__item2">
                      <p>800 м</p>
                    </div>
                    <div className="map__row__item3">
                      <p>15 мин</p>
                    </div>
                  </div>
                </div>
              </div>
              <a id="open_map_modal" className="btn btn--white tablet" href="#">Подробно о грузе</a>
            </div>
          </div>
         <RequestParticipant participants={participants} onAccept={onAccept}/>
         
        </div>
        <div className="aside"/>
      </div>
      <CargoInMap details={details}/>
      <CancelReason />
    </section>

  )
}

export default Request;