import { useEffect, useState } from "react";
import BreadCumbs from "../../components/shared/BreadCumbsConfigure";
import cookie from 'js-cookie'
import axios from "axios";
import BalancePage from '../../components/userCabinet/Balance'
import TransactionHistory from "../../components/userCabinet/TransactionHistory";
const Balance = () => {
  const [balance, setBalance] = useState('0')
  const [page,setPage] = useState('balance')
  const [history,setHistory] = useState({})

  const getTransactionHistory = () => {
    axios.get('https://test.money-men.kz/api/paymentHistory', {params: {
      token: cookie.get('token')
    }})
      .then(res=> {
        setHistory(res.data.data)
        console.log(res.data.data)
      })
  }
  useEffect(() => {
    getTransactionHistory()
  },[])
  return (
    <div className="grid-container container">
      <div className="section">
        <div className="products__title paddings little_pad">
          <BreadCumbs />
          <h1 className="smaller_font">Мой баланс</h1>
          {page === 'balance' ?
          <button onClick={() => setPage('transaction')} className='btn green'>Открыть историю транзакций</button> : 
          
          <button onClick={() => setPage('balance')} className='btn green'>Проверка баланса</button>}
        </div>
        {page === 'balance' ? 
        <BalancePage balance={balance} /> : <TransactionHistory history={history} />}
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