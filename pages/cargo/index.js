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
  const pathname = router.pathname
  const {filter} = router.query
  const {id} = router.query
  const {from_string} = router.query
  const {from_id} = router.query
  const {to_string} = router.query
  const {net_start} = router.query
  const {net_end} = router.query
  const {volume_start} = router.query
  const {volume_end} = router.query
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
      console.log(router.query)
    })
    setLoading(true)
    const typeTransport = () =>  id==='0' ? '' : id;
    axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
      page: page,
      type_transport: typeTransport(),
      from: from_id,
      to: to_id,
      net_start:net_start,
      net_end: net_end,
      volume_start: volume_start,
      volume_end: volume_end
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
      axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
        type_transport: catId===0 ? '' : catId,
        from: from_id,
        to: to_id,
      }})
        .then(res=> {
          const queries = router.query;
          delete queries.page;
          router.push({path: pathname, query: {...queries, filter: catName, id: catId}})
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })

  }
  // const onSearch = (
  //   from,
  //   to, 
  //   fromString,
  //   toString,
  //   netStart,
  //   netEnd,
  //   volumeStart,
  //   volumeEnd
  // ) => {
  //   const queries = router.query;
  //   delete queries.page;
  //   const typeTransport = () =>  id==='0' ? '' : id;
    

  //   setLoading(true)
  //   axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
  //     type_transport: typeTransport(),
  //     from: from,
  //     to: to,
  //     net_start: netStart,
  //     net_end: netEnd,
  //     volume_start: volumeStart,
  //     volume_end: volumeEnd
  //   }})
  //     .then(res=> {
  //       console.log(res)
  //       if (!from_string) {
  //         delete queries.from_string;
  //         delete queries.from_id
  //       }
  //       if(!to_string) {
  //         delete queries.to_string;
  //         delete queries.to_id
  //       }
  //       if(!net_start) {
  //         delete queries.net_start
  //       }
  //       if(!net_end) {
  //         delete queries.net_end
  //       }
  //       setLoading(false)
  //       setPosts(res.data.data)
  //       setCurrentPage(res.data.pagination.page)
  //       setTotal(res.data.pagination.total)
  //       setMaxPage(res.data.pagination.max_page)
  //     })
  // }
  const onChangePage = (pageNum) => {
    setLoading(true)
    const typeTransport = () =>  id==='0' ? '' : id;
    console.log(pageNum)
      axios.get(`${process.env.BASE_URL}/filterPost`, {params: {
        type_transport: typeTransport(),
        page: pageNum,
        from: from_id,
        to: to_id,
      }})
        .then(res=> {
          router.push({path: pathname, query: {...router.query, page: pageNum}})
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
          setLoading={setLoading}
          setPosts={setPosts}
          setCurrentPage={setCurrentPage}
          setTotal={setTotal}
          setMaxPage={setMaxPage}
          // onSearch={onSearch}
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