import { useContext } from "react";
import DataContext from "../Data/DataContext";
import "./ReportComponent.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      {/* useConsumer
      <DataContext.Consumer>
        {(context) => (
          <p>
            useConsumer
            income: {context.income} expense: {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}

      {/* <p>rayrubja : {income}</p>
      <p>rayjaija : {expense}</p> */}
      <h4>Remain Status</h4>
      <h1>฿{income - expense}</h1>
      <div className="report-container">
        <div>
          <h4>Total Income</h4>
          <p className="report plus">฿{income}</p>
        </div>
        <div>
          <h4>Total Expense</h4>
          <p className="report minus">฿{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
