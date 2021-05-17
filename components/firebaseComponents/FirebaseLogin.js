import axios from 'axios'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import firebase from '../../firebase'
import cookie from 'js-cookie'
const mapStateToProps = ({
  usersReducer: {
    user: {
      email,
      fullName
    }
  }
}) => ({email, fullName})

const FirebaseLogin = ({email, fullName}) => {


  return (
    <div></div>
  )
}

export default (connect(mapStateToProps,null)(FirebaseLogin))