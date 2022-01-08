import React from 'react';

const NewExpenseButton= (props) => {

    return (
        <div className = "new-expense">
        <div className = "new-expense__actions">
                <button onClick={props.showNewExpense} type = 'submit' >Add New Expense</button>
        </div>
        </div>
    )
}



export default NewExpenseButton;