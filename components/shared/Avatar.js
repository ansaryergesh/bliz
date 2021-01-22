import React from 'react'
import {isImage} from '../../defaults/validation'
const Avatar = ({img, onChange, onSubmit, onClose, loading, onDelete, profileImg}) => {
  return (
    <>
    <div className="user__profile">
      <div className="user__profile__title">
        <h3>Фото контактного лица</h3>
        <p>Настоящее фото вызывает больше доверия к вашей компании</p>
      </div>
      <div className="user__profile__picture">
        <div className="user__profile__img">
          {isImage(profileImg) ? <img src='/img/noavatar.jpg' />: <img src={profileImg} />}
        </div>
        <form onSubmit={onSubmit}>
          <div className="fileUpload">
            <input type="file" className="upload" onChange={onChange} accept="image/*"/>
            <span>Изменить</span>
            
          </div>
          <div className={img === null ? "driver_modal edit_photo" : "driver_modal edit_photo active"}>
            <div className="driver_modal__inner ">
              <h2>Редактор фото</h2>
              <i className="fas fa-times driver_times" onClick={onClose}/>
              <div className="edit_photo__img">
                {img !== null ? <img src={URL.createObjectURL(img)} alt/> : 'no photo'}
              </div>
              {loading ?    
                <button id="close_edit_photo" className="btn block inherit" disabled>Обновляется...</button>
                :
                <button type='submit' id="close_edit_photo" className="btn block inherit">Изменить фото</button>
              }
          
            </div>
          </div>
        </form>
        <a className="btn btn--white" href="#" onClick={onDelete}><i className="far fa-trash-alt" /></a>
      </div>
    </div>
   
    </>
  )
}

export default Avatar;