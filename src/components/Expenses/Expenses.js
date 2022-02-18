import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './/ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022')

    const onYearChangeHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
    }

    const filteredExpenses = props.expenses.filter(expenses => {
        return expenses.date.getFullYear() === parseInt(filteredYear);
    })

    return (
        < Card className="expenses">
            <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card >
    )
}
export default Expenses;