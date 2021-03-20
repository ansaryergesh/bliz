import {useRouter} from 'next/router'
import React from 'react'
import {breadcumbs, getBreadCumpActive} from '../../defaults/breadcumbs'


const BreadCumbs = () => {
  const router = useRouter()
  return(
    <>
      <h4><a href='/cabinet' className=''>Личный кабинет</a>{"/" + " "}<a href='/cabinet' className=''>Настройка</a>{" "+"/"}<a href={router.pathname} className='gray_font'>{" " + getBreadCumpActive(breadcumbs,router.pathname)}</a></h4>
    </>
  )

}

export default BreadCumbs;
