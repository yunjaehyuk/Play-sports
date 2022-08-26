import React from "react";
import {Table} from 'react-bootstrap';
import { useSelector } from "react-redux"
import './Table.css'
const TableEpl = () => {
  let state = useSelector((state) =>state )
  return(
    <div>
<Table className='Table'>
  <thead>
  </thead>
  <thead>
    <tr>
      <th>2021-22</th>
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
      <tr className='Table_rank' key={i}>
        <td >
          <td>
          {state.cart[i].rank}
          </td>
          <td>
        {state.cart[i].jpg}
          </td>
          <td>
        {state.cart[i].name}
          </td>
        </td>
      
        <td>{state.cart[i].GP}</td>
        <td>{state.cart[i].W}</td>
        <td>{state.cart[i].D}</td>
        <td>{state.cart[i].L}</td>
        <td>{state.cart[i].F}</td>
        <td>{state.cart[i].A}</td>
        <td>{state.cart[i].GD}</td>
        <td>{state.cart[i].P}</td>
      </tr>
     )
   }
</tbody> 
</Table> 
</div>
  )
}
export default TableEpl;