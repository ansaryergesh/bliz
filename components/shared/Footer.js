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
                  <a href="#">Грузоперевозки</a>
                  <a href="#" className="list__item">Транспорт</a>
                  <a href="#" className="list__item">Аукцион</a>
                </div>
                <div className="list__items">
                  <a href="#" className="list__item">Склады</a>
                  <a href="#">Спецтехника</a>
                </div>
                <div className="list__items">
                  <a href="#">Расчет расстояний</a>
                  <a href="#">Проверка компаний</a>
                </div>
              </div>
            </div>
            <div className="footer__block-item">
              <p className="footer__block-title">Контакты</p>
              <div className="footer__block-list">
                <div className="list__items">
                  <a href="#" className="list__item">О сервисе</a>
                  <a href="#">Связаться с нами</a>
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
                    <a href="https://www.instagram.com/bliz.kz"><img src="/img/footer/Instagram.png" alt="instagram"/></a>
                    <a href="#"><img src="/img/footer/Telegram.png" alt="telegram"/></a>
                    <a href="https://vk.com/blizkz"><img src="/img/footer/VK.png" alt="vk"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__block">
            <div className="footer__block-title footer__block-title--agreement">
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Политика конфиденциальности</a>
            </div>
            <div className="footer__block-title footer__block-title--trademark">
              <p>2020 © «Bliz.kz» является юридически зарегистрированной торговой маркой</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer