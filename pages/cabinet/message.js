import BreadCumbs from "../../components/shared/BreadCumbsConfigure"

const Message = () => {
  return (
    <div className="messager__container container">
      <div className="products__title">
        <BreadCumbs/>
        <h1 className="smaller_font">Мои сообщения</h1>
      </div>
      <div className="messager">
        <div className="messager__users">
          <div className="messager__users__header">
            <form className="messager__users__search">
              <input type="text" placeholder="Поиск по чатам"/>
              <i className="fas fa-search"/>
            </form>
          </div>
          <div className="messager__users__items">
            <div className="messager__users__item active">
              <div className="messager__users__item__picture">
                <div className="messager__users__item__img">
                  <img src="/img/widgets/message_user1.png" alt/>
                </div>
                <div className="messager__users__item__img__num">3</div>
              </div>
              <div className="messager__users__item__content">
                <div className="messager__users__item__title">
                  <h3>Ольга, ТОО «Logistics»</h3>
                  <p>Эмилия, вы забыли добавить: Пути…</p>
                </div>
                <div className="messager__users__item__date">
                  <p>вчера</p>
                </div>
              </div>
            </div>
            <div className="messager__users__item">
              <div className="messager__users__item__img">
                <img src="/img/widgets/message_user2.png" alt/>
              </div>
              <div className="messager__users__item__content">
                <div className="messager__users__item__title">
                  <h3>Даулет, ТОО «Курьерный»</h3>
                  <p>Саламалейкум! Могу ваш груз пере…</p>
                </div>
                <div className="messager__users__item__date">
                  <p>вчера</p>
                </div>
              </div>
            </div>
            <div className="messager__users__item">
              <div className="messager__users__item__img">
                <img src="/img/widgets/message_user3.png" alt/>
              </div>
              <div className="messager__users__item__content">
                <div className="messager__users__item__title">
                  <h3>Анель, «Сабыржан» ТОО</h3>
                  <p>Саламалейкум! Могу ваш груз пере…</p>
                </div>
                <div className="messager__users__item__date">
                  <p>вчера</p>
                </div>
              </div>
            </div>
            <div className="messager__users__item border-none">
              <div className="messager__users__item__img">
                <img src="/img/widgets/message_user4.png" alt/>
              </div>
              <div className="messager__users__item__content">
                <div className="messager__users__item__title">
                  <h3>Аскар А.В.</h3>
                  <p>Саламалейкум! Могу ваш груз пере…</p>
                </div>
                <div className="messager__users__item__date">
                  <p>вчера</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="messager__dialogue">
          <div className="messager__dialogue__header">
            <h2>Ольга, ТОО «Logistics»</h2>
            <p>была в сети 20 минут назад</p>
          </div>
          <div className="messager__dialogue__content">
            <div className="messager__dialogue__item">
              <div className="messager__dialogue__item__title">
                <span>Дана Боголовская</span>
                <span>10:34</span>
              </div>
              <div className="messager__dialogue__item__content">
                <p>Эмилия, вы забыли добавить водителей в наш обновленный ростер. Не забудьте,
                  дедлайн до четверта этой недели!</p>
              </div>
            </div>
            <div className="messager__dialogue__item mine">
              <div className="messager__dialogue__item__title">
                <span>Вы:</span>
                <span>10:35</span>
              </div>
              <div className="messager__dialogue__item__content">
                <p>Вы еще не отправили мне данные по ним.</p>
              </div>
            </div>
            <div className="messager__dialogue__item mine">
              <div className="messager__dialogue__item__title">
                <span>Вы:</span>
                <span>10:35</span>
              </div>
              <div className="messager__dialogue__item__content">
                <p>вот сюда отправьте: emiliya@gmail.com</p>
              </div>
            </div>
            <div className="messager__dialogue__item">
              <div className="messager__dialogue__item__title">
                <span>Дана Боголовская</span>
                <span>10:40</span>
              </div>
              <div className="messager__dialogue__item__content">
                <p>скинула, проверьте</p>
              </div>
            </div>
            <div className="messager__dialogue__item mine">
              <div className="messager__dialogue__item__title">
                <span>Вы:</span>
                <span>10:41</span>
              </div>
              <div className="messager__dialogue__item__content">
                <p>Получила, спасибо.</p>
              </div>
            </div>
            <div className="messager__dialogue__item">
              <div className="messager__dialogue__item__read"/>
              <div className="messager__dialogue__item__title">
                <span>Дана Боголовская</span>
                <span>10:42</span>
              </div>
              <div className="messager__dialogue__item__content">
                <p>Эмилия, вы забыли добавить: Путиенко Владимир. Исправьте.</p>
              </div>
            </div>
          </div>
          <div className="messager__dialogue__type">
            <form className="messager__dialogue__type__form">
              <input type="text" placeholder="Введите ваше сообщение…"/>
              <button className="btn small"><i className="fas fa-paper-plane"/>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;