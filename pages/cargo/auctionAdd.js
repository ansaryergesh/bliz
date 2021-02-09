import React from 'react'

const AuctionAdd = () => {
  return (
    <section className="post_ad__body">
      <div className="products__container container">
        <div className="products__content">
          <div className="products__title">
            <h4>Главная / Аукцион / Добавить обьявление</h4>
            <h1>Добавить аукцион</h1>
            <p className="post_ad__title">Укажите срок проведения аукциона, а также всю необходимую
              <br/>
              информацию по грузу и транспортировке.</p>
          </div>
          <form>
            <div className="post_ad__auction__date">
              <p className="post_ad__par">Дата и время окончания</p>
              <div className="post_ad__auction__date__wrapper">
                <div className="post_ad__auction__date__item">
                  <input className="post_ad__input" type="text" placeholder="28.04.2020"/>
                  <i className="far fa-calendar"/>
                </div>
                <div className="post_ad__auction__date__item">
                  <input className="post_ad__input" type="text" placeholder="12:00"/>
                  <i className="far fa-clock"/>
                </div>
              </div>
            </div>
            <div className="post_ad__adress">
              <h2 className="post_ad__section_title">Направление и дата</h2>
              <div className="post_ad__adress__wrapper">
                <div className="post_ad__adress__items">
                  <div className="post_ad__adress__item">
                    <p className="post_ad__par">Откуда</p>
                    <div className="post_ad__adress__item__input">
                      <input className="post_ad__input" type="text" placeholder="Алматы, Казахстан"/>
                      <i className="fas fa-map-marker-alt"/>
                    </div>
                  </div>
                  <div className="post_ad__adress__item">
                    <p className="post_ad__par">Куда</p>
                    <div className="post_ad__adress__item__input">
                      <input className="post_ad__input" type="text" placeholder="Шымкент, Казахстан"/>
                      <i className="fas fa-map-marker-alt"/>
                    </div>
                  </div>
                  <div className="post_ad__adress__select__wrappers">
                    <div className="post_ad__adress__item">
                      <p className="post_ad__par">Дата погрузки</p>
                      <div className="post_ad__adress__item__input">
                        <input className="post_ad__input" type="text" placeholder="28.04.2020"/>
                        <i className="far fa-calendar"/>
                      </div>
                    </div>
                    <div className="post_ad__adress__item">
                      <p className="post_ad__par">Дата выгрузки</p>
                      <div className="post_ad__adress__item__input">
                        <input className="post_ad__input" type="text" placeholder="28.04.2020"/>
                        <i className="far fa-calendar"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post_ad__adress__items">
                  <div className="post_ad__adress__item">
                    <p className="post_ad__par">Промежуточные точки</p>
                    <div className="post_ad__adress__item__input">
                      <input className="post_ad__input" type="text" placeholder="Выберите город…"/>
                      <i className="fas fa-map-marker-alt"/>
                    </div>
                    <button className="btn btn--white">ДОБАВИТЬ</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_ad__chars">
              <h2 className="post_ad__section_title">Характеристики груза</h2>
              <div className="post_ad__chars__wrapper">
                <div className="post_ad__chars__items">
                  <div className="post_ad__chars__item">
                    <p className="post_ad__par">Характер груза</p>
                    <input className="post_ad__input" type="text" placeholder="Овощи и фрукты"/>
                  </div>
                  <div className="post_ad__chars__items__inputs">
                    <div className="post_ad__chars__item">
                      <p className="post_ad__par">Вес груза, тн</p>
                      <input className="post_ad__input" type="text" placeholder="22 тн"/>
                    </div>
                    <div className="post_ad__chars__item">
                      <p className="post_ad__par">Объем груза, м³</p>
                      <input className="post_ad__input" type="text" placeholder="86 м³"/>
                    </div>
                  </div>
                </div>
                <div className="post_ad__chars__items">
                  <div className="post_ad__chars__items__selects">
                    <div className="post_ad__chars__item">
                      <p className="post_ad__par">Тип транспорта</p>
                      <select className="post_ad__input">
                        <option>ЖД Рефрижиратор</option>
                      </select>
                    </div>
                    <div className="post_ad__chars__item">
                      <p className="post_ad__par">Кол-во</p>
                      <select className="post_ad__input">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>
                  <div className="post_ad__chars__items__inputs__container">
                    <p className="post_ad__par">Размер груза, м</p>
                    <div className="post_ad__chars__items__inputs__wrapper">
                      <input className="post_ad__input" type="text" placeholder="Ширина, м"/>
                      <input className="post_ad__input" type="text" placeholder="Длина, м"/>
                      <input className="post_ad__input" type="text" placeholder="Высота, м"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_ad__price">
              <h2 className="post_ad__section_title">Стоимость перевозки</h2>
              <div className="post_ad__price__inputs">
                <div className="post_ad__price__item">
                  <p className="post_ad__par">Цена</p>
                  <input className="post_ad__input" type="text" placeholder="150 680"/>
                </div>
                <div className="post_ad__price__item">
                  <p className="post_ad__par">Валюта</p>
                  <select className="post_ad__input">
                    <option>Тенге, KZT</option>
                  </select>
                </div>
                <div className="post_ad__price__item">
                  <p className="post_ad__par">Способ оплаты</p>
                  <select className="post_ad__input">
                    <option>Безналичный</option>
                  </select>
                </div>
              </div>
              <div className="post_ad__price__checkbox">
                <input type="checkbox"/>
                <p className="post_ad__par">Цена договорная</p>
              </div>
              <div className="post_ad__price__checkbox__wrapper">
                <div className="post_ad__price__checkbox__items">
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox" defaultChecked/>
                    <p className="post_ad__par">НДС</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox" defaultChecked/>
                    <p className="post_ad__par">При погрузке</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox" defaultChecked/>
                    <p className="post_ad__par">На выгрузке</p>
                  </div>
                </div>
                <div className="post_ad__price__checkbox__items">
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox" defaultChecked/>
                    <p className="post_ad__par">Предоплата</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox" defaultChecked/>
                    <p className="post_ad__par">Запрос цены</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox" defaultChecked/>
                    <p className="post_ad__par">Торг</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_ad__aditional">
              <h2 className="post_ad__section_title">Дополнительная информация</h2>
              <p className="post_ad__aditional__title">Отметьте и добавьте дополнительную информацию</p>
              <div className="post_ad__aditional__text">
                <textarea rows={5} defaultValue={""}/>
              </div>
              <div className="post_ad__aditional__checkbox__wrapper">
                <div className="post_ad__aditional__checkbox__items">
                  <h3>Документы</h3>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">CMR</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">TIR</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">T1</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">T2</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">ADR</p>
                    <input className="post_ad__input" type="text" placeholder="Введите ADR"/>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">EKMT</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Санпаспорт</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Санкнижка</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Тамож. свидетельство</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Тамож. контроль</p>
                  </div>
                </div>
                <div className="post_ad__aditional__checkbox__items">
                  <h3>Погрузка</h3>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Задняя</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Боковая</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Верхняя</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Растентовка</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Обрешетка</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Пневмоход</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Гидроборт</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Штора</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Пирамида</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Пломба</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Сцепка</p>
                    <div className="post_ad__price__checkbox__inputs">
                      <input id="post_ad__input" className="post_ad__input" type="text"/>
                      <p>+</p>
                      <input id="post_ad__input" className="post_ad__input" type="text"/>
                    </div>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Любая</p>
                  </div>
                </div>
                <div className="post_ad__aditional__checkbox__items">
                  <h3>Условия
                  </h3>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Температура</p>
                    <input className="post_ad__input" type="text" placeholder="Температура"/>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Рога</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Ремни</p>
                    <input className="post_ad__input" type="text" placeholder="Температура"/>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Съемн. Стойки</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Жесткий борт</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Деревянный пол</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Jumbo</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Мега</p>
                  </div>
                  <h3 className="margin">Дополнительно</h3>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Без догруза (отдельный
                      <br/>
                      транспорт)</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Консолидация (сборный груз)</p>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Срочно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post_ad__about_company">
              <h2 className="post_ad__section_title">О компании</h2>
              <div className="post_ad__about_company__wrapper">
                <div className="post_ad__about_company__title">
                  <div className="post_ad__about_company__title__img">
                    <img src="/img/widgets/company_icon.png" alt/>
                  </div>
                  <div className="post_ad__about_company__title__name">
                    <h3>ТОО «ОУСА Альянс»</h3>
                    <p>Айсулу А.Л.</p>
                    <span>Экспедитор</span>
                  </div>
                </div>
                <div className="post_ad__about_company__contacts">
                  <i className="fas fa-phone-alt"/>
                  <div className="post_ad__about_company__contacts__content">
                    <a href="#">+7 702 360 70 20</a>
                    <a href="#">+7 727 360 70 30</a>
                  </div>
                </div>
                <div className="post_ad__about_company__contacts">
                  <i className="far fa-envelope"/>
                  <a href="#">aisulu@ousa-al.kz</a>
                </div>
              </div>
            </div>
            <div className="post_ad__btns">
              <button className="btn">Добавить объявление</button>
              <div className="post_ad__price__checkbox">
                <input type="checkbox"/>
                <p className="post_ad__par">Добавить объявление в топ</p>
              </div>
            </div>
          </form>
        </div>
        <div className="products__aside"></div>
      </div>
    </section>

  )
}

export default AuctionAdd