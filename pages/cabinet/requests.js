import axios from "axios"
import { useEffect, useState } from "react"
import InWork from "../../components/requests/InWork"
import Waiting from "../../components/requests/Waiting"
import cookie from 'js-cookie'
import withAuth from "../../hocs/withAuth"
import {useDispatch} from 'react-redux'
import BreadCumbs from "../../components/shared/BreadCumbsConfigure"
import LoadingSpinner from "../../components/shared/others/LoadingSpinner"
import RequestFromOther from "../../components/requests/RequestFromOther"
import CustomerWork from "../../components/requests/CustomerWork"
import ExecutorWork from "../../components/requests/ExecutorWork"
const Requests = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState('wait')
  const [executionWait, setExecutionWait] = useState({data: [], count: ''})
  const [requestFromOther, setRequestFromOther] = useState({data:[] , count: ''})
  const [executionWork, setExecutionWork] = useState({data: [], count: ''})
  const [requestInWork, setRequestInWork] = useState({})
  const [loading, setLoading] = useState(true)

  const onCancelRequest = (e) => {
    const order_id = e.target.name;
    const userToken = cookie.get('token')


    swal({
      title: 'Вы уверены отменить предложение',
      buttons: {
        catch:{
          text: "Да",
          value: 'yes'
        },
        cancel: 'Нет'
      }
    }).then(value=> {
      switch(value) {
        case 'yes':
          setLoading(true)
          axios.get(`${process.env.BASE_URL}/cancelOrder`, {params: {token: userToken, order_id: order_id}})
            .then(res=> {
              getSendedWaitingRequests()
              if(res.data.success) {
                setLoading(false)
                dispatch({type: 'SUCCESS_MESSAGE', payload: 'Отменен'})
                
              }else {
                setLoading(false)
                dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
              }
            })
      }
    })
  }


  useEffect(() => {
    getSendedWaitingRequests()
    getRequestFromOther()
    getWorkRequest()
    getWorkOther()
  },[])
  const getSendedWaitingRequests = () => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/customerOrdersInHold?token=${cookie.get('token')}`)
      .then(res => {
        setLoading(false)
        if(res.data.success) {
          setExecutionWait({
            data: res.data.data,
            count: res.data.count
          })
        }
      })
  }

  const getWorkRequest = () => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/customerOrdersInWork?token=${cookie.get('token')}`)
      .then(res => {
        setLoading(false)
        if(res.data.success) {
          setExecutionWork({
            data: res.data.data,
            count: res.data.count
          })
        }
      })
  }

  const getWorkOther = () => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/executorOrdersInWork?token=${cookie.get('token')}`)
      .then(res => {
        setLoading(false)
        if(res.data.success) {
          console.log(res.data.data)
          setRequestInWork({
            data:res.data.data,
            count: res.data.count
          })
        }
      })
  }

  const getRequestFromOther = () => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/executorOrdersInHold?token=${cookie.get('token')}`)
      .then(res => {
        setLoading(false)
        if(res.data.success) {
          setRequestFromOther({
            data:res.data.data,
            count: res.data.count
          })
        }
      })
  }
  return (
    <div className="grid-container margin container">
      <div className="section">
        <div className="products__title paddings little_pad">
          <BreadCumbs />
          <h1 className="smaller_font">Заявки</h1>
        </div>
        {loading ? <LoadingSpinner /> : ''}
        <nav className="cabinet_ad_nav">
          <div className="nav__wrapper">
            <div className="nav__links cabinet_ad_nav">
              <a className={active==='inwork' ? 'cabinet_ad_nav active' : ''} onClick={()=>setActive('inwork')}>В работе</a>
              <a className={active==='wait' ? 'cabinet_ad_nav active' : ''}  onClick={()=>setActive('wait')}>Предложения</a>
              <a className={active==='archive' ? 'gray_front cabinet_ad_nav active' : 'gray_front'}  onClick={()=>setActive('archive')}>Архив</a>
            </div>
          </div>
        </nav>
        {!loading && active==='inwork' ?  <>
          <CustomerWork count={executionWork.count} data={executionWork.data || []}/>
          <ExecutorWork count={requestInWork.count} data={requestInWork.data || []} />
          </> : ''}
        {active=== 'wait'  ?
          <>
            <Waiting onCancelRequest = {onCancelRequest} count={executionWait.count} data={executionWait.data || []}/> 
            <RequestFromOther count={requestFromOther.count} data={requestFromOther.data || []}/>
          </>
          :  ''}
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default withAuth(Requests)