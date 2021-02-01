import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from '../../components/shared/others/LoadingSpinner'
import Filter from '../../components/post/Filter'
import PostItem from '../../components/post/PostItem'
import PostAside from '../../components/post/PostAside';

const Cargo = () => {
  const router  = useRouter()
  const {filter} = router.query
  const {id} = router.query
  const {page} = router.query

  const [activeCategory, setActiveCategory] = useState('Все')
  const [categoryId, setCategoryId] = useState(0)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [maxPage,setMaxPage] = useState(0)

  useEffect(() => {
    setLoading(true)
    if(filter === undefined) {
      if(page===undefined && page===1) {
        axios.get(`${process.env.BASE_URL}/getPost?category_id=1`)
        .then(res=> {
          setLoading(false)
          setPosts(res.data.data)
          setTotal(res.data.pagination.total)
          setCurrentPage(res.data.pagination.page)
          setMaxPage(res.data.pagination.max_page)
        })
      }
      else {
        axios.get(`${process.env.BASE_URL}/getPost?category_id=1&page=${page}`)
        .then(res=> {
          setLoading(false)
          setPosts(res.data.data)
          setTotal(res.data.pagination.total)
          setCurrentPage(res.data.pagination.page)
          setMaxPage(res.data.pagination.max_page)
        })
      }
    }else {
      if(page === undefined && page===1) {
        axios.get(`${process.env.BASE_URL}/getPost?category_id=1&sub_id=${id}`)
          .then(res=> {
            setLoading(false)
            setPosts(res.data.data)
            setCurrentPage(res.data.pagination.page)
            setTotal(res.data.pagination.total)
            setMaxPage(res.data.pagination.max_page)
          })
      }else {
        axios.get(`${process.env.BASE_URL}/getPost?category_id=1&sub_id=${id}&page=${page}`)
          .then(res=> {
            setLoading(false)
            setPosts(res.data.data)
            setCurrentPage(res.data.pagination.page)
            setTotal(res.data.pagination.total)
            setMaxPage(res.data.pagination.max_page)
          })
      }
    }
  },[])

  const onChangeCategory = (catName,catId) => {
    setLoading(true)
    router.push(`/cargo?filter=${catName}&id=${catId}`)


    if(catId!== 0) {
      axios.get(`${process.env.BASE_URL}/getPost?category_id=1&sub_id=${catId}`)
        .then(res=> {
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })
    }else {
      axios.get(`${process.env.BASE_URL}/getPost?category_id=1`)
        .then(res=> {
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })
    }
  }

  const onChangePage = (pageNum) => {
    setLoading(true)
    if(filter !== undefined) {
      router.push(`/cargo?filter=${filter}&id=${id}&page=${pageNum}`)
      axios.get(`${process.env.BASE_URL}/getPost?category_id=1&sub_id=${id}&page=${pageNum}`)
        .then(res=> {
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })
    }
    else {
      router.push(`/cargo?page=${pageNum}`)
      axios.get(`${process.env.BASE_URL}/getPost?category_id=1&page=${pageNum}`)
        .then(res=> {
          setLoading(false)
          setPosts(res.data.data)
          setCurrentPage(res.data.pagination.page)
          setTotal(res.data.pagination.total)
          setMaxPage(res.data.pagination.max_page)
        })
    }
  }

  return (

    
    <div>
      {loading ? <Loader /> : ''}
      <Filter queryFilter={filter ? filter : 'Все'} onChangeCategory={onChangeCategory}/>
      
    <div className="products__container container">
      <PostItem 
          post={posts}
          total={total}
          maxPage={maxPage}
          currentPage={currentPage}
          onChangePage={onChangePage}
          pathName={router.pathname}
        />
        <PostAside />
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