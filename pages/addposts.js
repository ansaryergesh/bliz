import {useState} from "react"
import React from 'react';
import CargoAdd from './cargo/add'
import BreadCumbs from "../components/shared/BreadCumbsConfigure";
import TransportAdd from "./cargo/transportAdd";
import StorageAdd from './storage/add'
import AuctionAdd from './cargo/auctionAdd'
import EquipmentAdd from './equipment/add'
const AddPost = () => {
  const [active,
    setActive] = useState('cargo')
  return (
    <div className="grid-container margin container">
      <div className="section">
        <div className="products__title paddings little_pad">
          {/* <BreadCumbs/> */}
          <h1 className="smaller_font">Добавление постов</h1>
        </div>
        <nav className="cabinet_ad_nav">
          <div className="nav__wrapper">
            <div className="nav__links cabinet_ad_nav">
              <a
                className={active === 'cargo'
                ? 'cabinet_ad_nav active'
                : ''}
                onClick={() => setActive('cargo')}>Грузы</a>
              <a
                className={active === 'transport'
                ? 'cabinet_ad_nav active'
                : ''}
                onClick={() => setActive('transport')}>Транспорт</a>
              <a
                className={active === 'storage'
                ? 'gray_front cabinet_ad_nav active'
                : 'gray_front'}
                onClick={() => setActive('storage')}>Склад</a>
            <a
                className={active === 'auction'
                ? 'gray_front cabinet_ad_nav active'
                : 'gray_front'}
                onClick={() => setActive('auction')}>Аукцион</a>
                <a
                className={active === 'equipment'
                ? 'gray_front cabinet_ad_nav active'
                : 'gray_front'}
                onClick={() => setActive('equipment')}>Спецтехника</a>
            </div>
          </div>
        </nav>
        {active === 'cargo'
          ? <CargoAdd />
          : ''}
        {active === 'transport'
          ? <TransportAdd />
          : ''}
        {active === 'storage'
          ? <StorageAdd />
          : ''}
        {active === 'auction'
          ? <AuctionAdd />
          : ''}
        {active === 'equipment'
          ? <EquipmentAdd />
          : ''}
        
      </div>
      <div className="aside"></div>
    </div>
  )
}

export default AddPost;