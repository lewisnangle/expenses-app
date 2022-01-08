import './Expenses.css';
import ExpensesList from '../Expenses/ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from '../Expenses/ExpenseFilter';
import Card from '../UI/Card';
import React, { useState } from 'react';



function Expenses (props) {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

    return (
        <div>
        <Card className = "expenses">
        <ExpenseFilter selectedYear = {selectedYear} onChangeFilter = {filterChangeHandler}/>
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList expensesToDisplay = {filteredExpenses}/> 
        </Card>
        </div>
    )
}

export default Expenses;