import React from 'react';
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import {company_type} from '../../defaults/defaults'
import {required, phoneValidation, validEmail, passwordCheck, validateConfirmPassword} from '../../defaults/validation'
const PhoneMask = ({field, form, ...props}) => <InputMask
  mask="+7(999)-999-9999"
  maskChar=" "
  className="my-input"
  {...field}
  {...props}
/>;

const RegisterLegal = ({handleSubmit, isLoading, handleType}) => {
  return (
    <div>
        <Formik initialValues = {{
            companyType: 1,
            companyName: '',
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
                    <a id="register_type1" className='active' href="#">Юр. лицо</a>
                    <a id="register_type2" href="#" onClick={handleType}>Физ. лицо</a>
                  </div>
                  <div className='company__register'>
                    <div className='company__register__inner'>
                      <Field name='companyType' as='select'>
                      {company_type.map(type=> (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                      </Field>
                      <Field name='companyName' placeholder='Название компании' 
                      className={(errors.companyName && touched.companyName) ? 'is-invalid' : ''} 
                      validate={required}/>
                    </div>
                    <Field name='bin' type='number' placeholder='Налоговый номер компании/БИН'
                    className={(errors.bin && touched.bin)? 'is-invalid' : ''}/>
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
                    type='password'
                    // validate={(value) => validateConfirmPassword(values.password, value)}
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

export default RegisterLegal;