import React from 'react'
import {connect} from 'react-redux'
import redirect from 'nextjs-redirect'
import * as actions from '../store/actions/userAction'
import * as msgaction from '../store/actions/messageAction'
import cookie from 'js-cookie'
import LoadingSpinner from '../components/shared/others/LoadingSpinner'
const Redirect = redirect('/register')
const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (cookie.get('token') && !this.props.loggedIn) this.props.fetchCurrentUser();

    }

    render() {
      if (cookie.get('token') && this.props.loggedIn) {
        return <WrappedComponent />;
      } if (cookie.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        return <LoadingSpinner />;
      }
      return <Redirect />;
    }
  }

  const mapStateToProps = reduxStoreState => ({
    loggedIn: reduxStoreState.usersReducer.loggedIn,
    authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
  });

  const mapDispatchToProps = dispatch => ({
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
    errorMessage: () => dispatch(msgaction.errorMessage())
  });

  return connect(
    mapStateToProps,
    actions,
  )(AuthorizedComponent);
};

export default withAuth;