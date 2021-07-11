import React, {createRef} from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import withAuth from '../../hocs/withAuth'
import CheckBox from '../../components/shared/CheckBox'
import cookie from 'js-cookie'
import * as msgaction from '../../store/actions/messageAction'
import { fireSystems, ventilations } from '../../defaults/checkboxes/documents';
import { loadGoogleMapScript } from '../../defaults/googleMapDefaults';
import { parseBoolean } from '../../defaults/extraFunctions';
import CompanyOnAddInfo from '../../components/company/CompanyOnAddInfo';

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

    loadGoogleMapScript(() => {
      this.setState({
        loadMap: true,
      },() => this.initPlaceAPI())
    })
  }

  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props)
    this.city = createRef();
    this.street = createRef();
    this.state = {
      loadMap: false,
      loading: false,
      area: '',
      image: [],
      class: 1,
      type: 1,
      year: '',
      totalArea: '',
      place: {place_id: '', placeBound: '', formatted_address: ''},
      address: {address_id: '', formatted_address: ''},
      floor: 1,
      floor_type: 1,
      rack: true,
      ramp: true,
      floor_load: '',
      parking_car: '',
      parking_cargo:'',
      price: '200000',
      price_type: 1,
      currency: 1,
      fire_system: new Map(),
      ventilation: new Map(),
      fire_alarm: false,
      security_alarm: false,
      storage_transport_area: false,
      inline_block: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleCheckBoxVent = this.handleCheckBoxVent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOtherCheckBox = this.handleOtherCheckBox.bind(this);
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.removeFile =this.removeFile.bind(this)
  }

  initPlaceAPI() {
    const self = this;
    let viewport = '';
    let autocomplete =  new window.google.maps.places.Autocomplete(this.city.current,
      { types: ['(cities)'], });
    
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
        let address_string = '';
        let address_map = new Map();
        place.address_components.forEach(el=>{
          address_map.set(el.long_name, el.long_name);
        })
        address_string = Array.from(address_map.keys()).join(',')
        self.setState({address: 
          { address_id: place.place_id,
            formatted_address: address_string,
          }
        })
      });
    });

      
  }

    handleSubmit(e) {
      
      e.preventDefault()
      console.log(this.state.image)
      var fs = Array.from(this.state.fire_system.keys()).join(",");
      var vent = Array.from(this.state.ventilation.keys()).join(",");
      
      
      // console.log(finalImgs)
      const formData = new FormData();
      formData.append('token', cookie.get('token'));
      formData.append('area', this.state.area);
      formData.append('image', this.state.image);
      formData.append('class', this.state.class);
      formData.append('type', this.state.type);
      formData.append('price', this.state.price);
      formData.append('price_type', this.state.price_type);
      formData.append('currency', this.state.currency);
      formData.append('year', this.state.year);
      formData.append('totalArea', this.state.totalArea);
      formData.append('city_id', this.state.place.place_id);
      formData.append('address', this.state.address.address_id);
      formData.append('region', this.state.address.formatted_address);
      formData.append('floor', this.state.floor);
      formData.append('floor_type', this.state.floor_type);
      formData.append('rack', parseBoolean(this.state.rack));
      formData.append('ramp', parseBoolean(this.state.ramp));
      formData.append('floor_load', this.state.floor_load);
      formData.append('parking_car', this.state.parking_car);
      formData.append('parking_cargo', this.state.parking_cargo);
      formData.append('fire_system[]', fs);
      formData.append('ventilation[]', vent);
      formData.append('fire_alarm', parseBoolean(this.state.fire_alarm));
      formData.append('security_alarm', parseBoolean(this.state.security_alarm));
      formData.append('storage_transport_area', parseBoolean(this.state.storage_transport_area));
      formData.append('inline_block', parseBoolean(this.state.inline_block));
      
      this.setState({loading: true})
      axios.post(`${process.env.BASE_URL}/addStorage`, formData)
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
        console.log(error.response.data.status)
        this.setState({loading: false, message: 'Ошибка'})
        this.props.errorMessage('Что то пошло не так')
      });

    }

    handleCheckBox(e) {
      const item = e.target.value;
      const isChecked = e.target.checked;
      const mp = this.state.fire_system
      // var ks = Array.from(this.state.fire_system.keys()).join(",");
      // console.log(ks)
      this.setState(prevState => ({ fire_system: prevState.fire_system.set(item, isChecked) }));
    }
    handleCheckBoxVent(e) {
      const item = e.target.value;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ ventilation: prevState.ventilation.set(item, isChecked) }));
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(this.state.area)
      this.setState({
        [name]: value
      });
    }

    handleOtherCheckBox(e) {
      const name = e.target.name;
      const isChecked = e.target.checked;
      this.setState({
        [name]: isChecked
      })
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
            <h4><a href='/'>Главная</a> / <a href='/storage'>Склады</a> / <a href='#' className='gray_font'>Добавить обьявление</a></h4>
              <h1>Добавить склад</h1>
              <p className="post_ad__title">Укажите параметры складского помещения и контактную <br /> информацию.</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="post_ad__storage__photos">
                <h2 className="post_ad__section_title">Фотографии склада</h2>
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
                <h2 className="post_ad__section_title">Характеристики склада</h2>
                <div className="post_ad__storage__chars__wrapper">
                  <div className="post_ad__storage__chars__items">
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Площадь, м2</p>
                      <input type='number' name='area' className="post_ad__input" value={this.state.area} onChange={this.handleChange} />
                    </div>
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Общ. площадь, м2</p>
                      <input name='totalArea' className="post_ad__input" type="number" value={this.state.totalArea} onChange={this.handleChange}  />
                    </div>  
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Класс</p>
                      <select name='class' className="post_ad__input" value={this.state.class} onChange={this.handleChange}>
                        <option value='1'>B+</option>
                        <option value='2'>A+</option>
                      </select>
                    </div>
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Тип склада</p>
                      <select name='type' className="post_ad__input" value={this.state.type} onChange={this.handleChange}>
                        <option value='1'>Сухой (+14/+24)</option>
                      </select>
                    </div>
                  </div>
                  <div className="post_ad__storage__chars__items">
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Год постройки, г</p>
                      <input name='year' className="post_ad__input" type="number" value={this.state.year} onChange={this.handleChange}  />
                    </div>
                    
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Город/Регион</p>
                      <div className="post_ad__storage__chars__item__input">
                        <input name='city_id' ref={this.city} className="post_ad__input" type="text" placeholder=" " />
                        <i className="fas fa-map-marker-alt" />
                      </div>
                    </div>
                  </div>
                  <div className="post_ad__storage__chars__items">
                  <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Адрес</p>
                      <div className="post_ad__storage__chars__item__input">
                        <input name='address' disabled={this.state.place.place_id != '' ? false : true}ref={this.street} className="post_ad__input" type="text" placeholder=" " />
                        <i className="fas fa-map-marker-alt" />
                      </div>
                    </div>
                  </div>
                  <div className="post_ad__storage__chars__items">
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Этажность</p>
                      <select  onChange={this.handleChange} value={this.state.floor} name='floor' className="post_ad__input">
                        <option>1 этаж</option>
                      </select>
                    </div>
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Паркинг, груз. авто</p>
                      <input name='parking_cargo' onChange={this.handleChange} value={this.state.parking_cargo} className="post_ad__input" type="text" placeholder="" />
                    </div>
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Паркинг, легк. авто</p>
                      <input name='parking_car' onChange={this.handleChange} value={this.state.parking_car} className="post_ad__input" type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="post_ad__storage__chars__items">
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Тип пола</p>
                      <select name='floor_type' value={this.state.floor_type} onChange={this.handleChange} className="post_ad__input">
                        <option>Бетонный</option>
                      </select>
                    </div>
                    <div className="post_ad__storage__chars__item">
                      <p className="post_ad__par">Нагрузка на пол</p>
                      <input name='floor_load' onChange={this.handleChange} value={this.state.floor_load} className="post_ad__input" type="text" placeholder="" />
                    </div>
                    <div className="post_ad__storage__chars__item margin">
                      <p className="post_ad__par">Стеллажи</p>
                      <div className="post_ad__price__checkbox noMargin">
                        <input name='rack' type="checkbox" checked={this.state.rack} onChange={this.handleOtherCheckBox} />
                        <p className="post_ad__par">Установлены</p>
                      </div>
                    </div>
                    <div className="post_ad__storage__chars__item margin">
                      <p className="post_ad__par">Пандус </p>
                      <div className="post_ad__price__checkbox noMargin">
                        <input name='ramp' type="checkbox" checked={this.state.ramp} onChange={this.handleOtherCheckBox}  />
                        <p className="post_ad__par">Есть</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_ad__aditional">
                <h2 className="post_ad__section_title storage_additional__title">Дополнительная информация</h2>
                <div className="post_ad__aditional__checkbox__wrapper">
                  <div className="post_ad__aditional__checkbox__items">
                    <h3>Система пожаротушения</h3>
                    {fireSystems.map(f=> (
                      <CheckBox name={f.name.replace(/(\S+\s*){1,2}/g, "$&\n")} value={f.id} checked={this.state.fire_system.get(f.id)} handleCheckBox={this.handleCheckBox} />
                    ))}
                  </div>
                  <div className="post_ad__aditional__checkbox__items">
                    <h3>Вентиляция</h3>
                    {ventilations.map(v=> (
                      <CheckBox name={v.name} value={v.id} checked={this.state.ventilation.get(v.id)} handleCheckBox={this.handleCheckBoxVent} />
                    ))}
                  </div>
                  <div className="post_ad__aditional__checkbox__items">
                    <h3>Пожарная сигнализация</h3>
                    <div className="post_ad__price__checkbox">
                      <input checked={this.state.fire_alarm} onChange={this.handleOtherCheckBox} name='fire_alarm' type="checkbox" />
                      <p className="post_ad__par">Есть</p>
                    </div>
                    <h3 className="margin">Охранная сигнализация</h3>
                    <div className="post_ad__price__checkbox">
                      <input checked={this.state.security_alarm} onChange={this.handleOtherCheckBox} name='security_alarm' type="checkbox" />
                      <p className="post_ad__par">Есть</p>
                    </div>
                    <h3 className="margin">Площадка для отстоя и <br /> маневрирования транспорта</h3>
                    <div className="post_ad__price__checkbox">
                      <input checked={this.state.storage_transport_area} onChange={this.handleOtherCheckBox} name='storage_transport_area' type="checkbox" />
                      <p className="post_ad__par">Есть</p>
                    </div>
                    <h3 className="margin">Встроенные блоки офисных <br /> помещений</h3>
                    <div className="post_ad__price__checkbox">
                      <input checked={this.inline_block} onChange={this.handleOtherCheckBox} name='inline_block' type="checkbox" />
                      <p className="post_ad__par">Есть</p>
                    </div>
                  </div>
                </div>
                <div className="post_ad__storage__comment">
                  <h2 className="post_ad__section_title">Инфраструктура</h2>
                  <div className="post_ad__aditional__text">
                    <textarea placeholder="Расскажите, о инфраструктуре склада" rows={5} defaultValue={""} />
                  </div>
                </div>
              </div>
              <CompanyOnAddInfo />
              <div className="post_ad__btns">
                <button className="btn" type='submit'>Добавить объявление</button>
                <div className="post_ad__price__checkbox">
                  <input type="checkbox" />
                  <p className="post_ad__par">Добавить объявление в топ</p>
                </div>
              </div>
            </form>
          </div>
          <div className="products__aside">
          </div>
        </div>
      </section>
         
      )
    }
}

export default withAuth(connect(null,mapDispatchToProps)(AddPost))