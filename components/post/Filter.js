
import React, { useEffect, useRef, useState } from 'react'
import {subCategories} from '../../defaults/defaults'
import {useRouter} from 'next/router'
import { formatForLetter } from '../../defaults/extraFunctions'
const Filter = ({onSearch,onChangeCategory, activeCategory, queryFilter, fromString, fromId, toString,toId}) => {
  const router  = useRouter()
  const {from_string} = router.query;
  const {to_string} = router.query;
  const [fromInput, setFromInput] = useState('')
  const [toInput,setToInput] = useState('')
  const [addressFrom,setAddressFrom] = useState({address_string: fromString || '', address_id: fromId || '',})
  const [addressTo,setAddressTo] = useState({address_string: toString || '', address_id: toId || '',})
  const fromRef = useRef(null)
  const toRef = useRef(null)
  const currentPath = router.pathname
  useEffect(() => {
    initPlaceAPI()
  },[])

  useEffect(() => {
    if(!addressFrom.address_id || !addressTo.address_id) {
    onSearch(addressFrom.address_id, addressTo.address_id, addressFrom.address_string, addressTo.address_string)}
  },[addressFrom, addressTo])


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
    if(name==='from') {
      setFromInput('')
      setAddressFrom({address_string: '', address_id: ''})
     
    }else {
      setAddressTo({address_string: '', address_id: ''})
   
    }
    
  }
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(fromRef.current,
      { types: ["(cities)"], componentRestrictions: { country: ['kz'] } });
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      setFromInput('')
      console.log(place)
      setAddressFrom({address_string: place.formatted_address, address_id: place.place_id})
    });

    let autocomplete2 = new window.google.maps.places.Autocomplete(toRef.current,
      { types: ["(cities)"], componentRestrictions: { country: ['kz'] } });
    new window.google.maps.event.addListener(autocomplete2, "place_changed", function () {
      setToInput('')
      let place = autocomplete2.getPlace();
      setAddressTo({address_string: place.formatted_address, address_id: place.place_id})
    });
  };
  return (
    <div className="main_filter">
      <div className="main_filter__content container">
        <div className="main_filter__top">
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Транспорт</h4>
              <div className="filter__item__form">
                {subCategories.map(cat=> (
                  <a onClick={() => onChangeCategory(cat.name, cat.id)} key={cat.id} className={queryFilter === cat.name ? 'active' : ''}>{cat.name}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="main_filter__top__item">
            <div className="filter__item__title">
              <h4>Направление</h4>
              {/* {fromInput} */}
              
              <div className="filter__item__form">
                
                <input type="text" value={fromInput} onChange={(e) => setFromInput(e.target.value)} placeholder={addressFrom.address_string || 'Откуда'} ref={fromRef}/>
                <div className="hr"/>
                <input  type="text" value={toInput} onChange={e=>setToInput(e.target.value)} placeholder={addressTo.address_string || "Куда"} ref={toRef}/>
                <button onClick={() => onClearFilter()}>Сбросить</button>
                <select name id>
                  <option value>Все фильтры</option>
                </select>
              </div>
            </div>
          </div>
          
            
        </div>
        <div className="filter__item__form showbtn">  <button onClick={() => onSearch(addressFrom.address_id, addressTo.address_id, addressFrom.address_string, addressTo.address_string)}>Посмотреть</button></div>
        <div className="main_filter__bottom">
          <div className="main_filter__bottom__item">
            <p>Дата выгрузки: 7 мая</p>
            <i className="fas fa-times"/>
          </div>
          
          <div className="main_filter__bottom__item">
            <p>Вес: 80 тн – 200 тн</p>
            <i className="fas fa-times"/>
          </div>
          
          {from_string ?
            <div className="main_filter__bottom__item">
              <p>{from_string ? `от: ${from_string} `: ''} </p>
              <i id='from' className="fas fa-times" onClick={(e)=> clearAddressInput(e)}/>
            </div>
              : 
          ''}

          {to_string ?
            <div className="main_filter__bottom__item">
              <p>{to_string ? `до: ${to_string} `: ''} </p>
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