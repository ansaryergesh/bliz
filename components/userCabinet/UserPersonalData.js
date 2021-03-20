import React, {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import cookie from 'js-cookie'
import { phoneValidation, required } from '../../defaults/validation';
import axios from 'axios';
import {useDispatch} from 'react-redux'
const PhoneMask = ({field, form, ...props}) => <InputMask
  mask="+7(999)-999-9999"
  maskChar=" "
  className="my-input"
  {...field}
  {...props}
/>;

const UserPersonalData = ({user, edit, onEdit, onSave}) => {
  const dispatch = useDispatch()
   useEffect(() => {
    axios.get(`${process.env.BASE_URL}/country`)
      .then(res => {
        setCountries(res.data)
      })
  },[])

  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  
  const onChooseCountry = (id) => {
    axios.get(`${process.env.BASE_URL}/city?countryID=${id}`)
      .then(res => {
        setCities(res.data)
      })
  }
  
  return (
    <>
      <div className="user__personal_data">
        <div className="user__profile__title">
          <h3>Персональные данные</h3>
          <p className='mb'>Личные данные администратора компании</p>
   
        
        </div>
        <Formik initialValues={{
          fullName: user.fullName,
          city: user.city || '',
          address: user.address || '',
          email: user.email,
          phone: user.phone,
          country: user.country || 1,
          city_id: 1,
          token: cookie.get('token'),
        }} onSubmit={(values) => onSave(values)} >
          {({errors,touched}) => (
            <Form className="user__data_form">
              <div className='user__data_form__item'>
                <span>ФИО</span>
                {edit ? <Field name='fullName' validate={required}/> : <Field name='fullName' disabled/>}
              </div>
              <div className='user__data_form__item'>
                <span>Страна</span>
                {edit ?
                
                  <Field name='country' as='select' validate={required}  onChange={() => onChooseCountry(country.id)}>
                    {countries.map(country=> (
                      <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                  </Field> : 
                  <Field name='country' as='select' validate={required}  disabled>
                  {countries.map(country=> (
                    <option key={country.id} value={country.id} >{country.name}</option>
                  ))}
                </Field>
                }
              </div>
              <div className='user__data_form__item'>
                <span>Страна</span>
                {edit ?
                  <Field name='country' as='select' validate={required}>
                    {cities.map(country=> (
                      <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                  </Field> : 
                  <Field name='country' disabled/>
                }
              </div>
              <div className='user__data_form__item'>
                <span>Адрес</span>
                {edit ? <Field name='address' /> : <Field name='address' disabled/>}
              </div>


              <div className="user__personal_data">
                <div className="user__profile__title">
                  <h3>Контактные данные</h3>
                  <p>Контактные данные администратора страницы</p>
                </div>
              </div>

              <div className='user__data_form__item'>
                <span>Эл. почта</span>
                {edit ? <Field name='email' /> : <Field name='email' disabled/>}
              </div>

              <div className='user__data_form__item'>
                <span>Телефон</span>
                {edit ? <Field name='phone' type='tel' validate={phoneValidation} component={PhoneMask} /> : 
                
                <Field name='phone' type='tel' component={PhoneMask} disabled/>}
              </div>
              <div className="user__data_form__item center">
                {/* <a className="btn btn--white" href="#">ДОБАВИТЬ ТЕЛЕФОН</a> */}
              </div>
              
              {edit ?
                <div className="user__data__btns">
                  <button className="btn" href="#" type='submit'>Сохранить ИЗМЕНЕНИЯ</button>
                  <span className="btn btn--white" href="#" onClick={()=>location.reload()}>ОТМЕНИТЬ</span>
                </div>: 
                null 
              }
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default UserPersonalData;