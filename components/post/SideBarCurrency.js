import React, {useState,useEffect} from 'react'
import axios from 'axios'
import LoadingSpinner from '../shared/others/LoadingSpinner';
import Router, {useRouter} from 'next/router'

var parseString = require('xml2js').parseString;
const SideBarCurrency = () => {
  const router = useRouter();
  const path = router.pathname
  useEffect(() => {
    axios.get('https://www.nationalbank.kz/rss/rates_all.xml', {
      "Content-Type": "application/xml; charset=utf-8"
    })
      .then(response=> {
        setLoading(false)
        let finalRes = parseString(response.data, function(err,result) {
          setCurrency({
            dollar:result.rss.channel[0].item[10].description, 
            euro:result.rss.channel[0].item[11].description,
            rubl: result.rss.channel[0].item[24].description,
            yuan: result.rss.channel[0].item[15].description,
          })
        })
        setTimeout(() => {
          finalRes
        }, 500)
      })
  }, [])

  const [currency, setCurrency] = useState({rubl: 0, dollar:0, euro:0, yuan: 0})
  const [loading, setLoading] = useState(true)

  return (
    <div className="products__aside">
      {loading? <LoadingSpinner /> : ''}
      <div className="aside__add__ad">
        {/* {finalRes} */}
        <a className="btn" onClick={() => router.push(`${path}/add`)}>Подать объявление</a>
        <p>Размещение за 5 минут:
          <br/>
          легко,быстро и выгодно!</p>
      </div>
      <div className="exchange_rate">
        <h4>Курсы валют</h4>
        <div className="exchange__item">
          <p>₽, Рубль</p>
          <span>{loading ? '...' : currency.rubl} ₸</span>
        </div>
        <div className="exchange__item">
          <p>$, Доллар</p>
          <span>{loading ? '...' : currency.dollar} ₸</span>
        </div>
        <div className="exchange__item">
          <p>€, Евро</p>
          <span>{loading ? '...' : currency.euro} ₸</span>
        </div>
        <div className="exchange__item">
          <p>¥, Юань</p>
          <span>{loading ? '...' : currency.yuan} ₸</span>
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