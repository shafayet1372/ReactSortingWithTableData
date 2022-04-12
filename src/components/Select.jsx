import React from "react";
import SingleOption from "./SingleOption";
import { v4 as uuid4 } from "uuid";
export default function Select({ options, sortingHandler, defaultval }) {
  console.log(defaultval);
  return (
    <select
      className="form-select form-select-sm"
      aria-label="Default select example"
      onChange={sortingHandler}
      value={defaultval}
    >
      {options.map((x) => {
        return <SingleOption value={x} key={uuid4()} />;
      })}
    </select>
  );
}
