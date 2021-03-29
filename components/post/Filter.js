
import React, { useEffect, useRef, useState } from 'react'
import {subCategories} from '../../defaults/defaults'
import {useRouter} from 'next/router'
import $ from 'jquery'
import axios from 'axios'
const Filter = ({
  onChangeCategory,
  activeCategory,
  setPosts,
  setTotal,
  setCurrentPage,
  setLoading,
  queryFilter,
  fromString,
  setMaxPage,
  fromId,
  toString,
  toId}) => {
  const router  = useRouter()
  const pathname = router.pathname;
  const {id} = router.query
  const {from_string} = router.query;
  const {to_string} = router.query;
  const {net_start} = router.query;
  const {net_end} = router.query;
  const {volume_start} = router.query
  const {volume_end} = router.query;
  const [fromInput, setFromInput] = useState('')
  const [net,setNet] = useState({netStart: '',netEnd:''})
  const [volume,setVolume] = useState({volumeStart: '',volumeEnd:''})
  const [toInput,setToInput] = useState('')
  const [addressFrom,setAddressFrom] = useState({address_string: fromString || '', address_id: fromId || '',})
  const [addressTo,setAddressTo] = useState({address_string: toString || '', address_id: toId || '',})
  const fromRef = useRef(null)
  const toRef = useRef(null)
  const currentPath = router.pathname
  useEffect(() => {
    initPlaceAPI()
    $('.big_filter_btn').click(function(){
      $('.main_filter__big').toggleClass('active');
    });
  
  },[])

  useEffect(() => {
    if(!addressFrom.address_id && !addressTo.address_id) {
      onSearch(
        addressFrom.address_id,
        addressTo.address_id,
        addressFrom.address_string,
        addressTo.address_string,
        net.netStart,
        net.netEnd,
        volume.volumeStart,
        volume.volumeEnd,
      )}
  },[addressFrom, addressTo])
  

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
    if(!net.netStart) {
      delete queries.net_start
    }
    if(!net.netEnd) {
      delete queries.net_end
    }
    if(!volume.volumeStart) {
      delete queries.volume_start;
    }
    if(!volume.volumeEnd) {
      delete queries.volumeEnd;
    }

    if(addressFrom.address_id) {
      newQueries.from_id = addressFrom.address_id;
      newQueries.from_string = addressFrom.address_string;
    }
    if(addressTo.address_id) {
      newQueries.to_id = addressTo.address_id;
      newQueries.to_string = addressTo.address_string;
    }
    if(net.netStart) {
      newQueries.net_start = net.netStart
    }
    if(net.netEnd) {
      newQueries.net_end = net.netEnd
    }
    if(volume.volumeStart) {
      newQueries.volume_start = volume.volumeStart
    }
    if(volume.volumeEnd) {
      newQueries.volume_end = volume.volumeEnd
    }

    setLoading(true);

    axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
      type_transport: id==='0' ? '' : id,
      from: addressFrom.address_id,
      to: addressFrom.address_id,
      net_start: net.netStart,
      net_end: net.netEnd,
      volume_start: volume.volumeStart,
      volume_end: volume.volumeEnd
    }})
      .then(res=> {
        setLoading(false);
        setPosts(res.data.data)
        setCurrentPage(res.data.pagination.page)
        setTotal(res.data.pagination.total)
        setMaxPage(res.data.pagination.max_page)
        router.push({path: pathname, query: {...queries, ...newQueries}})
      })
  }

  const onSearch = () => {
    const queries = router.query;
    const newQueries = {};
    fixPath(queries,newQueries);
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
      
      // infowindow.close();
      let place = autocomplete.getPlace();
      setFromInput('')
      // console.log(place)
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
                <button type="button" className="big_filter_btn">Все фильтры</button>
              </div>
            </div>
          </div>
          
            
        </div>
        <form className="main_filter__big">
          {/* <div className="main_filter__big__items">
            <div className="main_filter__big__item">
              <select>
                <option>Фильтр</option>
              </select>
            </div>
            <div className="main_filter__big__item">
              <select>
                <option>Фильтр</option>
              </select>
            </div>
            <div className="main_filter__big__item">
              <select>
                <option>Фильтр</option>
              </select>
            </div>
            <div className="main_filter__big__item">
              <select>
                <option>Фильтр</option>
              </select>
            </div>
            <div className="main_filter__big__item">
              <select>
                <option>Фильтр</option>
              </select>
            </div>
          </div> */}
          <div className="main_filter__big__items">
            
            <div className="main_filter__big__item">
              <label>Вес</label>
              <div className='main_filter__big__item_inputs'>
              <input type="number" value={net.netStart} onChange={(e)=>{setNet({netStart: e.target.value, netEnd:net.netEnd})}} placeholder="от" />
              <p>-</p>
              <input type="number" value={net.netEnd} onChange={(e) => {setNet({netStart: net.netStart, netEnd: e.target.value})}} placeholder="до" />
              </div>
            </div>
            <div className="main_filter__big__item">
              <label>Площадь</label>
              <div className='main_filter__big__item_inputs'>
              <input type="number" value={volume.volumeStart} onChange={(e) => setVolume({volumeStart: e.target.value, volumeEnd: volume.volumeEnd})} placeholder=" от" />
              <p>-</p>
              <input type="number" value={volume.volumeEnd} placeholder=" до" onChange={(e) => setVolume({volumeStart: volume.volumeStart, volumeEnd: e.target.va})}/>
              </div>
            </div>
            {/* <div className="main_filter__big__item">
              <input type="text" placeholder="Фильтр" />
            </div>
            <div className="main_filter__big__item">
              <input type="text" placeholder="Фильтр" />
            </div>
            <div className="main_filter__big__item">
              <input type="text" placeholder="Фильтр" />
            </div> */}
          </div>
        </form>

        <div className="filter__item__form showbtn">
          <button onClick={() => onSearch()}>
            Посмотреть
          </button></div>
        <div className="main_filter__bottom">
          {net_start || net_end ? 
            <div className="main_filter__bottom__item">
              <p>Вес: {net_start ? net_start : '∞'} тн - {net_end ? net_end : '∞'} тн</p>
              <i className="fas fa-times"/>
            </div>
          : ''}
        
        {volume_start || volume_end ? 
            <div className="main_filter__bottom__item">
              <p>Площадь: {volume_start ? volume_start : '∞'} м³ - {volume_end ? volume_end : '∞'} м³</p>
              <i className="fas fa-times"/>
            </div>
          : ''}
        
          {from_string ?
            <div className="main_filter__bottom__item">
              <p>{`от: ${from_string} `} </p>
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