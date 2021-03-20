import SideBarCurrency from "../../components/post/SideBarCurrency"
import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import axios from "axios"
import EquipmentItem from "../../components/equipment/EquipmentItem"
const Equipment = () => {
  const router = useRouter()
  const {id} = router.query
  const {page} = router.query
  const [loading, setLoading] = useState(true)
  const [equipments,setEquipments] = useState([{}])
  const [total,setTotal] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const [maxPage,setMaxPage] = useState(0)

  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/getAllEquipment?page=${page}`)
      .then(res=> {
        setLoading(false)
        setEquipments(res.data.data)
        setTotal(res.data.count)
        setMaxPage(res.data.max_page)
        setCurrentPage(res.data.current_page)
      })
  }, [])
  const onChangePage=(pageNum) => {
    axios.get(`${process.env.BASE_URL}/getAllEquipment?page=${pageNum}`)
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
      <div className="main_filter">
        <div className="main_filter__content container">
          <div className="main_filter__top flex_end">
            <div className="main_filter__top__item">
              <div className="filter__item__title">
                <h4>Город, регион</h4>
                <div className="filter__item__form">
                  <select className="storage__city_filter">
                    <option>Казахстан, Алматы</option>
                    <option>Казахстан, Астана</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="main_filter__top__item">
              <div className="filter__item__title">
                <h4>Техника</h4>
                <form className="filter__item__form">
                  <select className="storage__city_filter">
                    <option>Эсковаторы-погрузчики</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="main_filter__top__item">
              <div className="filter__item__title">
                <h4>Цена, ₸ за час</h4>
                <div className="filter__item__form">
                  <input className="mini_input" type="text" placeholder="от"/>
                  <div className="hr"/>
                  <input className="mini_input" type="text" placeholder="до"/>
                </div>
              </div>
            </div>
            <div className="main_filter__top__item">
              <div className="filter__item__form">
                <button>Сбросить</button>
                <button type="button" className="big_filter_btn">Все фильтры</button>
              </div>
            </div>
          </div>
          {/* <form className="main_filter__big">
            <div className="main_filter__big__items">
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
              <div className="main_filter__big__item">
                <select>
                  <option>Фильтр</option>
                </select>
              </div>
            </div>
            <div className="main_filter__big__items">
              <div className="main_filter__big__item">
                <input type="text" placeholder="Дата выгрузки"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Вес"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Фильтр"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Фильтр"/>
              </div>
              <div className="main_filter__big__item">
                <input type="text" placeholder="Фильтр"/>
              </div>
            </div>
          </form> */}
          <div className="main_filter__bottom">
            <div className="main_filter__bottom__item">
              <p>Казахстан, Алматы</p>
              <i className="fas fa-times"/>
            </div>
            <div className="main_filter__bottom__item">
              <p>от 100 м2 до 1 200 м2</p>
              <i className="fas fa-times"/>
            </div>
          </div>
        </div>
      </div>
      <div className="products__container container">
        <div className="products__content">
          <div className="products__title">
            <h4>Главная / Спецтехника / Землеройная техника / Эсковаторы-погрузчики</h4>
            <h1>Эсковаторы-погрузчики в Алматы</h1>
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