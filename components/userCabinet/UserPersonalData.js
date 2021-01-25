import React from 'react'
import {Formik, Form, Field} from 'formik';

const UserPersonalData = ({user, edit, onEdit, onSave}) => {
  return (
    <>
      <div className="user__personal_data">
        <div className="user__profile__title">
          <h3>Персональные данные</h3>
          <p>Личные данные администратора компании</p>
          {edit ?
            <div className="fileUpload">
              <span onClick={onEdit}>Отменить</span>
            </div> :
            <div className="fileUpload">
              <span onClick={onEdit}>Редактировать</span>
            </div>}
        
        </div>
        <form className="user__data_form">
          <div className="user__data_form__item">
            <span>Фамилия</span>
            {edit ? <input type="text" placeholder="" value={user.secondName}/> : 
              <input type="text" placeholder="" disabled value={user.secondName}/>
            }
          </div>
          <div className="user__data_form__item">
            <span>Имя</span>
            {edit ?  <input type="text" placeholder="Руслан" value={user.name} /> :  
              <input type="text" placeholder="Руслан" disabled value={user.name} />
            }
           
          </div>
          <div className="user__data_form__item">
            <span>Отчество</span>
            {edit ?  <input type="text" placeholder="Владимирович" value={user.middleName} /> :  
              <input type="text" placeholder="Руслан" disabled value={user.middleName} />
            }
            {/* <input type="text" placeholder="Владимирович" /> */}
          </div>
          <div className="user__data_form__item">
            <span>Дата рождения</span>
            {edit ?  <input type="date" placeholder="Владимирович" value={user.birthDay} /> :  
              <input type="text" placeholder="Руслан" disabled value={user.birthDay} />
            }
          </div>
          <div className="user__data_form__item">
            <span>Страна</span>
            {edit ? 
              <select >
                <option>Казахстан</option>
              </select> :  
              <select disabled>
                <option>Казахстан</option>
              </select>}
          </div>
          <div className="user__data_form__item">
            <span>Город</span>
            {edit ?
              <select>
                <option>Алматы</option>
                <option>Астана</option>
              </select> :
              <select disabled>
                <option>Алматы</option>
                <option>Астана</option>
              </select>
            }
            
          </div>
          <div className="user__data_form__item">
            <span>Адрес</span>
            {edit ?  <input type="text" placeholder="Владимирович" value={user.middleName} /> :  
              <input type="text" placeholder="Руслан" disabled value={user.middleName} />
            }
          </div>
        </form>
      </div>
      <div className="user__personal_data">
        <div className="user__profile__title">
          <h3>Контактные данные</h3>
          <p>Контактные данные администратора страницы</p>
        </div>
        <form className="user_contact_form">
          <div className="user__data_form__item">
            <span>Эл. почта</span>
            {edit ?  <input type="text" placeholder="Владимирович" value={user.email} /> :  
              <input type="text" placeholder="Руслан" disabled value={user.email} />
            }
          </div>
          <div className="user__data_form__item">
            <span>Телефон</span>
            <div className="user__data_form__item__inner">
            {edit ?  <input type="text" placeholder="Владимирович" value={user.phone} /> :  
              <input type="text" placeholder="Руслан" disabled value={user.phone} />
            }
              {/* <a className="btn btn--white small" href="#"><i className="far fa-edit" /></a> */}
            </div>
          </div>
          <div className="user__data_form__item center">
            <a className="btn btn--white" href="#">ДОБАВИТЬ ТЕЛЕФОН</a>
          </div>
        </form>
      </div>
      {edit ?
        <div className="user__data__btns">
          <span className="btn" href="#">Сохранить ИЗМЕНЕНИЯ</span>
          <span className="btn btn--white" href="#" onClick={onEdit}>ОТМЕНИТЬ</span>
        </div>: 
        null 
      }
      
    </>
  )
}

export default UserPersonalData;