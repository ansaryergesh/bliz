import '../styles/globals.css'
import 'font-awesome/css/font-awesome.css';
import App,{ Container } from 'next/app';
import Nav from '../components/shared/Nav'
import Footer from '../components/shared/Footer'

class MyApp extends App {
  render(){
    const { Component,pageProps} = this.props;
    return(
      <>
        <Nav />
        <Component {...pageProps}/>
        <Footer />
      </>
    )
  }
}

export default MyApp
