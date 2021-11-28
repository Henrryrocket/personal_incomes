import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props) => {
    
    
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses. </h2>
    } 
    console.log("props exp list:",props)
    return (
        <ul className="expenses-list">
            {props.items.map((expense)=>(
            
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            type={expense.type}
        /> 
         ))}
        </ul>
    )
}

export default ExpensesList
