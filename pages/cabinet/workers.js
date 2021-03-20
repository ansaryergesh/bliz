import BreadCumbs from "../../components/shared/BreadCumbsConfigure"

const Workers = () => {
  return (
    <div className="grid-container container">
      <div className="section">
        <div className="products__title paddings little_pad">
         <BreadCumbs />
          <h1 className="smaller_font">Мои сотрудники</h1>
        </div>
        <div className="workers__container">
          <div className="worker__item">
            <div className="workers__picture">
              <div className="user__profile__img">
                <img src="/img/widgets/user_img.png" alt/>
              </div>
              <div className="workers__name">
                <h3>Баталгазиев Руслан</h3>
                <p>Логист</p>
              </div>
            </div>
            <div className="workers__contacts">
              <h4>+7 701 399 35 38</h4>
              <h4>bat.ruslan@gmail.com</h4>
            </div>
            <div className="worker__edit">
              <a className="btn btn--white" href="#">Изменить</a>
              <a className="btn btn--white" href="#"><i className="far fa-trash-alt"/></a>
            </div>
          </div>
          <div className="worker__item">
            <div className="workers__picture">
              <div className="user__profile__img">
                <img src="/img/widgets/user_img.png" alt/>
              </div>
              <div className="workers__name">
                <h3>Баталгазиев Руслан</h3>
                <p>Логист</p>
              </div>
            </div>
            <div className="workers__contacts">
              <h4>+7 701 399 35 38</h4>
              <h4>bat.ruslan@gmail.com</h4>
            </div>
            <div className="worker__edit">
              <a className="btn btn--white" href="#">Изменить</a>
              <a className="btn btn--white" href="#"><i className="far fa-trash-alt"/></a>
            </div>
          </div>
          <div className="worker__item">
            <div className="workers__picture">
              <div className="user__profile__img">
                <img src="/img/widgets/user_img.png" alt/>
              </div>
              <div className="workers__name">
                <h3>Баталгазиев Руслан</h3>
                <p>Логист</p>
              </div>
            </div>
            <div className="workers__contacts">
              <h4>+7 701 399 35 38</h4>
              <h4>bat.ruslan@gmail.com</h4>
            </div>
            <div className="worker__edit">
              <a className="btn btn--white" href="#">Изменить</a>
              <a className="btn btn--white" href="#"><i className="far fa-trash-alt"/></a>
            </div>
          </div>
          <a className="btn" href="#">Добавить сотрудника</a>
        </div>
      </div>
      <div className="aside"></div>
    </div>

  )
}

export default Workers