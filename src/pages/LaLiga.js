import { useNavigate } from "react-router-dom";
import React from "react";
import TableLaliga from "../component/table/TableLaLiga";
import BackHeader from "../layout/BackHeader";
import Card from "../UI/Card";
import TableFilter from "../component/table/TableFilter";
function LaLiga({ navigate, selected, onChangeFilter }) {
  return (
    <Card>
      <BackHeader navigate={navigate} />
      <TableFilter selected={selected} onChangeFilter={onChangeFilter} />
      <TableLaliga />
    </Card>
  );
}
export default LaLiga;
