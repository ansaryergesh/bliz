import React from 'react';
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import {company_type} from '../../defaults/defaults'
import {required, phoneValidation, validEmail, passwordCheck, birthDayVal} from '../../defaults/validation'
const PhoneMask = ({field, form, ...props}) => <InputMask
  mask="+7(999)-999-9999"
  maskChar=" "
  className="my-input"
  {...field}
  {...props}
/>;

const RegisterNatural = ({handleSubmit, isLoading, handleType}) => {
  return (
    <div>
        <Formik initialValues = {{
            company_type: 1,
            company_name: '',
            bin:'',
            fullName: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
        }}
        onSubmit={(values)=> {handleSubmit(values)}}>
            {({errors,touched}) => (
                <Form className='register_form'>
                  <div className="filter__item__form modal register">
                    <a id="register_type1"  href="#"  onClick={handleType}>Юр. лицо</a>
                    <a id="register_type2" className='active' href="#">Физ. лицо</a>
                  </div>
                 
                  <h3 id="register_title">Контакное лицо</h3>
                  <Field name='fullName' placeholder='ФИО'
                    className={(errors.fullName && touched.fullName)? 'is-invalid' : ''}
                    validate={required}/>
                  <Field name='email' placeholder='Эл. адрес'
                    className={(errors.email && touched.email)? 'is-invalid' : ''}
                    validate={validEmail}/>
                  <Field
                    name='phone' type='tel'
                    component={PhoneMask}
                    placeholder='Телефон'
                    className={(errors.phone && touched.phone? 'is-invalid': '')}
                    validate={phoneValidation}/>
                  <Field
                    name='password'
                    type='password'
                    placeholder='Пароль'
                    className={(errors.password && touched.password ? 'is-invalid': '')}
                    validate={passwordCheck}/>
                  <Field
                    name='password_confirmation'
                    type='password_confirmation'
                    placeholder='Пароль'
                    className={(errors.password_confirmation && touched.password_confirmation ? 'is-invalid': '')}/>

                  {isLoading===false ? 
                    <button className="btn  inherit" type="submit">Регистрировать</button> : 
                    <button className="btn  inherit"  disabled>Регистрируется...</button>}
                </Form>
      
            )}

        </Formik>
     
    </div>
  )
}

export default RegisterNatural;