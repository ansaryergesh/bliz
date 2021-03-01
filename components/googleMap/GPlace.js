import React, { useEffect, useRef, useState } from "react";
import SideBarCurrency from "../post/SideBarCurrency";
import {useDispatch} from 'react-redux'
import axios from "axios";
import parse from 'html-react-parser'


const GPlace = () => {
  const dispatch = useDispatch();
  const placeInputRef = useRef(null);
  const placeInputRef2 = useRef(null);
  const [place, setPlace] = useState({address: '', id: null});
  const [place2, setPlace2] = useState({address: '', id: null});
  const [placeInfo, setPlaceInfo] = useState({
    distance: null,
    duration: null,
  })


  const Maneuver = ({dir}) => {
    if(dir && dir.includes('left')) {
      <img src="/img/goods__nav1__item/left-sign.svg" alt="left-sign" />
    }
    if(dir && dir.includes('straight')) {
      <img src="/img/goods__nav1__item/straight-sign.svg" alt="straight-sign" />
    }
    else {
      <img src="/img/goods__nav1__item/right-sign.svg" alt="right-sign" />
    }
  }
  
  const [steps, setSteps] = useState([])

  useEffect(() => {
    initPlaceAPI();
  }, []);


  const clearPlace1 = () => {
    setPlace({place:''});
    placeInputRef = null;
  }
  const handleSearch  = (place1, place2) => {
    dispatch({type: 'CLOSE_MESSAGE'})
    if(!place1 && !place2) {
      dispatch({type: 'ERROR_MESSAGE', payload: 'Адресы не выбраны'})
    }
    if(!place1 && place2) {
      dispatch({type: 'ERROR_MESSAGE', payload: 'Выберите начало адреса'})
    }
    if(place1 && !place2) {
      dispatch({type: 'ERROR_MESSAGE', payload: 'Выберите конечный адрес'})
    }
    if(place1 && place2) {
      axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${place1}&destination=place_id:${place2}&key=${process.env.GOOGLE_MAP_API_KEY}`,)
      .then(res => {
        console.log(res.data.routes[0].legs[0].steps)
        setPlaceInfo ({
          duration: res.data.routes[0].legs[0].duration.text,
          distance: res.data.routes[0].legs[0].distance.text,
        })
        
        setSteps(res.data.routes[0].legs[0].steps)
      })
    }
    
  }
  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current,
      { types: ["(regions)"], componentRestrictions: { country: ["kz", "ru"] } });
    let autocomplete2 = new window.google.maps.places.Autocomplete(placeInputRef2.current,
      { types: ["(regions)"], componentRestrictions: { country: ["kz", "ru"] } });
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      console.log(place)
      setPlace({
        address: place.formatted_address,
        id: place.place_id
      });
    });

    new window.google.maps.event.addListener(autocomplete2, "place_changed", function () {
      let place = autocomplete2.getPlace();
      setPlace2({
        address: place.formatted_address,
        id: place.place_id
      });
    });
  };

  return (
    <>
    <div className="products__container container">
      <div className="products__content">
        <div className="products__title">
          <h4>Главная / Грузоперевозки / Расчет расстояний</h4>
          <h1>Расчет расстояний</h1>
          <h3>Добавьте место выезда и приезда, и расчитайте расстояние и маршрут между ними</h3>
        </div>
        <div className="dis_calc">
          <div className="dis_calc__top">
            <form className="disc_calc__form">
              <div className="dis_calc__item">
                <h3>ОТКУДА</h3>
                  {/* {place.address ? 
                    <div className='clearInput'>
                      <input value={place.address} ref={placeInputRef}/>
                      <a onClick={() => setPlace({adress:''})}>x</a>
                    </div> :  
                    ''
                  } */}
                  {/* {!place.address ? <input type="text" ref={placeInputRef} /> : ''} */}
                  <input type="text" ref={placeInputRef} />
              
              </div>
              <div className="dis_calc__item">
                <h3>КУДА</h3>
                 {/* {place2.address ? <input value={place2.address} ref={placeInputRef2}/> : <input type="text" ref={placeInputRef2} />} */}
                 <input type="text" ref={placeInputRef2} />
           
              </div>
              <a className="btn btn--white" href="#"><i className="fas fa-plus-circle" />Добавить</a>
            </form>    
          </div>
          <a className="btn"  onClick={()=>handleSearch(place.id, place2.id)}  href="#">РАССЧИТАТЬ РАССТОЯНИЕ</a>
        </div>
        <div className="dis__lenght">
          <div className="dis__lenght__item">
            <p>Маршрут</p>
            <h3>{place.address || 'Алматы, Казахстан'} — <br /> {place2.address || 'Астана, Казахстан'}</h3>
          </div>
          <div className="dis__lenght__item">
            <p>Расстояние, км</p>
            <h2>{placeInfo.distance}</h2>
          </div>
          <div className="dis__lenght__item">
            <p>Время в пути</p>
            <h2>{placeInfo.duration}</h2>
          </div>
        </div>
        <div className="goods__info__map border_none">
          <h4 className="goods__title">Карта маршрута</h4>
          <iframe src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAP_API_KEY}&origin=${place.id ? "place_id:" +place.id : 'Алматы, Казахстан'}&destination=${place2.id ? "place_id:" + place2.id : 'Астана, Казахстан'}&avoid=tolls|highways`} width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          <div className="info__map__path">
            <div className="info__map__title">
              <h4 className="goods__title">Полный маршрут</h4>
            </div>
            <div className="info__map__path__wrapper__flex">
              <div className="info__map__path__wrapper">
                <div className="goods__city">
                <img className="signs__item" src="/img/goods__nav1__item/a-sign.svg" alt="a-sign" />
                <p className="info__map__city">{place.address}</p>
              </div>  
              <div className="info__map__content">
                {steps.map(step => (
                  <div className="info__map__row">
                  <div className="map__row__item">
                    <img src="/img/goods__nav1__item/right-sign.svg" alt="right-sign" />
                    <div className="row__item__text">
                      {parse(step.html_instructions)}
                    </div>
                  </div>
                  <div className="map__row__item2">
                    <p>{step.distance.text}</p>
                  </div>
                  <div className="map__row__item3">
                    <p>{step.duration.text}</p>
                  </div>
                </div>
                ))}
             
                
              </div>
              <div className="goods__city goods__city-nur">
                <img className="signs__item" src="/img/goods__nav1__item/b-sign.svg" alt="b-sign" />
                <p className="info__map__city">{place2.address}</p>
              </div>
                </div>
              </div>
            
          </div>
        </div> 
        <div className="goods__info__add block_paddings">
          <h4 className="goods__title">Дополнительная информация</h4>
          <p className="goods__info__add-text">Погрузка груза должна выполняться аккуратно. <br /> Коробки с фруктами и овощами закрепить надежно. <br /> Оплата на месте получения.</p>
        </div>
      </div>
      <SideBarCurrency />
    </div>

    </>
  );
};

export default GPlace;