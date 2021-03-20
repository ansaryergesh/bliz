import { useState } from "react";
import SideBarCurrency from "../../components/post/SideBarCurrency"

const Check = () => {
    const [coutry, setCountry] = useState(1);
    return (<div>
<div className="products__container container">
  <div className="products__content">
    <div className="products__title">
      
      <h4><a href='/'>Главная</a> / <a href='/cargo'>Грузоперевозки</a> / <a className='gray_font'>Проверка компаний</a></h4>
      <h1>Проверить компанию</h1>
      <h3>Вы сможете проверить компанию из любой страны мира с помощью формы ниже</h3>
    </div>
    <div className="dis_calc border_bot">
      <div className="dis_calc__top">
        <form className="disc_calc__form">
          <div className="dis_calc__item check_company__item">
            <h3>Выберите страну</h3>
            <select onChange={(e) => setCountry(e.target.value)} className="check_company_select">
            <option value='1'>Казахстан</option>
              <option value='2'>Украина</option>
              
              <option value='3'>Россия</option>
              <option value='4'>Узбекистан</option>
            </select>
          </div>
          <a className="btn" href="#">ПОКАЗАТЬ</a>
        </form>
      </div>
    </div>
    <div className="check_company__services">
      <h2>Казахстан: сервисы и ресурсы для проверки компаний</h2>
      <div className="check_company__service__item">
        <a target="_blank" href="https://kgd.gov.kz/ru/services/taxpayer_search/legal_entity"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://kgd.gov.kz/ru/services/taxpayer_search/legal_entity">1.	Реестр юридических лиц Казахстана.</a>
          <p>kgd.gov.kz/ru/services/taxpayer_search/legal_entity</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/adilet?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/adilet?lang=kk">Реестр должников по исполнительным производствам.</a>
          <p>gov.kz/memleket/entities/adilet</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="http://portal.goszakup.gov.kz/portal/index.php/ru/oebs/subjects"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="http://portal.goszakup.gov.kz/portal/index.php/ru/oebs/subjects">Портал государственных закупок.</a>
          <p>portal.goszakup.gov.kz/portal/index.php/ru/oebs/subjects</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/qriim?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/qriim?lang=kk">Перечень ненадежных потенциальных поставщиков.</a>
          <p>www.gov.kz/memleket/entities/qriim?lang=kk</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/qriim?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/qriim?lang=kk">Национальный банк Казахстана</a>
          <p>gov.kz/memleket/entities/qriim?lang=kk</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/qriim?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/qriim?lang=kk">6.	Реестр гос. предприятий Казахстана.</a>
          <p>gov.kz/memleket/entities/qriim?lang=kk</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/prokuror?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/prokuror?lang=kk">Проверки ген. прокуратуры.</a>
          <p>gov.kz/memleket/entities/prokuror?lang=kk</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gosreestr.kz/ru/"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gosreestr.kz/ru/">Розыск преступников и без вести пропавших лиц (логин и пароль: KontragentKZ).</a>
          <p>gosreestr.kz/ru/</p>
        </div>
      </div>
      
   
      <div className="check_company__service__item">
        <a target="_blank" href="https://www.nationalbank.kz/kz?docid=1&switch=russian"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.nationalbank.kz/kz?docid=1&switch=russian">База криминального автотранспорта (логин и пароль: KontragentKZ).</a>
          <p>nationalbank.kz/kz?docid=1&switch=russian</p>
        </div>
      </div>
      <div className="check_company__service__item">
        <a target="_blank" href="https://kgd.gov.kz/ru/app/kgd-search-money-from-foreign-sources-web"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://kgd.gov.kz/ru/app/kgd-search-money-from-foreign-sources-web">База криминальных телефонов (логин и пароль: KontragentKZ).</a>
          <p>kgd.gov.kz/ru/app/kgd-search-money-from-foreign-sources-web</p>
        </div>
      </div>

      <div className="check_company__service__item">
        <a target="_blank" href="http://kgd.gov.kz/ru/services/taxpayer_search_liquid"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="http://kgd.gov.kz/ru/services/taxpayer_search_liquid">Проверка наличий штрафов за нарушения ПДД (Казахстан)</a>
          <p>kgd.gov.kz/ru/services/taxpayer_search_liquid</p>
        </div>
      </div>

      


      <div className="check_company__service__item">
        <a target="_blank" href="https://kgd.gov.kz/ru/services/taxpayer_search_unreliable"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://kgd.gov.kz/ru/services/taxpayer_search_unreliable">Список должников, временно ограниченных на выезд из Республики Казахстан</a>
          <p>kgd.gov.kz/ru/services/taxpayer_search_unreliable</p>
        </div>
      </div>

      <div className="check_company__service__item">
        <a target="_blank" href="https://www.ks.gov.kz/Suppliers/TruList.aspx"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.ks.gov.kz/Suppliers/TruList.aspx">Сведения об отсутствии (наличии) налоговой задолженности.</a>
          <p>www.ks.gov.kz/Suppliers/TruList.aspx</p>
        </div>
      </div>

      <div className="check_company__service__item">
        <a target="_blank" href="https://kgd.gov.kz/ru/app/culs-taxarrear-search-web"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://kgd.gov.kz/ru/app/culs-taxarrear-search-web">База данных Казахских производителей товаров.</a>
          <p>kgd.gov.kz/ru/app/culs-taxarrear-search-web</p>
        </div>
      </div>

      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/adilet?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/adilet?lang=kk">Поиск неблагонадежных налогоплательщиков.</a>
          <p>www.gov.kz/memleket/entities/adilet?lang=kk</p>
        </div>
      </div>

      <div className="check_company__service__item">
        <a target="_blank" href="https://www.gov.kz/memleket/entities/adilet?lang=kk"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://www.gov.kz/memleket/entities/adilet?lang=kk">Поиск сведений о лицах-получателях денег и (или) иного имущества из иностранных источников.</a>
          <p>www.gov.kz/memleket/entities/adilet?lang=kk</p>
        </div>
      </div>

      <div className="check_company__service__item">
        <a target="_blank" href="https://kgd.gov.kz/ru/services/taxpayer_search_liquid"><i className="fas fa-external-link-alt" /></a>
        <div className="check_company__service__item__text">
          <a target="_blank" href="https://kgd.gov.kz/ru/services/taxpayer_search_liquid">Поиск налогоплательщиков, находящихся на стадии ликвидации.</a>
          <p>kgd.gov.kz/ru/services/taxpayer_search_liquid</p>
        </div>
      </div>
    </div>
    <div className="goods__info__add block_paddings">
      <h4 className="goods__title">Проверить грузоперевозчика в Казахстане</h4>
      <p className="goods__info__add-text">Исходя из набора и качества этих параметров складу присваивается класс: A, B+, B или C. Стоит обратить внимание на склады B и C классов, где арендная ставка начинается с 2 000 тенге за кв. м. Чтобы снять склад в бизнес-центрах  A или B+ класса, стоит заложить в бюджет от 3 500 до 20 000 тенге за кв. м.</p>
    </div>
  </div>
  <SideBarCurrency />
</div>



    </div>)
}

export default Check