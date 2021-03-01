import SideBarCurrency from "../../components/post/SideBarCurrency"

const Equipment = () => {
  return (
    <div>
      <div className="main_filter">
        <div className="main_filter__content container">
          <div className="main_filter__top flex_end">
            <div className="main_filter__top__item">
              <div className="filter__item__title">
                <h4>Город, регион</h4>
                <div className="filter__item__form">
                  <select className="storage__city_filter">
                    <option>Казахстан, Алматы</option>
                    <option>Казахстан, Астана</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="main_filter__top__item">
              <div className="filter__item__title">
                <h4>Техника</h4>
                <form className="filter__item__form">
                  <select className="storage__city_filter">
                    <option>Эсковаторы-погрузчики</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="main_filter__top__item">
              <div className="filter__item__title">
                <h4>Цена, ₸ за час</h4>
                <div className="filter__item__form">
                  <input className="mini_input" type="text" placeholder="от"/>
                  <div className="hr"/>
                  <input className="mini_input" type="text" placeholder="до"/>
                </div>
              </div>
            </div>
            <div className="main_filter__top__item">
              <div className="filter__item__form">
                <button>Сбросить</button>
                <button type="button" className="big_filter_btn">Все фильтры</button>
              </div>
            </div>
          </div>
          {/* <form className="main_filter__big">
            <div className="main_filter__big__items">
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
            </div>
            <div className="main_filter__big__items">
              <div className="main_filter__big__item">
                <input type="text" placeholder="Дата выгрузки"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Вес"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Фильтр"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Фильтр"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Фильтр"/>
              </div>
            </div>
          </form> */}
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
      <div className="products__container container">
        <div className="products__content">
          <div className="products__title">
            <h4>Главная / Спецтехника / Землеройная техника / Эсковаторы-погрузчики</h4>
            <h1>Эсковаторы-погрузчики в Алматы</h1>
            <h3>Найдено 845 объявлений</h3>
          </div>
          <div className="products__items__wrapper">
            <div className="">
              {/* <div className="top_offers__img">
                <img src="/img/widgets/top_offers.png" alt/>
              </div> */}
              <div className="storage__item">
                <div className="storage__item__img">
                  <img src="/img/equipment/eskovator1.png" alt/>
                </div>
                <div className="storage__item__desc">
                  <div className="storage__item__title">
                    <a href="#">Экскаватор-погрузчик JCB</a>
                    <h3>8 000 ₸/час</h3>
                  </div>
                  <div className="storage__item__details">
                    <div className="table__row">
                      <div className="table__column__1">
                        <p className="goods__info__gray small">масса</p>
                        <div className="table__dash__bord"></div>
                      </div>
                      <div className="table__column__2 small">
                        <p>5 тн</p>
                      </div>
                    </div>
                    <div className="table__row">
                      <div className="table__column__1">
                        <p className="goods__info__gray small">мобильнсоть</p>
                        <div className="table__dash__bord"></div>
                      </div>
                      <div className="table__column__2 small">
                        <p>колесный</p>
                      </div>
                    </div>
                    <div className="table__row">
                      <div className="table__column__1">
                        <p className="goods__info__gray small">емкость ковша</p>
                        <div className="table__dash__bord"></div>
                      </div>
                      <div className="table__column__2 small">
                        <p>60 тн/м3</p>
                      </div>
                    </div>
                  </div>
                  <div className="storage__item__adress right_self">
                    <div className="storage__item__adress__item">
                      <p>АО «Тулпар Строй»</p>
                      <span>7 мая 12:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__items__list">
              <a className="active" href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">След
                <i className="fas fa-arrow-right"/></a>
            </div>
          </div>
          <div className="products__text">
            <div className="products__text__item">
              <h3>Аренда складов и складских помещений в Казахстане</h3>
              <p>Исходя из набора и качества этих параметров складу присваивается класс: A,
                B+, B или C. Стоит обратить внимание на склады B и C классов, где арендная
                ставка начинается с 2 000 тенге за кв. м. Чтобы снять склад в бизнес-центрах A
                или B+ класса, стоит заложить в бюджет от 3 500 до 20 000 тенге за кв. м.</p>
            </div>
            <div className="products__text__item">
              <h3>Ответхранение и склады в Алматы</h3>
              <p>С помощью профессиональной консалтинговой компании Bliz.kz можно найти склад
                в аренду в Алматы по выгодной цене без комиссии и посредников. Специалисты
                компании помогут подобрать помещение, учитывая пожелания и бюджет заказчика,
                организуют просмотр и подписание договора с собственником.</p>
            </div>
          </div>
        </div>
        
      <SideBarCurrency />
      </div>
    </div>

  )
}

export default Equipment;