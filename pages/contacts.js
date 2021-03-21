import SideBarCurrency from "../components/post/SideBarCurrency"

const Contacts = () => {
  return (
    <div className="products__container container">
      <div className="products__content">
        <div className="products__title">
          <h4>
            <a href='/cabinet' className='/'>Главная</a> / <a href="#" className='gray_font'>Связаться с нами
            </a>
          </h4>
          <div className="products__text">
            <div className="products__text__item text-justify">
              <h1>Наши контакты<br></br><br></br>
              
              <p>Свяжитесь с нами, по любым интересующим Вас вопросам</p>
              </h1>
              <br></br>
              <h4 className='gray_font'>
                  Адрес
              </h4>
              <h5>Казахстан, г. Алматы ул. Кабанбай Батыра 10, БЦ «КБ-10», 3 этаж<br></br><br></br></h5>
              <h4 className='gray_font'>
                  Телефоны<br></br>
              </h4>
              <p>   <a href='tel: +77273553737'><b>+7 727 355 3737</b></a><br/>
                    <a href='tel: +77017051616'><b>+7 701 705 1616(тех поддержка)</b><br></br><br></br></a>
            </p>
            <h4 className='gray_font'>
                  Электронная почта
              </h4>
              <p>   <a href='mailto:hello@bliz.kz'>hello@bliz.kz<br></br></a>
            </p>

            <h4 className='gray_font'>
            <br></br> График работы:<br></br>
              </h4>
              <p>10:00 - 21:00 (Пн - Пт)<br></br>
служба поддержки - круглосуточно<br></br><br></br>
            </p>
          
            </div>
          </div>
        </div>
      </div>

      <SideBarCurrency/>
    </div>
  )
}

export default Contacts