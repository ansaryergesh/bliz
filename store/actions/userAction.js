import cookie from 'js-cookie';
import Router from 'next/router';

export const userAuthentication = (url,values) =>dispatch => {
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
    const user = {
      name: jsonresponse.name, 
      phone: jsonresponse.phone,
      avatar: jsonresponse.url+'/'+jsonresponse.image,
      image:jsonresponse.image,
      message: 'Добро пожаловать',
    }
    if(jsonresponse.success) {
      cookie.set('token', jsonresponse.token)
      dispatch({type: 'SUCCESS_MESSAGE', payload: user.message})
      dispatch({type: 'SET_CURRENT_USER', payload: user})
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
  .catch(r=>r.json().then(e=>dispatch({type: 'FAILED_LOGIN',payload: e.message})));
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