import { parseDateTime } from "../../defaults/extraFunctions"

const RequestFromOther = (props) => {
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
                <p>Вам сделано:</p>
                <h2>{d.count} предложения</h2>
              </div>
              <div className="product__item__inner">
                <h2>{d.details[0].details[0].from_string}
                  <i className="fas fa-arrow-right"/>
                  {d.details[0].details[0].to_string}</h2>
                <h4>Перевозчик: не выбран</h4>
              </div>
              <div className="product__item__inner">
                <p>{d.details[0].details[0].net} тн, {d.details[0].details[0].volume} м³, {d.details[0].details[0].type_transport}
                  <br/>
                  {parseDateTime(d.details[0].updated_at)}, {d.details[0].details[0].title}</p>
              </div>
              <div className="product__item__inner">
                <span className="yellow_span">{d.count} ПРЕДЛОЖЕНИЯ</span>
              </div>
            </div>
            <div className="auction__item cabinet_ad_item">
              <div className="cabinet_ad_auction_items">
                <a className="blue big" href="cabinet-requests-item2.html">Смотреть предложения</a>
                <a href={`/cargo/${d.details[0].id}`}><i className="far fa-file-alt"/>Подробнее</a>
              </div>
            </div>
            </div>
          ))}
         
        </div>
        </>
    )
}

export default RequestFromOther