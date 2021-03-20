import Filter from '../../components/storage/Filter';
import { useRouter } from 'next/router'
import StorageItems from '../../components/storage/StorageItems';
import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import StorageCal from '../../components/storage/StorageCalculator';
import { loadGoogleMapScript } from '../../defaults/googleMapDefaults';

const Storage = () => {
  
  const router  = useRouter()
  const {id} = router.query
  const {page} = router.query
  const [loading, setLoading] = useState(true)
  const [storages, setStorages] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [maxPage,setMaxPage] = useState(0)
  const [minArea, setMinArea] = useState('')
  const [maxArea, setMaxArea] = useState('')
  const cityRegionRef = useRef(null)
  const [loadMap, setLoadMap] = useState(false)
  const [cityRegion, setCityRegion] = useState({id: '', name: ''})
  

  useEffect(() => {
   
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/getAllStorage?page=${page}`)
      .then(res=> {
        setLoading(false)
        setStorages(res.data.data)
        setTotal(res.data.all)
        setMaxPage(res.data.max_page)
        setCurrentPage(res.data.current_page)
      })
      loadGoogleMapScript(() => {
        setLoadMap(true),() => initPlaceAPI()
      })
  },[])

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
  return (
    <>
      <Filter 
        cityRegionRef={cityRegionRef}
        minArea = {minArea}
        setMinArea = {setMinArea}
        maxArea = {maxArea}
        setMaxArea = {setMaxArea}
      />
        {storages === [] ? '' :  <StorageItems total={total} storages={storages} maxPage={maxPage} onChangePage={onChangePage} currentPage={currentPage} loading={loading}/>}
        <StorageCal />
    
    
              
      {/* <FacebookShareCount url={process.env.PROD_URL/pathName}>
  {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
</FacebookShareCount> */}
    </>

  )
}

export default Storage;