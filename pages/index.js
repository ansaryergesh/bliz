import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
export default function Home() {
  const dispatch = useDispatch()
  const [zvonok, setZvonok] = useState(false)
  const [fio, setFio] = useState('')
  const [phone,setPhone] = useState('')
  const onSubmit= (e) => {
    e.preventDefault()
    const message =`Заказ звонка:
      <b>Имя: ${fio}</b>
      <b>Телефон: ${phone}</b>
    `
    if(phone&& fio) {
      axios.get(`https://api.telegram.org/bot1763904279:AAG2ulxW1UwzpyAsecF0q8Q_7ebb934EZ30/sendMessage?chat_id=-440248730&text=Имя:${fio+"   \n"} Телефон: ${phone}&parse_mode=HTML`)
        .then(res=> {
          if(res.data.ok) {
            setZvonok(false)
            dispatch({type: 'SUCCESS_MESSAGE', payload: 'Ждите звонка'})
          }
        })
        .catch(err=>{console.log(err)})
    }else {
      console.log('error')
    }
  
   
  }
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
          <a className="btn" href="/cargo">НАЙТИ ГРУЗЫ И ТРАНСПОРТ</a>
          <a className="btn btn--white" href="/addposts">РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ</a>
        </div>
      </div>
      <div className="services container">
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service1.png"/>
          </div>
          <a href="/cargo">Грузы и транспорт</a>
          <p>Поиск исполнителей и клиентов
            <br/>
            грузовперевозок</p>
        </div>
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service2.png"/>
          </div>
          <a href="/storage">Складские помещения</a>
          <p>Подбор складов ответственного
            <br/>
            хранения по Казахстану</p>
        </div>
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service3.png"/>
          </div>
          <a href="/equipment">Спецтехника</a>
          <p>Техника для спецработ
            <br/>
            по любым напрвлениям</p>
        </div>
        <div className="service__item">
          <div className="service__item__img">
            <img src="/img/widgets/service4.png"/>
          </div>
          <a href="/cargo">Грузы и транспорт</a>
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
            <img src="/img/widgets/offer1.png"/>
          </div>
        </div>
      </div>
      <div className="offer2">
        <div className="offer2__img">
          <img src="/img/widgets/offer2.png"/>
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
            <img src="/img/widgets/offer3.png"/>
          </div>
        </div>
      </div>
      <> <div className="faq">
        <div className="faq__content container">
          <h2>Вопросы и ответы</h2>
          <h4>Здесь вы найдете ответы, на часто возникающие вопросы.</h4>
          <div className="faq__wrapper">
            <div className="accordion-container">
              <div className="set">
                <a href="#">
                  Как зарегистрироваться на сервисе?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna.</p>
                </div>
              </div>
              <div className="set">
                <a href="#">
                  Как добавить сотрудника?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>
                    Aliquam cursus vitae nulla non rhoncus. Nunc condimentum erat nec dictum tempus.
                    Suspendisse aliquam erat hendrerit vehicula vestibulum.</p>
                </div>
              </div>
              <div className="set">
                <a href="#">
                  Как добавить сотрудника?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>Pellentesque aliquam ligula libero, vitae imperdiet diam porta vitae. sed do
                    eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
              </div>
              <div className="set">
                <a href="#">
                  Как добавить сотрудника?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>
                    Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae
                    luctus odio pretium scelerisque. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nihil accusantium vitae ab sapiente provident quaerat
                    voluptates recusandae placeat minus maiores quasi totam error, tempore voluptas
                    non, architecto explicabo sequi sit!
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-container">
              <div className="set">
                <a href="#">
                  Как восстановить пароль?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna.</p>
                </div>
              </div>
              <div className="set">
                <a href="#">
                  Как стать платным пользователем?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>
                    Aliquam cursus vitae nulla non rhoncus. Nunc condimentum erat nec dictum tempus.
                    Suspendisse aliquam erat hendrerit vehicula vestibulum.</p>
                </div>
              </div>
              <div className="set">
                <a href="#">
                  Как стать платным пользователем?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>Pellentesque aliquam ligula libero, vitae imperdiet diam porta vitae. sed do
                    eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
              </div>
              <div className="set">
                <a href="#">
                  Как стать платным пользователем?
                  <i className="fas fa-angle-down"/>
                </a>
                <div className="content">
                  <p>
                    Donec tincidunt consectetur orci at dignissim. Proin auctor aliquam justo, vitae
                    luctus odio pretium scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="still_questions">
        <h2>Остались вопросы?</h2>
        <p>Оставьте заявку с вашими контактными данными,</p>
        <p>и наши менеджеры любезно проконсультируют вас</p>
        <p>по любым возникшим вопросам.</p>
        <a className="btn" href="#" onClick={() => setZvonok(true)}>ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</a>
      </div>
      <div className={zvonok === false ? "driver_modal edit_photo" : "driver_modal edit_photo active"}>
          <div className="driver_modal__inner ">
            <h2>Обратный звонок</h2>
            <i className="fas fa-times driver_times" onClick={() => setZvonok(false)}/>
            <form onSubmit={(e) => onSubmit(e)}>
              <input name='name' value={fio} onChange={(e) =>setFio(e.target.value)} placeholder='Имя'/>
              <input name='phone' value={phone} onChange={(e) =>setPhone(e.target.value)} placeholder='Телефон'/>
              <button>Отправить</button>
            </form>
          </div>
          </div>
    </>

  </div>
  )
}
