import './Expenseitem.css';

function Expensitem() {
    const expenseDate =new Date(2022, 2, 13);
    const expenseTitle= 'Car insurance';
    const expeneAmount=290.66 ;

  return (
    <div className='expense-item'>
      <div> {expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle} </h2>
      <div className='expense-item__price'> {expeneAmount}$</div>
    </div>
    </div>
  );
}
export default Expensitem;
