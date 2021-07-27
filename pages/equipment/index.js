import SideBarCurrency from "../../components/post/SideBarCurrency"
import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import axios from "axios"
import cookie from 'js-cookie'
import FilterEquipment from '../../components/post/FilterEquipment'
import EquipmentItem from "../../components/equipment/EquipmentItem"
import { loadGoogleMapScript } from "../../defaults/googleMapDefaults"
import { eqCategories } from "../../defaults/eqCategories"
const Equipment = () => {
  const currentPlace_id = cookie.get('place_id') !== undefined ? cookie.get('place_id') : "";
  const currentPlace_name = cookie.get('formatted_address') !== undefined ? cookie.get('formatted_address') : "";
  const [geoLoc, setGeoLoc] = useState({place_id: currentPlace_id, formatted_address: currentPlace_name})
  const router = useRouter()
  const pathname = router.pathname
  const {id} = router.query
  const {from_id} = router.query
  const {filter} = router.query
  const {from_string} = router.query
  const {page} = router.query
  const [loading, setLoading] = useState(true)
  const [equipments,setEquipments] = useState([{}])
  const [total,setTotal] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [maxPage,setMaxPage] = useState(0)
  const [loadMapScript, setLoadMapScript] = useState(false)
  const [mobileFilter,setFilterMobile] = useState(false)
  const [selectType,setSelectType] = useState(id || '0')
  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMapScript(true)
    })
    setLoading(true)
  },[])

  const onFilterMobile = () => {
    if(!mobileFilter && window.screen.width <=796) {
      document.querySelector('.main_filter').style.display='none';
    }
    if(mobileFilter && window.screen.width <=796) {
      document.querySelector('.main_filter').style.display='inherit'
    }
    setFilterMobile(!mobileFilter)
  }

  const pageFinal = page ? page : 1

  const onSelectType = (e) => {
    setLoading(true)
    setSelectType(e.target.value)
    onChangeCategory(e.target.name, e.target.value)
  }
  const onChangeCategory = (catName,catId) => {
    setLoading(true)
      axios.get(`${process.env.BASE_URL}/filterEquipment`, {params: {
        category_id: catId===0 ? '' : catId,
        from: from_id
      }})
        .then(res=> {
          const queries = router.query;
          delete queries.page;
          router.push({path: pathname, query: {...queries, filter: catName, id: catId}})
          setLoading(false)
          setEquipments(res.data.data)
          setCurrentPage(res.data.current_page)
          setTotal(res.data.count)
          setMaxPage(res.data.max_page)
        })

  }
  
  const onChangePage=(pageNum) => {
    axios.get(`${process.env.BASE_URL}/filterEquipment?page=${pageNum}`)
      .then(res=> {
        router.push(`/equipment?page=${pageNum}`)
        setLoading(false)
        setEquipments(res.data.data)
        setTotal(res.data.count)
        setMaxPage(res.data.max_page)
        setCurrentPage(res.data.current_page)
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
      {!loadMapScript ? <div>Загрузка...</div> :
      
      <FilterEquipment
        queryFilter={filter ? filter : 'Все'}
       setLoading={setLoading}
       setPosts={setEquipments}
       setCurrentPage={setCurrentPage}
       setTotal={setTotal}
       setMaxPage={setMaxPage}
       mobileFilter={mobileFilter}
       onFilterMobile={onFilterMobile}
       currentPlace_id={geoLoc.place_id}
       currentPlace_name={geoLoc.formatted_address}
       onSelectType={onSelectType}
       selectType={selectType}
       onChangeCategory={onChangeCategory}
       // onSearch={onSearch}
     />
      }
      <div className="products__container container">
        <div className="products__content">
          <div className="products__title">
            <h4>Главная / Спецтехника / Землеройная техника / Эсковаторы-погрузчики</h4>
            <h1>Эсковаторы-погрузчики {from_string && "в " + from_string}</h1>
            <h3>Найдено {total} объявлений</h3>
          </div>
          <EquipmentItem equipments={equipments} maxPage={maxPage} currentPage={currentPage} onChangePage={onChangePage} loading={loading} />
          <div className="products__text">
            <div className="products__text__item">
              <h3>Аренда складов и складских помещений в Казахстане</h3>
              <p>Исходя из набора и качества этих параметров складу присваивается класс: A,
                B+, B или C. Стоит обратить внимание на склады B и C классов, где арендная
                ставка начинается с 2 000 тенге за кв. м. Чтобы снять склад в бизнес-центрах A
                или B+ класса, стоит заложить в бюджет от 3 500 до 20 000 тенге за кв. м.</p>
            </div>
            <div className="products__text__item">
              <h3>Ответхранение и склады в Алматы</h3>
              <p>С помощью профессиональной консалтинговой компании Bliz.kz можно найти склад
                в аренду в Алматы по выгодной цене без комиссии и посредников. Специалисты
                компании помогут подобрать помещение, учитывая пожелания и бюджет заказчика,
                организуют просмотр и подписание договора с собственником.</p>
            </div>
          </div>
        </div>
        
      <SideBarCurrency />
      </div>
    </div>

  )
}

export default Equipment;