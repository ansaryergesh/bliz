import React from 'react'
import cookie from 'js-cookie'
import Navguest from './Navguest'
import Navuser from './Navuser'
import {fetchCurrentUser} from '../../../store/actions/userAction'
import {connect} from 'react-redux'
import LoadingNav from './LoadingNav'
import LoadingSpinner from '../others/LoadingSpinner'
import $ from 'jquery'
const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => {dispatch(fetchCurrentUser())}
})

const mapStateToProps = state => ({
  loggedIn: state.usersReducer.loggedIn,
  authenticatingUser: state.usersReducer.authenticatingUser
})
class Nav extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $(".set > a").on("click", function (event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(200);
          $(".set > a i")
            .removeClass("active")
        } else {
          $(".set > a i")
            .removeClass("active")
          $(this)
            .find("i")
            .addClass("active");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });
    
      $('.header__top__item').click(function () {
        $(this).find('.dropdown__items').fadeToggle(200);
      });
    
      $('.goods__nav__opener').click(function () {
        $('.goods__nav.goods').toggleClass('active');
        $('.goods__nav.equipment').removeClass('active');
      });
    
      $('.equipment__opener').click(function () {
        $('.goods__nav.equipment').toggleClass('active');
        $('.goods__nav.goods').removeClass('active');
      });
    
      $('.cabinet_config_opener').click(function () {
        $('.goods__nav.config').toggleClass('active');
      });
    
      $('.show_num').click(function () {
        $('.hidden_num').show();
        $(this).hide();
      });
    
      $('.filter__item__form a').click(function (event) {
        event.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      });
    
      $('.open_calc_modal').click(function () {
        $('.modal__calculator').addClass('active');
        $('body').addClass('modal-window-calc');
      });
    
      $('.close__calc__modal').click(function () {
        $('.modal__calculator').removeClass('active');
        $('body').removeClass('modal-window-calc');
      });
      // 
      $('#carusel-item2 img').click(function (e) {
        if (e.target.alt === 'small-storage-item-1') {
          $("#carusel-item1").attr("src", "assets/img/storage/storage-nav-item/store-item1.png");
        } else {
          $("#carusel-item1").attr("src", "assets/img/storage/storage2.png");
        }
      })
    
      $('.pink').click(function () {
        $('.modal__upgrade_to_top').addClass('active');
    
      });
      $('.modal__upgrade_to_top__inner i').click(function () {
        $('.modal__upgrade_to_top').removeClass('active');
      });
    
      $('#first__step__done').click(function(e){
        e.preventDefault();
        $('#first__step').hide();
        $('#second__step').show();
        $('.graphic__circle:nth-child(3)').addClass('blue');
        $('.hl:nth-child(4)').addClass('blue');
        $('#second_step__desc').hide();
        $('#requset_title1').removeClass('blue');
        $('#requset_title2').addClass('blue');
        $('.blue_span_title').html('В РАБОТЕ: ГРУЗ В ПУТИ')
        $('.request_item__section__item.end').hide()
        $('#open_driver_modal').hide()
      })
    
      $('#second__step__done').click(function(e){
        e.preventDefault();
        $(this).hide()
        $('#requset_span').html('Время в пути:')
        $('#request__time').html('9 ч 35 мин')
        $('#request_btn').addClass('average')
        $('.graphic__circle').removeClass('blue')
        $('.graphic__circle').addClass('green')
        $('.hl').addClass('green')
        $('#requset_title1').addClass('green');
        $('#requset_title2').removeClass('blue');
        $('#requset_title2').addClass('green');
        $('#requset_title3').addClass('green');
        $('.blue_span_title').html('ГРУЗ ДОСТАВЛЕН')
        $('.blue_span_title').addClass('green')
        $('#request_desc_end').html('Поздравляем! Вы доставили груз! <br> Свяжитесь с заказчиком <br> для последующих действий.')
      })
    
      $('#open_driver_modal').click(function(e){
        e.preventDefault()
        $('.driver_modal.driver').addClass('active')
        $('body').addClass('lock')
      })
      $('#open_map_modal').click(function(e){
        e.preventDefault()
        $('.driver_modal.map').addClass('active')
        $('body').addClass('lock')
      })
      $('.open_rejection_modal').click(function(e){
        e.preventDefault()
        $('.driver_modal.rejection').addClass('active')
        $('body').addClass('lock')
      })
      $('#open_edit_photo').click(function(e){
        e.preventDefault()
        $('.driver_modal.edit_photo').addClass('active')
        $('body').addClass('lock')
      })
      $('#close_edit_photo').click(function(e){
        $('.driver_modal.edit_photo').removeClass('active')
        $('body').removeClass('lock')
      })
      
      
      $('#choose_driver').click(function(){
        $('#open_driver_modal').html('Изменить водителя')
        $('.request_item__section__inner').hide()
        $('.request_item__section__driver').show()
      })
      $('.driver_modal__btns a').click(function(e){
        e.preventDefault()
        $('.driver_modal').removeClass('active')
        $('body').removeClass('lock')
      })
      $('.driver_times').click(function(){
        $('.driver_modal').removeClass('active')
        $('body').removeClass('lock')
      })
      $('#driver_type2').click(function(){
        $('.driver_modal__wrapper').hide();
        $('.driver_modal__wrapper2').show();
      })
      $('#driver_type1').click(function(){
        $('.driver_modal__wrapper').show();
        $('.driver_modal__wrapper2').hide();
      })
    
    
      $('#register_type2').click(function(){
        $('.company__register').hide();
        $('#register_title').html('Контакные данные')
      })
      $('#register_type1').click(function(){
        $('.company__register').show();
        $('#register_title').html('Контакное лицо')
      })
    });

 
    $('.mobile_bar').click(function(){
      $(this).toggleClass('active');
      $('.header__top__mobile').slideToggle();
      $('body').toggleClass('lock');
    })
    $('.header__top__mobile__nav__item').click(function(){
      $(this).siblings().find('.header__top__mobile__nav__item__inner').slideUp();
      $(this).siblings().find('.header__top__mobile__nav__item__text').removeClass('active');
      $(this).find('.header__top__mobile__nav__item__inner').slideToggle();
      $(this).find('.header__top__mobile__nav__item__text').toggleClass('active');
    })
  }
    render() {
    
        if(this.props.authenticatingUser) {
          // return(<LoadingSpinner/>)
        }
        if(cookie.get('token') && this.props.loggedIn) {
            return(<Navguest/>)
        }if(cookie.get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {
          // <LoadingNav />
        }
        if(cookie.get('token') == undefined && !this.props.loggedIn) {
          <Navguest />
        }else {
          return(<Navguest/>)
        }
        return(<Navguest/>)

    }
}


export default (connect(mapStateToProps,mapDispatchToProps)(Nav))