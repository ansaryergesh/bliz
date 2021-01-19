import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>BLIZ.KZ</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="under_header container">
        <h2>Сервис
          <span>грузоперевозок</span><br/>и
          <span>услуг в сфере логистики</span>
          <br/>
          по Казахстану и СНГ</h2>
        <p>Сервис логистики от А до Я по Казахстану. Поиск грузовладельцев
          <br/>
          и перевозчиков. База складов и спецтехники.
        </p>
        <div className="under_header__btns">
          <a className="btn" href="#">НАЙТИ ГРУЗЫ И ТРАНСПОРТ</a>
          <a className="btn btn--white" href="/post_add">РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ</a>
        </div>
      </div>
      <div className="services container">
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service1.png" />
          </div>
          <a href="goods-nav-2.html">Грузы и транспорт</a>
          <p>Поиск исполнителей и клиентов
            <br/>
            грузовперевозок</p>
        </div>
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service2.png" />
          </div>
          <a href="storage.html">Складские помещения</a>
          <p>Подбор складов ответственного
            <br/>
            хранения по Казахстану</p>
        </div>
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service3.png" />
          </div>
          <a href="equipment-nav-1.html">Спецтехника</a>
          <p>Техника для спецработ
            <br/>
            по любым напрвлениям</p>
        </div>
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service4.png" />
          </div>
          <a href="goods-nav-1.html">Грузы и транспорт</a>
          <p>Повышение квалификации
            <br/>
            для логистов и менеджеров продаж</p>
        </div>
      </div>
      <div className="benefits">
        <div className="benefits__wrapper container">
          <div className="benefit__item">
            <h2>5 000</h2>
            <p>актуальных объявлений</p>
          </div>
          <div className="benefit__item">
            <h2>570</h2>
            <p>компаний-партнеров</p>
          </div>
          <div className="benefit__item">
            <h2>220+</h2>
            <p>сделок заключается в день</p>
          </div>
        </div>
      </div>
      <div className="offer1">
        <div className="offer1__wrapper container">
          <div className="offer1__text">
            <h2>Транспортным
              <br/>
              компаниям</h2>
            <h4>Уникальные возможности для вас:</h4>
            <div className="offer1__item">
              <i className="far fa-check-circle"/>
              <p>Дополнительный поток грузовладельцев Возможность работы как с собственным,</p>
            </div>
            <div className="offer1__item">
              <i className="far fa-check-circle"/>
              <p>так и с привлеченным транспортом Для ваших логистов: ведение статистики,
                аналитики, и отчетности в личных</p>
            </div>
            <div className="offer1__item">
              <i className="far fa-check-circle"/>
              <p>кабинетах сайта Мгновенное SMS или e-mail уведомление клиента о сроках
                прибытия Вашего автомобиля на место</p>
            </div>
            <div className="offer1__item">
              <i className="far fa-check-circle"/>
              <p>разгрузки</p>
            </div>
            <div className="offer1__btns">
              <a className="btn" href="/register">ЗАРЕГИСТРИРОВАТЬСЯ</a>
              <a className="opacity_btn" href="#">Узнать подробнее</a>
            </div>
          </div>
          <div className="offer1__img">
            <img src="/img/widgets/offer1.png" alt/>
          </div>
        </div>
      </div>
      <div className="offer2">
        <div className="offer2__img">
          <img src="/img/widgets/offer2.png" alt/>
        </div>
        <div className="offer2__text">
          <h2>Частным
            <br/>
            перевозчикам</h2>
          <p>Мы предлагаем работать официально под эгидой «My Provider BLIZ.KZ».</p>
          <p>Для этого необходимо зарегистрироваться на сервис, подписать договор. После
            все оплаты за перевозку будут проходить через сервис BLIZ.</p>
          <div className="offer1__btns">
            <a className="btn" href="/register">ЗАРЕГИСТРИРОВАТЬСЯ</a>
            <a className="opacity_btn" href="#">Узнать подробнее</a>
          </div>
        </div>
      </div>
      <div className="offer1">
        <div className="offer1__wrapper container">
          <div className="offer1__text">
            <h2>Владельцам
              <br/>
              складских
              <br/>
              помещений</h2>
            <div className="offer1__item offer2__item">
              <p>Эффективно использовать сервис смогут и крупные логистические центры, которые
                предоставляют,
              </p>
              <p>складские помещения в аренду. С помощью раздела «Склад» компании могут
                подавать объявления, о наличии свободных складских помещений,</p>
              <p>а также оснащенностей склада.</p>
            </div>
            <div className="offer1__btns">
              <a className="btn" href="/register">ЗАРЕГИСТРИРОВАТЬСЯ</a>
              <a className="opacity_btn" href="#">Узнать подробнее</a>
            </div>
          </div>
          <div className="offer1__img">
            <img src="/img/widgets/offer3.png" alt/>
          </div>
        </div>
      </div>
    </div>
  )
}
