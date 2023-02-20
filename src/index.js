//! npx create-react-app my-app - создание single-page React-приложения

import React from "react"; // импорт react и синтаксиса JSX (JavaScript xml)
import reactDom from "react-dom"; // импорт библиотеки reactDOM - она монтирует в DOM-дерево наши react эллементы
import "bootstrap/dist/css/bootstrap.css"; // библиотека стилей (красным цветом есть описание)
import App from "./app";

const element2 = <h1>Hello World</h1>; // JSX запись. Аналог: const element = React.createElement('h1', null, 'Helo World)

console.log(element2); // Выдаст объект

// element - созданный нами эллемент
// document.getElementById('root') - куда этот элемент вставляем. (в html разметке есть див с id = 'root')
// reactDom.render(element2, document.getElementById('root')) синтаксис библиотеки reactDOM

//! Bootstrap - это библиотека, которая с помощью имени классов позваляют добавлять стили к нашим компонентам

// React-компонент можно создать как обычную JavaScript-функцию (новый и удобный способ):
const Post = () => {
  return <div>Post</div>;
};

// Компонент может принимать в себя данные - props и выводить их (мы плотно поработаем с ними в дальнейших уроках):
const Post1 = (props) => {
  return <div>Post: {props.title}</div>;
};

// Эти React-элементы можно также записывать и в обычную переменную: (работает только при JSX(Create React App предоставляет))
const title = "Junior Frontend Developer";
const course = <h1>Course: {title}!</h1>;

//! СОЗДАЁМ ВЕБ КОРЗИНУ

reactDom.render(<App />, document.getElementById("root"));
