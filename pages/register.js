import React from 'react'
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import {gorods, type, user_type} from '../defaults/defaults'
import {Flash} from '../components/shared/FlashMessage'
import axios from 'axios';
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
      loading: false,
      message: {visibility: false,message:null, type:null},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleSubmit(values) {
    this.setState({loading: true})
    console.log(values)
    axios.post('https://test.money-men.kz/api/registration', values)
      .then((response) => {
       console.log(response)
       if(!response.data.success) {
        this.setState({loading:false, message: {visibility: true, message: response.data.message, type: 'error'}})
       }
       else {
        this.setState({loading: false, message: {visibility: true, message: 'Вы успешно зарегистрировались!', type: 'success'}})
        cookie.set('token',response.data.token)
       }
      
    }).catch((error) => {
      console.log(error)
      this.setState({loading: false, message: 'Ошибка'})
    });
  }

handleLogin(values) {
  this.setState({loading: true})
  console.log(values)
  axios.post('https://test.money-men.kz/api/login', values)
    .then((response) => {
      console.log(response)
      if(!response.data.success) {
      this.setState({loading:false, message: {visibility: true, message: response.data.message, type: 'error'}})
      }
      else {
      this.setState({loading: false, message: {visibility: true, message: 'Добро пожаловать!', type: 'success'}})
      cookie.set('token',response.data.token)
      }
    
  }).catch((error) => {
    console.log(error)
    this.setState({loading: false, message: 'Ошибка'})
  });
}
  render() {
    return (
      <div className="register">
        <Flash visibility={this.state.message.visibility} message={this.state.message.message} type={this.state.message.type} />
        <h2>Регистрация</h2>
        <Formik
          initialValues={{
          name: 'name',
          secondName: 'name',
          email: 'name@name.com',
          password: '123456',
          phone: '77082839998',
          birthDay: '02.07.1999',
          city: '1',
          address: 'address',
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
                autocomplete="off"
                validate={required}/>
              <Field
                name='secondName'
                placeholder='Фамилия'
                className={(errors.secondName && touched.secondName
                ? 'is-invalid'
                : '')}
                autocomplete="off"
                validate={required}/>
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
              <Field
                name='phone'
                type='tel'
                component={PhoneMask}
                placeholder='Телефон'
                className={(errors.phone && touched.phone
                ? 'is-invalid'
                : '')}
                validate={phoneValidation}/>
              <Field
                name='birthDay'
                placeholder='Дата рождения'
                />
                {/* component={birthDate}
                className={(errors.birthDay && touched.birthDay
                ? 'is-invalid'
                : '')} */}
              <Field
                name='city'
                as='select'
                validate={required}
                className={(errors.city && touched.city
                ? 'is-invalid'
                : '')}>
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

              <button className="btn" type="submit">Регистрировать</button>
            </Form>
          )}

        </Formik>

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
              <button className="btn" type="submit">Вход</button>
            </Form>
          )}
        </Formik>
      </div>

    )
  }
}

export default Register