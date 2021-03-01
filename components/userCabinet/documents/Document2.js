import React, {useState} from 'react'
import cookie from 'js-cookie'
import {useDispatch} from 'react-redux'
import axios from 'axios'
const Document1 = ({license, fetchCurrentUser}) => {
  
  const [document, setDocument] = useState(null);
  const [loading,setLoading] = useState(false)

  
  const dispatch = useDispatch()

  const fileUpload = (doc) => {
    const url = `${process.env.BASE_URL}/updateLicense`;
    const formData = new FormData();
    formData.append('license', doc)
    formData.append('token', cookie.get('token'))
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post(url,formData,config)

  }

  const onChange = (e) => {
    e.preventDefault()
    setDocument(e.target.files[0])

   

  }

  const onUpdateDoc = (e) => {
      e.preventDefault()
      setLoading(true)
      fileUpload(document)
        .then(res => {
                setLoading(false)
                dispatch({type: 'SUCCESS_MESSAGE', payload: 'Успешно обновлен'})
                setDocument(null)
                fetchCurrentUser()
                
        })
  }
  
  return (
    <div class="cabinet__document__item">
      <div class="user__profile__title withMargins">
        <h3>Лицензия на транспортные или экспедиторские услуги</h3>
        <p>Прикрепите скан-копию документа, в формате .jpg, .png, .pdf</p>
    </div>
      {/* {document!== null ? <img src={URL.createObjectURL(document)} /> : null} */}
      {license ? <img  className='user_docs' src={`${process.env.DOC_URL}/images/company/${license}`} /> :
 
           <div className="fileUpload">
            <input type="file" className="upload" onChange={(e) =>onChange(e)}  accept="image/*" />
            <span className=''> <i class="fas fa-upload"></i>Загрузить документ</span>
            
          </div>}

      

          <div className={document === null ? "driver_modal edit_photo" : "driver_modal edit_photo active"}>
            <div className="driver_modal__inner ">
              <h2>Редактор фото</h2>
              <i className="fas fa-times driver_times" onClick={() =>setDocument(null)}/>
              <div className="edit_photo__img">
                {document !== null ? <img src={URL.createObjectURL(document)} alt/> : 'no photo'}
              </div>
              {loading ?    
                <button id="close_edit_photo" className="btn block inherit" disabled>Обновляется...</button>
                :
                <button type='submit' id="close_edit_photo" className="btn block inherit" onClick={(e) => onUpdateDoc(e)}>Загрузить фото</button>
              }
          
            </div>
          </div>

    
    </div>
  )
}

export default Document1