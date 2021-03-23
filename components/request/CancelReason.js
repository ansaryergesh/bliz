const CancelReason = () => {
  return (
    <div className="driver_modal rejection">
      <div className="driver_modal__inner">
        <h2>Отказ от предложения</h2>
        <i className="fas fa-times driver_times"/>
        <textarea
          placeholder="Напишите причину отказа…"
          cols={30}
          rows={10}
          defaultValue={""}/>
        <div className="driver_modal__btns">
          <a id="choose_driver" className="btn tablet" href="#">Отказать</a>
          <a className="btn btn--white tablet gray" href="#">Отменить</a>
        </div>
      </div>
    </div>

  )
}

export default CancelReason;