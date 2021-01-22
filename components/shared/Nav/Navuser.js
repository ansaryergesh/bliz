import React from 'react'
import Flash from '../others/FlashMessage'
import {connect} from 'react-redux'
const mapStateToProps = ({
  usersReducer: {user: {name, secondName}}
}) => ({
  name,
  secondName
})
export default (connect(mapStateToProps,null)(function Navuser({name,secondName}) {
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
        <a href="/cabinet">{name + " " }</a>
        <i className="fas fa-angle-down" />
      </div>
    </div>      
  </div>
</div>
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
</nav>
    </>

  )
})) 