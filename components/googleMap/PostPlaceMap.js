import axios from 'axios'
import React, {useEffect, useState} from 'react'

import parse from 'html-react-parser'

const PostPlaceMap = (props) => {
    const [placeInfo, setPlaceInfo] = useState({distance: null, duration: null})
    const [loading, setLoading] = useState(true)
    const [routeLoad, setRouteLoad] = useState(false)
    const [roadVisible, setRoadVisible] = useState(false)

    useEffect(() => {

    }, [])


    return(
      <>
        <div className="goods__info__map border_none">
          <h4 className="goods__title">Карта маршрута</h4>
          <iframe src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAP_API_KEY}&origin=place_id:${props.from}&destination=place_id:${props.to}&avoid=tolls|highways`} width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          <div className="info__map__path">
            <div className="info__map__title d-flex">
              <h4 className="goods__title" >Полный маршрут</h4>
            </div>
            <div className="info__map__path__wrapper__flex">
              <div className="info__map__path__wrapper">
                <div className="goods__city">
                <img className="signs__item" src="/img/goods__nav1__item/a-sign.svg" alt="a-sign" />
                <p className="info__map__city">{props.from_string}</p>
              </div>
              {routeLoad ? <div className='"info__map__content"'>Загрузка..</div> : ''}
              <div className="info__map__content">
                {props.steps.map(step => (
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
                <p className="info__map__city">{props.to_string}</p>
              </div>
                </div>
              </div>
            
          </div>
        </div> 
        
      </>
    )
}

export default PostPlaceMap;