import React from 'react'
import cookie from 'js-cookie'
import Navguest from './Navguest'
import Navuser from './Navuser'
import {fetchCurrentUser} from '../../../store/actions/userAction'
import {connect} from 'react-redux'
import LoadingNav from './LoadingNav'
import LoadingSpinner from '../others/LoadingSpinner'
import $ from 'jquery'
const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => {dispatch(fetchCurrentUser())}
})

const mapStateToProps = state => ({
  loggedIn: state.usersReducer.loggedIn,
  authenticatingUser: state.usersReducer.authenticatingUser
})
class Nav extends React.Component {
    componentDidMount(){
      $('.header__top__item').click(function () {
        $(this).find('.dropdown__items').fadeToggle(200);
      });
    }
    render() {
      
        if(this.props.authenticatingUser) {
          // return(<LoadingSpinner/>)
        }
        if(cookie.get('token') && this.props.loggedIn) {
            return(<Navuser/>)
        }if(cookie.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {
          // <LoadingNav />
        }
        if(cookie.get('token') == undefined) {
          <Navguest />
        }else {
          return(<Navguest/>)
        }
        return(<Navguest/>)

    }
}


export default (connect(mapStateToProps,mapDispatchToProps)(Nav))