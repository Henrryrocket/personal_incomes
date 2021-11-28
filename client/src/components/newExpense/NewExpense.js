import React,{ useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export const NewExpense = (props) => {
    const [isEditing, setIsEditing]= useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log("New expense:",expenseData.date)
    };
    const startEditingHandler =()=>{
        setIsEditing(true);
    }
    const stopEditingHandler =()=>{
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing 
                ? <button onClick={startEditingHandler}>Add new </button>
                : <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}    
                    />
                }
            
        </div>
    )
}

