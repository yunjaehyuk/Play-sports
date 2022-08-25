import BackHeader from '../layout/BackHeader';
import Card from '../UI/Card';
import { useSelector } from "react-redux"
import TableFilter from "../component/Table/TableFilter";
import Navbar from "../layout/Navbar";
import TableBundes from  '../component/Table/TableBundes'
function Bundes(props) {
  let state = useSelector((state) =>state )

  return(
<div className='League'>
  <Card>
 <BackHeader navigate={props.navigate}></BackHeader>
 <TableFilter></TableFilter>
 <TableBundes></TableBundes>
 <Navbar navigate={props.navigate}></Navbar>
</Card>
</div>

  )
}
export default Bundes;