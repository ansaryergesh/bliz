import React, {useState,useEffect} from 'react'
import axios from 'axios'
const SideBarCurrency = () => {

  useEffect(() => {
    var Connect = new XMLHttpRequest();
  // Define which file to open and
  // send the request.
    Connect.open("GET", "https://www.nationalbank.kz/rss/rates_all.xml", false);
    Connect.setRequestHeader("Content-Type", "text/xml");
    // Connect.send(null);
  }, [])

  const [currency, setCurrency] = useState({rubl: 0, dollar:0, euro:0, yuan: 0})
  return (
    <div className="products__aside">
      <div className="aside__add__ad">
        <a className="btn" href="/post_add">Подать объявление</a>
        <p>Размещение за 5 минут:
          <br/>
          легко,быстро и выгодно!</p>
      </div>
      <div className="exchange_rate">
        <h4>Курсы валют</h4>
        <div className="exchange__item">
          <p>₽, Рубль</p>
          <span>{currency.rubl} ₸</span>
        </div>
        <div className="exchange__item">
          <p>$, Доллар</p>
          <span>{currency.dollar} ₸</span>
        </div>
        <div className="exchange__item">
          <p>€, Евро</p>
          <span>{currency.euro} ₸</span>
        </div>
        <div className="exchange__item">
          <p>¥, Юань</p>
          <span>{currency.yuan} ₸</span>
        </div>
      </div>
      <div className="aside__ad">
        <a href="#"><img src="/img/widgets/ad2.png" alt/></a>
      </div>
      <div className="aside__call">
        <div className="aside__call__content">
          <div className="aside__call__text">
            <h4>Обратная связь</h4>
            <p>Возникли вопросы?
              <br/>
              Мы с радостью ответим.</p>
          </div>
          <img src="/img/widgets/aside_call.png" alt/>
        </div>
        <a className="btn btn--white" href="#">СВЯЗАТЬСЯ С НАМИ</a>
      </div>
      <div className="aside__ad">
        <a href="#"><img src="/img/widgets/ad3.png" alt/></a>
      </div>
    </div>

  )
}

export default SideBarCurrency