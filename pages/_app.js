import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css';
import App,{ Container } from 'next/app';
import Nav from '../components/shared/Nav/Nav'
import { Provider } from 'react-redux'
import {createWrapper} from "next-redux-wrapper";
import store from '../store/store'
import Footer from '../components/shared/Footer'
import {connect} from 'react-redux'
import {fetchCurrentUser} from '../store/actions/userAction'

class MyApp extends App {
  render(){
    const { Component,pageProps} = this.props;
    return(
      <>
       <Provider store={store}>
        <Nav />
        <Component {...pageProps}/>
        <Footer />
       </Provider>
        
      </>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});

export default wrapper.withRedux(MyApp);
