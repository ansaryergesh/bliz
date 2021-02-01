import React from 'react'

const PostAside = () => {
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
          <span>5.81 ₸</span>
        </div>
        <div className="exchange__item">
          <p>$, Доллар</p>
          <span>424.57 ₸</span>
        </div>
        <div className="exchange__item">
          <p>€, Евро</p>
          <span>460. 12 ₸</span>
        </div>
        <div className="exchange__item">
          <p>¥, Юань</p>
          <span>60. 24 ₸</span>
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

export default PostAside