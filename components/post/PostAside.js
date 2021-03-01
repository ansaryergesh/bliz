import { formatPhoneNumber, formatPhoneNumberHidden, parseDateTime} from "../../defaults/extraFunctions";

const PostAside = ({postinfo}) => {
  return(
    <aside className="aside">
          <div className="aside__contactCard">
            <p>Контактная информация</p>
            <div className="contactCard__content">
              <img src="/img/widgets/company_icon.png" alt/>
              <div className="contactCard__title">
                <h3>{postinfo.user.companyDetails.companyName}</h3>
                <p>Рейтинг: 5.0</p>
              </div>
            </div>
            <div className="contactCard__num">
              <p>{formatPhoneNumber(postinfo.user.phone)}
                <span className="hidden_num">
              {formatPhoneNumberHidden(postinfo.user.phone)}</span>
              </p>
              <button className="show_num">Показать телефон</button>
            </div>
            <a className="btn" href="#">Написать сообщение</a>
          </div>
          <div className="aside__functions__wrapper">
            <div className="aside__functions">
              <a className="izbrannoe" href="#"><i className="far fa-star"/>В избранное</a>
              <a className="download" href="example" download><img src="/img/widgets/aside_function1.png" alt/></a>
              <a className="print" href="javascript:(print());"><img src="/img/widgets/aside_function2.png" alt/></a>
              <a className="someShit" href="#"><img src="/img/widgets/aside_function3.png" alt/></a>
            </div>
            <div className="aside__changed_date">
              <p>Изменено: {parseDateTime(postinfo.updated_at)}</p>
            </div>
          </div>
        </aside>
  )
}

export default PostAside;