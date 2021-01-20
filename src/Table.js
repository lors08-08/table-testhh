import React, { useState } from "react";

function Table({ table, onAdd }) {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="table">
        {table.map((item) => {
          return (
            <div key={item.id} className="cell">
              {item.value}
            </div>
          );
        })}
      </div>
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type Number"
      />
      <button onClick={() => onAdd({ value })}>Add</button>
    </>
  );
}

export default Table;
