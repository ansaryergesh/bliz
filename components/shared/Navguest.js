import React from 'react'
export default function Navguest() {
  return (
    <>
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
        <a href="cabinet-conf-nav1.html">Личный кабинет</a>
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
                <a className="goods__nav__opener" href="#">Грузоперевозки</a>
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
        <div className="goods__nav goods">
          <div className="goods__nav__links container">
            <a href="goods-nav-1.html">Грузы</a>
            <a href="goods-nav-2.html">Транспорт</a>
            <a href="goods-nav-3.html">Аукцион</a>
            <a href="goods-nav-4.html">Расчет растояний</a>
            <a href="goods-nav-5.html">Проверка компаний</a>
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
      </header>

    </>

  )
}