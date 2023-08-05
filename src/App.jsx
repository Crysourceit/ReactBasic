import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponents from "./components/FormComponents";
import DataContext from "./Data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
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

    setReportIncome(income.toFixed(2));
    setReportExpense(expens.toFixed(2));
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
          {/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}
        </div>

        <h1>Vite + React For First Time</h1>

        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Data Account</Link>
              </li>
              <li>
                <Link to="/insert">Save</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />}></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponents onAddItem={onAddNewItem} /> <Transaction items={items} />{" "}
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
