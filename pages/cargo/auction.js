import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from '../../components/shared/others/LoadingSpinner'
import Filter from '../../components/post/Filter'
import PostItem from '../../components/post/PostItem'
import AuctionItem from '../../components/post/AuctionItem'
import SideBarCurrency from '../../components/post/SideBarCurrency';
import cookie from 'js-cookie'
const Cargo = () => {
  const dispatch = useDispatch();
  const router  = useRouter()
  const {filter} = router.query
  const {id} = router.query
  const {page} = router.query

  const [activeCategory, setActiveCategory] = useState('Все')
  const [categoryId, setCategoryId] = useState(0)
  const [loading, setLoading] = useState(true)
  const [auctions, setAuctions] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [maxPage,setMaxPage] = useState(0)
 
  useEffect(() => {
    getAuction()
  },[])

  
  const getAuction = () => {
    setLoading(true)
    let pageN = page === undefined ? '' : page;
    axios.get(`${process.env.BASE_URL}/getAllAuction?page=${pageN}`)
      .then(res=> {
        
      console.log('something')
        setLoading(false)
        setAuctions(res.data.data)
        setCurrentPage(res.data.current_page)
        setTotal(res.data.total)
        setMaxPage(res.data.max_page)
      })
  }

  const onParticipate = (aucId,price, currency) => {
    dispatch({type: 'CLOSE_MESSAGE'})
    let tokenUser = cookie.get('token')
    if(tokenUser!== undefined) {
      axios.post(`${process.env.BASE_URL}/sendAuctionRequest`, {
        token: tokenUser,
        price:price,
        currency:currency,
        auction_id: aucId
      })
        .then(res=> {
          console.log(res)
          if(res.data.success) {
            dispatch({type: 'SUCCESS_MESSAGE', payload: 'Вы участвуете'})
            getAuction()
          }
          else {
            dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
          }
        })
    }else {
      dispatch({type: 'ERROR_MESSAGE', payload: 'Чтобы участвовать в аукцион вам надо зайти на сайт через аккаунт'})
    }
   
  }

  const onChangePage = (pageNum) => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/getAllAuction?page=${pageNum}`)
    .then(res=> {
      router.push(`/cargo/auction?page=${pageNum}`)
      setLoading(false)
      setAuctions(res.data.data)
      setTotal(res.data.total)
      setCurrentPage(res.data.current_page)
      setMaxPage(res.data.max_page)
      console.log(auctions)
    })
  }

  return (

    
    <div>
     
      {/* <Filter queryFilter={filter ? filter : 'Все'} onChangeCategory={onChangeCategory}/> */}
      
    <div className="products__container container">
      {loading ? <Loader /> : ''}
      <AuctionItem 
        total={total}
        auctions={auctions}
        maxPage={maxPage}
        currentPage={currentPage}
        loading={loading}
        onChangePage={onChangePage}
        onParticipate={onParticipate}
      />
      
      <SideBarCurrency />
    </div>
      
    </div>
  )
}

Cargo.getInitalProps = async ({router}) => {
  const {page} = router.query
  const {filter} = router.filter
  const {id} = router.id
  if(filter!== undefined) {
    const items = await axios.get(`${process.env.BASE_URL}/getPost?category_id=1&sub_id=${id}&page=${page}`)
    return {
      posts: items.data.data,
      isLoading: false
    }
  }else {
    const items = await axios.get(`${process.env.BASE_URL}/getPost?category_id=1&page=${page}`)
    return {
      posts: items.data.data,
      isLoading: false
    }
  }
 
}
export default Cargo