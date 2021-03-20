import React from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import {Formik, Form, Field} from 'formik'
import InputMask from "react-input-mask"
import {connect} from 'react-redux'
import {userAuthentication} from '../store/actions/userAction'
const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

const PhoneMask = ({field, form, ...props}) => <InputMask
  mask="+7(999)-999-9999"
  maskChar=" "
  className="my-input"
  {...field}
  {...props}
/>;

const mapDispatchToProps = (dispatch) =>({
  userAuthentication: (url,values) => {dispatch(userAuthentication(url,values))},
})


class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: this.props.usersReducer.authenticatingUser,
      countries: []
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(values) {
    this.props.userAuthentication(`${process.env.BASE_URL}/login`, values)
  }

  render() {
    return(
      <>
        <div className="register">
          <div className="register__container">
            <h2>Войти в личный кабинет</h2>
            <p>Введите ваши данные для входа</p>
            <Formik initialValues={{
              phone: '',
              password: ''
            }} onSubmit={(values) => this.handleLogin(values)}>
              {({errors,touched}) => (
                <Form className='register_form'>
                  <Field
                    name='phone' type='tel'
                    component={PhoneMask}
                    placeholder='Телефон'
                  />
                  <Field name='password' type='password'
                  placeholder='Введите сюда' />
                  <button className="btn inherit" type="submit">Войти в аккаунт</button>
                </Form>
              )}

            </Formik>
        
            <p>Нет аккаунта? <a href="/register">Зарегистрируйтесь</a></p>
          </div>
        </div>
      </>
    )
  }  
}

export default (connect(mapStateToProps,mapDispatchToProps)(Login));