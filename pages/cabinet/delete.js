import React from 'react'
import swal from "sweetalert";
import CabinetNav from '../../components/shared/Nav/CabinetNav'
import CompanySide from '../../components/company/CompanySideInfo'
import UserDelete from '../../components/userCabinet/UserDelete'
import {connect} from 'react-redux'
import withAuth from '../../hocs/withAuth'
const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

class Delete extends React.Component {
  render() {
    return (
      <>
        <CabinetNav bin={this.props.usersReducer.user.bin} activeLink='delete'/>
        <div className="grid-container container">
					<div className="section">
						<div className="products__title paddings">
              <h4>Личный кабинет / Настройки / Изменить пароль</h4>
              <h1 class="smaller_font">Изменить пароль</h1>
						</div>

            <UserDelete />
					</div>
          
          <CompanySide />
        </div>
      </>
    )
  }

}

export default withAuth(connect(mapStateToProps,null)(Delete))