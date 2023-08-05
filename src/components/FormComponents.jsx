import React, { useState, useEffect } from "react";
import "./FormComponents.css";
import { v4 as uuidv4 } from "uuid";

const FormComponents = (props) => {
  // How to useState
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value);
  };

  const saveItem = (event) => {
    event.preventDefault(); // no refresh
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };

  useEffect(() => {
    // yung ngong (catch state)
    const checkData = title.trim().length > 0 && amount !== 0;
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Menu</label>
          <input type="text" placeholder="Name Menu" onChange={inputTitle} value={title} />
        </div>
        <div className="form-control">
          <label>Money</label>
          <input
            type="number"
            placeholder="(+ income, - outcome)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            Add Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponents;
