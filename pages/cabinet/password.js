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
				<CabinetNav activeLink='password'/>
				<div className="grid-container container">
					<div className="section">
						<div className="products__title paddings">
						  <h4>Личный кабинет / Настройки / Изменить пароль</h4>
              <h1 class="smaller_font">Изменить пароль</h1>
						</div>

            <UpdatePassword />
					</div>
          
        <CompanySide />
				</div>
			</>
	  )
	}
	
}

export default withAuth(connect(mapStateToProps,null)(Password))