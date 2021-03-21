import React, {useState, useEffect, useRef} from 'react'
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import cookie from 'js-cookie'
import { phoneValidation, required } from '../../defaults/validation';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { user_type } from '../../defaults/defaults';
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
    initPlaceAPI();
    axios.get(`${process.env.BASE_URL}/country`)
      .then(res => {
        setCountries(res.data)
      })
  },[])

  

  const [countries, setCountries] = useState([])
  const [addressChange,setaddressChange] = useState(false)
  const [countryVal, setCountryVal] = useState(user.country_id || '0')
  const [shortCode, setShortCode] = useState('')
  const [address,setAddress] = useState({address_string: user.city_string || '', address_id: user.city ||  ''})
  const cityRef = useRef(null);
  // const countrisVal = ['kz', 'ru', '', 'kg', '']
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(cityRef.current,
      { types: ["(regions)"], componentRestrictions: { country: ['kz'] } });
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      console.log(place.place_id, place.formatted_address)
      setAddress({address_string: place.formatted_address, address_id: place.place_id})
    });


  };

  const changeCountry=(e) => {
    setCountryVal(e.target.value)
    setAddress({address_string: '', address_id: ''})
    const int = parseInt(e.target.value)
    let shortcode = countries.filter(c=> c.id === int)
    setShortCode(shortcode[0].short_code)
    console.log(shortcode[0].short_code)
  }

  // const getShortCode = () => {
  //   const int = parseInt(user.country_id);
  //   let shortcode = countries.filter(c=> c.id === int);
  //   return user.country_id ? shortcode.short_code : ''
  // }


  return (
    <>
      <div className="user__personal_data">
        <div className="user__profile__title">
          <h3>Персональные данные</h3>
          <p className='mb'>Личные данные администратора компании</p>
   
          {/* {shortCode} */}
        </div>
        <Formik initialValues={{
          fullName: user.fullName,
          city: user.city || '',
          address: user.address || '',
          email: user.email,
          phone: user.phone,
          country: user.country || 1,
          city: address.address_id || '',
          city_string: address.address_string || '',
          country_id: '',
          token: cookie.get('token'),
          
        }} onSubmit={(values) => {
          values.city = address.address_id
          values.city_string = address.address_string
          values.country_id = countryVal
          onSave(values)
          }} >
          {({errors,touched}) => (
            <Form className="user__data_form">
              <div className='user__data_form__item'>
                <span>ФИО</span>
                {edit ? <Field name='fullName' validate={required}/> : <Field name='fullName' disabled/>}
              </div>
              <div className='user__data_form__item'>
                <span>Страна</span>
                  {edit ?
                  <Field name='country' as='select' validate={required} value={countryVal} onChange={(e) => changeCountry(e)}>
                      <option  value='0'>Страна не выбрана</option>
                    {countries.map(country=> (
                      <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                  </Field> : 
                  <Field name='country' as='select' validate={required} placeholeder=''  disabled>
                  {countries.map(country=> (
                    <option key={country.id} value={country.id} >{country.name}</option>
                  ))}
                </Field>
                }
              </div>
          
              <div className='user__data_form__item'>
                <span>Город / Регион</span>
                <input type='text' value={user.city_string || 'Не указан адрес'} disabled className={addressChange ? 'd-none' : ''} />
                <input type="text" ref={cityRef} className={!addressChange? 'd-none': ''}/>
                {/* {!addressChange ? <input type='text' value="Алматы" onFocus={()=>setFocus(true)}/> : <input type="text" ref={cityRef} />} */}
               
              </div>
              <div className='user__data_form__item'>
              <span></span>

              <button  type='button' onClick={()=>{
                setaddressChange(!addressChange)
                
                }}>{addressChange ? 'Отмена' : 'Изменить'}</button>
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