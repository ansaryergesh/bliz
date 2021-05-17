import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css';
import App from 'next/app';
import Nav from '../components/shared/Nav/Nav'
import cookie from 'js-cookie'
import {createWrapper} from "next-redux-wrapper";
import store from '../store/store'
import Footer from '../components/shared/Footer'
import LoadingSpinner from '../components/shared/others/LoadingSpinner'
import {connect} from 'react-redux'
// import {auth} from '../firebase'
import {useAuth} from '../custom-hooks/useAuth';
import {fetchCurrentUser} from '../store/actions/userAction'
import Head from "next/head";
import firebase from 'firebase'
import {saveToDatabase} from '../fbdatabase/database'
// import FirebaseLogin from '../components/firebaseComponents/FirebaseLogin';
import { config } from '../firebaseconfig';


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}




class MyApp extends App {
  
  componentDidMount() {
    // const [userId, users, connect] = useAuth();
   
    if(localStorage.getItem('lang')=== null) {
      localStorage.setItem('lang', 'ru')
    }
    const userToken = cookie.get('token')
    if(cookie.get('token')) {
      // console.log(auth.currentUser())
      // axios.get(`${process.env.BASE_URL}/getProfile?token=${userToken}`)
      // .then(response => {
      //     if(response.data.success) {
      //       this.props.fetchCurrentUser({type:'SET_CURRENT_USER', payload: response.data});
      //     }else {
      //       cookie.remove('token');
      //     }
          
      // })
      // .catch(err => {
      //   console.log(err)
      //   }
      // ) 
      
      this.props.fetchCurrentUser(connect)
    }
   

  }
  render(){
    <Head>
      <script dangerouslySetInnerHTML={{ __html: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAplKiP9AOLuUbWdH655ApFMl1nnfXwcwk&libraries=places` }} />
    </Head>
    const { Component,pageProps,store} = this.props;
    return(
      <>
      {/* {cookie.get('token') && this.props.authenticatingUser !== 'done' && <FirebaseLogin />} */}
      {(cookie.get('token') && this.props.authenticatingUser !== 'done') ? <LoadingSpinner /> :
       <> 
        <Nav />
        {/* <Firebase /> */}
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
