export const required =(val) => {
    let error;
    if(!val || val === 'Город') {
        error = 'Поле обязательно для заполнения'
    }
    return error;
}

export const phoneCheck = (val) => {
    var PHONE_OPERATORS = [
        {id: '7700'},
        {id: '7701'},
        {id: '7702'},
        {id: '7705'},
        {id: '7706'},
        {id: '7707'},
        {id: '7708'},
        {id: '7747'},
        {id: '7771'},
        {id: '7775'},
        {id: '7776'},
        {id: '7777'},
        {id: '7778'},
    ];
    var phone = String(val).replace(/[^A-Z0-9]/g, ''),
        code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);
    if (!code || phone.length !== 11) {
        return false
    }

    var phone_number = code[1];
    var phone_operator = PHONE_OPERATORS.filter(function(item) {
        return item.id == phone_number
    });

    if(phone_operator.length >0){
        return true
    }else{
        return false;
    }
}

export const phoneValidation = (val) => {
    let error
    if(phoneCheck(val) === true) {
        error = ''
    }else {
        error = 'Нет соответствующего оператора'
    }
    return error
}

export const isImage = val => {
    const rule = /\.(jpg|gif|png)$/.test(val)
    if(rule) {
        return true
    }else{
        return false
    }
}

export const validEmail = (val) => {
    let error;
    let emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    if(!val) {
        error = 'Поле обязательно для заполнения'
    }
    if(val) {
        if(!emailvalid) {
            error ='Неправильный email'
        }
    }
    return error;
}

export const passwordCheck = (val)=> {
    let error;
    if(!val) {
        error = 'Поле обязательно для заполнения'
    }
	if(val && val.length < 5)  error = 'Пароль должен быть не меньше 5 символов';
	return error;
}

export const birthDayVal = (val) => {
    let error;
    var res = String(val).replace(/_/g, "");
    if(res.length !== 10) {
        error = 'Дата неправильная'
    }
    const myDate = new Date(val.substring(6,10)+'-'+val.substring(3,5)+'-'+val.substring(0,2));
    if(myDate == 'Invalid Date') {
        error = 'Дата неправильная'
    }
	const today = new Date()
	var todayM = today.getMonth() + 1;
	var todayD = today.getDate();
	var todayY = today.getFullYear();
	var myM = myDate.getMonth() + 1;
	var myD = myDate.getDate();
	var myY = myDate.getFullYear();

	if(myY>todayY) {
		return false;
	}
	if(myY < todayY-25) {
		error= 'Дата неправильная'
	}
	if(myY === todayY) {
		if(myM === todayM && myD > todayD) {
			error = 'Дата неправильная'
		}
		if(myM > todayM) {
			error = 'Дата неправильная'
		}
		
	}
	return error;
}


export const validateConfirmPassword = (pass, value) => {
  let error = "";
  if (pass && value) {
    if (pass !== value) {
      error = "Password not matched";
    }
  }
  return error;
};