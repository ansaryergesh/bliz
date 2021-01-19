import React from 'react'
export default function Navuser() {
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
        <a href="cabinet-conf-nav1.html">Баталгазиев Р.В.</a>
        <i className="fas fa-angle-down" />
      </div>
    </div>      
  </div>
</div>
    </>

  )
}