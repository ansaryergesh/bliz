const StorageCal = () => {
  return (
    <div className="modal__calculator">
      <div className="calculator__content">
        <button className="close__calc__modal"><i className="fas fa-times"/></button>
        <h2 className="calculator__content__title">Укажите параметры хранения
          <br/>
          и мы рассчитаем оптимальную площадь</h2>
        <div className="calculator__table">
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>тип расчета</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <a href="#" className="active">По кол-ву паллето мест</a>
                <a href="#">По площади склада</a>
              </div>
              <div className="calc__column__item">
                <p>Калькулятор рассчитает площадь необходимую для
                  <br/>
                  хранения выбранного количества паллето мест</p>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Кол-во паллето мест</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <input type="number" defaultValue={100} width={10}/>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Класс склада</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <a href="#" className="calc__column__item2 active">А</a>
                <a href="#" className="calc__column__item2">B</a>
                <a href="#" className="calc__column__item2">C</a>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Высота склада</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <input type="number" defaultValue={100} width={10}/>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Кол-во паллето мест</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <select>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                </select>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Зона экспедиции</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc mobile_wrap">
                <input
                  type="range"
                  defaultValue={18}
                  min={1}
                  max={100}
                  oninput="this.nextElementSibling.value = this.value"/>
                <input type="text" defaultValue="18%" readOnly/>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Тип паллеты</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <a href="#" className="calc__column__item2 active">EUR 1200X800</a>
                <a href="#" className="calc__column__item2">FIN 1200X1000</a>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p>Проезд для техники</p>
            </div>
            <div className="calculator__table__column2">
              <div className="filter__item__form filter__item__form--calc">
                <a href="#" className="calc__column__item2 active">2.5 - 2.9 м.</a>
                <a href="#" className="calc__column__item2">3 - 3.2 м.</a>
                <a href="#" className="calc__column__item2">более 3.3 м.</a>
              </div>
            </div>
          </div>
          <div className="calculator__table__row">
            <div className="calculator__table__column1">
              <p className="calc__column__item2">46 - 49 м2</p>
              <div className="calc__column__item">
                <p>Рекомендуемая
                  <br/>
                  площадь склада</p>
              </div>
            </div>
            <div className="calculator__table__column2">
              <div className="calc__column__item">
                <p>
                  * Результаты расчета данного калькулятора являются
                  <br/>
                  приблизительными, так как расчет производится исходя только
                  <br/>
                  из основных вводных данных. В расчете не учитываются
                  <br/>
                  конструктивные особенности склада.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StorageCal;