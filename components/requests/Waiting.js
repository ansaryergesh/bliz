import { dateParse, parseDateTime } from "../../defaults/extraFunctions"
import cookie from 'js-cookie'
import swal from 'sweetalert'
const Waiting = (props) => {

  return (
    <div>
      <> <div className="cabinet__requests__title">
        <img src="assets/img/widgets/requset_type1.png" alt/>
        <div className="cabinet__requests__title__inner">
          <h3>Я исполнитель({props.count})</h3>
          <p>Заявки, которые испольняете вы для клиентов</p>
        </div>
      </div>
      <div className="cabinet__requests__wrapper">
        {props.data.map(d=>(
          <div className={d.status==='Ожидает' ? 'auction__product__container yellow' : 'auction__product__container gray'}>
              <div className="product__item">
            <div className="product__item__inner">
              <p>Отправлено:</p>
              <span>{parseDateTime(d.details[0].updated_at)}</span>
            </div>
            <div className="product__item__inner">
              <h2 className="average_title">{d.details[0].details[0].from_string}
                <i className="fas fa-arrow-right"/>
                {d.details[0].details[0].to_string}</h2>
              <span>{d.user[0].fullName}</span>
            </div>
            <div className="product__item__inner">
              <p>{d.details[0].details[0].net} тн, {d.details[0].details[0].volume} м³, {d.details[0].details[0].type_transport}
                <br/>
                {d.details ? dateParse(d.details[0].details[0].start_date) : ''}, {d.details[0].details[0].title}</p>
            </div>
            <div className="product__item__inner">
              <div className="product__item__inner__offer">
                <span className="yellow_span">{d.status}</span>
                <span className="average_span">ВАША ЦЕНА:</span>
                <h3>{d.price.price} ₸</h3>
              </div>
            </div>
          </div>
          <div className="auction__item cabinet_ad_item">
            <div className="cabinet_ad_auction_items">
              <a href="#" name={d.details[0].id} onClick={(e) => props.onCancelRequest(e)}><i className="fas fa-ban"/>Отменить предложение</a>
              <a title={`/cargo/${d.details[0].id}`} href={`/cargo/${d.details[0].id}`} target='__blank'><i className="far fa-file-alt"/>Подробнее</a>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="cabinet__requests__title">
        <img src="assets/img/widgets/requset_type2.png" alt/>
        <div className="cabinet__requests__title__inner">
          <h3>Я заказчик (2)</h3>
          <p>Заявки, которые испольняете вы для клиентов</p>
        </div>
      </div>
      <div className="cabinet__requests__wrapper">
        <div className="auction__product__container">
          <div className="product__item">
            <div className="product__item__inner">
              <p>Вам сделано:</p>
              <h2>2 предложения</h2>
            </div>
            <div className="product__item__inner">
              <h2>Нур-Султан
                <i className="fas fa-arrow-right"/>
                Алматы</h2>
              <h4>Перевозчик: не выбран</h4>
            </div>
            <div className="product__item__inner">
              <p>115 тн, 260 м³, Авто Тент
                <br/>
                14 июн, Хим. продукты, безопасные</p>
            </div>
            <div className="product__item__inner">
              <span className="yellow_span">2 ПРЕДЛОЖЕНИЯ</span>
            </div>
          </div>
          <div className="auction__item cabinet_ad_item">
            <div className="cabinet_ad_auction_items">
              <a className="blue big" href="cabinet-requests-item2.html">Смотреть предложения</a>
              <a href="cabinet-requests-item2.html"><i className="far fa-file-alt"/>Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </>
  </div>
  )
}

export default Waiting