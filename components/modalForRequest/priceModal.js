import { currencies } from "../../defaults/defaults"

const PriceModal = ({actionLoading,modal,setModal, price, setPrice, currency, setCurrency, onSendRequest }) => {
  return (
    <div
      className={modal
      ? "driver_modal edit_photo active"
      : 'driver_modal edit_photo'}>
      <div className="driver_modal__inner ">
        <h2>Укажите цену</h2>
        <i className="fas fa-times driver_times" onClick={() => setModal(false)}/>
        <div className="edit_photo__img">
          <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {currencies.map(c => (
              <option value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <button
          disabled={actionLoading}
          id="close_edit_photo"
          className="btn block inherit"
          onClick={() => onSendRequest()}>Отправить...</button>

      </div>
    </div>
  )
}

export default PriceModal