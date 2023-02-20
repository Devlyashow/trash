import Counter from "./components/counter"; // импорт первого компонента
import React, { useState } from "react";
import CountersList from "./components/countersList";

const App = () => {
  return <CountersList />;
};

export default App;
