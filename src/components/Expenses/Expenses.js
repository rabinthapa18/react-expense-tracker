import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const onYearChangeHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
    }

    const filteredExpenses = props.expenses.filter(expenses => {
        return expenses.date.getFullYear() === parseInt(filteredYear);
    })

    return (
        < Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler} />
            {filteredExpenses.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card >
    )
}
export default Expenses;