import { useContext } from "react";
import DataContext from "../Data/DataContext";

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
      <p>rayrubja : {income}</p>
      <p>rayjaija : {expense}</p>
    </div>
  );
};

export default ReportComponent;
