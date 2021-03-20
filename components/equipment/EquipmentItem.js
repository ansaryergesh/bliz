import PaginationBtns from "../pagination/PaginationBtns"

const EquipmentItem = ({
  equipments,
  maxPage,
  currentPage,
  onChangePage,
  loading
}) => {
  return (

    <div className="products__items__wrapper">
      {loading ? <div>Загрузка...</div> :  <div className="">
        {equipments.map(e => (
          <div className="storage__item">
            <div className="storage__item__img">
              <img src="/img/equipment/eskovator1.png" alt/>
            </div>
            <div className="storage__item__desc">
              <div className="storage__item__title">
                <a href="#">{e.details ? e.name : ''}</a>
                <h3>{e.details ? e.details[0].price: ''}</h3>
              </div>
              <div className="storage__item__details">
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">масса</p>
                    <div className="table__dash__bord"></div>
                  </div>
                  <div className="table__column__2 small">
                    <p>{e.details ? e.details[0].net : ''} тн</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">мобильнсоть</p>
                    <div className="table__dash__bord"></div>
                  </div>
                  <div className="table__column__2 small">
                    <p>колесный</p>
                  </div>
                </div>
                <div className="table__row">
                  <div className="table__column__1">
                    <p className="goods__info__gray small">емкость ковша</p>
                    <div className="table__dash__bord"></div>
                  </div>
                  <div className="table__column__2 small">
                    <p>60 тн/м3</p>
                  </div>
                </div>
              </div>
              <div className="storage__item__adress right_self">
                <div className="storage__item__adress__item">
                  <p>{e.user ? e.user[0].fullName : ''}</p>
                  <span>7 мая 12:30</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </ div>}
      <PaginationBtns max_page={maxPage} current_page={currentPage} onChangePage={onChangePage} />
     
    </div>
  )
}

export default EquipmentItem