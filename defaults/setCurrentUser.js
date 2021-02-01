import {useDispatch} from 'react-redux'
import axios from 'axios'
import React from 'react'
import cookie from 'js-cookie'
const dispatch = useDispatch()
export default function setCurrentUser(){
    const userToken = cookie.get('token')
    axios.get(`https://test.money-men.kz/api/getProfile?token=${userToken}`)
      .then(response => {
          if(response.data.success) {
            dispatch({type:'SET_CURRENT_USER', payload: response.data});
          }else {
            cookie.remove('token');
          }
          
    })
}