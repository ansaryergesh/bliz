import React, {useState} from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import {useDispatch} from 'react-redux'
import swal from 'sweetalert'
import Router from 'next/router'
const UserDelete = () => {
  const [loading,setLoading] = useState(false)
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [focus, setFocus] = useState(false)
  const dispatch = useDispatch();


  const onCancel = () => {
    setPassword('')
    setFocus(false)
    setError('')
    setLoading(false)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    swal({
      title: 'Вы уверены удалить свой аккаунт',
      buttons: {
        catch:{
          text: "Да",
          value: 'yes'
        },
        cancel: 'Нет'
      }
    }).then(value=> {
      switch(value) {
        case 'yes':
          setLoading(true)
          axios.get(`${process.env.BASE_URL}/deleteAccount`, {params: {password: password, token: cookie.get('token')}})
            .then(res=> {
              if(res.data.success) {
                setLoading(false)
                dispatch({type: 'SUCCESS_MESSAGE', payload: 'Успешно удален'})
                Router.push('/register')
                cookie.remove('token')
              }else {
                setLoading(false)
                dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
              }
            })
      }
    })
  }
  
  
  return(
    <>
      <div className="user__profile border-none">
        <div className="user__profile__title">
          <h3>Введите текущий пароль</h3>
          <p>Для подтверждения удаления, введите Ваш текущий пароль</p>
        </div>
        <div className="change__password__wrapper">
          <p>Введите пароль</p>
          <input type="password" value={password} onFocus={() => setFocus(true)} className="password__input" onChange={(e) => onChangePassword(e)} />
        </div>
      </div>

      {focus? <div className="user__data__btns">
        {loading?  <span className='btn' disabled>Сохраняется...</span>:
          <span className="btn" onClick={() => handleSubmit()}>Сохранить ИЗМЕНЕНИЯ</span>
        }
        <span className="btn btn--white"  onClick={() => onCancel()}>ОТМЕНИТЬ</span>
      </div> : ''}
      
    </>
  )
}

export default UserDelete