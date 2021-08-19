import React from "react";
import "./Tabl.css";

function Tablea({ countries }) {
  return (
    <div className="table1">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>{country.cases} </td>
        </tr>
      ))}
    </div>
  );
}

export default Tablea;
