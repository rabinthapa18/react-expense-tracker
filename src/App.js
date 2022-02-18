import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Rent',
    amount: 100,
    date: new Date("17 feb 2022")
  },
  {
    id: '2',
    title: 'Coffee',
    amount: 300,
    date: new Date("feb 21 2022")
  },

];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
