import React,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from './Card';
import ExpensesList from './ExpensesList';
import './Expenses.css'



function Expenses(props) {
    const [filteredYear, setFilteredYear]=useState('');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)   
    }   
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })


    
    return (
        <div>

        <Card className="expenses"> 
         <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}/>
          
         <ExpensesList items={filteredExpenses}/>
         


        </Card>
        </div>
    )
}

export default Expenses
