import { useEffect, useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponents from "./components/FormComponents";
import DataContext from "./Data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  //btn counter
  // const [count, setCount] = useState(0);

  // raw Data
  //   { id: 1, title: 'Price', amount: 2000 },
  //   { id: 2, title: 'Salary', amount: 25000 },
  //   { id: 3, title: 'Travel', amount: 1000 },
  //   { id: 4, title: 'Insurance', amount: 4000 },
  // ]

  // // day 9 Data
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

  // // reducer state
  // const [count, setCount] = useState(0);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD":
  //       return state + action.payload;
  //     case "SUB":
  //       return state - action.payload;
  //     case "CLEAR":
  //       return 0;
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, count);

  // reducer state ShowReport
  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

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
          {/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}
        </div>

        <h1>Vite + React For First Time</h1>
        {showReport && <ReportComponent />}
        <FormComponents onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>

      {/* This is Example for Reducer
      <div align="center">
        <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>increase</button>
        <button onClick={() => dispatch({ type: "SUB", payload: 5 })}>decrease</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>clear</button>
      </div> */}

      {/* This is show and hide by use Reducer */}
      <button onClick={() => dispatch({ type: "SHOW" })}>Show</button>
      <button onClick={() => dispatch({ type: "HIDE" })}>Hide</button>
    </DataContext.Provider>
  );
}

export default App;
