import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../../../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default React.memo(ExpenseItem);
