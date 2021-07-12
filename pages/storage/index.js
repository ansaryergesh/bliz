import Filter from '../../components/post/FilterStorage';
import { useRouter } from 'next/router'
import StorageItems from '../../components/storage/StorageItems';
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import StorageCal from '../../components/storage/StorageCalculator';
import { loadGoogleMapScript } from '../../defaults/googleMapDefaults';
import SideBarCurrency from '../../components/post/SideBarCurrency';

const Storage = () => {
  
  const router  = useRouter()
  const {id} = router.query
  const {page} = router.query
  const {from_string} = router.query
  const [loading, setLoading] = useState(true)
  const [storages, setStorages] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFilter,setFilterMobile] = useState(false)
  const [total, setTotal] = useState(0)
  const [maxPage,setMaxPage] = useState(0)
  const [minArea, setMinArea] = useState('')
  const [maxArea, setMaxArea] = useState('')
  const cityRegionRef = useRef(null)
  const [loadMap, setLoadMap] = useState(false)
  const [cityRegion, setCityRegion] = useState({id: '', name: ''})
  const [loadMapScript, setLoadMapScript] = useState(false)


   // initialize the google place autocomplete
   const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(cityRegionRef.current,
      { types: ["(cities)"], componentRestrictions: { country: ["kz", "ru"] } });
    new window.google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
      setCityRegion({
        address: place.formatted_address,
        id: place.place_id
      });
    });
  };

  const onFilterMobile = () => {
    if(!mobileFilter && window.screen.width <=796) {
      document.querySelector('.main_filter').style.display='none';
    }
    if(mobileFilter && window.screen.width <=796) {
      document.querySelector('.main_filter').style.display='inherit'
    }
    setFilterMobile(!mobileFilter)
  }

  const onChangePage = (pageNum) => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/getAllStorage?page=${pageNum}`)
      .then(res=> {
        router.push(`/storage?page=${pageNum}`)
        setLoading(false)
        setStorages(res.data.data)
        setTotal(res.data.all)
        setMaxPage(res.data.max_page)
        setCurrentPage(res.data.current_page)
      })
  }

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMapScript(true)
    })
    setLoading(true)
  },[])
  return (
    <>
    <div className='filter_icon'>
        <div onClick={() => onFilterMobile()}>   
          <i class="fas fa-sliders-h "></i>
     
          <p>Фильтр {Object.keys(router.query).length!==0 && `(${Object.keys(router.query).length})`} </p>
        </div>
      </div>
      {!loadMapScript ? <div>Загрузка...</div> :
       <Filter 
       setLoading={setLoading}
       setPosts={setStorages}
       setCurrentPage={setCurrentPage}
       setTotal={setTotal}
       setMaxPage={setMaxPage}
       mobileFilter={mobileFilter}
       onFilterMobile={onFilterMobile}
       // onSearch={onSearch}
     />
      }
     
      <div className='products__container container'>
      <div className="products__content">
        <div className="products__title">
        <h4><a href="/" className=''>Главная</a>{" " + "/" + " "}<a href='/storage' >Склады </a>/<a href="#" className='gray_font'>{" " + "Склады в Алматы"}</a></h4>
          <h1>Склады и складские помещения {from_string && 'в' + " " + from_string}</h1>
          <h3>Найдено {total} объявлений</h3>
        </div>
      {storages === [] ? '' :  <StorageItems from_string={from_string} total={total} storages={storages} maxPage={maxPage} onChangePage={onChangePage} currentPage={currentPage} loading={loading}/>}
      </div>
      <SideBarCurrency />
     </div>
        <StorageCal />
    
    
              
      {/* <FacebookShareCount url={process.env.PROD_URL/pathName}>
  {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
</FacebookShareCount> */}
    </>

  )
}

export default Storage;