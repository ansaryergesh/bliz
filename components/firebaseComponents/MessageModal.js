const MessageModal = ({actionLoading,modal,setModal, message,setMessage, onSendRequest }) => {
  return (
    <div
      className={modal
      ? "driver_modal edit_photo active"
      : 'driver_modal edit_photo'}>
      <div className="driver_modal__inner ">
        <h2>Сообщения</h2>
        <i className="fas fa-times driver_times" onClick={() => setModal(false)}/>
        <div className="edit_photo__img">
          <input type='textarea' value={message} onChange={(e) => setMessage(e.target.value)}/>
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

export default MessageModal