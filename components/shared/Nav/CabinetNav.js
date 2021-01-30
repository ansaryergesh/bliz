import React from 'react'
import { useRouter } from "next/router";

const  CabinetNav = ({bin, activeLink}) => {
  const router = useRouter();
  return(
    <div className="goods__nav config active">
      <div className="goods__nav__links container">
        <a className={activeLink==='index'? 'active': ''} href="/cabinet">Личная информация</a>
        {bin? <a href="/cabinet/documents" className={activeLink==='documents' ? 'active' :''}>Документы</a> : ''}
        {bin? <a href="/cabinet/companyProfile" className={activeLink==='companyProfile'? 'active': ''}>Профиль компании</a> : ''}
        <a href="/cabinet/password" className={activeLink==='password'? 'active': ''}>Изменить пароль</a>
        <a href="/cabinet/notification">Уведомления</a>
        <a href="/cabinet/delete" className={activeLink==='delete' ? 'active' : ''}>Удалить аккаунт</a>
      </div>
    </div>
  )
}

export default CabinetNav;