const Storage = () => {
    return (
        <>
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
            <h4>Площадь, м2</h4>
            <div className="filter__item__form">
              <input className="mini_input" type="text" placeholder={100} />
              <div className="hr" />
              <input className="mini_input" type="text" placeholder="1 200" />
            </div>
          </div>
        </div>
        <div className="main_filter__top__item">
          <div className="filter__item__title">
            <h4>Цена, ₸ за м2</h4>
            <div className="filter__item__form">
              <input className="mini_input" type="text" placeholder="от" />
              <div className="hr" />
              <input className="mini_input" type="text" placeholder="до" />
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
          <i className="fas fa-times" />
        </div>
        <div className="main_filter__bottom__item">
          <p>от 100 м2 до 1 200 м2</p>
          <i className="fas fa-times" />
        </div>
      </div>
    </div>
  </div>
  <div className="products__container container">
    <div className="products__content">
      <div className="products__title">
        <h4>Главная / Склады / Склады в Алматы</h4>
        <h1>Склады и складские помещения в Алматы</h1>
        <h3>Найдено 845 объявлений</h3>
      </div>
      <div className="products__items__wrapper">
        <div className="top_offers">
          <div className="top_offers__img">
            <img src="/img/widgets/top_offers.png" alt />
          </div>
          <div className="storage__item">
            <div className="storage__item__img">
              <img src="/img/storage/storage1.png" alt />
            </div>
            <div className="storage__item__desc">
              <div className="storage__item__title">
                <a href="storage__nav__item.html">Склад 800 м2, «ОУСА Альянс», Алматы</a>
                <h3>200 000 ₸/мес</h3>
              </div>
              <div className="storage__item__details">
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">площадь</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>640 м2</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">общ. площадь</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>45 000 м2</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">класс и тип</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>B+ / сухой (+14/+24)</p>
                  </div>
                </div>
              </div>
              <div className="storage__item__adress">
                <div className="storage__item__adress__item">
                  <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                  <a className="opacity_btn" href="#">показать на карте</a>
                </div>
                <div className="storage__item__adress__item">
                  <p>ТОО «ОУСА Альянс»</p>
                  <span>7 мая 12:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="storage__item">
            <div className="storage__item__img">
              <img src="/img/storage/storage2.png" alt />
            </div>
            <div className="storage__item__desc">
              <div className="storage__item__title">
                <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
                <h3>90 000 ₸/мес</h3>
              </div>
              <div className="storage__item__details">
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">площадь</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>640 м2</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">общ. площадь</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>45 000 м2</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">класс и тип</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>B+ / сухой (+14/+24)</p>
                  </div>
                </div>
              </div>
              <div className="storage__item__adress">
                <div className="storage__item__adress__item">
                  <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                  <a className="opacity_btn" href="#">показать на карте</a>
                </div>
                <div className="storage__item__adress__item">
                  <p>АО «Алпамыс»</p>
                  <span>7 мая 12:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="storage__item">
            <div className="storage__item__img">
              <img src="/img/storage/storage3.png" alt />
            </div>
            <div className="storage__item__desc">
              <div className="storage__item__title">
                <a href="storage__nav__item.html">Склад 800 м2, «ОУСА Альянс», Алматы</a>
                <h3>90 000 ₸/мес</h3>
              </div>
              <div className="storage__item__details">
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">площадь</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>640 м2</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">общ. площадь</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>45 000 м2</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">класс и тип</p>
                    <div className="table__dash__bord">
                    </div>
                  </div>
                  <div className="table__column__2 small">
                    <p>B+ / сухой (+14/+24)</p>
                  </div>
                </div>
              </div>
              <div className="storage__item__adress">
                <div className="storage__item__adress__item">
                  <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                  <a className="opacity_btn" href="#">показать на карте</a>
                </div>
                <div className="storage__item__adress__item">
                  <p>ТОО «ОУСА Альянс»</p>
                  <span>7 мая 12:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item">
          <div className="storage__item__img">
            <img src="/img/storage/storage4.png" alt />
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product__item__ad">
          <a href="#"><img src="/img/widgets/ad1.png" alt /></a> 
        </div>
        <div className="storage__item">
          <div className="storage__item__img">
            <img src="/img/storage/storage5.png" alt />
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item">
          <div className="storage__item__img">
            <img src="/img/storage/storage6.png" alt />
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item">
          <div className="storage__item__img">
            <img src="/img/storage/storage5.png" alt />
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item">
          <div className="storage__item__img">
            <img src="/img/storage/storage6.png" alt />
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord">
                  </div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
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
          <a href="#">След <i className="fas fa-arrow-right" /></a>
        </div>
      </div>
      <div className="products__text">
        <div className="products__text__item">
          <h3>Аренда складов и складских помещений в Казахстане</h3>
          <p>Исходя из набора и качества этих параметров складу присваивается класс: A, B+, B или C. Стоит обратить внимание на склады B и C классов, где арендная ставка начинается с 2 000 тенге за кв. м. Чтобы снять склад в бизнес-центрах A или B+ класса, стоит заложить в бюджет от 3 500 до 20 000 тенге за кв. м.</p>
        </div>
        <div className="products__text__item">
          <h3>Ответхранение и склады в Алматы</h3>
          <p>С помощью профессиональной консалтинговой компании Bliz.kz можно найти склад в аренду в Алматы по выгодной цене без комиссии и посредников. Специалисты компании помогут подобрать помещение, учитывая пожелания и бюджет заказчика, организуют просмотр и подписание договора с собственником.</p>
        </div>
      </div>
    </div>
    <div className="products__aside">
      <div className="aside__add__ad">
        <a className="btn" href="#">Подать объявление</a>
        <p>Размещение за 5 минут: <br /> легко,быстро и выгодно!</p>
      </div>
      <div className="aside__call">
        <div className="aside__call__content">
          <div className="aside__call__text">
            <h4>Калькулятор склада</h4>
            <p>Просчитайте, какого <br /> размера склад вам нужен.</p>
          </div>
          <img src="/img/widgets/aside_calc.png" alt />
        </div>
        <a className="btn btn--white open_calc_modal" href="#">Калькулятор склада</a>
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
        <a href="#"><img src="/img/widgets/ad2.png" alt /></a>
      </div>
      <div className="aside__call">
        <div className="aside__call__content">
          <div className="aside__call__text">
            <h4>Обратная связь</h4>
            <p>Возникли вопросы? <br /> Мы с радостью ответим.</p>
          </div>
          <img src="/img/widgets/aside_call.png" alt />
        </div>
        <a className="btn btn--white" href="#">СВЯЗАТЬСЯ С НАМИ</a>
      </div>
      <div className="aside__ad">
        <a href="#"><img src="/img/widgets/ad3.png" alt /></a>
      </div>
    </div>
  </div></>

    )
}

export default Storage;