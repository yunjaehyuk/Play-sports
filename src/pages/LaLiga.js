import {useNavigate} from 'react-router-dom'
import TableLaliga from '../component/Table/TableLaLiga'
import BackHeader from '../layout/BackHeader';
import Card from '../UI/Card';
import Navbar from '../layout/Navbar';
import TableFilter from '../component/Table/TableFilter';
function LaLiga(props) {
 

  return(
    <Card>
    <BackHeader navigate={props.naviagte}></BackHeader>
    <TableFilter></TableFilter>
    <TableLaliga></TableLaliga>
    <Navbar navigate={props.navigate}></Navbar>
   </Card>
  )
}
export default LaLiga;