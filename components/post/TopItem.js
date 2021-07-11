import { dateParse, parseDateTime } from "../../defaults/extraFunctions"
import Link from 'next/link'
const TopItem = ({tops}) => {
  return (
    <div className='top_offers'>
      <div class="top_offers__img">
        <img src="/img/widgets/top_offers.png" alt=""/>
      </div>
      {tops.map((p) => (

        <div className="product__item">
          <div className="product__item__date">
            {p.details
              ? dateParse(p.details[0].start_date) + '-' + dateParse(p.details[0].end_date)
              : 'Загрузка...'}
            {/* {!router.pathname.includes('cabinet') ? <p>{parseDateTime(p.updated_at)} </p> : ''} */}
            <p>{parseDateTime(p.updated_at)}
            </p>
          </div>
          <div className="product__item__title">
          <Link href="/cargo/[pid]" as={`/cargo/${p.id}`}>
            <a>{p.details
              ? p.details[0].from_string
                : 'Загрузка...'}
              — {p.details
                ? p.details[0].to_string
                : 'Загрузка...'}
            </a>
          </Link>
          
            <p>~{p.details
                ? p.details[0].distance
                : '...'}
              км, {p.details
                ? p.details[0].title
                : 'Загрузка'}</p>
          </div>
          <div className="product__item__title">
            <h2>{p.sub_id} {p.title}</h2>
          </div>
          <div className="product__item__title">
            <h2>{p.details
                ? p.details[0].net
                : '...'}
              тн / {p.details
                ? p.details[0].volume
                : '...'}
              м³</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopItem;