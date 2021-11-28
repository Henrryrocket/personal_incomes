import React,{useState} from 'react'
import './ExpenseForm.css'
import Axios from 'axios';
const ExpenseForm = (props) => {
    const [enteredConcept, setEnteredConcept]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');
    const [enteredType, setEnteredType]=useState('');
    // const [userInput, setUserInput]= useState({});
    const titleChangerHandler =(event)=>{
        setEnteredConcept(event.target.value);
        // setUserInput((prevState)=>{
        //     return{ ...prevState, enteredTitle: event.target.value}
            
        // });
    };
    const amountChangerHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    }
    const dateChangerHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }
    const typeChangerHandler = (event)=>{
        setEnteredType(event.target.value)
        console.log(enteredType);

    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const  expenseData ={
            title: enteredConcept,
            amount: enteredAmount,
            date: new Date(enteredDate),
            type: enteredType,
        };
        Axios.post("http://localhost:3001/api/insert",{       
            concept: enteredConcept,
            amount: enteredAmount,
            date:  new Date(enteredDate),
            type: enteredType,}).then(()=>{
             alert('Successful insert!')
           }); 
        props.onSaveExpenseData(expenseData)
        // console.log("Date:", enteredDate);
        setEnteredConcept('')
        setEnteredAmount('');
        setEnteredDate('');
     };

     const cancelHanler =(event)=>{
         event.preventDefault();
         props.onCancel(event);
     }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title </label>
                    <input 
                     type="text"
                     value={enteredConcept} 
                     onChange={titleChangerHandler}
                     />
                </div>  
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    value={enteredAmount} 
                    onChange={amountChangerHandler} 
                    min="0.01" step="0.01"
                    />
                </div>     
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                     type="date"
                     value={enteredDate} 
                     onChange={dateChangerHandler}                      
                     />
                </div>
                <div className="new-expense__control">
                <label>Type </label>
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
                </div>
            </div>
                <div className="buttons">
                    <div className="new-expense__actions">
                        <button type="submit" onClick={cancelHanler}>Cancel</button>
                    </div>
                     <div className="new-expense__actions">
                        <button type="submit">Add</button>
                     </div>
                </div>

        </form>
    )
}

export default ExpenseForm
