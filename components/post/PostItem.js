import React from 'react'
import PostAside from './PostAside'
const PostItem = ({post, total, maxPage, currentPage, onChangePage, pathName}) => {

  const paginationBtns = [];

  for (let i = 0; i < maxPage; i++) {
    paginationBtns.push(
      <a
        onClick={() => onChangePage(i+1)}
        className={currentPage === i + 1
        ? 'active'
        : ''}
        disabled>{i + 1}</a>
    )
  }
  return (
      <div className="products__content">
        <div className="products__title">
          <h4>Главная / Грузоперевозки / {pathName === '/cargo' ? 'Грузы' : 'Транпорт'}</h4>
          <h1>{pathName==='/cargo' ? 'Грузоперевозки': 'Транспорт для грузоперевозок'} в Казахстане</h1>
          <h3>Найдено {total} объявлений</h3>

          <div class="products__items__wrapper">
            {post.map(p => (
              <div className="product__item">
                <div className="product__item__date">
                  <h4>29 апр – 7 мая</h4>
                  <p>изм: 3 мая 14:40</p>
                </div>
                <div className="product__item__title">
                  <a href="goods_nav1_item.html">{p.from}
                    — {p.to}
                    (РК)</a>
                  <p>~1 683 км, отходы стальные, растентовка</p>
                </div>
                <div className="product__item__title">
                  <h2>{p.sub_id} {p.title}</h2>
                </div>
                <div className="product__item__title">
                  <h2>{p.net}
                    тн / {p.volume}
                    м³</h2>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="product__items__list">
              {paginationBtns}
            </div>
            {/* Pagination end */}

            <div className="products__text">
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
      </div>
  )
}

export default PostItem;