import { dateParse, dateParse2 } from "../../defaults/extraFunctions"

const RequestParticipant = ({participants}) => {
  const currencyText = (currency) => {
    if(currency ===1) {
      return '₸'
    }
    if(currency ===2) {
      return 'р'
    }
    else {
      return '$'
    }
  }
  return (
    <div className="request_item">
      <h3>Предложения перевозчиков:</h3>
      {participants.map(p => (
        <div className="request_item__section first">
          <div className="requset__item__name">
            <div className="requset__item__name__img">
              <img src="/img/widgets/user.png" alt/>
            </div>
            <div className="requset__item__name__title">
              <h4>{p.fullName}</h4>
              <span>{p.type}</span>
            </div>
          </div>
            <div className="request_item__date">
              <p>{p.created_at !== undefined ? dateParse2(p.created_at) : ''}</p>
            </div>
            <div className="request_item__price">
              <h2>{p.price} {currencyText(p.currency)}</h2>
            </div>
          <div className="request_item__btns">
            <a name = {p.user_id} className="btn tablet inherit" href="#">Принять предложение</a>
            <a name = {p.user_id} className="btn btn--white tablet gray open_rejection_modal" href="#">Отказать с причиной</a>
          </div>
        </div>
      ))}

    </div>
  )
}

export default RequestParticipant;