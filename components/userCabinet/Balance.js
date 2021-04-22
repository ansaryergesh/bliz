const Balance = ({balance}) => {
  return (
    <div className="balance__details">
      <div className="balance__detail__item">
        <p>Статус:</p>
        <div className="balance__detail__item__inner">
          <h3>Лимитед</h3>
        </div>
      </div>
      <div className="balance__detail__item">
        <p>Рейтинг:</p>
        <div className="balance__detail__item__inner">
          <i className="far fa-star"/>
          <h3 className="blue">0</h3>
        </div>
      </div>
      <div className="balance__detail__item">
        <p>Баланс:</p>
        <div className="balance__detail__item__inner">
          <img src="/img/widgets/tenge.svg" alt/>
          <h3 className="green">{balance}
            ₸</h3>
        </div>
      </div>
    </div>
  )
}

export default Balance;