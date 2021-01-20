import React, { useState } from "react";
import Table from "./Table";

function App() {
  const [table, setTable] = useState([
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
  ]);

  const addValue = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    setTable([...table, newItem]);
  };
  return (
    <div className="App">
      <Table onAdd={addValue} table={table} />
    </div>
  );
}

export default App;
