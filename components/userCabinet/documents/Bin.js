import React, { useState } from 'react'
import cookie from 'js-cookie'
import axios from 'axios'
// import setCurrentUser from '../../../defaults/setCurrentUser'
import {useDispatch} from 'react-redux'
const Bin = ({bin, fetchCurrentUser}) => {
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [binVal,setBin] = useState(bin)
  // const [binUpladed, setBinUpload] = useState(false)
  const dispatch = useDispatch();

  const onChange = (e) => {
    setBin(e.target.value)
  }
  const onCancel = () => {
    setEdit(false)
    setLoading(false)
    fetchCurrentUser()
  
    // setBin(bin)
  }

  const onSubmit = () => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/updateBin`, {params: {token: cookie.get('token'), bin: binVal}})
      .then(response => {
        setLoading(false)
        if(response.data.success) {
          onCancel()
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Успешно обновлен BIN'})
          
          
        }else {
          dispatch({type: 'ERROR_MESSAGE', payload: 'Что то пошло не так'})
          onCancel()
        }
      })
  }

  return (
    <div className="user__profile">
      <div className="user__profile__title">
        <h3>Налоговый номер компании</h3>
        <p>Для резидентов РК БИН</p>
      </div>
      <div className="user__profile__picture">
       
       
        
        {edit ? 
        <>
          <input className='documents__input' type='number' value={binVal} onChange={(e) => onChange(e)}/>
          {loading?<button>Загрузка</button> : <button onClick={() => onSubmit()}>Сохранить</button>}
          <button onClick={() => onCancel()}>Отмена</button>
        </>
        :
        <>
         <input className='documents__input' value={binVal} disabled/>
         <button onClick={() => {setEdit(true)}} class="fa fa-pencil" aria-hidden="true">Изменить</button>
         </>
       }
        
      </div>
     
    </div>
  )
}

export default Bin;