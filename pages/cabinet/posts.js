import axios from "axios"
import { useEffect, useState } from "react"
import cookie from 'js-cookie'
import PostItem from "../../components/post/PostItem"
import {useRouter} from 'next/router'
import withAuth from "../../hocs/withAuth"
import BreadCumbs from "../../components/shared/BreadCumbsConfigure"
import AuctionItem from "../../components/post/AuctionItem"
import StorageItems from "../../components/storage/StorageItems"
import LoadingSpinner from "../../components/shared/others/LoadingSpinner"
const Posts = () => {
  const router = useRouter()
  const [favourites,setFavourites] = useState({cargo: '',post: '', auction: '', storage: '', special: ''})
  const [favourList, setFavourList] = useState([{}]);
  const [auctions, setAuctions] = useState([{}]);
  const [tops,setTops] = useState({})
  const [storages, setStorages] = useState([{}])
  const [active, setActive] = useState('transport');
  const [loading, setLoading] = useState(true)
  const {fav} = router.query
  useEffect(() => {
    getFavoures()
   
    axios.get(`${process.env.BASE_URL}/myPosts?token=${cookie.get('token')}`)
      .then(res => {
        // console.log(res)
        if(res.data.success) {
          setLoading(false)
          setFavourites(res.data)
        }
      })
  }, [])

  const changeFavour = (name) => {
    setLoading(true)
    const finalDates = (val) => val.data.data;
    setActive(name)
    if(name==='cargo') {
      axios.get(`${process.env.BASE_URL}/getMyCargo?token=${cookie.get('token')}`)
        .then(res=> {
          setLoading(false)
          setFavourList(res.data.data)
        })
    }
    if(name==='transport') {
      
      axios.get(`${process.env.BASE_URL}/getMyPosts?token=${cookie.get('token')}`)
        .then(res=> {
          setLoading(false)
          setFavourList(finalDates(res))
        })
    }
    if(name==='auction') {
      setLoading(false)
    }
    if(name==='storage') {
      setLoading(false)
    }
    if(name==='special') {
      axios.get(`${process.env.BASE_URL}/getMySpecial?token=${cookie.get('token')}`)
        .then(res=> {
          setLoading(false)
          setFavourList(finalDates(res))
        })
    }
  }
  const getFavoures = () => {
      
      axios.get(`${process.env.BASE_URL}/getMyPosts?token=${cookie.get('token')}`)
        .then(res=> {
          setLoading(false)
          console.log(res)
          setFavourList(res.data.data)
        })

      axios.get(`${process.env.BASE_URL}/getMyAuction?token=${cookie.get('token')}`)
        .then(res=> {
          setLoading(false)
          setAuctions(res.data.data)
        })
      axios.get(`${process.env.BASE_URL}/getMyStorage?token=${cookie.get('token')}`)
        .then(res=> {
          setLoading(false)
          setStorages(res.data.data)
        })
    // if(fav && fav==='storage') {

    // }
    // if(!fav || fav==='cargo') {
    //   axios.get(`${process.env.BASE_URL}/getListCargoFavourites?token=${cookie.get('token')}`)
    //     .then(res=> {
    //       setLoading(false)
      
    //       setFavourList(res.data.data)
    //     })
    // }
  }
  return (
    <div className="grid-container container">
      <div className="section">
        <div className="products__title paddings little_pad">
          <BreadCumbs />
          {loading ? <LoadingSpinner /> : ''}
          <h1 className="smaller_font">Мои обьявление</h1>
        </div>
        <nav className="cabinet_ad_nav">
          <div className="nav__wrapper">
            <div className="nav__links cabinet_ad_nav">
               <a className={active==='cargo' ? `cabinet_ad_nav active` : 'cabinet_ad_nav'} onClick={() => changeFavour('cargo')} href="#">Грузоперевозки {favourites.cargo}</a>
              <a className={active==='transport' ? `cabinet_ad_nav active` : 'cabinet_ad_nav'} onClick={() => changeFavour('transport')} href="#" >Транспорт {favourites.post} </a>
              <a className={active==='storage' ? `cabinet_ad_nav active` : 'cabinet_ad_nav'} onClick={() => changeFavour('storage')} href="#">Склады {favourites.storage}</a> 
              <a className={active==='special' ? `cabinet_ad_nav active` : 'cabinet_ad_nav'} onClick={() => changeFavour('special')} href="#">Спецтехника {favourites.special}</a> 
              <a className={active==='auction' ? `cabinet_ad_nav active` : 'cabinet_ad_nav'} onClick={() => changeFavour('auction')} href="#">Аукцион {favourites.auction}</a> 
            </div>
          </div>
        </nav>

        {active==='cargo' || active==='transport' ?  <PostItem post={!loading ? favourList: []} pathName={router.pathname} tops={tops} /> : ''}
        {active==='storage' ? <StorageItems storages={!loading ? storages: []} loading={loading}/> : ''}
        {loading===false && active==='auction' ? <AuctionItem loading={loading} auctions={!loading ? auctions: []} /> : ''}
        {/* <AuctionItem auctions={favourList} /> */}
{/* 
        <div className="storage__item without_pads">
          <i id="storges_absolute" className="fas fa-star"/>
          <div className="storage__item__img">
            <img src="/img/storage/storage5.png" alt/>
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item without_pads">
          <i id="storges_absolute" className="fas fa-star"/>
          <div className="storage__item__img">
            <img src="/img/storage/storage5.png" alt/>
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item without_pads">
          <i id="storges_absolute" className="fas fa-star"/>
          <div className="storage__item__img">
            <img src="/img/storage/storage5.png" alt/>
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="storage__item without_pads">

          <i id="storges_absolute" className="fas fa-star"/>
          <div className="storage__item__img">
            <img src="/img/storage/storage5.png" alt/>
          </div>
          <div className="storage__item__desc">
            <div className="storage__item__title">
              <a href="storage__nav__item.html">Склад 640 м2, «Алпамыс», Алматы</a>
              <h3>90 000 ₸/мес</h3>
            </div>
            <div className="storage__item__details">
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>640 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">общ. площадь</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>45 000 м2</p>
                </div>
              </div>
              <div className="table__row">
                <div className="table__column__1">
                  <p className="goods__info__gray small">класс и тип</p>
                  <div className="table__dash__bord"></div>
                </div>
                <div className="table__column__2 small">
                  <p>B+ / сухой (+14/+24)</p>
                </div>
              </div>
            </div>
            <div className="storage__item__adress">
              <div className="storage__item__adress__item">
                <h4>Алматы, Бостан. р-н, Розыбакиева 17А</h4>
                <a className="opacity_btn" href="#">показать на карте</a>
              </div>
              <div className="storage__item__adress__item">
                <p>АО «Алпамыс»</p>
                <span>7 мая 12:30</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default withAuth(Posts);