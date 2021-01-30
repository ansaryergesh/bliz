import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css';
import App,{ Container } from 'next/app';
import Nav from '../components/shared/Nav/Nav'
import cookie from 'js-cookie'
import {createWrapper} from "next-redux-wrapper";
import { Provider } from 'react-redux'
import store from '../store/store'
import Footer from '../components/shared/Footer'
import LoadingSpinner from '../components/shared/others/LoadingSpinner'
import {connect} from 'react-redux'
import {fetchCurrentUser} from '../store/actions/userAction'
import axios from 'axios';

class MyApp extends App {
  componentDidMount() {
    if(localStorage.getItem('lang')=== null) {
      localStorage.setItem('lang', 'ru')
    }
    const userToken = cookie.get('token')
    if(cookie.get('token')) {
      axios.get(`https://test.money-men.kz/api/getProfile?token=${userToken}`)
      .then(response => {
          if(response.data.success) {
            this.props.fetchCurrentUser({type:'SET_CURRENT_USER', payload: response.data});
          }else {
            cookie.remove('token');
          }
          
      })
      .catch(err => {
        console.log(err)
        }
      ) 
    }
   

  }
  render(){
    const { Component,pageProps,store} = this.props;
    return(
      <>
      {(cookie.get('token') && this.props.authenticatingUser !== 'done') ? <LoadingSpinner /> :
       <> 
        <Nav />
        <Component {...pageProps}/>
        <Footer />
       </>
      }
       
      </>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = state => ({
  loggedIn: state.usersReducer.loggedIn,
  authenticatingUser: state.usersReducer.authenticatingUser
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});
MyApp = connect(mapStateToProps,mapDispatchToProps)(MyApp)

export default wrapper.withRedux(MyApp);
