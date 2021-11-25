import React,{useState} from 'react'
import './App.css';

function App() {
  const [enteredConcept, setEnteredConcept]=useState('');
  const [enteredAmount, setEnteredAmount]=useState('');
  const [enteredDate, setEnteredDate]=useState('');
  const [enteredType, setEnteredType]=useState('');

  const conceptChangerHandler =(event)=>{
    setEnteredConcept(event.target.value);
};
const amountChangerHandler = (event)=>{
    setEnteredAmount(event.target.value)
 
}
const dateChangerHandler = (event)=>{
    setEnteredDate(event.target.value)

}
const typeChangerHandler = (event)=>{
  setEnteredType(event.target.value)
  console.log(enteredType);

}
const submitHandler = (event)=>{
    event.preventDefault();
    const  expenseData ={
        concept: enteredConcept,
        amount: enteredAmount,
        date: enteredDate,
        type: enteredType,
    };
 
    setEnteredConcept('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredType('');
 };
 const cancelHanler =(event)=>{
     event.preventDefault();
    
 }
  return (
    <form onSubmit={submitHandler}>
      <div className="App">
        <h1>My Personal Incomes</h1>
          <div className="form">
            <label>Concept</label>
              <input type="text" 
                name="concept" 
                placeholder="concept"
                value={enteredConcept}
                onChange={conceptChangerHandler}
              />
            <label>Amount</label>
            <input 
              type="number" 
              name="amount"
              placeholder="amount"
              value={enteredAmount}
              onChange={amountChangerHandler}  
              />
            <label>Date</label>
            <input 
              type="date" 
              name="date"
              value={enteredDate}
              onChange={dateChangerHandler}  
              />
            
            <label>Income type </label>
            <select 
                name="income" 
                id="income"
                value={enteredType}
                onChange={typeChangerHandler}
                >
              <optgroup label="type of income">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </optgroup>
            </select>  
            <button type="submit">Add</button>
          </div>
      </div>
    </form>

  );
}

export default App;
