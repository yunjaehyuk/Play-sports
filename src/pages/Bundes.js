import BackHeader from '../layout/BackHeader';
import Card from '../UI/Card';
import React, { useSelector } from "react"
import TableFilter from "../component/Table/TableFilter";
import TableBundes from  '../component/Table/TableBundes'
function Bundes(props) {

  return(
<div>

  <Card className='League'>
 <BackHeader navigate={props.navigate}></BackHeader>
 <TableFilter></TableFilter>
 <TableBundes> card</TableBundes>
</Card>
</div>

  )
}
export default Bundes;