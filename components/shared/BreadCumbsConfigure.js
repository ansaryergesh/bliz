import {useRouter} from 'next/router'
import React from 'react'
import {breadcumbs, getBreadCumpActive} from '../../defaults/breadcumbs'


const BreadCumbs = () => {
  const router = useRouter()
  if(router.pathname.includes('cabinet')) {
  return(
    <>
      <h4><a href='/cabinet' className=''>Личный кабинет</a>/<a href="#" className='gray_font'>{" " + getBreadCumpActive(breadcumbs,router.pathname)}</a></h4>
    </>
  )}
  if(router.pathname.includes('cargo')) {
    return(
      <>
      <h4><a href="/" className=''>Главная</a>{" " + "/" + " "}<a href='/cargo' >Грузоперевозки /</a><a href="#" className='gray_font'>{" " + getBreadCumpActive(breadcumbs,router.pathname)}</a></h4>
    </>
    )
  }
}

export default BreadCumbs;
