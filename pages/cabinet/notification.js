import React from 'react'
import CabinetNav from '../../components/shared/Nav/CabinetNav'
import axios from 'axios'
import cookie from 'js-cookie'
import {connect} from 'react-redux'
import swal from "sweetalert";
import UpdatePassword from '../../components/userCabinet/UpdatePassword'
// import UserPersonalData from '../../components/userCabinet/UserPersonalData'
import * as msgaction from '../../store/actions/messageAction'
import {fetchCurrentUser} from '../../store/actions/userAction'
import CompanySide from '../../components/company/CompanySideInfo'
import withAuth from '../../hocs/withAuth'
import { countries, gorods } from '../../defaults/defaults'
const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

class Password extends React.Component {

	render() {
		return(
			<>
				<CabinetNav bin={this.props.usersReducer.user.companyDetails[0].bin} activeLink='notification'/>
				<div className="grid-container container">
					<div className="section">
            <div class="products__title paddings">
              <h4>Личный кабинет / Настройки / Уведомления</h4>
              <h1 class="smaller_font">Настройка уведомлений</h1>
            </div>

            {/* Component  starts there*/}
            <div className="user__profile">
              <div className="user__profile__title">
                <h3>Уведомления на эл. почту</h3>
                <p>Отметьте, какие уведомления присылать на ваш эл. адрес</p>
              </div>
              <div className="change__password__wrapper">
                <div className="cabinet__profileCompany__item__checkbox">
                  <input type="checkbox" name id />
                  <p>О переносе моих объявлений в архив</p>
                </div>
                <div className="cabinet__profileCompany__item__checkbox">
                  <input type="checkbox" name id />
                  <p>О новых сообщениях от пользователей сайта</p>
                </div>
                <div className="cabinet__profileCompany__item__checkbox">
                  <input type="checkbox" name id />
                  <p>О новых сообщениях от Администрации сайта</p>
                </div>
              </div>
            </div>
            <div className="user__data__btns">
              <a className="btn" href="#">Сохранить ИЗМЕНЕНИЯ</a>
              <a className="btn btn--white" href="#">ОТМЕНИТЬ</a>
            </div>
            {/* Ends there */}

					</div>
          
        <CompanySide />
				</div>
			</>
	  )
	}
	
}

export default withAuth(connect(mapStateToProps,null)(Password))