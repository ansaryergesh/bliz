import { useEffect, useState } from "react";
import BreadCumbs from "../../components/shared/BreadCumbsConfigure";
import cookie from 'js-cookie'
import axios from "axios";
import BalancePage from '../../components/userCabinet/Balance'
import TransactionHistory from "../../components/userCabinet/TransactionHistory";
import { useDispatch } from "react-redux";
const Balance = () => {
  const dispatch = useDispatch()
  const [balance, setBalance] = useState(cookie.get('balance')!== undefined ? cookie.get('balance') : 0)
  const [page,setPage] = useState('balance')
  const [history,setHistory] = useState({})
  const [amount,setAmount] = useState('')

  const onPayment = () => {
    dispatch({type: 'CLOSE_MESSAGE'})
    if(amount>0) {
      axios.post(`${process.env.BASE_URL}/makePayment?user_id=${cookie.get('active_user')}&amount=${amount}`)
      .then(res=> {
        if(res) {
          setAmount('')
          console.log(res)
          window.open(res.data[0] + "?" + res.data[1])
        }
        else {
          dispatch({type: 'ERROR_MESSAGE', payload: 'Что то пошло не так'})
        }
      })
      .catch(err=> {
        dispatch({type: 'ERROR_MESSAGE', payload: 'Что то пошло не так'})
      })
    }else {
      console.log('ok')
      dispatch({type: 'ERROR_MESSAGE', payload: 'Введите сумму'})
    }

  
  }
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
                <input className='form_group' placeholder='Введите сумму' onChange={e=>setAmount(e.target.value)} value={amount} className='amount_input' name='amount' type='number'></input>
                </div>
                <a onClick={() => onPayment()} className="btn green"  >Пополнить онлайн</a>
              </div>
            </div>
            {/* <div className="balance__top-up__item">
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
                <a onClick={() => onPayment()} className="btn green"  >Пополнить онлайн</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default Balance;