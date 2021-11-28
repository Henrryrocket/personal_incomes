import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import Axios from 'axios';

function ExpenseItem(props) {
    
    // const [title, setTitle] =useState(props.title);
    // const clickHandler =()=>{
    //     setTitle('Update!');
    //     console.log(title);
    // };
//      const DeleteHanler =(concept)=>{
//      Axios.delete(`http://localhost:3001/api/delete/${concept}`)
    
//  };
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount} </div>
                <div className="expense-item__price">{props.type} </div>
                <div className="expense-item__edit">Edit </div>
                <div className="expense-item__delete">Delete </div>

                </div>
            </Card>
        </li>

    )
}

export default ExpenseItem;
