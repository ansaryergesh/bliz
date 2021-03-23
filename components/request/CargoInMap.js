const CargoInMap = ({details}) => {
  return (
    <div class="driver_modal map">
      <div class="driver_modal__inner">
        <h2>Груз на карте</h2>
        <i class="fas fa-times driver_times"></i>
        <div class="modal__map">
        <iframe src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAP_API_KEY}&origin=${`place_id:${details.from}`}&destination=${`place_id:${details.to}`}&avoid=tolls|highways`} width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen='' aria-hidden="false" tabIndex={0} />
        </div>
        <h3 class="driver_online">ВОДИТЕЛЬ ОНЛАЙН</h3>
        <div class="modal__map__wrapper">
          <div class="modal__map__item">
            <span>Осталось до конца:</span>
            <p>~{details.duration}, {details.distance}</p>
          </div>
          <div class="modal__map__item">
            <span>Текущее местоположение:</span>
            {/* <p>Караганда, трасса M-36</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CargoInMap