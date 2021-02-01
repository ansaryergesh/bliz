import React, {useEffect} from 'react'
import Flash from '../others/FlashMessage'
import {connect} from 'react-redux'
import * as msgaction from '../../../store/actions/messageAction'
import axios from 'axios'
import cookie from 'js-cookie'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { fetchCurrentUser } from '../../../store/actions/userAction'
const mapStateToProps = ({
  usersReducer: {user: {email,fullName}}
}) => ({
  email, fullName
})

const mapDispatchToProps = ({
  successMessage:(msg)=>dispatch(msgaction.successMessage(msg)),
  errorMessage:(msg)=>dispatch(msgaction.errorMessage(msg)),
  fetchCurrentUser:()=>dispatch(fetchCurrentUser())
})

const handleLogout =(val) => {
  axios.post(`${process.env.BASE_URL}/logout`, {email: {val}})
    .then(response => {
      if(response.data.success) {
        cookie.remove('token')
        Router.push('/login')
        setTimeout(() => {
          location.reload()
        },200)
      }
    })
  // cookie.remove('token')
  // axios.post(`${process.env.BASE_URL}/logout`, {email: {email}})
  // .then(response => {
  //   if(response.success) {
  //     this.props.successMessage('Вы успешно вышли из аккаунта')
  //     // cookie.remove('token')
  //   }
  // })
}
export default (connect(mapStateToProps,mapDispatchToProps)(function Navuser({email, fullName}) {
  
  const router = useRouter()
  return (
    <>
    <Flash />
    <div className="header__top">
  <div className="header__top__wrapper container">
    <div className="header__top__items">
      <div className="header__top__item">
        <img src="/img/widgets/KZ.svg"  />
        <p>Казахстан, Алматы</p>
        <i className="fas fa-angle-down" />
        <div className="dropdown__items">
          <div className="header__top__item">
            <img src="/img/widgets/KZ.svg"  />
            <p>Казахстан, Астана</p>
          </div> 
          <div className="header__top__item">
            <img src="/img/widgets/KZ.svg"  />
            <p>Казахстан, Актау</p>
          </div>       
        </div>
      </div>
      <div className="header__top__item">
        <img src="/img/widgets/language_logo.png"  />
        <p>На русском</p>
        <i className="fas fa-angle-down" />
        <div className="dropdown__items">
          <div className="header__top__item">
            <p>На казахском</p>
          </div> 
          <div className="header__top__item">
            <p>На английском</p>
          </div>       
        </div>
      </div>
    </div>
    <div className="header__top__items">
      <div className="header__top__item">
        <div className="header__item__notification">2</div>
        <i className="far fa-clipboard" />
        <a href="#">Заявки</a>
      </div>
      <div className="header__top__item">
        <i className="far fa-star" />
        <a href="#">Избранное</a>
      </div>
      <div className="header__top__item margin_right">
        <div className="header__item__notification">2</div>
        <i className="far fa-bell" />
        <a href="#">Уведомления</a>
        <i className="fas fa-angle-down" />
      </div>
      <div className="header__top__item">
        <i className="far fa-envelope" />
        <a href="#">Сообщения</a>
      </div>
      <div className="header__top__item">
        <img src="/img/widgets/personal_cabinet_logo.png"  />
        {/* + secondName.charAt(0) + "." */}
        <a>{fullName + " " }</a>
        <i className="fas fa-angle-down" />
        <div className="dropdown__items">
          <div className="header__top__item">
          <a href="/cabinet"><p>Личный кабинет</p></a>
          </div> 
          <div className="header__top__item" onClick={() => handleLogout(email)}>
            <p>Выйти</p>
          </div>       
        </div>
      </div>
    </div>      
  </div>
</div>
{router.pathname.includes('cabinet') ?
<nav className="cabinet_nav">
  <div className="nav__wrapper container">
    <div className="nav__items">
      <div className="nav__logo">
        <a href="/">BLIZ.KZ</a>
      </div>
      <div className="nav__links">
        <a className="cabinet_config_opener active" href="#">Настройки</a>
        <a href="#">Заявки</a>
        <a href="cabinet-ad.html">Объявления</a>
        <a href="cabinet-workers.html">Сотрудники</a>
        <a href="cabinet-balance.html">Баланс</a>
        <a href="#">Сообщения</a>
        <a href="cabinet-izbrannoe.html">Избранное</a>
      </div>
    </div>
  </div>
</nav> : <header>
        <nav>
          <div className="nav__wrapper container">
            <div className="nav__items">
              <div className="nav__logo">
                <a href="/">BLIZ.KZ</a>
              </div>
              <div className="nav__links">
              <a className={router.pathname.includes('cargo') ? "goods__nav__opener active" : "goods__nav__opener"} href="#">Грузоперевозки</a>
                <a href="storage.html">Склады</a>
                <a className="equipment__opener" href="#">Спецтехника</a>
                <a href="#">Онлайн-курсы</a>
              </div>
            </div>
            <div className="nav__nums">
              <a href="tel:+77073734124">+7 (707) 373 41 24</a>
              <a href="tel:+77273956983">+7 (727) 395 69 83</a>
            </div>
          </div>
        </nav>
        <div className={router.pathname.includes('cargo') ? 'goods__nav goods active' : 'goods__nav goods'}>
          <div className="goods__nav__links container">
            <a className={router.pathname === '/cargo' ? 'active' : ''} href="/cargo">Грузы</a>
            <a className={router.pathname === '/cargo/transport' ? 'active' : ''}  href="/cargo/transport">Транспорт</a>
            <a className={router.pathname === '/cargo/auction' ? 'active' : ''}  href="/cargo/auction">Аукцион</a>
            <a className={router.pathname === '/cargo/distance' ? 'active' : ''}  href="/cargo/distance">Расчет растояний</a>
            <a className={router.pathname === '/cargo/check' ? 'active' : ''}  href="/cargo/check">Проверка компаний</a>
          </div>
        </div>
        <div className="goods__nav equipment">
          <div className="goods__nav__links container">
            <a href="equipment-nav-1.html">Все</a>
            <a href="equipment-nav-1.html">Землеройная</a>
            <a href="equipment-nav-1.html">Строительная</a>
            <a href="equipment-nav-1.html">Бетонные работы</a>
            <a href="equipment-nav-1.html">Грузоперевозки</a>
            <a href="equipment-nav-1.html">Коммунальная</a>
            <a href="equipment-nav-1.html">Прочее</a>
          </div>
        </div>
      </header>}
    </>

  )
})) 