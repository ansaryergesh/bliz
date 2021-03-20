
import SideBarCurrency from '../../components/post/SideBarCurrency';
import Filter from '../../components/storage/Filter';
import { useRouter } from 'next/router'
import StorageItems from '../../components/storage/StorageItems';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import StorageCal from '../../components/storage/StorageCalculator';

const Storage = () => {
  const router  = useRouter()
  const {id} = router.query
  const {page} = router.query
  const [loading, setLoading] = useState(true)
  const [storages, setStorages] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [maxPage,setMaxPage] = useState(0)
  

  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/getAllStorage?page=${page}`)
      .then(res=> {
        // console.log('hello worasdasdalsdkmasldkmasldkmaslkdm')
        console.log(res.data.data)
        setLoading(false)
        setStorages(res.data.data)
        setTotal(res.data.all)
        setMaxPage(res.data.max_page)
        setCurrentPage(res.data.current_page)
      })
    
  },[])

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
      <Filter />
        {storages === [] ? '' :  <StorageItems total={total} storages={storages} maxPage={maxPage} onChangePage={onChangePage} currentPage={currentPage} loading={loading}/>}
        <StorageCal />
    
    
              
      {/* <FacebookShareCount url={process.env.PROD_URL/pathName}>
  {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
</FacebookShareCount> */}
    </>

  )
}

export default Storage;