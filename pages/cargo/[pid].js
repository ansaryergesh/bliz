import React, {useEffect, useState} from 'react'
import {useRouter, Router} from 'next/router'
import axios from 'axios'
import PostPlaceMap from '../../components/googleMap/PostPlaceMap'
import { dateParse } from '../../defaults/extraFunctions'
import LoadingSpinner from '../../components/shared/others/LoadingSpinner'
import PostAside from '../../components/post/PostAside'
import {useDispatch} from 'react-redux'
import cookie from 'js-cookie'
import CheckBox from '../../components/shared/CheckBox'
import firebase from '../../firebase'
import {connect} from 'react-redux'
import uuid from 'uuid'
import { documents, extra, pogruzka } from '../../defaults/checkboxes/documents'
import {saveToDatabase} from '../../fbdatabase/database'
import PriceModal from '../../components/modalForRequest/priceModal'
import MessageModal from '../../components/firebaseComponents/MessageModal'
const mapStateToProps = ({usersReducer: {
  user
}}) => ({user})


const FilteredCheckBox = ({document, otherDoc}) => {
  let filtered = document.filter(item =>        // filter jsondata
    otherDoc.every( f =>                // so every member of filter array
         f.includes(item[f.id])) )
}
const CargoDetailed = ({user}) => {
  const dispatch = useDispatch();
  const getRoute = () => {
    setRouteLoad(true)
    axios.get(`${process.env.BASE_URL}/distance?from=${postInfo.details.from}&to=${postInfo.details.to}`,)
      .then(res => {
        setSteps(res.data.routes)
        setRouteLoad(false)
      })
  }
  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/getPostByID/${pid}`)
      .then(res=> {
        setLoading(false)
        let top = res.data.data[0].top ? res.data.data[0].top : false
        if(res.data.success) {
          let finalres = res.data.data[0];
          console.log(finalres.additional[0])
          setPostInfo({user: {
            id: finalres.user[0].id,
            fullName: finalres.user[0].fullName,
            email: finalres.user[0].email,
            phone: finalres.user[0].phone,
            address: finalres.user[0].address,
            companyDetails: {
              companyName: finalres.user[0].companyDetails ? finalres.user[0].companyDetails[0].companyName: '',
              bin: finalres.user[0].companyDetails ? finalres.user[0].companyDetails[0].bin  : '',
            }
            },
            price: {
              price: finalres.price[0].price,
              payment_type: finalres.price[0].payment_type
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
          additional: finalres.additional[0],
          updated_at: finalres.updated_at,
          top: top
      })}else {
        setPostInfo({errorId: true})
      }
      })
  },[])

  const [currentChat,setCurrentChat] = useState(null)
  // Send message after creating chat with two people
  useEffect(() => {
    console.log('first run')
    if(currentChat !== null) {
      const messageId = uuid()
      saveToDatabase(`/chats/${currentChat}/messages/${messageId}`, {
        body: message, sender: cookie.get('active_user'), created: new Date().toISOString(),
      })
      router.push('/cabinet/message')
    }
  },[currentChat])

  const sendMessageRequest = () => {
    if(message !== '') {
      const fullChatName = `post_id_${pid}`;
      const recipient = postInfo.user.id;
      const sender = cookie.get('active_user')
      saveToDatabase(`/${recipient}/chats/${fullChatName}`, fullChatName)
      saveToDatabase(`/${sender}/chats/${fullChatName}`, fullChatName)
      saveToDatabase(`/chats/${fullChatName}/messages`, {})
      setCurrentChat(fullChatName)
    }
  }
  
  const sendRequest = () => {
    axios.post(`https://test.money-men.kz/api/sendRequest`, {
      post_id: pid,
      token: cookie.get('token'),
      currency: currency ? currency : '15000',
      price: price,
    })
      .then(res=> {
        if(res.data.success) {
          console.log(res.data.message)
          dispatch({type: 'SUCCESS_MESSAGE', payload: res.data.message})
        }else {
          console.log(res.data.message)
          dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
        }
      })
      .catch(err=> {
      })
  }
  const router = useRouter()
  const [steps,setSteps] = useState([])
  const [modal, setModal] = useState(false)
  const [modalMessage,setModalMessage] = useState(false)
  const [message,setMessage] = useState('')
  const [price, setPrice] = useState('1')
  const [currency, setCurrency] = useState('')
  const [actionLoading, setActionLoading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [routeLoad, setRouteLoad] = useState(false)
  const {pid} = router.query
  const [postInfo, setPostInfo] = useState({
    errorId: false,
    updated_at: '',
    top: false,
    user: {
      id: '',
      fullName: '',
      email: '',
      phone: "",
      address: null,
      companyDetails: 
        {
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
    additional: [],
    price: {
      price:'',
      payment_type: ''
    }
  }
  )

  return (
    <div>
      {loading ? <LoadingSpinner /> : ''}
      <div className="grid-container container">
        <section className="section">
          <div className="goods__info">
            <div className="goods__info__head">
              <div className="goods__info__breadcrumbs">
              <p className='goods__info__gray'><a href="/" className=''>Главная</a>{" " + "/" + " "}<a href='/storage' >Грузоперевозки </a>/<a href="#" className='gray_font'>{" " + "Грузы"}</a></p>
              </div>
              <div className="goods__info__title">
                <h2>Груз: {postInfo.details.title}  {postInfo.details.net} тн / {postInfo.details.volume} м³  </h2> {postInfo.top && "( Топ предложения 🔥  )"}
                <p>
                  <span className="goods__info__gray">{dateParse(postInfo.details.start_date)} – {dateParse(postInfo.details.end_date)} /</span>
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
                  <p>ЖД Рефрижиратор</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">параметры груза</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>{postInfo.details.net} тн / {postInfo.details.volume} м³</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">Сумма</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>{postInfo.price.price}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">Тип оплаты</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>{postInfo.price.payment_type}</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray">дата погрузки</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2">
                  <p>{dateParse(postInfo.details.start_date)} – {dateParse(postInfo.details.end_date)}</p>
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
            <div className="goods__info__add">
              <h4 className="goods__title">Дополнительная информация</h4>
              <p className="goods__info__add-text">Погрузка груза должна выполняться аккуратно.
                <br/>
                Коробки с фруктами и овощами закрепить надежно.
                <br/>
                Оплата на месте получения.</p>
            </div>
            <div className="goods__info__add">
        
 
              {documents.map(doc => (
                <CheckBox className={postInfo.additional.docs && postInfo.additional.docs.includes(doc.name) ? '' : 'd-none'} name={doc.name} checked={true} />
                // <CheckBox name={doc.name} checked={postInfo.additional.docs && postInfo.additional.docs.includes(doc.name)} />
              ))}
              {/* <h4 className="goods__title">Погрузка</h4> */}
              {pogruzka.map(doc => (
                <CheckBox className={postInfo.additional.loading && postInfo.additional.docs.includes(doc.name) ? '' : 'd-none'} name={doc.name} checked={postInfo.additional.loading && postInfo.additional.loading.includes(doc.name)} />
              ))}
              {/* <h4 className="goods__title">Дополнительно</h4> */}
              {extra.map(doc => (
                <CheckBox className={postInfo.additional.addition && postInfo.additional.docs.includes(doc.name) ? '' : 'd-none'} name={doc.name} checked={postInfo.additional.addition && postInfo.additional.addition.includes(doc.name)} />
              ))}
            </div>
            <PostPlaceMap steps={steps} to_string={postInfo.details.to_string} from_string={postInfo.details.from_string} loading={loading} from={postInfo.details.from} to={postInfo.details.to}/>
            
            <button disabled={routeLoad ? true : false} className={steps.length>0 ? 'd-none' : ''} onClick={getRoute}>{routeLoad ? 'Подождите ...' : 'Показать маршрут'}</button>
          </div>
        </section>
        <PriceModal actionLoading={actionLoading} modal={modal} setModal={setModal} price={price} setPrice={setPrice} currency={setCurrency} onSendRequest={sendRequest} />
        <MessageModal  actionLoading={actionLoading} modal={modalMessage} setModal={setModalMessage} setMessage={setMessage} message={message} onSendRequest={sendMessageRequest} />
        <PostAside user ={user} sendRequest={setModal} postinfo={postInfo} setModal={setModalMessage}/>
      </div>

    </div>
  )
}

export default(connect(mapStateToProps, null)(CargoDetailed));