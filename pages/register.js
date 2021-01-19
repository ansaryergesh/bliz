import React from 'react'
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import {gorods, type, user_type} from '../defaults/defaults'
import {Flash} from '../components/shared/FlashMessage'
import axios from 'axios';
import LoadingSpinner from '../components/shared/LoadingSpinner'
import https from 'http'
import cookie from 'js-cookie'
import {required, phoneValidation, validEmail, passwordCheck, birthDayVal} from '../defaults/validation'

const agent = new https.Agent({rejectUnauthorized: false});
const PhoneMask = ({field, form, ...props}) => <InputMask
  mask="+7(999)-999-9999"
  maskChar=" "
  className="my-input"
  {...field}
  {...props}
/>;
const birthDate = (props) => <InputMask mask="99.99.9999" className="my-input" {...props}/>;

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingReg: false,
      loadingLog: false,
      message: {visibility: false,message:null, type:null},
      countries: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    axios.get('https://test.money-men.kz/api/country')
      .then(response=> {
        this.setState({countries:response.data})
      })
  }
  
  handleSubmit(values) {
    this.setState({loadingReg: true})
    console.log(values)
    axios.post(`https://test.money-men.kz/api/registration`, values)
      .then((response) => {
       console.log(response)
       if(!response.data.success) {
        this.setState({loadingReg:false, message: {visibility: true, message: response.data.message, type: 'error'}})
       }
       else {
        this.setState({loadingReg: false, message: {visibility: true, message: 'Вы успешно зарегистрировались!', type: 'success'}})
        cookie.set('token',response.data.token)
       }
      
    }).catch((error) => {
      console.log(error)
      this.setState({loadingReg: false, message: 'Ошибка'})
    });
  }

handleLogin(values) {
  this.setState({loadingLog: true})
  console.log(values)
  axios.post('https://test.money-men.kz/api/login', values)
    .then((response) => {
      console.log(response)
      if(!response.data.success) {
      this.setState({loadingLog:false, message: {visibility: true, message: response.data.message, type: 'error'}})
      }
      else {
      this.setState({loadingLog: false, message: {visibility: true, message: 'Добро пожаловать!', type: 'success'}})
      cookie.set('token',response.data.token)
      }
    
  }).catch((error) => {
    console.log(error)
    this.setState({loadingLog: false, message: 'Ошибка'})
  });
}
  render() {
    return (
      <div className="register">
        
        <Flash visibility={this.state.message.visibility} message={this.state.message.message} type={this.state.message.type} />
        <h2>Регистрация</h2>
        <Formik
          initialValues={{
          name: '',
          secondName: '',
          email: '',
          password: '',
          phone: '',
          birthDay: '',
          country: 1,
          city: 1,
          address: '',
          type: 1,
          user_type: 1
        }}
          onSubmit={(values) => {this.handleSubmit(values)}}>
          {({errors, touched, isValidating, isSubmitting}) => (
            <Form className='register_form'>
              <Field
                name='name'
                placeholder='Имя'
                className={(errors.name && touched.name
                ? 'is-invalid'
                : '')}
                autoComplete="off"
                validate={required}/>
                 {(errors.name && touched.name)? <p className='error'>{errors.name}</p> : null}
              <Field
                name='secondName'
                placeholder='Фамилия'
                className={(errors.secondName && touched.secondName
                ? 'is-invalid'
                : '')}
                autoComplete="off"
                validate={required}/>
                 {(errors.secondName && touched.secondName)? <p className='error'>{errors.secondName}</p> : null}
              <Field
                name='email'
                placeholder='Электронная почта'
                className={(errors.email && touched.email
                ? 'is-invalid'
                : '')}
                validate={validEmail}/>
              <Field
                name='password'
                type='password'
                placeholder='Пароль'
                className={(errors.password && touched.password
                ? 'is-invalid'
                : '')}
                validate={passwordCheck}/>
                 {(errors.password && touched.password)? <p className='error'>{errors.password}</p> : null}
              <Field
                name='phone'
                type='tel'
                component={PhoneMask}
                placeholder='Телефон'
                className={(errors.phone && touched.phone
                ? 'is-invalid'
                : '')}
                validate={phoneValidation}/>
                {(errors.phone && touched.phone)? <p className='error'>{errors.phone}</p> : null}
                
              <Field
                name='birthDay'
                placeholder='Дата рождения'
                validate={required}
                // component={birthDate}
                className={(errors.birthDay && touched.birthDay
                ? 'is-invalid'
                : '')}
                />
                {(errors.birthDay && touched.birthDay) ? <p className='error'>{errors.birthDay}</p> : null}
              <Field
                name='country'
                as='select'
                validate={required}
                >
                <option value="" disabled selected className='disabled'>Страна</option>
                {this.state.countries.map(gorod => (
                  <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                ))}</Field>  
              <Field
                name='city'
                as='select'
                validate={required}
               >
                <option value="" disabled selected className='disabled'>Город</option>
                {gorods.map(gorod => (
                  <option key={gorod.id} value={gorod.id}>{gorod.name}</option>
                ))}</Field>
              <Field
                name='address'
                placeholder='Адрес'
                className={(errors.address && touched.address
                ? 'is-invalid'
                : '')}
                validate={required}/>
              <Field
                name='type'
                as='select'
                validate={required}
               >
                 <option value="" disabled selected className='disabled'>Тип</option>
                {type.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}</Field>
                <p className='error'>{errors.type}</p>
              <Field
                name='user_type'
                as='select'
                validate={required}
                className={(errors.user_type && touched.user_type
                ? 'is-invalid'
                : '')}>
                 <option value="" disabled selected className='disabled'>Тип2</option>
                {user_type.map(utype => (
                  <option key={utype.id} value={utype.id}>{utype.name}</option>
                ))}
              </Field>
              {this.state.loadingReg===false ? <button className="btn" type="submit">Регистрировать</button>: <button className="btn"  disabled>Регистрируется...</button>}
              
            </Form>
          )}

        </Formik>
        {this.state.loadingLog ||this.state.loadingReg ? <LoadingSpinner /> : null}
        <h2>Вход</h2>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values) => {this.handleLogin(values)}}
        >
          {({errors, touched, isValidating, isSubmitting}) => (
            <Form className='register_form'>
              <Field name='email' type='email' placeholder='Электронная почта'></Field>
              <Field name='password' type='password' placeholder='Пароль'></Field>
              {this.state.loadingLog===false ? <button className="btn" type="submit">Вход</button>: <button className="btn"  disabled>Загрузка...</button>}
            </Form>
          )}
        </Formik>
      </div>

    )
  }
}

export default Register