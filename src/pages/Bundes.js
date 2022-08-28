import BackHeader from '../layout/BackHeader';
import Card from '../UI/Card';
import React, { useState } from "react"
import TableFilter from "../component/Table/TableFilter";
import TableBundes from  '../component/Table/TableBundes'
function Bundes(props) {
  const [filterdYear, setFilterdYear] = useState("2021-22")

  const changeFilter = (selectedYear) => {
    setFilterdYear(selectedYear)
  }
  return(
<div>

  <Card className='League'>
 <BackHeader navigate={props.navigate}></BackHeader>
 <TableFilter selected={filterdYear} onChangeFilter={changeFilter}></TableFilter>
 <TableBundes> card</TableBundes>
</Card>
</div>

  )
}
export default Bundes;