import React from 'react'
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer__block">
            <div className="footer__block-item">
              <p className="footer__block-title">Мобильные приложения</p>
              <div className="footer__block-icons">
                <div className="icons__content">
                  <a href="#"><img src="/img/footer/google.png" alt="google"/></a>
                </div>
                <div className="icons__content">
                  <a href="#"><img src="/img/footer/apple.png" alt="apple"/></a>
                </div>
              </div>
              <div className="footer__block-text">
                <p>Загрузите приложения Bliz.kz</p>
                <p>на свой смартфон IOS или Android</p>
              </div>
            </div>
            <div className="footer__block-item">
              <p className="footer__block-title">Объявление</p>
              <div className="footer__block-list">
                <div className="list__items">
                  <a href="/cargo">Грузоперевозки</a>
                  <a href="/cargo/transport" className="list__item">Транспорт</a>
                  <a href="/cargo/auction" className="list__item">Аукцион</a>
                </div>
                <div className="list__items">
                  <a href="/storage" className="list__item">Склады</a>
                  <a href="/equipment">Спецтехника</a>
                </div>
                <div className="list__items">
                  <a href="/cargo/distance">Расчет расстояний</a>
                  <a href="/cargo/check">Проверка компаний</a>
                </div>
              </div>
            </div>
            <div className="footer__block-item">
              <p className="footer__block-title">Контакты</p>
              <div className="footer__block-list">
                <div className="list__items">
                  <a href="/about" className="list__item">О сервисе</a>
                  <a href="/contacts">Связаться с нами</a>
                  <a href="#">Реклама на сайте</a>
                </div>
                <div className="footer__block-content">
                  <a href="tel:+77073734124">+7 (707)
                    <span className="blue__number">373 41 24</span>
                  </a>
                  <a href="tel:+77273956983">+7 (727)
                    <span className="blue__number">395 69 83</span>
                  </a>
                  <div className="footer__block-social-icons">
                    <a href="https://www.instagram.com/bliz.kz" target='__blank'><img src="/img/footer/Instagram.png" alt="instagram"/></a>
                    
                    <a href="https://www.facebook.com/Bliz.kz/" target='__blank'><img src="/img/social-icons/Instagram Copy.svg" alt="ok"/></a>
                    <a href="https://ok.ru/group/58514389663865" target='__blank'><img src="/img/social-icons/Combined Shape.svg" alt="facebook"/></a>
                    <a href="https://vk.com/blizkz" target='__blank'><img src="/img/footer/VK.png" alt="vk"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__block">
            <div className="footer__block-title footer__block-title--agreement">
              <a href="/Публичная оферта  BLIZ.pdf" target="_blank">Пользовательское соглашение</a>
              <a href="/Политика конфиденциальности.pdf" target="_blank">Политика конфиденциальности</a>
            </div>
            <div className="footer__block-title footer__block-title--trademark">
              <p>2020 © «Bliz.kz» является юридически зарегистрированной торговой маркой</p>
              <p>© Разработано<a href='https://dynamica.kz' target='_blank'> Dynamica</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer