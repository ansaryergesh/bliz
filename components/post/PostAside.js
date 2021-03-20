import axios from "axios";
import React, {useState} from "react";
import {formatPhoneNumber, formatPhoneNumberHidden, parseDateTime} from "../../defaults/extraFunctions";
import {useDispatch} from 'react-redux'
import cookie from 'js-cookie'
import {useRouter} from 'next/router'
const PostAside = ({postinfo, sendRequest}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {pid} = router.query
  const [share,
    setShare] = useState(false)
  const closeModal = (e) => {
    e.preventDefault()
    if (e.target.className !== 'modal_bg') {
      setShare(false)
    }
  }

  const addFavour = () => {
    if (router.pathname.includes('/cargo')) {
      axios.get(`https://test.money-men.kz/api/addPostFavourites?token=${cookie.get('token')}&post_id=${pid}&category_id=1`).then(res => {
        console.log(res)
        if (res.data.success) {
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Добавлен в избранные'})
        } else {
          dispatch({type: 'ERROR_MESSAGE', payload: 'Уже добавлен'})
        }
      })
    }
    if (router.pathname.includes('/transport')) {
      axios.get(`https://test.money-men.kz/api/addPostFavourites?token=${cookie.get('token')}&post_id=${pid}&category_id=2`).then(res => {
        console.log(res)
        if (res.data.success) {
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Добавлен в избранные'})
        } else {
          dispatch({type: 'ERROR_MESSAGE', payload: 'Уже добавлен'})
        }
      })
    }
    if (router.pathname.includes('/storage')) {
      axios.get(`https://test.money-men.kz/api/addStorageFavourites?token=${cookie.get('token')}&storage_id=${pid}`).then(res => {
        console.log(res)
        if (res.data.success) {
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Добавлен в избранные'})
        } else {
          dispatch({type: 'ERROR_MESSAGE', payload: 'Уже добавлен'})
        }
      })
    }
  }

  return (
    <>
    {share ? ''  :''}
    <aside className="aside">
          <div className="aside__contactCard">
            <p>Контактная информация</p>
            <div className="contactCard__content">
              <img src="/img/widgets/company_icon.png" alt/>
              <div className="contactCard__title">
                <h3>{postinfo.user.companyDetails.companyName!=='' ? postinfo.user.companyDetails.companyName : postinfo.user.fullName }</h3>
                <p>Рейтинг: 5.0</p>
              </div>
            </div>
            <div className="contactCard__num">
              <p>{formatPhoneNumber(postinfo.user.phone)}
                <span className="hidden_num">
              {formatPhoneNumberHidden(postinfo.user.phone)}</span>
              </p>
              <button className="show_num">Показать телефон</button>
            </div>
            {!router.pathname.includes('storage') ? <a className="btn" onClick={sendRequest}>Отправить заявку</a> : ''}
            <a className="btn" href="#">Написать сообщение</a>
          </div>
          <div className="aside__functions__wrapper">
            <div className="aside__functions">
              <a className="izbrannoe" onClick={addFavour}><i className="far fa-star"/>В избранное</a>
              <a onClick={() => setShare(true)} className="download" href="example" ><img src="/img/widgets/aside_function1.png" alt/></a>
              <a className="print" href="javascript:(print());"><img src="/img/widgets/aside_function2.png" alt/></a>
              <a className="someShit" href="#"><img src="/img/widgets/aside_function3.png" alt/></a>
            </div>
            <div className="aside__changed_date">
              <p>Изменено:  {parseDateTime(postinfo.updated_at)}</p>
            </div>
            
          </div>
        </aside>
        </>
  )
}

export default PostAside;