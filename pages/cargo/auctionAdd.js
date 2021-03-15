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
import InputMask from 'react-input-mask'
import { deleteFalseKey, parseBoolean } from '../../defaults/extraFunctions'
const mapDispatchToProps = (dispatch) =>({
  successMessage: (msg) => {dispatch(successMessage(msg))},
  errorMessage: (msg) => {dispatch(errorMessage(msg))},
  closeMessage: () => {dispatch(closeMessage)},
})

const DateMask = ({ field, form, ...props }) => <InputMask
  className='post_ad__input'
  mask="99.99.9999"
  onChange={props.onChange}
  name='dateAuction'
  value={props.value}
  maskPlaceholder='Дата начало'
  className="post_ad__input"
  {...field}
  {...props}/>;

const TimeMask = ({ field, form, ...props }) => <InputMask
  mask="99:99"
  className=''
  maskPlaceholder='Время'
  name='timeAuction'
  className="post_ad__input"
  onChange={props.onChange}
  value={props.value}
  {...field}
  {...props}/>;

class AuctionAdd extends React.Component {
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
      dateAuction: '',
      timeAuction: '',
      loadingDisDur: false,
      title: 'title',
      from: '',
      to: '',
      volume: '22',
      net: '86',
      height: '',
      width: '',
      length: '',
      startDate: todaysDate(),
      endDate: todaysDate(),
      price: '200000',
      priceType: 1,
      currency: 1,
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
      negotiable_price: false,
      nds: false,
      when_loading: false,
      prepayment:false,
      bargain: false,
      price_request:false,
      at_unloading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.initPlaceAPI = this.initPlaceAPI.bind(this)
    this.handleOtherCheckBox = this.handleOtherCheckBox.bind(this)
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

  handleOtherCheckBox(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;
    this.setState({
      [name]: isChecked
    })
  }

  handleSubmit(e) {
    this.props.closeMessage();
    var docVals = deleteFalseKey(this.state.docs);
    var loads = deleteFalseKey(this.state.pogruzki);
    var condits = deleteFalseKey(this.state.condition);
    var extras = deleteFalseKey(this.state.extra);

    const formData = new FormData();
    formData.append('token', cookie.get('token'))
    formData.append('documents[]', docVals)
    formData.append('loading[]', loads)
    formData.append('condition[]', condits)
    formData.append('addition[]', extras)
    formData.append('category_id', 1)
    formData.append('sub_id', 1)
    formData.append('date_finish', this.state.dateAuction + " " + this.state.timeAuction)
    formData.append('title', this.state.title)
    formData.append('from_city', this.state.from)
    formData.append('to_city', this.state.to)
    formData.append('volume', this.state.volume)
    formData.append('net', this.state.net)
    formData.append('date_start', this.state.startDate)
    formData.append('date_end', this.state.endDate)
    formData.append('price_type', this.state.priceType)
    formData.append('payment_type', this.state.paymentType)
    formData.append('currency', this.state.currency)
    formData.append('price',this.state.price)
    formData.append('type_transport', this.state.type_transport)
    formData.append('duration', this.state.duration)
    formData.append('distance', this.state.distance)
    formData.append('from_string', this.state.fromString)
    formData.append('to_string', this.state.toString)
    formData.append('negotiable_price', parseBoolean(this.state.negotiable_price))
    formData.append('nds', parseBoolean(this.state.nds))
    formData.append('when_loading', parseBoolean(this.state.when_loading))
    formData.append('prepayment', parseBoolean(this.state.prepayment))
    formData.append('bargain', parseBoolean(this.state.bargain))
    formData.append('price_request', parseBoolean(this.state.price_request))
    formData.append('at_unloading', parseBoolean(this.state.at_unloading))
    console.log(formData  )
    axios.post(`${process.env.BASE_URL}/addAuction`, formData)
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
        
                <h4>Главная / Аукцион / Добавить обьявление</h4>
                <h1>Добавить аукцион</h1>
                <p className="post_ad__title">Укажите срок проведения аукциона, а также всю необходимую
                  <br/>
                  информацию по грузу и транспортировке.</p>
              </div>
              <form >
                <div className="post_ad__adress no_topBorder">
              
                <div className="post_ad__auction__date">
                  <p className="post_ad__par">Дата и время окончания</p>
                  <div className="post_ad__auction__date__wrapper">
                    <div className="post_ad__auction__date__item">
                      <DateMask onChange={this.handleChange} value={this.state.dateAuction}/>
                      <i className="far fa-calendar" />
                    </div>
                    <div className="post_ad__auction__date__item">
                      {/* <input className="post_ad__input" type="text" placeholder="12:00" /> */}
                      <TimeMask onChange={this.handleChange} value={this.state.timeAuction} />
                      <i className="far fa-clock" />
                    </div>
                  </div>
                </div>
                <div className="post_ad__chars">
                  <div className="post_ad__adress__wrapper">
                    <div className="post_ad__adress__items">
                      <div className="post_ad__adress__item">
                      <h2 className="post_ad__section_title">Направление и дата</h2>
                        <p className="post_ad__par">Название</p>
                      </div>
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
                </div>
                <div className="post_ad__chars">
                  <h2 className="post_ad__section_title">Характеристики груза</h2>
                  <div className="post_ad__chars__wrapper">
                    <div className="post_ad__chars__items">
                      <div className="post_ad__chars__item">
                        <p className="post_ad__par">Характер груза</p>
                        <input value={this.state.title} name='title' onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Овощи и фрукты"/>
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
                          <input name='width' onChange={this.handleChange} value={this.state.width} className="post_ad__input" type="text" placeholder="Ширина, м"/>
                          <input name='length' onChange={this.handleChange} value={this.state.length} className="post_ad__input" type="text" placeholder="Длина, м"/>
                          <input name='height' onChange={this.handleChange} value={this.state.height} className="post_ad__input" type="text" placeholder="Высота, м"/>
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
                      <select className="post_ad__input" value={this.state.currency} name='currency' onChange={this.handleChange}>
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
                    <input name='negotiable_price' checked={this.state.negotiable_price} onChange={this.handleOtherCheckBox} type="checkbox"/>
                    <p className="post_ad__par">Цена договорная</p>
                  </div>
                  <div className="post_ad__price__checkbox__wrapper">
                    <div className="post_ad__price__checkbox__items">
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" checked={this.state.nds} name='nds' onChange={this.handleOtherCheckBox}/>
                        <p className="post_ad__par">НДС</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" name='when_loading' checked={this.state.when_loading} onChange={this.handleOtherCheckBox}/>
                        <p className="post_ad__par">При погрузке</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" name='at_unloading' checked={this.state.at_unloading} onChange={this.handleOtherCheckBox}/>
                        <p className="post_ad__par">На выгрузке</p>
                      </div>
                    </div>
                    <div className="post_ad__price__checkbox__items">
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" name='prepayment' value={this.state.prepayment} onChange={this.handleOtherCheckBox}/>
                        <p className="post_ad__par">Предоплата</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" name='price_request' value={this.state.price_request} onChange={this.handleOtherCheckBox}/>
                        <p className="post_ad__par">Запрос цены</p>
                      </div>
                      <div className="post_ad__price__checkbox">
                        <input type="checkbox" name='bargain' value={this.state.bargain} onChange={this.handleOtherCheckBox}/>
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
                        <CheckBox name={pog.name} value={pog.value} checked={this.state.pogruzki.get(pog.value)}  handleCheckBox={this.handleCheckBox}  />
                      ))}
                    </div>
                    <div className="post_ad__aditional__checkbox__items">
                      <h3>Условия </h3>
                      {condition.map(con=> (
                        <CheckBox name={con.name} value={con.value} checked={this.state.condition.get(con.value)}  handleCheckBox={this.handleCheckBox} />
                      ))}
                      <h3 class="margin">Дополнительно</h3>
                      {extra.map(ext=> (
                        <CheckBox name={ext.name} value={ext.value} checked={this.state.extra.get(ext.value)}   handleCheckBox={this.handleCheckBox}/>
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
                  <button onClick={this.handleSubmit} className="btn" type='btn'>Добавить объявление</button>
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

export default (connect(null,mapDispatchToProps)(AuctionAdd));