import React from 'react'
import cookie from 'js-cookie'
import Navguest from './Navguest'
import Navuser from './Navuser'
export default function Nav() {
    if(cookie.get('token')) {
        return(<Navuser/>)
    }
    else {
        return(<Navguest/>)
    }
}