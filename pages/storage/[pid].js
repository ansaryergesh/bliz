import React, {useEffect, useState} from 'react'
import {useRouter, Router} from 'next/router'
import axios from 'axios'
import PostAside from '../../components/post/PostAside'

const StorageDetailed = () => {
  const router = useRouter()
  const {pid} = router.query
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/getStorageById?storage_id=${pid}`)
      .then(res=> {
        setLoading(false)
        if(res.data.success) {
          let finalres = res.data.data[0];
          setStorageInfo({user: {
            id: finalres.user[0].id,
            fullName: finalres.user[0].fullName,
            email: finalres.user[0].email,
            phone: finalres.user[0].phone,
            address: finalres.user[0].address,
            companyDetails: {
              companyName: finalres.user[0].companyDetails ? finalres.user[0].companyDetails[0].companyName: '',
              bin: finalres.user[0].companyDetails ? finalres.user[0].companyDetails[0].bin: ''
            }
          },
          properties: {
            area: finalres.properties[0].area,
            total_area: finalres.properties[0].total_area,
            price: finalres.properties[0].price,
            year: finalres.properties[0].year,
            city: finalres.properties[0].city,
            address: finalres.properties[0].address,
            floor: finalres.properties[0].floor,
            floor_type: finalres.properties[0].floor_type,
            region: finalres.properties[0].region,
            floor_load: finalres.properties[0].floor_load,
            parking_car: finalres.properties[0].parking_car || '',
            parking_cargo: finalres.properties[0].parking_cargo || '',
          },
          images: finalres.images,
          additional: {
            fire_system: finalres.additional[0].fire_system,
            ventilation: finalres.additional[0].ventilation,
            fire_alarm: finalres.additional[0].fire_alarm,
            security_alarm: finalres.additional[0].security_alarm,
            security_area_transport: finalres.additional[0].security_area_transport,
            inline_blocks: finalres.additional[0].inline_blocks,
            ramp: finalres.additional[0].ramp,
            rack: finalres.additional[0].rack,
          }
        })
        }else {
          setStorageInfo({errorId: true})
        }
      })
  }, [])

  const [storageInfo,setStorageInfo] = useState({
    errorId: false,
    user: 
      {
        id: '',
        fullName: '',
        email: '',
        phone: '',
        address: null,
        companyDetails: {
          companyName: '',
          bin: ''
        }
      },
    properties: 
      {
        area: '',
        total_area: '',
        price: '',
        year: '',
        city: '',
        address: '',
        floor: '',
        floor_type: '',
        region: '',
        floor_load: '',
        parking_cargo: '',
        parking_car: ''
      },
    images: [],
    additional: 
      {
        fire_system: [],
        ventilation: [],
        fire_alarm: false,
        security_alarm: false,
        security_area_transport: false,
        inline_blocks: false,
        rack: false,
        ramp: false
      },
      updated_at: ''
  })
  
  return (
    <div className="grid-container container">
  <section className="section">
    <div className="goods__info">
      <div className="goods__info__head">
        <div className="goods__info__breadcrumbs">
          <p className="goods__info__gray">Главная / Склады / Склады в Алматы</p>
        </div>  
        <div className="goods__info__title storage__info__title">
          <h2>{storageInfo.properties.area + " м2 "}</h2>
          <p>{storageInfo.properties.price}</p>
        </div>
      </div>
      <div className="storage__info">
        <div className="goods__info__table goods__info__table--store">
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">площадь</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.area} м2</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">общ. площадь</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.total_area} м2</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">класс</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>B+</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">тип склада</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>сухой (+14/+24)</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">год постройки</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.year} г.</p>
            </div>
          </div>
          <div className="storage__item__adress__item storage__item__adress__item--bold">
            <h4>{storageInfo.properties.region}</h4>
            <a className="opacity_btn" href="#mapView">показать на карте</a>
          </div>
        </div>
        <div className="storage__info__carusel">       
          <div className="info__carusel__item1">
            <img src="/img/storage/storage-nav-item/store-item1.png" alt="storage-item-1" id="carusel-item1" />
          </div>  
          <div className="info__carusel__item2" id="carusel-item2">
            <img src="/img/storage/storage-nav-item/small-store-item1.png" alt="small-storage-item-1" />
            <img src="/img/storage/storage-nav-item/small-store-item2.png" alt="small-storage-item-2" />
            <img src="/img/storage/storage-nav-item/small-store-item2.png" alt="small-storage-item-2" />
            <img src="/img/storage/storage-nav-item/small-store-item2.png" alt="small-storage-item-2" />
            <img src="/img/storage/storage-nav-item/small-store-item2.png" alt="small-storage-item-2" />
            <img src="/img/storage/storage-nav-item/small-store-item2.png" alt="small-storage-item-2" />
          </div>
        </div>
      </div>
      <div className="goods__info__add">
        <h4 className="goods__title">Технические параметры</h4>
        <div className="goods__info__table goods__info__table--store">
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">площадь</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.area} м2</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">общ. площадь</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.total_area} м2</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">класс</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>B+</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">тип склада</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>сухой (+14/+24)</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">год постройки</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.year} г.</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">этажность</p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.floor} этаж</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">паркинг (грузовые машины) </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.parking_cargo} мест</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">паркинг (легковые машины) 
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.properties.parking_car} мест</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store"> рабочая высота потолков 
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>8 метр</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">тип пола
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>бетонный</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">пожарная сигнализация 
                             
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.additional.fire_alarm ? 'есть' : 'нет'}</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">
                охранная сигнализация                   
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.additional.security_alarm ? 'есть' : 'нет'}</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">  площадка для отстоя <br /> и маневрирования транспорта 
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.additional.security_area_transport?'есть' : 'нет'}</p>
            </div>
          </div>
          <div className="table__row">
            <div className="table__column__1">
              <p className="goods__info__gray goods__info__gray--store">  Встроенные блоки <br /> офисных помещений 
              </p>
              <div className="table__dash__bord">
              </div>
            </div>
            <div className="table__column__2 table__column__2--store">
              <p>{storageInfo.additional.inline_blocks?'есть' : 'нет'}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="mapView" className="goods__info__map">
        <h4 className="goods__title">Местоположение на карте</h4>
        <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_API_KEY}&q=place_id:${storageInfo.properties.address}`} width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
      </div>
      {/* <div className="goods__info__add">
        <h4 className="goods__title">Объявления, которые могут быть вам полезны</h4>
        <div className="store__info__advert">
          <div className="info__advert__block">
            <div className="advert__block__item1">
              <img src="assets/img/storage/advert1.png" alt="adv1" />
            </div>
            <div className="advert__block__item2">
              <a href="#">Склад 640 м2, «Алпамыс»,<br /> Алматы</a>
            </div>
            <div className="advert__block__item3">
              <p>90 000 ₸/мес</p>
            </div>
            <div className="advert__block__item4">
              <p>Алматы</p>
            </div>
          </div>
          <div className="info__advert__block">
            <div className="advert__block__item1">
              <img src="assets/img/storage/advert2.png" alt="adv2" />
            </div>
            <div className="advert__block__item2">
              <a href="#">Склад 800 м2, «ОУСА<br />  Альянс», Алматы</a>
            </div>
            <div className="advert__block__item3">
              <p>90 000 ₸/мес</p>
            </div>
            <div className="advert__block__item4">
              <p>Алматы</p>
            </div>
          </div>
          <div className="info__advert__block">
            <div className="advert__block__item1">
              <img src="assets/img/storage/advert3.png" alt="adv3" />
            </div>
            <div className="advert__block__item2">
              <a href="#">Склад 640 м2, «Алпамыс»,<br /> Алматы</a>
            </div>
            <div className="advert__block__item3">
              <p>90 000 ₸/мес</p>
            </div>
            <div className="advert__block__item4">
              <p>Алматы</p>
            </div>
          </div>
          <div className="info__advert__block">
            <div className="advert__block__item1">
              <img src="assets/img/storage/advert1.png" alt="adv1" />
            </div>
            <div className="advert__block__item2">
              <a href="#">Склад 640 м2, «Алпамыс»,<br /> Алматы</a>
            </div>
            <div className="advert__block__item3">
              <p>90 000 ₸/мес</p>
            </div>
            <div className="advert__block__item4">
              <p>Алматы</p>
            </div>
          </div>
          <div className="info__advert__block">
            <div className="advert__block__item1">
              <img src="assets/img/storage/advert2.png" alt="adv2" />
            </div>
            <div className="advert__block__item2">
              <a href="#">Склад 800 м2, «ОУСА<br />  Альянс», Алматы</a>
            </div>
            <div className="advert__block__item3">
              <p>90 000 ₸/мес</p>
            </div>
            <div className="advert__block__item4">
              <p>Алматы</p>
            </div>
          </div>
          <div className="info__advert__block">
            <div className="advert__block__item1">
              <img src="assets/img/storage/advert3.png" alt="adv3" />
            </div>
            <div className="advert__block__item2">
              <a href="#">Склад 640 м2, «Алпамыс»,<br /> Алматы</a>
            </div>
            <div className="advert__block__item3">
              <p>90 000 ₸/мес</p>
            </div>
            <div className="advert__block__item4">
              <p>Алматы</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </section>
  <PostAside postinfo={storageInfo}/>
</div>

  )


}

export default StorageDetailed