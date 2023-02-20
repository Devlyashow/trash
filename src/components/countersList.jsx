import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  let initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  // была запись const counters = initialState. Мы эту запись деструктуризировали, чтоб добавить функционал к кнопке delete
  const [counters, setCounters] = useState(initialState);

  // кнопка delete
  function handleDelete(id) {
    console.log("handleDelete id:", id);
    const newCounters = counters.filter((name) => {
      return name.id !== id;
    });
    setCounters(newCounters);
  }

  // сброс к исходным настройкам
  const handleReset = () => {
    setCounters(initialState);
  };

  // добавляет
  const handleIncrement = (id) => {
    // setValue((prevState) => prevState + 1);
    let newArray = [];
    counters.forEach((object) => {
      if (object.id === id) {
        object.value++;
        return newArray.push(object);
      } else {
        return newArray.push(object);
      }
    });
    setCounters(newArray);
  };

  // убавляет
  const handleDicrement = (id) => {
    // setValue((prevState) => (prevState > 0 ? prevState - 1 : (prevState = 0)));
    let newArray = [];
    counters.forEach((object) => {
      if (object.id === id) {
        object.value--;
        return newArray.push(object);
      } else {
        return newArray.push(object);
      }
    });
    setCounters(newArray);
  };

  return (
    <>
      {counters.map((count) => {
        return (
          <Counter
            key={count.id}
            {...count}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDicrement={handleDicrement}
          />
        );
      })}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
