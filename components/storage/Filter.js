import React, { useState } from 'react';


const Filter = ({cityRegionRef, setMinArea, minArea, maxArea, setMaxArea, minPrice, setMinPrice, maxPrice, setMaxPrice}) => {
  // const cityRegionRef = useRef(null)
  // const [placeInfo,setPlaceInfo] = useState({placeId: '', placeName});
  return (
    <div className="main_filter">
      <div className="main_filter__content container">
        <div className="main_filter__top flex_end">
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Город, регион</h4>
              <div className="filter__item__form">
                <input ref={cityRegionRef} type='text' />
              </div>
            </div>
          </div>
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Площадь, м2</h4>
              <div className="filter__item__form">
                <input className="mini_input" value={minArea} onChange={(e) => setMinArea(e.target.value)} type="number" placeholder={100}/>
                <div className="hr"/>
                <input className="mini_input" type="number" value={maxArea} onChange={(e) => setMaxArea(e.target.value)} placeholder="1 200"/>
              </div>
            </div>
          </div>
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Цена, ₸ за м2</h4>
              <div className="filter__item__form">
                <input className="mini_input" value={minPrice} onChange={(e) => {setMinPrice}} type="number" placeholder="от"/>
                <div className="hr"/>
                <input className="mini_input" value={maxPrice} onChange={(e) => {setMaxPrice}} type="number" placeholder="до"/>
              </div>
            </div>
          </div>
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Класс</h4>
              <form className="filter__item__form">
                <select className="storage__city_filter">
                  <option>Все</option>
                </select>
              </form>
            </div>
          </div>
          <div className="main_filter__top__item">
            <div className="filter__item__form">
              <button>Сбросить</button>
              <select name id>
                <option value>Все фильтры</option>
              </select>
            </div>
          </div>
        </div>
        <div className="main_filter__bottom">
          <div className="main_filter__bottom__item">
            <p>Казахстан, Алматы</p>
            <i className="fas fa-times"/>
          </div>
          <div className="main_filter__bottom__item">
            <p>от 100 м2 до 1 200 м2</p>
            <i className="fas fa-times"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter;