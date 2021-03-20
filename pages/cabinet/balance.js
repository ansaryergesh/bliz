import { useState } from "react";
import BreadCumbs from "../../components/shared/BreadCumbsConfigure";

const Balance = () => {
  const [balance, setBalance] = useState('0')
  return (
    <div className="grid-container container">
      <div className="section">
        <div className="products__title paddings little_pad">
          <BreadCumbs />
          <h1 className="smaller_font">Мой баланс</h1>
        </div>
        <div className="balance__details">
          <div className="balance__detail__item">
            <p>Статус:</p>
            <div className="balance__detail__item__inner">
              <h3>Лимитед</h3>
            </div>
          </div>
          <div className="balance__detail__item">
            <p>Рейтинг:</p>
            <div className="balance__detail__item__inner">
              <i className="far fa-star"/>
              <h3 className="blue">0</h3>
            </div>
          </div>
          <div className="balance__detail__item">
            <p>Баланс:</p>
            <div className="balance__detail__item__inner">
              <img src="/img/widgets/tenge.svg" alt/>
              <h3 className="green">{balance} ₸</h3>
            </div>
          </div>
        </div>
        <div className="balance__top-up">
          <div className="products__title">
            <h1>Пополнить счет</h1>
          </div>
          <div className="balance__top-up__wrapper">
            <div className="balance__top-up__item">
              <div className="balance__top-up__item__img">
                <img src="/img/widgets/balance1.png" alt/>
              </div>
              <div className="balance__top-up__item__content">
                <div className="balance__top-up__item__content__text">
                  <h3>Онлайн любым способом</h3>
                  <p>Банковской картой, онлайн-платежи и
                    <br/>
                    кошельки через сервис платеже
                    <br/>
                    Paybox.kz</p>
                </div>
                <a className="btn green" href="#">Пополнить онлайн</a>
              </div>
            </div>
            <div className="balance__top-up__item">
              <div className="balance__top-up__item__img">
                <img src="/img/widgets/balance2.png" alt/>
              </div>
              <div className="balance__top-up__item__content">
                <div className="balance__top-up__item__content__text">
                  <h3>Запросить счет на оплату</h3>
                  <p>Вы сможете пополнить счет как юр. лицо
                    <br/>
                    со всеми необходимыми документами
                    <br/>
                    и выписками.</p>
                </div>
                <a className="btn green" href="#">Пополнить онлайн</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="balance__history">
          <div className="products__title special_pads">
            <h1>История счета</h1>
          </div>
          <div className="balance__history__container">
            <div className="balance__history__title">
              <div className="balance__history__title__inner">
                <p>ДАТА</p>
                <p>ОПЕРАЦИЯ</p>
              </div>
              <p>СУММА</p>
            </div>
            <div className="balance__history__item">
              <div className="balance__history__item__inner">
                <p>15.05.2020</p>
                <h3>Пополение счета онлайн Paybox.kz</h3>
              </div>
              <h3 className="green">+ {balance} тг</h3>
            </div>
            <div className="balance__history__item">
              <div className="balance__history__item__inner">
                <p>10.05.2020</p>
                <h3>Поднятие объявления в ТОП</h3>
              </div>
              <h3> {balance} тг</h3>
            </div>
            <div className="balance__history__item">
              <div className="balance__history__item__inner">
                <p>15.05.2020</p>
                <h3>Пополение счета (счет для юр. лица)</h3>
              </div>
              <h3 className="green">{balance} тг</h3>
            </div>
            <div className="balance__history__item">
              <div className="balance__history__item__inner">
                <p>10.05.2020</p>
                <h3>Поднятие объявления в ТОП</h3>
              </div>
              <h3> {balance} тг</h3>
            </div>
          </div>
        </div> */}
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default Balance;