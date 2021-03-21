import { dateParse2 } from '../../defaults/extraFunctions';
import PaginationBtns from '../pagination/PaginationBtns'
import SideBarCurrency from '../post/SideBarCurrency';

const StorageItems = ({total, storages, maxPage, currentPage, onChangePage, loading}) => {
  return (
    <>
    
      
        <div className="products__items__wrapper">
          {loading? <div>Загрузка...</div> :
            <>
              {storages.map((s) => (
                 <div className="storage__item">
                    <div className="storage__item__img">
                      <img src={s.images && s.images=== [] ? '/img/no_post_image.jpg' : '/img/no_post_image.jpg'} alt/>
                    </div>
                    <div className="storage__item__desc">
                      <div className="storage__item__title">
                        <a href={`storage/${s.id}`}>Склад ", Алматы</a>
                        <h3>{s.properties? s.properties[0].price : ''}</h3>
                      </div>
                      <div className="storage__item__details">
                        <div className="table__row">
                          <div className="table__column__1">
                            <p className="goods__info__gray small">площадь</p>
                            <div className="table__dash__bord"></div>
                          </div>
                          <div className="table__column__2 small">
                            <p>{s.properties? s.properties[0].area : ''} м2</p>
                          </div>
                        </div>
                        <div className="table__row">
                          <div className="table__column__1">
                            <p className="goods__info__gray small">общ. площадь</p>
                            <div className="table__dash__bord"></div>
                          </div>
                          <div className="table__column__2 small">
                            <p>{s.properties ? s.properties[0].total_area : ''} м2</p>
                          </div>
                        </div>
                        <div className="table__row">
                          <div className="table__column__1">
                            <p className="goods__info__gray small">класс и тип</p>
                            <div className="table__dash__bord"></div>
                          </div>
                          <div className="table__column__2 small">
                            <p>B+ / сухой (+14/+24)</p>
                          </div>
                        </div>
                      </div>
                      <div className="storage__item__adress">
                        <div className="storage__item__adress__item">
                          <h4>{s.properties ? s.properties[0].region  : ''}</h4>
                          <a className="opacity_btn" href="#">показать на карте</a>
                        </div>
                        <div className="storage__item__adress__item">
                          <p>{s.user && s.user[0].companyDetails ? s.user[0].companyDetails[0].companyName : ''}</p>
                          <span>{s.updated_at ? dateParse2(s.updated_at)  : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  
              ))}
            
          </>
          }
          
       
          <PaginationBtns max_page={maxPage} current_page={currentPage} onChangePage={onChangePage} />
        </div>
      
      </>
  )
}

export default StorageItems;