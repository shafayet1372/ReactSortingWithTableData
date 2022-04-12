import React from "react";
import SingleTable from "./SingleTable";
import { Scrollbars } from "react-custom-scrollbars";
export default function Table({ datas }) {
  return (
    <div className=" table-responsive-sm">
      <Scrollbars style={{ height: 300 }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Salary</th>
              <th scope="col">Age</th>
              <th scope="col">Dob</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((x) => (
              <SingleTable value={x} key={x.id} />
            ))}
          </tbody>
        </table>
      </Scrollbars>
    </div>
  );
}
