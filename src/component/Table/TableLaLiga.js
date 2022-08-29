import React from "react";
import {Table} from 'react-bootstrap';
import { useSelector } from "react-redux"
import './Table.css'
const TableLaliga = () => {
  let state = useSelector((state) =>state )
  return (
    <React.Fragment>
    <Table className='League-table'>
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
      <tr key={i}>
        <td className='League-data'>
          <td>
          {state.cart[i].rank}
          </td>
          <td>
        {state.cart[i].jpg}
          </td>
          <td>
        {state.cart2[i].name}
          </td>
        </td>
      
        <td>{state.cart2[i].GP}</td>
        <td>{state.cart2[i].W}</td>
        <td>{state.cart2[i].D}</td>
        <td>{state.cart2[i].L}</td>
        <td>{state.cart2[i].F}</td>
        <td>{state.cart2[i].A}</td>
        <td>{state.cart2[i].GD}</td>
        <td>{state.cart2[i].P}</td>
      </tr>
     )
   }
</tbody> 
</Table> 
</React.Fragment>

  )
}
export default TableLaliga;