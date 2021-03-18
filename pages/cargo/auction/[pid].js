import React, {useEffect, useState} from 'react'
import {useRouter, Router} from 'next/router'
import axios from 'axios'
import PostPlaceMap from '../../../components/googleMap/PostPlaceMap'
import {dateParse} from '../../../defaults/extraFunctions'
import LoadingSpinner from '../../../components/shared/others/LoadingSpinner'
import PostAside from '../../../components/post/PostAside'

const AuctionDetail = () => {

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}/getPostByID/${pid}`)
      .then(res => {
        setLoading(false)
        if (res.data.success) {
          let finalres = res.data.data[0];
          console.log(finalres)
          setPostInfo({
            user: {
              id: finalres.user[0].id,
              fullName: finalres.user[0].fullName,
              email: finalres.user[0].email,
              phone: finalres.user[0].phone,
              address: finalres.user[0].address,
              companyDetails: {
                companyName: finalres.user[0].companyDetails
                  ? finalres.user[0].companyDetails[0].companyName
                  : '',
                bin: finalres.user[0].companyDetails
                  ? finalres.user[0].companyDetails[0].bin
                  : ''
              }
            },
            details: {
              from: finalres.details[0].from,
              to: finalres.details[0].to,
              start_date: finalres.details[0].start_date,
              end_date: finalres.details[0].end_date,
              volume: finalres.details[0].volume,
              net: finalres.details[0].net,
              distance: finalres.details[0].distance,
              duration: finalres.details[0].duration,
              from_string: finalres.details[0].from_string,
              to_string: finalres.details[0].to_string,
              title: finalres.details[0].title
            },
            updated_at: finalres.updated_at
          })
        } else {
          setPostInfo({errorId: true})
        }
      })
  }, [])
  const router = useRouter()
  const [steps,
    setSteps] = useState([])
  const [loading,
    setLoading] = useState(true)
  const [routeLoad,
    setRouteLoad] = useState(false)
  const {pid} = router.query
  const [postInfo,
    setPostInfo] = useState({
    errorId: false,
    updated_at: '',
    user: {
      id: '',
      fullName: '',
      email: '',
      phone: "",
      address: null,
      companyDetails: {
        companyName: "",
        bin: ''
      }
    },
    details: {
      from: "",
      to: "",
      start_date: "",
      end_date: "",
      volume: '',
      net: '',
      distance: "",
      duration: "",
      from_string: "",
      to_string: "",
      title: ''
    },
    additional: {
      docs: []
    },
    price: {
      price: '',
      payment_type: ''
    }
  })

  return (
    <div>
      {loading
        ? <LoadingSpinner/>
        : ''}
      <div className="grid-container container">
        <section className="section">
          <div className="goods__info">
            <div className="aside__functions mobile__functions">
              <a className="izbrannoe" href="#"><i className="far fa-star"/>В избранное</a>
              <a className="download" href="example" download><img src="/img/widgets/aside_function1.png" alt/></a>
              <a className="print" href="javascript:(print());"><img src="/img/widgets/aside_function2.png" alt/></a>
              <a className="someShit" href="#"><img src="/img/widgets/aside_function3.png" alt/></a>
            </div>
            <div className="goods__info__head">
              <div className="goods__info__breadcrumbs">
                <p className="goods__info__gray">Главная / Грузоперевозки / Аукцион</p>
              </div>
              <div className="goods__info__title">
                <h2>Аукцион: Овощи и фрукты 22 тн / 86 м³</h2>
                <p>
                  <span className="goods__info__gray">29 апр – 7 мая /</span>
                  Алматы (РК) — Нур-Султан (РК)
                </p>
              </div>
            </div>
            <div className="goods__info__table">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">нужен транспорт</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>Авто Тент</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">параметры транспорта</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>22 тн / 86 м³</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">дата погрузки и выгрузки</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>29 апр – 7 мая</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">откуда</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>Алматы, Казахстан</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">куда</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>Нур-Султан, Казахстан</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">расстояние</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>680.9 км</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">время в пути</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>22 ч 50 мин</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">оплата</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>Без НДС</p>
                </div>
              </div>
            </div>
            <div className="goods__info__map">
              <h4 className="goods__title">Карта маршрута</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5561672.475600514!2d69.67594085057475!3d47.10572802251476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x424580c47db54609%3A0x97f9148dddb19228!2sAstana!3m2!1d51.160522699999994!2d71.4703558!4m5!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2z0JDQu9C80LDRgtGL!3m2!1d43.2220146!2d76.8512485!5e0!3m2!1sru!2skz!4v1609914396993!5m2!1sru!2skz"
                width="100%"
                height={200}
                frameBorder={0}
                style={{
                border: 0
              }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}/>
            </div>
            <div className="goods__info__auction">
              <h4 className="goods__title">Участники аукциона</h4>
              <div className="info__auction__table">
                <div className="auction__table">
                  <div className="auction__table__row">
                    <div className="auction__table__column1">
                      <img src="/img/goods__nav1__item/logistic-logo.svg" alt="logistic__logo"/>
                      <div className="column__item">
                        <p className="column__item1">ТОО «Logistics Farm»</p>
                        <p className="column__item2">Рейтинг: 5.0</p>
                      </div>
                    </div>
                    <div className="auction__table__column2">
                      <p className="column__item1">5 мая 12:30</p>
                    </div>
                    <div className="auction__table__column3 separator">
                      <img src="/img/goods__nav1__item/separator.png" alt="separator"/>
                      <div className="separator__item">
                        <p className="column__item__price">165 000 ₸</p>
                        <p className="column__item__bet">лучшая ставка</p>
                      </div>
                    </div>
                  </div>
                  <div className="auction__table__row">
                    <div className="auction__table__column1">
                      <img
                        src="/img/goods__nav1__item/private-client.svg"
                        alt="private-client"/>
                      <div className="column__item">
                        <p className="column__item1">Ахмедов Л.С.</p>
                        <p className="column__item2">частное лицо</p>
                      </div>
                    </div>
                    <div className="auction__table__column2">
                      <p className="column2__item">4 мая 12:30</p>
                    </div>
                    <div className="auction__table__column3">
                      <p className="column__item__price">180 000 ₸</p>
                    </div>
                  </div>
                  <div className="auction__table__row">
                    <div className="auction__table__column1">
                      <img
                        src="/img/goods__nav1__item/private-client.svg"
                        alt="private-client"/>
                      <div className="column__item">
                        <p className="column__item1">ТОО «UPS Logistics»</p>
                        <p className="column__item2">Рейтинг: 5.0</p>
                      </div>
                    </div>
                    <div className="auction__table__column2">
                      <p className="column2__item">4 мая 12:30</p>
                    </div>
                    <div className="auction__table__column3">
                      <p className="column__item__price">200 000 ₸</p>
                    </div>
                  </div>
                  <div className="auction__table__row">
                    <div className="auction__table__column1">
                      <div className="column__item">
                        <p className="column__item1">Начальная ставка</p>
                        <p className="column__item2">выставлено организатором</p>
                      </div>
                    </div>
                    <div className="auction__table__column2">
                      <p className="column2__item">4 мая 17:56</p>
                    </div>
                    <div className="auction__table__column3">
                      <p className="column__item__price">265 500 ₸</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="aside">
          <div className="aside__contactCard">
            <h2>Об аукционе</h2>
            <div className="contactCard__content">
              <div className="contactCard__title noMargin">
                <p>Организатор:</p>
                <h3>ТОО «Logistics Farm»</h3>
              </div>
            </div>
            <div className="contactCard__auction__item">
              <p>Кол-во
                <br/>
                участников:</p>
              <div className="contactCard__auction__info">
                <img src="/img/widgets/user-check.svg" alt/>
                <h3>3 участника</h3>
              </div>
            </div>
            <div className="contactCard__auction__item">
              <p>Закрытие
                <br/>
                через:</p>
              <div className="contactCard__auction__info">
                <i className="far fa-clock"/>
                <h3>8 ч 15 мин</h3>
              </div>
            </div>
            <div className="contactCard__auction__item">
              <p>Ставка:
                <br/>
                (макс/текущ)</p>
              <div className="contactCard__auction__info">
                <img src="/img/widgets/tenge.svg" alt/>
                <p className="column__item__price">165 000 ₸
                </p>
              </div>
            </div>
            <a className="btn" href="#">Учавствовать в аукционе</a>
          </div>
          <div className="aside__functions__wrapper">
            <div className="aside__functions">
              <a className="izbrannoe" href="#"><i className="far fa-star"/>В избранное</a>
              <a className="download" href="example" download><img src="/img/widgets/aside_function1.png" alt/></a>
              <a className="print" href="javascript:(print());"><img src="/img/widgets/aside_function2.png" alt/></a>
              <a className="someShit" href="#"><img src="/img/widgets/aside_function3.png" alt/></a>
            </div>
            <div className="aside__changed_date">
              <p>Изменено: 7 мая 12:30</p>
            </div>
          </div>
        </aside>
      </div>

      {/* <PostAside postinfo={postInfo} /> */}
    </div>

  )
}

export default AuctionDetail;