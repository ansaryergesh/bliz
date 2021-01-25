import React from 'react'
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";
import axios from 'axios';
import LoadingSpinner from '../components/shared/others/LoadingSpinner'
import cookie from 'js-cookie'

class AddPost extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        loading: false,
        message: {visibility: false,message:null, type:null},
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
      this.setState({loading: true})
    console.log(values)
    axios.post(`https://test.money-men.kz/api/addPost`, values)
      .then((response) => {
       console.log(response)
       if(!response.data.success) {
        this.setState({loading:false, message: {visibility: true, message: response.data.message, type: 'error'}})
       }
       else {
        this.setState({loading: false, message: {visibility: true, message: 'Вы успешно зарегистрировались!', type: 'success'}})
        cookie.set('token',response.data.token)
       }
      
    }).catch((error) => {
      console.log(error)
      this.setState({loading: false, message: 'Ошибка'})
    });
    }

    render() {
        return (
            <div className='register'>
               {this.state.loading ||this.state.loading ? <LoadingSpinner /> : null}
              <h2>РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ</h2>
              <Formik
                initialValues={{
                  title: 'test',
                  sub_id: 1,
                  volume: 20,
                  net: 20,
                  start_date: '2020-12-20',
                  end_date:'2020-12-20',
                  from: 'Almaty',
                  to: 'Shymkent',
                  token: cookie.get('token') || ''
                }
              }
                onSubmit={(values) => {this.handleSubmit(values)}}>
                <Form className='register_form'>
                  <Field name='title' placeholder='Название'/>
                  <Field name='sub_id' />
                  <Field name='volume' placeholder='Емкость '/>
                  <Field name='net' placeholder='Масса' />
                  <Field name='start_date' placeholder='Дата отправки' />
                  <Field name='end_date' placeholder='Дата окончания' />
                  <Field name='from' placeholder='Место начало' />
                  <Field name='to'  placeholder='Место завершение' />
                  {this.state.loading===false ? <button className="btn" type="submit">РАЗМЕСТИТЬ</button>: <button className="btn"  disabled>Загрузка...</button>}
                </Form>
                </Formik>
               
            </div>
        )
    }
}

export default AddPost