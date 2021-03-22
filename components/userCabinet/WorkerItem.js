const WorkerItem = ({workers}) => {
  return(
    <>
     {workers.map(w=> (
      <div className="worker__item">
      <div className="workers__picture">
        <div className="user__profile__img">
          <img src="/img/widgets/user_img.png" alt/>
        </div>
        <div className="workers__name">
          <h3>{w.fio}</h3>
          <p>{w.position}</p>
        </div>
      </div>
      <div className="workers__contacts">
        <h4>{w.phone}</h4>
        <h4>{w.email}</h4>
      </div>
      <div className="worker__edit">
        <a className="btn btn--white" href="#">Изменить</a>
        <a className="btn btn--white" href="#"><i className="far fa-trash-alt"/></a>
      </div>
    </div>
     ))}
    </>
  )
}

export default WorkerItem;