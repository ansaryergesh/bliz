import { dateParse } from "../../defaults/extraFunctions"

const ExecutorWork = (props) => {
    return(
        <>
        <div className="cabinet__requests__title">
        <img src="/img/widgets/requset_type2.png" alt/>
        <div className="cabinet__requests__title__inner">
          <h3>Я заказчик ({props.count})</h3>
          <p>Заявки, которые испольняете вы для клиентов</p>
        </div>
      </div>
      <div className="cabinet__requests__wrapper">
        {props.data.map(d=> (
            <div className="auction__product__container">
          <div className="product__item">
            <div className="product__item__inner">
              <p>Осталось:
              </p>
              <h2>{d.status}</h2>
            </div>
            <div className="product__item__inner">
              <h2>{d.details[0].details[0].from_string}
                <i className="fas fa-arrow-right"/>
                {d.details[0].details[0].to_string}</h2>
              <h4>Перевозчик: {d.user[0].fullName}</h4>
            </div>
            <div className="product__item__inner">
              <p>{d.details[0].details[0].net} тн, {d.details[0].details[0].volume} м³, {d.details[0].details[0].type_transport}
                <br/>
                {d.details[0].details[0].start_date !== undefined ? dateParse(d.details[0].details[0].start_date) : ''}, {d.details[0].details[0].title}</p>
            </div>
            <div className="product__item__inner">
              <span className="blue_span">{d.status}</span>
              <h3>{d.price.price} ₸</h3>
              <span>без НДС</span>
            </div>
          </div>
          <div className="auction__item cabinet_ad_item">
            <div className="cabinet_ad_auction_items">
              <a className="blue" href="#"><i className="far fa-map"/>Указать адрес погрузки</a>
              <a href={`/cargo/${d.details[0].details[0].id}`}><i className="far fa-file-alt"/>Подробнее</a>
            </div>
          </div>
        </div>
        ))}
        
        {/* <div className="auction__product__container cabinet_ad_item green">
          <div className="product__item">
            <div className="product__item__inner">
              <p>Доставлено:
              </p>
              <h2>сегодня в 15:30</h2>
            </div>
            <div className="product__item__inner">
              <h2>Нур-Султан
                <i className="fas fa-arrow-right"/>
                Алматы</h2>
              <h4>Перевозчик: ТОО «RAILGO»</h4>
            </div>
            <div className="product__item__inner">
              <p>115 тн, 260 м³, Авто Тент
                <br/>
                14 июн, Хим. продукты, безопасные</p>
            </div>
            <div className="product__item__inner">
              <span className="blue_span">ДОСТАВЛЕН</span>
              <h3>165 000 ₸</h3>
              <span>без НДС</span>
            </div>
          </div>
          <div className="auction__item cabinet_ad_item">
            <div className="cabinet_ad_auction_items">
              <a className="green" href="#"><i className="far fa-check-circle"/>Завершить заявку</a>
              <a href="cabinet-requests-item2.html"><i className="far fa-file-alt"/>Подробнее</a>
            </div>
          </div>
        </div> */}
      </div>
      </>
    )
}

export default ExecutorWork;