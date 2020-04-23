import React from "react";

export default function TableRow(props){
    return(
  <div>
      <table className="table table-striped">
<tbody>
    <tr>
      <th scope="row">
          <img
          src = {props.image}
          alt = {props.name}></img>
      </th>
      <td>{props.name}</td>
      <td>{props.title}</td>
    <td>{props.id}</td>
    <td>{props.email}</td>

    </tr>
  </tbody>

</table>
  </div>
    )
}

