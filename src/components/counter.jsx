import React, { useState } from "react";
import CountersList from "./countersList";

const Counter = (props) => {
  // Деструктуризируем
  const { value } = props;

  // empty или цифра
  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  // накидывает классы
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => {
          props.onIncrement(props.id);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => {
          props.onDicrement(props.id);
        }}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
