import React from 'react'
import CabinetNav from '../../components/shared/Nav/CabinetNav'
import axios from 'axios'
import cookie from 'js-cookie'
import {connect} from 'react-redux'
import swal from "sweetalert";
import Avatar from '../../components/shared/Avatar'
import * as msgaction from '../../store/actions/messageAction'
const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

const mapDispatchToProps =dispatch =>({
  successMessage:(msg)=>dispatch(msgaction.successMessage(msg)),
  errorMessage:(msg)=>dispatch(msgaction.errorMessage(msg))
})
class Cabinet extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			file:null,
			loading: false,
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.handleClose = this.handleClose.bind(this)
	}
	onChange(e) {
		e.preventDefault()
    this.setState({file:e.target.files[0]})
	}
	
	fileUpload(file){
    const url = 'https://test.money-men.kz/api/setImage';
    const formData = new FormData();
		formData.append('image',file)
		formData.append('token', cookie.get('token'))
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
		return  axios.post(url,formData,config)
	}

  handleClose() {
    this.setState({file:null})
  }
	onFormSubmit(e){
    e.preventDefault() // Stop form submit
		this.setState({loading:true})
    this.fileUpload(this.state.file)
    .then((response)=>{
      this.setState({loading: false})
      if(response.status) {
        this.props.successMessage('Аватарка обновлена успешно!')
        this.setState({file:null})
      }else {
        this.props.errorMessage(response.message)
      }
    })
	}
  
  onDelete() {
    swal({
      title: 'Вы уверены, что хотите удалить аватарку',
      buttons:{
        catch:{
          text: 'Да',
          value: 'yes'
        },
        cancel: 'Нет'
      }
    }).then(value=>{
      switch (value){
        case 'yes':
          axios.get(`https://test.money-men.kz/api/deleteAvatar?token=${cookie.get('token')}`)
          .then(response => {
            console.log(response)
            if(response.data.success) {
              swal({
                icon: "success",
                title: 'Успешно обновлена аватарка'
              });
            }else {
            }
          })
      }
    })
  }
  
	render() {
		return(
			<>
				<CabinetNav />
				<div className="grid-container container">
					<div className="section">
						<div className="products__title paddings">
              {/* <p>{this.props.usersReducer.user.image}</p> */}
							{/* <p>{this.state.file? 'true': 'false'}</p> */}
							<h4>Личный кабинет / Настройки / Личная информация</h4>
							<h1 className="smaller_font">Личная информация</h1>
						</div>
            <Avatar
              img={this.state.file}
              onChange={this.onChange}
              onSubmit={this.onFormSubmit}
              onClose={this.handleClose}
              loading={this.state.loading}
              onDelete={this.onDelete}
              // profileImg={this.props.usersReducer.user.image}
            />
					
						{/* <div className="user__personal_data">
							<div className="user__profile__title">
								<h3>Персональные данные</h3>
								<p>Личные данные администратора компании</p>
							</div>
							<form className="user__data_form">
								<div className="user__data_form__item">
									<span>Фамилия</span>
									<input type="text" placeholder="Баталагазиев" />
								</div>
								<div className="user__data_form__item">
									<span>Имя</span>
									<input type="text" placeholder="Руслан" />
								</div>
								<div className="user__data_form__item">
									<span>Отчество</span>
									<input type="text" placeholder="Владимирович" />
								</div>
								<div className="user__data_form__item">
									<span>Дата рождения</span>
									<input type="text" placeholder="11/09/1992" />
								</div>
								<div className="user__data_form__item">
									<span>Страна</span>
									<select>
										<option>Казахстан</option>
									</select>
								</div>
								<div className="user__data_form__item">
									<span>Город</span>
									<select>
										<option>Алматы</option>
										<option>Астана</option>
									</select>
								</div>
								<div className="user__data_form__item">
									<span>Адрес</span>
									<input type="text" placeholder="ул. Пушкина дом №11" />
								</div>
							</form>
						</div>
						<div className="user__personal_data">
							<div className="user__profile__title">
								<h3>Контактные данные</h3>
								<p>Контактные данные администратора страницы</p>
							</div>
							<form className="user_contact_form">
								<div className="user__data_form__item">
									<span>Эл. почта</span>
									<input type="text" placeholder="admin@company.kz" />
								</div>
								<div className="user__data_form__item">
									<span>Телефон</span>
									<div className="user__data_form__item__inner">
										<input type="text" placeholder="+7 701 399 35 38" />
										<a className="btn btn--white small" href="#"><i className="far fa-edit" /></a>
									</div>
								</div>
								<div className="user__data_form__item center">
									<a className="btn btn--white" href="#">ДОБАВИТЬ ТЕЛЕФОН</a>
								</div>
							</form>
						</div>
						<div className="user__data__btns">
							<a className="btn" href="#">Сохранить ИЗМЕНЕНИЯ</a>
							<a className="btn btn--white" href="#">ОТМЕНИТЬ</a>
						</div>
					</div>
					<div className="aside">
						<div className="aside__contactCard">
							<div className="contactCard__content">
								<img src="/img/widgets/company_icon.png" alt />
								<div className="contactCard__title">
									<h3>ТОО «Alma Logistics»</h3>
									<p>Баталгазиев Р.В. </p>
								</div>
							</div>
							<div className="contactCard__details">
								<div className="contactCard__detail__item">
									<p>Статус:</p>
									<h3>Лимитед</h3>
								</div>
								<div className="contactCard__detail__item">
									<p>Рейтинг:</p>
									<div className="contactCard__detail__item__inner">
										<i className="far fa-star" />
										<h3>5.0</h3>
									</div>
								</div>
								<div className="contactCard__detail__item">
									<p>Ваш баланс:</p>
									<div className="contactCard__detail__item__inner">
										<img src="/img/widgets/tenge.svg" alt />
										<h3 className="green">15 000 ₸</h3>
									</div>
								</div>
							</div>
							<a className="btn btn--white green" href="#">Пополнить баланс</a>
						</div> */}
					</div>
				</div>
			</>
	)
	}
	
}

export default (connect(mapStateToProps,mapDispatchToProps)(Cabinet))