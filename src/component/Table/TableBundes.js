import React from "react";
import {Table} from 'react-bootstrap';
import { useSelector } from "react-redux"
const TableBundes = () => {
  let state = useSelector((state) =>state )
  return(
    <div>
<Table className='League-table'>
  <thead>
  </thead>
  <thead>
    <tr>
      <th>2021-2022</th>
      <th>GP</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
      <th>F</th>
      <th>A</th>
      <th>GD</th>
      <th>P</th>
    </tr>
  </thead>
  <tbody>
  {
    state.cart.map((a, i)=>
      <tr key={i}>
        <td className='League-data'>
          <td>
          {state.cart3[i].rank}
          </td>
          <td>
        {state.cart3[i].jpg}
          </td>
          <td>
        {state.cart3[i].name}
          </td>
        </td>
      
        <td>{state.cart3[i].GP}</td>
        <td>{state.cart3[i].W}</td>
        <td>{state.cart3[i].D}</td>
        <td>{state.cart3[i].L}</td>
        <td>{state.cart3[i].F}</td>
        <td>{state.cart3[i].A}</td>
        <td>{state.cart3[i].GD}</td>
        <td>{state.cart3[i].P}</td>
      </tr>
     )
   }
</tbody> 
</Table> 
</div>
  )
}
export default TableBundes;