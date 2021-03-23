import React, {useEffect, useState} from 'react'
import {useRouter, Router} from 'next/router'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import AuctionMap from '../../../components/googleMap/AuctionMap'
import {dateParse, dateParse2} from '../../../defaults/extraFunctions'
import LoadingSpinner from '../../../components/shared/others/LoadingSpinner'
import PostAside from '../../../components/post/PostAside'
import Timer from '../../../components/post/Timer'
import cookie from 'js-cookie'
import { currencies } from '../../../defaults/defaults'
import {connect} from 'react-redux'
import PriceModal from '../../../components/modalForRequest/priceModal'

const mapStateToProps = ({usersReducer: {
  user
}}) => ({user})

const AuctionDetail = ({user}) => {

  const ButtonParticipate = () => {
    if(postInfo.users.some(u=>u.user_id == user.id)) {
      return(
        <a className="btn" disabled={actionLoading} href="#" onClick={() => onCancelParticipate(pid)}>Отменить участие</a>
      )
    }else {
      return (
        <a className="btn" href="#" onClick={() => setAuction(true)}>Учавствовать в аукционе</a>
      )
    }
  }
  const checkIfOwner = () => {
    postInfo.organizatorinfo.id === user.id ? true : false
  }

  const OwnAuction = () => {
    if(postInfo.organizatorinfo.id === user.id) {
      return(
        <>
         <a className="btn" disabled={actionLoading}>Редактировать</a>
         <a className="btn" disabled={actionLoading}>Удалить</a>
        </>
      )
    }else {
      return(<ButtonParticipate />)
    }
  }
  useEffect(() => {
      getAuctionInfo()
  }, [])

  const getAuctionInfo = () => {
    axios
    .get(`${process.env.BASE_URL}/getAuctionById?auction_id=${pid}`)
    .then(res => {
      setLoading(false)
      if (res.data.success) {
        let finalres = res.data.data[0];
        setPostInfo({
          details: {
            date_finish: finalres.details[0].date_finish,
            from: finalres.details[0].from_city,
            to: finalres.details[0].to_city,
            start_date: finalres.details[0].date_start,
            end_date: finalres.details[0].date_end,
            volume: finalres.details[0].volume,
            net: finalres.details[0].net,
            distance: finalres.details[0].distance,
            duration: finalres.details[0].duration,
            from_string: finalres.details[0].from_string,
            to_string: finalres.details[0].to_string,
            title: finalres.details[0].title,
            type_trasport: finalres.details[0].type_trasport
          },
          updated_at: finalres.updated_at,
          users: finalres.user_id,
          price_details: finalres.price_details,
          organizatorinfo: {
            id: finalres.user[0].id,
            fullName: finalres.user[0].fullName,
            type: finalres.user[0].type,
          }
        })
      } else {
        setPostInfo({errorId: true})
      }
    })
  }
  const minPrice=() => {
    let prices = [];
    postInfo.price_details.forEach(p=>prices.push(p.price))
    
    return prices;
  }
  const onFavoure = (id) => {
      axios.get(`https://test.money-men.kz/api/addAuctionFavourites?token=${cookie.get('token')}&auction_id=${pid}`,)
        .then(res=> {
            if(res.data.success) {
                dispatch({type: 'SUCCESS_MESSAGE', payload: 'Добавлен в избранные'})
            }else {
                dispatch({type: 'ERROR_MESSAGE', payload: 'Уже добавлен'})
            }
        })
  }
  const onParticipate = () => {

    setActionLoading(true)
    dispatch({type: 'CLOSE_MESSAGE'})
    let tokenUser = cookie.get('token')
    if(tokenUser!== undefined) {
      axios.post(`${process.env.BASE_URL}/sendAuctionRequest`, {
        token: tokenUser,
        price:price,
        currency:currency,
        auction_id: pid
      })
        .then(res=> {
          setActionLoading(false)
          if(res.data.success) {
            dispatch({type: 'SUCCESS_MESSAGE', payload: 'Вы участвуете'})
            getAuctionInfo()
            setAuction(false)
          }
          else {
            dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
          }
        })
    }else {
      dispatch({type: 'ERROR_MESSAGE', payload: 'Чтобы участвовать в аукцион вам надо зайти на сайт через аккаунт'})
    }
   
  }

  const onCancelParticipate = (aucId) => {
    setActionLoading(true)
    dispatch({type: 'CLOSE_MESSAGE'})
    let tokenUser = cookie.get('token')
    if(tokenUser!== undefined) {
      axios.get(`${process.env.BASE_URL}/cancelAuctionOrder`, {params: {
        token: tokenUser,
        auction_id: aucId}
      })
        .then(res=> {
          setActionLoading(false)
          console.log(res)
          if(res.data.success) {
            dispatch({type: 'SUCCESS_MESSAGE', payload: 'Отменен участие'})
            getAuctionInfo();
          }
          else {
            dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
          }
        })
    }else {
      dispatch({type: 'ERROR_MESSAGE', payload: 'Чтобы участвовать в аукцион вам надо зайти на сайт через аккаунт'})
    }
   
  }
  const dispatch = useDispatch();
  const router = useRouter()
  const [steps,
    setSteps] = useState([])
  const [loading,
    setLoading] = useState(true)
  const [routeLoad,
    setRouteLoad] = useState(false)
  const [price, setPrice] = useState('');
  const [actionLoading,setActionLoading] = useState(false)
  const [currency,setCurrency] = useState(1)
  const [auctionModal, setAuction] = useState(false)
  const {pid} = router.query
  const [postInfo,
    setPostInfo] = useState({
    errorId: false,
    updated_at: '',
    organizatorinfo: {fullName: '', id: '', type: ''},
    details: {
      from: "",
      to: "",
      date_finish: '',
      start_date: "",
      end_date: "",
      volume: '',
      net: '',
      distance: "",
      duration: "",
      from_string: "",
      to_string: "",
      title: '',
      type_trasport: ''
    },
    price_details: [],
    steps: [],
    users: []
  })

  return (
    <div>
      {loading
        ? <LoadingSpinner/>
        : ''}
      <div className="grid-container container">
      <PriceModal 
        actionLoading={actionLoading}
        modal={auctionModal}
        setModal={setAuction}
        price={price}
        setPrice={setPrice}
        currency ={currency}
        setCurrency ={setCurrency}
        onSendRequest={onParticipate}
        />
      <div className={auctionModal ? "driver_modal edit_photo active" : 'driver_modal edit_photo'}>
            <div className="driver_modal__inner ">
              <h2>Аукцион</h2>
              <i className="fas fa-times driver_times" onClick={()=>setAuction(false)}/>
              <div className="edit_photo__img">
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map(c=> (
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>
              </div>
          
              <button disabled={actionLoading} id="close_edit_photo" className="btn block inherit" onClick={() => onParticipate(pid)}>Участвовать...</button>
            
                
               
          
            </div>
          </div>
        <section className="section">
          <div className="goods__info">
            <div className="goods__info__head">
              <div className="goods__info__breadcrumbs">
              <p className='goods__info__gray'><a href="/" className=''>Главная</a>{" " + "/" + " "}<a href='/cargo' >Грузоперевозки </a>/<a href="#" className='gray_font'>{" " + "Аукцион"}</a></p>
               
              </div>
              <div className="goods__info__title">
                <h2>Аукцион: {postInfo.details.title}  {postInfo.details.net}т / {postInfo.details.volume} м³</h2>
                <p>
                  <span className="goods__info__gray">{dateParse2(postInfo.details.start_date)} - {dateParse2(postInfo.details.end_date)}</span>
                  {postInfo.details.from_string} — {postInfo.details.to_string}
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
                  <p>{postInfo.details.type_trasport}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">параметры транспорта</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>{postInfo.details.net}т / {postInfo.details.volume} м³</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">дата погрузки и выгрузки</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                <p>{dateParse2(postInfo.details.start_date)} – {dateParse2(postInfo.details.end_date)}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">откуда</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                    <p>{postInfo.details.from_string}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">куда</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                <p>{postInfo.details.to_string}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">расстояние</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                <p>{postInfo.details.distance}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">время в пути</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                <p>{postInfo.details.duration}</p>
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
         
            <AuctionMap   to_string={postInfo.details.to_string} from_string={postInfo.details.from_string} loading={loading} from={postInfo.details.from} to={postInfo.details.to}/>
            <div className="goods__info__auction">
              <h4 className="goods__title">Участники аукциона ({postInfo.price_details.length})</h4>
              <div className="info__auction__table">
                <div className="auction__table">
                    {postInfo.price_details.map(details => (
                        <div className="auction__table__row">
                    <div className="auction__table__column1">
                      <img src="/img/goods__nav1__item/logistic-logo.svg" alt="logistic__logo"/>
                      <div className="column__item">
                        <p className="column__item1" a href={details.user[0].id}>{details.user[0].fullName}</p>
                        <p className="column__item2">Рейтинг: 0</p>
                      </div>
                    </div>
                    <div className="auction__table__column2">
                      <p className="column__item1">{dateParse2(details.created)}</p>
                    </div>
                    
                        {details.price === Math.min.apply(Math,minPrice()) ?
                    <div className="auction__table__column3 separator">
                      <img src="/img/goods__nav1__item/separator.png" alt="separator"/>     <div className="separator__item">
                        <p className="column__item__price">{details.price}</p>
                        <p className="column__item__bet">лучшая ставка</p>
                      </div>
                  </div>: 
                      <div class="auction__table__column3">
                        <p class="column__item__price">{details.price} ₸</p>
                      </div>}
                      
                      
                    </div>
                    ))}
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
                <h3>{postInfo.organizatorinfo.fullName}</h3>
              </div>
            </div>
            <div className="contactCard__auction__item">
              <p>Кол-во
                <br/>
                участников:</p>
              <div className="contactCard__auction__info">
                <img src="/img/widgets/user-check.svg" alt/>
                <h3 className={postInfo.price_details && postInfo.price_details.length>0 ? ''  : 'gray_font'}>{postInfo.price_details && postInfo.price_details.length>0 ? postInfo.price_details.length + 'участника': '0 участника'}</h3>
              </div>
            </div>
            <div className="contactCard__auction__item">
              <p>Закрытие
                <br/>
                через:</p>
              <div className="contactCard__auction__info">
                <i className="far fa-clock"/>
              
                <h3>{postInfo.details.date_finish!=='' ? <Timer date_finish={postInfo.details.date_finish} /> : ''}</h3>
              </div>
            </div>
            <div className="contactCard__auction__item">
              <p>Ставка:
                <br/>
                (мин/текущ)</p>
              <div className="contactCard__auction__info">
                <img src="/img/widgets/tenge.svg" alt/>
                <p className="column__item__price">{Math.min.apply(Math,minPrice())== 'Infinity'? 0 + ' т': Math.min.apply(Math,minPrice())+ ' т'}
                </p>
              </div>
            </div>
            <OwnAuction />
         
          </div>
          <div className="aside__functions__wrapper">
            <div className="aside__functions">
              <a className="izbrannoe" onClick={() => onFavoure(pid)}><i className="far fa-star"/>В избранное</a>
              <a className="download" href="example" download><img src="/img/widgets/aside_function1.png" alt/></a>
              <a className="print" href="javascript:(print());"><img src="/img/widgets/aside_function2.png" alt/></a>
              <a className="someShit" href="#"><img src="/img/widgets/aside_function3.png" alt/></a>
            </div>
            <div className="aside__changed_date">
              <p>Изменено: {dateParse2(postInfo.updated_at)}</p>
            </div>
          </div>
        </aside>
      </div>

    </div>

  )
}
export default(connect(mapStateToProps, null)(AuctionDetail));
// {postInfo.users.some(u=> u.user_id ==user.id) ? 'true' :}