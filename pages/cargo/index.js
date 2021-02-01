import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import Loader from '../../components/shared/others/LoadingSpinner'
import Filter from '../../components/post/Filter'

const Cargo = () => {
  const router  = useRouter()
  const {filter} = router.query
  const {page} = router.query

  const [activeCategory, setActiveCategory] = useState('Все')
  const [categoryId, setCategoryId] = useState(0)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])



  const onChangeCategory = (catName,catId) => {
    // router.push(`/cargo?filter=${catName}`)
    console.log("ok"+ catName)
    console.log(catId)
    // if(id!== 0) {
    //   axios.get(`https://test.money-men.kz/api/getPost?category_id=1&sub_id`)
    // }else {
    //   axios.get(`https://test.money-men.kz/api/getPost?category_id=1`)
    // }
  }

  return (
    <div>
      <Filter queryFilter={filter ? filter : 'Все'} onChangeCategory={onChangeCategory}/>
      <p>{filter} result</p>
      <p>{page} page</p>
      <h2>Hello</h2>
    </div>
  )
}

export default Cargo