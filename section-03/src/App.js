//* App function, starts with uppercase name.
//* HTML code inside JavaScript code.
//* This done by JSX, special syntax.
//* JSX = JavaScript XML, translate the code to be displayed in the browser.
//* With react we can generate out HTML without write too much code.
//* New Component in new files
//* The App component will render into single HTML page. the other components will come after App component
import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car insurance', 
    amount: 294.67, 
    date: new Date(2022, 0, 24)
  },
  {
    id: 'e2',
    title: 'Toilet Paper', 
    amount: 94.12, 
    date: new Date(2022, 2, 12)
  },
  {
    id: 'e3',
    title: 'New Tv', 
    amount: 500.25, 
    date: new Date(2020, 1, 14)
  },
  {
    id: 'e4',
    title: 'New Desk', 
    amount: 150.55, 
    date: new Date(2021, 0, 31)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses ((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  //* Send data (props), in the component we can access them with props.title, props.amount, props.date
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

//* The function is exported here
export default App;