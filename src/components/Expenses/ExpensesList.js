import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.expensesToDisplay.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses have been added yet!</h2>
    }

    return (
        <ul className="expenses-list">

            {props.expensesToDisplay
                .map(e => <ExpenseItem key={e.id}
                                    title={e.title}
                                    amount={e.amount}
                                    date={e.date} />) }
        </ul>
    )
}


export default ExpensesList;