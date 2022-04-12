import React from "react";

export default function SingleTable({ value }) {
  const { firstName, lastName, age, salary, dob, email } = value;
  return (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>{`${salary}k`}</td>
      <td>{age}</td>
      <td>{dob}</td>
    </tr>
  );
}
