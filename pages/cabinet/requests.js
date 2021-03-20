import axios from "axios"
import { useEffect, useState } from "react"
import InWork from "../../components/requests/InWork"
import Waiting from "../../components/requests/Waiting"
import cookie from 'js-cookie'
import withAuth from "../../hocs/withAuth"
import BreadCumbs from "../../components/shared/BreadCumbsConfigure"
const Requests = () => {

  const [active, setActive] = useState('wait')
  const [executionWait, setExecutionWait] = useState({data: [], count: ''})
  const [executionWork, setExecutionWork] = useState({data: [], count: ''})

  useEffect(() => {
    axios.get(`https://test.money-men.kz/api/executorOrdersInHold?token=${cookie.get('token')}`)
      .then(res => {
        if(res.data.success) {
          setExecutionWait({
            data: res.data.data,
            count: res.data.count
          })
        }
      })
  },[])
  return (
    <div className="grid-container margin container">
      <div className="section">
        <div className="products__title paddings little_pad">
          <BreadCumbs />
          <h1 className="smaller_font">Заявки</h1>
        </div>
        <nav className="cabinet_ad_nav">
          <div className="nav__wrapper">
            <div className="nav__links cabinet_ad_nav">
              <a className={active==='inwork' ? 'cabinet_ad_nav active' : ''} onClick={()=>setActive('inwork')}>В работе</a>
              <a className={active==='wait' ? 'cabinet_ad_nav active' : ''}  onClick={()=>setActive('wait')}>Предложения</a>
              <a className={active==='archive' ? 'gray_front cabinet_ad_nav active' : 'gray_front'}  onClick={()=>setActive('archive')}>Архив</a>
            </div>
          </div>
        </nav>
        {active==='inwork' ?  <InWork /> : ''}
        {active=== 'wait'  ? <Waiting count={executionWait.count} data={executionWait.data}/> :  ''}
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default withAuth(Requests)