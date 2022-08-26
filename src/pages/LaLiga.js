import {useNavigate} from 'react-router-dom'
import React from 'react';
import TableLaliga from '../component/Table/TableLaLiga'
import BackHeader from '../layout/BackHeader';
import Card from '../UI/Card';
import TableFilter from '../component/Table/TableFilter';
function LaLiga(props) {
 

  return(
    <Card>
    <BackHeader navigate={props.naviagte}></BackHeader>
    <TableFilter></TableFilter>
    <TableLaliga></TableLaliga>
   </Card>
  )
}
export default LaLiga;