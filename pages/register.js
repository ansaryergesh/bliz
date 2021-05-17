import React from 'react'
import Router from 'next/router';
import axios from 'axios';
import RegisterLegal from '../components/auth/RegisterLegal'
import RegisterNatural from '../components/auth/RegisterNatural'
import {userAuthentication} from '../store/actions/userAction'
import cookie from 'js-cookie'
import { connect } from 'react-redux';
import firebase from '../firebase';


const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

const mapDispatchToProps = (dispatch) =>({
  userAuthentication: (url,values) => {dispatch(userAuthentication(url,values))},

})

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: this.props.usersReducer.authenticatingUser,
      countries: [],
      legal: true,
    };
    this.handleSubmitLegal = this.handleSubmitLegal.bind(this);
    this.handleSubmitNatural = this.handleSubmitNatural.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      if(cookie.get('token') && this.props.usersReducer.loggedIn) {
        Router.push('/')
      }
    },3000)
   
   
      axios.get(`${process.env.BASE_URL}/country`)
      .then(response=> {
        this.setState({countries:response.data})
      })

    
  }
  
  handleType() {
    this.setState({legal: !this.state.legal})
  }

  
  handleSubmitLegal(values) {
    this.props.userAuthentication(`${process.env.BASE_URL}/entityRegistration`, values)
  }

  handleSubmitNatural(values) {
    this.props.userAuthentication(`${process.env.BASE_URL}/registration`, values)
  }


  render() {
    
    return ( 
    <div className="register">
      <div className="register__container">
        <h2>Регистрация в сервисе</h2>
        <p>Введите ваши данные для начала регистрации</p>
        {this.state.legal ? <RegisterLegal handleType={this.handleType} isLoading={this.state.isLoading} handleSubmit={this.handleSubmitLegal}/> : 
          <RegisterNatural  handleType={this.handleType} isLoading={this.state.isLoading} handleSubmit={this.handleSubmitNatural}/>}
        <p>Уже есть аккаунт?
          <a href="/login">Воидите</a>
        </p>
      </div>
    </div>
    )
  }
}

// export default Register
export default (connect(mapStateToProps,mapDispatchToProps)(Register));