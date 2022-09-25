import React, { useState } from 'react';
import Data from "./Data"
import List from "./List"
import './App.css';

export default function App() {
  const [count, setCount] = useState(Data.length);

  const clearAll = () => setCount(0);
  const showAll = () => setCount(Data.length);

  const btnClass = count ? "btn-danger" : "btn-success";
  const btnTxt = count ? "Clear All" : "Show All";
  const btnAction = count ? clearAll : showAll;

  return (
    <div className="container remBirth my-5 w-50 border py-4 px-5 bg-light shadow rounded-3">
      <h2>{count} Birthdays Today</h2>
      <hr />
      {Boolean(count) &&
        Data.map((item) => {
          return <List key={item.id} {...item} />;
        })}
      <button className={`btn w-100 fw-bold ${btnClass}`} onClick={btnAction}>
        {btnTxt}
      </button>
    </div>
  );
}