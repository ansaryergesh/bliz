const TransactionHistory = ({history}) => {
    return (
        <div>
            {!history.length>0 && 'У вас пока нету истории'}
            <div className={history.length>0 ? 'historyContainer' : 'd-none'}>
                <ul className="responsive-table">
                  <li className="table-header">
                    <div className="col col-1">#</div>
                    <div className="col col-2">События</div>
                    <div className="col col-3">Сумма</div>
                  </li>
                    {history.map((h, index) => (
                         <li className="table-row">
                         <div className="col col-1" data-label="Job Id">{index+1}</div>
                         <div className="col col-2" data-label="Customer Name">{h.type}</div>
                         <div className="col col-3" data-label="Amount">{h.summa}</div>
                       </li>

                        
                    ))}
                    </ul>
              </div>
        </div>
    )
}

export default TransactionHistory;