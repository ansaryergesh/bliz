import React from 'react'
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux'
import axios from 'axios';
import LoadingSpinner from '../components/shared/others/LoadingSpinner'
import cookie from 'js-cookie'
import withAuth from '../hocs/withAuth'
import * as msgaction from '../store/actions/messageAction'
import { countries, rentalType } from '../defaults/defaults';

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
        cities: [],
        input: {},
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCity = this.handleCity.bind(this);
    }

    handleSubmit(values) {
      this.setState({loading: true})
      axios.post(`${process.env.BASE_URL}/addStorage`, values)
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

    handleCity(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;
      axios.get(`${process.env.BASE_URL}/city?countryID=${event.target.value}`)
        .then(res => {
          console.log(res)
          this.setState({cities: res.data})
          this.setState({input})
        })
    }

    render() {
        return (
            <div className='register'>
               <div className="register__container">
               {this.state.loading ||this.state.loading ? <LoadingSpinner /> : null}
              <h2>Добавить склад</h2>
              <Formik
                initialValues={{
                  area: '50',
                  total_area: '55',
                  image: 0,
                  name: 'name',
                  country_id: 0,
                  city_id: 1,
                  address:'adress',
                  class: 'class b',
                  type_storage: 'type',
                  token: cookie.get('token'),
                  warning: 'yes',
                  warning_area: 'yes',
                  rentTypeID: 1,
                  price: '10000',
                  
                }
              }
                onSubmit={(values) => {this.handleSubmit(values)}}>
                <Form className='register_form'>
              
                
                  <Field name='area' placeholder='Площадь склада'/>
                  <Field name='total_area' placeholder='Общий площадь склада' />
                  <Field name='name' placeholder='Название' />
                  <Field name='type_storage' placeholder='Тип склада' />
                  <Field name='rentTypeID' as='select'>
                    <option value='0'>Тип аренды</option>
                    {rentalType.map(sub=> (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </Field>
                  <Field name='warning' placeholder='пожарная сигнализация, охранная сигнализация' />
                  <Field name='warning_area'  placeholder='площадка для отстоя и маневрирования транспорта' />
                  
                  <Field name='country_id' as='select' onChange={this.handleCity}>
                    <option value='0'>Выберите страну</option>
                    {countries.map(sub=> (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </Field>

                  <Field name='city_id' as='select'>
                    {this.state.cities.map(sub=> (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </Field>

                  <Field name='address' placeholder='Адрес' />
                  <Field name='class' placeholder='Класс' />
                  
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