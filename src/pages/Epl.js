import React from "react";
import TableEpl from "../component/table/TableEpl";
import Card from "../UI/Card";
import TableFilter from "../component/table/TableFilter";
import BackHeader from "../layout/BackHeader";
function Epl({ navigate, selected, onChangeFilter }) {
  return (
    <Card>
      <BackHeader navigate={navigate} />
      <TableFilter selected={selected} onChangeFilter={onChangeFilter} />
      <TableEpl />
    </Card>
  );
}
export default Epl;
