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
  const [mobileFilter,setFilterMobile] = useState(false)
  const [tops,setTops] = useState({})
  const [selectType,setSelectType] = useState('')
  const getTops = () => {
    axios.get('https://test.money-men.kz/api/newGetPost?category_id=2')
      .then(res=> {
        setTops(res.data.top)
      })
  }

  const onSelectType = (e) => {
    setLoading(true)
    setSelectType(e.target.value)
    onChangeCategory(e.target.name, e.target.value)
  }
  useEffect(() => {
    getTops()
    loadGoogleMapScript(() => {
      setLoadMapScript(true)
    })
    setLoading(true)
    const pageVal = () => page === undefined ? '' : page;
    const typeTransport = () => id === undefined || id==='0' ? '' : id;
    const fromID = () => from_id === undefined ? '' : from_id
    const toID = () => to_id === undefined ? '' : to_id



    // axios.get(`${process.env.BASE_URL}/filterCargo`, {params: {
    //   page: pageVal(),
    //   type_transport: typeTransport(),
    //   from: fromID(),
    //   to: toID(),
    // }})
    //   .then(res => {
    //     console.log(res)
    //     setLoading(false)
    //     setPosts(res.data.data)
    //     setTotal(res.data.pagination.total)
    //     setCurrentPage(res.data.pagination.page)
    //     setMaxPage(res.data.pagination.max_page)
    //   })
  },[])

  const onChangeCategory = (catName,catId) => {
    setLoading(true)
    const fromID = () => from_id === undefined ? '' : from_id
    const toID = () => to_id === undefined ? '' : to_id
    const fromString = () => from_string ? from_string : '' 
    const toString = () => to_string ? to_string : ''
  
      axios.get(`${process.env.BASE_URL}/filterCargo`, {params: {
        type_transport: catId===0 ? '' : catId,
        from: fromID(),
        to: toID(),
      }})
        .then(res=> {
          console.log(res)
          router.push(`/cargo/transport?filter=${catName}&id=${catId}&from_id=${fromID()}&to_id=${toID()}&from_string=${fromString()}&to_string=${toString()}`)
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
    axios.get(`${process.env.BASE_URL}/filterCargo?type_transport=${typeTransport()}&from=${from}&to=${to}`)
      .then(res=> {
        console.log(res)
        router.push(`/cargo/transport?filter=${filterVal()}&id=${typeTransport()}&from_id=${from}&to_id=${to}&from_string=${fromString}&to_string=${toString}`)
        setLoading(false)
        setPosts(res.data.data)
        setCurrentPage(res.data.pagination.page)
        setTotal(res.data.pagination.total)
        setMaxPage(res.data.pagination.max_page)
      })
  }

  const onFilterMobile = () => {
    if(!mobileFilter && window.screen.width <=796) {
      document.querySelector('.main_filter').style.display='none';
      // document.body.style.overflow='hidden'
    }
    if(mobileFilter && window.screen.width <=796) {
      document.querySelector('.main_filter').style.display='inherit'
    }
    setFilterMobile(!mobileFilter)
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
      axios.get(`${process.env.BASE_URL}/filterCargo`, {params: {
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
       <div className='filter_icon'>
        <div onClick={() => onFilterMobile()}>   
          <i class="fas fa-sliders-h "></i>
     
          <p>Фильтр {Object.keys(router.query).length!==0 && `(${Object.keys(router.query).length})`} </p>
        </div>
      </div>
      {!loadMapScript ? <div> Загрузка ... </div> :
        <Filter 
          queryFilter={filter ? filter : 'Все'}
          onChangeCategory={onChangeCategory}
          fromString = {from_string}
          setLoading = {setLoading}
          fromId = {from_id}
          setPosts={setPosts}
          setCurrentPage={setCurrentPage}
          setTotal={setTotal}
          setMaxPage={setMaxPage}
          toString=  {to_string}
          toId = {to_id}
          mobileFilter={mobileFilter}
          onFilterMobile={onFilterMobile}
          onSearch={onSearch}
          onSelectType={onSelectType}
          selectType={selectType}
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
          tops={tops}
        />
        <SideBarCurrency />
    </div>
      
    </div>
  )
}

export default Cargo