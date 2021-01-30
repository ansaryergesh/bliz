import React from 'react'

const CompanySideInfo = () => {
    return(
        <div className="aside">
        <div className="aside__contactCard">
          <div className="contactCard__content">
            <img src="assets/img/widgets/company_icon.png" alt />
            <div className="contactCard__title">
              <h3>ТОО «Alma Logistics»</h3>
              <p>Баталгазиев Р.В. </p>
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
                <h3>5.0</h3>
              </div>
            </div>
            <div className="contactCard__detail__item">
              <p>Ваш баланс:</p>
              <div className="contactCard__detail__item__inner">
                <img src="assets/img/widgets/tenge.svg" alt />
                <h3 className="green">15 000 ₸</h3>
              </div>
            </div>
          </div>
          <a className="btn btn--white green" href="#">Пополнить баланс</a>
        </div>
      </div>
    )
}

export default CompanySideInfo;