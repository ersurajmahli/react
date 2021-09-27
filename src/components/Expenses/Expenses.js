import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          getYearTofilter={filterByYear}
        />
        <ExpensesChart expenses={filtredExpense}/>
        <ExpensesList item={filtredExpense}/>
      </Card>
    </div>
  );
};

export default Expense;
