import '../styles/globals.css'
import App,{ Container } from 'next/app';
import Navguest from '../components/shared/Navguest'
class MyApp extends App {
  render(){
    const { Component,pageProps} = this.props;
    return(
      <>
        <Navguest />
        <Component {...pageProps}/>
      </>
    )
  }
}

export default MyApp
