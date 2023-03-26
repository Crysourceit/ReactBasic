import { useContext } from "react";
import DataContext from "../Data/DataContext";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      {/* useComsumer
      <DataContext.Consumer>
        {(context) => (
          <p>
            useComsumer
            income: {context.income} expens: {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}
      <p>rayrub : {income}</p>
      <p>rayjai : {expense}</p>
    </div>
  );
};

export default ReportComponent;
