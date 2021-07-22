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
import $ from 'jquery'
import axios from 'axios';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}




class MyApp extends App {
  
  componentDidMount() {
      $(window).scroll(function (){
        if ($(this).scrollTop() > 120){
            $('.header__top').addClass('fixed');
        } else{
          $('.header__top').removeClass('fixed');
        } 
    });
    function showPosition(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      console.log(lat, lng)
      // var latlng = parseFloat(lat),parseFloat(lng);
      // 

      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${parseFloat(lat)},${parseFloat(lng)}&key=${process.env.GOOGLE_MAP_API_KEY}`)
        .then(res=> {
          console.log(res)
          let filter = res.data.results.filter(r=> r.types.includes("locality"))
          console.log(filter[0])
          if(cookie.get('place_id') !== filter[0].place_id || cookie.get('formatted_address') === undefined) {
            cookie.set('place_id', filter[0].place_id)
            cookie.set('formatted_address', filter[0].formatted_address)
          }
        })
      // var geocoder = new google.maps.Geocoder;

      // geocoder.geocode({'location': latlng}, function(results, status) {
      //   if (status === google.maps.GeocoderStatus.OK) {
      //     if (results[1]) {
      //       console.log(results);
      //     } else {
      //       window.alert('No results found');
      //     }
      //   } else {
      //     window.alert('Geocoder failed due to: ' + status);
      //   }
      // });
    }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      } else {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cookie.remove('place_id')
        cookie.remove('formatted_address')
        alert("Geolocation is not supported by this browser.");
      }
    

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
    
    if(userToken !== undefined) {
      axios.get(`${process.env.BASE_URL}/getBalance?token=${cookie.get('token')}`)
        .then(res=> {
          console.log(res.data.amount)
          cookie.set('balance', res.data.amount)
          // cookie.set('balance', res.data.amount)
        })
    }else {
      cookie.remove('balance')
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
