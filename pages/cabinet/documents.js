import React from 'react'
import swal from "sweetalert";
import CabinetNav from '../../components/shared/Nav/CabinetNav'
import CompanySide from '../../components/company/CompanySideInfo'
// import UserDelete from '../../components/userCabinet/UserDelete'
import Bin from '../../components/userCabinet/documents/Bin'
import Document1 from '../../components/userCabinet/documents/Document1'
import Document2 from '../../components/userCabinet/documents/Document2'
import {connect} from 'react-redux'
import withAuth from '../../hocs/withAuth'
import { fetchCurrentUser } from '../../store/actions/userAction';
const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

const mapDispatchToProps = dispatch=> ({
  fetchCurrentUser:()=>dispatch(fetchCurrentUser())
})

class Delete extends React.Component {
  render() {
    return (
      <>
        <CabinetNav bin={this.props.usersReducer.user.bin} activeLink='documents'/>
        <div className="grid-container container">
					<div className="section">
          <div className="products__title paddings">
            <h4>Личный кабинет / Настройки / Документы</h4>
            <h1 className="smaller_font">Документы</h1>
          </div>
            <Bin bin={this.props.usersReducer.user.bin} fetchCurrentUser={this.props.fetchCurrentUser}/>
            <Document1 registration={this.props.usersReducer.user.registration}  fetchCurrentUser={this.props.fetchCurrentUser} />
            <Document2 license={this.props.usersReducer.user.license} fetchCurrentUser={this.props.fetchCurrentUser}/>
            {/* <UserDelete /> */}
					</div>
          
          <CompanySide />
        </div>
      </>
    )
  }

}

export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Delete))