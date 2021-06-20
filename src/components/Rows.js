import React from "react";

function Rows(props) {
  let cell,
    celltext,
    row,
    x = 0,
    y;
  for (let i = 0; i < 3; i++) {
    row = document.createElement("tr");
    for (let j = 0; j < 12; j++) {
      cell = document.createElement("td");
      celltext = document.createTextNode("elem" + ++x);
      cell.append(celltext);
    }
    // y.append(row);
  }
  return <div>{row}</div>;
}

export default Rows;
