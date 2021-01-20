import React from 'react'

export default function CabinetNav() {
    return(
      <div className="goods__nav config active">
        <div className="goods__nav__links container">
          <a className="active" href="#">Личная информация</a>
          <a href="#">Документы</a>
          <a href="#">Профиль компании</a>
          <a href="#">Изменить пароль</a>
          <a href="#">Уведомления</a>
          <a href="#">Удалить аккаунт</a>
        </div>
      </div>
    )
}