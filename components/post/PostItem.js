import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PaginationBtns from '../pagination/PaginationBtns'
import { dateParse, parseDateTime } from '../../defaults/extraFunctions';
const PostItem = ({post, total, maxPage, currentPage, onChangePage, pathName, loading}) => {
 
  return (
      <div className="products__content">
        <div className="products__title">
          <h4>Главная / Грузоперевозки / {pathName === '/cargo' ? 'Грузы' : 'Транпорт'}</h4>
          <h1>{pathName==='/cargo' ? 'Грузоперевозки': 'Транспорт для грузоперевозок'} в Казахстане</h1>
          <h3>Найдено {total} объявлений</h3>

          <div class="products__items__wrapper">
            {loading ? <div>Загрузка....</div> : 
              <div>
                   {post.map((p) => (
              
              <div className="product__item">
                <div className="product__item__date">
                {p.details ? dateParse(p.details[0].start_date) + '-' + dateParse(p.details[0].end_date) : 'Загрузка...'}
                  <p>{parseDateTime(p.updated_at)} </p>
                </div>
                <div className="product__item__title">
                  <a href={`cargo/${p.id}`}>{p.details ? p.details[0].from_string : 'Загрузка...'}
                    — {p.details ? p.details[0].to_string : 'Загрузка...'}
                    </a>
                  <p>~{p.details ? p.details[0].distance : '...'} км, отходы стальные, растентовка</p>
                </div>
                <div className="product__item__title">
                  <h2>{p.sub_id} {p.title}</h2>
                </div>
                <div className="product__item__title">
                  <h2>{p.details ? p.details[0].net : '...'}
                    тн / {p.details ? p.details[0].volume : '...'}
                    м³</h2>
                </div>
              </div>
            ))}
              </div>}
         
            {/* <div className="product__items__list">
              {paginationBtns}
            </div> */}
            <PaginationBtns max_page={maxPage} current_page={currentPage} onChangePage={onChangePage} />
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