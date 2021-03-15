import React, {createRef} from 'react'
import axios from 'axios'
import cookie from 'js-cookie'
import {documents, pogruzka, condition, extra} from '../../defaults/checkboxes/documents'
import CheckBox from '../../components/shared/CheckBox'
import { closeMessage, errorMessage, successMessage } from '../../store/actions/messageAction'
import {connect} from 'react-redux'
import { todaysDate } from '../../defaults/defaults'
import { loadGoogleMapScript } from '../../defaults/googleMapDefaults'
import LoadingSpinner from '../../components/shared/others/LoadingSpinner'
import { deleteFalseKey } from '../../defaults/extraFunctions'

const mapDispatchToProps = (dispatch) =>({
  successMessage: (msg) => {dispatch(successMessage(msg))},
  errorMessage: (msg) => {dispatch(errorMessage(msg))},
  closeMessage: () => {dispatch(closeMessage)},
})

class CargoAdd extends React.Component {
  componentDidMount(){
    loadGoogleMapScript(() => {
      this.setState({
        loadMap: true,
      },() => this.initPlaceAPI())
    })
  }

  constructor(props) {
    super(props);
    this.placeInputRef = createRef();
    this.placeInputRef2 = createRef();
    this.state = {
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
      price: '100',
      priceType: 1,
      paymentType: 1,
      type_transport:1,
      docs: new Map(),
      pogruzki: new Map(),
      condition: new Map(),
      extra: new Map(),
      distance: '',
      duration: '',
      fromString: '',
      toString: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.initPlaceAPI = this.initPlaceAPI.bind(this)
  }

  initPlaceAPI() {
    const self = this;
    let autocomplete =  new window.google.maps.places.Autocomplete(this.placeInputRef.current,
      { types: ['(cities)'], componentRestrictions: {country: ['kz', 'ru']}});
    let autocomplete2 =  new window.google.maps.places.Autocomplete(this.placeInputRef2.current,
      { types: ["(cities)"], componentRestrictions: { country: ["kz", "ru"] } });
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
      axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${p1}&destination=place_id:${p2}&key=${process.env.GOOGLE_MAP_API_KEY}`,
      {headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      }}
      )
        .then(res => {
          if(res.status ===200) {
            this.setState({
              loadingDisDur: false,
              distance: res.data.routes[0].legs[0].distance.text,
              duration:res.data.routes[0].legs[0].duration.text
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

  handleSubmit(e) {
    this.props.closeMessage();
    var docVals = deleteFalseKey(this.state.docs);
    var loads = deleteFalseKey(this.state.pogruzki);
    var condits = deleteFalseKey(this.state.condition)
    var extras = deleteFalseKey(this.state.extra)
    axios.get(`${process.env.BASE_URL}/newAddPost?documents[]=${docVals}&loading[]=${loads}&condition[]=${condits}&addition[]=${extras}`, {params: {
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
      price_type: this.state.priceType,
      payment_type: this.state.paymentType,
      price: this.state.price,
      type_transport: this.state.type_transport,
      duration: this.state.duration,
      distance: this.state.distance,
      from_string: this.state.fromString,
      to_string: this.state.toString,
    }})
      .then(res => {
        if(res.data.success) {
          this.props.successMessage('Успешно добавлен пост')
          console.log('posted')
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
        
                <h4>Главная / Грузоперевозки / Добавить обьявление</h4>
                <h1>Добавить груз</h1>
                <p className="post_ad__title">Укажите желаемые пункты погрузки и выгрузки, параметры
                  <br/>
                  транспортного средства и контактную информацию</p>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="post_ad__adress no_topBorder">
                  <div className="post_ad__adress__wrapper">
                    <div className="post_ad__adress__items">
                 
                      <div className="post_ad__adress__item">
                        <p className="post_ad__par">Откуда</p>
                        <div className="post_ad__adress__item__input">
                          <input className="post_ad__input" ref={this.placeInputRef} name='from' type="text" placeholder="Алматы, Казахстан"/>
                          <i className="fas fa-map-marker-alt"/>
                        </div>
                      </div>
                      <div className="post_ad__adress__item">
                        <p className="post_ad__par">Куда</p>
                        <div className="post_ad__adress__item__input">
                          <input className="post_ad__input" type="text" name='to' ref={this.placeInputRef2} placeholder="Шымкент, Казахстан"/>
                          <i className="fas fa-map-marker-alt"/>
                        </div>
                      </div>
                      <div className="post_ad__adress__select__wrappers">
                        <div className="post_ad__adress__item">
                          <p className="post_ad__par">Дата погрузки</p>
                          <div className="post_ad__adress__item__input">
                            <input className="post_ad__input" type="date" value={this.state.startDate}  name='startDate' onChange={this.handleChange} placeholder="28.04.2020"/>
                          
                          </div>
                        </div>
                        <div className="post_ad__adress__item">
                          <p className="post_ad__par">Дата выгрузки</p>
                          <div className="post_ad__adress__item__input">
                            <input className="post_ad__input" type="date" value={this.state.endDate} name='endDate' onChange={this.handleChange} placeholder="28.04.2020"/>
                        
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
                        <input name='title' className="post_ad__input" value={this.state.title} onChange={this.handleChange} type="text" placeholder="Овощи и фрукты"/>
                      </div>
                      <div className="post_ad__chars__items__inputs">
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Вес груза, тн</p>
                          <input className="post_ad__input" type="text" value={this.state.net} name='net' onChange={this.handleChange}placeholder="22 тн"/>
                        </div>
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Объем груза, м³</p>
                          <input className="post_ad__input" value={this.state.volume} name='volume' onChange={this.handleChange} type="text" placeholder="86 м³"/>
                        </div>
                      </div>
                    </div>
                    <div className="post_ad__chars__items">
                      <div className="post_ad__chars__items__selects">
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Тип транспорта</p>
                          <select className="post_ad__input">
                            <option>ЖД Рефрижиратор</option>
                          </select>
                        </div>
                        <div className="post_ad__chars__item">
                          <p className="post_ad__par">Кол-во</p>
                          <select className="post_ad__input">
                            <option>1</option>
                            <option>2</option>
                          </select>
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
                      <input className="post_ad__input" value={this.state.price} name='price' onChange={this.handleChange} type="text" placeholder="150 680"/>
                    </div>
                    <div className="post_ad__price__item">
                      <p className="post_ad__par">Валюта</p>
                      <select className="post_ad__input" value={this.state.priceType} name='priceType' onChange={this.handleChange}>
                        <option value='1'>Тенге, KZT</option>
                      </select>
                    </div>
                    <div className="post_ad__price__item">
                      <p className="post_ad__par">Способ оплаты</p>
                      <select className="post_ad__input" value={this.state.paymentType} name='paymentType' onChange={this.handleChange}>
                        <option value='1'>Безналичный</option>
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
                <div className="post_ad__about_company">
                  <h2 className="post_ad__section_title">О компании</h2>
                  <div className="post_ad__about_company__wrapper">
                    <div className="post_ad__about_company__title">
                      <div className="post_ad__about_company__title__img">
                        <img src="/img/widgets/company_icon.png" alt/>
                      </div>
                      <div className="post_ad__about_company__title__name">
                        <h3>ТОО «ОУСА Альянс»</h3>
                        <p>Айсулу А.Л.</p>
                        <span>Экспедитор</span>
                      </div>
                    </div>
                    <div className="post_ad__about_company__contacts">
                      <i className="fas fa-phone-alt"/>
                      <div className="post_ad__about_company__contacts__content">
                        <a href="#">+7 702 360 70 20</a>
                        <a href="#">+7 727 360 70 30</a>
                      </div>
                    </div>
                    <div className="post_ad__about_company__contacts">
                      <i className="far fa-envelope"/>
                      <a href="#">aisulu@ousa-al.kz</a>
                    </div>
                  </div>
                </div>
                <div className="post_ad__btns">
                  <button className="btn" type='submit'>Добавить объявление</button>
                  <div className="post_ad__price__checkbox">
                    <input type="checkbox"/>
                    <p className="post_ad__par">Добавить объявление в топ</p>
                  </div>
                </div>
              </form>
            </div>
              <div className="products__aside"></div>
          </div>
        </section>

        }
      </>
    )
  }
}

export default (connect(null,mapDispatchToProps)(CargoAdd));