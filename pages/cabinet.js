import React from 'react'
import CabinetNav from '../components/shared/Nav/CabinetNav'
import axios from 'axios'
import cookie from 'js-cookie'
import {connect} from 'react-redux'
import swal from "sweetalert";
import Avatar from '../components/userCabinet/Avatar'
import UserPersonalData from '../components/userCabinet/UserPersonalData'
import * as msgaction from '../store/actions/messageAction'
import {fetchCurrentUser} from '../store/actions/userAction'
import CompanySide from '../components/company/CompanySideInfo'
import withAuth from '../hocs/withAuth'
import BreadCumbs from '../components/shared/BreadNastroikaCabinet'
const mapStateToProps = state => {
  return {
    usersReducer: state.usersReducer
  }
}

const mapDispatchToProps =dispatch =>({
  successMessage:(msg)=>dispatch(msgaction.successMessage(msg)),
  errorMessage:(msg)=>dispatch(msgaction.errorMessage(msg)),
  fetchCurrentUser:()=>dispatch(fetchCurrentUser())
})
class Cabinet extends React.Component {
  componentDidMount() {
    console.log(this.props.usersReducer.user.image)
  }
	constructor(props) {
		super(props);
		this.state ={
			file:null,
      loading: false,
      edit: true,
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
	}
	onChange(e) {
		e.preventDefault()
    this.setState({file:e.target.files[0]})
  }
  onEdit() {
    this.setState({edit: !this.state.edit})
  }

  onUpdate(values) {
    axios.get(`${process.env.BASE_URL}/updateProfile`, {params: {
      fullName: values.fullName,
      city: values.city,
      email: values.email,
      country: values.country,
      token: values.token,
      city_id: values.city_id,
      phone: values.phone
    }})
      .then(res => {
        if(res.data.success) {
          this.props.successMessage('Успешно обновлен')
          this.props.fetchCurrentUser() 
          // console.log(res)
        }else {
          this.props.errorMessage(res.data.message)
        }
      })
  }
	
	fileUpload(file){
    const url = `${process.env.BASE_URL}/setImage`;
    const formData = new FormData();
		formData.append('image',file)
		formData.append('token', cookie.get('token'))
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    console.log(formData)
		return  axios.post(url,formData,config)
	}

  handleClose() {
    this.setState({file:null})
  }
	onFormSubmit(e){
    e.preventDefault() // Stop form submit
		this.setState({loading:true})
    console.log(this.state.file)
    this.fileUpload(this.state.file)
    .then((response)=>{
      this.setState({loading: false})
      if(response.status) {
        this.props.successMessage('Аватарка обновлена успешно!')
        this.props.fetchCurrentUser()
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
          axios.get(`${process.env.BASE_URL}/deleteAvatar?token=18272b6fc7c060a2097052a54274b11828edd9ba`)
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
				<CabinetNav  activeLink='index'/>
				<div className="grid-container container">
					<div className="section">
						<div className="products__title paddings">
              <BreadCumbs />
							<h1 className="smaller_font">Личная информация</h1>
						</div>
            <Avatar
              img={this.state.file}
              onChange={this.onChange}
              onSubmit={this.onFormSubmit}
              onClose={this.handleClose}
              loading={this.state.loading}
              onDelete={this.onDelete}
              profileImg={this.props.usersReducer.user.image === undefined ? null :this.props.usersReducer.user.image }
            />
            <UserPersonalData user={this.props.usersReducer.user} edit={this.state.edit} 
              onEdit={this.onEdit}
              onSave={this.onUpdate}
            />
					</div>
          
        <CompanySide />
				</div>
			</>
	)
	}
	
}

export default withAuth(connect(mapStateToProps,mapDispatchToProps)(Cabinet))