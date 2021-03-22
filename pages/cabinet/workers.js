import axios from "axios"
import { useEffect, useState } from "react"
import BreadCumbs from "../../components/shared/BreadCumbsConfigure"
import cookie from 'js-cookie'
import {useDispatch} from 'react-redux'
import WorkerItem from "../../components/userCabinet/WorkerItem"

const Workers = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [positions, setPositions] = useState([])
  const [worker, setWorker] = useState({fio: '', email: '', phone: '', password: '', position: 1})
  const [workers,setWorkers] = useState([])
  useEffect(() => {
    getPositions();
    getWorkers()
  }, [])

  const getPositions = () => {
    axios.get(`${process.env.BASE_URL}/getPositions`)
     .then(res=> {
       setPositions(res.data)
     })
  }

  const getWorkers = () => {
    axios.get(`${process.env.BASE_URL}/getEmployee?token=${cookie.get('token')}`)
      .then(res=> {
        console.log(res.data.data)
        setWorkers(res.data.data)
      })
  }
  const onAddWorker = () => {
    console.log(worker)
    axios.post(`${process.env.BASE_URL}/addEmployee`, {
      fio: worker.fio,
      email: worker.email,
      phone: worker.phone,
      password: worker.password,
      position: worker.position,
      token: cookie.get('token')
    })
      .then(res => {
        if(res.data.success) {
          dispatch({type: 'SUCCESS_MESSAGE', payload: 'Добавлен'})
          setModal(false)
          getWorkers()
        }else {

          dispatch({type: 'ERROR_MESSAGE', payload: res.data.message})
        }
      })
  }


  return (
    <div className="grid-container container">
      <div className="section">
        <div className="products__title paddings little_pad">
         <BreadCumbs />
          <h1 className="smaller_font">Мои сотрудники</h1>
        </div>
        <div className="workers__container">
          <WorkerItem workers={workers}/>
  
          
          <div className={modal ? "driver_modal edit_photo active" : 'driver_modal edit_photo'}>
            <div className="driver_modal__inner ">
              <h2>Добавить сотрудника</h2>
              <i className="fas fa-times driver_times" onClick={()=>setModal(false)}/>
              <div className="edit_photo__img">
              <label>Email  </label>
              <input type='text' value={worker.email} onChange={e=> setWorker({...worker, email: e.target.value})} />


              <label><br/>ФИО </label>
              <input type='text' value={worker.fio} onChange={e=> setWorker({...worker, fio: e.target.value})} />

              <label><br/>Phone </label>
              <input type='text' value={worker.phone} onChange={e=> setWorker({...worker, phone: e.target.value})} />

              <label><br/> Пароль </label>
              <input type='password' value={worker.password} onChange={e=> setWorker({...worker, password: e.target.value})} />
              
              <label><br/>Позиция  </label>
              <select value={worker.position} onChange={(e) => setWorker({...worker,position: e.target.value})}>
                    {positions.map(c=> (
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>
              </div>

              {/* <div className="edit_photo__img">
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map(c=> (
                        <option value={c.id}>{c.name}</option>
                    ))}
                </select>
              </div>    */}
                <button id="close_edit_photo" className="btn block inherit" onClick={()=>onAddWorker()}>Добавить</button>
            </div>
          </div>
          <a className="btn" href="#" onClick={() => setModal(true)}>Добавить сотрудника</a>
        </div>
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default Workers