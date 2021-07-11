import React from 'react'
import {connect, useDispatch} from 'react-redux'
import cookie from 'js-cookie'
import axios from 'axios'
const mapStateToProps = ({usersReducer: {
  user
}}) => ({user})

const CompanySideInfo = ({user}) => {
  const dispatch = useDispatch()
  const getSubscription = () => {
    axios.get(`${process.env.BASE_URL}/buySubscription?token=${cookie.get('token')}`)
      .then(res=> {
        console.log(res)
        if(res.data.success) {
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Вы брали подписку на объявление'})
        }else {
          dispatch({type: 'ERROR_MESSAGE', payload: 'У вас уже есть активная подписка'})
        }
      })
  }
  const nameOfUser = () => user.companyDetails ? user.companyDetails[0].companyName : user.fullName
    return(
        <div className="aside">
        <div className="aside__contactCard">
          <div className="contactCard__content">
            <img src="/img/widgets/company_icon.png" alt />
            <div className="contactCard__title">
              <h3>{nameOfUser()}</h3>
              <p>{user.fullName} </p>
            </div>
          </div>
          <div className="contactCard__details">
            <div className="contactCard__detail__item">
              <p>Статус:</p>
              <h3>Лимитед</h3>
            </div>
            <div className="contactCard__detail__item">
              <p>Рейтинг:</p>
              <div className="contactCard__detail__item__inner">
                <i className="far fa-star" />
                <h3>0</h3>
              </div>
            </div>
            <div className="contactCard__detail__item">
              <p>Ваш баланс:</p>
              <div className="contactCard__detail__item__inner">
                <img src="/img/widgets/tenge.svg" alt />
                <h3 className="green">{cookie.get('balance')} ₸</h3>
              </div>
            </div>
          </div>
          <a className="btn btn--white green" href="#">Пополнить баланс</a>
          {!user.subscription && <a className="btn btn--white blue" onClick={() => getSubscription()} href="#">Взять подписку</a>}
          {user.subscription && <a className='btn btn--white blue'>У вас доступно подписка до {user.end_subscription_date}</a>}
        </div>
      </div>
    )
}

export default(connect(mapStateToProps, null)(CompanySideInfo));