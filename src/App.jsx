import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponents from "./components/FormComponents";

function App() {
  //btn count
  const [count, setCount] = useState(0);

  // raw Data
  //   { id: 1, title: 'Price', amount: 2000 },
  //   { id: 2, title: 'Salary', amount: 25000 },
  //   { id: 3, title: 'Travel', amount: 1000 },
  //   { id: 4, title: 'Insurance', amount: 4000 },
  // ]

  // useState for array initData ** use [] for init good
  const [items, setItem] = useState([]);
  // get Data from formComps
  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <div>
      <div className="logo">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="bttn">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>

      <h1>Vite + React For First Time</h1>

      <FormComponents onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
