
import React from 'react'
import {subCategories} from '../../defaults/defaults'
const Filter = ({onChangeCategory, activeCategory, queryFilter}) => {


  return (
    <div className="main_filter">
      <div className="main_filter__content container">
        <div className="main_filter__top">
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Транспорт</h4>
              <div className="filter__item__form">
                {subCategories.map(cat=> (
                  <a onClick={() => onChangeCategory(cat.name, cat.id)} key={cat.id} className={queryFilter === cat.name ? 'active' : ''}>{cat.name}</a>
                ))}
             
              </div>
            </div>
          </div>
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Направление</h4>
              <form className="filter__item__form">
                <input type="text" placeholder="Откуда"/>
                <div className="hr"/>
                <input type="text" placeholder="Куда"/>
                <button>Сбросить</button>
                <select name id>
                  <option value>Все фильтры</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="main_filter__bottom">
          <div className="main_filter__bottom__item">
            <p>Дата выгрузки: 7 мая</p>
            <i className="fas fa-times"/>
          </div>
          <div className="main_filter__bottom__item">
            <p>Вес: 80 тн – 200 тн</p>
            <i className="fas fa-times"/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Filter;