import axios from 'axios'
import React, {createRef} from 'react'
import {connect} from 'react-redux'
import { closeMessage, errorMessage, successMessage } from '../../store/actions/messageAction'
import { currencies, paymentType, todaysDate } from '../../defaults/defaults'
import { loadGoogleMapScript } from '../../defaults/googleMapDefaults'
import cookie from 'js-cookie'
import CompanyOnAddInfo from '../../components/company/CompanyOnAddInfo'
import withAuth from '../../hocs/withAuth'


const mapDispatchToProps = (dispatch) =>({
  successMessage: (msg) => {dispatch(successMessage(msg))},
  errorMessage: (msg) => {dispatch(errorMessage(msg))},
  closeMessage: () => {dispatch(closeMessage)},
})
class EquipmentAdd extends React.Component  {
  componentDidMount() {
    axios.get(`${process.env.BASE_URL}/getEquipmentCategory`)
    .then(res=> {
      this.setState({eqCategories: res.data})
    })

    loadGoogleMapScript(() => {
      this.setState({
        loadMap:true,
      },() =>this.initPlaceAPI())
    })
  }

  
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.city = createRef();
    this.street = createRef();
    this.state = {
      loadMap: false,
      loading: false,
      eqCategories: [],
      type_equipment: 1,
      category_id: 1,
      name: 1,
      image: [],
      net: '',
      type_blade: 1,
      year: '',
      power: '',
      place: {place_id: 'фывфывфывф', placeBound: '', formatted_address: ''},
      address: {address_id: 'вфвфывфывфв', formatted_address: ''},
      height: '',
      width: 1,
      rise: '',
      deep: '',
      description: '',
      parking_car: '',
      parking_cargo:'',
      price: '200000',
      currency: 1,
      forHour: true,
      forMonth: false,
      equipment_rent: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOtherCheckBox = this.handleOtherCheckBox.bind(this)
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.initPlaceAPI = this.initPlaceAPI.bind(this)
  }
  initPlaceAPI() {
    const self = this;
    let viewport = '';
    let autocomplete =  new window.google.maps.places.Autocomplete(this.city.current,
      { types: ['(cities)'], componentRestrictions: {country: ['kz', 'ru']}});
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      console.log(place)
      viewport = place.geometry.viewport
      self.setState({place: {
        place_id: place.place_id,
        placeBound: place.geometry.viewport,
        formatted_address: place.formatted_address
      }})

      let autocomplete2 =  new window.google.maps.places.Autocomplete(self.street.current,
        {bounds: viewport,
          types: ['geocode'],
          radius: 0,
          origin: 'center',
          strictBounds: true });
      new window.google.maps.event.addListener(autocomplete2, "place_changed", function () {
        let place = autocomplete2.getPlace();
        console.log(place)
        self.setState({address: 
          { address_id: place.place_id,
            formatted_address: place.formatted_address,
          }
        })
      });
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }


  handleSubmit(e) {
    this.props.closeMessage()
    let eq_rent = this.state.forHour === true ? 0 : 1;
    axios.post(`${process.env.BASE_URL}/addEquipment`, {
      token:cookie.get('token'),
      type_equipment:this.state.type_equipment,
      category_id:this.state.category_id,
      name:this.state.name,
      city_id:this.state.place.place_id,
      address:this.state.address.address_id,
      net:this.state.net,
      year:this.state.year,
      type_blade:this.state.type_blade,
      power:this.state.power,
      height:this.state.height,
      width:this.state.width,
      rise:this.state.rise,
      deep:this.state.deep,
      description:this.state.description,
      price:this.state.price,
      currency:this.state.currency,
      equipment_rent:this.state.equipment_rent,
      image: this.state.image
    })
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
  

  handleOtherCheckBox(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;
    if(name=== 'forHour') {
      this.setState({
        forHour: true
      })

      this.setState({
        forMonth : false
      })
    }
    if(name==='forMonth') {
      this.setState({
        forMonth: true
      })

      this.setState({
        forHour : false
      })
    }
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files)
    for (let i = 0; i < this.fileObj[0].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    // this.setState({ image: this.fileObj})
    let file = [];
    file = this.state.image;
    file.push(e.target.files[0]);
    // this.setState({ image: file})
    this.setState({image: e.target.files[0]})
  }
  removeFile(event) {
    this.fileArray.splice(0, 1)
    this.fileObj.splice(0, 1)
    this.setState({ image: this.fileObj })
  }

  render() {
    return (
      <section className="post_ad__body">
        <div className="products__container container">
          <div className="products__content">
            <div className="products__title">
              <h4>Главная / Спецтехника / Добавить обьявление</h4>
              <h1>Добавить обьявление</h1>
              <p className="post_ad__title">Укажите параметры техники и контактную информацию.</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="post_ad__storage__photos">
                <h2 className="post_ad__section_title">Фотографии техники</h2>
                <div className="post_ad__storage__photos__wrapper">
                  
                    {(this.fileArray || []).map((link, index) => (
                    <div key={index} className="post_ad__storage__photo__item">
                      <img  src={link}  alt="..." />
                      <i name='name' value='value' onClick={this.removeFile} value={index} className="fas fa-times-circle" />
                    </div>
                    ))}
     
                </div>
                <div className="fileUpload">
                  <input type="file" className="upload" onChange={this.uploadMultipleFiles} accept="image/*"/>
                  <span>Добавить фото</span>
                </div>
              </div>
              <div className="post_ad__storage__chars">
                <h2 className="post_ad__section_title">Характеристики</h2>
                <div className="post_ad__equipment__chars">
                  <div className="post_ad__equipment__chars__wrapper__container">
                    <div className="post_ad__equipment__chars__wrapper">
                      <div className="post_ad__equipment__chars__type">
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Тип</p>
                          <select name='category_id' value={this.state.category_id} onChange={this.handleChange} className="post_ad__input">
                            {this.state.eqCategories.map(e=> (
                              <option value={e.id}>{e.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p name='type_equipment' value={this.state.type_equipment} onChange={this.handleChange} className="post_ad__par">Тип склада</p>
                          <select className="post_ad__input">
                            <option>Бульдозеры</option>
                          </select>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Название/модель</p>
                          <select value={this.state.name} onChange={this.handleChange} name='name'  className="post_ad__input">
                            <option value='1'>JCB 5010K</option>
                          </select>
                        </div>
                      </div>
                      <div className="post_ad__equipment__chars__adress">
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Регион</p>
                          <select className="post_ad__input">
                            <option>Казахстан</option>
                          </select>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          
                          <p className="post_ad__par">Город</p>
                          <input name='city_id' ref={this.city} className="post_ad__input" type="text" placeholder="Казахстан, Алматы" />
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Район</p>
                          <input name='address' disabled={this.state.place.place_id != '' ? false : true}ref={this.street} className="post_ad__input" type="text" placeholder="ул. Розыбакиева 17А, Алматы, Казахстан" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post_ad__equipment__chars__wrapper__container">
                    <div className="post_ad__equipment__chars__wrapper">
                      <div className="post_ad__equipment__chars__details1">
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Масса, тн</p>
                          <input name='net' value={this.state.net} onChange={this.handleChange} className="post_ad__input" type="text" placeholder={18}/>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Год выпуска</p>
                          <input name='year' onChange={this.handleChange} value={this.state.year} className="post_ad__input" type="text" placeholder={2008}/>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Тип отвала</p>
                          <select name='type_blade' value={this.state.type_blade} onChange={this.handleChange} className="post_ad__input">
                            <option value='1'>С неповоротным отвалом</option>
                          </select>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Мощн. двигателя, кВт
                          </p>
                          <input name='power' value={this.state.power} onChange={this.handleChange} className="post_ad__input" type="text" placeholder={3200}/>
                        </div>
                      </div>
                      <div className="post_ad__equipment__chars__details2">
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Ширина отвата, м</p>
                          <input name='width' value={this.state.width} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Ширина, м"/>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Высота отвата, м</p>
                          <input name='height' value={this.state.height} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Высота, м"/>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Подъем отвата, м</p>
                          <input name='rise' value={this.state.rise} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Подъем, м"/>
                        </div>
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Заглубление, см</p>
                          <input name='deep' value={this.state.deep} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="Заглубление, см"/>
                        </div>
                      </div>
                      <div className="post_ad__equipment__chars__desc">
                        <div className="post_ad__equipment__chars__item">
                          <p className="post_ad__par">Предназначение (описание)</p>
                          <input
                            name='description'
                            className="post_ad__input"
                            type="text"
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="Для землеройных работ в любых погодных условиях"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post_ad__equipment__chars__wrapper__container">
                    <h2 className="post_ad__section_title price_title">Стоимость</h2>
                    <div className="post_ad__equipment__price__wrapper">
                      <div className="post_ad__equipment__chars__item">
                        <p className="post_ad__par">Цена</p>
                        <input name='price' value={this.state.price} onChange={this.handleChange} className="post_ad__input" type="text" placeholder="150 680"/>
                      </div>
                      <div className="post_ad__equipment__chars__item">
                        <p className="post_ad__par">Валюта</p>
                        <select name='currency' value={this.state.currency} onChange={this.handleChange} className="post_ad__input">
                          {currencies.map(p => (
                            <option value={p.value}>{p.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="post_ad__equipment__price__radio">
                        <input name='forHour' checked={this.state.forHour} onChange={this.handleOtherCheckBox} type="checkbox" />
                        <p className="post_ad__par">за 1 час</p>
                      </div>
                      <div className="post_ad__equipment__price__radio">
                        <input name='forMonth'  checked={this.state.forMonth} onChange={this.handleOtherCheckBox} type="checkbox"/>
                        <p className="post_ad__par">за 1 км</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CompanyOnAddInfo />
              <div className="post_ad__btns">
                <button type='submit' className="btn">Добавить объявление</button>
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
  
    )
  }

}
export default withAuth(connect(null, mapDispatchToProps)(EquipmentAdd));