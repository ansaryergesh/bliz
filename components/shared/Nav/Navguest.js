import React, { Fragment } from 'react'
import Flash from '../others/FlashMessage'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import axios from 'axios'
import {connect} from 'react-redux'
import firebase from '../../../firebase'
import Router from 'next/router'
const mapStateToProps = ({
  usersReducer: {user: {email,fullName}}
}) => ({
  email, fullName
})
export default (connect(mapStateToProps,null)(function Navguest({email,fullName}) {
  const router = useRouter()
  const isActiveUser = cookie.get('token')


  
const handleLogout =(val) => {
  axios.post(`${process.env.BASE_URL}/logout`, {email: {val}})
    .then(response => {
      if(response.data.success) {
        cookie.remove('token')
        firebase.auth().signOut()
          .then(Router.push('/'))
        setTimeout(() => {
          location.reload()
        },200)
      }
    })
}
  return (
    <>
    <Flash />
     
    <div className="header__top">
        <div className="header__top__wrapper container">
          <div className="header__top__items">
            <div className="header__top__mobile__item">
              <div className="mobile_bar">
                <span />
              </div>
            </div>
            <div className="header__top__item">
              <img src="/img/widgets/KZ.svg" alt="" />
              <p>Казахстан, Алматы</p>
              <i className="fas fa-angle-down" />
              <div className="dropdown__items">
                <div className="header__top__item">
                  <img src="/img/widgets/KZ.svg" alt="" />
                  <p>Казахстан, Астана</p>
                </div>
                <div className="header__top__item">
                  <img src="/img/widgets/KZ.svg" alt="" />
                  <p>Казахстан, Актау</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header__top__mobile__item">
            <a className="mobile__logo" href="/">BLIZ.KZ</a>
          </div>
          <div className="header__top__items">
            <div className="header__top__mobile__item mobile_wrap">
              <a href="#"><img src="/img/widgets/mobile_globo.png" alt="" /></a>
              <a href="/login"><img src="/img/widgets/mobile_user.png" alt="" /></a>
            </div>
            <div className="header__top__item">
              <img src="/img/widgets/language_logo.png" alt="" />
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

            {isActiveUser!==undefined && <React.Fragment>

              <div className="header__top__item">
        {/* <div className="header__item__notification">2</div> */}
                <i className="far fa-clipboard" />
                <a href="/cabinet/requests">Заявки</a>
              </div>
              <div className="header__top__item">
                <i className="far fa-star" />
                <a href="/cabinet/favourites">Избранное</a>
              </div>
              <div className="header__top__item margin_right">
                {/* <div className="header__item__notification">2</div> */}
                <i className="far fa-bell" />
                <a href="/cabinet/notification">Уведомления</a>
                <i className="fas fa-angle-down" />
              </div>
              <div className="header__top__item">
                <i className="far fa-envelope" />
                <a href="/cabinet/message">Сообщения</a>
              </div>
              <div className="header__top__item">
              <img src="/img/widgets/personal_cabinet_logo.png" alt="" />
              <a href="/cabinet">Личный кабинет</a>
            </div>
            <div  onClick={() => handleLogout(email)} className="header__top__item">
              <a  href="#">Выйти</a>
            </div>
            </React.Fragment> }
            {isActiveUser === undefined && <React.Fragment>
              <div className="header__top__item">
              <a href="/register">Регистрация</a>
            </div>
            <div className="header__top__item">
              <img src="/img/widgets/personal_cabinet_logo.png" alt="" />
              <a href="/login">Личный кабинет</a>
            </div>
              </React.Fragment>}
           
          </div>
        </div>
        <div className="header__top__mobile">
          <div className="header__top__mobile__wrapper container">
            <div className="header__top__mobile__nav">
              <div className="header__top__mobile__nav__item">
                <div className="header__top__mobile__nav__item__text">
                  <h3>Грузоперевозки</h3>
                  <i className="fas fa-angle-down" />
                </div>
                <div className="header__top__mobile__nav__item__inner">
                  <div className="header__top__mobile__nav__item__inner__wrapper">
                    <a href="/cargo">Грузы</a>
                    <a href="/cargo/transport">Транспорт</a>
                    <a href="/cargo/auction">Аукцион</a>
                    <a href="/cargo/distance">Расчет растояний</a>
                    <a href="/cargo/check">Проверка компаний</a>
                  </div>
                </div>
              </div>
              <div className="header__top__mobile__nav__item">
                <div className="header__top__mobile__nav__item__text">
                  <h3>Склады</h3>
                  <i className="fas fa-angle-down" />
                </div>
                <div className="header__top__mobile__nav__item__inner">
                  <div className="header__top__mobile__nav__item__inner__wrapper">
                    <a href="/storage">Склады</a>
                    <a href='/storage/add'>Подать объявление</a>
                  </div>
                </div>
              </div>
              <div className="header__top__mobile__nav__item">
                <div className="header__top__mobile__nav__item__text">
                  <h3>Спецтехника</h3>
                  <i className="fas fa-angle-down" />
                </div>
                <div className="header__top__mobile__nav__item__inner">
                  <div className="header__top__mobile__nav__item__inner__wrapper">
                    <a href="/equipment">Спецтехника</a>
                    <a href="/equipment/add">Подать объявление</a>
                  </div>
                </div>
              </div>
              {isActiveUser !== undefined && 
                 <div className="header__top__mobile__nav__item">
                 <div className="header__top__mobile__nav__item__text">
                   <h3>Личный кабинет</h3>
                   <i className="fas fa-angle-down" />
                 </div>
                 <div className="header__top__mobile__nav__item__inner">
                   <div className="header__top__mobile__nav__item__inner__wrapper">
                     <a href="/cabinet">Личный кабинет</a>
                     <a href="/cabinet/requests">Заявки</a>
                     <a href="/cabinet/posts">Объявления</a>
                     <a href="/cabinet/workers">Сотрудники</a>
                     <a href="/cabinet/message">Сообщения</a>
                     <a href="/cabinet/favourites">Избранное</a>
                   </div>
                 </div>
               </div>
              }
            </div>
            <div className="header__top__mobile__login">
              {isActiveUser !== undefined ? <Fragment><h3>Пополнить баланс</h3>  <div className="header__top__mobile__login__btns">
                <a href="/cabinet/balance">Пополнить баланс</a>
                <a onClick={() => handleLogout(email)}>Выйти</a>
              </div></Fragment> :<Fragment>   <h3>Вход и регистрация</h3>
              <div className="header__top__mobile__login__btns">
                <a href="/login">Войти</a>
                <a href="/register">Регистрация</a>
              </div></Fragment>}
           
            </div>
            <div className="header__top__mobile__language">
              <h3>Регион и язык</h3>
              <div className="header__top__mobile__nav__item">
                <div className="header__top__mobile__nav__item__text">
                  <div className="header__top__mobile__nav__item__text__inner">
                    <img src="/img/widgets/KZ.svg" alt="" />
                    <h3>Казахстан, Алматы</h3>
                  </div>
                  <i className="fas fa-angle-down" />
                </div>
                <div className="header__top__mobile__nav__item__inner">
                  <div className="header__top__mobile__nav__item__inner__wrapper">
                    <a href="#">Казахстан, Алматы</a>
                  </div>
                </div>
              </div>
              <div className="header__top__mobile__nav__item">
                <div className="header__top__mobile__nav__item__text">
                  <div className="header__top__mobile__nav__item__text__inner">
                    <img src="/img/widgets/language_logo.png" alt="" />
                    <h3>На русском</h3>
                  </div>
                  <i className="fas fa-angle-down" />
                </div>
                <div className="header__top__mobile__nav__item__inner">
                  <div className="header__top__mobile__nav__item__inner__wrapper">
                    <a href="#">На казахском</a>
                    <a href="#">На английском</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__top__mobile__contacts">
              <a href='tel:+77073734124'>+7 (707) <span>373 41 24</span></a>
              <a href='tel:+77273956983'>+7 (727) <span>395 69 83</span></a>
              <div className="header__top__mobile__contacts__icons">
                <a href="#"><img src="/img/footer/Instagram.png" alt="instagram" /></a>
                <a href="#"><img src="/img/footer/Telegram.png" alt="telegram" /></a>
                <a href="#"><img src="/img/footer/VK.png" alt="vk" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <header>
        <nav>
          <div className="nav__wrapper container">
            <div className="nav__items">
              <div className="nav__logo">
                <a href="/">BLIZ.KZ</a>
              </div>
              <div className="nav__links">
                <a className={router.pathname.includes('cargo') ? "goods__nav__opener active" : "goods__nav__opener"} href="/cargo">Грузоперевозки</a>
                <a className={router.pathname === '/storage' ? 'goods__nav__opener active' : 'goods__nav__opener'} href='/storage'>Склады</a>
                <a className={router.pathname.includes('equipment') ? 'goods__nav__opener active' : 'goods__nav__opener'} href="/equipment">Спецтехника</a>
                {/* <a href="#">Онлайн-курсы</a> */}
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
        {/* <div className={router.pathname.includes('equipment') ? 'goods__nav equipment active' : 'goods__nav equipment'}>
          <div className="goods__nav__links container">
            <a href="/equipment">Все</a>
            <a className={router.pathname === '/equipment' ? 'active' : ''} href="#">Землеройная</a>
            <a href="#">Строительная</a>
            <a href="#">Бетонные работы</a>
            <a href="#">Грузоперевозки</a>
            <a href="#">Коммунальная</a>
            <a href="#">Прочее</a>
          </div>
        </div> */}
      </header>

    </>

  )
}))