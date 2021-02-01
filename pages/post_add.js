import React from 'react'
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux'
import axios from 'axios';
import LoadingSpinner from '../components/shared/others/LoadingSpinner'
import cookie from 'js-cookie'
import withAuth from '../hocs/withAuth'
import * as msgaction from '../store/actions/messageAction'

const mapDispatchToProps = (dispatch) =>({
  errorMessage:(msg) => {dispatch(msgaction.errorMessage(msg))},
  successMessage:(msg) => {dispatch(msgaction.successMessage(msg))}
})

class AddPost extends React.Component {
    componentDidMount() {
      axios.get(`${process.env.BASE_URL}/getCategory`)
        .then(res=> {
          this.setState({
            categories: res.data
          })
        })
      axios.get(`${process.env.BASE_URL}/getSubcategories`)
      .then(res=> {
        this.setState({
          subcategories: res.data
        })
      })
    }
    constructor(props) {
      super(props)
      this.state = {
        loading: false,
        categories: [],
        subcategories: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
      this.setState({loading: true})
      axios.post(`${process.env.BASE_URL}/addPost`, values)
        .then((response) => {
        if(!response.data.success) {
          this.setState({loading:false})
          this.props.errorMessage(response.data.message ||'Что то пошло не так')
        }
       else {
          this.setState({loading: false})
          this.props.successMessage('Успешно добавлен')
       }
      
    }).catch((error) => {
      console.log(error)
      this.setState({loading: false, message: 'Ошибка'})
    });
    }

    render() {
        return (
            <div className='register'>
               <div className="register__container">
               {this.state.loading ||this.state.loading ? <LoadingSpinner /> : null}
              <h2>РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ</h2>
              <Formik
                initialValues={{
                  title: 'test',
                  sub_id: 0,
                  category_id: 0,
                  volume: 20,
                  net: 20,
                  start_date: '2020-12-20',
                  end_date:'2020-12-20',
                  from: 'Almaty',
                  to: 'Shymkent',
                  token: cookie.get('token'),
                  price: '10000'
                }
              }
                onSubmit={(values) => {this.handleSubmit(values)}}>
                <Form className='register_form'>
                  <Field name='title' placeholder='Название'/>
                  <Field name='category_id' as='select'>
                    <option value='0'>Выберите категорию</option>
                    {this.state.categories.map(cat=> (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </Field>
                
                  <Field name='sub_id' as='select'>
                    <option value='0'>Выберите субкатегорию</option>
                    {this.state.subcategories.map(sub=> (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </Field>
                  <Field name='volume' placeholder='Емкость (м3) '/>
                  <Field name='net' placeholder='Масса (тн)' />
                  <Field name='start_date' placeholder='Дата отправки' />
                  <Field name='end_date' placeholder='Дата окончания' />
                  <Field name='from' placeholder='Место начало' />
                  <Field name='to'  placeholder='Место завершение' />
                  <Field name='price'  placeholder='Цена' />
                  {this.state.loading===false ? <button className="btn" type="submit">РАЗМЕСТИТЬ</button>: <button className="btn"  disabled>Загрузка...</button>}
                </Form>
                </Formik>
               
            </div>
            </div>
        )
    }
}

export default withAuth(connect(null,mapDispatchToProps)(AddPost))