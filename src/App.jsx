import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponents from "./components/FormComponents";
import DataContext from "./Data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  //btn counter
  const [count, setCount] = useState(0);

  // raw Data
  //   { id: 1, title: 'Price', amount: 2000 },
  //   { id: 2, title: 'Salary', amount: 25000 },
  //   { id: 3, title: 'Travel', amount: 1000 },
  //   { id: 4, title: 'Insurance', amount: 4000 },
  // ]

  // day 9 Data
  // const initState = [
  //   { id: 1, title: "home spend", amount: -2000 },
  //   { id: 2, title: "Saraly", amount: 12000 },
  //   { id: 3, title: "Travel", amount: -500 },
  //   { id: 4, title: "home spend", amount: 2000 },
  // ];

  // useState for array initData ** use [] for init good
  const [items, setItem] = useState([]);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  // get Data from formComps
  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  // how to filter and sumary
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expens =
      amounts.filter((element) => element < 0).reduce((total, element) => (total += element), 0) *
      -1;

    setReportIncome(income);
    setReportExpense(expens);
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
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
        <ReportComponent />
        <FormComponents onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
