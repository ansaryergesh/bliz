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
                <a className={router.pathname.includes('equipment') ? 'goods__nav__opener active' : 'goods__nav__opener'} href="#">Спецтехника</a>
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