
import React, { useEffect, useRef, useState } from 'react'
import {useRouter} from 'next/router'
import $ from 'jquery'
import axios from 'axios'
import {eqCategories} from '../../defaults/eqCategories'
import cookie from 'js-cookie'
const Filter = ({
  onChangeCategory,
  setPosts,
  setTotal,
  setCurrentPage,
  setLoading,
  queryFilter,
  fromString,
  setMaxPage,
  fromId,
  selectType,
  onSelectType,
  mobileFilter,
  toString,
  onFilterMobile,
  currentPlace_id,
  currentPlace_name,
  toId}) => {
  const router  = useRouter()
  const pathname = router.pathname;
  const {id} = router.query
  const {from_string} = router.query;
  const {from_id} = router.query;
  const {to_string} = router.query;
  const {area_start} = router.query;
  const {year_start} = router.query;
  const {year_end} = router.query;
  const {area_end} = router.query;
  const {price_start} = router.query
  const {price_end} = router.query;
  const [fromInput, setFromInput] = useState('')
  const [area,setArea] = useState({areaStart: '',areaEnd:''})
  const [price,setPrice] = useState({priceStart: '',priceEnd:''})
  const [year,setYear] = useState({yearStart: '', yearEnd: ''})
  const [toInput,setToInput] = useState('')
  const [addressFrom,setAddressFrom] = useState({address_string: fromString || from_string || currentPlace_name ||  '', address_id: fromId || from_id || currentPlace_id || '',})
  const [addressTo,setAddressTo] = useState({address_string: toString || '', address_id: toId || '',})
  const fromRef = useRef(null)
  const toRef = useRef(null)
  const currentPath = router.pathname;

  
  useEffect(() => {
    initPlaceAPI()
    $('.big_filter_btn').click(function(){
      $('.main_filter__big').toggleClass('active');
    });
  
  },[])

  useEffect(() => {
    onSearch(
      addressFrom.address_id,
      addressTo.address_id,
      addressFrom.address_string,
      addressTo.address_string,
      area.areaStart,
      area.areaEnd,
      price.priceStart,
      price.priceEnd,
    )
  },[addressFrom,addressTo])

  useEffect(() => {
    if(area.areaStart === '' && area.areaEnd=== '') {
      onSearch(
        addressFrom.address_id,
        addressTo.address_id,
        addressFrom.address_string,
        addressTo.address_string,
        area.areaStart,
        area.areaEnd,
        price.priceStart,
        price.priceEnd,
      )
    }
  },[area])

  
  useEffect(() => {
    if(price.priceStart === '' && price.priceEnd=== '') {
      onSearch(
        addressFrom.address_id,
        addressTo.address_id,
        addressFrom.address_string,
        addressTo.address_string,
        area.areaStart,
        area.areaEnd,
        price.priceStart,
        price.priceEnd,

      )
    } 
  },[price])
  
  useEffect(() => {
    if(year.yearStart === '' && year.yearEnd=== '') {
      onSearch(
        addressFrom.address_id,
        addressTo.address_id,
        addressFrom.address_string,
        addressTo.address_string,
        area.areaStart,
        area.areaEnd,
        price.priceStart,
        price.priceEnd,
      )
    } 
  },[year])
  const fixPath = (queries, newQueries) => {
    delete queries.page
    if(!addressFrom.address_id) {
      delete queries.from_id;
      delete queries.from_string;
    }
    if(!addressTo.address_id) {
      delete queries.to_id;
      delete queries.to_string;
    }
    if(!area.areaStart) {
      delete queries.area_start
    }
    if(!area.areaEnd) {
      delete queries.area_end
    }
    if(!price.priceStart) {
      delete queries.price_start;
    }
    if(!price.priceEnd) {
      delete queries.price_end;
    }
    if(!year.yearStart) {
      delete queries.year_start;
    }
    if(!year.yearEnd) {
      delete queries.year_end;
    }

    if(addressFrom.address_id) {
      newQueries.from_id = addressFrom.address_id;
      newQueries.from_string = addressFrom.address_string;
    }
    if(addressTo.address_id) {
      newQueries.to_id = addressTo.address_id;
      newQueries.to_string = addressTo.address_string;
    }
    if(area.areaStart) {
      newQueries.area_start = area.areaStart
    }
    if(area.areaEnd) {
      newQueries.area_end = area.areaEnd
    }
    if(price.priceStart) {
      newQueries.price_start = price.priceStart
    }
    if(price.priceEnd) {
      newQueries.price_end = price.priceEnd
    }
    if(year.yearStart) {
      newQueries.year_start = year.yearStart
    }
    if(year.yearEnd) {
      newQueries.year_end = year.yearEnd
    }
    setLoading(true);
    const filterPath = () => {
      let pathname = router.pathname
      if(pathname === '/cargo/transport') {
        return "filterCargo"
      }
      if(pathname === '/cargo') {
        return "filterPost"
      }
    }
    const finalPath = filterPath()
    axios.get(`${process.env.BASE_URL}/filterEquipment`, {params: {
      city_id: addressFrom.address_id,
      net_start: area.areaStart,
      net_end: area.areaEnd,
      price_start: price.priceStart,
      price_end: price.priceEnd,
      year_start: year.yearStart,
      year_end: year.yearEnd
    }})
    .then(res=> {
      setLoading(false);
      setPosts(res.data.data)
      setCurrentPage(res.data.page)
      setTotal(res.data.total)
      setMaxPage(res.data.count)
      router.push({path: pathname, query: {...queries, ...newQueries}})
    })
  }

  const onSearch = () => {
    const queries = router.query;
    const newQueries = {};
    fixPath(queries,newQueries);
    onFilterMobile()
    // 
  }

  const onClearFilter = () => {
    setTimeout(() => {
      location.reload()
    }, 200)
    if(currentPath === '/cargo') {
      router.push('/cargo')
    }else {
      router.push('/cargo/transport')
    }
    
  }
   function clearAddressInput(e) {
    let name = e.target.id;
    if(name==="from") {
      setFromInput("")
      setAddressFrom({address_string: "", address_id: ""})
    }
    if(name === "area") {
      setArea({areaStart: "", areaEnd: ""})
    }
    if(name === "price") {
      setPrice({priceStart: "", priceEnd: ""})
    }
    if(name==="to") {
      setAddressTo({address_string: "", address_id: ""})
    }
    if(name === "year") {
      setYear({yearStart: "", yearEnd: ""})
    }
  }
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(fromRef.current,
      { types: ["(cities)"], });

    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      setFromInput('')
      setAddressFrom({address_string: place.formatted_address, address_id: place.place_id})
    });

  };

  return (
    <div className="main_filter filter_mobile">
      <div className='close_filter' onClick={() => onFilterMobile()}>✖</div>
      <div className="main_filter__content container">
        <div className="main_filter__top">
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Город</h4>
              <div className="filter__item__form address_input">
                <input type="text" value={fromInput} onChange={(e) => setFromInput(e.target.value)} placeholder={addressFrom.address_string || 'Город'} ref={fromRef}/>
                <div className="hr"/>
                <div className='margin_val'>
                <button onClick={() => onClearFilter()}>Сбросить</button>
                <button type="button" className="big_filter_btn">Все фильтры</button>
                </div>
              </div>
            </div>
            <div className="main_filter__top__item">
            <div className="filter__item__title">
              <br></br>
              <h4>Спецтехника</h4>
              <div className="filter__item__form type_transports">
                {eqCategories.map(cat=> (
                  <a onClick={() => onChangeCategory(cat.name, cat.id)} key={cat.id} className={queryFilter === cat.name ? 'active' : ''}>{cat.name}</a>
                ))}
              </div>
              <div className='filter__item__form select_transports'>
                <select value={selectType} onChange={e=> onSelectType(e)}>
                  {eqCategories.map(cat=> (
                    <option name={cat.name} value={cat.id}>{cat.name}</option>
                ))}
                </select>
              </div>
            </div>
          </div>
          </div>
        </div>
        <form className="main_filter__big">
          <div className="main_filter__big__items">
            <div className="main_filter__big__item">
              <label>Площадь</label>
              <div className='main_filter__big__item_inputs'>
              <input type="number" value={area.areaStart} onChange={(e)=>{setArea({areaStart: e.target.value, areaEnd:area.areaEnd})}} placeholder="от" />
              <p>-</p>
              <input type="number" value={area.areaEnd} onChange={(e) => {setArea({areaStart: area.areaStart, areaEnd: e.target.value})}} placeholder="до" />
              </div>
            </div>
            <div className="main_filter__big__item">
              <label>Цена</label>
              <div className='main_filter__big__item_inputs'>
              <input type="number" value={price.priceStart} onChange={(e) => setPrice({priceStart: e.target.value, priceEnd: price.priceEnd})} placeholder=" от" />
              <p>-</p>
              <input type="number" value={price.priceEnd} placeholder=" до" onChange={(e) => setPrice({priceStart: price.priceStart, priceEnd: e.target.value})}/>
              </div>
            </div>
            <div className="main_filter__big__item">
              <label>Год</label>
              <div className='main_filter__big__item_inputs'>
              <input type="number" value={year.yearStart} onChange={(e) => setYear({yearStart: e.target.value, yearEnd: year.yearEnd})} placeholder=" от" />
              <p>-</p>
              <input type="number" value={year.yearEnd} placeholder=" до" onChange={(e) => setYear({yearStart: year.yearStart, yearEnd: e.target.value})}/>
              </div>
            </div>
          </div>
        </form>

        <div className="filter__item__form showbtn">
          <button onClick={() => onSearch()}>
            Посмотреть
          </button></div>
        <div className="main_filter__bottom">
          {area_start || area_end ? 
            <div className="main_filter__bottom__item">
              <p>Вес: {area_start ? area_start : '∞'} тн - {area_end ? area_end : '∞'} т</p>
              <i id='area' className="fas fa-times" onClick={(e)=> clearAddressInput(e)}/>
            </div>
          : ''}
        
        {price_start || price_end ? 
            <div className="main_filter__bottom__item">
              <p>Цена: {price_start ? price_start : '∞'} - {price_end ? price_end : '∞'}</p>
              <i id='price' className="fas fa-times" onClick={(e)=> clearAddressInput(e)}/>
            </div>
          : ''}
               {year_start || year_end ? 
            <div className="main_filter__bottom__item">
              <p>Год: {year_start ? year_start : '∞'} - {year_end ? year_end : '∞'}</p>
              <i id='year' className="fas fa-times" onClick={(e)=> clearAddressInput(e)}/>
            </div>
          : ''}
        
          {from_string ?
            <div className="main_filter__bottom__item">
              <p>{` ${from_string} `} </p>
              <i id='from' className="fas fa-times" onClick={(e)=> clearAddressInput(e)}/>
            </div>
              : 
          ''}

          {to_string ?
            <div className="main_filter__bottom__item">
              <p>{`до: ${to_string} `} </p>
              <i id='to' className="fas fa-times" onClick={(e)=> clearAddressInput(e)}/>
            </div>
              : 
          ''}
        </div>
      </div>
    </div>
  )
}

export default Filter;