import React from 'react'
import Flash from '../others/FlashMessage'
import LoadingSpinner from '../others/LoadingSpinner'
export default function Navguest() {
  return (
    <>
    <Flash />
    <LoadingSpinner />
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
  </div>
</div>


    </>

  )
}