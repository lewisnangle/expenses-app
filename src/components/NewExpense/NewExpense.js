import React from 'react';

import ExpenseForm from './ExpenseForm';


import './NewExpense.css';


const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className = "new-expense">
            <ExpenseForm showNewExpense = {props.showNewExpense} onSaveExpenseData = {saveExpenseDateHandler} />
        </div>
    )
};

export default NewExpense;