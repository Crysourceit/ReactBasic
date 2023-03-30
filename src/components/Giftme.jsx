import React, { useContext } from "react";
import PropTypes, { checkPropTypes } from "prop-types";
import "./Giftme.css";

const Giftme = (props) => {
  const { title, amount } = props;
  // Giftme style
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  // const namecony = useContext(DataContext);

  return (
    <div>
      <li className={status}>
        {/* make - to + */}
        {title}{" "}
        <span>
          {symbol}
          {Math.abs(amount)}
        </span>
        {/* useConsumer
        <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
        {/* useContext
        {namecony} */}
      </li>
    </div>
  );
};

// checkPropTypes
Giftme.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Giftme;
