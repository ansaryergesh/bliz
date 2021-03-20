import axios from "axios"
import { useEffect, useState } from "react"
import cookie from 'js-cookie'
import PostItem from "../../components/post/PostItem"
import {useRouter} from 'next/router'
import withAuth from "../../hocs/withAuth"
import BreadCumbs from "../../components/shared/BreadCumbsConfigure"
const Favourites = () => {
  const router = useRouter()
  const [favourites,setFavourites] = useState({cargo: '',post: '', auction: '', storage: '', special: ''})
  const [cargo, setCargo] = useState([{}]);
  const [active, setActive] = useState('cargo');
  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/getListCargoFavourites?token=${cookie.get('token')}`)
      .then(res=> {
        setCargo(res.data.data)
      })
    axios.get(`${process.env.BASE_URL}/getAllFavourites?token=${cookie.get('token')}`)
      .then(res => {
        console.log(res)
        if(res.data.success) {
          setFavourites(res.data.data)
        }
      })
  }, [])
  return (
    <div className="grid-container container">
      <div className="section">
        <div className="products__title paddings little_pad">
          <BreadCumbs />
          <h1 className="smaller_font">Избранное</h1>
        </div>
        <nav className="cabinet_ad_nav">
          <div className="nav__wrapper">
            <div className="nav__links cabinet_ad_nav">
               <a className="cabinet_ad_nav active" href="#">Грузоперевозки {favourites.cargo}</a>
              <a href="#">Транспорт {favourites.post} </a>
              <a href="#">Склады {favourites.storage}</a> 
            </div>
          </div>
        </nav>
        <PostItem post={cargo} pathName={router.pathname} />
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

export default withAuth(Favourites);