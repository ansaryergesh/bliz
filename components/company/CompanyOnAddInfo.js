import React from 'react'
import {connect} from 'react-redux'
const mapStateToProps = ({usersReducer: {
    user
  }}) => ({user})

const CompanyOnAddInfo = ({user}) => {
  const nameOfUser = () => user.companyDetails? user.companyDetails[0].companyName : user.fullName
  return (
    <div className="post_ad__about_company">
      <h2 className="post_ad__section_title">О компании</h2>
      <div className="post_ad__about_company__wrapper">
        <div className="post_ad__about_company__title">
          <div className="post_ad__about_company__title__img">
            <img src="/img/widgets/company_icon.png" alt/>
          </div>
          <div className="post_ad__about_company__title__name">
            <h3>{nameOfUser()}</h3>
            <p>{user.fullName}.</p>
            <span>Экспедитор</span>
          </div>
        </div>
        <div className="post_ad__about_company__contacts">
          <i className="fas fa-phone-alt"/>
          <div className="post_ad__about_company__contacts__content">
            <a href="#">{user.phone}</a>
            {/* <a href="#">+7 727 360 70 30</a> */}
          </div>
        </div>
        <div className="post_ad__about_company__contacts">
          <i className="far fa-envelope"/>
          <a href="#">{user.email}</a>
        </div>
      </div>
    </div>
  )
}

export default(connect(mapStateToProps, null)(CompanyOnAddInfo));