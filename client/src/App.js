import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [enteredConcept, setEnteredConcept]=useState('');
  const [enteredAmount, setEnteredAmount]=useState('');
  const [enteredDate, setEnteredDate]=useState('');
  const [enteredType, setEnteredType]=useState('');
  const [list, setList] = useState([]);
  const [editItem, setEditItem] = useState("");

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
    setList(response.data);
    })
  },[]);

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
    const expenseData ={
        concept: enteredConcept,
        amount: enteredAmount,
        date: enteredDate,
        type: enteredType,
      };
    
    Axios.post("http://localhost:3001/api/insert",{       
       concept: enteredConcept,
       amount: enteredAmount,
       date: enteredDate,
       type: enteredType,}).then(()=>{
        alert('Successful insert!')
      }); 

      setList([
        ...list,
        { concept: enteredConcept,
          amount: enteredAmount,
          date: enteredDate,
          type: enteredType
        },
      ])
    setEnteredConcept('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredType('');
 };
 const DeleteHanler =(concept)=>{
     Axios.delete(`http://localhost:3001/api/delete/${concept}`)
    
 };
 const UpdateHanler =(concept)=>{
  Axios.put('http://localhost:3001/api/update',{
          concept: enteredConcept,
          amount: enteredAmount,
          
  });

 
};
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
            <button type="submit" onClick={submitHandler}>Add</button>
                        
            {list.map((e)=>{
                return(
                  <div className="card">
                    <h2>Concepto: {e.concept}</h2>
                    <p>Amount: {e.amount} $</p>

                    <button onClick={()=>{DeleteHanler(e.concept)}}>Delete</button>
                    <input type="text" id="updateInput" onChange={(e)=>{ setEditItem(e.target.value)}}/>
                    <button onClick={()=>{UpdateHanler(e.concept)}}>Update</button>
                  </div>

                  );
                })}

          </div>

          

      </div>
    </form>
     
    );
}


  
export default App;
