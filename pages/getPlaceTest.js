import axios from 'axios';
import React,{useEffect, useState} from 'react'

const getPlace = () => {
    const [place, setPlace] = useState('');

    useEffect(() => {
        axios.get(`${process.env.BASE_URL}/getPostById?post_id=1`);
        axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJXclESTPsrjgRHr6Zl3zTblY&key=AIzaSyAplKiP9AOLuUbWdH655ApFMl1nnfXwcwk')
            .then(res=> {
                let getPlace = new Map();
             
                res.data.result.address_components.forEach(element => {
                    getPlace.set(element.short_name, element.short_name);
              
                });
                console.log(getPlace)
                setPlace(Array.from(getPlace.keys()).join(','))
            })
    },[])

    return(<div>Адрес: {place}</div>)
}

export default getPlace;