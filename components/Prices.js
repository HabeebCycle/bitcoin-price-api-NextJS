import { useState } from "react";

const Prices = (props) => {
  const [currency, setCurrency] = useState("USD");
  const bpi = props.bpi.bpi;

  const handleSelect = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {bpi.USD.description}: &nbsp;
          <span className="badge badge-primary">{bpi.USD.code}</span>
          <strong>{bpi.USD.rate}</strong>
        </li>
        <li className="list-group-item">
          Bitcoin rate for {bpi.GBP.description}: &nbsp;
          <span className="badge badge-primary">{bpi.GBP.code}</span>
          <strong>{bpi.GBP.rate}</strong>
        </li>
        <li className="list-group-item">
          Bitcoin rate for {bpi.EUR.description}: &nbsp;
          <span className="badge badge-primary">{bpi.EUR.code}</span>
          <strong>{bpi.EUR.rate}</strong>
        </li>
      </ul>

      <div>
        <select className="form-control" onChange={handleSelect}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <p>{currency}</p>
    </div>
  );
};

export default Prices;
