import React, { useState } from "react";

// Вообще еще круглые скобки нужно добавлять, т.е. return ( <div>бла бла бла</div>)
const valueer = () => {
  // const value = useState();
  // console.log(value);  Вернёт массив: [текущее состояние, функция обновляющая состояние]

  //* Деструктуризируем
  const [value, setValue] = useState(0);

  // изучаем рендер списка из массива через 'map'
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatValue = () => {
    //* синтаксис (если value = 0, то в этом месте остобразиться 'empty', если нет - то значение value)
    return value === 0 ? "empty" : value;
  };
  const imgUrl = "http://picsum.photos/200";

  //! функция, которая присваевает классы для текста
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    //* тернальное выражение (если value === 0 - добавляется "bg-warning", если не равен - то "bg-primary")
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  //! функция для кнопки добавления
  const handleIncrement = () => {
    setValue((prevState) => prevState + 1); // prevState - текущее состояние (вместо переменной value)
    console.log(value);
  };

  //! Функция для кнопки убавления
  const handleDicrement = () => {
    setValue((prevState) => (prevState > 0 ? prevState - 1 : (prevState = 0))); // prevState - текущее состояние (вместо переменной value)
    console.log(value);
  };

  //! Функция для удаления тега из масива по нажатию на него
  const handlTagChange = (id) => {
    // Фильтруем массив, оставляем только те эллеметны, у которых не тот id на который мы нажали
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    console.log(id);
  };

  const renderTags = () => {
    // if (tags.length === 0 && tags.map((tag) => {...}) - условие для отображения можно так прописать
    // Но лучше как тендерное выражение
    return (
      tags.length !== 0 &&
      tags.map((tag) => {
        return (
          <li
            key={tag}
            className="btn btn-primary btn-sm m-2"
            // callback вызывается чтоб можно было определить на какой менно эллемент нажали
            onClick={() => handlTagChange(tag)}
          >
            {tag}
          </li>
        );
      })
    );
  };

  // Если теги есть - они будут отображаться. Если нет - отображаться будет valueer
  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }

  return (
    // <React.Fragment>  можно заменить на пустой тег '<>'
    <React.Fragment>
      <img src={imgUrl} alt="image"></img>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      {/* className -это классы взятые из документации bootstrap */}
      {/* handleIncrement это функция, которая вызовется по клику, по этому не надо писать круглые скобки в конце */}
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDicrement}>
        -
      </button>
    </React.Fragment>
  );
};
