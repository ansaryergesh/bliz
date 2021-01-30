import cookie from 'js-cookie';
import Router from 'next/router';

function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, '')
}

export const userAuthentication = (url,values) =>dispatch => {
  values.phone = replaceDate(values.phone)
  console.log(values)
  dispatch({type: 'AUTHENTICATING_USER'});
  dispatch({type: 'CLOSE_MESSAGE'});
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
  .then(response =>{
    if(response.ok){
      return response.json();
    }
    throw response;
  })
  .then(jsonresponse => {
 
    if(jsonresponse.success) {
      cookie.set('token', jsonresponse.token, {expires: 7})
      dispatch({type: 'SUCCESS_MESSAGE', payload: 'Добро пожаловать'})
      dispatch({type: 'SET_CURRENT_USER', payload: jsonresponse})
      setTimeout(() => {
        dispatch({type: 'CLOSE_MESSAGE'})
      },3500)
      Router.push('/')
    }
    else {
      dispatch({type: 'FAILED_LOGIN', payload: jsonresponse.message})
      dispatch({type: 'ERROR_MESSAGE', payload: jsonresponse.message})
    }
  })
  .catch(error => {
    dispatch({type: 'FAILED_LOGIN', payload: error})
    dispatch({type: 'ERROR_MESSAGE', payload: error})
  });
}



export const fetchCurrentUser = () => dispatch => {
  dispatch({type: 'AUTHENTICATING_USER'})
  fetch(`https://test.money-men.kz/api/getProfile?token=${cookie.get('token')}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(jsonresponse => {
    dispatch({type: 'SET_CURRENT_USER', payload: jsonresponse})
  })
}



export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});