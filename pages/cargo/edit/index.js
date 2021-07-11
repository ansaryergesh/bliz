import React, {createRef} from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import {documents, pogruzka, condition, extra} from '../../../defaults/checkboxes/documents'
import CheckBox from '../../../components/shared/CheckBox'
import { closeMessage, errorMessage, successMessage } from '../../../store/actions/messageAction'
import {connect} from 'react-redux'
import { currencies, paymentType, todaysDate } from '../../../defaults/defaults'
import { loadGoogleMapScript } from '../../../defaults/googleMapDefaults'
import LoadingSpinner from '../../../components/shared/others/LoadingSpinner'
import { deleteFalseKey } from '../../../defaults/extraFunctions'
import CompanyOnAddInfo from '../../../components/company/CompanyOnAddInfo'
import withAuth from '../../../hocs/withAuth'
import Router, {useRouter} from 'next/router'
import {getParameterByName} from '../../../defaults/getQuery'

const mapDispatchToProps = (dispatch) =>({
  successMessage: (msg) => {dispatch(successMessage(msg))},
  errorMessage: (msg) => {dispatch(errorMessage(msg))},
  closeMessage: () => {dispatch(closeMessage)},
})

class CargoTransportEdit extends React.Component {
    
  componentDidMount(){
    if(getParameterByName('id') === null || getParameterByName('category') === null) {
      this.props.errorMessage('Неправильный адрес')
      Router.push('/cargo')
    }else {
      this.getPostId();
    }
    loadGoogleMapScript(() => {
     
      this.setState({
        loadMap: true,
      },() => this.initPlaceAPI())
    })
  }
  getPostId = () => {
    axios.get(`${process.env.BASE_URL}/getPostByID/${getParameterByName('id')}`)
      .then(res => {
        if(!res.data.data.length>0) {
          Router.push('/cargo')
        }
        if(res.data.success && res.data.data.length>0) {
          let finalres = res.data.data[0].details[0]
          let top = res.data.data[0].top ? res.data.data[0].top : false
          console.log(finalres)
          this.setState({
            loading: false,
            title: finalres.title,
            from: finalres.from,
            to: finalres.to,
            volume: finalres.volume,
            net: finalres.net,
            quantity: finalres.quantity,
            startDate: finalres.start_date,
            endDate: finalres.end_date,
            fromString:finalres.from_string,
            toString: finalres.to_string,
            from: finalres.from,
            to: finalres.to,
            duration: finalres.duration,
            distance: finalres.distance,
            top: top,
            firstTop: top,
            // price: finalres.price[0].price
            // docs: finalres.additional[0].docs,
            // pogruzki: finalres.additional[0].pogruzki
          })
        }
      })
  }
  constructor(props) {
    super(props);
    this.placeInputRef = createRef();
    this.placeInputRef2 = createRef();
    this.state = {
      address1: false,
      address2: false,
      loading: true,
      loadMap:false,
      loadingDisDur: false,
      title: '',
      from: '',
      to: '',
      volume: '22',
      net: '86',
      height: '',
      length: '',
      width: '',
      startDate: todaysDate(),
      endDate: todaysDate(),
      // price: '100',
      priceType: 1,
      paymentType: 1,
      type_transport:1,
      quantity: '',
      docs: new Map(),
      pogruzki: new Map(),
      condition: new Map(),
      extra: new Map(),
      distance: '',
      duration: '',
      fromString: '',
      toString: '',
      top: false,
      firstTop: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.handleTop = this.handleTop.bind(this)
    this.addToTop = this.addToTop.bind(this)
    this.initPlaceAPI = this.initPlaceAPI.bind(this)
  }

  
  initPlaceAPI() {
    const self = this;
    let autocomplete =  new window.google.maps.places.Autocomplete(this.placeInputRef.current,
      { types: ['(cities)'],});
    let autocomplete2 =  new window.google.maps.places.Autocomplete(this.placeInputRef2.current,
      { types: ["(cities)"],});
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      console.log(place)
      let addressString=new Map();
      place.address_components.forEach(elem=> {
        if(elem.types.includes('locality') || elem.types.includes('country')) {
          addressString.set(elem.short_name, elem.short_name);
        }
      })
      self.setState({
        from: place.place_id, 
        fromString:Array.from(addressString.keys()).join(',')
      },() => {self.getDistanceDuration(self.state.from,self.state.to)})
    });

      new window.google.maps.event.addListener(autocomplete2, "place_changed", function () {
      let place = autocomplete2.getPlace();
      let addressString=new Map();
      place.address_components.forEach(elem=> {
        if(elem.types.includes('locality') || elem.types.includes('country')) {
          addressString.set(elem.short_name, elem.short_name);
        }
      })
      self.setState({
        to: place.place_id,
        toString:Array.from(addressString.keys()).join(',')
      },() => {self.getDistanceDuration(self.state.from,self.state.to)})
    });
  }



  getDistanceDuration(p1,p2) {
    if(p1.length>0 && p2.length>0) {
      this.setState({
        loadingDisDur: true})
      
      axios.get(`${process.env.BASE_URL}/distance?from=${p1}&to=${p2}`,
      {headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods":"DELETE, POST, GET, PUT",
        "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      }}
      )
        .then(res => {
          if(res.data.success ===true) {
            this.setState({
              loadingDisDur: false,
              distance: res.data.distance,
              duration:res.data.duration
            })
          }
          if(res.status ===400 ) {
            this.setState({
              loadingDisDur:false
            })
            console.log(res)
          }
          
        })
    }else {
      this.setState({loadingDisDur: false})
    }
    
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleTop(e) {
    this.setState({top: !this.state.top})
  }
  handleCheckBox(e) {
    const item = e.target.value;
    const isChecked = e.target.checked;


    if(documents.some(d=> d.name === e.target.name)) {
      this.setState(prevState => ({ docs: prevState.docs.set(item, isChecked) }));
    }
    if(condition.some(c=>c.name===e.target.name)) {
      this.setState(prevState=>({condition: prevState.condition.set(item,isChecked)}))
    }
    if(pogruzka.some(p=>p.name===e.target.name)) {
      this.setState(prevState=>({pogruzki: prevState.pogruzki.set(item,isChecked)}))
    }
    if(extra.some(c=>c.name===e.target.name)) {
      this.setState(prevState=>({extra: prevState.extra.set(item,isChecked)}))
    }
    
  }

  addToTop() {
    if(this.state.firstTop !== this.state.top && this.state.top === true) {
      let id = getParameterByName('id')
      let token = cookie.get('token')
      axios.get(`https://test.money-men.kz/api/topPost`, {params: {
        post_id: id,
        token: token,
      }})
        .then(res=> {
          this.props.successMessage('Обновлен и добавлен в топ')
          Router.push(`/cargo/${getParameterByName('id')}`)
          console.log(res)
        })
    }
    if(this.state.firstTop === this.state.top) {
      Router.push(`/cargo/${getParameterByName('id')}`)
    }
  
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.closeMessage();
    var docVals = deleteFalseKey(this.state.docs);
    var loads = deleteFalseKey(this.state.pogruzki);
    var condits = deleteFalseKey(this.state.condition)
    var extras = deleteFalseKey(this.state.extra)
    axios.get(`${process.env.BASE_URL}/editPost?documents[]=${docVals}&loading[]=${loads}&condition[]=${condits}&addition[]=${extras}`, {params: {
      token: cookie.get('token'),
      category_id: 1,
      sub_id: 1,
      title: this.state.title,
      from: this.state.from,
      to: this.state.to,
      volume: this.state.volume,
      net: this.state.net,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      price_type: 1,
      payment_type: 1,
      price: 100,
      type_transport: 1,
      post_id: parseInt(getParameterByName('id')),
      type_transport: this.state.type_transport,
      duration: this.state.duration,
      distance: this.state.distance,
      from_string: this.state.fromString,
      to_string: this.state.toString,
    }})
      .then(res => {
        if(res.data.success) {
          this.props.successMessage('Успешно обновлен пост')
          
          // Router.push(`/cargo/${getParameterByName('id')}`)
          this.addToTop()
          
        }else {
          this.props.errorMessage(res.data.message)
        }
      })

    e.preventDefault()
  }
  render() {
    return (
      <>
        {!this.state.loadMap ? <LoadingSpinner/> :
          <section className="post_ad__body">
            {this.state.loadingDisDur ? <LoadingSpinner /> : ''}
            <div className="products__container container">
              <div className="products__content">
              <div className="products__title">
            
                <h4><a href='/'>Главная</a> / <a href='/cargo/add'>Грузоперевозки</a> / <a href='#' className='gray_font'>Редактирование</a></h4>
                <h1>Редактировать</h1>
             
                <p className="post_ad__title">Укажите желаемые пункты погрузки и выгрузки, параметры
                  <br/>
                  транспортного средства и контактную информацию</p>
              </div>
                <div className="post_ad__adress no_topBorder">
                  <div className="post_ad__adress__wrapper">
                    <div className="post_ad__adress__items">
                 
                      <div className="post_ad__adress__item">
                        <p className="post_ad__par">Откуда</p>
                        <div className="post_ad__adress__item__input">
                          <input className={this.state.address1 ?  `post_ad__input`  : `post_ad__input d-none`}  ref={this.placeInputRef} name='from' type="text" placeholder=""/> 
                          <input className={this.state.address1 ? `d-none`  : ''} value={this.state.fromString} disabled />
                            <a className={this.state.address1 ? 'd-none' : ''} onClick={() => this.setState({address1: true})}>Изменить адрес</a>
                          
                        </div>
                      </div>
                      <div className="post_ad__adress__item">
                        <p className="post_ad__par">Куда</p>
                        <div className="post_ad__adress__item__input">
                        <input className={this.state.address2 ?  `post_ad__input`  : `post_ad__input d-none`}  ref={this.placeInputRef2} name='to' type="text" placeholder=""/> 
                          <input className={this.state.address2 ? `d-none`  : ''} value={this.state.toString} disabled /><br />
                            <a className={this.state.address2 ? 'd-none' : ''} onClick={() => this.setState({address2: true})}>Изменить адрес</a>
                          {/* <input value={this.state.toString} disabled />
                          <button onClick={() => this.setState({address2: true})}>Изменить адрес</button>
                          <input className="post_ad__input" type="text" name='to' ref={this.placeInputRef2} placeholder="Шымкент, Казахстан"/>
                          <i className="fas fa-map-marker-alt"/> */}
                        </div>
                      </div>
                      <div className="post_ad__adress__select__wrappers">
                        <div className="post_ad__adress__item">
                          <p className="post_ad__par">Дата погрузки</p>
                          <div className="post_ad__adress__item__input">
                            <input className="post_ad__input" type="date" value={this.state.startDate}  name='startDate' onChange={this.handleChange} placeholder=""/>
                          
                          </div>
                        </div>
                        <div className="post_ad__adress__item">
                          <p className="post_ad__par">Дата выгрузки</p>
                          <div className="post_ad__adress__item__input">
                            <input className="post_ad__input" type="date" value={this.state.endDate} name='endDate' onChange={this.handleChange} placeholder=""/>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="post_ad__adress__items">
                      <div className="post_ad__adress__item">
                        <p className="post_ad__par">Промежуточные точки</p>
                        <div className="post_ad__adress__item__input">
                          <input className="post_ad__input" type="text" placeholder="Выберите город…"/>
                          <i className="fas fa-map-marker-alt"/>
                        </div>
                        <button className="btn btn--white">ДОБАВИТЬ</button>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="post_ad__chars">
                  <h2 className="post_ad__section_title">Характеристики груза</h2>
                  <div className="post_ad__chars__wrapper">
                    <div className="post_ad__chars__items">
                      <div className="post_ad__chars__item">
                        <p className="post_ad__par">Характер груза</p>
                        <input name='title' className="post_ad__input" value={this.state.title} onChange={this.handleChange} type="text" placeholder=""/>
                      </div>
                      <div className="post_ad__chars__items__inputs">
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Вес груза, тн</p>
                          <input className="post_ad__input" type="text" value={this.state.net} name='net' onChange={this.handleChange}placeholder=""/>
                        </div>
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Объем груза, м³</p>
                          <input className="post_ad__input" value={this.state.volume} name='volume' onChange={this.handleChange} type="text" placeholder=""/>
                        </div>
                      </div>
                    </div>
                    <div className="post_ad__chars__items">
                      <div className="post_ad__chars__items__selects">
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Тип транспорта</p>
                          
                          <select className="post_ad__input">
                            <option >ЖД Рефрижиратор</option>
                          </select>
                        </div>
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Кол-во</p>
                          <input name='quantity' value={this.state.quantity} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Количество"/>
                        </div>
                      </div>
                      <div className="post_ad__chars__items__inputs__container">
                        <p className="post_ad__par">Размер груза, м</p>
                        <div className="post_ad__chars__items__inputs__wrapper">
                          <input name='width' value={this.state.width} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Ширина, м"/>
                          <input name='length' value={this.state.length} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Длина, м"/>
                          <input name='height' value={this.state.height}  onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Высота, м"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post_ad__price">
                  <h2 className="post_ad__section_title">Стоимость перевозки</h2>
                  <div className="post_ad__price__inputs">
                    <div className="post_ad__price__item">
                      <p className="post_ad__par">Цена</p>
                      <input className="post_ad__input" value={this.state.price} name='price' onChange={this.handleChange} type="text" placeholder=""/>
                    </div>
                    <div className="post_ad__price__item">
                      <p className="post_ad__par">Валюта</p>
                      <select className="post_ad__input" value={this.state.priceType} name='priceType' onChange={this.handleChange}>
                        {currencies.map(p => (
                          <option value={p.value}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="post_ad__price__item">
                      <p className="post_ad__par">Способ оплаты</p>
                     
                        <select className="post_ad__input" value={this.state.paymentType} name='paymentType' onChange={this.handleChange}>
                          {paymentType.map(p => (
                            <option value={p.value}>{p.name}</option>
                          ))}
                         </select>
                   
                    
                    </div>
                  </div>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Цена договорная</p>
                  </div>
                  <div className="post_ad__price__checkbox__wrapper">
                    <div className="post_ad__price__checkbox__items">
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" defaultChecked/>
                        <p className="post_ad__par">НДС</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" defaultChecked/>
                        <p className="post_ad__par">При погрузке</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" defaultChecked/>
                        <p className="post_ad__par">На выгрузке</p>
                      </div>
                    </div>
                    <div className="post_ad__price__checkbox__items">
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" defaultChecked/>
                        <p className="post_ad__par">Предоплата</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" defaultChecked/>
                        <p className="post_ad__par">Запрос цены</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" defaultChecked/>
                        <p className="post_ad__par">Торг</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post_ad__aditional">
                  <h2 className="post_ad__section_title">Дополнительная информация</h2>
                  <p className="post_ad__aditional__title">Отметьте и добавьте дополнительную информацию</p>
                  <div className="post_ad__aditional__text">
                    <textarea rows={5} defaultValue={""}/>
                  </div>
                  <div className="post_ad__aditional__checkbox__wrapper">
                    <div className="post_ad__aditional__checkbox__items">
                      <h3>Документы</h3>
                      {documents.map(doc => (
                        <CheckBox name={doc.name} value={doc.value} checked={this.state.docs.get(doc.value)} handleCheckBox={this.handleCheckBox} />
                      ))}
                    </div>
                    <div className="post_ad__aditional__checkbox__items">
                      <h3>Погрузка</h3>
                      {pogruzka.map(pog=> (
                        <CheckBox name={pog.name} value={pog.value} checked={this.state.pogruzki.get(pog.value)} handleCheckBox={this.handleCheckBox}  />
                      ))}
                    </div>
                    <div className="post_ad__aditional__checkbox__items">
                      <h3>Условия </h3>
                      {condition.map(con=> (
                        <CheckBox name={con.name} value={con.value} checked={this.state.condition.get(con.value)} handleCheckBox={this.handleCheckBox}  />
                      ))}
                      <h3 class="margin">Дополнительно</h3>
                      {extra.map(ext=> (
                        <CheckBox name={ext.name} value={ext.value} checked={this.state.extra.get(ext.value)}  handleCheckBox={this.handleCheckBox}/>
                      ))}
                    </div>
                  </div>
                </div>
                <CompanyOnAddInfo />
                <div className="post_ad__btns">
                  <button className="btn" type='submit' onClick={this.handleSubmit}>Редактировать</button>
                  <div className="post_ad__price__checkbox">
                  {this.state.firstTop === true ? <b>Объявление в топе</b> :
                    <>
                    <>
                    <input type="checkbox" checked={this.state.top} onChange={e=> this.handleTop(e)}/>
                    <p className="post_ad__par">Добавить объявление в топ</p>
                    </>
                    </>
                  }
                    </div>
                  
                </div>
            </div>
              <div className="products__aside"></div>
          </div>
        </section>

        }
      </>
    )
  }
}

export default withAuth(connect(null,mapDispatchToProps)(CargoTransportEdit));