import axios from 'axios'
import React, {useEffect, useState} from 'react'

import parse from 'html-react-parser'

const AuctionMap = (props) => {
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
          
        </div> 
        
      </>
    )
}

export default AuctionMap;