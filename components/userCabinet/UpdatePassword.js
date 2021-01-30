import React, {useState} from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import {useDispatch} from 'react-redux'
const UpdatePassword = () => {
  const [show, setPasswordSwitch] = useState(false);
  const [show2,setPasswordSwitch2] = useState(false);
  const [loading,setLoading] = useState(false)
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [focus, setFocus] = useState(false)
  const [passwordConfirm,setPasswordConfirm] = useState('')
  const dispatch = useDispatch();


  const onCancel = () => {
    setPasswordConfirm('');
    setPassword('')
    setFocus(false)
    setError('')
    setLoading(false)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangePasswordConf = (e) => {
    setPasswordConfirm(e.target.value)
  }
  const handleSubmit = () => {
    if(password==='' || passwordConfirm==='') {
      setError('Заполните все поля')
    }else if(password.length>5 && passwordConfirm !== password) {
      setError('Пароли не совпадают')
    }else if(password !== '' && password.length < 6) {
      setError('Пароль должен быть не менее 6 символов')
    }else {
      setError('')
      setLoading(true)
      axios.get('https://test.money-men.kz/api/changePassword', {params: {password: password, repeat: passwordConfirm,token: cookie.get('token')}})
        .then(res=> {
          if(res.data.success) {
            setLoading(false)
            dispatch({type:'SUCCESS_MESSAGE', payload: 'Пароль успешно обновлен'})
            onCancel()
          }
        })
    }
  }
  return(
    <>
      <div className="user__profile">
        <div className="user__profile__title">
          <h3>Введите новый пароль</h3>
          <p>Мы также вышлем ваш новый пароль SMS-сообщением</p>
         
        </div>
        <p className='blockError'>{error}</p>
        <div className="change__password__wrapper">
    
          <div className="user__data_form__item">
            <span>Введите новый пароль</span>
            <input onFocus={()=>setFocus(true)} onChange={(e)=> onChangePassword(e)} id="documents__input" type="password" value={password} />
            <i className="fas fa-eye-slash" />
          </div>
          <div className="user__data_form__item">
            <span>Повторите пароль</span>
            <input onFocus={()=>setFocus(true)} onChange={(e) => onChangePasswordConf(e)} id="documents__input" type="password" value={passwordConfirm} />
            <i className="fas fa-eye" />
          </div>
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

export default UpdatePassword