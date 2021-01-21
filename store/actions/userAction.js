import cookie from 'js-cookie';

export const userAuthentication = (url,values) =>dispatch => {
  dispatch({type: 'AUTHENTICATING_USER'});
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
      dispatch({type: 'SUCCESS_MESSAGE', payload: 'Успешно'})
      dispatch({type: 'SET_CURRENT_USER', payload: user})
    }
    else {
      dispatch({type: 'FAILED_LOGIN', payload: jsonresponse.message})
      dispatch({type: 'ERROR_MESSAGE', payload: jsonresponse.message})
    }
  })
  .catch(r=>r.json().then(e=>dispatch({type: 'FAILED_LOGIN',payload: e.message})));
}



export const fetchCurrentUser = () => dispatch => {
  dispatch({type: 'AUTHENTICATION_USER'})
  fetch('', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cookie.get('token')}`,
    },
  })
  .then(response => response.json())
  .then(jsonresponse => {
    const user = {working: true};
    dispatch({type: 'SET_CURRENT_USER', payload: user})
  })
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});