import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from '../../components/shared/others/LoadingSpinner'
import Filter from '../../components/post/Filter'
import PostItem from '../../components/post/PostItem'
import SideBarCurrency from '../../components/post/SideBarCurrency';
import { loadGoogleMapScript } from '../../defaults/googleMapDefaults';

const Cargo = () => {
  const router  = useRouter()
  const {filter} = router.query
  const {id} = router.query
  const {from_string} = router.query
  const {from_id} = router.query
  const {to_string} = router.query
  const {to_id} = router.query
  const {page} = router.query

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([{}])
  const [currentPage, setCurrentPage] = useState(page || '1')
  const [total, setTotal] = useState(0)
  const [maxPage,setMaxPage] = useState(0)
  const [loadMapScript, setLoadMapScript] = useState(false)
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMapScript(true)
    })
    setLoading(true)
    const pageVal = () => page === undefined ? '' : page;
    const typeTransport = () => id === undefined || id==='0' ? '' : id;
    const fromID = () => from_id === undefined ? '' : from_id
    const toID = () => to_id === undefined ? '' : to_id

    axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
      page: pageVal(),
      type_transport: typeTransport(),
      from: fromID(),
      to: toID(),
    }})
      .then(res => {
        console.log(res)
        setLoading(false)
        setPosts(res.data.data)
        setTotal(res.data.pagination.total)
        setCurrentPage(res.data.pagination.page)
        setMaxPage(res.data.pagination.max_page)
      })
  },[])

  const onChangeCategory = (catName,catId) => {
    setLoading(true)
    const fromID = () => from_id === undefined ? '' : from_id
    const toID = () => to_id === undefined ? '' : to_id
    const fromString = () => from_string ? from_string : '' 
    const toString = () => to_string ? to_string : ''
  
      axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
        type_transport: catId===0 ? '' : catId,
        from: fromID(),
        to: toID(),
      }})
        .then(res=> {
          console.log(res)
          router.push(`/cargo?filter=${catName}&id=${catId}&from_id=${fromID()}&to_id=${toID()}&from_string=${fromString()}&to_string=${toString()}`)
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })

  }
  const onSearch = (from,to, fromString,toString) => {
    const typeTransport = () => id === undefined || id==='0' ? '' : id;
    const filterVal = () => filter === undefined ? '' : filter
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/filterPost?category_id=1&type_transport=${typeTransport()}&from=${from}&to=${to}`)
      .then(res=> {
        console.log(res)
        router.push(`/cargo?filter=${filterVal()}&id=${typeTransport()}&from_id=${from}&to_id=${to}&from_string=${fromString}&to_string=${toString}`)
        setLoading(false)
        setPosts(res.data.data)
        setCurrentPage(res.data.pagination.page)
        setTotal(res.data.pagination.total)
        setMaxPage(res.data.pagination.max_page)
      })
  }
  const onChangePage = (pageNum) => {
    setLoading(true)
    const typeTransport = () => id === undefined || id==='0' ? '' : id;
    const fromID = () => from_id === undefined ? '' : from_id
    const toID = () => to_id === undefined ? '' : to_id
    const filterVal = () => filter === undefined ? '' : filter
    const fromString = () => from_string ? from_string : '' 
    const toString = () => to_string ? to_string : ''
    console.log(pageNum)
      axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
        type_transport: typeTransport(),
        page: pageNum,
        from: fromID(),
        to: toID(),
      }})
        .then(res=> {
          router.push(`?page=${pageNum}&id=${typeTransport()}&filter=${filterVal()}&from_id=${fromID()}&from_string=${fromString()}&to_id=${toID()}&to_string=${toString()}`)
          console.log(res)
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })

  }

  return (

    
    <div>
      {!loadMapScript ? <div> Загрузка ... </div> :
        <Filter 
          queryFilter={filter ? filter : 'Все'}
          onChangeCategory={onChangeCategory}
          fromString = {from_string}
          fromId = {from_id}
          toString=  {to_string}
          toId = {to_id}
          onSearch={onSearch}
        />
      }
     
    <div className="products__container container">
    {loading ? <Loader /> : ''}
      <PostItem 
          post={posts}
          total={total}
          maxPage={maxPage}
          currentPage={currentPage}
          onChangePage={onChangePage}
          pathName={router.pathname}
        />
        <SideBarCurrency />
    </div>
      
    </div>
  )
}

export default Cargo