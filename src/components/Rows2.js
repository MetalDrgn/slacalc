import React from "react";

function Rows2(props) {
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 0; j < 12; j++) {}
  // }
  const arr = Array(3).fill("sdf");
  // arr.forEach((e) => Array(3));
  return (
    <tr>
      <td>{arr}</td>
    </tr>
  );
}

export default Rows2;
