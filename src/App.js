import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import NewExpenseButton from './components/NewExpense/NewExpenseButton';
import './components/NewExpense/NewExpense.css';
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {id : 'e1', title: "Car Insurance", amount: 934, date: new Date(2019, 9, 23) },
  {id : 'e2', title: "Cat Insurance", amount: 260, date: new Date(2020, 10, 13) },
  {id : 'e3', title: "Dog Insurance", amount: 134, date: new Date(2021, 11, 29) },
  {id : 'e4', title: "Fox Insurance", amount: 134, date: new Date(2021, 11, 29) },
  {id : 'e5', title: "Mouse Insurance", amount: 134, date: new Date(2021, 11, 29) },
  {id : 'e6', title: "Rat Insurance", amount: 134, date: new Date(2021, 11, 29) },
]


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showingNewExpense, setShowingNewExpense] = useState(false);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses => {
      return [expense,...expenses];
    }));
  }

  const showExpenseButtonHandler = e => {
    e.preventDefault();
    setShowingNewExpense(!showingNewExpense)
  }

  

  return (
    <div>

      {showingNewExpense ?  
      <NewExpense showNewExpense = {showExpenseButtonHandler} onAddExpense = {addExpenseHandler}/> : <NewExpenseButton showNewExpense = {showExpenseButtonHandler} />}
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
