import React from 'react';


const ActiveChats = ({ myActiveChats, setCurrentChat }) => (
  
  <div className="messager__users__items">
     {/* <div className="messager__users__item active">
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
            </div> */}
    {/* {`${myActiveChats}`} */}
    {myActiveChats.map(chat => (
      
      <div className='messager__users__item active' onClick={() => setCurrentChat(chat)}>
        <div className="messager__users__item__content">
          <div className="messager__users__item__title">
            <h3>{chat}</h3>
            {/* <p>Эмилия, вы забыли добавить: Пути…</p> */}
          </div>
          <div className="messager__users__item__date">
            {/* <p>вчера</p> */}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ActiveChats;


