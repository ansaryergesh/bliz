import { dateParse2 } from "../../defaults/extraFunctions";
import PaginationBtns from '../pagination/PaginationBtns'
import Timer from "./Timer";
const AuctionItem = ({
  total,
  auctions,
  maxPage,
  currentPage,
  onChangePage,
  loading,
  onParticipate,
}) => {
  return (
    <div>
      <div className="products__content">
        <div className="products__title">
          <h4>Главная / Грузоперевозки / Аукцион</h4>
          <h1>Аукцион грузов в Казахстане</h1>
          <h3>Найдено {total} объявлений</h3>
        </div>
        <div className="products__items__wrapper">
          {loading ? <div>Загрузка...</div> : 
            <div>
              {auctions.map((auction) => (
                //   <p>{auction.details ? dateParse2(auction.details[0].date_start) : ''}</p>
                   <div className="auction__product__container">
                   <div className="product__item">
                     <div className="product__item__date">
                       <h4>{auction.details ? dateParse2(auction.details[0].date_start) + "-" + dateParse2(auction.details[0].date_end) : ''}</h4>
                       <p>{auction.details ? dateParse2(auction.updated_at) : ''}</p>
                     </div>
                     <div className="product__item__title">
                       <a href="goods_nav1_item2.html">{auction.details ? auction.details[0].from_string : ''} — {auction.details ? auction.details[0].to_string : ''}</a>
                       <p>~{auction.details ? auction.details[0].distance : ''}, отходы стальные, растентовка</p>
                     </div>
                     <div className="product__item__title">
                       <h2>Ж/Д Рефрижератор</h2>
                     </div>
                     <div className="product__item__title">
                       <h2>20 тн / 80 м³</h2>
                     </div>
                   </div>
                   <div className="auction__item">
                     <div className="auction__item__date">
                       <i className="far fa-clock"/>
                       <div className="auction__item__date__text">
                         <p>Закончиться через:</p>
                         <h2>{auction.details ? <Timer date_finish={auction.details[0].date_finish} /> : ''}</h2>
                       </div>
                     </div>
                     <div className="auction__item__users">
                       <img src="/img/widgets/auction_user.png" alt/>
                       <div className="auction__item__users__text">
                         <p>Участников:</p>
                         <h2 className={auction.price_details && auction.price_details.length>0 ? ''  : 'gray_font'}>{auction.price_details && auction.price_details.length>0 ? auction.price_details[0].count + 'участника': '0 участника'}</h2>
                       </div>
                     </div>
                     <div className="auction__item__price">
                       <img src="/img/widgets/tenge.png" alt/>
                       <div className="auction__item__price__text">
                         <p>Ставка (макс/текущ)</p>
                         <h3 className={auction.price_details && auction.price_details.length>0 ? ''  : 'gray_font'}>{auction.price_details && auction.price_details.length>0 ? auction.price_details[0].price + auction.price_details[0].currency: 'не указано'}</h3>
                       </div>
                     </div>
                     <a className="btn" onClick={()=>onParticipate(auction.id)}>участвовать</a>
                   </div>
                 </div>
              ))}
            </div>
          }
          
         
        
          <PaginationBtns max_page={maxPage} current_page={currentPage} onChangePage={onChangePage} />
        </div>
        <div className="products__text normal_margin">
          <div className="products__text__item">
            <h3>Грузоперевозки в Казахстане и в Алматы</h3>
            <p>Исходя из набора и качества этих параметров складу присваивается класс: A,
              B+, B или C. Стоит обратить внимание на склады B и C классов, где арендная
              ставка начинается с 2 000 тенге за кв. м. Чтобы снять склад в бизнес-центрах A
              или B+ класса, стоит заложить в бюджет от 3 500 до 20 000 тенге за кв. м.</p>
          </div>
          <div className="products__text__item">
            <h3>Перевезти груз по Казахстану</h3>
            <p>С помощью профессиональной консалтинговой компании Bliz.kz можно найти склад
              в аренду в Алматы по выгодной цене без комиссии и посредников. Специалисты
              компании помогут подобрать помещение, учитывая пожелания и бюджет заказчика,
              организуют просмотр и подписание договора с собственником.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AuctionItem;