import React from 'react'
import Flash from '../others/FlashMessage'
import { useRouter } from 'next/router'
export default function Navguest() {
  const router = useRouter()
  return (
    <>
    <Flash />
     <div className="header__top">
  <div className="header__top__wrapper container">
    <div className="header__top__items">
    <div classNamr="header__top__mobile__item">
            <div className="mobile_bar">
              <span></span>
            </div>
          </div>
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
    </div>
    <div className="header__top__items">
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
      <div className="header__top__item">
        <a href="/register">Регистрация</a>
      </div>
      <div className="header__top__item">
        <img src="/img/widgets/personal_cabinet_logo.png"  />
        <a href="/login">Личный кабинет</a>
      </div>
    </div>      
  </div>
  
  {/* <div className="header__top__mobile">
  <div className="header__top__mobile__wrapper container">
    <div className="header__top__mobile__nav">
      <div className="header__top__mobile__nav__item">
        <div className="header__top__mobile__nav__item__text">
          <h3>Грузоперевозки</h3>
          <i className="fas fa-angle-down" />
        </div>
        <div className="header__top__mobile__nav__item__inner">
          <div className="header__top__mobile__nav__item__inner__wrapper">
            <a href="goods-nav-1.html">Грузы</a>
            <a href="goods-nav-2.html">Транспорт</a>
            <a href="goods-nav-3.html">Аукцион</a>
            <a href="goods-nav-4.html">Расчет растояний</a>
            <a href="goods-nav-5.html">Проверка компаний</a>
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
            <a href="goods-nav-1.html">Грузы</a>
            <a href="goods-nav-2.html">Транспорт</a>
            <a href="goods-nav-3.html">Аукцион</a>
            <a href="goods-nav-4.html">Расчет растояний</a>
            <a href="goods-nav-5.html">Проверка компаний</a>
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
            <a href="goods-nav-1.html">Грузы</a>
            <a href="goods-nav-2.html">Транспорт</a>
            <a href="goods-nav-3.html">Аукцион</a>
            <a href="goods-nav-4.html">Расчет растояний</a>
            <a href="goods-nav-5.html">Проверка компаний</a>
          </div>
        </div>
      </div>
      <div className="header__top__mobile__nav__item">
        <div className="header__top__mobile__nav__item__text">
          <h3>Онлайн курсы</h3>
          <i className="fas fa-angle-down" />
        </div>
        <div className="header__top__mobile__nav__item__inner">
          <div className="header__top__mobile__nav__item__inner__wrapper">
            <a href="goods-nav-1.html">Грузы</a>
            <a href="goods-nav-2.html">Транспорт</a>
            <a href="goods-nav-3.html">Аукцион</a>
            <a href="goods-nav-4.html">Расчет растояний</a>
            <a href="goods-nav-5.html">Проверка компаний</a>
          </div>
        </div>
      </div>
    </div>
    <div className="header__top__mobile__login">
      <h3>Вход и регистрация</h3>
      <div className="header__top__mobile__login__btns">
        <a href="login.html">Войти</a>
        <a href="register.html">Регистрация</a>
      </div>
    </div>
    <div className="header__top__mobile__language">
      <h3>Регион и язык</h3>
      <div className="header__top__mobile__nav__item">
        <div className="header__top__mobile__nav__item__text">
          <div className="header__top__mobile__nav__item__text__inner">
            <img src="assets/img/widgets/KZ.svg" alt />
            <h3>Казахстан, Алматы</h3>
          </div>
          <i className="fas fa-angle-down" />
        </div>
        <div className="header__top__mobile__nav__item__inner">
          <div className="header__top__mobile__nav__item__inner__wrapper">
            <a href="#">Казахстан, Алматы</a>
            <a href="#">Казахстан, Алматы</a>
          </div>
        </div>
      </div>
      <div className="header__top__mobile__nav__item">
        <div className="header__top__mobile__nav__item__text">
          <div className="header__top__mobile__nav__item__text__inner">
            <img src="assets/img/widgets/language_logo.png" alt />
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
      <a href={+77073734124}>+7 (707) <span>373 41 24</span></a>
      <a href={+77273956983}>+7 (727) <span>395 69 83</span></a>
      <div className="header__top__mobile__contacts__icons">
        <a href="#"><img src="assets/img/footer/Instagram.png" alt="instagram" /></a>
        <a href="#"><img src="assets/img/footer/Telegram.png" alt="telegram" /></a>
        <a href="#"><img src="assets/img/footer/VK.png" alt="vk" /></a>
      </div>
    </div>
  </div>
</div> */}

  
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
                <a className={router.pathname.includes('equipment') ? 'goods__nav__opener active' : 'goods__nav__opener'} href="/requipment">Спецтехника</a>
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
        <div className={router.pathname.includes('equipment') ? 'goods__nav equipment active' : 'goods__nav equipment'}>
          <div className="goods__nav__links container">
            <a href="/equipment">Все</a>
            <a className={router.pathname === '/equipment' ? 'active' : ''} href="#">Землеройная</a>
            <a href="#">Строительная</a>
            <a href="#">Бетонные работы</a>
            <a href="#">Грузоперевозки</a>
            <a href="#">Коммунальная</a>
            <a href="#">Прочее</a>
          </div>
        </div>
      </header>

    </>

  )
}